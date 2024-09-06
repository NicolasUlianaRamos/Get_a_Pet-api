const express = require("express")
const cors = require("cors")

const app = express()


// config json response
app.use(express.json())

// solve cors
app.use(cors({ credentials: true, origin: "https://get-a-pet-alpha.vercel.app"}))

// Public folder for images
app.use(express.static("public"))

// Routes
const UserRoutes = require("./routes/UserRoutes.js")
const PetRoutes = require("./routes/PetRoutes.js")

app.use("/users", UserRoutes)
app.use("/pets", PetRoutes)


app.listen(5000)
