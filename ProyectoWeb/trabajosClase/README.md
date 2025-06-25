# Notas de la versión 


# Links útlies para hoy: 
- [API de YouTube](https://developers.google.com/youtube/iframe_api_reference?hl=es-419)

- [Página de íconos](https://fontawesome.com/search)

```html
<script src="https://kit.fontawesome.com/19e0c4481e.js" crossorigin="anonymous"></script>
```

```js
// Boton de play
`<i class="fa-solid fa-play"></i>`

// Boton de Pause
`<i class="fa-solid fa-pause"></i>`

// Volumen Alto
`<i class="fa-solid fa-volume-high"></i>`

// Sin Volumen
`<i class="fa-solid fa-volume-off"></i>`
```

```js
tarjeta.innerHTML = `
    <div class="thumb">
      <img src="${video.link_img}" alt="Miniatura">
    </div>
    <div class="info">
      <h3>${video.nombre}</h3>
      <p>${canal.nombre} • ${video.duracion}</p>
    </div>
    <div class="like-container">
      <span class="like-count">0</span>
      <span class="dislike-count">0</span>
    </div>`;
```