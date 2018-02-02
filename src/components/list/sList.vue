<template>
	<div class="list">
		<div class="list-container">
			<table class="table">
				<tr>
					<td width="5%"><input type="checkbox" name=""></td>
					<td width="">章节</td>
					<td width="10%">状态</td>
					<td width="10%">操作</td>
				</tr>
				<tr v-for="item in lists">
					<td><input type="checkbox" name=""></td>
					<td>{{item.title}}</td>
					<td>{{item.status}}</td>
					<td>
						<Button type="warning" title="答题"></Button>
					</td>
				</tr>
			</table>
		</div>
	</div>
	
</template>
<script type="text/javascript">

import Button from '@/components/button'
	export default {
		name: "SList",
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
					title: '啦啦啦啦啦',
					status: '已发布'
				},{
					title: '啦啦啦啦啦',
					status: '已发布'
				},{
					title: '啦啦啦啦啦',
					status: '已发布'
				},{
					title: '啦啦啦啦啦',
					status: '已发布'
				},{
					title: '啦啦啦啦啦',
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