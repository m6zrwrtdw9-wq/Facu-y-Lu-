# Facu & Lu — página para GitHub Pages

## 1. Editar datos

Abrí `script.js` y cambiá:

```js
const relationshipStart = new Date("2025-11-02T00:00:00");
```

por la fecha real en la que empezaron.

También podés cambiar los textos de `index.html`.

## 2. Agregar fotos

Poné tus fotos originales dentro de:

`assets/images/`

y mantené estos nombres:

- `foto-01.jpg`
- `foto-02.jpg`
- `foto-03.jpg`
- `foto-04.jpg`
- `foto-05.jpg`
- `video-cover.jpg`

Si tenés más, se pueden agregar fácilmente.

## 3. Probar

Abrí `index.html` en el navegador.

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "Facu & Lu"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/facu-lu.git
git push -u origin main
```

Después:

GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

## 5. Recomendación

Para que quede realmente idéntica a la página original, reemplazá las imágenes de ejemplo por las fotos originales. La estructura, colores, tarjetas, tipografías, botones, animaciones, contador y vales ya están preparados.


## Fotos cargadas

Se incorporaron las 6 fotos que enviaste:

- foto-01.jpeg — salida/noche
- foto-02.jpeg — beso
- foto-03.jpeg — espejo con gato
- foto-04.jpeg — sorpresa/regalo
- foto-05.jpeg — espejo
- foto-06.jpeg — selfie/abrazo

Si querés cambiar el orden, solo hay que cambiar los nombres o las referencias en `index.html`.


## Música y mapa

La canción configurada es **“Me falta algo” — Quevedo**, usando el video oficial de YouTube como reproductor. El navegador necesita una interacción del usuario para iniciar audio, por eso aparece el botón “ESCUCHAR NUESTRA CANCIÓN”.

El mapa usa **Leaflet + OpenStreetMap** y contiene 7 pines en San Carlos de Bariloche. Cada pin muestra un texto personalizado al tocarlo. Los lugares sin coordenadas fijas se geocodifican al cargar la página mediante OpenStreetMap; si el servicio no responde, se usan coordenadas de respaldo.

### Lugares
1. Cervecería Ogham — donde se conocieron.
2. Galería del Sol — punto de encuentro.
3. Mostaza — “Mostaza”.
4. Primera cita — ubicación del enlace de Apple Maps.
5. Otto Goedecke 76 — lugar actual.
6. Suipacha 3759 — propuesta e inicio formal.
7. Aeropuerto Bariloche — despedidas y reencuentros.

> Nota: la canción se reproduce desde YouTube. Si querés usar un archivo MP3 local, necesitás aportar el archivo de audio que tengas derecho a utilizar; se puede sustituir el reproductor por un `<audio>` local.
