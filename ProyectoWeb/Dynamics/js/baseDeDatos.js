const baseDatosJSON = {
  canciones: [
    {
      id: 1,
      nombre: "Wake me up",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "SsYXnH9lzCY",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 2,
      nombre: "Hey brother",
      artista: "Avicii",
      id_artista: 1,
      album: "True",
      id_album: 1,
      link: "69Fb6XozEx8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 3,
      nombre: "Alone",
      artista: "Marshmello",
      id_artista: 2,
      album: "Marshmello",
      id_album: 2,
      link: "nR5l-1lmkkI",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 4,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      album: "Animals",
      id_album: 3,
      link: "2kpAzC2Mja8",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 5,
      nombre: "Titanium",
      artista: "David Guetta",
      id_artista: 4,
      album: "Nothing but the Beat",
      id_album: 4,
      link: "KxnpFKZowcs",
      genero: "Música Electrónica",
      id_genero: 1
    },
    {
      id: 6,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      album: "Despacito",
      id_album: 5,
      link: "kJQP7kiw5Fk",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 7,
      nombre: "Shape of You",
      artista: "Ed Sheeran",
      id_artista: 6,
      album: "Divide",
      id_album: 6,
      link: "JGwWNGJdvx8",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 8,
      nombre: "Bohemian Rhapsody",
      artista: "Queen",
      id_artista: 7,
      album: "A Night at the Opera",
      id_album: 7,
      link: "fJ9rUzIMcZQ",
      genero: "Rock",
      id_genero: 3
    },
    {
      id: 9,
      nombre: "Viento",
      artista: "Caifanes",
      id_artista: 8,
      album: "Caifanes",
      id_album: 8,
      link: "T8TtE-enslA",
      genero: "Rock",
      id_genero: 3
    },
    {
      id: 10,
      nombre: "Love Hangover",
      artista: "Jennie",
      id_artista: 10,
      album: "Ruby",
      id_album: 12,
      link: "oZdSpdbeA44",
      genero: "R&B",
      id_genero: 5 
    },
    {
      id: 11,
      nombre: "Headpones On",
      artista: "Addison",
      id_artista: 11,
      album: "Addison",
      id_album: 13,
      link: "2nIMXJl2yk8",
      genero: "R&B",
      id_genero: 5
    },
    {
      id: 12,
      nombre: "How To Dissapear Completely",
      artista: "Radiohead",
      id_artista: 12,
      album: "Kid A",
      id_album: 14,
      link: "nZq_jeYsbTs",
      genero: "Alternativo",
      id_genero: 2
    },
    {
      id:13,
      nombre: "Nobody New",
      artista: "The marias",
      id_artista: 13,
      album: "Back To Me -Single",
      id_album: 15,
      link: "BfWZsqLBfkE",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 14,
      nombre: "Angels All Around Me",
      artista: "Kali uchis",
      id_artista: 14,
      album: "Sincerely",
      id_album: 16,
      link: "ekTB-dy9zT0",
      genero: "Pop",
      id_genero: 2
    },
  ],
  artistas: [
    {
      id: 1,
      nombre: "Avicii",
      descripcion: "Avicii fue un DJ y productor sueco de música electrónica, conocido por su estilo melódico y pegajoso.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113"
    },
    {
      id: 2,
      nombre: "Marshmello",
      descripcion: "Marshmello es un DJ y productor estadounidense, famoso por su característico casco de malvavisco y sus éxitos en la música electrónica.",
      url_img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841548a6b711f3749578f57381"
    },
    {
      id: 3,
      nombre: "Martin Garrix",
      descripcion: "Martin Garrix es un DJ y productor neerlandés, reconocido por su talento en la música electrónica y sus colaboraciones con otros artistas.",
      url_img: "https://i.scdn.co/image/ab67616100005174f5b8ee60f1f4ee3453aba40b"
    },
    {
      id: 4,
      nombre: "David Guetta",
      descripcion: "David Guetta es un DJ y productor francés, pionero en la música electrónica y conocido por sus numerosas colaboraciones con artistas de renombre.",
      url_img: "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f"
    },
    {
      id: 5,
      nombre: "Luis Fonsi",
      descripcion: "Luis Fonsi es un cantante y compositor puertorriqueño, famoso por su éxito mundial 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736a4ffb2d6e1dd69c26099993"
    },
    {
      id: 6,
      nombre: "Ed Sheeran",
      descripcion: "Ed Sheeran es un cantautor británico, conocido por sus emotivas letras y su estilo musical versátil.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273d4e0fdd4c41a4f9bfd884301"
    },
    {
      id: 7,
      nombre: "Queen",
      descripcion: "Queen es una icónica banda británica de rock, famosa por su innovador sonido y la poderosa voz de Freddie Mercury.",
      url_img: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42"
    },
    {
      id: 8,
      nombre: "Caifanes",
      descripcion: "Caifanes es una influyente banda mexicana de rock, conocida por su fusión de rock y música latina, y por sus letras poéticas.",
      url_img: "https://images.genius.com/4be6ac6517dde5a18eb0f2f9a28f0ce7.952x952x1.jpg"
    },
    {
      id: 9,
      nombre: "Daddy Yankee",
      descripcion: "Daddy Yankee es un cantante y compositor puertorriqueño, conocido como el 'Rey del Reguetón' y famoso por su éxito 'Despacito'.",
      url_img: "https://i.scdn.co/image/ab6761610000e5eb99a6ccc4aae5ae5404c9eb30"
    },
    {
      id: 10,
      nombre: "Jennie",
      descripcion: "Conocida simplemente como Jennie, es una cantante y bailarina surcoreana. Nacida y criada en Corea del Sur.",
      url_img: "https://www.musicmundial.com/en/wp-content/uploads/2025/03/BLACKPINKs-Jennie-Ruby-shakes-up-the-Spotify-charts-on-its-first-day-1100x733.jpeg"
    },
    {
      id: 11,
      nombre: "Addison",
      descripcion: "Cantautora con una propuesta íntima y personal que conecta con emociones profundas.",
      url_img: "https://ourculturemag.com/wp-content/uploads/2024/10/addison-rae-e1729848498597.jpeg"
    },
    {
      id: 12,
      nombre: "Radiohead",
      descripcion: "Banda británica reconocida por su enfoque innovador y su exploración constante de nuevos sonidos.",
      url_img: "https://static.stereogum.com/uploads/2024/04/The-Marias-1712432101.jpg"
    },
    {
      id: 13,
      nombre: "The Marias",
      descripcion: "Grupo con una identidad visual y sonora muy cuidada, liderado por una voz suave y enigmática.",
      url_img: "https://static.stereogum.com/uploads/2024/04/The-Marias-1712432101.jpg"
    },
    {
      id: 14,
      nombre: "Kali Uchis",
      descripcion: "Artista colombo-estadounidense con una estética única y una narrativa visual marcada por el arte y la introspección.",
      url_img: "https://www.universalmusic.com.pe/files/2023/10/IMG_7411-min-scaled-e1697833803358.jpeg"
    }

  ],
  genero: [
    {
      id: 1,
      nombre: "Música Electrónica",
      descripcion: "La música electrónica es un género musical que utiliza tecnología electrónica para crear sonidos y ritmos, abarcando una amplia variedad de estilos."
    },
    {
      id: 2,
      nombre: "Pop",
      descripcion: "El pop es un género musical popular caracterizado por melodías pegajosas y letras accesibles, abarcando una amplia gama de estilos y artistas."
    },
    {
      id: 3,
      nombre: "Rock",
      descripcion: "El rock es un género musical que se originó en la década de 1950, caracterizado por el uso de guitarras eléctricas, batería y una fuerte presencia vocal."
    },
    {
      id: 4,
      nombre: "Hip Hop",
      descripcion: "El hip hop es un género musical y cultural que se originó en la década de 1970, caracterizado por el rap, el DJing y el breakdancing."
    },
    {
      id: 5,
      nombre: "R&B",
      descripcion: "El R&B (Rhythm and Blues) es un género musical que combina elementos de soul, funk y pop, con un enfoque en las melodías vocales y ritmos pegajosos."
    },
    {
      id: 6,
      nombre: "Country",
      descripcion: "El country es un género musical estadounidense que se originó en el sur, caracterizado por sus historias narrativas y el uso de instrumentos como la guitarra acústica y el banjo."
    },
    {
      id: 7,
      nombre: "Jazz",
      descripcion: "El jazz es un género musical que se originó a principios del siglo XX, caracterizado por su improvisación, ritmos complejos y una rica tradición instrumental."
    }
  ],
  album: [
    {
      id: 1,
      nombre: "True",
      artista: "Avicii",
      id_artista: 1,
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7"
    },
    {
      id: 2,
      nombre: "Marshmello",
      artista: "Marshmello",
      id_artista: 2,
      descripcion: "El álbum homónimo de Marshmello presenta una colección de sus éxitos más populares, destacando su estilo distintivo en la música electrónica.",
      url_img: "https://mosaic.scdn.co/640/ab67616d00001e0204bfd5a5fd5aa6ca648f66aaab67616d00001e02779b026a1fd1aa96c6deac6dab67616d00001e02c3055e5c1073d11b1ae2e553ab67616d00001e02c89e7ad65c4486567cbf4759"
    },
    {
      id: 3,
      nombre: "Animals",
      artista: "Martin Garrix",
      id_artista: 3,
      descripcion: "El álbum 'Animals' de Martin Garrix incluye su famoso sencillo del mismo nombre, consolidando su lugar en la escena de la música electrónica.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2736abad6915a2216dc18e7e3a7"
    },
    {
      id: 4,
      nombre: "Nothing but the Beat",
      artista: "David Guetta",
      id_artista: 4,
      descripcion: "El álbum 'Nothing but the Beat' de David Guetta es un hito en la música electrónica, con colaboraciones de artistas destacados y éxitos globales.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27354e095b51d4ba95496cd60d7"
    },
    {
      id: 5,
      nombre: "Despacito",
      artista: "Luis Fonsi ft. Daddy Yankee",
      id_artista: 5,
      descripcion: "'Despacito' es un sencillo icónico que ha alcanzado el estatus de fenómeno mundial, fusionando ritmos latinos con pop.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273343bd0b686fe428dd9ab6d28"
    },
    {
      id: 6,
      nombre: "Divide",
      artista: "Ed Sheeran",
      id_artista: 6,
      descripcion: "'Divide' es un álbum aclamado por la crítica que presenta una variedad de estilos musicales, destacando la versatilidad de Ed Sheeran.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
      id: 7,
      nombre: "A Night at the Opera",
      artista: "Queen",
      id_artista: 7,
      descripcion: "'A Night at the Opera' es un álbum clásico de Queen, conocido por su innovador sonido y la épica 'Bohemian Rhapsody'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b2737110a2b3dc32dc1224b7670f"
    },
    {
      id: 8,
      nombre: "Caifanes",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'Caifanes' es el álbum debut de la banda mexicana, que fusiona rock y música latina, estableciendo su legado en la escena musical.",
      url_img: "https://i.scdn.co/image/ab67616d00001e0252842eb76a050aa8daec1251"
    },
    {
      id: 9,
      nombre: "El Diablito",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Diablito' es un álbum que marcó un hito en la música rock en español, con letras poéticas y una fusión de géneros.",
      url_img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Caifanes_ElDiablitoLP_cover.jpeg"
    },
    {
      id: 10,
      nombre: "El Silencio",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Silencio' es un álbum emblemático de Caifanes, que consolidó su estatus como una de las bandas más influyentes del rock en español.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273bc4d989c48ad5b154fb0781d"
    },
    {
      id: 11,
      nombre: "El Nervio del Volcán",
      artista: "Caifanes",
      id_artista: 8,
      descripcion: "'El Nervio del Volcán' es un álbum que muestra la evolución musical de Caifanes, con letras profundas y una fusión de géneros.",
      url_img: "https://i.scdn.co/image/ab67616d0000b27336aeaab4dc91a8dea53a2d8f"
    },
    {
      id: 12,
      nombre: "Ruby",
      artista: "Jennie",
      id_artista: 10,
      descripcion: "El álbum 'True' de Avicii es una mezcla innovadora de música electrónica y folk, con éxitos como 'Wake Me Up' y 'Hey Brother'.",
      url_img: "https://i.scdn.co/image/ab67616d0000b273e14f11f796cef9f9a82691a7"
    },
    {
      id: 13,
      nombre: "Addison",
      artista: "Addison",
      id_artista: 11,
      descripcion: "Addison es el álbum de estudio debut de la cantante estadounidense Addison Rae, lanzado el 6 de junio de 2025 a través de Columbia Records, bajo licencia exclusiva de As Long As I'm Dancing LLC. Fue precedido por el lanzamiento de cinco sencillos: «Diet Pepsi», «Aquamarine», «High Fashion», «Headphones On» y «Fame is a Gun».Tras su lanzamiento, Addison recibió críticas generalmente positivas, y los críticos elogiaron el arte único de Rae y su producción experimental",
      url_img: "https://uproxx.com/wp-content/uploads/2025/04/Addison-Rae-Columbia.jpeg"
    },
    {
      id: 14,
      nombre: "Kid A",
      artista: "Radiohead",
      id_artista: 12,
      descripcion: "Kid A es el cuarto álbum de estudio de la banda británica de rock alternativo Radiohead, lanzado el 2 de octubre de 2000. Fue un éxito comercial a nivel internacional, llegando a obtener un disco de platino una semana después de su lanzamiento en el Reino Unido. Pese a la falta de un sencillo oficial o videoclip que sirviera como publicidad, Kid A fue el primer álbum de Radiohead en debutar en el primer puesto en Estados Unidos. Su éxito pudo haberse debido a una campaña única de mercadotecnia, su previo lanzamiento por Internet, o a la expectativa generada por su álbum anterior,OK Computer.",
      url_img: "https://www.sentireascoltare.com/wp-content/uploads/2012/12/radiohead-kid-a.jpeg"
    },
    {
      id: 15,
      nombre: "Back To me -Single",
      artista: "The Marias",
      id_artista: 13,
      descripcion: "Back to me single Con este single, The Marías logra capturar de forma poética y delicada lo abrumador que puede ser el acto de extrañar. La canción, cargada de emocionalidad nos sumerge en lo más profundo de una historia marcada por la melancolía y el anhelo. «Back to Me» transmite con precisión la tristeza, la confusión y la desesperación de un amor que aún duele, convirtiéndose en una pieza perfecta para acompañar nuestras tardes más grises o esos días en que la nostalgia pesa más que de costumbre.",
      url_img: "https://www.highlandernews.org/wp-content/uploads/The-Marias-Back-to-Me-Distr.-Nice-Life-Recording-Co-2025.jpg"
    },
    {
      id: 16,
      nombre: "Sincerely,",
      artista: "Kali Uchis",
      id_artista: 14,
      descripcion: "Sincerely (estilizado como Sincerely,) es el quinto álbum de estudio de la cantante estadounidense Kali Uchis.Fue publicado el 9 de mayo de 2025 a través del sello discográfico Capitol. Originalmente conceptualizado como una colección de cartas para ella misma, amigos y cercanos,el proyecto obtuvo una mayor importancia para la cantante con su embarazo previo al desarrollo inicial de composición, y posteriormente luego de completarlo, lidiando con el fallecimiento de su madre por un cáncer pulmonar.",
      url_img: "https://t2.genius.com/unsafe/300x300/https://images.genius.com/8642dc3f58c90b87c6d0a908cebaa723.1000x1000x1.png"
    },
  ]
};
//console.log(baseDatosJSON.canciones[0].nombre);
let busqueda=document.getElementById("buscador_input"); /*input buscador*/
let pi=document.getElementById("contenedor_resultados"); /*Div que va a contener la busqueda */
let buscador_form= document.getElementById("buscador_form");
let play=document.getElementById("play");
let random=document.getElementById("btn-random");
let formato_resultado;
let player;
let link;
//Funcion para mostrar el video
function hacer(link)
{
    if(player)
      player.destroy();
    player = new YT.Player("player", 
    {
      videoId: link,
      playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0
      },
      events:{
        onReady: onPlayerReady,
        }
    });
    function onPlayerReady()
    {
      player.playVideo();
    }
    play.addEventListener("click",()=>{
        let state = player.getPlayerState();
        if(state == YT.PlayerState.PLAYING){
            player.pauseVideo();
        }
        else
        {
            player.playVideo();
        }
    });
}
buscador_form.addEventListener("submit", function(e)
{ //se le hace prevent para evitar que se recargue la pagina 
  e.preventDefault();
})
busqueda.addEventListener("input",function(event){
    event.preventDefault();
    pi.innerHTML="";
    let siVacio = busqueda.value.trim();
    if (siVacio === "")
    {
        return;
    }
    for(let i=0;i<baseDatosJSON.canciones.length;i++)
    {
        let texto=busqueda.value;
        if(baseDatosJSON.canciones[i].nombre.includes(texto))
        {
            formato_resultado=document.createElement("button");
            formato_resultado.classList.add("estilo_por_resultado");
            formato_resultado.id = "cancion_" + baseDatosJSON.canciones[i].nombre;
            formato_resultado.textContent=baseDatosJSON.canciones[i].nombre;
            pi.appendChild(formato_resultado); 
        }
    }
    let butones = pi.querySelectorAll("button.estilo_por_resultado");
    butones.forEach(boton => {
        boton.addEventListener("click", ()=>{
            for(let e=0;e<baseDatosJSON.canciones.length;e++)
            {
                if(boton.textContent===baseDatosJSON.canciones[e].nombre)
                  link=baseDatosJSON.canciones[e].link;
            }
            console.log(link);  
            hacer(link)
        });
    });
    if (pi.children.length === 0) {
        let sinCoincidencias = document.createElement("p");
        sinCoincidencias.textContent = "Sin coincidencias";
        pi.appendChild(sinCoincidencias);
    }
});

//CANCION ALEATORIA
//Código para generar una canción aleatoria, falta utilizar el API para reproducirla
let arreCan=[];
for(let i=0;i<baseDatosJSON.canciones.length;i++)
{
  arreCan.push(baseDatosJSON.canciones[i].nombre);
}


//Muestra la canción aleatoria chavos
random.addEventListener("click",()=>{
  // Para obtener un número entero 
  let canAle = Math.floor(Math.random() * arreCan.length);
  link=baseDatosJSON.canciones[canAle].link;
  hacer(link);
})




