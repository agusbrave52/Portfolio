function clickSobremi(){
    $("#conocimientos").fadeOut(1, function(){
        $("#contacto").fadeOut(1,function(){
            $("#proyectos").fadeOut(1, function(){
                $("#sobremi").slideToggle(800);
            });
        });
    });
}
function clickConocimientos(){
    $("#sobremi").fadeOut(1, function(){
        $("#contacto").fadeOut(1, function(){
            $("#proyectos").fadeOut(1, function(){
                $("#conocimientos").slideToggle(800);
            });
        });
    });
}
function clickContacto(){
    $("#conocimientos").fadeOut(1, function(){
        $("#sobremi").fadeOut(1, function(){
            $("#proyectos").fadeOut(1, function(){
                $("#contacto").slideToggle(800);
            });
        });
    });
}
function clickProyectos(){
    $("#conocimientos").fadeOut(1, function(){
        $("#sobremi").fadeOut(1, function(){
            $("#contacto").fadeOut(1, function(){
                $("#proyectos").slideToggle(800);
            });
        });
    });
}
