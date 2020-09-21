<template>
	<div class="vubular-layout-container">
		<sidebar
			:brand="brand"
			:preferences="preferences"
			:navigation="navigation"
			@pinned="sidebarPinned"
			@unpinned="sidebarUnpinned"
			v-on="$listeners"
			>
		</sidebar>
		<div
			id="app-section"
			:class="{'sidebar-set': sidebarSet, 'sidebar-pinned': sidebarIsPinned}"
			>
			<navbar
				:brand="brand"
				:account="account"
				v-on="$listeners"
				>
				<template #brand>
					<slot name="brand"></slot>
				</template>
				<template #search>
					<slot name="search"></slot>
				</template>
				<template #support-trigger="{ focus }">
					<slot name="support-trigger" v-bind="{ focus }"></slot>
				</template>
				<template #support>
					<slot name="support"></slot>
				</template>
				<template #launcher-trigger="{ focus }">
					<slot name="launcher-trigger" v-bind="{ focus }"></slot>
				</template>
				<template #launcher>
					<slot name="launcher"></slot>
				</template>
				<template #notifications-trigger="{ focus }">
					<slot name="notifications-trigger" v-bind="{ focus }"></slot>
				</template>
				<template #notifications>
					<slot name="notifications"></slot>
				</template>
				<template #account-trigger="{ focus }">
					<slot name="account-trigger" v-bind="{ focus }"></slot>
				</template>
				<template #account>
					<slot name="account"></slot>
				</template>
			</navbar>
			<app
				v-on="$listeners"
				>
				<template #breadcrumbs-right>
					<slot name="breadcrumbs-right"></slot>
				</template>
				<template #default><slot name="app"></slot></template>
			</app>
		</div>
		<layout-modal :visible="modalIn" v-on="$listeners"/>
		<layout-slide-over :visible="slideOverIn" v-on="$listeners"/>
	</div>
</template>
<script>
	import Sidebar from "./sidebar";
	import Navbar from "./navbar";
	import App from "./app";

	import LayoutModal from "./portals/Modal";
	import LayoutSlideOver from "./portals/SlideOver";
	export default {
		name: "VubularLayout",
		components: { Sidebar, Navbar, App, LayoutModal, LayoutSlideOver },
		props: {
			brand: Object,
			navigation: Array,
			preferences: Object,
			account: Object,
			modalIn: Boolean,
			slideOverIn: Boolean
		},
		data() {
			return {
				sidebarIsPinned: false
			}
		},
		methods: {
			sidebarPinned() { this.sidebarIsPinned = true; },
			sidebarUnpinned() { this.sidebarIsPinned = false; }
		},
		computed: {
			sidebarSet() {
				return this.navigation && Array.isArray(this.navigation) && this.navigation.length>0
			}
		},
		mounted() { this.$emit("mounted") }
	}
</script>
<style scoped>
	.vubular-layout-container #app-section { transition: padding .30s; background: #f7f7f7; }
	.vubular-layout-container #app-section.sidebar-set { padding-left: 65px; }
	.vubular-layout-container #app-section.sidebar-pinned { padding-left: 240px; }
</style>