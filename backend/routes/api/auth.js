const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

//@route GET api/auth
//@desc  Authenticate user using token in header
//@access public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.msg);
    res.status(500).send('Server Error!');
  }
});

//@route POST api/auth
//@desc Authenticate user & get token

router.post(
  '/',
  [
    check('email', 'Please add email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid user credential' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid user credential' }] });
      }

      //Return jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      };
      // check if we can return the res.json({token})!!! delete comment later
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error!!!!');
    }
  }
);

module.exports = router;
