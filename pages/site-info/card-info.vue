<template>
	<view class="">
		<uni-nav-bar left-icon="back" :title="'卡片信息'"></uni-nav-bar>
		<uni-card is-full="true" class="card-info" v-for="item in cardList" :key="item.title" :title="item.title" thumbnail="http://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
		 :extra="item.date" :note="'点击查看'" @click="cardInfo(item)">
			{{item.content}}
		</uni-card>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card.vue"
	export default {
		components: {
			uniCard
		},
		data() {
			return {
				cardList: [{
					title: '测试卡片信息1',
					date: '1999-5-9',
					content: '这就是个测试内容'
				}, {
					title: '测试卡片信息2',
					date: '1999-5-9',
					content: '这就是个测试内容'
				}, {
					title: '测试卡片信息3',
					date: '1999-5-9',
					content: '这就是个测试内容'
				}, {
					title: '测试卡片信息4',
					date: '1999-5-9',
					content: '这就是个测试内容'
				}, {
					title: '测试卡片信息5',
					date: '1999-5-9',
					content: '这就是个测试内容'
				}]
			}
		},
		methods: {
			cardInfo(item) {
				console.log(item)
			}
		},
	}
</script>

<style>
	.card-info {}
</style>
