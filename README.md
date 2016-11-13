# 微信小程序DEMO - 投票

本项目目的仅用于微信小程序开发培训，并非真实需求。<br/>
项目分为两块：<br/>
 - 前端开发，采用微信小程序规范的wxml、wxss、javascript语言开发，源码在**app目录**；
 - 后端开发采用NAMI框架（[https://github.com/wodenwang/nami](https://github.com/wodenwang/nami)），数据库DDL和逻辑源码在**nami目录**；

## 效果图
![](http://i.imgur.com/blLC2Ln.png)
<br/>
![](http://i.imgur.com/KCwnYkA.png)
<br/>
![](http://i.imgur.com/ZgPqjnZ.png)

## 数据库模型
实例共用了三张表，console截图：<br/>
![](http://i.imgur.com/doTCpJy.png)

建表语句：<br/>
```sql
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
```

## 更多关于NAMI
- GITHUB地址： [https://github.com/wodenwang/nami](https://github.com/wodenwang/nami)
- NAMI介绍： [http://riversoft.com.cn/nami.html](http://riversoft.com.cn/nami.html)
- 本DEMO视频： [NAMI来了！五分钟让微信小程序接上数据库（含视频）](http://mp.weixin.qq.com/s?__biz=MzI2MDE0MjA5MQ==&mid=2247483854&idx=1&sn=5c80bf25dbbbc7637c758929bf5d237d&chksm=ea6f64aadd18edbc6bf84be857711886f072d01c5bd07804befeb77e82e7283569187c1fb178#rd)

## 联系我们
*欢迎关注我的公众号：全栈生姜头* <br/>
![](https://github.com/wodenwang/weixin-xiaochengxu-kuaidi/raw/master/screen/shengjiangtou_small.jpg)
