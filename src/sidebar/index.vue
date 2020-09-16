<template>
	<nav v-if="navigation" :class="sidebarClass" @mouseenter="focus" @mouseleave="blur">
		<slot>
			<div class="toggler">
				<button type="button" class="hamburger" @click="togglePinning">
					<i class="fal fa-bars"></i>
				</button>
				<p v-if="brand && brand.name" class="brand" v-html="brand.name"></p>
			</div>
			<navigation :navigation="navigation" :theme="theme" :expanded="expandedState"></navigation>
			<p v-if="brand && brand.copyright" class="copyright" v-html="brand.copyright"></p>
		</slot>
	</nav>
</template>
<script>
	import Navigation from "./Navigation";
	export default {
		name: "Sidebar",
		components: { Navigation },
		props: {
			navigation: Array,
			brand: Object,
			preferences: Object
		},
		data() {
			return {
				focused: false,
				pinned: false
			}
		},
		methods: {
			focus() {
				this.focused = true;
			},
			blur() {
				this.focused = false;
			},
			togglePinning() {
				this.pinned = !this.pinned;
				if(this.pinned) {
					this.$emit("pinned");
					this.focus();
				} else {
					this.$emit("unpinned");
					this.blur();
				}
			}
		},
		computed: {
			expandedState() {
				let expanded = false;
				if(this.preferences && this.preferences.sidebar && this.preferences.sidebar.expanded) {
					expanded = true;
				}
				return expanded || this.focused || this.pinned
			},
			sidebarClass() {
				let sidebarClass = "sidebar ";
				if(this.theme=='dark') { sidebarClass = "sidebar sidebar-dark"; }
				if(this.theme=='light') { sidebarClass = "sidebar sidebar-light"; }
				if(this.expandedState) { sidebarClass += " sidebar-expanded"; }

				return sidebarClass;
			},
			theme() {
				return this.preferences && this.preferences.theme ? this.preferences.theme : "dark";
			}
		}
	}
</script>
<style scoped>
	nav.sidebar { width: 65px; height: 100%; }
	nav.sidebar.sidebar-expanded { width: 240px; }

	nav.sidebar { transition: width .30s; position: fixed; left: 0; top: 0; z-index: 9999; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);  }

	nav.sidebar.sidebar-light { background: #a7a6a6; }
	nav.sidebar.sidebar-dark { background: #2b323a; }

	nav.sidebar .toggler { height: 60px; overflow: hidden; border-bottom: 1px solid #26282a; }
	nav.sidebar .toggler button.hamburger { float: left; color:#fff; padding:11px 13px; margin:12px; border-radius:50%; transition: background-color .30s; background: none; border: 0; cursor: pointer; }
	nav.sidebar .toggler button.hamburger:hover { background-color: #000; }
	nav.sidebar .toggler button.hamburger:active, nav.sidebar button.hamburger:focus { outline: none; }
	nav.sidebar .toggler button.hamburger i.fa-bars { font-size: 18px; }
	nav.sidebar .toggler p.brand { float: left; color: #fff; margin-top: 20px; transition: all .30s; }

	nav.sidebar p.copyright { float: left; margin-top: 20px; transition: all .30s; }
	nav.sidebar.sidebar-dark p.copyright { color: #fff; }
	nav.sidebar.sidebar-light p.copyright { color: #2b323a; }
</style>