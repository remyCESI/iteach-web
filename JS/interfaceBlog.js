
$(document).ready(function() {

    $.get(
        "CodeArticle.php",

        function(data){

         console.log(data)
            for (let i = 0; i < data.length; i++) {
               
                $("#Article").append('<option id="choix'+ i + '">' + data[i][6] + '</option>' )
                
            }
        },
        'json'

    )
    
})





