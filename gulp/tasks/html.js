import fileinclude from "gulp-file-include";
import webHtmlNosvg from "gulp-webp-in-html";
import versionNumber from "gulp-version-number"; //Отмена кеша браузера
import pug from "gulp-pug";

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })))
    .pipe(fileinclude()) //HTML||PUG
    /*.pipe(pug({        //HTML||PUG      
        //Сжатие HTML
        pretty: true,
        //Показать в терминале какой фал обработан
        verbose: true
    }))*/
    .pipe(
        app.plugins.if(
            app.isBuild,
        webHtmlNosvg())
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
        versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js', 'img']
        },
        'output': {
            'file': 'gulp/config/version.json'
        }
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}
