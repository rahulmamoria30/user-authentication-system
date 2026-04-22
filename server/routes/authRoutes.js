const express = require("express")
const { body, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User")

const router = express.Router()

// Register User
router.post(
  "/register",
  [
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { username, email, password } = req.body

    try {
      const existingUser = await User.findOne({ where: { email } })
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      })

      res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
      next(error)
    }
  }
)

// Login User
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" })
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      )

      res.status(200).json({ token, username: user.username })
    } catch (error) {
      next(error) 
    }
  }
)

module.exports = router
