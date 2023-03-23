
fetch('rosario-8dd4a-default-rtdb-export.json')
.then(response => response.json())
.then(data => {
    
    const accordion = document.getElementById("alumno"); // elemento HTML donde se agregarán los elementos
    const alumnos = data.alumnxs; // array de alumnos obtenido del archivo JSON
    //let btnPresente = document.getElementById("btnPresente" + index);

    
    
    var btn = document.getElementById("btn").addEventListener('click', ()=>{

    alumnos.forEach((alumno, index) => {
        
        


        var condigoHtml = 

                            ` <div class="accordion rounded-0 border-dark border" id="accordionExample${index}"
                                <div class="accordion-item">
                                            <h2 class="accordion-header " id="heading${index}">
                                
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                                data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                    <div>
                                        ${alumno.nombre}
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


        accordion.innerHTML +=condigoHtml;

        var btnPresentes =document.querySelectorAll("[id^=btnPresentes]").forEach(function(btnPresentes) {
            agregarEventoClick(btnPresentes);
        });
        
        
    })
})
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




