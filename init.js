/**
 * @Description: 初始化
 * @Author: chenchen
 * @Date: 2020-02-28 10:15:58
 * @LastEditors: chenchen
 * @LastEditTime: 2020-02-28 10:21:47
 */

const app = require("express")()
const body_parser = require("body-parser")
const { port } = require("./config")

module.exports = {
	/**
	 * init server
	 */
	getServerInstance: () => {
		// josn parser
		app.use(body_parser.json())

		// create server listen
		const server = app.listen(port, function() {
			console.log("Listening on port %d\n", server.address().port)
		})
		return app
	}
}
