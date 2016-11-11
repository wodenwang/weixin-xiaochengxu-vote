//定义
function main(){
	var voteId = request.getLong("VOTE_ID");
	var openId = request.getString("OPEN_ID");

	//投票主题
	var vo = db.find("select * from DEMO_VOTE where ID = ?",voteId);
	if(!vo){
	  nami.error("投票不存在");
	}

	//选项
	var sql = "select a.*,ifnull(b.SIZE,0) SIZE from DEMO_VOTE_DETAIL a";
	sql += " left join (";
	sql += " 	select VOTE_ID,DETAIL_ID,count(1) SIZE from DEMO_VOTE_RESULT group by VOTE_ID,DETAIL_ID";
	sql += " ) b on b.DETAIL_ID = a.ID and b.VOTE_ID = a.VOTE_ID";
	sql += " where a.VOTE_ID = ? order by a.SORT asc";
	var items = db.query(sql,voteId);

	//我的投票结果
	var my = db.find("select * from DEMO_VOTE_RESULT where VOTE_ID = ? and OPEN_ID = ? order by CREATE_TIME desc limit 1",voteId,openId);

	//组装结果返回
	vo.items = items;
	
	var total = 0;
	items.forEach(function (item) {
		total += item.SIZE;
	});
	vo.totalSize = total;//汇总总数
	
	vo.my = my;
	return vo;
}

//调用
main();