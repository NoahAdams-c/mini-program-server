/**
 * @Description: 初始化
 * @Author: chenchen
 * @Date: 2020-02-28 10:15:58
 * @LastEditors: chenchen
 * @LastEditTime: 2020-04-15 16:42:34
 */

const app = require("express")()
const body_parser = require("body-parser")
const { port } = require("./config")

const { baseAjax } = require("cc-vue-util")

const $ajax = baseAjax("https://api.weixin.qq.com")

module.exports = {
	/**
	 * init server
	 */
	getServerInstance: () => {
		// josn parser
		app.use(body_parser.json())

		// create server listen
		const server = app.listen(port, function () {
			console.log("Listening on port %d\n", server.address().port)
		})
		return app
	},
	$ajax
}
