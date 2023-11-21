const Koa = require('koa')
const { koaBody } = require('koa-body')
const cors = require('koa2-cors')
const port = process.env.PORT || 7070
const app = new Koa()
// const slow = require('koa-slow')
const createNews = require('./generator/generatorControl')
app.use(cors())


const router = require('./routers')

// console.log(new Date(Date.now()).toLocaleString())

// app.use(koaBody({
//   multipart: true
// }))

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.body = 'Hello World'
  }
  next()
})

// app.use(slow({ delay: 15000 }))
app.use(router())

app.listen(port)
console.log('listen port ' + port)

createNews()
