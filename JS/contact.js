$('#sendMail')['click'](function() {
    email = $('#Email')['val']();
    message = $('#Message')['val']();
    sujet = $('#Objet')['val']();
    if (email['length'] > 0  && message['length'] > 0 && sujet['length'] > 0) {
        Email['send']({Host: 'smtp.elasticemail.com',
        Username: 'rem.vancamp@gmail.com',
        Password: '42da6792-dd75-412a-a301-35a8d7180a54',
        To: 'remy.vancamp@viacesi.fr',
        From: 'rem.vancamp@gmail.com',
        Subject: sujet,
        Body: 'de:' + email + 'son message est: ' + message
           
        })['then'](alert('merci beaucoup'))
    } else {
        alert('remplissez tous les champs s\'il vous plait')
    }
// }) Host: 'smtp.elasticemail.com:2525',
//             Username: 'iteach@outlook.fr',
//             Password: 'ee0474ad-22db-4d7e-91e1-c11c38cb606f',
//             To: 'rem.vancamp@gmail.com',
//             From: 'iteach@outlook.fr',
//             Subject: sujet,
//             Body: 'de:  ' + email + '  son message est:   ' + message