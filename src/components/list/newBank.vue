<template>
	<div class="container">
		<div class="newBankContainer">
			<EditInput :title="title" @changeTitle="showTitle"></EditInput>
			<ELine size="middle" type="solid" status="default"></ELine>
			<div class="questions">
				<div class="questionType" :style="{'height': questionTypeHeight + 'px'}">
					<Button class="mt" type="default" @click="openDXmodal" title="单选试题"></Button>
					<Button class="mt" type="default" title="多选试题"></Button>
				</div>
				<div class="addBank" @click="toggleSelectType">+添加问题</div>
			</div>
			<div class="operation">
				<Button type="success" title="保存问卷"></Button>
				<Button type="warning" title="发布问卷"></Button>
			</div>
		</div>
		<Modal 
			title="提示" 
			:show="isDXModalShow"
			@close="closeDX"
			></Modal>
	</div>
</template>
<script type="text/javascript">
import EditInput from '@/components/editInput'
import ELine from '@/components/line'
import Button from '@/components/button'
import Modal from '@/components/modal'
	export default {
		name: "newBank",
		data() {
			return {
				title: '请输入标题',
				isDXModalShow: false,
				questionTypeHeight: 0
			}
		},
		components: {
			EditInput,
			ELine,
			Button,
			Modal
		},
		methods: {
			showTitle(val) {
				this.title = val;
			},
			openDXmodal() {
				this.isDXModalShow = true
			},
			toggleSelectType() {
				this.questionTypeHeight = this.questionTypeHeight === 50 ? 0 : 50
			},
			closeDX() {
				this.isDXModalShow = false
				this.$toast('关闭')
			}
		}
	}
</script>
<style type="text/css">
.container {
	width: 100%;
}
.mt {
	margin-top: 20px;
}
.newBankContainer {
	width: 940px;
	padding: 30px;
	margin: 0 auto;
	background: white;
	box-shadow: 0 0 1rem #aaa;
}
.questions {
	width: 100%;
}
.questionType {
	width: 100%;
	margin: 15px 0;
	transition: height .4s; 
	overflow: hidden;
}
.addBank {
	width: 100%;
	height: 60px;
	margin-top: 15px;
	cursor: pointer;
	line-height: 60px;
	background: #ebf7ff;
	border: 1px solid #3af7bb;
}
.operation {
	width: 100%;
	margin: 15px 0;
	height: 30px;

}
</style>