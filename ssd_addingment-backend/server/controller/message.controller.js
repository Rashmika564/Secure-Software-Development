const db = require('../model')
const decryptAndReturn =  require('../utils/decryptData')


const Message = db.Message;

//save message 
const addMessage = async (req, res, next) => {

  
    console.log("hello i m saving")
    try {
        const message = req.body.message;
        let decrypted = decryptAndReturn(message)
        Message.create({
            message: decrypted,
        }).then(res => {
            console.log(res)
        })
    } catch (err) {
        console.error('Failed to create a new record : ', err);
    }
}


const viewmessages  = async (req, res, next) => {

    try {
       
        const result= await Message.findAll();
        res.send({
            messages: result
        })
    } catch (err) {
        console.error('Failed Viewrecord : ', err);
    }

}


module.exports = { 
    addMessage,
    viewmessages
};