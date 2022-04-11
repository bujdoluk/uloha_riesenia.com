const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
//const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('gulp4-run-sequence');

gulp.task('sass', async () => {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', async () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('useref', async () => {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('fonts', async () => {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

// gulp.task('images', async () => {
//     return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//         // Caching images that ran through imagemin
//         .pipe(cache(imagemin({
//             interlaced: true
//         })))
//         .pipe(gulp.dest('dist/images'))
// });

gulp.task('clean:dist', async () => {
    return del.sync('dist');
})

gulp.task('watch', async () => {
    gulp.watch('app/scss/*.scss', gulp.series('sass'));

    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('build', (callback) => {
    runSequence('clean:dist',
        gulp.series(['sass', 'useref', 'fonts', async (done) => done]),
        callback
    )
})

gulp.task('default', function (callback) {
    runSequence(
        gulp.series(['sass', 'watch', async (done) => done]),
        callback
    )
})