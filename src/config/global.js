export default {
  global: {
    componenteFormativo: 'Proceso de traducción',
    descripcionCurso:
      'La traducción es considerada como todo acto de comunicación que produce un equivalente natural del mensaje de la lengua fuente, donde se retransmite un mensaje en la lengua meta. Aquí es necesario tener en cuenta factores culturales y expresiones propias de la lengua de señas. Asimismo, es importante considerar las equivalencias entre lenguas como aspectos formales, culturales, gramaticales, discursivos y estructurales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Traducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Aspectos que intervienen en el proceso de traducción y equivalencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de traducción y categorización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF06_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Traducción',
      referencia:
        'Coseriu, E., y Polo, J. (1986). <i>Introducción a la lingüística</i> (Vol. 65). Gredos. ',
      tipo: 'Artículo',
      link:
        'http://ri.uaemex.mx/bitstream/handle/20.500.11799/33985/secme-15936.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Traducción',
      referencia:
        'Bernal, J. (1985). En torno a la lingüística textual. <i>Thesaurus-Instituto Caro y Cuervo, 40</i>(2), 390-395.',
      tipo: 'Artículo',
      link:
        'https://cvc.cervantes.es/lengua/thesaurus/pdf/40/TH_40_002_150_0.pdf',
    },
    {
      tema: 'Traducción',
      referencia:
        'Parkinson de Saz, S. M. (1984). Teoría y técnicas de la traducción. <i>Boletín AEPE, 31</i>, 91-109.',
      tipo: 'Artículo',
      link:
        'https://cvc.cervantes.es/ensenanza/biblioteca_ele/aepe/pdf/boletin_31_16_84/boletin_31_16_84_11.pdf',
    },
    {
      tema: 'Traducción',
      referencia:
        'Carr, K. (2013). <i>Métodos y técnicas de traducción de los culturemas en la versión española de Skumtimmen, de Johan Theorin</i>. Stockholms Universitet.',
      tipo: 'Artículo',
      link: 'http://www.diva-portal.org/smash/get/diva2:630865/fulltext01.pdf',
    },
    {
      tema: 'Traducción',
      referencia:
        'Matamoros, M. (2015). <i>Procedimientos de traducción</i>. UAMex.',
      tipo: 'Artículo',
      link: 'http://ri.uaemex.mx/handle/20.500.11799/33985',
    },
    {
      tema:
        'Aspectos que intervienen en el proceso de traducción y equivalencias',
      referencia:
        'Montes Giraldo, J. J. (1982). El español de Colombia: propuesta de clasificación dialectal. <i>Thesaurus: Boletín del Instituto Caro y Cuervo, 37</i>(1), 23-92.',
      tipo: 'Artículo',
      link:
        'https://cvc.cervantes.es/lengua/thesaurus/pdf/37/th_37_001_023_0.pdf',
    },
    {
      tema:
        'Aspectos que intervienen en el proceso de traducción y equivalencias',
      referencia:
        'Gómez Font, A. (1998). Un nuevo lenguaje técnico: el español en la red. <i>Chasqui</i>, 66, 59-63.',
      tipo: 'Artículo',
      link: 'https://revistachasqui.org/index.php/chasqui/article/view/525/524',
    },
    {
      tema:
        'Aspectos que intervienen en el proceso de traducción y equivalencias',
      referencia:
        'Gómez, N. L. (1999). <i>Estructuras básicas y procesos fonológicos en la lengua de señas colombiana</i>.',
      tipo: 'Artículo',
      link:
        'https://bibliotecadigital.univalle.edu.co/bitstream/handle/10893/2696/Rev.Lenguaje%2CNo.27%2Cp.50-77%2C1999.pdf?sequence=2&isAllowed=y',
    },
    {
      tema:
        'Aspectos que intervienen en el proceso de traducción y equivalencias',
      referencia:
        'Fridman-Mintz, B. (2012). <i>Reflexiones sobre las etnias sordas</i>. Congreso iberoamericano de educación bilingüe para sordos, Paraguay.',
      tipo: 'Artículo',
      link: 'https://cultura-sorda.org/reflexiones-sobre-las-etnias-sordas/',
    },
    {
      tema: 'Técnicas de traducción y categorización',
      referencia:
        'Massone, M. I., & Menéndez, S. M. (1996). <i>Una aproximación interaccional para el análisis de la Lengua de Señas Argentina</i>.',
      tipo: 'Artículo',
      link:
        'https://cultura-sorda.org/una-aproximacion-interaccional-para-el-analisis-lsa/',
    },
  ],
  glosario: [
    {
      termino: 'Acrónimos',
      significado:
        'término formado por la unión de elementos de dos o más palabras.',
    },
    {
      termino: 'Anafórico',
      significado:
        'cuando el sentido de un término gramatical o léxico depende de otro término ya mencionado.',
    },
    {
      termino: 'Afijo',
      significado:
        'partícula lingüística que se une a la palabra o raíz de la palabra para formar otra, creando una nueva con significado diferente. Si se fija adelante se le llama prefijo, pero si se fija atrás de la palabra se le llama sufijo.',
    },
    {
      termino: 'Analogía',
      significado:
        'procedimiento para crear o transformar palabras o expresiones nuevas.',
    },
    {
      termino: 'Antropónimo',
      significado:
        'sustantivo propio que designa a un ser humano, nombres propios de personas.',
    },
    {
      termino: 'Apócope',
      significado:
        'forma abreviada de una palabra, en la que se quitan letras o sílabas.',
    },
    {
      termino: 'Barbarismos',
      significado:
        'incorrección lingüística que consiste en pronunciar o escribir mal las palabras, o en emplear vocablos impropios.',
    },
    {
      termino: 'Neologismos',
      significado: 'vocablo, acepción o giro nuevo en una lengua.',
    },
    {
      termino: 'Unívoco',
      significado:
        'adjetivo que tiene un solo nombre, significado o interpretación.',
    },
    {
      termino: 'Vocativo',
      significado:
        'palabras con las que el emisor busca llamar la atención, calificar o nombrar a la persona a la cual se dirige.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, D. F. (2020). El voseo en Medellín, Colombia: un rasgo dialectal distintivo de la identidad paisa. <i>Dialectologia: Revista Electrónica</i>, 91-109.',
    },
    {
      referencia:
        'Bernal, J. (1985). En torno a la lingüística textual. <i>Thesaurus-Instituto Caro y Cuervo, 40</i>(2), 390-395.',
    },
    {
      referencia:
        'Carr, K. (2013). <i>Métodos y técnicas de traducción de los culturemas en la versión española de Skumtimmen, de Johan Theorin</i>. Stockholms Universitet.',
    },
    {
      referencia:
        'Coseriu, E., & Polo, J. (1986). <i>Introducción a la lingüística</i> (Vol. 65). Gredos.',
    },
    {
      referencia:
        'Fridman-Mintz, B. (2012). <i>Reflexiones sobre las etnias sordas</i>. En Congreso Iberoamericano de Educación Bilingüe para Sordos, Paraguay.',
    },
    {
      referencia:
        'Gómez Font, A. (1999). Un nuevo lenguaje técnico: el español en la red. <i>Chasqui</i>, 66, 59-63.',
    },
    {
      referencia:
        'Gómez, N. L. (1999). <i>Estructuras básicas y procesos fonológicos en la lengua de señas colombiana</i>.',
    },
    {
      referencia:
        'Hatim, B. y I. Mason. (1997). <i>The Translator as Communicator</i>.  Routledge.',
    },
    {
      referencia:
        'López Guix, J. G., y Wilkinson, J. M. (1997). <i>Manual de traducción inglés-castellano</i>. Gedisa.',
    },
    {
      referencia:
        'Luque, N., L. (2009). Los culturemas: ¿unidades lingüísticas, ideológicas o culturales?. <i>Language Design: Journal of Theoretical and Experimental Linguistics, (special issue)</i>, 0093-120.',
    },
    {
      referencia:
        'Massome, M., y Méndez, M. (1996). <i>Una aproximación internacional para el análisis de la Lengua de Señas Argentina</i>.',
      link:
        'https://cultura-sorda.org/una-aproximacion-interaccional-para-el-analisis-lsa/',
    },
    {
      referencia:
        'Matamoros, M. (2015). <i>Procedimientos de traducción</i>. UAMex.',
    },
    {
      referencia:
        'Montes, J. (1983). Habla, lengua e idioma. <i>Thesaurus: Boletín del Instituto Caro y Cuervo, 38</i>, 329-339.',
    },
    {
      referencia:
        'Montes, G., J. (1982). El español de Colombia: propuesta de clasificación dialectal. <i>Thesaurus: Boletín del Instituto Caro y Cuervo, 37</i>(1), 23-92.',
    },
    {
      referencia:
        'Nida, E. A. (1959). Principles of Translation as Exemplified by Bible Translating, en R. Brower (ed.), <i>On Translation</i> (pp. 11-31). Harvard University Press.',
    },
    {
      referencia:
        'Oviedo, A. (2001). <i>Apuntes para una gramática de la Lengua de Señas Colombiana</i>. Ministerio de Educación Nacional, Instituto Nacional para Sordos.',
    },
    {
      referencia:
        'Parkinson de Saz, S. M. (1984). Teoría y técnicas de la traducción. <i>Boletín AEPE, 31</i>, 91-109.',
    },
    {
      referencia:
        'Steiner, G. (1975). Después de Babel. Aspectos del lenguaje y la traducción (trad. A. Castañón). Fondo de Cultura Económica.',
    },
    {
      referencia:
        'Van Dijk, T. A. (2005). <i>Estructuras y funciones del discurso: una introducción interdisciplinaria a la lingüística del texto ya los estudios del discurso</i>. Siglo XXI.',
    },
    {
      referencia:
        'Vinay, J. P., & Darbelnet, J. (1958). <i>A methodology for translation</i>. Benjamins Translation Library.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional diseño curricular',
          centro: 'Centro de Servicios de Salud Regional Antioquia',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
        },
        {
          nombre: 'Martha Isabel Martínez Vargs',
          cargo: 'Productora audiovisual',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta',
          centro:
            'Regional Bogotá - Centro de formación en Talento Humano y Salud',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Ana Catalina Córdoba',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validación de contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Diseño digital',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
