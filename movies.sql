-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2026 a las 06:36:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `synopsis` text NOT NULL,
  `year` int(11) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `synopsis`, `year`, `cover`, `created_at`, `updated_at`) VALUES
(1, 'Walle', 'Un rebot se namora de otro, mientras intentan salvar a la humanidad', 2015, 'Agregando cover de la pelicula', '2026-03-27 09:42:21', '2026-03-30 04:11:48'),
(2, 'Rapulsel', 'Una princesa perdida que tiene poderes en su cabello', 2018, 'bonito cover', '2026-03-27 09:42:21', '2026-03-30 04:13:02'),
(4, 'Eos dolorum temporibus quisquam pariatur aut sed.', 'Omnis repellat aut et non asperiores voluptas. Reiciendis eveniet voluptatem quaerat ullam sapiente sit laudantium. Perferendis unde vero nam a quam.', 9, 'Enim est magnam voluptate officiis laudantium omnis ullam.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(5, 'Vel sunt corporis rerum enim voluptas illo ex.', 'Provident odit ut aperiam mollitia accusantium tempora quod. Et adipisci quia atque quas aut dolor. Laudantium quibusdam inventore saepe esse numquam et. Repudiandae velit cupiditate amet eos sunt in.', 2, 'Perferendis libero qui eos.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(6, 'Qui repellendus consectetur ut.', 'Libero maxime optio ut ut illo deserunt. Natus blanditiis enim error amet fugiat.', 5, 'Rem cum nihil rerum sapiente quia.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(7, 'Aliquid alias neque et voluptates minima adipisci placeat.', 'Et ipsa autem architecto dolorem et omnis. In cupiditate vero odio saepe doloremque nemo magnam et. Voluptatem error magni amet. Aut repellendus fuga impedit et rem non enim.', 3, 'Aut mollitia molestias voluptatem sit sit ducimus quis.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(8, 'Facilis et nostrum aut nostrum.', 'Provident rerum blanditiis magnam ipsam aperiam asperiores quis. Delectus et ullam iste saepe et recusandae aperiam tempora. Rerum sed qui ratione molestiae tenetur. Quidem qui fugit sunt labore sit et hic.', 0, 'Veniam dignissimos vero praesentium perferendis aut facere.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(9, 'Maxime nihil mollitia praesentium exercitationem.', 'Sed sint porro ea ipsa et quidem nobis quos. Aperiam consequatur perferendis at. Explicabo eius eligendi aut id et consequatur quasi. Eos qui et culpa non tenetur nulla.', 8, 'Provident consequatur in neque nisi eligendi porro.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(10, 'Animi veniam unde voluptas et doloribus dolor nemo.', 'Error enim voluptas nulla velit mollitia laboriosam. Qui consequatur blanditiis sint alias modi exercitationem. Id qui fuga delectus quidem aut occaecati dolores.', 7, 'Nihil qui et ut non aspernatur voluptatum.', '2026-03-27 09:42:21', '2026-03-27 09:42:21'),
(11, 'No te preocupes cariño', 'Estan en una ciudad virtual, donde la mujer quiere escapar', 2023, 'hay un cover aqui', '2026-03-30 02:35:35', '2026-03-30 02:35:35');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
