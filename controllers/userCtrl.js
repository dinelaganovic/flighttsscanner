const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const userCtrl = {
    registerUser: async(req, res) => {
        try {
            const { username, email, password } = req.body;
            const user = await Users.findOne({ email: email })
            if (user) return res.status(400).json({ msg: "The email already exists." })

            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                username: username,
                email: email,
                password: passwordHash
            })
            await newUser.save((err,user)=>{
                if(err){
                    res.json(400)
                }else{
                    const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'flightsscanner81@gmail.com',
                        pass: 'VerifikujEmailPlease:((',
                    }
                });
                const mailOptions = {
                    from: 'flightsscanner81@gmail.com',
                    to: user.email,
                    subject: 'Verify your email',
                    html:
                      '<p><b>Hello from FlightsScanner</b></p>' +
                      '<p>Please click on the button to verify your email!<br/></p>'+
                      '<p><a href="https://flightsscannerapp.herokuapp.com/prijava"><button style="background-color:black;color:white;">Verify</button> </a></p>'
                }
                transporter.sendMail(mailOptions, (err, _) => {
                    if (err) {
                        res.status(500).json({
                            error: "Something went wrong!"
                        });
                    } else {
                        res.status(200).json({
                            msg: "Email sent!"
                        });
                    }
                });
                res.json({ msg: "Verify email" });
            }
            })

        
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        } 
    },
    loginUser: async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email: email })
            if (!user) return res.status(400).json({ msg: "User does not exist." })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })

            // if login success create token
            const payload = { id: user._id, name: user.username }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

            res.json({ token })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    verifiedToken: (req, res) => {
        try {
            const token = req.header("Authorization")
            if (!token) return res.send(false)

            jwt.verify(token, process.env.TOKEN_SECRET, async(err, verified) => {
                if (err) return res.send(false)

                const user = await Users.findById(verified.id)
                if (!user) return res.send(false)

                return res.send(true)
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = userCtrl