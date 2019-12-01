// 导航2模拟数据
module.exports = {
	mock: {
		navList: [
		  	{ name: '推荐', id: 34571},
		  	{ name: 'LOCK直播', id: 23472},
		  	{ name: '翻唱', id: 33485},
		  	{ name: '广场', id: 4652},
		  	{ name: '舞蹈', id: 658785},
		  	{ name: '游戏', id: 62689},
		  	{ name: '现场', id: 7456345},
		],
		total: 10,
 	},
 	// 附带接口模拟数据
	promise: (query, request) => {
		console.log(query)
	  const data = {
	    id: query.id + 1,
	    type: (/^\d+$/.test(query.id)) ? 0 : 1
	  }
	  return request(
	    'POST', `https://music.163.com/weapi/cloudvideo/v1/allvideo/rcmd`, data,
	    {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
	  )
	}
}
