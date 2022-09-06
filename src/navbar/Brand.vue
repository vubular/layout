<template>
	<div class="navbar-brand is-hidden-mobile" style="margin:0 15px">
		<div class="navbar-item">
			<slot>
				<router-link v-if="routeInstalled" :to="brand.path" class="store-link" exact>
					<img :src="brand.logo" :alt="brand.name" />
				</router-link>
				<a v-else :href="brand.path" class="store-link">
					<img v-if="brand.logo" :src="brand.logo" :alt="brand.name" />
				</a>
			</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Brand',
		props: ["brand"],
		computed: {
			routeInstalled() {
				return this.$route
			}
		}
	}
</script>
