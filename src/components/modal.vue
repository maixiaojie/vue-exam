<template>
	<div :class="isShow">
		<div class="shade">
		</div>
		<div class="modalContainer">
			<div class="modalHeader">
				<span class="title">{{title}}</span>
				<span class="close" @click="close">X</span>
			</div>
			<div class="modalBody">aa</div>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		name: 'Modal',
		props: ['title','show'],
		data() {
			return {
				isShow: 'm-hide'
			}
		},
		created() {
		},
		watch: {
			show: function(val) {
				this.isShow =  val ? 'm-show' : 'm-hide'
			}
		},
		methods: {
			close() {
				this.$emit('close')
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
	height: 50%;
  	border-radius: .5rem;
  	box-shadow: 0 0 5px #555;
  	background-color: #fff;
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
	width: 100%;
}
.m-show {
	display: block;
}
.m-hide {
	display: none;
}
</style>