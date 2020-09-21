<template>
	<div class="slideover-portal-wrapper" :class="{'slideover-in': visible}">
		<div class="bgshadow"></div>
		<div class="slideover-wrapper content-in" v-on-clickaway="closeSlideOver">
			<div class="title">
				<plain v-if="title">{{title}}</plain>
				<plain v-else>{{'Your attention is required' | translate}}</plain>
				<button type="button" class="button is-white is-pulled-right close-modal" @click="closeSlideOver">
					<i class="fa fa-times"></i>
				</button>
			</div>
			<portal-target name="slide-over"/>
		</div>
	</div>
</template>
<script>
	import { mixin as clickaway } from 'vue-clickaway';
	import { PortalTarget, MountingPortal } from 'portal-vue';
	export default {
		name: "SlideOver",
		props: ["title", "visible"],
		components: { PortalTarget, MountingPortal },
		mixins: [ clickaway ],
		methods: {
			closeSlideOver() {
				if(this.visible) {
					this.$emit("closed-slide-over");
				}
			}
		}
	}
</script>
<style scoped>
	.slideover-portal-wrapper { position: fixed; right: -100%; top:0; width: 100%; height: 100%; z-index: 999; }
	.slideover-portal-wrapper.slideover-in { right: 0 !important; }
	.slideover-portal-wrapper .bgshadow { position: absolute; top:0;left:0; width: 100%; height: 100%; background: #000; opacity: .3; z-index: 1; backdrop-filter: blur(20px); }
	.slideover-wrapper { min-width: 40%; height: 100%; background: #fff; position: absolute; top:0; right:-40%; z-index: 2; transition: right 0.35s ease-in-out; box-shadow: -5px 0px 15px rgba(0,0,0,.25);  }
	.slideover-wrapper.content-in { right:0; }

	.title { font-size: 20px; font-weight:300; padding: 20px; border-bottom: 1px solid #f1f0f0; color: #888; }
	.button.close-modal { margin-top: -19px; margin-right: -19px; font-size: 24px; color: #a2a2a2; }
	.button.close-modal:hover, .button.close-modal:active, .button.close-modal:focus { color: #636363; }
</style>