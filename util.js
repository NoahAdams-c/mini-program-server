/**
 * @Description: 工具
 * @Author: chenchen
 * @Date: 2020-02-25 16:04:49
 * @LastEditors: chenchen
 * @LastEditTime: 2020-03-25 12:52:55
 */

const fs = require("fs")
const path = require("path")

module.exports = {
	/**
	 * 打印方法
	 *
	 * @param {String} pre 前缀
	 * @param {String} log 日志内容
	 */
	logger: (pre = "", log = "") => {
		const timeStr = new Date().toLocaleString()
		console.log(`\x1B[32m[${pre} ${timeStr}]: \x1B[0m%s\n`, log)
	},

	/**
	 * 错误打印方法
	 *
	 * @param {String} pre 前缀
	 * @param {String} log 日志内容
	 */
	errorLog: (pre = "", log = "") => {
		const timeStr = new Date().toLocaleString()
		console.log(`\x1B[31m[${pre} ${timeStr}]: \x1B[0m%s\n`, log)
	},

	/**
	 * 输出到日志文件
	 *
	 * @param {String} pre 前缀
	 * @param {String} log 日志内容
	 */
	logToFile: (pre = "", log = "") => {
		const date = new Date()
		const timeStr = date.toLocaleString()
		const fileName =
			"log_" +
			date
				.toLocaleDateString()
				.split("/")
				.join("_") +
			".log"
		if (!fs.existsSync(path.join(__dirname, "log"))) {
			fs.mkdirSync(path.join(__dirname, "log"))
		}
		const dir = path.join(__dirname, "log", fileName)
		const fws = fs.createWriteStream(dir, { flags: "a" })
		fws.write(`\n[${pre} ${timeStr}]: \n` + log, "UTF8", err => {
			console.log(err)
		})
		fws.end()
	},

	/**
	 * 深拷贝
	 *
	 * @param {Object} obj 原始对象
	 */
	deepCopy: obj => {
		return JSON.parse(JSON.stringify(obj))
	}
}
