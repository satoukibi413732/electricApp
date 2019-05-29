<template>
	<view class="full-height">
		<uni-nav-bar left-icon="back" :title="'地图'"></uni-nav-bar>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers">
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
					iconPath: '../../static/img/site-info/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/img/site-info/location.png'
				}]
			}
		}
	}
</script>

<style scoped>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
