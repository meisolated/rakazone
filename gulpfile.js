const header = require("gulp-header")
const pkg = require("./package.json")
const gulp = require("gulp")

const headerContent = `/*!
 * Copyright (C) ${new Date().getFullYear()} ${pkg.author.name} - All Rights Reserved 
 * You may use, distribute and modify this code under the
 * terms of the license.
 *
 * You should have received a copy of the license with
 * this file. If not, please write to: isolatedbot@gmail.com,
 * 
 * ${pkg.name} v${pkg.version}
 * Homepage: ${pkg.homepage}
 * Copyright ${new Date().getFullYear()} ${pkg.author.name}
 * Author: ${pkg.author.name} (${pkg.author.url})
 * Date: ${new Date().toLocaleDateString()}
 * Time: ${new Date().toLocaleTimeString()}
 * */\n\n`

gulp.src("./src/*.js").pipe(header(headerContent)).pipe(gulp.dest("./dist/"))
console.log(headerContent)
