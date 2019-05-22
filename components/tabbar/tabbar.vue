<template>
	<view class="tabbar-warp">
		<view class="spacing"></view>
		<view class="tabbar-box is-flex is-flex-center">
			<view class="tabbar-item is-flex is-flex-center" v-for="(item,index) in menuList" :key="item.label" :class="{'active':index===menuIndex}"
			 @tap="tabbarSelect(item,index)" :style="{width:itemWidth}">
				<image class="item-img" mode="aspectFit" :src="item.imgSrc"></image>
				<view class="item-label">
					{{item.label}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['menuIndex']),
		name: 'tabbar',
		props: {
			menuList: {
				type: Array,
				default: function() {
					return [{
							imgSrc: '../../static/logo.png',
							label: '主页',
							url: '../../pages/index/index'
						},
						{
							imgSrc: '../../static/logo.png',
							label: '设置',
							url: '../../pages/setting/setting'
						}
					]
				}
			}
		},
		data() {
			return {
				itemWidth: 0
			};
		},
		mounted() {
			this.setItemWidth(),
				console.log(this.menuIndex)
		},
		methods: {
			// 导入Vuexmapf方法
			...mapMutations(['setMenuIndex']),
			// 选择tabbar
			tabbarSelect(item, index) {
				if (this.menuIndex !== index) {
					this.setMenuIndex(index)
					uni.navigateTo({
						url: item.url,
					})
				}
			},
			//  初始化时,根据tabbar的菜单数量计算宽度
			setItemWidth() {
				let len = this.menuList.length
				let width = 100 / len
				this.itemWidth = width + '%'
			}
		}
	}
</script>

<style lang="scss">
	.spacing {
		margin-bottom: 140rpx;
		width: 100%;
		height: 1px;
	}

	.tabbar-box {
		position: fixed;
		bottom: 0;
		height: 90rpx;
		width: 100%;
		border-top: 1px solid #ddd;
	}

	.tabbar-item {
		height: 100%;
		font-size: 32rpx;
		flex-direction: column;
		color: #999;
		background: #333;
	}

	.tabbar-item.active {
		color: #333;
		background: #ddd;
	}

	.item-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 80rpx;
	}

	.item-label {
		font-size: 26rpx;
	}
</style>
