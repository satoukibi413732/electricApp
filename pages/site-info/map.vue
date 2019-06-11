<template>
	<view class="full-height">
		<uni-nav-bar left-icon="back" :title="'地图'"></uni-nav-bar>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" :controls="controls" @controltap="test"
		 id="map" :show-location="showLocation" :scale="mapScale">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/img/site-info/location.png',
					title: '阿打算'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/img/site-info/location.png'
				}],
				controls: [{
					position: {
						top: 80,
						width: 50,
						height: 50
					},
					iconPath: '../../static/img/site-info/epower.png',
					clickable: true,
					id: 1
				}],
				showLocation: true,
				mapScale: 16
			}
		},
		mounted() {
			this.getLocation()
		},
		methods: {
			getLocation() {
				uni.getLocation({
					success(res) {
						console.log(res)
					}
				})
			},
			test(e) {
				console.log(e)
				let map = uni.createMapContext('map', this)
				console.log(map)
				map.getScale({
					success(res) {
						console.log(res)
					}
				})
			}
		},
	}
</script>

<style scoped>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
