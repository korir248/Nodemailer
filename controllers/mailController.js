const messageObj = require("../helpers/message");
const sendMail = require("../mail/mail");

const sendEmail = (req,res)=>{
    try{
        sendMail(messageObj).then((result,err)=>{
            if(err) res.send(err.message)
            return res.send(result)
    
        })}catch(err){
            console.log(err.message);
        }
}

module.exports = sendEmail