var size = 0;
var placement = 'point';
function categories_Drogi_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Szosa I klasy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: m2px(70)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(151,63,185,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: m2px(50)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Trakt lub droga wzmocniona':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: m2px(30)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: m2px(25)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Droga wiejska':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,229,68,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(10)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Droga gospodarcza':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,146,131,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(10)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dukty leśne':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,54,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(10)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ścieżka dla pieszych':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,150,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(10)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Drogi_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Rodz_drog");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Drogi_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
