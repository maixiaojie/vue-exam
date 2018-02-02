<template>
	<div class="header">
		<a class="title" :href="router">高中物理在线测评系统({{title}}端)</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'Header',
		props: ['title','router'],
		data() {
			return {
			}
		}
	}
</script>
<style type="text/css">
.header{
	width: 100%;
	height: 65px;
	line-height: 65px;
	text-align: left;
	background: #ee7419;
}
.header a {
	color: white;
	text-decoration: none;
}
.header .title {
	font-size: 20px;
	position: relative;
}
.header .title:before {
	content: "?";
	display: inline-block;
	width: 2.0rem;
	height: 2.0rem;
	margin-left: 8rem;
	margin-right: 1rem;
	text-align: center;
	line-height: 2.0rem;
	color: #ee7419;
	border-radius: 1.25rem;
	background-color: #fff;
}
</style>