var stred = SMap.Coords.fromWGS84(16, 49.7);
var mapa = new SMap(JAK.gel('mapa'), stred, 8);
mapa.addDefaultLayer(SMap.DEF_BASE).enable();
mapa.addDefaultControls();
//var o = { title: 'Posun mapy' };
//var c = new SMap.Control.Compass(o);
//mapa.addControl(c, { left: '5px', bottom: '10px' });
//c = new SMap.Control.Zoom();
//mapa.addControl(c, { left: '5px', top: '5px' });

var layer = new SMap.Layer.Marker();
mapa.addLayer(layer);
layer.enable();

var card = new SMap.Card();
card.getHeader().innerHTML = '<strong>Nautis</strong>';
card.getBody().innerHTML = 'V Holešovičkách 593/1a, 182 00 Praha 8</em>';

var options = {
  title: 'Nautis',
};
var nautis = SMap.Coords.fromWGS84(14.4510939, 50.1175322);
var marker = new SMap.Marker(nautis, 'Nautis', options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);

card = new SMap.Card();
card.getHeader().innerHTML = '<strong>RIC</strong>';
card.getBody().innerHTML = 'náměstí Republiky 2686, 530 02 Pardubice</em>';

var options = {
  title: 'RIC',
};
var ric = SMap.Coords.fromWGS84(15.7770422, 50.0372325);
marker = new SMap.Marker(ric, 'RIC', options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);

card = new SMap.Card();
card.getHeader().innerHTML = '<strong>Apolenka</strong>';
card.getBody().innerHTML = 'Na Okrajích 156 Spojil, 530 02</em>';

var options = {
  title: 'Apolenka',
};
var apolenka = SMap.Coords.fromWGS84(15.8208144, 50.0480044);
marker = new SMap.Marker(apolenka, 'Apolenka', options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);

card = new SMap.Card();
card.getHeader().innerHTML = '<strong>Soukromá Logo klinika</strong>';
card.getBody().innerHTML = 'Vsetínská 20, 639 00 Brno</em>';

var options = {
  title: 'Soukromá Logo klinika',
};
var logoklinika = SMap.Coords.fromWGS84(16.5982669, 49.1774631);
marker = new SMap.Marker(logoklinika, 'Soukromá Logo klinika', options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);
