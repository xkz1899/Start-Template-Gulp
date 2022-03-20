export const libraries = () => {
  return app.gulp
    .src(app.path.src.libraries)
    .pipe(app.gulp.dest(app.path.build.libraries));
};
