/**
 * @Description: 程序入口
 * @Author: chenchen
 * @Date: 2020-02-25 10:58:24
 * @LastEditors: chenchen
 * @LastEditTime: 2020-04-15 16:53:03
 */

const { getServerInstance, $ajax } = require("./init")
const { logger, errorLog } = require("cc-vue-util/common")
const { appId, appSecret } = require("./config")

const app = getServerInstance()

// wxlogin
app.post("/wx/login", async (req, resp) => {
	const { code } = req.body
	logger("code", code)
	const result = await $ajax
		.doGet("/sns/jscode2session", {
			appid: appId,
			secret: appSecret,
			js_code: code,
			grant_type: "authorization_code"
		})
		.catch((err) => {
			errorLog("Get session err", err.stack)
			return {}
		})
	logger("Get session result", JSON.stringify(result))
	resp.send({ status: "ok" })
})
