var gulp = require("gulp");

gulp.task("printhello", function() {
	console.log("Hello");
});

gulp.task("printworld", function() {
	console.log("world");
});

gulp.task("all", ["printhello", "printworld"]);

gulp.task("default", ["all"]);
