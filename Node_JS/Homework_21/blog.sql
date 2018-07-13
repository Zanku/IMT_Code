-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: Blog
-- ------------------------------------------------------
-- Server version	5.6.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_data`
--

DROP TABLE IF EXISTS `blog_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_data` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `sex` varchar(11) NOT NULL DEFAULT 'not decided',
  `avatar` varchar(255) NOT NULL DEFAULT 'http://prosidr.ru/_fr/4/9070903.png',
  `sum_themes` int(5) NOT NULL DEFAULT '0',
  `sum_user_messages` int(8) NOT NULL DEFAULT '0',
  `rating` int(8) NOT NULL DEFAULT '0',
  `rank_id` tinyint(3) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  KEY `rank_ids_1_idx` (`rank_id`),
  CONSTRAINT `rank_ids_1` FOREIGN KEY (`rank_id`) REFERENCES `rank` (`rank_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `used_ids_1` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=ascii COMMENT='Данная таблица будет использоватся для отображения иформации о пользователе в темах.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_data`
--

LOCK TABLES `blog_data` WRITE;
/*!40000 ALTER TABLE `blog_data` DISABLE KEYS */;
INSERT INTO `blog_data` VALUES (1,'male','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1),(2,'female','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1),(3,'male','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1),(4,'female','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1),(5,'male','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1),(6,'male','http://prosidr.ru/_fr/4/9070903.png',0,0,0,1);
/*!40000 ALTER TABLE `blog_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logining`
--

DROP TABLE IF EXISTS `logining`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logining` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(45) NOT NULL DEFAULT 'Anonymous',
  `password` varchar(45) NOT NULL DEFAULT 'qwerty',
  `status_user_id` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `login_UNIQUE` (`login`),
  CONSTRAINT `user_ids_3` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=ascii COMMENT='Эта таблица будет использоватся при авторизации пользователей.\nСтатус пользователя ( активный/неактивный/забаненный ).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logining`
--

LOCK TABLES `logining` WRITE;
/*!40000 ALTER TABLE `logining` DISABLE KEYS */;
INSERT INTO `logining` VALUES (1,'asdhasd','qwerty',1),(2,'doqeoiw','qwerty',1),(3,'qwiueoiuw','qwerty',1),(4,'adahsd','qwerty',1),(5,'qweuiqoie','qwerty',1),(6,'asdhajsd','qwerty',1);
/*!40000 ALTER TABLE `logining` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(45) NOT NULL,
  `theme_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_UTC` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `likes` int(8) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`message_id`),
  KEY `theme_ids_4_idx` (`theme_id`),
  CONSTRAINT `theme_ids_4` FOREIGN KEY (`theme_id`) REFERENCES `themes_creation` (`theme_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=ascii COMMENT='Здесь хранится информация о сообщениях.\nВремя используется в формате серверного времени и всемирного координационного времени. Для более корректного отображения времени для всех пользователей.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'It\'s old accordeon, about this sample spoke e',1,'2018-04-11 07:56:58','2018-04-11 07:56:58',25),(2,'It\'s Mexica, it is normal',3,'2018-04-11 07:56:58','2018-04-11 07:56:58',10);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modifications`
--

DROP TABLE IF EXISTS `modifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modifications` (
  `theme_id` int(11) NOT NULL,
  `update` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_UTC` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `theme_ids_5_idx` (`theme_id`),
  CONSTRAINT `theme_ids_6` FOREIGN KEY (`theme_id`) REFERENCES `themes_creation` (`theme_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Здесь записывается все произведенное редактирование тем.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modifications`
--

LOCK TABLES `modifications` WRITE;
/*!40000 ALTER TABLE `modifications` DISABLE KEYS */;
INSERT INTO `modifications` VALUES (1,'A puddle, a blow, a broken wheel or a broken suspension? Even if as a result\ngetting into the pit no one was hurt, this is the real road accident.','2018-04-11 04:12:07','2018-04-11 04:12:07'),(2,'An interesting experiment. The Chinese authorities are conducting an unusual social experiment that can affect millions of people. That is, the digital world is already on the threshold.','2018-04-11 04:12:53','2018-04-11 04:12:53');
/*!40000 ALTER TABLE `modifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nickname`
--

DROP TABLE IF EXISTS `nickname`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nickname` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=ascii COMMENT='Главная таблица с уникальными данными и первичным ключем, остальные таблицы опираются на нее';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nickname`
--

LOCK TABLES `nickname` WRITE;
/*!40000 ALTER TABLE `nickname` DISABLE KEYS */;
INSERT INTO `nickname` VALUES (1,'radf'),(2,'fjjlepr'),(3,'qweuip'),(4,'sfjiojet'),(5,'dqoie'),(6,'iqudwoq'),(7,'qweqqq');
/*!40000 ALTER TABLE `nickname` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank`
--

DROP TABLE IF EXISTS `rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rank` (
  `rank_id` tinyint(3) NOT NULL AUTO_INCREMENT,
  `rank` varchar(45) NOT NULL,
  PRIMARY KEY (`rank_id`),
  UNIQUE KEY `rank_UNIQUE` (`rank`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=ascii COMMENT='Оптимизация данных';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank`
--

LOCK TABLES `rank` WRITE;
/*!40000 ALTER TABLE `rank` DISABLE KEYS */;
INSERT INTO `rank` VALUES (1,'bum'),(8,'Chuck Norris'),(4,'creator'),(7,'first among equals'),(6,'god'),(3,'habitue'),(5,'moderator'),(2,'user');
/*!40000 ALTER TABLE `rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank_rights`
--

DROP TABLE IF EXISTS `rank_rights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rank_rights` (
  `rank_id` tinyint(3) NOT NULL,
  `right_id` tinyint(3) NOT NULL,
  KEY `rank_ids_2` (`rank_id`),
  KEY `right_ids_1_idx` (`right_id`),
  CONSTRAINT `rank_ids_2` FOREIGN KEY (`rank_id`) REFERENCES `rank` (`rank_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `right_ids_1` FOREIGN KEY (`right_id`) REFERENCES `rights` (`right_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Здесь определяется к какому рангу относятся те или иные права (обычный пользователь/ модератор/ бог и создатель).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank_rights`
--

LOCK TABLES `rank_rights` WRITE;
/*!40000 ALTER TABLE `rank_rights` DISABLE KEYS */;
INSERT INTO `rank_rights` VALUES (1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3),(3,4),(4,1),(4,2),(4,3),(4,4),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(6,7),(6,8),(6,9),(7,1),(7,2),(7,3),(7,4),(7,5),(7,6),(7,7),(7,8),(7,9),(8,1),(8,2),(8,3),(8,4),(8,5),(8,6),(8,7),(8,8),(8,9);
/*!40000 ALTER TABLE `rank_rights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registration` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `patronymic` varchar(255) NOT NULL,
  `birth` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `timezone` tinyint(2) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  KEY `aaa_idx` (`user_id`),
  CONSTRAINT `user_ids_2` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=ascii COMMENT='Основные данные получаемые при регистрации, и которые отображаются при желании пользователя в подробной информации о нем.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'Adam','Adam','Adam','1995-12-22','asdad@i.ua',2,'2018-04-11 00:13:00'),(2,'Eva','Eva','Eva','0000-00-00','adfjs@mail.ru',10,'2018-04-11 00:13:00'),(3,'Nicolay','Nicolay','Nicolay','1946-11-19','ijoieire@gmail.com',-11,'2018-04-11 00:13:00'),(4,'Regina','Regina','Regina','1985-01-25','jhqwd@iadw.ru',-9,'2018-04-11 00:13:00'),(5,'Jacob','Jacob','Jacob','1990-05-05','qdqwe@qdq.com',0,'2018-04-11 00:13:00'),(6,'Jacov','Jacov','Jacov','1973-06-26','qweqwe@hoqf.net',3,'2018-04-11 00:13:00'),(7,'Ann','Ann','Ann','1978-02-28','oiqdewqkl@vnd.eu',-5,'2018-04-11 00:13:00');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rights`
--

DROP TABLE IF EXISTS `rights`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rights` (
  `right_id` tinyint(3) NOT NULL AUTO_INCREMENT,
  `right` varchar(45) NOT NULL,
  PRIMARY KEY (`right_id`),
  UNIQUE KEY `right_UNIQUE` (`right`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=ascii COMMENT='Оптимизация названией привелегий';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rights`
--

LOCK TABLES `rights` WRITE;
/*!40000 ALTER TABLE `rights` DISABLE KEYS */;
INSERT INTO `rights` VALUES (8,'ban_users'),(9,'change_rigths'),(4,'create_themes'),(6,'delete_messages'),(5,'delete_themes'),(1,'read_themes'),(7,'unban_users'),(2,'vote'),(3,'write_messages');
/*!40000 ALTER TABLE `rights` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saved_themes`
--

DROP TABLE IF EXISTS `saved_themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saved_themes` (
  `user_id` int(11) NOT NULL,
  `saved_theme` int(11) NOT NULL,
  KEY `themes_ids_4_idx` (`saved_theme`),
  KEY `user_ids_5` (`user_id`),
  CONSTRAINT `themes_ids_4` FOREIGN KEY (`saved_theme`) REFERENCES `themes_creation` (`theme_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_ids_5` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Перечень (чужих) тем, которые сохранил себе пользователь, для упрощения их поиска';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saved_themes`
--

LOCK TABLES `saved_themes` WRITE;
/*!40000 ALTER TABLE `saved_themes` DISABLE KEYS */;
INSERT INTO `saved_themes` VALUES (2,1),(2,2),(3,3);
/*!40000 ALTER TABLE `saved_themes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribers`
--

DROP TABLE IF EXISTS `subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscribers` (
  `user_id` int(11) NOT NULL,
  `subscriber_id` int(11) NOT NULL,
  KEY `гыук_швы_8_idx` (`subscriber_id`),
  KEY `user_ids_8` (`user_id`),
  CONSTRAINT `user_ids_8` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ids_9` FOREIGN KEY (`subscriber_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Полный перечень подписчиков данного пользователя';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribers`
--

LOCK TABLES `subscribers` WRITE;
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` VALUES (1,2),(1,3),(2,1),(2,3),(2,5),(4,1);
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscription` (
  `user_id` int(11) NOT NULL,
  `sub_user_id` int(11) NOT NULL,
  KEY `user_ids_6_idx` (`sub_user_id`),
  KEY `user_ids_7` (`user_id`),
  CONSTRAINT `user_ids_10` FOREIGN KEY (`sub_user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ids_7` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Полный перечень пользователей на которых подписан данный пользователь';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,2),(1,3),(2,1),(2,3),(2,5),(4,1);
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(45) NOT NULL,
  PRIMARY KEY (`tag_id`),
  UNIQUE KEY `tag_UNIQUE` (`tag`),
  KEY `tags_idx` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=ascii COMMENT='Перечень существующих тегов, указываемых при создании поста';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (6,'accordion'),(1,'cats'),(2,'hotdogs'),(7,'humor'),(4,'interesting'),(5,'lazyness'),(3,'science');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme_tags`
--

DROP TABLE IF EXISTS `theme_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `theme_tags` (
  `theme_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  KEY `theme_ids_5_idx` (`theme_id`),
  KEY `tag_ids_1_idx` (`tag_id`),
  CONSTRAINT `tag_ids_1` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `theme_ids_5` FOREIGN KEY (`theme_id`) REFERENCES `themes_creation` (`theme_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=ascii COMMENT='Перечень тегов, относящихся к той или иной теме';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme_tags`
--

LOCK TABLES `theme_tags` WRITE;
/*!40000 ALTER TABLE `theme_tags` DISABLE KEYS */;
INSERT INTO `theme_tags` VALUES (1,4),(1,6),(2,3),(3,2),(3,3),(3,4);
/*!40000 ALTER TABLE `theme_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `themes_creation`
--

DROP TABLE IF EXISTS `themes_creation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `themes_creation` (
  `theme_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `theme` varchar(255) CHARACTER SET ascii NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUTC` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status_id` tinyint(3) NOT NULL DEFAULT '1',
  `sum_theme_messages` int(8) NOT NULL DEFAULT '0',
  `theme_status` tinyint(1) NOT NULL DEFAULT '1',
  `content` text CHARACTER SET ascii NOT NULL,
  PRIMARY KEY (`theme_id`),
  KEY `user_ids_6_idx` (`user_id`),
  CONSTRAINT `user_ids_6` FOREIGN KEY (`user_id`) REFERENCES `nickname` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=cp1251 COMMENT='Данные, используемые при создании темы';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `themes_creation`
--

LOCK TABLES `themes_creation` WRITE;
/*!40000 ALTER TABLE `themes_creation` DISABLE KEYS */;
INSERT INTO `themes_creation` VALUES (1,1,'????? ? ??? ?? ??????. ??? ???????','2018-04-11 03:48:18','2018-04-11 03:48:18',1,0,1,'????, ????, ??????? ?????? ??? ??????? ????????? ???? ???? ? ?????????? \n\n????????? ? ??? ????? ?? ?????????, ??? ????? ????????? ???.'),(2,3,'?????????? ???????????.','2018-04-11 03:48:18','2018-04-11 03:48:18',1,0,1,'????????? ?????? ???????? ????????? ?????????? ???????????, ??????? ????? \n\n????????? ????????? ???????. ?? ???? ???????? ??? ??? ?? ??????.'),(3,6,'? ??????? ??????????? ?????? ????????????? ','2018-04-11 03:48:18','2018-04-11 03:48:18',1,0,1,'?????? ??????? ???? ???????? ????????? ????? ??????, ? \n\n????? ?????????? ?? ????????? ? ??????. ??????? ????????? ??????? ??????? ? ????????? ?????????');
/*!40000 ALTER TABLE `themes_creation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-11 10:57:41
