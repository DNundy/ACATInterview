-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017-09-20 12:04:47
-- 服务器版本: 5.5.50-0ubuntu0.14.04.1
-- PHP 版本: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `interview`
--

-- --------------------------------------------------------

--
-- 表的结构 `interviewer_status`
--

CREATE TABLE IF NOT EXISTS `interviewer_status` (
  `group_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '团队id',
  `group_name` varchar(30) NOT NULL COMMENT '团队名称',
  `passphrase` varchar(10) NOT NULL DEFAULT '0' COMMENT '通行码',
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group_name` (`group_name`),
  UNIQUE KEY `passphrase` (`passphrase`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='面试官状态表' AUTO_INCREMENT=55 ;

--
-- 转存表中的数据 `interviewer_status`
--

INSERT INTO `interviewer_status` (`group_id`, `group_name`, `passphrase`) VALUES
(11, '第一组', '111'),
(12, '第二组', '222'),
(21, '第三组', '333'),
(22, '第四组', '444'),
(23, '第五组', '555'),
(24, '第六组', '666'),
(41, '第七组', '777'),
(42, '第八组', '888'),
(51, '第九组', '999'),
(52, '第十组', 'aaa'),
(53, '十一组', 'bbb');

-- --------------------------------------------------------

--
-- 表的结构 `interview_flow`
--

CREATE TABLE IF NOT EXISTS `interview_flow` (
  `stu_id` int(10) NOT NULL COMMENT '被面学生id',
  `group_id` int(10) NOT NULL COMMENT '面试团队id',
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `stu_id` (`stu_id`,`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='面试流水表';

--
-- 转存表中的数据 `interview_flow`
--

INSERT INTO `interview_flow` (`stu_id`, `group_id`) VALUES
(0, 11),
(0, 12),
(0, 21),
(0, 22),
(0, 23),
(0, 24),
(0, 41),
(0, 42),
(0, 51),
(0, 52),
(0, 53);

-- --------------------------------------------------------

--
-- 表的结构 `interview_info`
--

CREATE TABLE IF NOT EXISTS `interview_info` (
  `stu_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '学生id',
  `stu_name` varchar(30) NOT NULL COMMENT '学生姓名',
  `stu_num` varchar(10) NOT NULL COMMENT '学号',
  `sex` varchar(10) NOT NULL COMMENT '性别',
  `major` varchar(20) NOT NULL COMMENT '专业班级',
  `tel` varchar(11) NOT NULL COMMENT '电话',
  `email` varchar(50) NOT NULL COMMENT '邮箱',
  `choice` varchar(20) NOT NULL COMMENT '面试方向',
  `self_introd` varchar(350) NOT NULL COMMENT '自我简介',
  `f_remarks` varchar(250) DEFAULT NULL COMMENT '一面评语',
  `f_grade` int(10) DEFAULT NULL COMMENT '第一次面试得分',
  `s_remarks` varchar(250) DEFAULT NULL COMMENT '二面评语',
  `s_grade` int(10) DEFAULT NULL COMMENT '第二次面试得分',
  `t_remarks` varchar(250) DEFAULT NULL COMMENT '三面评语',
  `t_grade` int(10) DEFAULT NULL COMMENT '第三次面试得分',
  `status` int(5) NOT NULL DEFAULT '-1' COMMENT '学生状态',
  PRIMARY KEY (`stu_id`),
  UNIQUE KEY `stu_num` (`stu_num`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='面试信息表' AUTO_INCREMENT=189 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
