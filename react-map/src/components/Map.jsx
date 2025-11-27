// src/components/Map.jsx

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const API_URL = 'http://localhost/7Frentes/apiConflictos.php';
//import { conflicts } from '../data/conflicts';

// Fix para Vite
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker.js?worker';
mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXN0ZWMiLCJhIjoiY21oaTI4MGg0MDhlcjJpb2RqencwMndnbiJ9.YTU0RTLBFoz7LbWa_31_bA';

const INITIAL_CENTER = [-102.54997, 23.87671];
const INITIAL_ZOOM = 4.2;

const getMarkerClassName = (type) => {
  const typeMap = {
    violencia: 'marker-violencia',
    ambiental: 'marker-ambiental',
    social: 'marker-social',
    politico: 'marker-politico'
  };
  return typeMap[type] || 'marker'; 
};

export default function Map({ onZoomChange, onConflictSelect }) {
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

  const addMarkers = async () => { 
    try {
      // 1. OBTENER DATOS DE LA API DE PHP
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      
      const conflictFeatures = data.features; 

      // 2. CREAR MARCADORES
      conflictFeatures.forEach((feature) => {
        
        // El panel de conflicto requiere más campos de los que trae la BD (ej. detailedInfo, stats)
        // Usaremos las propiedades que trae la BD y añadiremos las necesarias para evitar errores:
        const conflict = {
            // Campos de la BD
            title: feature.properties.title,
            type: feature.properties.type,
            coordinates: feature.geometry.coordinates,
            severity: feature.properties.severity,
            description: feature.properties.description,
            
            // 🚩 CAMPOS FALTANTES: Simular o dejar vacíos para que el Panel no falle
            detailedInfo: feature.properties.detailedInfo || 'No hay información detallada disponible en la BD.',
            stats: feature.properties.stats || null,
            sources: feature.properties.sources || null,
            timeline: feature.properties.timeline || null,
        };
        
        const el = document.createElement('div');
        // 🚩 CORRECCIÓN CRÍTICA: Aplica la clase CSS correcta
        el.className = `marker ${getMarkerClassName(conflict.type)}`; 

        // Click para hacer zoom Y abrir panel
        el.addEventListener('click', () => {
          map.current.flyTo({
            center: conflict.coordinates,
            zoom: 7,
            duration: 1500,
            essential: true
          });
          onZoomChange?.(true);
          onConflictSelect?.(conflict); // Abrir panel lateral (PASA EL OBJETO COMPLETO)
        });

        // Crear el marcador usando las coordenadas GeoJSON [long, lat]
        new mapboxgl.Marker(el)
          .setLngLat(conflict.coordinates)
          .addTo(map.current);
      });

    } catch (error) {
      console.error("Error al cargar los conflictos desde la API. Revisa la URL y CORS:", error);
    }
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