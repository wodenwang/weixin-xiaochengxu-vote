//定义
function main(){
	var curid = request.getLong("CUR_ID");
	
	//随机获取投票主题
	var sql = "select * from DEMO_VOTE";
	if(curid){//换一批调用,排除当前id
		sql += " where ID != "+curid;
	}
	var list = db.query(sql);
	var index = Math.floor((Math.random()*list.size())); 
	var vo = list.get(index);

	//获取选项
	var items = db.query("select * from DEMO_VOTE_DETAIL where VOTE_ID = ? order by SORT asc",vo.ID);

	//组装对象返回前端
	vo.items = items;
	return vo;
}

//调用
main();