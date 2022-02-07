<template>
	<div class="columns is-multiline is-marginless">
		<div v-if="cannotSell" class="column is-12 notification is-warning py-5" :class="{'blink': isBlinking}">
			<span class="fa-stack fa-2x">
			  <i class="fal fa-cash-register fa-stack-1x"></i>
			  <i class="fas fa-ban fa-stack-2x stopStyle"></i>
			</span>
			Payments are not allowed until your last 
			<strong>Clearance Request</strong> will be Approved or request for Date adjust.
		</div>	
		<div class="column is-narrow" style="padding:0;padding-bottom:25px !important">
			<nav class="breadcrumb">
				<ul v-if="paths.length>0" class="is-narrow">
					<li v-for="(path, p) in paths" :key="p" :class="{'is-active': p==(paths.length-1)}">
						<router-link :to="path.path" class="is-capitalized">{{path.label}}</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<div v-if="hasBreadcrumbsRight" class="column" style="padding:0">
			<slot name="breadcrumbs-right"></slot>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'Breadcrumbs',
		data() { return { paths: [] } },
		beforeMount() { this.updateBreadcrumbs() },
		computed: { 
			...mapGetters("canvasOffcanvas", ["cannotSell", "isBlinking"]),
			hasBreadcrumbsRight() { return !!this.$slots["breadcrumbs-right"] }
		},
		methods: {
			updateBreadcrumbs: function() {
				this.paths = [];
				let paths = this.$route.path.substring(1).split("?").shift().split("/");
				let fullPath = "";
				paths.filter((p) => {
					if(p) { fullPath = fullPath + "/" + p; }
					this.paths.push({path: fullPath, label: p });
				});
			}
		},
		watch: {
			'$route.path': function() {
				this.updateBreadcrumbs()
			}
		}
	}
</script>
<style scoped>
	@keyframes blink {  
	  0% { background-color: #ffdd57; }
	  100% { background-color: black; }
	}
	@-webkit-keyframes blink {
	  0% { background-color: #ffdd57; }
	  100% { background-color: black; }
	}
	.blink {
	  -webkit-animation: blink 0.7s linear infinite;
	  -moz-animation: blink 0.7s linear infinite;
	  animation: blink 0.7s linear infinite;
	} 
	.stopStyle { opacity: 0.4; color: red; }
</style>