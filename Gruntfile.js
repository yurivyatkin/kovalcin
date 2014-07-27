/* globals module, require */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      global: {
        options: {
          style: "compressed"
        },
        files: {
          "site/css/global-unprefixed.css": "scss/global.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "site/css/global-unprefixed.css",
        dest: "site/css/global.css"
      }
    },

    shell: {
      jekyllBuild: {
        command: "jekyll build"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["jekyll/**/*.md", "jekyll/*.html", "jekyll/**/*.html"],
        tasks: ["shell", "sass", "autoprefixer"]
      },
      css: {
        files: ["scss/*.scss"],
        tasks: ["sass", "autoprefixer"]
      },
      svg: {
        files: ["jekyll/svg/*.svg"],
        tasks: ["svgstore", "shell", "sass", "autoprefixer"]
      }
    },

    svgstore: {
      options: {
        prefix : "shape-",
        cleanup: false,
        svg: {
          style: "display: none;"
          // maybe weird xmlss garbage?
        }
      },
      default: {
        files: {
          "jekyll/_includes/svg-defs.svg": ["jekyll/svg/*.svg"]
        }
      }
    }

  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["sass", "shell", "watch"]);

};
