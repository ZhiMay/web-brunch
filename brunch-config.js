// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { joinTo: 'app.css' }
};

exports.plugins = {
  babel: { presets: ['latest'] },
  handlebars: {
    overrides: handlebars => {
      handlebars.JavaScriptCompiler.prototype.nameLookup = (parent, name, type) => {
        // Your custom nameLookup method.
      }
    },
    include: {
      runtime: false // include the full compiler javascript
    },
    pathReplace: /0^/, // match nothing, use full file path for module name
    locals: {
      // static data
    }
  }
  // static: {
  //   processors: [
  //     require('html-brunch-static') {
  //       processors: /\/partials\//,
  //       partials: /\/partials\//,
  //       layouts: /\/layouts\//,
  //       handlebars: {
  //         enableProcessor:true,
  //         helpers: { }
  //       }
  //     }
  //   ]

  // }
};
exports.hooks={
  preCompile() {
      console.log("About to compile...");
      return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
      console.log(generatedFiles.map(f => f.path));
  }
}

