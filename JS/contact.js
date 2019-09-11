$('#sendMail')['click'](function() {
    email = $('#Email')['val']();
    message = $('#Message')['val']();
    sujet = $('#Objet')['val']();
    if (email['length'] > 0 && tel['length'] > 0 && message['length'] > 0 && sujet['length'] > 0) {
        Email['send']({
            Host: 'smtp.elasticemail.com',
            Username: '',
            Password: '',
            To: 'iteach@outlook.fr',
            From: 'iteach@outlook.fr',
            Subject: sujet,
            Body: 'de:' + email + 'son message est: ' + message
        })['then'](alert('merci beaucoup'))
    } else {
        alert('remplissez tous les champs s\'il vous plait')
    }
})