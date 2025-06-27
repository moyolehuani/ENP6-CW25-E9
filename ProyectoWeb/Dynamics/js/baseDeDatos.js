///IMPORTANTE: AGREGAR A OSCAR CHÁVEZ// ARI SONGS, SI NO, FUNA


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
    {
      id: 15,
      nombre: "Battle Against A True Hero",
      artista: "Toby Fox",
      id_artista: 15,
      album: "UNDERTALE Soundtrack",
      id_album: 17,
      link: "aWBtpBwzzdM",
      genero: "musica de videojuego",
      id_genero: 8
    },
    {
      id: 16,
      nombre: "MEGALOVANIA",
      artista:"Toby Fox",
      id_artista: 15,
      album: "UNDERTALE Soundtrack",
      id_album: 17,
      link: "wDgQdr8ZkTw",
      genero: "musica de videojuego",
      id_genero: 8
    },
    {
      id: 17,
      nombre: "Hopes And Dreams",
      artista: "Toby Fox",
      id_artista: 15,
      album: "UNDERTALE Soundtrack",
      id_album: 17,
      link: "tz82xbLvK_k",
      genero: "musica de videojuego",
      id_genero: 8
    },
    {
      id: 18,
      nombre: "SAVE The World",
      artista: "Toby Fox",
      id_artista: 15,
      album: "UNDERTALE Soundtrack",
      id_album: 17,
      link: "mZRP7nQkfrM",
      genero: "musica de videojuego",
      id_genero: 8
    },
    {
      id: 19,
      nombre: "Backlight",
      artista: "ADO",
      id_artista: 16,
      album: "Uta's Songs: One Piece Film Red",
      id_album: 18,
      link: "I39DbfFmL_g",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 20,
      nombre: "Counting Stars",
      artista: "One Republic",
      id_artista: 17,
      album: "Native",
      id_album: 19,
      link: "mgT0N3tMP74",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 21,
      nombre: "Fairy Tale",
      artista: "Alexander Rybak",
      id_artista: 18,
      album:"Fairytales",
      id_album: 20,
      link: "1rVY08gRGmA",
      genero: "Pop",
      id_genero: 2
    },
    {
      id: 22,
      nombre: "Overdose",
      artista: "Natori",
      id_artista: 19,
      album: "Theater",
      id_album: 21,
      link: "_nOSVOumAiA",
      genero: "Pop",
      id_genero: 2
    },
    {
      id:23,
      nombre: "Ivy",
      artista: "Frank ocean",
      id_artista: 20,
      album: "Blonde",
      id_album: 22,
      link: "CKylNfWWeRk",
      genero: "R&B",
      id_genero: 5
    },
    {
      id:24,
      nombre:"Maria Maria",
      artista: "Santana",
      id_artista: 21,
      album: "Supernatural",
      id_album: 23,
      link: "GrF6_OpTXS8",
      genero: "Rock",
      id_genero: 3
    },
    {
      id:25,
      nombre:"One Life",
      artista: "Justin Bieber",
      id_artista: 22,
      album: "Journals",
      id_album: 24,
      link: "kQdrIk6pz2o",
      genero: "Pop",
      id_genero: 2
    },
    {
      id:26,
      nombre:"Just like starting over",
      artista: "John Lennon",
      id_artista: 23,
      album: "Double Fantasy",
      id_album: 25,
      link: "ijyvbBARHyc",
      genero: "Rock",
      id_genero: 3
    },
    {
      id:26,
      nombre:"Devil's Advocate",
      artista: "The neighbourhood",
      id_artista: 24,
      album: "Chip Chrome & The Mono-Tones",
      id_album: 26,
      link: "ousy_RRnnIQ",
      genero: "R&B",
      id_genero: 5
    },
    ///CORREGIR DESDE AQUÍ
    {
      id:27,
      nombre:"La Ixhuateca ",
      artista: "Oscar Chávez",
      id_artista: 25, //Cosa por cambiar
      album: "Al son de mi corazon", //cosa por cambiar
      id_album: 27, //cosa por cambiar
      link: "VHRDLv5Y9Lg", //Cosa por cambiar
      genero: "Regional", //Cosa por cambiar
      id_genero: 9 //Cosa por cambiar, y así con todos los demás
    },
    {
      id:28,
      nombre:"El cascabel",
      artista: "Oscar Chávez",
      id_artista: 25, //25 creo
      album: "Al son de mi corazon",
      id_album: 27,//Cosa por cambiar
      link: "RD66txd6DBXhg",
      genero: "Regional",
      id_genero: 9
    },
    {
      id:29,
      nombre:"Macondo",
      artista: "Oscar Chávez",
      id_artista: 25, ///Según yo, es el 25 el último que haya
      album: "¡Enjaulado! Óscar Chávez Canta América Latina",
      id_album: 28,  //Por verse
      link: "mBfP4_c2rw8",
      genero: "Cumbia",
      id_genero: 10
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
    },
    {
      id: 15,
      nombre: "Toby Fox",
      descripcion: "Robert F. Fox conocido profesionalmente como Toby Fox, es un compositor y desarrollador de videojuegos estadounidense, conocido por desarrollar Undertale.",
      url_img: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cO7PFJzCD16R0dPC4NSbwO1TJ3P.jpg"
    },
    {
      id: 16,
      nombre: "ADO",
      descripcion: "Ado (Tokio; 24 de octubre de 2002) es el seudónimo de una cantante japonesa.En 2020, con tan solo 17 años, Ado debutó tempranamente con el sencillo digital titulado Usseewa. La canción pronto alcanzó el puesto número 1 en el Billboard Japan Hot 100, DO Oricon Digital Singles Chart y Oricon Streaming Chart.",
      url_img: "https://www.billboard.com/wp-content/uploads/2023/02/Ado-press-2023-billboard-1548-1.jpg"
    },
    {
      id:17,
      nombre: "One Republic",
      descripcion: "OneRepublic es una banda estadounidense de pop rock​ formada en 2002, en Colorado Springs, Colorado, ​ por el cantante Ryan Tedder y el guitarrista Zach Filkins.",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoNMEi-CuhCU1PiFktUrTGjRJhVx_B1SX7Q&s",
    },
    {
      id:18,
      nombre: "Alexander Rybak",
      descripcion: "Alexander Igoryevich Rybak es un violinista, cantante, compositor, actor y escritor noruego de origen bielorruso. Ganó el Festival de Eurovisión de 2009 celebrado en Moscú en representación de Noruega, ​ edición en la que consiguió el mayor número de votos de toda la historia de Eurovisión. ",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOeGVcWJqMLa2Y91XLdiBQPqbsOoiAu-Ung&s",
    },
    //Aqui Ivan 
    {
      id:19,
      nombre: "Natori",
      descripcion: "Natori es un cantautor japonés, conocido por su sencillo debut Overdose. Su estilo se ha descrito como ecléctico, con influencias de diversos géneros como Vocaloid, pop urbano, R&B y música pop occidental.",
      url_img:"https://cdn-images.dzcdn.net/images/artist/cb8f8f574e8179d663be932de2677a29/1900x1900-000000-80-0-0.jpg"
    },
    {
      id:20,
      nombre: "Frank Ocean",
      descripcion:"Christopher Frank Ocean, conocido como Frank Ocean, es un cantautor, actor, director, diseñador y empresario estadounidense. Es considerado por amplios medios artísticos como uno de los mejores artistas de la década de 2010 por sus estilos musicales vanguardistas y sus letras introspectivas y elípticas",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-P47hOQXxUZbxaM44lGQvS1cQ0qM_YWTfw&s"
    },
    {
      id:21,
      nombre:"Santana",
      descripcion:"Carlos Humberto Santana Barragán​, conocido como Carlos Santana o simplemente Santana, es un guitarrista mexicano.​ En 1966 fundó la banda Santana, pionera en fusionar la música latina con el rock. Santana ha vendido más de 100 millones de álbumes en todo el mundo.",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWYjW-Ehm18KbwPnW4oQMKMH9wILtPK4p3g&s"
    },
    {
      id:22,
      nombre:"Justin Bieber",
      descripcion:"Justin Drew Bieber (London, Ontario, 1 de marzo de 1994) es un cantante y compositor canadiense. En 2008, el exejecutivo de la industria musical Scooter Braun descubrió casualmente el talento de Justin Bieber cuando se encontraba viendo algunos vídeos en YouTube, donde Bieber se dedicaba a subir algunas versiones de sus cantantes favoritos que él interpretaba junto a su guitarra.",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8f0qaGtE4SRamtHxX815oC-_UXtprCv0ug&s"
    },
    {
      id:23,
      nombre:"John Lennon",
      descripcion:"John Winston Ono Lennon fue un artista, músico, cantautor, poeta, actor, activista, compositor, productor, escritor y pacifista británico, conocido por ser fundador, vocalista, compositor y guitarrista rítmico de la banda de rock The Beatles y considerado uno de los artistas más influyentes del siglo XX.",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskx-3p943fWXYwLfWm8iw65SoAs_ApvzqMA&s"
    },
    {
      id:24,
      nombre:"The neighbourhood",
      descripcion:"The Neighbourhood es una banda de rock alternativo estadounidense creada en agosto de 2011. El grupo está formado por el vocalista Jesse Rutherford, los guitarristas Jeremy Freedman, Zach Abels y el bajista Mikey Margott. La banda publicó su primer álbum de estudio el 23 de abril de 2013 a través de Columbia Records",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPdgUZbyPmJucLYE3BquDlCbjaOvJpxRBTg&s"
    },
    {
      id:25,
      nombre:"Oscar Chavez",
      descripcion:"Óscar Chávez Fernández, conocido como Óscar Chávez ​ fue un cantante, actor, compositor, investigador de música, director de teatro y poeta​ mexicano, considerado uno de los máximos exponentes del canto nuevo en su país.​",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutNM_AZixCXONtRB4kI0T1MgBW1OGXgJ2nA&s",
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
    },
    {
      id: 8,
      nombre: "musica de videojuego",
      descripcion: "Su función principal es sumergir al jugador en el mundo del juego, complementando la jugabilidad y la narrativa, y provocando diversas emociones, se empezo a considerar un genero propio el siglo XX"
    },
    {
      id:9,
      nombre: "Regional",
      descripcion: "El género regional mexicano es un término amplio que engloba diversos estilos musicales tradicionales de México. Incluye subgéneros como mariachi, banda, norteño, corridos, y otros, cada uno con sus propias características instrumentales y vocales. Estos estilos suelen representar diferentes regiones de México y han ganado popularidad a nivel nacional e internacional. "
    },
    {
      id:10,
      nombre:"Cumbia",
      descripcion:"La cumbia es un género musical y baile originario de Colombia, pero que se ha expandido y evolucionado por toda América Latina, convirtiéndose en un símbolo de identidad cultural en la región. Su origen se encuentra en la Costa Caribe colombiana, donde se fusionaron elementos de las culturas africana, indígena y española. "
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
    {
      id: 17,
      nombre: "UNDERTALE Soundtrack",
      artista: "Toby Fox",
      id_artista: 15,
      descripcion: "Soundtrack de el videojuego de Undertale",
      url_img: "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2"
    },
    //Hasta aquí
    {
      id: 18,
      nombre: "Uta's Songs: One Piece Film Red",
      artista: "ADO",
      id_artista: 16,
      descripcion: "Uta's Songs: One Piece Film Red fue creado para la película de One Piece del mismo nombre",
      url_img: "https://cdn-images.dzcdn.net/images/cover/3b0d1441656b8185b8e2dbbf5dc07812/500x500-000000-80-0-0.jpg"
    },
    {
      id: 19,
      nombre: "Native",
      artista: "One Republic",
      id_artista: 17,
      descripcion: "Native es el tercer álbum de estudio banda estadounidense de pop rock OneRepublic",
      url_img: "https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb"
    },
    {
      id: 20,
      nombre: "Fairytales",
      artista: "Alexander Rybak",
      id_artista: 18,
      descripcion: "Es el álbum debut del cantante y compositor noruego Alexander Rybak",
      url_img: "https://i.scdn.co/image/ab67616d0000b2732e1c6382b5cb1571270aad83"
    },
    {
      id: 21,
      nombre: "Theater",
      artista: "Natori",
      id_artista: 19,
      descripcion: "El 20 de diciembre de 2023, Natori lanzó su primer álbum original, Theater",
      url_img: "https://cdn-images.dzcdn.net/images/cover/03647239a59255da92ea94774cebefd9/0x1900-000000-80-0-0.jpg"
    },
    {
      id:22,
      nombre:"Blonde",
      artista:"Frank Ocean",
      id_artista:20,
      descripcion:"Blonde es el segundo Álbum de Frank Ocean con un sonido minimalista, en donde mezcla géneros como R&B y pop psicodélico, caracterizado por ser una obra introspectiva y experimental. ",
      url_img:"https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2021/08/Frank-Ocean_Blonde_portada.jpg"
    },
    {
      id:23,
      nombre:"Supernatural",
      artista:"Santana",
      id_artista:21,
      descripcion:"Supernatural es el álbum más exitoso de Santana, lanzado en 1999. Combina el rock latino característico de Santana con elementos de pop, rock, y ritmos latinos.",
      url_img:"https://m.media-amazon.com/images/I/914YBikSBjL._UF1000,1000_QL80_.jpg"
    },
    {
      id:24,
      nombre:"Journals",
      artista:"Justin Bieber",
      id_artista:22,
      descripcion:"Journals es el segundo álbum recopilatorio de Justin Bieber, que se lanzó digitalmente en el año 2013, dando un giro al estilo musical de Justin agregando ritmos de R&B, explorando temas de desamor introspección y crecimiento personal.",
      url_img:"https://www.lacasadeldisco.es/3893-large_default/justin-bieber-2vinilo-journalslp.jpg"
    },
    {
      id:25,
      nombre:"Double Fantasy",
      artista:"John Lennon",
      id_artista:23,
      descripcion:"Double Fantasy es el quinto y último álbum de estudio colaborativo de John Lennon y Yoko Ono, lanzado en noviembre de 1980. Este álbum marca el regreso de Lennon a la música después de cinco años. La obra se centra en temas de amor, familia y el renacimiento artístico de Lennon. ",
      url_img:"https://m.media-amazon.com/images/I/51tDE3VgjaL._UF1000,1000_QL80_.jpg"
    },
    {
      id:26,
      nombre:"Chip Chrome & The Mono-Tones",
      artista:"The neighbourhood",
      id_artista:24,
      descripcion:"Chip Chrome & The Mono-Tones es el cuarto álbum de estudio de la banda estadounidense de música alternativa The Neighbourhood. Se lanzó el 25 de septiembre de 2020,  es un álbum conceptual construido sobre las propias luchas de Rutherford con el uso excesivo de las redes sociales y la identidad de la banda.",
      url_img:"https://images-na.ssl-images-amazon.com/images/I/717h8oJwcKL._AC_UL210_SR210,210_.jpg"
    },
    {
      id:27,
      nombre:"Al son de mi corazon",
      artista:"Oscar Chavez",
      id_artista:25,
      descripcion:"Este álbum incluye canciones que exploran temas de amor, desamor y la condición humana. ",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedngKwrIHbI4ToSBPvrkB_u66BZ3UtAmrLg&s"
    },
    {
      id:28,
      nombre:"¡Enjaulado! Óscar Chávez Canta América Latina",
      artista:"Oscar Chavez",
      id_artista:25,
      descripcion:"¡Enjaulado! Óscar Chávez Canta América Latina es un álbum de 1972 del cantante mexicano Óscar Chávez, donde interpreta canciones de diversos géneros populares latinoamericanos, con un enfoque en la música folclórica y de protesta.",
      url_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXmu1a8aPuiCUhrtKREcFSZs3yIw9hEZ4Zg&s"
    }
  ]
};
//console.log(baseDatosJSON.canciones[0].nombre);
let busqueda=document.getElementById("buscador_input"); /*input buscador*/
let pi=document.getElementById("contenedor_resultados"); /*Div que va a contener la busqueda */
let buscador_form= document.getElementById("buscador_form");
let play=document.getElementById("play");
let random=document.getElementById("btn-random");
let siguiente=document.getElementById("btn_reproduciendo_siguiente");
let regresar=document.getElementById("btn_reproduciendo_regresar");
let formato_resultado;
let player;
let duration=0;
let VolumenAntes=0;
let volume;
let Intervalo;
let link;
let id_genero=[1,2,3,4,5,6,7,8];
let id_canciones=[];
let moda;
let maximo=baseDatosJSON.canciones.length;
const seekBar = document.getElementById('seekBar');
const volumeSlider = document.getElementById('volumeSlider');
const playPauseBtn = document.getElementById('playPauseBtn');
//Función para mostrar el video
function hacer(link)
{
  if(player)
  player.destroy();
  player = new YT.Player("player", 
  {
    videoId: link,
    playerVars: 
    {
        controls: 0,
        modestbranding: 1,
        rel: 0
    },
    events:
    {
        onReady: onPlayerReady,
    }
  });  
}
play.addEventListener("click",()=>
{
  let state = player.getPlayerState();
  if(state == YT.PlayerState.PLAYING){
    player.pauseVideo();
    play.innerHTML = "X";
  }
  else
  {
    player.playVideo();
  }
});
seekBar.addEventListener("input", ()=>
{
  let seekTo = seekBar.value;
  player.seekTo(seekTo, true);
});
function onPlayerReady(event)
{
  duration = player.getDuration();
  player.playVideo();
  seekBar.max =duration;
  volumeSlider.value =player.getVolume();
  Intervalo =setInterval(()=>
  {
    if(player && player.getPlayerState() === YT.PlayerState.PLAYING)
    {
      seekBar.value = player.getCurrentTime();
    }
    volumeActual=player.getVolume();
    if(volumeActual !== VolumenAntes)
    {
      volumeSlider.value = volumeActual;
    }
  }, 100);
}
buscador_form.addEventListener("submit", function(e)
{ //se le hace prevent para evitar que se recargue la pagina 
  e.preventDefault();
})
busqueda.addEventListener("input",function(event){
    event.preventDefault();
    pi.innerHTML="";
    let siVacio =busqueda.value.trim();
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
                {
                    link=baseDatosJSON.canciones[e].link;
                    id_canciones.push(baseDatosJSON.canciones[e].id_genero);
                    // Calcular la moda de id_canciones de forma aún más fácil, sin filter ni sort
                    if (id_canciones.length>0) 
                    {
                      let conteo={};
                      moda=id_canciones[0];
                      let maxiiii=1;
                      //Este genera la moda 
                      for (let i=0; i<id_canciones.length; i++)
                      {
                          let numa=id_canciones[i];
                          conteo[numa]=(conteo[numa] || 0) + 1;
                          if (conteo[numa]>maxiiii) 
                          {
                            maxiiii=conteo[numa];
                            moda=numa;
                          }//USA MODA
                      }
                    }
                    // Obtener el arreglo de usuario desde la cookie de forma sencilla, sin parse, try ni catch
                    console.log(Usuario_actual);
                    let donCookie=document.cookie.split("; ");
                    for (let i=0; i<donCookie.length; i++) 
                    {
                      let [key, valor]=donCookie[i].split("=");
                        if (key === Usuario_actual+"_are")
                        {
                            console.log(id_canciones);
                            setCookie(Usuario_actual+"_are",moda,1000)
                            break;
                        }
                    }
                }
            }
            console.log(link);  
            hacer(link)
        });
    });
    if (pi.children.length === 0) 
    { 
        let sinCoincidencias=document.createElement("p");
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

//BOTONES PARA SIGUIENTE Y ANTERIOR CANCION
siguiente.addEventListener("click",()=>{
  if(link != undefined) 
  {
    
    for(let b=0; b<baseDatosJSON.canciones.length; b++) 
    {
      if(baseDatosJSON.canciones[b].link == link) 
      {
        if (b+1<baseDatosJSON.canciones.length) 
        {
          hacer(baseDatosJSON.canciones[b+1].link);
          link = baseDatosJSON.canciones[b+1].link;
        } 
        else
        {
          hacer(baseDatosJSON.canciones[0].link);
          link = baseDatosJSON.canciones[0].link;
        }
        return;
      }
    }
  }
});
regresar.addEventListener("click",()=>{
  if(link!=undefined) 
  {
    for(let b=0; b<baseDatosJSON.canciones.length; b++) 
    {
      if(baseDatosJSON.canciones[b].link == link) 
      {
        if (b-1>= 0) 
        {
          hacer(baseDatosJSON.canciones[b-1].link);
          link = baseDatosJSON.canciones[b-1].link;
        } 
        else
        {
          hacer(baseDatosJSON.canciones[baseDatosJSON.canciones.length-1].link);
          link = baseDatosJSON.canciones[baseDatosJSON.canciones.length-1].link;
        }
        return;
      }
    }
  }
});
volumeSlider.addEventListener("input", () => //evento que actualiza el volumen
{
  if (player) 
  {
    player.setVolume(parseInt(volumeSlider.value));
  }
});
//CREAR RECOMENDACIONES ALEATORIAS DE LOS ARTISTAS
let numeros_artistas = []; //creo el arreglo con la cantidad de elementos igual
//al numero de artistas, y cada elemento es un número 1, 2,3,4 ...
for(let a=0; a<baseDatosJSON.artistas.length; a++)
{
  numeros_artistas.push(a);
}

//ahora quiero un arreglo con números aleatorios del 1 al 24 en este caso, que es
//el número de artistas
let artistasN_aleatorio=numeros_artistas; //creo el arreglo de 24 elementos
for (let b=numeros_artistas.length - 1; b > 0; b--) {  //Lo hago del fin hacia atrás, porque no conseguí con b++ hacer el 0 como elemento
    let c= Math.floor(Math.random()*(b + 1)); //la primera parte baja al entero más cercano los decimales
    //la parte del argumento aseguro que no se multiplique por cero y que devuelva un número mayor que el anterior ciclo
    [artistasN_aleatorio[b], artistasN_aleatorio[c]]=[artistasN_aleatorio[c], artistasN_aleatorio[b]]; //se hace un intercambio, para que lo de en desorden y no en orden el arreglo
}
console.log("El arreglo aleatorio es: "+artistasN_aleatorio);
//posteriormente voy a poner imágenes aleatorias en Artistas recomendados
let imagenes_contenedor=document.getElementById("contiene_artistas");
let numero_imagen;
for(let e=0; e<artistasN_aleatorio.length-1; e++)
{
  numero_imagen=artistasN_aleatorio[e];
  imagenes_contenedor.innerHTML+=`<img class="elemento" src="${baseDatosJSON.artistas[numero_imagen].url_img}" alt="Hola Mundo">`;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//AHORA SIGUEN LOS ALBUMS RECOMENDADOS

let numeros_albumes=[]; //creo el arreglo con la cantidad de elementos igual
//al numero de artistas, y cada elemento es un número 1, 2,3,4 ...
for(let h=0; h<baseDatosJSON.album.length; h++)
{
  numeros_albumes.push(h);
}
//ahora quiero un arreglo con números aleatorios del 1 al 24 en este caso, que es
//el número de albumes
let albumesN_aleatorio=numeros_albumes; //creo el arreglo de 24 elementos
for (let m=numeros_artistas.length - 1; m > 0; m--) {  //Lo hago del fin hacia atrás, porque no conseguí con b++ hacer el 0 como elemento
    let n= Math.floor(Math.random()*(m + 1)); //la primera parte baja al entero más cercano los decimales
    //la parte del argumento aseguro que no se multiplique por cero y que devuelva un número mayor que el anterior ciclo
    [artistasN_aleatorio[m], artistasN_aleatorio[n]]=[artistasN_aleatorio[n], artistasN_aleatorio[m]]; //se hace un intercambio, para que lo de en desorden y no en orden el arreglo
}
console.log("El arreglo aleatorio es: "+albumesN_aleatorio);
console.log("A VER SI SALIÓ TODO");
//posteriormente voy a poner imágenes aleatorias en Albumes recomendados
let albumes_contenedor=document.getElementById("contiene_album");
let numero_album;
for(let p=0; p<artistasN_aleatorio.length; p++)
{
  numero_album=albumesN_aleatorio[p];
  console.log("Deja de funcionar el elemento"+p+"Y 1 después");
  albumes_contenedor.innerHTML+=`<img class="elemento" src="${baseDatosJSON.album[numero_album].url_img}" alt="Hola Mundo">`;
}