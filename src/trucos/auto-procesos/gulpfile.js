/** Gulp
 * Se encarga de ejecutar scripts o tareas, mientras que webpack es un empaquetador de frontend
 * 
 */

const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', (callback) => {
  console.log('construyendo el sitio')
  setTimeout(() => {
    callback()
  },2000)
})

gulp.task('serve', (callback) => {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }))
})

gulp.task('default', gulp.series('build', 'serve'))