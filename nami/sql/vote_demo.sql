/* *****************************************************************************
表名	DEMO_VOTE
表展示名	DEMO_投票主题
主键类型	字段名	展示名	类型	是否必须	长度(总长度,小数精度)	默认值
主键,自动递增	ID	ID	长整数	是	16,0	
非主键	TITLE	标题	大文本	是	0,0	
非主键	CREATE_TIME	创建时间	日期时间	是	0,0	
****************************************************************************** */
CREATE TABLE `DEMO_VOTE` (
  `ID` int(11) NOT NULL auto_increment,
  `TITLE` text,
  `CREATE_TIME` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`)
);

/* *****************************************************************************
表名	DEMO_VOTE_DETAIL
表展示名	DEMO_投票选项
主键类型	字段名	展示名	类型	是否必须	长度(总长度,小数精度)	默认值
主键,自动递增	ID	ID	长整数	是	16,0	
非主键	VOTE_ID	主题关联	长整数	是	16,0	
非主键	CONTENT	描述	大文本	是	0,0	
非主键	SORT	排序	整数	是	8,0	0
非主键	CREATE_TIME	创建时间	日期时间	是	0,0	
****************************************************************************** */
CREATE TABLE `DEMO_VOTE_DETAIL` (
  `ID` int(11) NOT NULL auto_increment,
  `VOTE_ID` int(11) not null,
  `CONTENT` text ,
  `SORT` int(11) not null default 0,
  `CREATE_TIME` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`)
);

/* *****************************************************************************
表名	DEMO_VOTE_RESULT
表展示名	DEMO_投票结果数据
主键类型	字段名	展示名	类型	是否必须	长度(总长度,小数精度)	默认值
主键,自动递增	ID	ID	长整数	是	16,0	
非主键	VOTE_ID	投票主题ID	长整数	是	16,0	
非主键	DETAIL_ID	明细ID	长整数	是	16,0	
非主键	OPEN_ID	投票人	字符串/文本	是	100,0	
非主键	CREATE_TIME	投票时间	日期时间	是	0,0	
****************************************************************************** */
CREATE TABLE `DEMO_VOTE_RESULT` (
  `ID` int(11) NOT NULL auto_increment,
  `VOTE_ID` int(11) not null,
  `DETAIL_ID` int(11) not null,
  `OPEN_ID` varchar(100) not null,
  `CREATE_TIME` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`ID`)
);


/* *****************************************************************************
测试数据
****************************************************************************** */
insert into `DEMO_VOTE` (`TITLE`) values ('您预计微信小程序会在何时正式推出?');
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'十一月',0 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'十二月',1 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'明年一月',2 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'明年二月之后',3 from `DEMO_VOTE`;

insert into `DEMO_VOTE` (`TITLE`) values ('NAMI框架上手的难度如何?');
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'上手很简单',0 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'一般不算难',1 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'很难',2 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'压根不看',3 from `DEMO_VOTE`;

insert into `DEMO_VOTE` (`TITLE`) values ('微信公众平台您最看好的是?');
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'订阅号',0 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'服务号',1 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'企业号',2 from `DEMO_VOTE`;
insert into `DEMO_VOTE_DETAIL` (VOTE_ID,CONTENT,SORT) select max(ID),'小程序',3 from `DEMO_VOTE`;


