const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e34d68e1fdmshaca0e25b8472d06p109006jsnca8053597655',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};
let url='https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20';
fetch(url, options)
	.then(response => response.json())
	.then(obj => {
        if(obj.hasOwnProperty('status')==404) {
            alert("No hay registro de esa palabra");
        }else{            
            textArea=document.querySelector("#texto"); 
            btBuscar=document.querySelector("#buscar");
            btBuscar.addEventListener('click',()=>{                         
                for(let titulo of obj.titles){
                    //console.log(titulo);
                    for(let actor of titulo.jawSummary.cast){
                        console.log("el actor");
                        console.log(actor);
                        if(actor.name.toUpperCase().indexOf(textArea.value.toUpperCase())>=0){
                            console.log("TODO DEBERIA ESTAR BIEN, NO LO SE");
                            //let hijos=document.getElementsByClassName('.card'); 
                            let tituloPoS=titulo.jawSummary.title;
                            let imagen=titulo.jawSummary.logoImage.url;
                            let sinopsis=titulo.jawSummary.synopsis;
                            let generos=[];
                            for(let gen of titulo.jawSummary.genres){                            
                                generos.push(gen.name)
                            }
                            let actores=[];
                            for(let act of titulo.jawSummary.cast){                            
                                actores.push(act.name)
                            }
                            //console.log(textArea.value.toUpperCase());
                            //console.log("-----");
                            //console.log(titulo.jawSummary.title.indexOf(textArea.value));
                            let cuadro=document.createElement('DIV');
                            cuadro.innerHTML=`
                            <div class="col">
                            <div class="card" >
                                <img class="card-img-top" src="${imagen}" style="object-fit: cover;" alt="${tituloPoS}">
                                <div class="card-body">                                
                                    <h5 class="card-title"><a href="-phonetics-sourceUrl-" target="_blank">${tituloPoS}</a></h5>
                                    <h6  class="card-subtitle mb-2 text-muted">Sinopsis: ${sinopsis}</h6>
                                    <span  class="card-text text-primary"><b>Genero<b>: ${generos}</span><br>
                                    <span class="card-text text-danger"><b>Actores:<b> -${actores}</span>
                                </div>
                            </div>
                        </div>`;
                        document.getElementById('respuesta').appendChild(cuadro); 
                        }
                    }  
                    if(titulo.jawSummary.title.toUpperCase().indexOf(textArea.value.toUpperCase())>=0){
                        let hijos=document.getElementsByClassName('.card');
                        //console.log(hijos);                                                                       
                        //console.log(titulo.jawSummary.title.toUpperCase());                        
                        
                    }                            
                }                                
              })
            for(let titulo of obj.titles){
                console.log(titulo.jawSummary.title);                                                                 
            }
        }
    }
    )
	.catch(err => console.error(err));
    