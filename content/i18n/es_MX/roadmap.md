## Hoja de ruta

Lo que todavía vamos a construir. Lo que ya está listo aparece en [Funciones](#recursos).
Las fechas son una estimación y pueden cambiar. Las sugerencias y prioridades se platican en nuestro
Discord, y cada punto se convierte en un pull request abierto en GitHub.

Las prioridades salen de lo que más se menciona en los foros y en las reseñas de otras distros:
el miedo a que una actualización rompa el sistema, los drivers, instalar programas sin terminal y
cuidar la computadora sin necesidad de ser experto.

### 28/09 al 08/11 · Programas sin complicaciones (y seguros)

- [x] **Tienda de aplicaciones**: calificaciones de los usuarios y los permisos de cada app antes de instalar (la Tienda con Flathub y los repositorios de Arch ya está aquí)
- [x] **Arrastrar para instalar**, como en una Mac: haz doble clic en un .exe, .deb, .rpm o AppImage y arrástralo a **Aplicaciones**
- [x] **Todo lo externo corre en una caja aislada**: los programas de Windows (Bottles), los paquetes .deb/.rpm (Podman) y los AppImage no pueden ver tu sistema ni tus archivos sin permiso
- [x] Una página **Cajas** en Configuración: ver, dar o quitar el acceso a archivos, red, cámara y micrófono, y borrar una caja
- [x] **Apps de Android** (APK) en una caja, con Waydroid, que aparecen en el lanzador como cualquier otra app
- [x] **Juegos en un clic**: Steam, Proton y modo juego, con aviso para juegos con anti-cheat que no funcionan en Linux
- [x] **Juegos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instala desde Tienda → Juegos nativos. Al abrir por primera vez, proporciona la ROM de tu propio cartucho; los paquetes no incluyen datos del juego.

### 09/11 al 13/12 · Crear y compartir

- [ ] **Un Lingmo Studio más inteligente**: reencuadrar siguiendo al sujeto principal (no solo la cara), saber quién habla en cada fragmento (diarización) y efectos de audio en cada pista
- [ ] **Publicar los juegos nativos que faltan**: Zelda: Ocarina of Time (Ship of Harkinian) y Mario Kart 64 (SpaghettiKart), hoy como "Próximamente" en la Tienda, en cuanto la licencia de los proyectos permita distribuirlos
- [ ] Terminar de pasar a **LingmoUI** las barras laterales de Configuración, Correo y el administrador de archivos, con el mismo look que las demás apps
- [ ] Preparar el camino para la **sesión Wayland**: probar las apps y los efectos de Lingmo en Wayland (la sesión completa sigue prevista para 2027)

### 09/11 al 13/12 · Cuidar la computadora

- [ ] **Monitor del sistema** (Ctrl + Shift + Esc): red y tarjeta de video, además del procesador, la memoria y el disco que ya muestra el Optimizador
- [ ] **Información del sistema** con un botón "Copiar reporte" para pedir ayuda en Discord o en foros
- [ ] Desenfoque y fondo de cámara con recorte de calidad (cabello, audífonos y hombros)

### 14/12 al 31/01/2027 · Actualizar sin miedo

- [ ] **Punto de restauración automático** antes de cada actualización (btrfs), con opción de regresar directo desde el menú de arranque
- [ ] Botón **"Volver a ayer"** en Configuración y en el actualizador
- [ ] El actualizador muestra las noticias de Arch en lenguaje sencillo y detiene las actualizaciones que requieren intervención manual
- [ ] **Administrador de drivers**: detecta la tarjeta de video (NVIDIA, AMD, Intel) e instala el driver correcto, manteniéndolo al día con el kernel

### 01/02 al 31/03/2027 · Hardware de todos los días

- [ ] **Impresoras y escáneres** reconocidos automáticamente, con una pantalla sencilla para agregarlos
- [ ] **Audífonos Bluetooth**: elegir entre calidad de música o micrófono, regresando a la calidad de música después de las llamadas
- [ ] **Batería**: límite de carga al 80% para que dure más, perfiles de energía y salud de la batería
- [ ] Escalado fraccionario nítido (125%, 150%) en todas las apps, por monitor

### 01/04 al 31/05/2027 · Integración y apariencia

- [ ] **Cambiar el diseño** con un clic: estilo macOS, estilo Windows o Lingmo
- [ ] **Versiones anteriores** de los archivos en el administrador de archivos, como en Time Machine
- [ ] **Celular integrado**: notificaciones, archivos y portapapeles con Android y iPhone (KDE Connect)
- [ ] **Cuentas en la nube**: Google Drive y OneDrive dentro del administrador de archivos
- [x] Copiar el texto de una captura de pantalla (OCR)
- [ ] Instalador que avisa sobre BitLocker y Secure Boot al instalar junto a Windows

### A partir de junio de 2027

- [ ] Asistente de IA: resumir, traducir y explicar el texto seleccionado en cualquier app
- [ ] Control parental: tiempo de uso y hora de dormir
- [ ] Sesión Wayland
- [ ] ISO generada y probada automáticamente en cada versión
- [ ] Office y Adobe con Windows integrado (WinBoat), para quien lo necesite
