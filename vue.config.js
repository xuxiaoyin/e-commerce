module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3000",
          changOrigin: true
        }
      }
      // before(app) {
      //   app.get('/api/login',(req, res) => {
      //     const {username,password} = req.query
      //     if (username === 'kaikeba' && password === '123') {
      //       res.json({code: 1, token: 'jilei'})
      //     } else {
      //       res.status(401).json({code: 0, msg: '用户名或密码错误'})
      //     }
      //   });

      //   function auth(req, res, next) {
      //     if (req.headers.token) {
      //       next()
      //     } else {
      //       res.status(401)
      //     }
      //   }

      //   app.get('/api/userInfo', auth, (req, res) => {
      //     res.json({code: 1, data: {name: 'Jerry'}})
      //   })
      // }
    }
  }
}
