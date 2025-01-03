var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GRD_MINSURLmite_Distrital_1 = new ol.format.GeoJSON();
var features_GRD_MINSURLmite_Distrital_1 = format_GRD_MINSURLmite_Distrital_1.readFeatures(json_GRD_MINSURLmite_Distrital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRD_MINSURLmite_Distrital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRD_MINSURLmite_Distrital_1.addFeatures(features_GRD_MINSURLmite_Distrital_1);
var lyr_GRD_MINSURLmite_Distrital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRD_MINSURLmite_Distrital_1, 
                style: style_GRD_MINSURLmite_Distrital_1,
                popuplayertitle: 'GRD_MINSUR — Límite_Distrital',
                interactive: true,
                title: '<img src="styles/legend/GRD_MINSURLmite_Distrital_1.png" /> GRD_MINSUR — Límite_Distrital'
            });
var format_Infraest_UM_Pisco1_JOIN_2 = new ol.format.GeoJSON();
var features_Infraest_UM_Pisco1_JOIN_2 = format_Infraest_UM_Pisco1_JOIN_2.readFeatures(json_Infraest_UM_Pisco1_JOIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infraest_UM_Pisco1_JOIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infraest_UM_Pisco1_JOIN_2.addFeatures(features_Infraest_UM_Pisco1_JOIN_2);
var lyr_Infraest_UM_Pisco1_JOIN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infraest_UM_Pisco1_JOIN_2, 
                style: style_Infraest_UM_Pisco1_JOIN_2,
                popuplayertitle: 'Infraest_UM_Pisco1_JOIN',
                interactive: true,
    title: 'Infraest_UM_Pisco1_JOIN<br />\
    <img src="styles/legend/Infraest_UM_Pisco1_JOIN_2_0.png" /> Alto<br />\
    <img src="styles/legend/Infraest_UM_Pisco1_JOIN_2_1.png" /> Moderado<br />\
    <img src="styles/legend/Infraest_UM_Pisco1_JOIN_2_2.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GRD_MINSURLmite_Distrital_1.setVisible(true);lyr_Infraest_UM_Pisco1_JOIN_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GRD_MINSURLmite_Distrital_1,lyr_Infraest_UM_Pisco1_JOIN_2];
lyr_GRD_MINSURLmite_Distrital_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Infraest_UM_Pisco1_JOIN_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FichaUMPis': 'FichaUMPis', 'FichaUMP_1': 'FichaUMP_1', 'FichaUMP_2': 'FichaUMP_2', 'FichaUMP_3': 'FichaUMP_3', });
lyr_GRD_MINSURLmite_Distrital_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'IDDIST': 'TextEdit', 'IDDPTO': 'TextEdit', 'IDPROV': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AR_1': 'TextEdit', 'AREA_MINAM': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Infraest_UM_Pisco1_JOIN_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FichaUMPis': 'TextEdit', 'FichaUMP_1': 'TextEdit', 'FichaUMP_2': 'TextEdit', 'FichaUMP_3': 'TextEdit', });
lyr_GRD_MINSURLmite_Distrital_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDDPTO': 'no label', 'IDPROV': 'no label', 'NOMBDIST': 'inline label - always visible', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', 'SHAPE_AR_1': 'no label', 'AREA_MINAM': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Infraest_UM_Pisco1_JOIN_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FichaUMPis': 'inline label - always visible', 'FichaUMP_1': 'no label', 'FichaUMP_2': 'no label', 'FichaUMP_3': 'inline label - always visible', });
lyr_Infraest_UM_Pisco1_JOIN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});