const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Niekorektny email").isEmail(),
    check("password", "Minimum 6 znaków").isLength({ min: 6 }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Niepoprawne dane rejestracyjne",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "Ten użytkownik już istnieje" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Utworzono użytkownika" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Coś poszło nie tak. Proszę spróbuj ponownie2" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Wpisz prawidlowy email").normalizeEmail().isEmail(),
    check("password", "Wpis haslo").exists(), //должен существовать
  ],
  async (req, res) => {
    try {
      const erorrs = validationResult(req);

      if (!erorrs.isEmpty()) {
        return res.status(400).json({
          erorrs: erorrs.array(),
          message: "Blednie dane",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Nie znaleziono takiego uzytkownika" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Bledne haslo, sprobuj ponownie" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Wystapil blad" });
    }
  }
);

module.exports = router;
