// src/components/Map.jsx

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { conflicts } from '../data/conflicts';

// Fix para Vite
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker.js?worker';
mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXN0ZWMiLCJhIjoiY21oaTI4MGg0MDhlcjJpb2RqencwMndnbiJ9.YTU0RTLBFoz7LbWa_31_bA';

const INITIAL_CENTER = [-102.54997, 23.87671];
const INITIAL_ZOOM = 4.2;

export default function Map({ onZoomChange }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    setTimeout(() => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      map.current.on('load', () => {
        console.log("Mapa cargado correctamente");
        addMarkers();
      });
    }, 0);

    return () => map.current?.remove();
  }, []);


  const addMarkers = () => {
    conflicts.forEach((conflict) => {
      const el = document.createElement('div');
      el.className = `marker marker-${conflict.type}`;

      // Click para hacer zoom
      el.addEventListener('click', () => {
        map.current.flyTo({
          center: conflict.coordinates,
          zoom: 7,
          duration: 1500,
          essential: true
        });
        onZoomChange?.(true); // Mostrar botón de reset
      });

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h3>${conflict.title}</h3>
          <p>${conflict.description}</p>
          <div class="popup-severity">
            <span>Gravedad: ${conflict.severity}%</span>
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(conflict.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });
  };

  // Exponer función de reset
  useEffect(() => {
    window.resetMapView = () => {
      map.current?.flyTo({
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
        duration: 1500,
        essential: true
      });
      onZoomChange?.(false);
    };
  }, [onZoomChange]);

  return (
    <div 
      ref={mapContainer} 
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative'
      }}
    />
  );
}