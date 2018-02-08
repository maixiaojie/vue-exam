<template>
	<div :class="isShow">
		<div class="shade">
		</div>
		<div class="modalContainer">
			<div class="modalHeader">
				<span class="title">{{title}}</span>
				<span class="close" @click="close">X</span>
			</div>
			<div class="modalBody">
				<div class="tips fonttip">分别在下面的输入框中输入问题的名称以及选项，并且设置正确的选择。</div>
				<div class="item">
					<label>题目:</label>
					<input class="questionInput" type="input" name="issue" v-model="question.issue">
				</div>
				<div class="item" v-for="(item, index) in question.selector">
					<label>选项{{index+1}}:</label>
					<input 
					:class="item.isRight === 1 ? 'right': ''" 
					type="input" 
					name="selector"
					v-model="item.val" />
					<span 
						class="setting" 
						@click="toogleAnswer(index)">
					{{item.isRight === 0 ? setRight: cancelRight}}</span>
					<span @click="delSelector(index)" class="delFlag" title="删除该选项">&minus;</span>
				</div>
				<div class="item fonttip">
					<Button @click="addSelector" type="success" title="+添加选项"></Button>
					<Button @click="delAllSelector" type="error" title="-删除所有选项"></Button>
					你设置的正确答案选项为：{{answer}}
				</div>
				<div class="item-no-label">
					<Button @click="save" type="success" title="保存"></Button>
					<Button @click="close" type="warning" title="取消"></Button>
				</div>
			</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	import Button from '@/components/button'
	export default {
		name: 'Modal',
		props: ['title','show'],
		data() {
			return {
				isShow: 'm-hide',
				setRight: '设为正确答案',
				cancelRight: '设为错误答案',
				answer: [],
				question: {
					issue: '',
					selector: [{
						val: '',
						isRight: 0
					},{
						val: '',
						isRight: 0
					},{
						val: '',
						isRight: 0
					}]
				}
			}
		},
		computed: {
			
		},
		created() {
		},
		components: {
			Button
		},
		watch: {
			show: function(val) {
				this.isShow =  val ? 'm-show' : 'm-hide'
			},
			'question.selector': {
				handler(val, old) {
					let answer = []
					val.forEach((e,i) => {
						if(e.isRight === 1) {
							answer.push(i)
						}
					})
					this.answer = answer
				},
				deep: true
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},
			save() {
				//缺少表单验证
				//将录入的数据传给父组件
				this.$emit('getData', this.question)
				this.$emit('close')
			},
			toogleAnswer(index) {
				var oldValue = this.question.selector[index].isRight
				if(oldValue === 0) {
					this.question.selector[index].isRight = 1
				}else {
					this.question.selector[index].isRight = 0
				}
			},
			/**
			 * [addSelector 添加选项]
			 */
			addSelector() {
				this.question.selector.push({
					val: '',
					isRight: 0
				})
			},
			/**
			 * [delSelector 删除地index个选项]
			 * @param  {[type]} index [description]
			 * @return {[type]}       [description]
			 */
			delSelector(index) {
				this.question.selector.splice(index, 1)
			},
			delAllSelector() {
				this.question.selector = []
			},
			/**
			 * [isInArray val是否在数组arr中]
			 * @param  {[type]}  val [description]
			 * @param  {[type]}  arr [description]
			 * @return {Boolean}     [description]
			 */
			isInArray(val, arr) {
				if(arr.length === 0) {
					return false
				}else {
					for(var i=0; i<arr.length; i++) {
						if(val === arr[i]) {
							return true
						}						
					}
					return false
				}
			},
			/**
			 * [removeByVal 从数组arr中删除val]
			 * @param  {[type]} val [description]
			 * @param  {[type]} arr [description]
			 * @return {[type]}     [description]
			 */
			removeByVal(val, arr) {
				for(var i=0; i<arr.length; i++) {
				    if(arr[i] == val) {
				      	arr.splice(i, 1)
				      	break
				    }
				}
			}
		}
	}
</script>
<style type="text/css">
.shade {
	width: 100%;
	height: 100%;
	top: 0;
  	left: 0;
	position: fixed;
	background: black;
	opacity: .3;
}
.modalContainer {
	z-index: 2;
	position: fixed;
	top: 20%;
  	left: 25%;
	width: 50%;
	max-height: 60%;
	padding-bottom: 20px;
  	border-radius: .5rem;
  	box-shadow: 0 0 5px #555;
  	background-color: #fff;
  	overflow: auto;
}
.modalHeader {
	width: 96%;
	height: 40px;
	padding:0 2% ;
	line-height: 40px;
  	border-radius: .5rem;
  	background-color: #f7f7f7;
}
.modalHeader .title{
	float: left;
	font-size: 14px;
	font-weight: 400;
}
.modalHeader .close{
	float: right;
	cursor: pointer;
}
.modalHeader .close:hover{
	transform: rotate(90deg);
	color:#19be6b;
}
.modalBody {
	width: 96%;
	padding:0 2% ;
}
.modalBody .item {
	width: 100%;
	margin: 10px 0;
	text-align: left;
}
.modalBody .item label{
	width: 10%;
	display: inline-block;
	color: #495060;
	font-size: 14px;
}
.modalBody .item input{
	width: 60%;
	height: 25px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
	border: 1px solid #dddee1;
  	border-radius: 4px;
  	color: #495060;
}
.modalBody .item input.questionInput {
	outline: 0;
	/*border-color: #f90;*/
}
.modalBody .item input:focus{
	outline: 0;
	border-color: #57a3f3;
	box-shadow: 0 0 0 1px rgba(45,140,240,.2);
}
.modalBody .item input:hover{
	border-color: #57a3f3;
}
.modalBody .item input.right{
	outline: 0;
	border-color: #19be6b;
    box-shadow: 0 0 0 1px rgba(45,140,240,.2);
}
.modalBody .item-no-label {
	margin-left: 25%;
	height: 35px;
}
.modalBody .setting {
	font-size: 12px;
	user-select: none;  
	cursor: pointer;
	margin-left: 5px;
}
.m-show {
	display: block;
}
.m-hide {
	display: none;
}
.tips {
	width: 96%;
	padding:10px 2% ;
	margin: 10px 0;
	text-align: left;
	border-left: 5px solid #19be6b;
	background: #ececec;
}
.fonttip {
	font-size: 14px;
	color: #495060;
}
.delFlag {
	width: 30px;
	cursor: pointer;
	text-align: center;
	display: inline-block;
}
</style>