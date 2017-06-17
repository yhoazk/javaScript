var locations = [
  ["Split",     43.5148515, 16.4490835],
  ["Zagreb",    45.840196,  15.9643316],
  ["Dubrovnik", 42.6457256, 18.094058]
];

function initGoogleMap(){

  var infowindow = new google.maps.InfoWindow(); /* SINGLE */
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 4,
      center: new google.maps.LatLng(45, 15)
  });

  function placeMarker( loc ) {
    var latLng = new google.maps.LatLng( loc[1], loc[2]);
    var marker = new google.maps.Marker({
      position : latLng,
      map      : map
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent( "<div id='infowindow'>"+ loc[0] +"</div>");
        infowindow.open(map, marker);
    });
  }

  // ITERATE ALL LOCATIONS
  // Don't create functions inside for loops
  // therefore refer to a previously created function
  // and pass your iterating location as argument value:
  for(var i=0; i<locations.length; i++) {
    placeMarker( locations[i] );
  }

}
google.maps.event.addDomListener(window, 'load', initGoogleMap);


/*


Add a info window to each infowindow
Attach a new property to the object and then call it from the this object


for(var i = 0; i < markers.length; i++){
    name = markers[i].getAttribute("name");
    address = markers[i].getAttribute("address");
    point = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")), parseFloat(markers[i].getAttribute("lng")));
    contentString = '<div style="font-family: Lucida Grande, Arial, sans-serif;>'+'<div><b>'+ name +'</b></div>'+'<div>'+ address +'</div>';
    marker = new google.maps.Marker({
        map: map,
        position: point,
        title: name+" "+address,
        buborek: contentString
    });
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.setContent(this.buborek);
        infowindow.open(map,this);
    });
    marker.setMap(map);
}

*/
