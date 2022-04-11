const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('gulp4-run-sequence');

/* Converting css files to scss and putting them into dist folder*/

gulp.task('sass', async () => {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

/* Live sync with server */

gulp.task('browserSync', async () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

/* Minifying and adding js, cssm html files to dist folder */

gulp.task('useref', async () => {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

/* Putting fonts into dist folder */

gulp.task('fonts', async () => {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

/* Optimizing images */

gulp.task('images', async () => {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

/* Delete files from dist folder */

gulp.task('clean:dist', async () => {
    return del.sync('dist');
})

/* Watch changes in files */

gulp.task('watch', async () => {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));

    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

/* Build webpage for production */

gulp.task('build', (callback) => {
    runSequence('clean:dist',
        gulp.series(['sass', 'useref', 'images', 'fonts', async (done) => done]),
        callback
    )
})

/* Default Build => Building just sass, watch for development */

gulp.task('default', function (callback) {
    runSequence(
        gulp.series(['sass', 'watch', async (done) => done]),
        callback
    )
})