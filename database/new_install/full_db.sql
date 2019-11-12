-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.15 - MySQL Community Server - GPL
-- Операционная система:         Win64
-- HeidiSQL Версия:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных avtoelectrikminsk
CREATE DATABASE IF NOT EXISTS `avtoelectrikminsk` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `avtoelectrikminsk`;

-- Дамп структуры для таблица avtoelectrikminsk.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы avtoelectrikminsk.migrations: ~5 rows (приблизительно)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(5, '2019_11_05_182336_create_services_table', 2),
	(6, '2019_11_05_182815_create_service_types_table', 2),
	(8, '2019_11_08_101614_add_columns_img_attribs_to_service_types', 3),
	(10, '2019_11_12_154329_add_column_short_description_to_service_types', 4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Дамп структуры для таблица avtoelectrikminsk.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы avtoelectrikminsk.password_resets: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Дамп структуры для таблица avtoelectrikminsk.services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы avtoelectrikminsk.services: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'диагностика', '2019-11-05 21:35:19', '2019-11-05 21:35:21'),
	(2, 'ремонт', '2019-11-05 21:35:22', '2019-11-05 21:35:23');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;

-- Дамп структуры для таблица avtoelectrikminsk.service_types
CREATE TABLE IF NOT EXISTS `service_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_src` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'storage/diagnostics/diagnostics_1.jpg',
  `img_alt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'diagnostics_1',
  `fk_service` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `service_types_fk_service_foreign` (`fk_service`),
  CONSTRAINT `service_types_fk_service_foreign` FOREIGN KEY (`fk_service`) REFERENCES `services` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы avtoelectrikminsk.service_types: ~12 rows (приблизительно)
/*!40000 ALTER TABLE `service_types` DISABLE KEYS */;
INSERT INTO `service_types` (`id`, `title`, `description`, `short_description`, `img_src`, `img_alt`, `fk_service`, `created_at`, `updated_at`) VALUES
	(1, 'компьютерная диагностика', 'Используя современное оборудование и методики проводим полную диагностику систем автомобиля.', 'Используя современное оборудование и методики проводим полную диагностику систем автомобиля.', 'storage/diagnostics/diagnostics_1.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:48:18'),
	(2, 'диагностика двигателя', 'Диагностика работы элементов систем двигателя автомобиля квалифицированными мастерами, определение: — качества работы\r\nмотора, — неисправностей при запуске мотора, — причин падения мощности, — причин посторонних звуков в моторе и пр.', 'Диагностика работы элементов систем двигателя автомобиля квалифицированными мастерами.', 'storage/diagnostics/diagnostics_2.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:49:14'),
	(3, 'диагностика АКПП', 'Проводим полную диагностику автоматической коробки передач автомобиля, устанавливаем наличие или отсутствие проблем в работе коробки, консультируем и при выявлении ошибок подбираем наиболее оптимальное решение проблем с последующим устранением.', 'Проводим полную диагностику автоматической коробки передач автомобиля.', 'storage/diagnostics/diagnostics_3.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:52:21'),
	(4, 'диагностика ABS', 'Антиблокировочная система – важная составляющая системы безопасности автомобиля. Наши мастера произведут качественную диагностику системы с определением необходимости ремонта блока ABS. Позаботьтесь о безопасности заранее.', 'Наши мастера произведут качественную диагностику системы с определением необходимости ремонта блока ABS.', 'storage/diagnostics/diagnostics_4.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:52:15'),
	(5, 'диагностика Airbag', 'С помощью современной компьютерной диагностики определяем наличие или отсутствие неисправностей в системе работы подушек безопасности Вашего автомобиля. Ремонт, прошивка, удаление ошибок, восстановление работоспособности.', 'Определяем наличие или отсутствие неисправностей в системе работы подушек безопасности Вашего автомобиля.', 'storage/diagnostics/diagnostics_5.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:52:06'),
	(6, 'диагностика климат контроля', 'При помощи спецоборудования производим считывание системы климат контроля Вашего автомобиля, определяем состав, температуру, влажность воздуха в Авто. При выявлении дефекта системы наши сотрудники подберут наиболее рациональное решение по устранению ошибок, проконсультируют и дадут советы для дальнейшей успешной работы системы. (Устранение климатического дискомфорта в салоне).', 'При помощи спецоборудования производим считывание системы климат контроля Вашего автомобиля.', 'storage/diagnostics/diagnostics_6.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 18:53:12'),
	(7, 'диагностика приборной панели', 'Данный тип компьютерной проверки направлен на считывание, расшифровку и анализ полученных значений приборной панели. Проверка показаний спидометра, тахометра, указателей уровня топлива, температуры и пр. показателей, значения которых выводятся на панель приборов.', 'Считывание, расшифровка и анализ полученных значений приборной панели.', 'storage/diagnostics/diagnostics_7.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 19:03:02'),
	(8, 'диагностика иммобилайзера', 'Диагностика и проверка корректности механизма, предотвращающего возможность запуска двигателя Вашего автомобиля третьими лицами. Позволяет выявить все неисправности в работе системы. Осуществляем услуги по проверке соответствия, перепрограммированию устройства, отключению прибора и пр.', 'Диагностика механизма, предотвращающего запуск двигателя Вашего автомобиля третьими лицами.', 'storage/diagnostics/diagnostics_8.jpg', 'diagnostics_1', 1, '2019-11-05 21:46:42', '2019-11-12 19:00:47'),
	(9, 'ремонт cтартеров и генераторов', 'Широкий комплекс услуг, современное оборудование, квалифицированные мастера и гарантия качества. Ремонт, срочный ремонт, диагностика, замена, восстановление стартеров и генераторов.', 'Ремонт, срочный ремонт, диагностика, замена, восстановление стартеров и генераторов.', 'storage/repair/repair_1.png', 'repair_1', 2, '2019-11-05 21:51:37', '2019-11-12 19:11:42'),
	(10, 'ремонт стеклоочистителей', 'Устранение неполадок, подбор, замена и наладка работы «дворников» автомобиля, очистка и ремонт составляющих механизмов, влияющих на работу стеклоочистителей.', 'Устранение неполадок, подбор, замена и наладка работы «дворников» автомобиля.', 'storage/repair/repair_2.png', 'repair_1', 2, '2019-11-05 21:51:37', '2019-11-12 19:12:31'),
	(11, 'замена датчиков', 'Определение работоспособности и технического состояния, диагностика, замена и устранение неисправностей датчиков работы автомобилей квалифицированными специалистами.', 'Определение работоспособности и технического состояния датчиков.', 'storage/repair/repair_3.png', 'repair_1', 2, '2019-11-05 21:51:37', '2019-11-12 19:15:47'),
	(12, 'ремонт стеклоподъемников', 'Диагностика и устранение неисправностей в работе механизмов стеклоподъемников автомобиля, коррекция скорости срабатывания, прочистка, устранение шумов и заклинивания при работе, замена деталей устройств нашими опытными квалифицированными мастерами.', 'Диагностика и устранение неисправностей в работе механизмов стеклоподъемников автомобиля.', 'storage/repair/repair_4.png', 'repair_1', 2, '2019-11-05 21:51:37', '2019-11-12 19:16:29');
/*!40000 ALTER TABLE `service_types` ENABLE KEYS */;

-- Дамп структуры для таблица avtoelectrikminsk.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы avtoelectrikminsk.users: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
