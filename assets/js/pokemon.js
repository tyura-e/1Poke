const API = "https://pokeapi.co/api/v2/pokemon/249/"


const getData = (api) => {
    let respuesta = fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
            console.log(json)
        })
        .catch((error) => {
            console.log("Error :", error)
        })
    console.log(respuesta)
}

const llenarDatos = (poke) => {
    let html = "";

    html += '<div class="col">';
    html += '<div class="card text-center mb-3 bg-light">';
    html += '<div class="card-header">'
    html += `<h1 class="card-title">${poke.name}</h1>`;
    html += '</div>'
    html += `<img src="https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png" class="card-img-top mx-auto d-block" style="max-width: 540px;" alt="Lugia">`;

    html += `<h5 class="card-title">ID: ${poke.id}</h5>`;

    poke.types.forEach((tipo) => {
        html += '<ul class="list-group list-group-flush">'
        html += `<li class="list-group-item">Type: ${tipo.type.name}</li>`;
        html += ' </ul>'
    });

    poke.stats.forEach((estadisticas) => {
        html += '<ul class="list-group list-group-flush">'
        html += `<li class="list-group-item">${estadisticas.stat.name + ' : ' + estadisticas.base_stat}</li>`;
        html += ' </ul>'
    });

    html += '</div>';
    html += '</div>';
    html += '</div>';

    document.getElementById('pokeCompa').innerHTML = html
}

getData(API);