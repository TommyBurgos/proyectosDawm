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
            let h2nTitulos=document.querySelector('.ntitulos');            
            //h2nTitulos.setAttribute('data-toggle','counter-up');
            h2nTitulos.innerHTML=`${obj.titles.length}`;
            let nActores=document.querySelector('.nactores');            
            let cont=0;            
            for(let titulo of obj.titles){                
                for(let i=0;i<titulo.jawSummary.cast.length;i++){
                    console.log(titulo.jawSummary.cast[i].name);
                    cont++;
                }                
                
            }console.log("Total "+cont);
            nActores.innerHTML=`${cont}`;
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
