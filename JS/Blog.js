
$(document).ready(function () {

    

    $.get(
        "../PHP/CodeArticle.php",

        function (data) {

            console.log(data)
            for (let i = 0; i < data.length; i++) {

                $("#ActualiteIteach")
                    .append('<div class="card mb-4"><img width="10%" class="card-img-top" src="' + 
                    data[i][1] +
                     '"alt="Card image cap"><div class="card-body"><h2 class="card-title">' + 
                     data[i][2]+
                     '</h2><p class="card-text lead textArtcileBlog">'+
                      data[i][3]+
                      '</p></div><div class="card-footer text-muted"> Posté le '+
                      data[i][4]+'</div></div >' )

            }
        },
        'json'

    )

})

   
 
