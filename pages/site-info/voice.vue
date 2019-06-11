<template>
	<view class="">
		<uni-nav-bar left-icon="back" :title="'语音合成'"></uni-nav-bar>
		<view class="text-area">
			<textarea v-model="textValue" placeholder="请输入像转换的文字" />
		</view>
		<view class="btn-area">
			<button type="primary" @click="trunToVoice()">转换</button>
		</view>
	</view>
</template>

<script>
	import voice from '../../components/baiduVoice/baiduyy.js'
	export default{
		data() {
			return {
				textValue: ""
			}
		},
		methods: {
			trunToVoice() {
				console.log(this.textValue)
				voice.openVoice(this.textValue)
			}
		},
	}
</script>

<style>
	.text-area{
		border: 1upx solid #000000;
		margin: 20upx;
	}
	.btn-area{
		margin: 20upx;
	}
</style>
