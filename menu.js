
/*------------------nav responsive-------------------------*/
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});


/*------------------ fin nav responsive-------------------------*/


function gris(id) {
        var botones = document.getElementsByClassName("botones");
        for (i = 0; i < botones.length; i++) {
        if (botones[i].classList.contains("seleccionado") == true) {
        botones[i].classList.remove("seleccionado");
        }
        
        }
        
        botones[id].classList.add("seleccionado");
}



/*ropa*/
$(document).ready(function(){
    $("#btn-lista").click(function(){
    $(".info").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn-cerrar").click(function(){
    $(".info").slideUp("slow");
    });
});

/*accesorios*/

$(document).ready(function(){
    $("#btn-lista_a").click(function(){
    $(".info_a").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn-cerrar_a").click(function(){
    $(".info_a").slideUp("slow");
    });
});

/*zapatos*/

$(document).ready(function(){
    $("#btn-lista_z").click(function(){
    $(".info_z").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn-cerrar_z").click(function(){
    $(".info_z").slideUp("slow");
    });
});

/*marcas*/

$(document).ready(function(){
    $("#btn-lista_m").click(function(){
    $(".info_m").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn-cerrar_m").click(function(){
    $(".info_m").slideUp("slow");
    });
});


/*------------------APARECE LA INFORMACION-------------------------*/

$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones section').hide();
    $('.secciones section:first'). show(200);

        $('ul.tabs li a').click(function(){
            $('ul.tabs li a').removeClass('active');
            $(this).addClass('active');
            $('.secciones section').hide();
    
            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
    });
});

/*------------------BOTON DESPEGABLE PRENDAS-------------------------*/

$(document).ready(function(){
    $("#btn-prendas").click(function(){
    $("info_prendas").slideDown("slow");
    });
});

$(document).ready(function(){
    $("#btn_cerrar_prendas").click(function(){
    $(".info_prendas").slideUp("slow");
    });
});

/*------------------CONTADOR-------------------------*/

$(document).ready(function(){

    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 1000

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad

            if (valor_actual < cantidad_maxima) {
                contador.innerText = Math.ceil(valor_actual + incremento)
                setTimeout(actualizar_contador, 5)

            } else{
                contador.innerText = cantidad_maxima
            }

            }

            actualizar_contador()
        }

        
    }

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting){
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 
    });

    const elementosHTML = document.querySelectorAll('.contador')

    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
    });

});


/*------------------FIN CONTADOR-------------------------*/