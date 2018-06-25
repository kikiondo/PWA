
// fetch('index.html').then(response => console.log(response))
/*  */
;//html
((c)=>{
  fetch('index.html')
    .then(response => response.text())
    .then(text => c(text))
})(console.log);

//JSON
((c)=>{
  const movies = document.getElementById('movies')
  fetch('movies.json')
    .then( response => response.json())
    .then( jsonMovies => {
      c(jsonMovies.movies)
      let template = ''
      jsonMovies.movies.forEach( movie => {
        template += `
        <h2>${movie.title}</h2>
        <p>${movie.year}</p>
        <p>${movie.genres}</p>
        <img src="${movie.poster}" "alt=${movie.title}">
        `
      })
      movies.innerHTML = template
    })
    .catch( err => c(err) )
})(console.log)
;
//Icono
((c)=>{
  fetch('./img/icon_128x128.png')
    .then( response => response.blob() )
    .then( blob => {
      c(blob)
      let objectURL = URL.createObjectURL(blob),
      img = document.createElement('img')

      img.src = objectURL
      document.body.appendChild(img)
    })
})(console.log)