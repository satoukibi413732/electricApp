## 简介
非常轻便使用的语音合成接口，一般用于对推送过来的消息进行语音播报

## 百度语音合成接口使用说明
注：需先在百度云注册账号并创建应用，获得API Key和Secret Key并填入js的url地址中
### 引入js

```javascript
import voice from /* baiduYY.js 地址 */
```

### 使用

```javascript
voice.openVoice('想要播报的内容');
```


