$('#sendMail')['click'](function() {

    Email.send({
        SecureToken : "70021815-0dd3-4edd-912f-15581336147b",
        To : 'iteach@outlook.fr',
        From : "iteach@outlook.fr",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      alert("non")
    );
})
