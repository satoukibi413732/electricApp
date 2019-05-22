<template>
	<view>
		<uni-nav-bar title="重置密码" left-icon="back"></uni-nav-bar>
		<view class="container">
			<view class="form-input">
				<input maxlength="11" placeholder="请输入旧的登录密码" class="is-input" />
			</view>
			<view class="form-input">
				<input maxlength="11" placeholder="请输入新的登录密码" class="is-input" />
			</view>
			<view class="form-input">
				<input maxlength="11" placeholder="请再次输入新的登录密码" class="is-input" />
			</view>
			<view class="reset-btn form-input">
				<button @click="resetPwd()">确认修改</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			resetPwd() {
				uni.showToast({
					title: '修改成功..',
				});
			}
		}
	}
</script>

<style>
	.reset-btn button {
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
</style>
