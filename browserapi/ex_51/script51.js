window.onload = function(){
    const body = document.querySelector('body');
    const idResponse = document.getElementById('jsonresponse');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    let response = `{
        "title": "A New Hope", 
        "episode_id": 4, 
        "species": [
          "https://swapi.co/api/species/5/", 
          "https://swapi.co/api/species/3/", 
          "https://swapi.co/api/species/2/", 
          "https://swapi.co/api/species/1/", 
          "https://swapi.co/api/species/4/"
        ]
      }`;

    const JSONresponse = JSON.parse(response)
    console.log(JSONresponse.species.length)
    h1.innerHTML = JSONresponse.title;
    idResponse.appendChild(h1);
    p.innerHTML = 'Episode ID: ' + JSONresponse.episode_id;
    idResponse.appendChild(p)
    let i = 1;

    for(spec of JSONresponse.species){
        let a = document.createElement('a');
        a.setAttribute('href',spec);
        a.innerHTML = 'Link' + i + '<br>';
        i++
        idResponse.appendChild(a)
        if(i == JSONresponse.species.length + 1){
            break
        }
    }
}