function initMap(){
    let element = document.querySelector('#map');
    let options = {
        zoom: 5,
        center: {lat: 55.7558, lng: 37.6173},
    };
    let myMap = new google.maps.Map(element, options);
    let markers = [
    {
        coordinates: {lat: 55.7558, lng: 37.6173},
        info: 'Moskow',
    },
    {
        coordinates: {lat: 59.9343, lng: 30.3351},
        info: 'St-Peter',
    }
    ]

    for(let i=0; i<markers.length; i++){
    addMarker(markers[i]);
    }
    function addMarker(properties){}
}
