-- MySQL dump 10.13  Distrib 8.0.43, for Linux (x86_64)
--
-- Host: localhost    Database: zeiner
-- ------------------------------------------------------
-- Server version	8.0.43-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aulas`
--

DROP TABLE IF EXISTS `aulas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aulas` (
  `id_aulas` int NOT NULL AUTO_INCREMENT,
  `id_curso` int DEFAULT NULL,
  `titulo` varchar(100) NOT NULL,
  `url` text NOT NULL,
  `duracao` int NOT NULL,
  PRIMARY KEY (`id_aulas`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `aulas` (`id_aulas`),
  CONSTRAINT `aulas_ibfk_2` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_cursos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aulas`
--

LOCK TABLES `aulas` WRITE;
/*!40000 ALTER TABLE `aulas` DISABLE KEYS */;
/*!40000 ALTER TABLE `aulas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_cursos`
--

DROP TABLE IF EXISTS `categoria_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_cursos` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_cursos`
--

LOCK TABLES `categoria_cursos` WRITE;
/*!40000 ALTER TABLE `categoria_cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_software`
--

DROP TABLE IF EXISTS `categoria_software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_software` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_software`
--

LOCK TABLES `categoria_software` WRITE;
/*!40000 ALTER TABLE `categoria_software` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_software` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `id_cursos` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_cursos`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_cursos` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dados_pessoais`
--

DROP TABLE IF EXISTS `dados_pessoais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dados_pessoais` (
  `id_dados_pessoais` int NOT NULL AUTO_INCREMENT,
  `nome_completo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `foto` text,
  `telefone` varchar(18) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id_dados_pessoais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados_pessoais`
--

LOCK TABLES `dados_pessoais` WRITE;
/*!40000 ALTER TABLE `dados_pessoais` DISABLE KEYS */;
/*!40000 ALTER TABLE `dados_pessoais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudante`
--

DROP TABLE IF EXISTS `estudante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudante` (
  `id_estudante` int NOT NULL AUTO_INCREMENT,
  `id_dados_pessoais` int DEFAULT NULL,
  `id_cursos` int DEFAULT NULL,
  PRIMARY KEY (`id_estudante`),
  KEY `id_cursos` (`id_cursos`),
  KEY `id_dados_pessoais` (`id_dados_pessoais`),
  CONSTRAINT `estudante_ibfk_1` FOREIGN KEY (`id_cursos`) REFERENCES `cursos` (`id_cursos`),
  CONSTRAINT `estudante_ibfk_2` FOREIGN KEY (`id_dados_pessoais`) REFERENCES `dados_pessoais` (`id_dados_pessoais`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudante`
--

LOCK TABLES `estudante` WRITE;
/*!40000 ALTER TABLE `estudante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formador`
--

DROP TABLE IF EXISTS `formador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formador` (
  `id_formador` int NOT NULL AUTO_INCREMENT,
  `id_dados_pessoais` int DEFAULT NULL,
  `id_cursos` int DEFAULT NULL,
  PRIMARY KEY (`id_formador`),
  KEY `id_dados_pessoais` (`id_dados_pessoais`),
  KEY `id_cursos` (`id_cursos`),
  CONSTRAINT `formador_ibfk_1` FOREIGN KEY (`id_dados_pessoais`) REFERENCES `dados_pessoais` (`id_dados_pessoais`),
  CONSTRAINT `formador_ibfk_2` FOREIGN KEY (`id_cursos`) REFERENCES `cursos` (`id_cursos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formador`
--

LOCK TABLES `formador` WRITE;
/*!40000 ALTER TABLE `formador` DISABLE KEYS */;
/*!40000 ALTER TABLE `formador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institucional`
--

DROP TABLE IF EXISTS `institucional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `institucional` (
  `id_inst` int NOT NULL AUTO_INCREMENT,
  `tipo` enum('missao','visao','valores') NOT NULL,
  `conteudo` text NOT NULL,
  PRIMARY KEY (`id_inst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institucional`
--

LOCK TABLES `institucional` WRITE;
/*!40000 ALTER TABLE `institucional` DISABLE KEYS */;
/*!40000 ALTER TABLE `institucional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `id_servicos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  PRIMARY KEY (`id_servicos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `softwares`
--

DROP TABLE IF EXISTS `softwares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `softwares` (
  `id_software` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `foto` text NOT NULL,
  `categoria` int DEFAULT NULL,
  PRIMARY KEY (`id_software`),
  KEY `categoria` (`categoria`),
  CONSTRAINT `softwares_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categoria_software` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `softwares`
--

LOCK TABLES `softwares` WRITE;
/*!40000 ALTER TABLE `softwares` DISABLE KEYS */;
/*!40000 ALTER TABLE `softwares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-11 13:50:54
