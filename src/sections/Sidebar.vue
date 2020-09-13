<template>
	<nav class="sidebar">
		<div class="brand-toggler">
			<button class="hamburger">
				<i class="fal fa-bars"></i>
			</button>
			<p class="brand"></p>
		</div>
	</nav>
</template>
<script>
	export default {
		name: "Sidebar"
	}
</script>
<style scoped>
	nav.sidebar { transition: width .45s; position: fixed; left: 0; top: 0; z-index: 9999; width: 65px; height: 100%; background: #2b323a; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);  }
	nav.sidebar.is-pinned, nav.sidebar.is-focused { width: 240px; }
	nav.sidebar button.hamburger { float: left; color:#fff; padding:11px 13px; margin:12px; border-radius:50%; transition: background-color .45s; background: none; border: 0; cursor: pointer; }
	nav.sidebar button.hamburger:hover { background-color: #000; }
	nav.sidebar button.hamburger:active, nav.sidebar button.hamburger:focus { outline: none; }
	nav.sidebar button.hamburger i.fa-bars { font-size: 18px; }
	nav.sidebar p.brand { float: left; color: #fff; margin-top: 20px; transition: all .45s; }
	nav.sidebar .brand-toggler { height: 60px; overflow: hidden; border-bottom: 1px solid #26282a; }
</style>