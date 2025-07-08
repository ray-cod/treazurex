const express = require('express')
const cors = require('cors')
const { logger } = require("./middlewares/logEvents");
const app = express()

const PORT = process.env.PORT || 3500

// custom middleware logger
app.use(logger);

const whiteList = ['http://localhost:3500']

// Cross origin ressource sharing
const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else{
            callback(new Error("The origin isn't allowed by CORS"))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


// Running server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))