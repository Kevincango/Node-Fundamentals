const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb)=> {
    console.log('Building the site');
    setTimeout(()=>{
        cb();
    },1200);
})

gulp.task('serve', ()=> {
    gulp.src('www')
    .pipe(server({
        livereolad: true,
        open: true,
    }))
});

gulp.task('default', gulp.series('build', 'serve'));