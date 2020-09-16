<template>
	<nav class="navbar">
		<brand :brand="brand" v-on="$listeners">
			<template #brand><slot name="brand"></slot></template>
		</brand>
		<search :search="search" v-on="$listeners">
			<template #search><slot name="search"></slot></template>
		</search>
		<launcher :launcher="launcher" v-on="$listeners">
			<template #support-trigger="{ focus }"><slot name="support-trigger" v-bind="{ focus }"></slot></template>
			<template #support><slot name="support"></slot></template>
			<template #launcher-trigger="{ focus }"><slot name="launcher-trigger" v-bind="{ focus }"></slot></template>
			<template #launcher><slot name="launcher"></slot></template>
			<template #notifications-trigger="{ focus }"><slot name="notifications-trigger" v-bind="{ focus }"></slot></template>
			<template #notifications><slot name="notifications"></slot></template>
		</launcher>
		<account :account="account" v-on="$listeners">
			<template #account-trigger="{ focus }"><slot name="account-trigger" v-bind="{ focus }"></slot></template>
			<template #account><slot name="account"></slot></template>
		</account>
	</nav>
</template>
<script>
	import Brand from "./Brand";
	import Search from "./Search";
	import Launcher from "./Launcher";
	import Account from "./Account";
	export default {
		name: "Navbar",
		components: { Brand, Search, Launcher, Account },
		props: {
			brand: Object,
			search: Object,
			launcher: Object,
			account: Object
		}
	}
</script>
<style scoped>
	nav.navbar { height: 60px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33); }
	.background-primary-sidebar { background-color: #2b323a; }
	.background-primary-sidebar a { color: #fff; padding: 20px; font-size: 1em; }
	.background-primary-sidebar a:not(i) { color: #a7a6a6;  }

	.navbar-link.is-active,
	.background-primary-sidebar a.focus,
	.background-primary-sidebar a:hover,
	.background-primary-sidebar a.is-active,
	.background-primary-sidebar a:focus-within { background-color: #23282e!important;  }

	.fade-enter-active, .fade-leave-active { transition: opacity .5s; }
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ { opacity: 0; }

	.columns { margin: 0; width: 100%; }
	.columns .column { padding:0; }
</style>