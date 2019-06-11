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
						url: './card-info'
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
					},
					{
						label: '图片信息',
						urlScr: '../../static/img/site-info/img.png',
						url: './img-info'
					},
					{
						label: '语音合成',
						urlScr: '../../static/img/site-info/voice.png',
						url: './voice'
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
