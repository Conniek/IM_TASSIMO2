'use strict';

import gulp from 'gulp';
import config from '../../config';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';



export default function () {

    gulp.task('styles', function () {

        gulp.src(config.styleDevPath + '/**/*.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 4 versions']
            }))
            .pipe(gulp.dest(config.styleCliPath))
            .pipe(browserSync.stream())
    });
}
