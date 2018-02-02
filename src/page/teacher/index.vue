<template>
	<div>
		<Header router="/#/t" title="教师"></Header>
		<router-view style="margin-top:50px;margin-bottom:50px;" />	
	</div>
</template>
<script type="text/javascript">
import Header from '@/components/header/header'
	export default {
		name: 'pageTeacher',
		data() {
			return {

			}
		},
		components: {
			Header
		}
	}
</script>