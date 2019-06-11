import _app from './app.js';
/**
 * 浏览器调用语音合成接口
 * @param {Object} param 百度语音合成接口参数
 * 请参考 https://ai.baidu.com/docs#/TTS-API/41ac79a6
 * @param {Object} options 跨域调用api参数
 *           timeout {number} 超时时间 默认不设置为60秒
 *           volume {number} audio控件音量，范围 0-1
 *           hidden {boolean} 是否隐藏audio控件
 *           autoDestory {boolean} 播放音频完毕后是否自动删除控件
 *           onInit {Function} 创建完audio控件后调用
 *           onSuccess {Function} 远程语音合成完成，并且返回音频文件后调用
 *           onError {Function}  远程语音合成完成，并且返回错误字符串后调用
 *           onTimeout {Function} 超时后调用，默认超时时间为60秒
 */
// 需完善此地址
/* client_id = 申请的API Key,  client_secret = 申请的Secret Key */
// client_id:3eL5CPOFfp43XSKtoHpdo6K2
// client_secret:GKfNy8mKpjkDPkcleVmPxk4e5nYG5cWQ
const getTokurl = 'https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=3eL5CPOFfp43XSKtoHpdo6K2&client_secret=GKfNy8mKpjkDPkcleVmPxk4e5nYG5cWQ';
let baiduYy = {
	openVoice(content) {	// 传入需转为语音的文本内容
		let _this = this;
		_app.getRequest(getTokurl, false, function(data) {
			console.log(JSON.stringify(data));
			tts(data.data.access_token, content);
		}, function(err) {
			console.log('获取语音tok失败:' + JSON.stringify(err));
		}, 'POST', true);
	}
};
// 合成按钮
function tts(tok, content) {
	// 调用语音合成接口
	// 参数含义请参考 https://ai.baidu.com/docs#/TTS-API/41ac79a6
	btts({
		tex: content,
		tok: tok,
		spd: 5,
		pit: 5,
		vol: 15,
		per: 0,
		cuid: tok,
		ctp: 1,
		lan: 'zh'
	}, {
		volume: 1,
	});
}

function btts(param, options) {
	let url = 'https://tsn.baidu.com/text2audio';
	const audio = uni.createInnerAudioContext();
	// 设置音量
	audio.volume = options.volume || 1;
	// 序列化参数列表
	let fd = [];
	for (let k in param) {
		fd.push(k + '=' + encodeURIComponent(param[k]));
	}
	audio.src = `${url}?${fd.join('&')}`;
	audio.play();
}

export default baiduYy;
