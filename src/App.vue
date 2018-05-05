<template>
	<div id="app" class='page_layout fixed_header'>
		<div class='layout_content'>
			<x-header v-if='$route.name && ($route.name.indexOf("login") === -1)'></x-header>
			<x-body :class='{margin_top_0: $route.name && ($route.name.indexOf("login") > -1) }'></x-body>
			<x-footer v-if='$route.name && ($route.name.indexOf("login") === -1)'></x-footer>
		</div>
	</div>
</template>
<script>
import XHeader from '@/views/layout/xheader';
import XBody from '@/views/layout/xbody';
import XFooter from '@/views/layout/xfooter';
export default {
	name: 'App',
	components: {
		XHeader,
		XBody,
		XFooter
	},
	data() {
		console.log(this.$router, this.$route);
		return {};
	}
}

</script>
<style>


</style>
