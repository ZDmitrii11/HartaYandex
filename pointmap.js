function test(map) {
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );
    myPlacemark = new ymaps.Placemark(map.getCenter(), {
        hintContent: 'First point',
        balloonContent: 'Este primul point'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // MY icon point
        iconImageHref: '../HartaYandex/simple1.png',
        // Size point
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [47.0354967, 28.77586269]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: 'Buiucani',
            hintContent: 'Sector'
        }
    }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackStretchyIcon',
        iconColor:'red',
        // Метку можно перемещать.
        draggable: true
    }),
   
    map.geoObjects
                  .add(myPlacemark)
                  .add(myGeoObject)
                  .add(new ymaps.GeoObject({
                        geometry: {
                        type: "Point",
                        coordinates: [47.02556583, 28.83036947]
                         },
                         properties: {
                        // Контент метки.
                        iconContent: 'Centru',
                        hintContent: 'Sector'
                    }
                }, {
                    preset: 'islands#blackStretchyIcon',
                    iconColor: 'red',

                   }))
                   .add(new ymaps.GeoObject({
                    geometry: {
                    type: "Point",
                    coordinates: [47.04855174, 28.86313105]
                     },
                     properties: {
                    // Контент метки.
                    iconContent: 'Riscani',
                    hintContent: 'Sector'
                }
            }, {
                preset: 'islands#blackStretchyIcon',
                iconColor: 'red',

               }))
               .add(new ymaps.GeoObject({
                geometry: {
                type: "Point",
                coordinates: [47.0432529, 28.89063549]
                 },
                 properties: {
                // Контент метки.
                iconContent: 'Ciocana',
                hintContent: 'Sector'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            iconColor: 'red',

           }))
           .add(new ymaps.GeoObject({
            geometry: {
            type: "Point",
            coordinates: [46.98587656, 28.85775804]
             },
             properties: {
            // Контент метки.
            iconContent: 'Botanica',
            hintContent: 'Sector'
        }
    }, {
        preset: 'islands#blackStretchyIcon',
        iconColor: 'red',

       }))
                 

};