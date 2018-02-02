<template>
	<div class="edit" @click="edit">
		<div :class="titleClass">{{title}}</div>
		<div :class="inputClass">
			<input 
			class="input" 
			type="input" 
			v-focus="focusState" 
			name="title" 
			@blur="HandleInput" 
			@keyup.enter="HandleInput"
			v-model="newValue">
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: "EditInput",
		props: ['title'],
		data() {
			return {
				defaultValue: '请输入标题',
				newValue: '',
				titleClass: 'show',
				inputClass: 'hide',
				focusState: true
			}
		},
		created() {
		},
		methods: {
			edit() {
				this.titleClass = 'hide'
				this.inputClass = 'show'
			},
			HandleInput() {
				this.titleClass = 'show'
				this.inputClass = 'hide'
				if(this.newValue === '') {
					this.$emit('changeTitle', this.defaultValue)
				}else {					
					this.$emit('changeTitle', this.newValue)
				}
			}
		}
	}
</script>
<style type="text/css">
.edit {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	cursor: pointer;
}
.edit:hover {
	background: #ebf7ff;
}
.input {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 20px;
	border:0;
	outline: 1px dashed #ccc;
}
.hide {
	display: none;
}
.show {
	display: block;
}
</style>