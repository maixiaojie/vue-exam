<template>
	<div>
		<Header router="/#/" title="学生"></Header>
		<SList style="margin-top:50px;"></SList>
	</div>
</template>
<script type="text/javascript">
import SList from '@/components/list/sList'
import Header from '@/components/header/header'
	export default {
		name: 'pageStudent',
		data() {
			return {

			}
		},
		components: {
			SList,
			Header
		}
	}
</script>