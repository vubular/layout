<template>
	<nav v-if="navigation" :class="sidebarClass" @mouseenter="focus" @mouseleave="blur">
		<div class="toggler">
			<button type="button" class="hamburger" @click="togglePinning">
				<i class="fal fa-bars"></i>
			</button>
			<p v-if="brand" class="brand" v-html="brand"></p>
		</div>
		<navigation :navigation="navigation" :theme="theme" :expanded="expandedState"></navigation>
		<p v-if="copyright" class="copyright" v-html="copyright"></p>
	</nav>
</template>
<script>
	import Navigation from "./Navigation";
	export default {
		name: "Sidebar",
		components: { Navigation },
		props: {
			navigation: Array,
			expanded: {
				type: Boolean,
				default: false
			},
			theme: {
				type: String,
				default: "dark"
			},
			brand: {
				type: String,
				default: null
			},
			copyright: {
				type: String,
				default: null
			}
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
				return this.expanded || this.focused || this.pinned
			},
			sidebarClass() {
				let sidebarClass = "sidebar " + this.theme;
				if(this.theme=='dark') { sidebarClass = "sidebar sidebar-dark"; }
				if(this.theme=='light') { sidebarClass = "sidebar sidebar-light"; }
				if(this.expandedState) { sidebarClass += " sidebar-expanded"; }

				return sidebarClass;
			}
		}
	}
</script>
<style scoped>
	nav.sidebar { width: 65px; height: 100%; }
	nav.sidebar.sidebar-expanded { width: 240px; }

	nav.sidebar { transition: width .45s; position: fixed; left: 0; top: 0; z-index: 9999; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);  }

	nav.sidebar.sidebar-light { background: #a7a6a6; }
	nav.sidebar.sidebar-dark { background: #2b323a; }

	nav.sidebar .toggler { height: 60px; overflow: hidden; border-bottom: 1px solid #26282a; }
	nav.sidebar .toggler button.hamburger { float: left; color:#fff; padding:11px 13px; margin:12px; border-radius:50%; transition: background-color .45s; background: none; border: 0; cursor: pointer; }
	nav.sidebar .toggler button.hamburger:hover { background-color: #000; }
	nav.sidebar .toggler button.hamburger:active, nav.sidebar button.hamburger:focus { outline: none; }
	nav.sidebar .toggler button.hamburger i.fa-bars { font-size: 18px; }
	nav.sidebar .toggler p.brand { float: left; color: #fff; margin-top: 20px; transition: all .45s; }

	nav.sidebar p.copyright { float: left; margin-top: 20px; transition: all .45s; }
	nav.sidebar.sidebar-dark p.copyright { color: #fff; }
	nav.sidebar.sidebar-light p.copyright { color: #2b323a; }
</style>