const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    outputDir: '../../../public/vue_temp',
    // assetsDir: '../'
    indexPath: '../../resources/views/app.blade.php'
})
