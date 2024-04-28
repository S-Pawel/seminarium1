var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_granice_gmin_1 = new ol.format.GeoJSON();
var features_granice_gmin_1 = format_granice_gmin_1.readFeatures(json_granice_gmin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granice_gmin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granice_gmin_1.addFeatures(features_granice_gmin_1);
var lyr_granice_gmin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_granice_gmin_1, 
                style: style_granice_gmin_1,
                interactive: true,
                title: '<img src="styles/legend/granice_gmin_1.png" /> granice_gmin'
            });
var format_Zabudowa_2 = new ol.format.GeoJSON();
var features_Zabudowa_2 = format_Zabudowa_2.readFeatures(json_Zabudowa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zabudowa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zabudowa_2.addFeatures(features_Zabudowa_2);
var lyr_Zabudowa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zabudowa_2, 
                style: style_Zabudowa_2,
                interactive: true,
                title: '<img src="styles/legend/Zabudowa_2.png" /> Zabudowa'
            });
var format_Rzeki_3 = new ol.format.GeoJSON();
var features_Rzeki_3 = format_Rzeki_3.readFeatures(json_Rzeki_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzeki_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzeki_3.addFeatures(features_Rzeki_3);
var lyr_Rzeki_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rzeki_3, 
                style: style_Rzeki_3,
                interactive: true,
                title: '<img src="styles/legend/Rzeki_3.png" /> Rzeki'
            });
var format_Rodzaj_terenu_4 = new ol.format.GeoJSON();
var features_Rodzaj_terenu_4 = format_Rodzaj_terenu_4.readFeatures(json_Rodzaj_terenu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodzaj_terenu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodzaj_terenu_4.addFeatures(features_Rodzaj_terenu_4);
var lyr_Rodzaj_terenu_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rodzaj_terenu_4, 
                style: style_Rodzaj_terenu_4,
                interactive: true,
    title: 'Rodzaj_terenu<br />\
    <img src="styles/legend/Rodzaj_terenu_4_0.png" /> Las mieszany<br />\
    <img src="styles/legend/Rodzaj_terenu_4_1.png" /> Zarośla iglaste i liściaste<br />\
    <img src="styles/legend/Rodzaj_terenu_4_2.png" /> Obszary zabudowane<br />\
    <img src="styles/legend/Rodzaj_terenu_4_3.png" /> Cmentarz chrześcijański<br />\
    <img src="styles/legend/Rodzaj_terenu_4_4.png" /> Zbiorniki wodne<br />\
    <img src="styles/legend/Rodzaj_terenu_4_5.png" /> Nieużytki i pastwiska<br />'
        });
var format_Drogi_5 = new ol.format.GeoJSON();
var features_Drogi_5 = format_Drogi_5.readFeatures(json_Drogi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drogi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drogi_5.addFeatures(features_Drogi_5);
var lyr_Drogi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drogi_5, 
                style: style_Drogi_5,
                interactive: true,
    title: 'Drogi<br />\
    <img src="styles/legend/Drogi_5_0.png" /> Szosa I klasy<br />\
    <img src="styles/legend/Drogi_5_1.png" /> Trakt lub droga wzmocniona<br />\
    <img src="styles/legend/Drogi_5_2.png" /> Droga wiejska<br />\
    <img src="styles/legend/Drogi_5_3.png" /> Droga gospodarcza<br />\
    <img src="styles/legend/Drogi_5_4.png" /> Dukty leśne<br />\
    <img src="styles/legend/Drogi_5_5.png" /> Ścieżka dla pieszych<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_granice_gmin_1.setVisible(true);lyr_Zabudowa_2.setVisible(true);lyr_Rzeki_3.setVisible(true);lyr_Rodzaj_terenu_4.setVisible(true);lyr_Drogi_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_granice_gmin_1,lyr_Zabudowa_2,lyr_Rzeki_3,lyr_Rodzaj_terenu_4,lyr_Drogi_5];
lyr_granice_gmin_1.set('fieldAliases', {'gml_id': 'gml_id', 'JPT_SJR_KO': 'JPT_SJR_KO', 'JPT_POWIER': 'JPT_POWIER', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'JPT_ORGAN_': 'JPT_ORGAN_', 'JPT_JOR_ID': 'JPT_JOR_ID', 'WERSJA_OD': 'WERSJA_OD', 'WERSJA_DO': 'WERSJA_DO', 'WAZNY_OD': 'WAZNY_OD', 'WAZNY_DO': 'WAZNY_DO', 'JPT_KOD__1': 'JPT_KOD__1', 'JPT_NAZWA1': 'JPT_NAZWA1', 'JPT_ORGAN1': 'JPT_ORGAN1', 'JPT_WAZNA_': 'JPT_WAZNA_', 'ID_BUFORA_': 'ID_BUFORA_', 'ID_BUFORA1': 'ID_BUFORA1', 'ID_TECHNIC': 'ID_TECHNIC', 'IIP_PRZEST': 'IIP_PRZEST', 'IIP_IDENTY': 'IIP_IDENTY', 'IIP_WERSJA': 'IIP_WERSJA', 'JPT_KJ_IIP': 'JPT_KJ_IIP', 'JPT_KJ_I_1': 'JPT_KJ_I_1', 'JPT_KJ_I_2': 'JPT_KJ_I_2', 'JPT_OPIS': 'JPT_OPIS', 'JPT_SPS_KO': 'JPT_SPS_KO', 'ID_BUFOR_1': 'ID_BUFOR_1', 'JPT_ID': 'JPT_ID', 'JPT_POWI_1': 'JPT_POWI_1', 'JPT_KJ_I_3': 'JPT_KJ_I_3', 'JPT_GEOMET': 'JPT_GEOMET', 'JPT_GEOM_1': 'JPT_GEOM_1', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'REGON': 'REGON', 'RODZAJ': 'RODZAJ', });
lyr_Zabudowa_2.set('fieldAliases', {'id': 'id', 'Rodz_zab': 'Rodz_zab', });
lyr_Rzeki_3.set('fieldAliases', {'id': 'id', 'Rodz_rzek': 'Rodz_rzek', });
lyr_Rodzaj_terenu_4.set('fieldAliases', {'id': 'id', 'Rodz_teren': 'Rodz_teren', });
lyr_Drogi_5.set('fieldAliases', {'id': 'id', 'Rodz_drog': 'Rodz_drog', });
lyr_granice_gmin_1.set('fieldImages', {'gml_id': 'TextEdit', 'JPT_SJR_KO': 'TextEdit', 'JPT_POWIER': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'JPT_ORGAN_': 'TextEdit', 'JPT_JOR_ID': 'TextEdit', 'WERSJA_OD': 'TextEdit', 'WERSJA_DO': 'TextEdit', 'WAZNY_OD': 'TextEdit', 'WAZNY_DO': 'TextEdit', 'JPT_KOD__1': 'TextEdit', 'JPT_NAZWA1': 'TextEdit', 'JPT_ORGAN1': 'TextEdit', 'JPT_WAZNA_': 'TextEdit', 'ID_BUFORA_': 'TextEdit', 'ID_BUFORA1': 'TextEdit', 'ID_TECHNIC': 'TextEdit', 'IIP_PRZEST': 'TextEdit', 'IIP_IDENTY': 'TextEdit', 'IIP_WERSJA': 'TextEdit', 'JPT_KJ_IIP': 'TextEdit', 'JPT_KJ_I_1': 'TextEdit', 'JPT_KJ_I_2': 'TextEdit', 'JPT_OPIS': 'TextEdit', 'JPT_SPS_KO': 'TextEdit', 'ID_BUFOR_1': 'TextEdit', 'JPT_ID': 'TextEdit', 'JPT_POWI_1': 'TextEdit', 'JPT_KJ_I_3': 'TextEdit', 'JPT_GEOMET': 'TextEdit', 'JPT_GEOM_1': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'REGON': 'TextEdit', 'RODZAJ': 'TextEdit', });
lyr_Zabudowa_2.set('fieldImages', {'id': '', 'Rodz_zab': '', });
lyr_Rzeki_3.set('fieldImages', {'id': '', 'Rodz_rzek': '', });
lyr_Rodzaj_terenu_4.set('fieldImages', {'id': 'TextEdit', 'Rodz_teren': 'ValueMap', });
lyr_Drogi_5.set('fieldImages', {'id': 'TextEdit', 'Rodz_drog': 'ValueMap', });
lyr_granice_gmin_1.set('fieldLabels', {'gml_id': 'no label', 'JPT_SJR_KO': 'no label', 'JPT_POWIER': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'JPT_ORGAN_': 'no label', 'JPT_JOR_ID': 'no label', 'WERSJA_OD': 'no label', 'WERSJA_DO': 'no label', 'WAZNY_OD': 'no label', 'WAZNY_DO': 'no label', 'JPT_KOD__1': 'no label', 'JPT_NAZWA1': 'no label', 'JPT_ORGAN1': 'no label', 'JPT_WAZNA_': 'no label', 'ID_BUFORA_': 'no label', 'ID_BUFORA1': 'no label', 'ID_TECHNIC': 'no label', 'IIP_PRZEST': 'no label', 'IIP_IDENTY': 'no label', 'IIP_WERSJA': 'no label', 'JPT_KJ_IIP': 'no label', 'JPT_KJ_I_1': 'no label', 'JPT_KJ_I_2': 'no label', 'JPT_OPIS': 'no label', 'JPT_SPS_KO': 'no label', 'ID_BUFOR_1': 'no label', 'JPT_ID': 'no label', 'JPT_POWI_1': 'no label', 'JPT_KJ_I_3': 'no label', 'JPT_GEOMET': 'no label', 'JPT_GEOM_1': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'REGON': 'no label', 'RODZAJ': 'no label', });
lyr_Zabudowa_2.set('fieldLabels', {'id': 'no label', 'Rodz_zab': 'no label', });
lyr_Rzeki_3.set('fieldLabels', {'id': 'no label', 'Rodz_rzek': 'no label', });
lyr_Rodzaj_terenu_4.set('fieldLabels', {'id': 'no label', 'Rodz_teren': 'no label', });
lyr_Drogi_5.set('fieldLabels', {'id': 'no label', 'Rodz_drog': 'no label', });
lyr_Drogi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});