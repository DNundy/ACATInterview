# [ACAT Interview System](http://123.206.18.105)

# 一、前端页面

### 1、首页

+ JAVA介绍 · web介绍 · PHP介绍 · Python介绍

+ 考官登录入口

+ 面试相关入口

### 2、面试页面

+ 报名页面

+ 签到页面

+ 面试现场

+ 考官系统

### 3、报名页面

+ 报名相关表单

### 4、签到页面

+ 考生签到

### 5、现场页面

+ 2S动态刷新页面信息

+ 正在面试信息 · 等待面试信息

### 6、考官页面

+ 检测考官session

+ 面试信息统计

+ 一面入口 · 二面入口 · 三面入口

+ 退出登录

# 二、接口格式

### 1、成功统一格式

> ['status':0,'msg':{'成功返回信息'}]

### 2、失败统一格式

> ['status':-1,'msg':{'失败提示信息'}]

# 三、接口内容

+ group_login : 考官登陆

+ logout : 退出登录

+ function.php : 连接数据库

+ results.php : 信息统计结果返回

+ apply.php : 考生报名信息提交

+ dis_interview : 考生面试签到

+ flow : 考生流水信息更新

+ examiners-begin : 考官点击开始面试时状态检查

+ examiners-going-check.php : 考官页面状态检查

+ examiners-session-check.php : 考官session检查

+ save_info.php : 考官提交面试信息