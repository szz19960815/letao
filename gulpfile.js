var gulp = require("gulp"),
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload");

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputstyle:compressed}))
		.pipe(gulp.dest("css")),
		.pipe(livereload());
});

gulp.task("watch",function(){
	livereload.listen();
	gulp.watch("sass/*.scss",["sass"]);
})