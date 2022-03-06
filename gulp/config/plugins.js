// Импортируем модули
import notify from "gulp-notify"; //Обработка ошибок
import plumber from "gulp-plumber"; //Подсказки
import browserSync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; //Проверка обновления
import ifPlugin from "gulp-if"; //Условное ветвление

export const plugins = {
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}