const mongoose = require('mongoose')
const loginModel = require('../models/loginModel')
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')


const login = async function (req, res) {
    
    userName = req.body.name
    userPassword = req.body.password
    let user = await userModel.findOne({ name: userName, password: userPassword, isDeleted: false })
    if (user) {
        const generatedToken = jwt.sign({ userId: user._id }, "radium")
        res.send({ status: true, data: user._id, token: generatedToken })
    } else {
        res.send({ status: false, message: 'Invalid credentials' })
    }



}


const getDetails = async function (req, res) {
    //let token = req.headers['x-auth-token']
    //if(!token) {
    //return res.send({status: false, message: 'No authentication token present'})
    // } else {
    // let decodedToken = jwt.verify(token, 'radium')

    let userId = req.params.userId
    if (req.decoded.userId === req.params.userId) {
        let userDetails = await userModel.findOne({ _id: userId, isDeleted: false })

        if (userDetails) {
            res.send({ status: true, data: userDetails })


        } else {
            res.send({ status: false, message: 'User not found' })
        }

    }else{
        res.send({msg:"token id and param id is not valid"})
    }
}



const update = async function (req, res) {
    
    // let token = req.headers['x-auth-token']
    // if (!token) {
    //     return res.send({ status: false, message: 'No authentication token present' })
    // }
    // else {
    //     let decodedToken = jwt.verify(token, 'radium')

        let userId = req.params.userId
        let emailUpdate=req.body.email

        if (req.decoded.userId === req.params.userId) {

            let userDetails = await userModel.findOneAndUpdate({ _id: userId }, { email: emailUpdate}, { new: true })
            if (userDetails) {
                res.send({ status: true, data: userDetails })


            } else {
                res.send({ status: false, message: 'User not found' })
            }

        } else {
            res.send({ status: false, message: 'Token not valid' })
        }

    }




module.exports.login = login

module.exports.getDetails = getDetails
module.exports.update = update

