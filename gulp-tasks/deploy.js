"use strict";

import gulp from "gulp";
import deploy from "gulp-gh-pages";

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});