<template>
	<div class="navbar-end" style="margin-left:0">
		<div class="navbar-item" style="padding:0">
			<dropdown>
				<template v-slot:trigger="{ focus }">
					<slot name="account-trigger" v-bind="{ focus }">
						<button type="button" class="button" @click="focus">
							<span class="icon"><i class="fa fa-user-circle"></i></span>
							<span>{{fullname}}</span>
							<span class="icon is-small">
								<i class="fal fa-angle-down"></i>
							</span>
						</button>
					</slot>
				</template>
				<slot name="account">
					<router-link v-if="rouerInstalled" :class="'dropdown-item'" to="/account/profile"><translate>Profile</translate></router-link>
					<a v-else href="#/account/profile"><translate>Profile</translate></a>
					<router-link v-if="rouerInstalled" :class="'dropdown-item'" to="/account/security"><translate>Security</translate></router-link>
					<a v-else href="#/account/security"><translate>Security</translate></a>
					<router-link v-if="rouerInstalled" :class="'dropdown-item'" to="/account/preferences"><translate>Preferences</translate></router-link>
					<a v-else href="#/account/preferences"><translate>Preferences</translate></a>
					<router-link v-if="rouerInstalled" :class="'dropdown-item'" to="/account/notifications"><translate>Notifications</translate></router-link>
					<a v-else href="#/account/notifications"><translate>Notifications</translate></a>
					<hr class="dropdown-divider">
					<a href="#" class="dropdown-item" @click.prevent="$emit('signout')">{{'Sign out' | translate}}</a>
				</slot>
			</dropdown>
		</div>
		<div v-if="isImpersonating" class="navbar-item impersonating" style="cursor:pointer;padding: 0 25px" @click="$emit('stopImpersonating')">
			<span class="icon"><i class="fa fa-user-secret"></i></span>
		</div>
	</div>
</template>
<script>
	import { Dropdown } from "@vubular/elements";
	export default {
		name: 'Account',
		components: { Dropdown },
		props: ['account'],
		computed: {
			fullname() {
				let name = this.account && this.account.name ? this.account.name : "Username";
				if(this.account) {
					if(this.account.firstname) name = this.account.firstname;
					if(this.account.middlename) name+= " " + this.account.middlename;
					if(this.account.lastname) name+= " " + this.account.lastname;
					if(this.account.fullname) name = this.account.fullname;
				}

				return name;
			},
			isImpersonating() {
				let isImpersonating = false;
				if(this.account && this.account.isImpersonating) isImpersonating = true;
				return isImpersonating;
			},
			rouerInstalled() {
				return this.$route
			}
		}
	}
</script>
<style scoped>
	.dropdown button { border-radius: 0; border-top: 0; border-bottom: 0; height: 60px; padding: 0 25px; }
	.dropdown button:hover { background: #dbdbdb; border-color: #dbdbdb; }
	.dropdown.is-active button { background: #dbdbdb; border-color: #dbdbdb; }
	.mr0{margin-right:0;border-right:0;}
	.navbar-item.impersonating:hover { background: #dbdbdb; }
	>>> .dropdown-menu { width: 100%; }
</style>