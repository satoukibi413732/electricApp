<template>
	<view class="grid is-flex is-flex-center is-justify-center">
		<view class="grid-item" v-for="(item,index) in gridItems" :key="index" @click="gridSelect(item)">
			<image :src="item.urlScr" mode="aspectFit" class="grid-image"></image>
			<text>{{item.label}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'grid-layout',
		props: {
			gridItems: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		methods: {
			gridSelect(item) {
				console.log(item);
				uni.navigateTo({
					url: `${item.url}`,
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
	/* grid样式 */
	.grid {
		width: 100%;
		flex-flow: wrap;
	}

	.grid-item {
		box-sizing: border-box;
		min-height: 120rpx;
		margin: 5rpx;
		width: calc(calc(100% / 3) - 10rpx);
		cursor: pointer;
		text-align: center;
		padding-top: 30rpx;
		font-size: 30rpx;
	}

	.grid-image {
		width: 100%;
		height: 150rpx;
	}
</style>
