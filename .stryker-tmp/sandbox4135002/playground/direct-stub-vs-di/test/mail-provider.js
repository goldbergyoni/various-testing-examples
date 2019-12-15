class MailProvider{
    send(toWhom, recipient){
        console.log('Really sending email');
    }
}

module.exports = new MailProvider();