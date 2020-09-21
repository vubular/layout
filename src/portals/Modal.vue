<template>
	<div class="modal-portal-wrapper" :class="{'modal-in': visible}">
		<div class="bgshadow"></div>
		<div class="modal-wrapper" v-on-clickaway="closeModal">
			<div class="title">
				<plain v-if="title">{{title}}</plain>
				<plain v-else>{{'Your attention is required' | translate}}</plain>
				<button type="button" class="button is-white is-pulled-right close-modal" @click="closeModal">
					<i class="fa fa-times"></i>
				</button>
			</div>
			<portal-target name="modal"/>
		</div>
	</div>
</template>
<script>
	import { mixin as clickaway } from 'vue-clickaway';
	import { PortalTarget, MountingPortal } from 'portal-vue';
	export default {
		name: "Modal",
		props: ["title", "visible"],
		components: { PortalTarget, MountingPortal },
		mixins: [ clickaway ],
		methods: {
			closeModal() {
				this.$emit("closed-modal");
			}
		}
	}
</script>
<style scoped>
	.modal-portal-wrapper { display: none; }
	.modal-portal-wrapper.modal-in { display: block; }
	.modal-portal-wrapper .bgshadow { position: fixed; top:0;left:0; width: 100%; height: 100%; background: #000; opacity: .3; z-index: 99; backdrop-filter: blur(20px); }
	.modal-wrapper { width: 40%; min-width:300px; min-height: 400px; background: #fff; position: absolute; top: 10%; left: 30%; z-index: 100; margin:0; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; border-radius: 3px; }
	.title { font-size: 20px; font-weight:300; padding: 20px; border-bottom: 1px solid #f1f0f0; color: #888; }
	.button.close-modal { margin-top: -19px; margin-right: -19px; font-size: 24px; color: #a2a2a2; }
	.button.close-modal:hover, .button.close-modal:active, .button.close-modal:focus { color: #636363; }
</style>