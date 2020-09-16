<template>
	<div class="columns is-marginless">
		<div class="column is-narrow" style="padding:0;padding-bottom:25px !important">
			<nav class="breadcrumb">
				<ul v-if="paths.length>0" class="is-narrow">
					<li v-for="(path, p) in paths" :key="p" :class="{'is-active': p==(paths.length-1)}">
						<router-link :to="path.path" class="is-capitalized">{{path.label}}</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<div v-if="hasBreadcrumbsRight" class="column">
			<slot name="breadcrumbs-right"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Breadcrumbs',
		data() { return { paths: [] } },
		beforeMount() { this.updateBreadcrumbs() },
		computed: {
			hasBreadcrumbsRight() {
				return !!this.$slots.breadcrumbsRight
			}
		},
		methods: {
			updateBreadcrumbs: function() {
				let paths = this.$route.path.substring(1).split("?").shift().split("/");
				let fullPath = "";
				paths.filter((p) => {
					if(p) { fullPath = fullPath + "/" + p; }
					this.paths.push({path: fullPath, label: p });
				});
			}
		},
		watch: {
			'$route.params.path'() { this.updateBreadcrumbs() }
		}
	}
</script>