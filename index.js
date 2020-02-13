let express = require('express'),
    app = express()
    bodyParser = require('body-parser')
    session = require('express-session')

app.use( session({
    secret: 'keyboard xxx',
    cookie : { maxAge: 60000 },
    resave : false ,
    saveUninitialized: false 
}))

app.get('/', (req,res) => {
    let sess = req.session
    sess.views = (sess.views) ? ++ sess.views : 1
    res.send('This page is looaded ' + req.session.views + ' times')
})
//     cookieParser = require('cookie-parser')
// let urlencodedParser = bodyParser.urlencoded({ extended: false }); 

// // app.use('/use/:id/:name', (req, res, next) => {
// //     console.log(req.method)
// //     console.log(req.params.id)
// //     console.log(req.params.name)
// //     next()
// // })
// app.use( cookieParser('BNK'))
// app.use(express.static('./pub') )

// app.get('/getCk', (req,res) => {
//     console.log(req.cookies);
//     res.send('Yeah :' + req.cookies.name + req.cookies.card )
// })

// app.get('/setCk', (req,res) => {
//     res.cookie('card', 500)
//     res.cookie('name','John')
//     res.send('John got cookie card alredy')
// })
// app.post('/add',urlencodedParser, (req,res)=> {
//     let result = parseInt(req.body.a) + parseInt(req.body.b)
//     res.send(result.toString())
// })

// app.get('/', (req, res) => {
//     res.send('Hello World'  )
// })
app.listen(80, () => { console.log('Server is running') })