<template>
	<div class="navbar-start" style="width:50%">
		<div class="navbar-item" style="width:100%">
			<div class="field" style="margin:7px 10px;width:100%">
				<div class="control">
					<slot name="search">
						<input class="input is-medium" type="text" placeholder="Search...">
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Search"
	}
</script>
<style scoped>
	h3.bname { font-weight: 200; padding: 0; margin: 0; }
	>>> .dropdown-content { max-height: 400px !important; }
	>>> a.dropdown-item:not(:last-of-type) { border-bottom: 1px solid #f8f8f8; }
	>>> a.dropdown-item.is-hovered { background: #292929; color: whitesmoke; }
	>>> a.dropdown-item.is-hovered h3 { color: whitesmoke; }
	.iconBg:first-child { background: #737373; }
	.masterFocus { background: #292929; color: whitesmoke; }
</style>