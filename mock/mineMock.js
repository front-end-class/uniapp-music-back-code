// 导航2模拟数据
module.exports = {
	mock: {
		navList: [
		  	{ name: '私人FM', imd: 1},
		  	{ name: '最嗨电音', imd: 2},
		  	{ name: 'ACG专区', imd: 3},
		  	{ name: 'Sati空间', imd: 4},
		  	{ name: '私藏推荐', imd: 5},
		  	{ name: '因乐交友', imd: 6},
		  	{ name: '亲子频道', imd: 7},
		  	{ name: '古典专区', imd: 8},
		],
 	},
 	// 附带接口模拟数据
	promise: (query, request) => {
		console.log(query)
		  const data = {
		    id: query.id + 1,
		    type: (/^\d+$/.test(query.id)) ? 0 : 1
		  }
		  // return request(
		  //   'POST', `https://music.163.com/weapi/cloudvideo/v1/allvideo/rcmd`, data,
		  //   {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
		  // )
		return new Promise(
			 function (resolve, reject) {
			    // 一段耗时的异步操作
			    resolve({}) // 数据处理完成
			    // reject('失败') // 数据处理出错
			 }
		).then(
		  (res) => {console.log(res)},  // 成功
		  (err) => {console.log(err)} // 失败
		)
	}
}
