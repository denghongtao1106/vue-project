const { defineConfig } = require("@vue/cli-service");
const scssVariables = require("./src/theme/variables.scss.js");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: Object.keys(scssVariables)
          .map((k) => `\$${k.replace("_", "-")}: ${scssVariables[k]};`)
          .join("\n"),
      },
    },
  },
});
