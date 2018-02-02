<template>
	<div class="list">
		<div class="list-container">
			<table class="table">
				<tr>
					<td width="5%"><input type="checkbox" name=""></td>
					<td width="">章节</td>
					<td width="10%">状态</td>
					<td width="20%">操作</td>
					<td width="10%"><a href="/#/n" class="newBank">新建题库</a></td>
				</tr>
				<tr v-for="item in lists">
					<td><input type="checkbox" name=""></td>
					<td>{{item.title}}</td>
					<td>{{item.status}}</td>
					<td colspan="2">
						<Button type="warning" title="编辑"></Button>
						<Button type="error" title="删除"></Button>
						<Button type="success" title="查看"></Button>
					</td>
				</tr>
			</table>
		</div>
	</div>
	
</template>
<script type="text/javascript">

import Button from '@/components/button'
	export default {
		name: "List",
		data() {
			return {
				lists: []
			}
		},
		components: {
			Button
		},
		mounted() {
			this.lists = this.loadData()
		},
		methods: {
			loadData() {
				return [{
					title: '第一章  力',
					status: '已发布'
				},{
					title: '第二章  直线运动',
					status: '已发布'
				},{
					title: '第三章  牛顿运动定律',
					status: '已发布'
				},{
					title: '第四章  物体的平衡',
					status: '已发布'
				},{
					title: '第五章  曲线运动',
					status: '已发布'
				},{
					title: '第六章  万有引力定律',
					status: '已发布'
				},{
					title: '第七章  机械能',
					status: '已发布'
				},{
					title: '第八章  动量',
					status: '已发布'
				},{
					title: '第九章  机械运动',
					status: '已发布'
				},{
					title: '第十章  机械波',
					status: '已发布'
				},{
					title: '第十一章  分子热运动 能量守恒',
					status: '已发布'
				},{
					title: '第十二章  固体、液体和气体',
					status: '已发布'
				},{
					title: '第十三章  电场',
					status: '已发布'
				}];
			}
		}
	}
</script>

<style type="text/css">
.list {
	width: 100%;
}
.list-container {
	width: 1000px;
	margin: 0 auto;
	box-shadow: 0 0 1rem #aaa;
}
.table {
	width: 100%;
	border-collapse:collapse;
	border: 1px solid #eee;
	background: white;
}
.table tr {
	height: 60px;
}
.table tr:nth-child(1) {
	background: #f8f8f9;
}
.table tr:nth-child(1) td {
	font-size: 16px;
	font-weight: 400;
}
.table tr:nth-child(1):hover {
	background: #f8f8f9;
}
.table tr:hover {
	background-color: #ebf7ff;
}
.table tr td:nth-child(1) {
	text-align: center;
}
.table tr td {
	font-size: 16px;
	font-weight: 300;
	text-align: left;
	white-space: nowrap;
  	overflow: hidden;
}
.newBank {
	text-decoration: none;
	color: white;
	padding: 6px 12px;
	font-size: 14px;
	border-radius: 5px;
	background: #ee7419;
}
.newBank::before{ 
	content:"+";
}
</style>