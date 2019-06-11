<template>
	<view class="">
		<uni-nav-bar left-icon="back" :title="'图片预览'"></uni-nav-bar>
		<view class="">
			<xyz-choose-image @chooseImage="cImg"></xyz-choose-image>
		</view>
	</view>
</template>

<script>
	import xyzChooseImage from '../../components/xyz-choose-image/xyz-choose-image.vue'
	export default {
		components:{
			xyzChooseImage
		},
		data(){
			return{
				imgList:[]
			}
		},
		methods:{
			cImg(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
