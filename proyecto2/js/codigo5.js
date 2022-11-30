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
            //textArea=document.querySelector("#texto"); 
            btBuscar=document.querySelector("#buscar");
            let listCortas=[];
            let listCortasNum=[];
            let listMedianas=[];
            let listMedianasNum=[];
            let listExtensas=[];
            let listExtensasNum=[];
            let listMuyExtensas=[];
            let listMuyExtensasNum=[];
            let selectElem=document.querySelector('.select');
            for(let titulo of obj.titles){
                let capitulos=titulo.jawSummary.episodeCount;
                if(capitulos<12){
                    listCortas.push(titulo.jawSummary.title);
                    listCortasNum.push(parseInt(capitulos));
                    console.log("Cortos: "+capitulos);
                }else if((capitulos>13)&& (capitulos<32)){
                    listMedianas.push(titulo.jawSummary.title);
                    listMedianasNum.push(parseInt(capitulos));
                    console.log("Nedianas: "+capitulos);
                }else if((capitulos>33)&& (capitulos<69)){
                    listExtensas.push(titulo.jawSummary.title);
                    listExtensasNum.push(parseInt(capitulos));
                    console.log("Extensas: "+capitulos);
                }else if(capitulos>69){
                    listMuyExtensas.push(titulo.jawSummary.title);
                    listMuyExtensasNum.push(parseInt(capitulos));
                    console.log("muy Extensas: "+capitulos);
                }
                
                console.log("total");                                                                                
                //console.log(capitulos);
                /*                    
                //console.log(titulo);
                for(let genero of titulo.jawSummary.genres){
                    //console.log("el Genero");                        
                    if(genero.name.toUpperCase().indexOf(textArea.value.toUpperCase())>=0){
                        //console.log("TODO DEBERIA ESTAR BIEN, NO LO SE");
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
                }*/
            };
            
            btBuscar.addEventListener('click',()=>{                         
                let documentFragmentCort = document.createDocumentFragment();
                let seriesCortas=document.querySelector('#cortas');
                let seriesMedianas=document.querySelector('#medianas');
                let seriesExtensas=document.querySelector('#extensas');
                let seriesMuyExtensas=document.querySelector('#muyExtensas');        
                if(selectElem.value =="Cortas"){
                    seriesCortas.style='display:flex' ;
                    seriesMedianas.style='display:none';
                    seriesExtensas.style='display:none' ;
                    seriesMuyExtensas.style='display:none';
                    console.log("TCortos: "+ listCortas.length);                    
                    let data1 = [{                
                        x: listCortas,
                        y: listCortasNum,
                        type: "bar"
                    }];
                    Plotly.newPlot("cortas",data1);
                }
                else if(selectElem.value =="Medianas"){
                    seriesCortas.style='display:none' ;
                    seriesMedianas.style='display:flex';
                    seriesExtensas.style='display:none' ;
                    seriesMuyExtensas.style='display:none';
                    console.log("TMediana: "+ listMedianas.length);                    
                    let data2 = [{                
                        x: listMedianas,
                        y: listMedianasNum,
                        type: "bar"
                    }];
                    Plotly.newPlot("medianas",data2);
                }
                else if(selectElem.value =="Extensas"){
                    seriesCortas.style='display:none' ;
                    seriesMedianas.style='display:none';
                    seriesExtensas.style='display:flex' ;
                    seriesMuyExtensas.style='display:none';
                    console.log("TExtenso: "+ listExtensas.length);                    
                    let data3 = [{                
                        x: listExtensas,
                        y: listExtensasNum,
                        mode: 'lines',
                        type: 'scatter',                        
                    }];
                    Plotly.newPlot("extensas",data3);
                }
                else if(selectElem.value =="Muy extensas"){
                    seriesCortas.style='display:none' ;
                    seriesMedianas.style='display:none';
                    seriesExtensas.style='display:none' ;
                    seriesMuyExtensas.style='display:flex';
                    console.log("TMuyExtenso: "+ listMuyExtensas.length);                   
                    let data4 = [{                
                        x: listMuyExtensas,
                        y: listMuyExtensasNum,
                        type: "bar"
                    }];
                    Plotly.newPlot("muyExtensas",data4);
                }
                //console.log("El valor seleccionado es: ");
                //console.log(selectElem.value);
                //console.log(selectElem.value =="Cortas");
              });                          
        }
    }
    )
	.catch(err => console.error(err));
    