// 导航2模拟数据
module.exports = {
	mock: {
		ad: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575190811880&di=34d025471219c09a18916fdbf4733906&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01988a5a4adb98a801206ed332adc8.jpg%401280w_1l_2o_100sh.jpg'
 	},
 	// 附带接口模拟数据
	promise: (query, request) => {
		const type = {
		    0: 'pc',
		    1: 'android',
		    2: 'iphone',
		    3: 'ipad'
		  }[query.type || 0] || 'pc';
		  return request(
		    'POST', `https://music.163.com/api/v2/banner/get`, {clientType: type},
		    {crypto: 'linuxapi', proxy: query.proxy}
		  )
	}
}
