<template>
	
		<span class="button" @click="click" :class="[type]">{{title}}</span>

</template>
<script type="text/javascript">
	export default {
		name: 'Button',
		props: ['title', 'type'],
		data() {
			return {
			}
		},
		methods: {
			click() {
				this.$emit('click')
			}
		}
	}
</script>
<style type="text/css">
.button{
	padding:4px 8px;
	cursor: pointer;
	margin-right: 5px;
	/*margin: 0 5px;*/
	float: left;
	text-align: center;
	border-radius: 5px;
	color: white;
	font-size: 12px;
}
.default {
	background: #f7f7f7;
	color: #495060;
}
.warning {
	color: #fff;
	background-color: #f90;
}
.error {
  color: #fff;
  background-color: #ed3f14;
}
.success {
	background: #19be6b;
	color: #fff;
}
</style>