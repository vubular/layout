<template>
	<div class="vubular-layout">
		<sidebar></sidebar>
		<navbar></navbar>
		<breadcrumbs></breadcrumbs>
		<app></app>
	</div>
</template>
<script>
	import Sidebar from "./sections/Sidebar";
	import Navbar from "./sections/Navbar";
	import Breadcrumbs from "./sections/Breadcrumbs";
	import App from "./sections/App";
	export default {
		name: "VubularLayout",
		components: { Sidebar, Navbar, Breadcrumbs, App },
		props: {
			navigation: {
				type: Array,
				required: true
			}
		}
	}
</script>