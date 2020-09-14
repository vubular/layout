<template>
	<div class="navigation-wrapper" :class="[ { expanded } , theme ]">
		<vue-scroll :ops="scrollStyle">
			<ul>
				<template v-for="(item, i) in navigation">
					<li :class="{'is-active': active==item}">
						<div @click="toggleActiveItem(item)">
							<router-link v-if="item.path" :to="item.path">
								<i v-if="item.icon" :class="item.icon"></i>
								<plain v-if="item.label && expanded">{{item.label | translate}}</plain>
							</router-link>
							<a v-if="!item.path && item.clickFunction" href="#" @click.prevent="" v-else>
								<i v-if="item.icon" :class="item.icon"></i>
								<plain v-if="item.label && expanded">{{item.label | translate}}</plain>
							</a>
							<a v-if="!item.path && !item.clickFunction" href="javascript:void(0);">
								<i v-if="item.icon" :class="item.icon"></i>
								<plain v-if="item.label && expanded">{{item.label | translate}}</plain>
							</a>
						</div>
						<ul v-if="item.navigation && expanded" class="navigation">
							<li v-for="(subItem, s) in item.navigation" :key="s" @click="toggleSubActiveItem(subItem)" :class="{'is-active': subActive==subItem}">
								<router-link v-if="subItem.path" :to="subItem.path">
									<span v-if="subItem.icon" class="icon"><i :class="subItem.icon"></i></span>
									{{subItem.label | translate}}
								</router-link>
								<a href="#" v-if="!subItem.path && subItem.clickFunction" @click.prevent="subItem.clickFunction(subItem)">
									<span v-if="subItem.icon" class="icon"><i :class="subItem.icon"></i></span>
									{{subItem.label | translate}}
								</a>
								<a v-if="!subItem.path && !subItem.clickFunction" href="javascript:void(0);">
									<span v-if="subItem.icon" class="icon"><i :class="subItem.icon"></i></span>
									{{subItem.label | translate}}
								</a>
							</li>
						</ul>
					</li>
				</template>
			</ul>
		</vue-scroll>
	</div>
</template>
<script>
	export default {
		name: "Navigation",
		props: {
			theme: String,
			navigation: Array,
			expanded: Boolean
		},
		data() {
			return {
				active: null,
				subActive: null,
				scrollStyle: {
					vuescroll: {
						scrollingY: false,
						detectResize: false,
					},
					bar: {
						background: 'rgb(85, 100, 125)',
						border: '0',
						minSize: 0.2,
						size: '4px'
					},
					rail: {
						background: 'rgb(40, 45, 42)',
						size: '6px',
						specifyBorderRadius: true,
						opacity: 1,
						gutterOfSide: '0'
					}
				}
			}
		},
		methods: {
			toggleActiveItem(item) {
				this.active = this.active!=item ? item : null;
			},
			toggleSubActiveItem(subItem) {
				this.subActive = this.subActive!=subItem ? subItem : null;
			}
		}
	}
</script>
<style scoped>
	ul { list-style: none; margin:0; padding:0; }
	.navigation-wrapper { height: 100%; }
	.navigation-wrapper ul li { color: #a7a6a6; }
	.navigation-wrapper ul li a { color: #a7a6a6; }
	.navigation-wrapper ul li div { height: 65px; line-height: 65px; cursor: pointer; overflow: hidden; color: #a7a6a6; }
	.navigation-wrapper ul li div i { font-size: 16px; color: #fff; border-radius: 50%; margin-left: 10px; margin-right: 10px; width: 45px; height: 45px; line-height: 45px; text-align: center; }
	.navigation-wrapper ul li:hover div { background-color: #23282e; }
	.navigation-wrapper ul li:hover div i { background-color: #2b323a; }
	.navigation-wrapper ul li.is-active div { background-color: #23282e; }
	.navigation-wrapper ul li.is-active div i { background-color: #fff; color: #2b323a; }
	.navigation-wrapper ul li ul.navigation { max-height: 0; overflow: hidden; transition: max-height 0.10s ease-out; }
	.navigation-wrapper ul li.is-active ul { max-height: 999px; transition: max-height 0.25s ease-in; }
	.navigation-wrapper ul ul.navigation { background-color: #23282e; transition: visibility 0s, opacity 0.5s linear; }
	.navigation-wrapper ul ul.navigation li { height: 40px; line-height: 40px; border-top: 1px solid #232425; }
	.navigation-wrapper ul ul.navigation li:last-of-type { border-bottom: 1px solid #232425; }
	.navigation-wrapper ul ul.navigation li a { color: #a7a6a6; width: 100%; height: 40px; cursor: pointer; display: block; padding-left: 22px; }
	.navigation-wrapper ul ul.navigation li a >>> i { margin-right: 8px; }
	.navigation-wrapper ul ul.navigation li a:hover,
	.navigation-wrapper ul ul.navigation li.is-active a { background-color: #232425; }
	.navigation-wrapper ul ul.navigation li:hover a { color: #dadada; }
</style>