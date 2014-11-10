
/* jshint node: true */
/* eslint-env node, browser */
"use strict";

var gulp     = require("gulp"),
    linttask = require("sc-eslint/estask.js");

global.errorMessage = "";

gulp.task("lint", linttask({
  "targets" : "gulpfile.js testdata-invalid-email.js test/testdata-invalid-email-tests.js"
}));

gulp.task("default", ["lint"]);
