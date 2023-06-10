var stred = SMap.Coords.fromWGS84(15, 50.08);
var mapa = new SMap(JAK.gel('mapa'), stred, 7);
mapa.addDefaultLayer(SMap.DEF_BASE).enable();
mapa.addDefaultControls();
