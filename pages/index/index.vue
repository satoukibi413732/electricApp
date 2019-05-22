<template>
	<view>
		<uni-nav-bar left-icon="more-filled" title="主页" fixed="false" @click-left="popupMore()"></uni-nav-bar>
		<gridLayout :gridItems="gridItems"></gridLayout>
		<uni-drawer :visible="drawerVisible" class="left-drawer" @close="popupMore()">
			<view class="drawer-content">
				<view class="drawer-title">站点选择</view>
				<uni-list>
					<uni-list-item :title="item.label" show-badge="true" :badge-text=item.badge v-for="item in siteData" :key="item.label"
					 @click="siteSelect(item)"></uni-list-item>
				</uni-list>
			</view>
		</uni-drawer>
		<tabbar></tabbar>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				siteData: [{
					label: '测试站点1',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点1&id=site1',
					badge: '21'
				}, {
					label: '测试站点2',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点2&id=site2',
					badge: '19'
				}, {
					label: '测试站点3',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点3&id=site3',
					badge: '55'
				}, {
					label: '测试站点4',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点4&id=site4',
					badge: '2'
				}, {
					label: '测试站点5',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点5&id=site5',
					badge: '3'
				}, {
					label: '测试站点6',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点6&id=site6',
					badge: '4'
				}, {
					label: '测试站点7',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点7&id=site7',
					badge: '6'
				}, {
					label: '测试站点8',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点8&id=site8',
					badge: '9'
				}, {
					label: '测试站点9',
					urlScr: '../../static/logo.png',
					url: '../site-info/site-info?title=测试站点9&id=site9',
					badge: '2'
				}],
				gridItems: [{
						label: '用电信息',
						urlScr: '../../static/img/site-info/epower.png',
					},
					{
						label: '仪表盘',
						urlScr: '../../static/img/site-info/ewatch.png',
					}
				],

				drawerVisible: false
			};
		},
		mounted() {},
		methods: {
			popupMore() {
				this.drawerVisible = !this.drawerVisible
			},
			siteSelect(site) {
				console.log(site)
				this.drawerVisible = false
				uni.navigateTo({
					url: site.url
				})
			}
		}
	}
</script>

<style lang="scss">
	.drawer-content {
		padding: 15rpx;
	}

	.drawer-title {
		color: $uni-text-color-grey;
		font-size: $uni-font-size-lg;
	}
</style>
