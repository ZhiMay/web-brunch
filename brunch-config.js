// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': /^app/
    }
  }
};

exports.hooks = {
  preCompile() {
    console.log("About to compile...");
    return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
    console.log(generatedFiles.map(f => f.path));
  }
}

exports.plugins = {
  babel: { presets: ['latest'] },
  "static": {
    processors: [
      require('html-brunch-static')({
        processors: [],
        defaultContext: {},
        partials: /\/partials\//,
        layouts: /\/layouts\//,
        handlebars: {
          enableProcessor: true,
          helpers: {
            ifEq: function(a, b, opts) {
              if (a === b) {
                return opts.fn(this);
              } else {
                return opts.inverse(this);
              }
            },
            ifEqDebug: function(a, b, opts) {
              console.log("a: '" + a + "'");
              console.log("b: '" + b + "'");
              if (a === b) {
                return opts.fn(this);
              } else {
                return opts.inverse(this);
              }
            },
            log: function(msg) {
              var msg;
              msg = 1 <= arguments.length ? slice.call(arguments, 0) : [];
              return console.log(msg);
            }
          }
          //////////
        }
      })
    ]
  }
};

