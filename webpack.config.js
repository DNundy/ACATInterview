/*
* @Author: Administrator
* @Date:   2017-09-07 20:39:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 10:14:07
*/
var webpack				= require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var htmlWebpackPlugin 	= require('html-webpack-plugin');
var path 				= require('path');
var WEBPACK_ENV 		= process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig 		= function (name,title) {
	return {
		filename 		: "/view/"+name + ".html",
		template 		: "./source/view/"+name + ".html",
		inject 			: "true",
		hash 			: "true",
		title 			: title,
		chunks 			: ["common",name]
	};
}

var config = {
	entry : {
		'index' 			: "page/index/index.js",
		'apply' 			: "page/apply/index.js",
		'common' 			: ["page/common/index.js"]
	},

	output : {
		path 			: path.resolve(__dirname,"public"),/*必须是绝对路径*/
		publicPath 		: '/',
		filename 		: "js/[name].js"
	},

	externals : {
		jquery : 		"jQuery"
	},

	resolve : {
		alias: {
			assets 		: path.resolve(__dirname, 'source/assets/'),
			page 		: path.resolve(__dirname, 'source/page/'),
			service 	: path.resolve(__dirname, 'source/service/'),
			tool 		: path.resolve(__dirname, 'source/tool/'),
			view 		: path.resolve(__dirname, 'source/view/')
		}
	},

	plugins : [
		new ExtractTextPlugin({
			filename : 	"css/[name].css"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name : 		"common",
			filename : 	"js/common.js"
		}),
		new htmlWebpackPlugin(getHtmlConfig('index',"首页")),
		new htmlWebpackPlugin(getHtmlConfig('apply',"加入我们"))
	],

	module: {
		rules: [
		{
			test : /\.css$/,
	        use : ExtractTextPlugin.extract({
				fallback : "style-loader",
				use : [
					{loader:"css-loader"},
					{
						loader:"postcss-loader",
						options: {
				          	plugins: [
				          		require('postcss-import')(),
				          		require('autoprefixer')({broswers:['last 5 versions']})
				          	]
				        }
					}
				],
			})
		},
		{
			test : /\.(jpg|jpeg|png|gif|svg|woff|eot|ttf)\??.*$/i,
			use : [
				{
					loader: 'url-loader',
					options: {
						name: 'assets/[name].[ext]'
					}
				}
			]
		},
		{	
			test : /\.string$/,
			use : [
				{
					loader: 'html-loader',
					options: {
				        minimize: true,
				        removeAttributeQuotes: false
					}
				}
			]
		}]
	}

}

if(WEBPACK_ENV === 'dev' ) {
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports=config;