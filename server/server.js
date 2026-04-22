const express = require("express")
const sequelize = require("./models/index")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const xssClean = require("xss-clean")
const helmet = require("helmet")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(xssClean())
app.use(helmet())

// Test database connection
;(async () => {
  try {
    await sequelize.authenticate()
    console.log("Database connected successfully.")
  } catch (error) {
    console.error("Database connection error:", error)
  }
})()

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  if (!res.headersSent) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message })
  }
})

// Routes
app.use("/api/auth", require("./routes/authRoutes"))

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
