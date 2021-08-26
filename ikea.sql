-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2021 at 03:58 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ikea`
--
CREATE DATABASE IF NOT EXISTS `ikea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ikea`;

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

CREATE TABLE `furniture` (
  `furnitureId` int(11) NOT NULL,
  `typeId` int(11) NOT NULL,
  `size` varchar(40) NOT NULL,
  `color` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`furnitureId`, `typeId`, `size`, `color`, `price`) VALUES
(1, 3, '170', 'yellow', '180.00');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `typeId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`typeId`, `name`) VALUES
(1, 'Table'),
(2, 'Chair'),
(3, 'sofa'),
(4, 'closet');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`furnitureId`),
  ADD KEY `typeId` (`typeId`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`typeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `furniture`
--
ALTER TABLE `furniture`
  MODIFY `furnitureId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `typeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `types` (`typeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
