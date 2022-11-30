const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e34d68e1fdmshaca0e25b8472d06p109006jsnca8053597655',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

let url='https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20';
let parametros=["TITULOS","ACTORES"];
fetch(url, options)
	.then(response => response.json())
	.then(obj => {
        if(obj.hasOwnProperty('status')==404) {
            alert("No hay registro de esa palabra");
        }else{
            let h2nTitulos=document.querySelector('.ntitulos');            
            //h2nTitulos.setAttribute('data-toggle','counter-up');
            h2nTitulos.innerHTML=`${obj.titles.length}`;
            let nActores=document.querySelector('.nactores');            
            let cantTitulos=0;
            let cont=0;            
            for(let titulo of obj.titles){                
                for(let i=0;i<titulo.jawSummary.cast.length;i++){
                    console.log(titulo.jawSummary.cast[i].name);
                    cont++;
                }cantTitulos++;                      
            }console.log("Total "+cont);
            console.log("Titulos totales "+cantTitulos);
            nActores.innerHTML=`${cont}`;
            let valores=[cantTitulos,cont];
            var layout = {
                title: 'Cantidad de actores y titulos',
                barmode: 'stack',
                font:{
                    family: 'Raleway, sans-serif'
                  },
                  showlegend: false,
                  xaxis: {
                    tickangle: -45
                  },
                  yaxis: {
                    zeroline: false,
                    gridwidth: 2
                  },
                  bargap :0.05
              };
            var data = [{                
                x: parametros,
                y: valores,
                type: "bar"
            }];
            Plotly.newPlot("grafico",data,layout);
            //console.log(obj);
            //console.log(obj.titles[0].jawSummary.title);
            //console.log(obj.titles[0].jawSummary.logoImage.url);
            //console.log(obj.titles[0].jawSummary.synopsis);
            //console.log(obj.titles.length);
            //console.log(obj.titles[0].jawSummary.cast[0].name);
        }
        }
        )
	.catch(err => console.error(err));
