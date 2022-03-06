export const server = (done) => {
    app.plugins.browserSync.init({
    server: {
        baseDir: `${app.path.build.html}`
    },
    notify: false, //Сообщения в браузере
    port: 3000,
    });
}