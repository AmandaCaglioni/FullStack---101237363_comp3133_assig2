const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user')
const Listing = require('../models/listing');
const Booking = require('../models/booking')

router.get('/getData', async(req, res) => {
    try {
        res.json("Account Created")   
    } catch (error) {
        
    }
})

router.post('/register', async(req, res) => {
    try {
        const {username, firstname, lastname, password, email, type} = req.body;
        console.log(email, password)
        if(!username || !firstname || !lastname || !type || !email || !password){
            return res.status(400).json({msg: "Please Fill all Fields"})
        }
        
        if(!validateEmail(email)){
            return res.status(400).json({msg: "Invalid Email"})
        }

        const user = await User.find({email});
        if(user) return res.status(400).json({msg: "Email already exist"});

        if(password.length < 6){
            return res.status(400).json({msg: "Password should be atlest 6 characters"})
        }

        const HashPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            username, firstname, lastname, password, email, type
        });
        await newUser.save();
        res.json("Account Created")       
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
});

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
        const user = await User.findOne({email});
        console.log(user)

        if(!user) return res.status(400).json({msg: "This Email does not exist"})
        
        if(!(password == user.password)){
            return res.status(400).json({msg: "Password is incorrect"})
        }
        // const isMatch = await bcrypt.compare(password, user.password);
        // if(!isMatch) return res.status(400).json({msg: "Password is incorrect"})
        res.json(user.type);
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
});

router.post('/addListing', async(req, res) => {
    try {
        const {id, title, description, street, city, postalCode, price, email, username} = req.body;
        console.log(id, title, description, street, city, postalCode, price, email, username);
        if(!id || !title || !description || !street || !city || !postalCode || !price || !email || !username){
            return res.status(400).json({msg: "Please Fill all Fields"})
        }

        const newListing = new Listing({
            id, title, description, street, city, postalCode, price, email, username
        });
        await newListing.save();
        res.json("Listing Added")
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
});



router.get('/viewListing', async(req, res) => {
    try {
        const listing = await Listing.find({});
        res.json(listing);
    } catch (error) {
        
    }
})

router.delete('/deleteListing/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        await Listing.findByIdAndDelete(req.params.id);
        res.json("Deleted")
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
})

router.delete('/deleteBooking/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        await Booking.findByIdAndDelete(req.params.id);
        res.json("Deleted")
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
})

router.post('/addBooking', async(req, res) => {
    try {
        const {id, bid, date, start, end, username} = req.body;
        console.log(id, bid, date, start, end, username)
        if(!id || !bid || !date || !start || !end || !username){
            return res.status(400).json({msg: "Please Fill all Fields"})
        }

        const newBooking = new Booking({
            id, bid, date, start, end, username
        });
        await newBooking.save();
        res.json("Booking Added")
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
});

router.get('/viewBooking', async(req, res) => {
    try {
        const booking = await Booking.find({});
        res.json(booking);
    } catch (error) {
        
    }
})

router.get('/viewBookings/:id', async(req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.json(booking);
    } catch (error) {
        
    }
})

router.post('/search', async(req, res) => {
    try {
        const {name, city, postalCode} = req.body;
        const listing = await Listing.findOne({$or: [{title: name}, {city: city}, {postalCode: postalCode}]});
        res.json(listing)
        
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


module.exports = router;