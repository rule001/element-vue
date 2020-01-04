module.exports={
    baseUrl: './',   // 基本路径
    outputDir: 'dist/'+now,   // 输出文件目录
    runtimeCompiler: false,
    chainWebpack: (config) => {
        config.entry = ["babel-polyfill", "./src/main.js"]
    },
    filenameHashing:true,
    configureWebpack: config => {
        // 引入注销控制台输出的插件
        config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,//console
                        drop_debugger: false,
                        pure_funcs: ['console.log']//移除console
                    },
                },
                sourceMap: false,
                parallel: true,
            }),
        )
    },
    productionSourceMap: false,     // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。

        modules: false
    },

    parallel: require('os').cpus().length > 1,
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        // disableHostCheck: true,   
        proxy: {             // 设置代理
            '/v1/*': {
                target:'http://www.baidu.com/',
                changeOrigin: true,
                secure: false
            },
        },
        before: app => {}
    }
}