import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature'
import * as OlProj from 'ol/proj';
import * as OlSource from 'ol/source';
import * as OlLayer from 'ol/layer';
import * as OlGeom from 'ol/geom';
import * as OlStyle from 'ol/style';


import * as Ol from 'ol';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var marker = new Feature({
      geometry: new OlGeom.Point(
        OlProj.fromLonLat([4.373725, 51.43578])
      )
    });
    var vectorSource = new OlSource.Vector({
      features: [marker],

    });
    var markerVectorLayer = new OlLayer.Vector({
      source: vectorSource,
    });

    marker.setStyle(new OlStyle.Style({
      image: new OlStyle.Icon(({
        crossOrigin: 'anonymous',
        src: '../../assets/pin.png',
        scale: 0.17
      }))
    }));

    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: OlProj.fromLonLat([4.373730, 51.435709]),
        zoom: 19,
      }),
    }).addLayer(markerVectorLayer);
  }

}
