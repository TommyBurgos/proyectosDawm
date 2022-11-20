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
                    if(titulo.jawSummary.title.indexOf(textArea.value)<0){
                        console.log("WIIIIII TODO BIEN");
                        console.log(titulo.jawSummary.title.indexOf(textArea.value))
                    }                            
                }
                
                alert(textArea.value)
              })
            for(let titulo of obj.titles){
               
                console.log(titulo.jawSummary.title);                                                 
                
            }
            console.log(obj);
            console.log(obj.titles[0].jawSummary.title);
            console.log(obj.titles[0].jawSummary.logoImage.url);
            console.log(obj.titles[0].jawSummary.synopsis);
            console.log(obj.titles.length);
            console.log(obj.titles[0].jawSummary.cast[0].name);
        }
        }
        )
	.catch(err => console.error(err));
    