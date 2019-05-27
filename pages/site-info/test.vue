<template>
	<view>
		<line-chart :chartData="chartData"></line-chart>
		<line-chart :chartData="chartData1"></line-chart>
		<button type="primary" @click="upData()">updata</button>
	</view>
</template>

<script>
	import lineChart from '@/components/u-charts/line-chart.vue'
	export default {
		name: 'test',
		components: {
			lineChart
		},
		data() {
			return {
				canvasId: 'test',
				chartData: {
					categories: ["2012", "2013", "2014", "2015", "2016", "2017"],
					series: [{
						name: "成交量A",
						data: [35, 8, 25, 37, 4, 20]
					}, {
						name: "成交量B",
						data: [70, 40, 65, 100, 44, 68]
					}, {
						name: "成交量C",
						data: [100, 80, 95, 150, 112, 132]
					}]
				},
				chartData1: {
					categories: ["2012", "2013", "2014", "2015", "2016", "2017"],
					series: [{
						name: "成交量A",
						data: [35, 421,125,32, 4, 20]
					}, {
						name: "成交量B",
						data: [70, 40, 65, 512, 44, 68]
					}, {
						name: "成交量C",
						data: [100, 80, 95, 21, 32, 132]
					}]
				}
			}
		},
		methods: {
			upData() {
				let dataList = {
					name: "成交量D",
					data: [22, 33, 11, 44, 22, 33]
				}
				this.chartData.series.push(dataList)
				console.log(this.chartData)
			}
		}
	}
</script>

<style scoped>

</style>
