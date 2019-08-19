/**
 * 
 * @param {MySQL_API} 基本命令行
 * 
 * @param  
 *   {  
 *      datqbase_name: 数据库名,
 *      table_name: 表名,
 *      text: 字段名,
 *      text_value:字段值,
 *      offset:偏移量,
 *      num_value:个数
 *   }
 * 
 * show datqbases ; 显示当前数据库个数
 * use datqbase_name ; 进入数据库 
 * show tables ; 显示当前进入的数据库里所有的表
 * desc table_name ; 查看一个表里有哪些字段 
 * show create table table_name ; 查看当前表创建语句
 * select * form table_name ; 查看当前表里都有哪些内容 (企业开发中慎用)
 * create database datqase_name 创建一个库
 * 
 * alter database datqbase_name character set utf8; 创建库的时候用的转码
 * 
 * alter table table_name default character set utf8;  创建表的时候用的转码
 * alter table table_name convert to character set utf8
 * 
 * 
 * @param {MySQL_API} 数据库的增 删 改 查
 * 
 * insert into table_name (`text`) values (`text_value`) 增 顺序不能变
 * updata table_name set text = text_value where text == text_value 改  (where 是判断 text 判断当前项与要修的项是否一致)
 * 
 * select count(1) from table_name where text == text_value 查找该与该字段判断结构所对应的的总数
 * select avg(text) from table_name where text == text_value 求改匹配字段的平均数 
 * select sum(text) from table_name 求改匹配字段的总和
 * select text count(1) from table_name group by text 对字段进行分组 然后查询每组的总数 注: 前后的 text 必须是同样字段名 
 * 
 * select * from table_name limit offset, num_value 该字段进行分页
 * delete from table_name where text == text_value 删除与之匹配的字段
 * 
 */