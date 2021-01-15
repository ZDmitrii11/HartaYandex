ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [47.00556,28.8575],
        zoom: 7
    });
    test(myMap);
}