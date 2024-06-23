
const opc = document.getElementById('opc');

// Get the selected option
let sele = opc.value;

// Add an event listener to the select element to update the selected option
opc.addEventListener('change', (e) => {
  
      sele = e.target.value;
  // Perform actions based on the selected option
  console.log(sele);
  
});

// esta funcion es para mostrar el formulario
abrirlista = ()=>{
  document.getElementById("adm").addEventListener("click",()=>{
    document.getElementById("ad").style.display = "block";
  });
};

abrirlista();

// esta funcion es para mostrar el formulario
abrirlist = ()=>{
  document.getElementById("egr").addEventListener("click",()=>{
    document.getElementById("eg").style.display = "block";
  });
};

abrirlist();



// funcion para agregar un nuevo empleado

document.getElementById("add").addEventListener("click",(e)=>{
    e.preventDefault();
    
    if (document.getElementById("add").className == "agre") {
     
      nombre = document.getElementById("nombre").value;
      apellido = document.getElementById("apellido").value;
      cedula = document.getElementById("cedula").value;
      tel = document.getElementById("tel").value;
      email = document.getElementById("email").value;
      year = document.getElementById("year").value;
      carr = document.getElementById("carr").value;
      est = document.getElementById("est").value;
      
      
      // en caso de que este algun campo vacio, deben llenarse todos
      if (nombre <= 0|| apellido <= 0 || cedula <= 0 || tel <= 0) {
         
         alert("Por favor, rellene todos los campos")
      }
      else{
        // si los campos tienen valor proceden a registrarse
          agregar();
          vaciarcampos();
          alert("Se ha agregado correctamente"); 
      };};

      // Si se desea editar los datos del estudiante esta es la funcion

  if (document.getElementById("add").className== "edit") {
    

      nombre = document.getElementById("nombre").value;
      apellido = document.getElementById("apellido").value;
      cedula = document.getElementById("cedula").value;
      sexo = document.getElementById("sexo").value;
      civil = document.getElementById("civil").value;
      na = document.getElementById("na").value;
      nac = document.getElementById("nac").value;
      est = document.getElementById("fn").value;
      


          edita();
          vaciarcampos();
  
          alert("Se ha editado correctamente"); 

          // acciones para devolver el formulario a la funcion de agregar un nuevo empleado
           document.getElementById("add").classList.replace("edit","agre");
           document.getElementById("form").style.position = "absolute";
           document.getElementById("form").style.display = "none";
     
  }; 
  });
   
  // Es la funcion para agregar los usuarios y añadirle la funcion a cada uno de los botones

  agregar=()=>{
  
    // Aqui se agregan los botones de cada empleado
// var masi = document.createElement('img');
//         masi.src = 'Mas.png';

var editar = document.createElement('img');
        editar.src = 'Editar.png';

var eli = document.createElement('img');
        eli.src = 'eliminar.png';

        // Se selecciona el contenedor donde se comenzaran a guardar dentro de el, los empleados
     const contenedor = document.getElementById(sele);

        // Acciones para crear los contenedores que llevaran los datos y las acciones de cada empleado
            const divs = document.createElement("div");
            divs.classList.add("datos");
            const option = document.createElement("div");
            option.classList.add("options");
            // const save = document.createElement("div");
            const edit = document.createElement("div");
            const del = document.createElement("div");
            // save.classList.add("mas");
            edit.classList.add("edit");
            del.classList.add("del");
            // save.appendChild(masi);
            edit.appendChild(editar);
            del.appendChild(eli);
  
    // Datos principales del empleado que van en la tabla de encabezados
      let divu = document.createElement("div");
            divu.setAttribute("class","nombre");
              divu.innerHTML = nombre;
  
      let divd = document.createElement("div");
            divd.setAttribute("class","apellido");
              divd.innerHTML = apellido;
  
      let divt = document.createElement("div");
            divt.setAttribute("class","ci");
             divt.innerHTML = cedula;
  
      let divc = document.createElement("div");
            divc.setAttribute("class","tel");
              divc.innerHTML = tel;

       let divci = document.createElement("div");
            divci.setAttribute("class","email");
              divci.innerHTML = email;
  
      let divse = document.createElement("div");
            divse.setAttribute("class","year");
              divse.innerHTML = year;
  
      let divsi = document.createElement("div");
            divsi.setAttribute("class","carr");
              divsi.innerHTML = carr;

      let divoch = document.createElement("div");
            divoch.setAttribute("class","est");
              divoch.innerHTML = est;        
  
      // Se guardan los datos dentro de cada uno de los contenedores        
      divs.appendChild(divu);
      divs.appendChild(divd);
      divs.appendChild(divt);
      divs.appendChild(divc);
      divs.appendChild(divci);
      divs.appendChild(divse);
      divs.appendChild(divsi);
      divs.appendChild(divoch)
  
    //  option.appendChild(save);
     option.appendChild(edit);
     option.appendChild(del);
     divs.appendChild(option);

    // Aqui se crea la ventana que contiene los datos adicionales de los empleados
    const les = document.createElement("div");
        les.setAttribute("class","less")
          les.setAttribute("id","less");

    divs.appendChild(les);
    contenedor.appendChild(divs);
   
    
    les.removeAttribute("id");

      // save.addEventListener("click",()=>{ 
      //     les.setAttribute("id","less");
        
      //     // Esta funcion muestra los datos extra del empleado
      //      const vent = document.getElementById("less");
      //       if (vent.getElementById="less") {
      //       document.getElementById("less").style.display="grid";
      //       les.removeAttribute("id");
      //     // Esta funcion es para cerrar la ventana de los datos extra del empleado  
      //       les.addEventListener("mouseover",()=>{
      //         les.setAttribute("id","more");
      //         les.querySelector(".cerrar").setAttribute("id","cerrar");
      //         cm();
              
      //       });
      //      };
           
            
           
 
      // });

      // // funcion para editar los datos del empleado
      // edit.addEventListener("click",()=>{

      //   // Esta accion es por si Si se esta editando ya un empleado no se podra editar otro
      //   const ed = document.getElementById("edit");
      //   if (ed) {
      //     alert("Ya se esta editando otro empleado");
      //   }
      //   else{
      //     // Estas acciones son para abrir el formulario y colocar los datos personales del empleado que se van a editar
      //     divs.setAttribute("id","edit");
      //     document.getElementById("form").style.position = "relative";
      //     document.getElementById("form").style.display = "block";

      //     document.getElementById("nombre").value = divu.innerHTML ;
      //     document.getElementById("apellido").value = divd.innerHTML;
      //     document.getElementById("cedula").value = divt.innerHTML;
      //     document.getElementById("sexo").value = divc.innerHTML;
      //     document.getElementById("civil").value = divci.innerHTML;
      //     document.getElementById("na").value = divse.innerHTML;
      //     document.getElementById("nac").value = divsi.innerHTML;

      //     document.getElementById("add").classList.replace("agre","edit");
      //     document.getElementById("add").innerHTML = "Editar";
      //   };
      // });
  
      // // funcion para eliminar un empleado
      // del.addEventListener("click",()=>{
        
      //   divs.classList.replace("datos","eliminando");
        
      //   eliminar(nombre,apellido,cedula,sexo,civil,na,nac,fn,prf,crg,sld,av,apto,urb,ciudad,cp,ap,tlf,avo,aptoo,urbo,cio,po,apo,tlfo,ext,fecha,fe,mto);
       
      // });      
  };
  
  // funcion para editar los datos del estudiante
  edita = ()=>{
  
    const ed = document.getElementById("edit");
    if (ed) {

     ed.querySelector(".nombre").innerHTML = nombre;
     ed.querySelector(".apellido").innerHTML = apellido;
     ed.querySelector(".ci").innerHTML = cedula;
     ed.querySelector(".sexo").innerHTML = sexo;
     ed.querySelector(".civil").innerHTML = civil;
     ed.querySelector(".na").innerHTML = na;
     ed.querySelector(".nac").innerHTML = nac;
     
    };
  };
  
  // funcion para dejar los campos en blanco una vez se registre o editen los datos de los estudiantes
  vaciarcampos = ()=>{
  
  
    nombre = document.getElementById("nombre").value = "";
    apellido = document.getElementById("apellido").value = "";
    cedula = document.getElementById("cedula").value = "";
    tel = document.getElementById("tel").value = "";
    email = document.getElementById("email").value = "";
    year = document.getElementById("year").value = "";
    carr = document.getElementById("carr").value = "";
    est = document.getElementById("est").value = "";
    
  };
  
  
  // funcion para eliminar los datos del estudiante
  eliminar = ()=>{
  
    if (confirm("¿Estas seguro que deseas eliminar este recuadro?")) {
      document.querySelector(".eliminando").remove(nombre,apellido,cedula,tel)
    }
  
    else{
      document.querySelector(".eliminando").classList.replace("eliminando","datos")
    };
  
  };
  

  
  // Esta funcion es para cerrar el formulario
  cf = ()=>{
    document.getElementById("cf").addEventListener("click",()=>{
      document.getElementById("form").style.display = "none";

      const edt = document.getElementById("edit");

      if (edt) {
        edt.removeAttribute("id");
          document.getElementById("add").innerHTML = "Añadir";
            document.getElementById("add").classList.replace("edit","agre");
              document.getElementById("form").style.position = "absolute";
      };
    });
  };

cf();

// esta funcion es para mostrar el formulario
af = ()=>{
  document.getElementById("af").addEventListener("click",()=>{
    document.getElementById("form").style.display = "block";
  });
};

af();
   


// filtro de busqueda para ubicar los estudiantes

document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".datos").forEach(nombre =>{

          nombre.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?nombre.classList.remove("filtro")
            :nombre.classList.add("filtro");
      });
  };
});

// Esta funcion es para cerrar la lista de admision
cl = ()=>{
  document.getElementById("cl").addEventListener("click",()=>{
    document.getElementById("ad").style.display = "none";
  });
};

cl();

// Esta funcion es para cerrar la lista de egresados

cle = ()=>{
  document.getElementById("cle").addEventListener("click",()=>{
    document.getElementById("eg").style.display = "none";
  });
};

cle();