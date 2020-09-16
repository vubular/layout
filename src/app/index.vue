<template>
	<div class="container is-fluid is-marginless" :style="containerStyle">
		<breadcrumbs>
			<template #breadcrumbs-right>
				<slot name="breadcrumbs-right"></slot>
			</template>
		</breadcrumbs>
		<slot>
			<router-view></router-view>
		</slot>
	</div>
</template>
<script>
import Breadcrumbs from "../breadcrumbs"
export default {
	name: 'App',
	components: { Breadcrumbs },
	data() {
		return {
			containerStyle: {
				height: 'auto'
			}
		}
	},
	mounted() {
		this.updateContentAreaHeight();
		this.$nextTick(function() {
			window.addEventListener('resize', this.updateContentAreaHeight);
		})
	},
	methods: {
		updateContentAreaHeight: function() {
			this.containerStyle.height = (window.innerHeight - 60) + 'px';
		}
	}
}
</script>
<style scoped>
	.container { display: flex; flex-direction: column; min-height: calc(100vh - 60px); overflow-y: auto; overflow-x: auto; padding: 30px; }
	@media screen and (max-width: 768px) { .content-area { overflow-x: hidden; } }
</style>