<template>
	<div class="navbar-brand" style="margin:0 15px">
		<div class="navbar-item">
			<slot>
				<router-link :to="brand.path" class="store-link" exact>
					<img :src="brand.logo" :alt="brand.name" />
				</router-link>
			</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Brand',
		props: ["brand"]
	}
</script>