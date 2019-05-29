<template>
	<view>
		<uni-nav-bar left-icon="back" :title="title"></uni-nav-bar>
		<gridLayout :gridItems="gridItems"></gridLayout>
	</view>
</template>

<script>
	// 导入九宫格组件
	import gridLayout from "../../components/grid-layout/grid-layout"
	export default {
		components: {
			gridLayout
		},
		onLoad(option) {
			console.log(option)
			this.title = option.title
		},
		mounted() {},
		data() {
			return {
				gridItems: [{
						label: '用电信息',
						urlScr: '../../static/img/site-info/epower.png',
						url: './test'
					},
					{
						label: '仪表盘',
						urlScr: '../../static/img/site-info/ewatch.png',
						url: './chart-info'
					},
					{
						label: '地图位置',
						urlScr: '../../static/img/site-info/map.png',
						url: './map'
					}
				],
				title: '站点信息'
			}
		},
		methods: {
			navigateBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>

</style>
