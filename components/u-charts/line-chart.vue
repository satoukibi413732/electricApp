<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">折线图</view>
		</view>
		<view class="qiun-charts">
			<canvas canvas-id="canvasChart" id="canvasChart" class="charts"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from './u-charts.js';
	export default {
		name: 'line-chart',
		props: {
			chartId: {
				type: String,
				default: ''
			},
			chartData: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				cWidth: 0,
				cHeight: 0,
				pixelRatio: 1,
				chart: null
			}
		},
		/* onLoad() {
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.showColumn('canvasChart', this.chartData)
		}, */
		mounted() {
			console.log(this.chartData)
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.showColumn('canvasChart', this.chartData)
		},
		watch: {
			chartData: {
				handler(newVal, oldVal) {
					this.changeData(newVal)
				},
				deep: true
			}
		},
		methods: {
			showColumn(canvasId, chartData) {
				this.chart = new uCharts({
					$this: this,
					canvasId: canvasId,
					type: 'line',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {},
					dataLabel: true,
					width: this.cWidth,
					height: this.cHeight,
					enableScroll: true
				});
				console.log(this.chart)
			},
			changeData(chartData) {
				this.chart.updateData({
					series: chartData.series,
					categories: chartData.categories
				})
			}
		}
	}
</script>

<style>
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		width: 100%;
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
