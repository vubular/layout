<template>
	<div class="navbar-end">
		<div class="navbar-item">
			<dropdown style="width:100%;height:100%">
				<template v-slot:trigger="{ focus }">
					<slot name="support-trigger" v-bind="{ focus }">
						<button type="button" class="button is-white" @click="focus();$emit('focusedSupport')"><i class="fa fa-life-ring"></i></button>
					</slot>
				</template>
				<slot name="support"></slot>
			</dropdown>
		</div>
		<div class="navbar-item">
			<dropdown style="width:100%;height:100%">
				<template v-slot:trigger="{ focus }">
					<slot name="launcher-trigger" v-bind="{ focus }">
						<button type="button" class="button is-white" @click="focus();$emit('focusedLauncher')"><i class="fa fa-th"></i></button>
					</slot>
				</template>
				<slot name="launcher"></slot>
			</dropdown>
		</div>
		<div class="navbar-item">
			<dropdown style="width:100%;height:100%">
				<template v-slot:trigger="{ focus }">
					<slot name="notifications-trigger" v-bind="{ focus }">
						<button type="button" class="button is-white" @click="focus();$emit('focusedNotifications')">
							<i class="fal fa-bell"></i>
						</button>
					</slot>
				</template>
				<slot name="notifications"></slot>
			</dropdown>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Launcher",
		computed: {
			isActive() {
				return this.hasSupport || this.hasLauncher || this.hasNotifications
			},
			hasSupport() {
				return !!this.$slots.support
			},
			hasLauncher() {
				return !!this.$slots.launcher
			},
			hasNotifications() {
				return !!this.$slots.notifications
			}
		}
	}
</script>
<style scoped>
	.navbar-item { border-left: 1px solid #ddd; padding: 0; }
	.navbar-item button { width: 100%; height: 100%; padding: 15px 25px; border-radius:0; }
	.navbar-item button i { font-size: 20px; color: #868686; }
	>>> .dropdown-menu { min-width: 25rem; right: -225% !important; }
	>>> .dropdown-menu:before { content: ""; position: absolute; top: -17px; left: 50.5%; margin-left: -10px; border-width: 10px; border-style: solid; border-color: transparent transparent #ddd transparent; }
	>>> .dropdown-menu:after { content: ""; position: absolute; top: -16px; left: 50.5%; margin-left: -10px; border-width: 10px; border-style: solid; border-color: transparent transparent #fff transparent; }
	>>> .dropdown-menu .dropdown-content { max-height: 30rem !important; overflow-y: auto; overflow-x: hidden; padding: 0; }
</style>