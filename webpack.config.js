
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
    	trackinHome: './src/main/resources/static/js/trackin-home.js'
    },
    output: {
        filename: '[name].js'
    }
};