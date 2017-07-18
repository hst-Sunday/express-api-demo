# express-api-demo
express+mysql 搭的一个api服务
# 用法
```sh
npm i
```
```sh
node ./bin/www
```
浏览器打开(确保数据库已连接，有数据)：
```sh
localhost:3000/test
```
文档生成：
```sh
apidoc -i ./routes -o ./public
```
访问文档：
```sh
http://localhost:3000/apiDoc
```
MYSQL语句：
```sh
REATE TABLE IF NOT EXISTS `task` (
 `Id` varchar(50) NOT NULL,
 `Title` varchar(500) DEFAULT NULL,
 `Status` varchar(100) DEFAULT NULL,
 PRIMARY KEY (`Id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
-- Dumping data for table `task`
 --
 
INSERT INTO `task` (`Id`, `Title`, `Status`) VALUES
 ('1', 'Go to Market tomorrow', 'done'),
 ('2', 'Email to manager', 'pending'),
 ('3', 'Push code to GitHub', 'done'),
 ('4', 'Go For Running', 'done'),
 ('5', 'Go to Movie', 'pending');
 ```
[参考资料](https://jinalshahblog.wordpress.com/2016/10/06/rest-api-using-node-js-and-mysql/)
