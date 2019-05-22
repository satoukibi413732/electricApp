/** 
 * 验证Network 
 */
const catchNetwork = (e) => {
	if (e[0] === null) {
		switch (e[1].statusCode) {
			case 404:
				console.log('请求数据错误,' + '错误代码：' + e[1].statusCode)
				break
			case 200:
				console.log('请求数据成功')
				break
			default:
				console.log('服务器错误')
				break
		}
	} else {
		console.error('错误' + e[0].errMsg)
	}
}
/** 
 * uni.request 二次封装
 * 2019-5-15
 */
// 服务器base地址
const baseUrl = "http://192.168.0.149:3000/api/" /* 本机测试地址 */
// GET方法
const fetchGet = (url, data) => uni.request({
	url: url,
	data: data,
	method: "GET",
	header: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})
// POST方法
const fetchPost = (url, data) => uni.request({
	url: url,
	data: data,
	method: "POST",
	header: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

// 方法抛出全局
export default {
	catchNetwork,
	login: (data) => {
		return fetchPost(baseUrl + 'login', data)
	},
	register: (data) => {
		return fetchPost(baseUrl + 'register', data)
	}
}
