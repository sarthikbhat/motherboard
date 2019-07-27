const sgMail = require('@sendgrid/mail');
var helper = require('sendgrid').mail;
var {sendGridApiKey} = require('../config/config');
sgMail.setApiKey(sendGridApiKey);

const msg = {
  to: 'test@example.com',
  from: 'shahvimal1302@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sendEmail = async(msgDetails)=>{
    if(msgDetails){
     try{
        await sgMail.send({
            to: msgDetails.toEmail,
            from : 'shahvimal1302@gmail.com',
            templateId: 'd-47ca5ec0c54144759e6732fd4f21e7d9',
            substitutionWrappers: ['{{', '}}'],
            dynamic_template_data: {
                otp:msgDetails.otp
              },
        });
     }catch(e){
         console.log(e);
         return false;
     }        
    return true;
    }
    return true;
}


module.exports = {
    sendEmail
}