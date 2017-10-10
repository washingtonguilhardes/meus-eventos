const getPosition = cb =>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            cb(true,position.coords.latitude, position.coords.longitude);
        });
    }else{
        cb(false)
    }
};


const initMap = ()=> {

    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 8,
        center: {lat: -22.980209, lng: -43.393756}
    });
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);

    setTimeout( ()=> calculateAndDisplayRoute(directionsService,directionsDisplay), 100)
};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    getPosition((hasLocation,lat,long)=>{
        let origin = 'juiz de fora, mg';
        if(hasLocation){
           origin = lat + ','+long;
        }
        directionsService.route({
            origin,
            destination: '-23.653089, -46.535861',
            travelMode: 'DRIVING'
        }, function(response, status) {
            console.log(response);
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                const data = response.routes[0];
                const travel = data.legs[0];
                const text = `Via: ${data.summary} <br />Duração da viagem: ${travel.duration.text}<br/>Enderço final: ${travel.end_address}`;
                $('#maps-description').html(text);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });

    });
}
const draw = ()=>{
    if(!document.getElementById('map-container')){
        return console.log("não carregou o mapa");
    }
    initMap();
};
$(document).on('pageload', ()=>{
    console.log("GEOLOCATIONLOADED");
    draw();
});
window.draw = draw;
// $(document).on('pageload', draw);
// $(document).ready(draw);