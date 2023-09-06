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
		<div class="company">
			<p class="has-text-grey has-text-centered">
				© {{ currentYear }}. ALL RIGHTS RESERVED. POWERED BY ALBISMART. 
				<span>
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="48.391px" height="68.399px" viewBox="0 0 48.391 68.399" enable-background="new 0 0 48.391 68.399" xml:space="preserve">
						<g>
							<path fill="#00AEEF" d="M19.754,57.026c-2.357,0.795-4.385,2.523-5.493,4.943l-0.821,1.986c-0.617,1.486-0.543,3.082,0.065,4.443
								c3.992-2.561,8.072-3.287,11.777-3.084C22.979,63.251,20.95,60.548,19.754,57.026z"/>
							<path fill="#00AEEF" d="M48.324,58.128C48.245,49.313,37.767,34.353,34.91,21.79c-0.771-3.391-0.997-6.939-0.33-10.75
								c0.883-4.078,2.923-7.342,5.435-10.318c-0.433,0.244-0.836,0.541-1.197,0.896V1.616h-0.002l-9.066,9.02
								c-3.876,3.955-4.853,6.797-5.503,8.688c-0.565,2.068-1.894,6.912,1.772,15.504c2.752,6.445,6.529,12.287,10.329,18.113
								c3.746,6.34,3.07,8.047,2.455,9.52l1.749,0.729c0.732,0.305,1.494,0.438,2.24,0.424c0.077,0,0.154-0.002,0.233-0.006l0,0
								c2.083-0.119,4.017-1.391,4.873-3.443C48.176,59.497,48.309,58.808,48.324,58.128z"/>
							<path fill="#662D91" d="M36.348,52.94c-3.688-5.654-7.351-11.32-10.077-17.541l-0.005-0.006c0,0,3.222,8.439,4.592,14.746
								l-3.184-1.326c-3.738-1.557-8.029,0.213-9.585,3.951l-3.961,9.504c1.978-4.746,7.429-6.99,12.175-5.016l12.5,5.207
								C39.418,60.987,40.094,59.28,36.348,52.94z"/>
							<path fill="#00AEEF" d="M48.391,5.604l-0.004-0.002c-0.003-2.193-1.302-4.277-3.457-5.176c-0.423-0.176-0.875-0.295-1.31-0.363
								c-0.328,0.904-0.577,1.639-0.758,2.711c-0.221,1.305-0.361,2.67-0.409,4.066c0.022,5.752,2.405,11.934,5.906,19.936
								C48.366,24.171,48.391,5.864,48.391,5.604z"/>
							<path fill="#00AEEF" d="M14.367,52.282L3.46,47.739c-2.865-1.193-4.22-4.482-3.026-7.348c0.256-0.613,0.613-1.15,1.037-1.615
								c0.077-0.066,14.508-14.445,14.508-14.445S5.413,35.958,14.367,52.282z"/>
							<path fill="#662D91" d="M21.078,21.962c-1.64-0.041-3.293,0.559-4.541,1.813l-0.599,0.6c-0.352,0.404-3.052,3.621-4.402,8.799
								c4.346-0.418,8.163,0.518,11.394,2.057C21.155,31.552,20.163,27.099,21.078,21.962z"/>
							<path fill="#662D91" d="M34.589,11.044c-0.028,0.152-0.057,0.305-0.082,0.459c-0.574,3.635-0.336,7.033,0.403,10.287
								c0.491,2.162,1.21,4.396,2.061,6.66c0.063,0.141,0.013-0.004-0.214-0.58c-1.88-4.807,2.755-15.59,5.99-17.488
								c-0.187-1.205-0.289-2.383-0.294-3.541c0.048-1.396,0.188-2.762,0.409-4.066c0.181-1.072,0.43-1.807,0.758-2.711
								c-1.258-0.191-2.522,0.055-3.599,0.66C37.51,3.702,35.471,6.966,34.589,11.044z"/>
						</g>
					</svg>
				</span>
			</p>
		</div>
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
	},
	computed: {
		currentYear() {
			return this.dayjs().format("YYYY");
		}
	}
}
</script>
<style scoped>
	.container { display: flex; flex-direction: column; min-height: calc(100vh - 60px); overflow-y: auto; overflow-x: auto; padding: 30px; }
	@media screen and (max-width: 768px) { .content-area { overflow-x: hidden; } }
	.company { margin-top: 15px; }
	.company svg { width: 15px; height: 15px; line-height: 15px; }
	.company p { height: 15px; line-height: 15px; }
</style>