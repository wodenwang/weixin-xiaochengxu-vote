//定义
function main(){
	var detailId = request.getLong("ITEM");
	var openId = request.getString("OPEN_ID");//TODO 在腾讯login api没有放开之前暂时采用request传递open_id

	//合法性校验
	var detail = db.find("select * from DEMO_VOTE_DETAIL where ID = ?",detailId);
	if(!detail){
	  nami.error("投票不存在");
	}

	var result = db.find("select * from DEMO_VOTE_RESULT where VOTE_ID = ? and OPEN_ID = ? limit 1",detail.VOTE_ID,openId);
	if(result){
	  return {result:false};
	}

	//登记投票记录
	db.exec("insert into DEMO_VOTE_RESULT (VOTE_ID,DETAIL_ID,OPEN_ID) values (?,?,?)",detail.VOTE_ID,detailId,openId);
	return {result:true};
}

//调用
main();
