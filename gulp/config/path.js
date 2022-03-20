//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    favicon: `${buildFolder}/`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.{scss,sass}`,
    html: `${srcFolder}/html/*.html`, //HTML||PUG
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    favicon: `${srcFolder}/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.{scss,sass}`,
    html: `${srcFolder}/html/**/*.html`, //HTML||PUG
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolderL: srcFolder,
  rootFolder: rootFolder,
  ftp: `/www/u121351.test-handyhost.ru/`
}
export let configFTP = {
  host: "135.181.181.70", // Адрес FTP сервера
  user: "u121351", // Имя пользователя
  password: "ExxL1VvhJKep", // Пароль
  parallel: 21, // Кол-во одновременных потоков
};
