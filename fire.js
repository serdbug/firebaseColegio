// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJo4XBAq9lYi3TkklZhELV_l8IYfIpzvM",
  authDomain: "rosario-8dd4a.firebaseapp.com",
  databaseURL: "https://rosario-8dd4a-default-rtdb.firebaseio.com",
  projectId: "rosario-8dd4a",
  storageBucket: "rosario-8dd4a.appspot.com",
  messagingSenderId: "175412178320",
  appId: "1:175412178320:web:57962ef371509bc722d715",
  measurementId: "G-5WSYMKT99F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 //////////////////////////////////////
 const db = getDatabase();
 const refAlumno = ref(db, 'alumnxs/');




    
    const accordion = document.getElementById("alumno"); // elemento HTML donde se agregarán los elementos
    //const alumnos = data.alumnxs; // array de alumnos obtenido del archivo JSON
    //let btnPresente = document.getElementById("btnPresente" + index);

    
    
    var btn = document.getElementById("btn").addEventListener('click', ()=>{
        
        cargarAlumnxs();

    
        let cargarAlumnxs = ()=>{
            
            onChildAdded(refAlumno, (snap)=>{
                let datos = snap.val();
                agregarAlumnxs(datos, index)
            });  
        }

        let agregarAlumnxs = (datx)=>{               
            var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${index}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${index}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <div>
                                        ${datxs.nombre}
                                    </div>
                                </button>
                                </h2>
                                
                                <div id="collapse${index}" class="accordion-collapse collapse colorBotonColapsado " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row my-1">
                                    <div class="col">
                                        <div class="container d-flex justify-content-evenly" >
                                        <button type="button" id="btnPresentes${index}" class="border-dark btn btn-danger border-2">Presente</button>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            `;

            
            
            
            
            
            
            
            // let h1_ = document.createElement("h1");
                // let txt = document.createTextNode(datx.nombre);
                // h1_.appendChild(txt)
                // h1_.addEventListener('click', clickLoco);
                
                // h1_.setAttribute("data-value", 0)
                // h1Elements.push(h1_);
                // alumno.appendChild(h1_).classList.add("alumne", "container") 
            
                
            };

     


        

        accordion.innerHTML +=condigoHtml;

        var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
            agregarEventoClick(btnPresentes);
        });
        
        
    })



        function cambioColor(btnPresentes,datxs)
        {
            let dato = datxs;
            if(dato == 1){
                btnPresentes.style.backgroundColor = 'red';
                btnPresentes.style.color = 'white';
                
            }else{
                btnPresentes.style.backgroundColor = 'green';
            btnPresentes.style.color = 'white'

            
            }
        }


        function agregarEventoClick(btnPresentes){
            btnPresentes.addEventListener('click', function() {
                let value = this.getAttribute("data-value");
                if (value == 0) {
                this.setAttribute("data-value", 1);
                } else {
                this.setAttribute("data-value", 0);
                }
                cambioColor(btnPresentes, value);
                console.log(btnPresentes)
            });
        }