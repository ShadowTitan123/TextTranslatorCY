-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2021 at 08:10 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cytranslator`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sp_languages`
--

CREATE TABLE `tbl_sp_languages` (
  `id` int(50) NOT NULL,
  `language_title` varchar(255) NOT NULL,
  `language_code` varchar(255) NOT NULL,
  `status` int(50) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sp_languages`
--

INSERT INTO `tbl_sp_languages` (`id`, `language_title`, `language_code`, `status`, `created_date`) VALUES
(1, 'English', 'en', 1, '2021-01-15 21:52:14'),
(2, 'Hindi', 'hi', 1, '2021-01-15 21:52:14'),
(3, 'Kannada', 'kn', 1, '2021-01-15 21:52:14'),
(4, 'Tamil', 'ta', 1, '2021-01-15 21:52:14'),
(5, 'Malayalam', 'ml', 0, '2021-01-15 21:52:14'),
(6, 'Arabic', 'ar', 1, '2021-01-15 21:52:14'),
(7, 'Japanese', 'ja', 0, '2021-01-15 21:52:14');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_translations`
--

CREATE TABLE `tbl_translations` (
  `id` int(50) NOT NULL,
  `text` longtext NOT NULL,
  `translation` longtext NOT NULL,
  `from_lang` varchar(255) NOT NULL,
  `to_lang` varchar(255) NOT NULL,
  `status` int(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `expiry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_translations`
--

INSERT INTO `tbl_translations` (`id`, `text`, `translation`, `from_lang`, `to_lang`, `status`, `created_date`, `expiry_date`) VALUES
(75, 'Hey', 'सुनो', 'en', 'hi', 1, '2021-01-18 07:05:24', '2021-01-19'),
(76, 'Hello', 'नमस्कार', 'en', 'hi', 1, '2021-01-18 07:05:30', '2021-01-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_sp_languages`
--
ALTER TABLE `tbl_sp_languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_translations`
--
ALTER TABLE `tbl_translations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_sp_languages`
--
ALTER TABLE `tbl_sp_languages`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_translations`
--
ALTER TABLE `tbl_translations`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
