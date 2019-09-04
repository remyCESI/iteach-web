// $('#send').click(function(){

//     $.post(
//         '../PHP/InsertArticle.php',
//         {
//             pathImg : $("#IMG").val(),
//             Titre : $("#Titre").val(),
//             Date : $("#Date").val(),
//             Contenu : $("#Message").val()

//         })

//         function success(){
//             alertify.set('notifier','position', 'top-right');
//             alertify.success('<i class="fas fa-check-square"></i> Bonjour Dim');
//         }

    

// })
    $.get(
        "../PHP/CodeArticle.php",

        function(data){
            for (let i = 0; i < data.length; i++) {
       
            $("#Titreselection").append('<option id="choix'+ i + '">' + data[i][5] + '</option>' )
            
            }
        },
        'json'

    )
    

    $('#delete').click(function(){

        $.post(
            '../PHP/SuppressionArticle.php',
            {
                CodeArticle : $("#Titreselection").val(),
                
    
            })
    
            function success(){
                alertify.set('notifier','position', 'top-right');
                alertify.success('<i class="fas fa-check-square"></i> Bonjour Dim');
            }
 
    
    
    })
