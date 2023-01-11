document.addEventListener("DOMContentLoaded", function(){
    $("#infoPrincipal").hide();
})
function clickCortes(){
    $("#listSorteos").fadeOut(0, function(){
        $("#listReservar").fadeOut(0, function(){
            $("#listado").fadeIn(250);
        })
    })
}
function clickSorteos(){
    $("#listReservar").fadeOut(0, function(){
        $("#listado").fadeOut(0, function(){
            $("#listSorteos").fadeIn(250);
        })
    })
}
function clickReservar(){
    $("#listSorteos").fadeOut(0, function(){
        $("#listado").fadeOut(0, function(){
            $("#listReservar").fadeIn(250);
        })
    })
}
window.addEventListener("scroll",function(){
    if(window.pageYOffset >= 100){
        $("#nave").css("background-color", "black");
        $("#rama").removeClass("justify-content-center").addClass("justify-content-start");
        $("#infoPrincipal").show();
    }
    else if(window.pageYOffset < 100){
        $("#nave").css("background-color", "");
        $("#rama").removeClass("justify-content-start").addClass("justify-content-center");
        $("#infoPrincipal").hide();
    }
})
