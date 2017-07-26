// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo:{
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
  babel: {presets: ['latest']}
};


