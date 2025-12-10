let Registro = [];


const _storedRegistro = localStorage.getItem("Registro");
if (_storedRegistro) {
    try {
        Registro = JSON.parse(_storedRegistro);
    } catch (err) {
        console.error("Error parseando 'Datos' desde localStorage:", err);
        Registro = [];
    }
}
let Datos = [];
const _storedDatos = localStorage.getItem("Datos");
if (_storedDatos) {
    try {
        Datos = JSON.parse(_storedDatos);
    } catch (err) {
        console.error("Error parseando 'Datos' desde localStorage:", err);
        Datos = [];
    }
}
let Base;
let D = 1;
let Suma = 0;
let d1; let d2; let d3;
let Estado;
let TiempoG;
let DiasR = 0;
function Calcular(){
    let Max = +document.getElementById("Tmax").value;
    let Min = +document.getElementById("Tmin").value;
    let Planta = document.getElementById("Planta").value;   
    if(Max != "" || Min != ""){
        Suma = 0;
        for (let i = 0; i < Registro.length; i++) {
            Suma += Registro[i];
        }
    switch(Planta){
        case "tomate":
        Base = 18;
        if(Suma >= 0 && Suma <=80){
            Estado = "Germinación";
            document.getElementById("imagen").src = "tomateplantula.png";
        } else if(Suma >80 && Suma <= 200){
            Estado = " Establecimiento";
            document.getElementById("imagen").src = "tomatevegetativo.png";
        } else if(Suma >200 && Suma <= 500){
            Estado = " Crecimiento vegetativo";
            document.getElementById("imagen").src = "tomatevegetativo.png";
        } else if(Suma >500 && Suma <=700){
            Estado = " Floración";
            document.getElementById("imagen").src = "tomatefructificacion.png";
        } else if(Suma >900 && Suma <= 1200){
            Estado = " Maduración inicial";
            document.getElementById("imagen").src = "tomatecosecha.png";
        } else if(Suma >1200 && Suma <=1500){
            Estado = " Cosecha";
            document.getElementById("imagen").src = "tomatecosecha.png";
        }
        break;
        case "lechuga":
        Base =  15;
        if(Suma >= 0 && Suma <=80){
            Estado = " Germinación";
            document.getElementById("imagen").src = "lechugagerminacion.png";
        } else if(Suma >80 && Suma <= 200){
            Estado = " Establecimiento";
            document.getElementById("imagen").src = "lechugadesarrollo.png";
        } else if(Suma >200 && Suma <= 400){
            Estado = " Crecimiento vegetativo";
            document.getElementById("imagen").src = "lechugavegetativo.png";
        } else if(Suma >400 && Suma <=600){
            Estado = " Desarrollo de cabeza";
            document.getElementById("imagen").src = "lechugavegetativo.png";
        } else if(Suma >600 && Suma <=900){
            Estado = " Maduracion";
            document.getElementById("imagen").src = "lechugamaduracion.png";
        } else if(Suma >900){
            Estado = " Floracion";
            document.getElementById("imagen").src = "lechugamaduracion.png";
        } 
        break;
        case "zanahoria":
        Base = 16;
        if(Suma >= 0 && Suma <=120){
            Estado = " Germinación";
            document.getElementById("imagen").src = "zanahoriager.png";
        } else if(Suma >120 && Suma <= 300){
            Estado = " Establecimiento";
            document.getElementById("imagen").src = "zanahoriadesarrollo.png";
        } else if(Suma >300 && Suma <= 700){
            Estado = " Crecimiento vegetativo";
            document.getElementById("imagen").src = "zanahoriacrecimiento.png";
        } else if(Suma >700 && Suma <=1100){
            Estado = " Engrosamiento de la raiz";
            document.getElementById("imagen").src = "zanahoriaengrosamiento.png";
        } else if(Suma >1100 && Suma <=1500){
            Estado = " Maduracion";
            document.getElementById("imagen").src = "zanahoriamaduracion.png";
        } else if(Suma >1500){
            Estado = " Floracion";
            document.getElementById("imagen").src = "zanahoriamaduracion.png";
        
        } 
        break;
        case "pimiento":
        Base = 21;
        if(Suma >= 0 && Suma <=120){
            Estado = " Germinación";
            document.getElementById("imagen").src = "GERMINACION.png";
        } else if(Suma >120 && Suma <= 300){
            Estado = " Establecimiento";
            document.getElementById("imagen").src = "CRECIMIENTO.png";
        } else if(Suma >300 && Suma <= 700){
            Estado = " Crecimiento vegetativo";
            document.getElementById("imagen").src = "CRECIMIENTO.png";
        } else if(Suma >700 && Suma <=1000){
            Estado = " Floracion"
            document.getElementById("imagen").src = "CRECIMIENTO.png";
        } else if(Suma >1000 && Suma <=1300){
            Estado = " Fructificacion";
            document.getElementById("imagen").src = "FRUCTIFICIOPN.png";
        } else if(Suma >1300 && Suma <=1600){
            Estado = " Maduracion Inicial";
            document.getElementById("imagen").src = "COSECHA.png";
        } else if(Suma >1600 && Suma <=2000){
            Estado = "Cosecha"
            document.getElementById("imagen").src = "COSECHA.png";
        }
        break;
        case "girasol":
        Base = 20;
        if(Suma >= 0 && Suma <=100){
            Estado = " Germinación";
            document.getElementById("imagen").src = "germi.png";
        } else if(Suma >100 && Suma <= 250){
            Estado = " Establecimiento";
            document.getElementById("imagen").src = "germi.png";
        } else if(Suma >250 && Suma <= 600){
            Estado = " Crecimiento vegetativo";
            document.getElementById("imagen").src = "creci.png";
        } else if(Suma >600 && Suma <=800){
            Estado = " Botonamiento";
            document.getElementById("imagen").src = "tardi.png";
        } else if(Suma >800 && Suma <=1100){
            Estado = " Floracion";
            document.getElementById("imagen").src = "floraciong.png";
        } else if(Suma >1100 && Suma <=1400){
            Estado = " Llenado de semillas";
            document.getElementById("imagen").src = "dfru.png";
        } else if(Suma >1400 && Suma <=1700){
            Estado = " Maduracion";
            document.getElementById("imagen").src = "mad.png";
        }
        break;
        default:
        break;
    }
        let DC = (Max+Min)/2 - Base;
        Registro.push(DC*10);   
        localStorage.setItem("Registro", JSON.stringify(Registro));
        let punto = document.getElementById("predicción");
        switch(D){
            case 1:
                window.scrollTo({top: punto.offsetTop, behavior: "smooth"});
                let reg = {
                    planta: Planta,
                    estado: Estado.trim(),
                    gdd: Suma,
                    diasRestantes: 0
                };
                Datos.push(reg);  
                //Datos.push(Planta,Estado, Registro[0], 0);
                localStorage.setItem("Datos", JSON.stringify(Datos));
                document.getElementById("planta").textContent = Datos[Datos.length - 1].planta;
                document.getElementById("etapa").textContent = Datos[Datos.length - 1].estado;
                document.getElementById("gdd").textContent = Datos[Datos.length - 1].gdd + " GDD";
                document.getElementById("F1").textContent = "";
                document.getElementById("F2").textContent = "";
                document.getElementById("tiempo").textContent = ""
                //alert("Los GDD los primeros diez días fueron de: "+Registro[0]+", y está en estado de "+Estado);
                d1 = DC;
            break;
            case 2: 
                window.scrollTo({top: punto.offsetTop, behavior: "smooth"});
                let regi = {
                    planta: Planta,
                    estado: Estado.trim(),
                    gdd: Suma,
                    diasRestantes: 0
                };
                Datos.push(regi);  
                //Datos.push(Planta,Estado, Suma, 0);  
                localStorage.setItem("Datos", JSON.stringify(Datos));
                document.getElementById("planta").textContent = Datos[Datos.length - 1].planta;
                document.getElementById("etapa").textContent = Datos[Datos.length - 1].estado;
                document.getElementById("gdd").textContent = Datos[Datos.length - 1].gdd + " GDD";
                document.getElementById("F1").textContent = "";
                document.getElementById("F2").textContent = "";
                document.getElementById("tiempo").textContent = ""
                //alert("En la segunda evaluación, los GDD acumulados en los primeros veinte días fueron de "+Suma+" y su estado es de"+Estado);
                d2 = DC;
            break;
            case 3:
                window.scrollTo({top: punto.offsetTop, behavior: "smooth"})
                //alert("En el primer mes, los GDD acumulados fueron de "+Suma+", y su estado es"+Estado);
                d3 = DC;
                let media = (d1+d1+d3)/3;
                switch(Planta){
                    case "tomate":
                        TiempoG = 1500;
                        break;
                    case "lechuga":
                        TiempoG = 900;
                        break;
                    case "zanahoria":
                        TiempoG = 1500;
                        break;
                    case "pimiento":
                        TiempoG = 2000;
                        break;
                    case "girasol":
                        TiempoG = 1700;
                        break;
                }
                DiasR = (TiempoG-Suma)/media;
                let MesesR =DiasR/30;
                let registro = {
                    planta: Planta,
                    estado: Estado.trim(),
                    gdd: Suma,
                    diasRestantes: Math.floor(DiasR)
                };

                Datos.push(registro);   
                localStorage.setItem("Datos", JSON.stringify(Datos));
                let ultimo = Datos[Datos.length - 1];
                document.getElementById("planta").textContent = ultimo.planta;
                document.getElementById("etapa").textContent = ultimo.estado;
                document.getElementById("gdd").textContent = ultimo.gdd + " GDD";
                document.getElementById("tiempo").textContent = ultimo.diasRestantes + " días";
                document.getElementById("F1").textContent = "Para su cosecha, faltan: ";
                document.getElementById("F2").textContent = "Es decir, el: ";
                let fecha = new Date();
                let Fecha = new Date(fecha.getTime()+ (DiasR*24*60*60*1000))
                document.getElementById("time").textContent = Fecha;
                //alert("En un aproximado, el tiempo que falta para la cosecha es de "+DiasR.toFixed(2) + " días" + " o "+MesesR.toFixed(2)+ " meses");
            break;
            default: 
            alert("Ya no hay más días que registrar");
            break;
        }
        D++;
        

    document.getElementById("Día").textContent = "Día "+D;
    document.getElementById("Planta").value = Planta;
    } else{
        alert("Captura los datos solicitados");
    }

    
}
function Borrar(){
    let c = prompt("Ingresa la contraseña para borrar toda los registros de GDD");
    if(c != null){
    while(c != "pollo"){
        c = prompt("Contraseña incorrecta, vuelve a ingresar");
        if(c == null){
            break;
        }
    }
    }
    if(c == "pollo"){
        localStorage.clear();
        D = 1;
        document.getElementById("Día").textContent = "Día "+D;
        Registro = [];
        Datos = [];
        Suma = 0;
        document.getElementById("planta").textContent = "";
        document.getElementById("etapa").textContent = "";
        document.getElementById("gdd").textContent = "";
        document.getElementById("F1").textContent = "";
        document.getElementById("F2").textContent = "";
        document.getElementById("tiempo").textContent = ""
        alert("Todos los datos han sido borrados con éxito");
    }
}
