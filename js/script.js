function clickSobremi(){
    $("#conocimientos").fadeOut(1, function(){
        $("#contacto").fadeOut(1,function(){
            $("#sobremi").slideToggle(800);
        });
    });
}
function clickConocimientos(){
    $("#sobremi").fadeOut(1, function(){
        $("#contacto").fadeOut(1, function(){
            $("#conocimientos").slideToggle(800);
        })
    });
}
function clickContacto(){
    $("#conocimientos").fadeOut(1, function(){
        $("#sobremi").fadeOut(1, function(){
            $("#contacto").slideToggle(800);
        })
    });
}
// function clickSorteos(){
//     $("#listReservar").fadeOut(0, function(){
//         $("#listado").fadeOut(0, function(){
//             $("#listSorteos").fadeIn(250);
//         })
//     })
// }
// function clickReservar(){
//     $("#listSorteos").fadeOut(0, function(){
//         $("#listado").fadeOut(0, function(){
//             $("#listReservar").fadeIn(250);
//         })
//     })
// }