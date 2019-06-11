<template>
	<view>
		<uni-nav-bar title="设置"></uni-nav-bar>
		<view class="">
			<uni-list>
				<uni-list-item title="修改密码"  @click="gotoResetpwd()"></uni-list-item>
				<uni-list-item title="退出登录"  @click="logout()"></uni-list-item>
			</uni-list>
		</view>
		<tabbar></tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			gotoResetpwd() {
				uni.navigateTo({
					url: '../reset-password'
				})
			},
			logout() {
				uni.showModal({
					title: "退出登录",
					content: "退出登录后，再次登录您将需要重新输入用户名和密码",
					success: (res) => {
						if (res.confirm) {
							uni.reLaunch({
								url: '../login'
							})
						} else if (res.cancel) {
							return
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
