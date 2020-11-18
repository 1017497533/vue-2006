module.exports = {
  lintOnSave: false,
  devServer: {
   
    proxy: {
      '/api': {
        //正则匹配到以这个开头的时候 就用代理
        target:"http://chst.vip" ,
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  }
};

