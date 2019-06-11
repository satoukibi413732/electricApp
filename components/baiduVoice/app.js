let _app = {
	getRequest(url, data, scb, fcb, type, notLoading) {
		//console.log('访问接口:' + this.renderUrlData(url, data));
		if (!notLoading)
			uni.showLoading({
				title: '请稍候'
			});
		uni.request({
			url,
			method: type || 'GET',
			data: data || {},
			success: (res) => {
				if (!notLoading)
					uni.hideLoading();
				if (scb) scb(res);
			},
			fail: (err) => {
				if (!notLoading)
					uni.hideLoading();
				if (fcb) fcb(err);
			}
		});
	}
}
export default _app;