// Cross Origin Resource Sharing (cors)
// const whitelist = ['https://www.yoursite.com','https://www.google.com','http://127.0.0.1:5500','http://localhost:3500','http://54.91.233.27:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
        //if(whitelist.indexOf(origin) !== -1 || !origin){
           // callback(null, true)
       // } else {
            //callback(new Error('Not allowed by cors'))
       // }
    }, 
    optionsSuccessStatus: 200
}

module.exports = corsOptions