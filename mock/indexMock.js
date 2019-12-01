// 首页模拟数据
module.exports = {
	mock: {
		// 新歌
	  	lastSong: [],
	  	// 新碟
	  	lastAlbum: [],
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