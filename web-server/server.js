const port = 3000
const brianTest='abc';

require('./src/app').listen(port, () => {
    console.log(`Pixel webserver ready at http://localhost:${port}`)
})
