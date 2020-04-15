/**
 * @Description: 程序入口
 * @Author: chenchen
 * @Date: 2020-02-25 10:58:24
 * @LastEditors: chenchen
 * @LastEditTime: 2020-04-15 15:47:50
 */

const { getServerInstance } = require("./init")
const { logger, errorLog, logToFile } = require("./util")
const request = require("request")

const app = getServerInstance()

// wxlogin test
app.post("/wx/login", async (req, resp) => {
	const { code } = req.body
	logger("", code)
	resp.send({ status: "ok" })
})
