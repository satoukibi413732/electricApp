<template>
	<view class="full-height">
		<uni-nav-bar left-icon="back"  title="注册"></uni-nav-bar>
		<view class="is-flex is-flex-center">
			<view class="logo">
				<image src="../static/logo.png" mode="aspectFit" class="logoimg"></image>
			</view>
		</view>
		<view class="registercontent">
			<view class="form-input">
				<input maxlength="12" placeholder="请输入账号" v-model="registerInfo.userName" class="is-input" />
			</view>
			<view class="form-input">
				<input placeholder="请输入邮箱" v-model="registerInfo.email" class="is-input" />
			</view>
			<view class="form-input">
				<input placeholder="请输入登录密码" v-model="registerInfo.password" :password="true" class="is-input" />
			</view>
			<view class="form-input">
				<input placeholder="请再次输入登录密码" v-model="registerInfo.confirmPassword" :password="true" class="is-input" />
			</view>
			<view class="form-input registerbtn">
				<button @tap="register()">注 册</button>
			</view>
		</view>
		<view class="registercontent">
			<navigator url="#" class="register" hover-class="">
				<text>注册即表示同意《用户协议》</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				registerInfo: {
					userName: "",
					password: "",
					email: "",
					confirmPassword: ""
				},
			};
		},
		methods: {
			register() {
				this.$apiserver.register(this.registerInfo).then(res => {
					this.$apiserver.catchNetwork(res)
					if (res[1].data.success === true) {

					} else {
						uni.showToast({
							title: res[1].data.message,
							mask: false,
							duration: 1500,
							icon:"none"
						});
					}
				})
			}
		}
	}
</script>

<style>
	.logo {
		margin: 8% 0;
	}

	.registercontent {
		width: 85%;
		margin: 0 auto;
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

	.registerbtn button {
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
</style>
