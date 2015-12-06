#! /usr/bin/env node

// Quick preview jupyter notebooks

var open = require("open");
var exec = require("child_process").exec;
var args = process.argv.slice(2);
var files = args;

exec("jupyter nbconvert --to html \"" + files.join("\" \"") + "\"",
     function (error, stdout, stderr) {
         if (error == null) {
             files.forEach(function(file) {
                 open(file.slice(0, -5) + "html");
             });
         }
     });
