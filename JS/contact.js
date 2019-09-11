$('#bouttonS')['click'](function() {
    email = $('#email')['val']();
    tel = $('#tel')['val']();
    message = $('#message')['val']();
    sujet = $('#sujet')['val']();
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