// Import vue component
import Component from './VubularLayout.vue';
export default {
	install(Vue, options) {
		Vue.component(Component.name, Component)
	}
};