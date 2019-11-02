
const path = require('path')
const webpack = require('webpack')


//插件作用：1.自动在内存中根据指定页面生成一个内存页面
//2.自动把打包好的bundle.js追加到页面中
const htmlWebpackPlugin = require('html-webpack-plugin')
//这个配置文件，起始就是一个JS文件，通过Node中的模块操作，像外暴露了一个配置对象
module.exports = {
    entry://入口，表示要使用webpack打包哪个文件
    path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[//配置插件节点
        new htmlWebpackPlugin({
            //在内存中生成HTML的插件
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'//指定生成的页面名称
        })
    ],
    module:{
        rules:[//第三方规则
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','scss-loader']},
        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=2333&name=[hash:8]-[name].[ext]']},//图片路径loader
        //limit给定的值，是图片的大小，单位是byte，如果我们引用的图片，大于或者等于给定的limit值，则不会被转为base64格式的字符串
        //如果小于给定的limit值，则会被转为base64的字符串
        {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},//字体
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级es6语法
        { test: /\.vue$/, use: 'vue-loader' },//配置处理.vue文件的loader
    ]
    },
    resolve:{
        alias:{
            //修改Vue导入时的路径
            // "vue$":"vue/dist/vue.js"
        }
    }

}