<template>
	<div class="line" :class="lineClass"></div>
</template>
<script type="text/javascript">
	export default {
		name: 'ELine',
		props: ['size', 'type', 'status'],
		data() {
			return {
				lineClass: ['defaultLine']
			}
		},
		created() {
			switch(this.size) {
				case 'default': this.lineClass.push('defaultSize');break;
				case 'middle': this.lineClass.push('middleSize');break;
				case 'big': this.lineClass.push('bigSize');break;
				default: break;
			}
			switch(this.type) {
				case 'dashed': this.lineClass.push('linedashed');break;
				case 'solid': this.lineClass.push('linesolid');break;
				default: break;
			}
			switch(this.status) {
				case 'success': this.lineClass.push('linesuccess');break;
				case 'default': this.lineClass.push('linedefault');break;
				case 'warning': this.lineClass.push('linewarning');break;
				case 'error': this.lineClass.push('lineerror');break;
				default: break;
			}
			
		}
	}
</script>
<style type="text/css">
.line {
	width: 100%;
	padding-top: 10px;
}
.defaultLine {
	border-bottom: 1px solid #eee;
}
.defaultSize {
	border-bottom-width: 1px;
}
.middleSize {
	border-bottom-width: 2px;
}
.bigSize {
	border-bottom-width: 3px;
}
.linedashed {
	border-bottom-style: dashed;
}
.linesolid {
	border-bottom-style:solid;
}
.linesuccess {
	border-bottom-color: #19be6b;
}
.linedefault {
	border-bottom-color: #eee;
}
.linewarning {
	border-bottom-color: #f90;
}
.lineerror {
  border-bottom-color: #ed3f14;
}
</style>