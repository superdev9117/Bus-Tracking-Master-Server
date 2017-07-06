-- MySQL dump 10.13  Distrib 5.7.13, for Linux (x86_64)
--
-- Host: localhost    Database: cougtransit
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

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
-- Table structure for table `Account`
--

DROP TABLE IF EXISTS `Account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Account` (
  `AccountID` int(11) NOT NULL,
  `AccountType` varchar(45) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  PRIMARY KEY (`AccountID`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusAlarmSubscriber`
--

DROP TABLE IF EXISTS `BusAlarmSubscriber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusAlarmSubscriber` (
  `RouteID` varchar(50) NOT NULL,
  `BusstopID` varchar(100) NOT NULL,
  `Token` varchar(500) NOT NULL,
  `OS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RouteID`,`BusstopID`,`Token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusAlarmSubscriberIOS`
--

DROP TABLE IF EXISTS `BusAlarmSubscriberIOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusAlarmSubscriberIOS` (
  `RouteID` varchar(50) NOT NULL,
  `BusstopID` varchar(100) NOT NULL,
  `Token` varchar(500) NOT NULL,
  `Time` varchar(50) NOT NULL,
  `OS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RouteID`,`BusstopID`,`Token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusLiveData`
--

DROP TABLE IF EXISTS `BusLiveData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusLiveData` (
  `BusID` varchar(45) NOT NULL,
  `BusLat` decimal(15,11) NOT NULL,
  `BusLng` decimal(15,11) NOT NULL,
  `RouteID` varchar(45) NOT NULL,
  `PathNum` int(11) NOT NULL DEFAULT '-1',
  `StopNum` int(11) NOT NULL DEFAULT '-1',
  `LastUpdate` datetime DEFAULT NULL,
  `RouteName` varchar(45) DEFAULT NULL,
  `DistanceToTravel` int(100) DEFAULT NULL,
  PRIMARY KEY (`BusID`,`RouteID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Busstop`
--

DROP TABLE IF EXISTS `Busstop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Busstop` (
  `BusstopID` varchar(100) NOT NULL,
  `BusstopName` varchar(95) NOT NULL,
  `lat` decimal(15,11) NOT NULL,
  `lng` decimal(15,11) NOT NULL,
  `city` varchar(45) NOT NULL,
  `postcode` varchar(45) NOT NULL,
  PRIMARY KEY (`BusstopID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusstopLocationInfo`
--

DROP TABLE IF EXISTS `BusstopLocationInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusstopLocationInfo` (
  `routeID` varchar(20) NOT NULL,
  `stopNum` int(3) NOT NULL DEFAULT '-1',
  `lat` decimal(15,11) NOT NULL,
  `lng` decimal(15,11) NOT NULL,
  `stopName` varchar(100) DEFAULT NULL,
  `routeName` varchar(45) DEFAULT NULL,
  `distance` int(100) DEFAULT NULL,
  `time` decimal(15,11) DEFAULT NULL,
  PRIMARY KEY (`routeID`,`stopNum`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusstopPathLocationInfo`
--

DROP TABLE IF EXISTS `BusstopPathLocationInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusstopPathLocationInfo` (
  `RouteID` varchar(20) NOT NULL,
  `PathNum` int(10) NOT NULL,
  `StopNum` int(10) DEFAULT NULL,
  `Lat` decimal(15,11) DEFAULT NULL,
  `Lng` decimal(15,11) DEFAULT NULL,
  `StopName` varchar(45) DEFAULT NULL,
  `PathName` varchar(100) DEFAULT NULL,
  `StopID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RouteID`,`PathNum`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `BusstopSubscriber`
--

DROP TABLE IF EXISTS `BusstopSubscriber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BusstopSubscriber` (
  `BusstopID` varchar(100) NOT NULL,
  `Token` varchar(500) NOT NULL,
  `OS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`BusstopID`,`Token`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `EROUTE`
--

DROP TABLE IF EXISTS `EROUTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EROUTE` (
  `tid` varchar(500) NOT NULL,
  `busroute` int(11) DEFAULT NULL,
  `bustop` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Route`
--

DROP TABLE IF EXISTS `Route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Route` (
  `RouteID` varchar(20) NOT NULL,
  `RouteName` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `postcode` int(11) NOT NULL,
  `routeBusID` int(11) DEFAULT NULL,
  `datasetName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RouteID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RouteDataInfo`
--

DROP TABLE IF EXISTS `RouteDataInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RouteDataInfo` (
  `routeID` varchar(20) NOT NULL,
  `RouteSimulationDataPath` varchar(45) DEFAULT NULL,
  `RouteBusstopDataPath` varchar(45) DEFAULT NULL,
  `RoutePathDataPath` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`routeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RouteStopRelation`
--

DROP TABLE IF EXISTS `RouteStopRelation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RouteStopRelation` (
  `BusstopID` varchar(100) NOT NULL,
  `RouteID` varchar(20) NOT NULL,
  `BusstopNum` int(11) NOT NULL,
  PRIMARY KEY (`BusstopNum`,`RouteID`),
  KEY `Constr_RouteContainStop_Route_fk` (`RouteID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERS` (
  `tid` varchar(500) NOT NULL,
  `busroute` int(11) DEFAULT NULL,
  `bustop` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-09 23:35:57
