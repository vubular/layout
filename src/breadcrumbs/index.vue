<template>
	<div class="columns is-multiline is-marginless">
		<div v-if="false" class="column is-12 notification is-warning py-5 blink">
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
	import { mapActions, mapGetters } from 'vuex';
	export default {
		name: 'Breadcrumbs',
		data() { return { paths: [] } },
		beforeMount() { this.updateBreadcrumbs() },
		mounted() {
			this.checkIfCanSell();
		},
		computed: { 
			...mapGetters("canvasOffcanvas", ["cannotSell"]),
			hasBreadcrumbsRight() { return !!this.$slots["breadcrumbs-right"] }
		},
		methods: {
			...mapActions("canvasOffcanvas", ["stopSelling", "startSelling"]),
			checkIfCanSell() {
				this.database()
					.ref("clearancerequests", "accounting")
					.where([{field: "user.value", value: this.currentUser.id}])
					.with("specification")
					.paginate(1, 1, true)
					// .with("specification,user")
					.once()
					.then((response) => {
						if(response.data) {
							console.log(response.data.data[0]);
							console.log(response.data.data[0].specification.end_date>=this.dayjs().format("YYYY-MM-DD"));
							if(response.data.data[0].specification.end_date>=this.dayjs().format("YYYY-MM-DD")) {	
								this.stopSelling();
							}
						}
					})
			},
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
</style>