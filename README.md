# express-api-demo
express+mysql 搭的一个api服务
# 用法
```sh
npm i
```
浏览器打开：
```sh
localhost:3000
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
