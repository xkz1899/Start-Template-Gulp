import svgSprites from "gulp-svg-sprite";

export const svgSprite = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprites({
			mode: {
				symbol: {
					sprite: '../icons/icons.svg',
					example: true		//Создать страницу с перечеслением иконок
				}
			},
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}`));

}