<template>
	<view class="full-height">
		<uni-nav-bar title="登录"></uni-nav-bar>
		<view class="is-flex is-flex-center">
			<view class="is-flex is-flex-center logo">
				<image src="../static/logo.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="container">
			<view class="form-input">
				<input maxlength="11" v-model="loginInfo.userName" placeholder="请输入账号" class="is-input" />
			</view>
			<view class="form-input">
				<input v-model="loginInfo.password" placeholder="请输入登录密码" class="is-input" />
			</view>
			<view class="loginbtn form-input">
				<button :loading="loginInfo.loading" @tap="login()"> {{ login.loading ? "登录中...":"登 录"}} </button>
			</view>
		</view>
		<view class="container">
			<navigator url="./register" hover-class="" class="register">
				<text>没有账号?注册一个</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: mapState(['menuIndex']),
		data() {
			return {
				loginInfo: {
					loading: false,
					userName: "",
					password: ""
				}
			}
		},
		methods: {
			...mapMutations(['setMenuIndex']),
			login() {
				/* this.loginInfo.loading = true
				let data = this.loginInfo
				this.$apiserver.login(data).then(res => {
					this.$apiserver.catchNetwork(res)
					console.log(res)
					if (res[1].data.success === true) {
						uni.navigateTo({
							url: './index'
						})
					} else {
						uni.showToast({
							title: res[1].data.message,
							icon: "none"
						})
					}
				})
				this.loginInfo.loading = false */
				uni.redirectTo({
					url: './index/index'
				})
				this.setMenuIndex(0)
			}
		}
	}
</script>

<style>
	.logo {
		margin: 8% 0;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.register {
		font-size: 30rpx;
		text-align: right;
		padding-right: 20rpx;
		color: #007AFF;
	}
</style>
