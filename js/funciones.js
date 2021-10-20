//Categorys//
function traerInformacionCategorias() {
    $.ajax({
        url: "http://158.101.22.48:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias() {
    let var1 = {
        name: $("#CateGoryname").val(),
        description: $("#CategoryDescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var1),

        url: "http://158.101.22.48:8080/api/Category/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

//Cabins//
function traerInformacionCabins() {
    $.ajax({
        url: "http://158.101.22.48:8080/api/Cabin/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuestaCabins(respuesta);
        }
    });
}

function pintarRespuestaCabins(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].rooms + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionCabins() {
    let var2 = {
        name: $("#CabinName").val(),
        brand: $("#CabinBrand").val(),
        year: $("#CabinRooms").val(),
        description: $("#CabinDescription").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://158.101.22.48:8080/api/Cabin/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}
//Clients//
function traerInformacionClientes() {
    $.ajax({
        url: "http://158.101.22.48:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes() {
    let var3 = {
        email: $("#ClientEmail").val(),
        password: $("#ClientPassword").val(),
        name: $("#ClientName").val(),
        age: $("#ClientAge").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: "http://158.101.22.48:8080/api/Client/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });



}
//menssages//
function traerInformacionMensajes() {
    $.ajax({
        url: "http://158.101.22.48:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes() {
    let
        var4 = {
            messageText: $("#MessageText").val(),
        };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://158.101.22.48:8080/api/Message/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });
}
//reservations//
function traerInformacionResrvaciones() {
    $.ajax({
        url: "http://158.101.22.48:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].idReservation + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones() {
    let
        var5 = {
            idReservation: $("#idReservationCabin").val(),
            startDate: $("#ReservationStartDate").val(),
            devolutionDate: $("#ReservationDevolution").val(),
            status: $("#ReservationStatus").val(),
        };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),

        url: "http://158.101.22.48:8080/api/Reservation/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });
}