<template>
	<div class="vubular-layout">
		<sidebar :navigation="navigation" v-on="$listeners"></sidebar>
		<navbar v-on="$listeners"></navbar>
		<breadcrumbs v-on="$listeners"></breadcrumbs>
		<app v-on="$listeners">

		</app>
	</div>
</template>
<script>
	import Sidebar from "./sidebar";
	import Navbar from "./navbar";
	import Breadcrumbs from "./breadcrumbs";
	import App from "./app";
	export default {
		name: "VubularLayout",
		components: { Sidebar, Navbar, Breadcrumbs, App },
		props: {
			navigation: Array
		}
	}
</script>