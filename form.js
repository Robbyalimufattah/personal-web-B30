function submitData(){

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if(document.getElementById('html').checked && document.getElementById('css').checked){
        console.log(document.getElementById('html').value, document.getElementById('css').value );

    } else if(document.getElementById('html').checked){
        console.log(document.getElementById('html').value);
        
    } else if(document.getElementById('css').checked){
        console.log(document.getElementById('css').value);
    }

    let skillHtml = document.getElementById('html').checked
    let skillCss = document.getElementById('css').checked
    if (skillHtml) {
        skillHtml = (document.getElementById('html').value);
    } else {
        skillHtml = ""
    } 
    
    if (skillCss) {
        skillCss = (document.getElementById('css').value);
    } else {
        skillCss = ""
    }




    if(name == ''){
    alert("nama harus diisi")
    } else if (email == ''){
        alert("email harus diisi")
    } else if (phone == ''){
        alert("phone harus diisi")
    } else if (subject == ''){
        alert("subject harus diisi")
    } else if (message == ''){
        alert("pesan harus diisi")
    } else {
        
        let emailReceiver = 'robbyfattah99@gmail.com'
        let a = document.createElement('a')
        a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo My Name ${name} ${message} contact me ${phone} skill ${skillCss} ${skillHtml}`

        // <a href="mailto:robby@mail.com?subject=test &body=hallo">send mail</a>
        a.click()
    }

    let dataObject = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    }
    console.log(dataObject);
}
