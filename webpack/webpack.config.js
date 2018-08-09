const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
//new webpack.BannerPlugin('yayay');
const entry=require('./webpack_config/entry_webpack');
const CopyPlugin=require('copy-webpack-plugin');
module.exports={
    mode:"development",
    //mode:"production",
    entry:entry,
    /*entry:{
        "index":'./src/index.js',
        "index2":'./src/index2.js'
    },*/
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js',
       // publicPath:'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:["style-loader","css-loader"]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },"postcss-loader"],
                    publicPath:"../"
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'5000',
                            outputPath:'image/'
                        }
                    }
                ]
            },
            {
                test:/\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                //use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify: {
                removeAttributeQuotes:true
            },
            hash:true,
           // title:'fellow23',
            chunks:['index']
        }),
        new ExtractTextPlugin("css/styles.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'./src/*.html'))
        }),
        new webpack.BannerPlugin('yayay'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyPlugin([{
            from:__dirname+'/src/public',
            to:"./public"
        }])
    ],
    devServer:{
        contentBase:'./dist',
        host:'127.0.0.1',
        port:'8081',
        compress:true,
        open:true
    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    }
};