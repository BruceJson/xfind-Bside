<template>
	<div id="app" class='page_layout fixed_header'>
		<div class='layout_content'>
			<x-header v-if='$route.name !== "login"'></x-header>
			<x-body :class='{margin_top_0: $route.name==="login" }'></x-body>
			<x-footer v-if='$route.name !== "login"'></x-footer>
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
	}
}

</script>
<style>


</style>
