<template>
	<div class="navbar-brand is-hidden-mobile" style="margin:0 15px">
		<div class="navbar-item">
			<slot>
				<router-link v-if="routeInstalled" :to="brand.path" class="store-link" exact>
					<img v-if="!loading" :src="brand.logo" :alt="brand.name" class="w-100" />
				</router-link>
				<a v-else :href="brand.path" class="store-link">
					<img v-if="brand.logo && !loading" :src="brand.logo" :alt="brand.name" class="w-100" />
				</a>
			</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Brand',
		props: ["brand"],
		data() {
			return {
				loading: true
			}
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000)
		},
		computed: {
			routeInstalled() {
				return this.$route
			}
		}
	}
</script>
<style scoped>
	.w-100 { width: 100%; }
</style>