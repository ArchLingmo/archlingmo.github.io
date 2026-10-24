## Funciones

Todo esto ya viene incluido en ArchLingmo hoy.

### Escritorio

- **Barra superior** con reloj, calendario al hacer clic en la fecha e íconos de la bandeja
- **Centro de control**: Wi-Fi, Bluetooth, modo oscuro, luz nocturna, no molestar y volumen en un solo panel
- **Dock** con vista previa de las ventanas al pasar el mouse y fondo **sólido, de vidrio o sin fondo**
- **Spotlight** (Super + Espacio): apps, archivos, cálculos, conversión de unidades y monedas, y búsqueda dentro de documentos
- **Historial del portapapeles** (Super + V)
- **Esquinas activas**: lleva el mouse a una esquina para ver todas las ventanas, el escritorio o bloquear la pantalla
- **Efectos**: ventanas gelatinosas, lámpara mágica y Alt+Tab como hojas de libro
- Menú global también para apps GTK
- **Widgets de reloj y clima** en el escritorio, con el pronóstico real de la ciudad que elijas, agrupados en un ícono de la barra superior
- **Alt+Tab "Carrusel"**: cambia de ventana en un carrusel en 3D, al estilo cover flow, con reflejo
- **Íconos Lingmo**: un tema de íconos propio, con íconos fluidos en forma de squircle, generados a partir de WhiteSur. Los íconos de apps de terceros reciben solos la misma placa
- **Dock con ampliación** de los íconos hasta 200% al pasar el mouse y **barra de estado** con alturas listas para elegir

### Inteligencia artificial (en tu computadora)

- **Asistente** (Super + I): una IA que corre en tu computadora, con Ollama. Lee tus documentos (PDF, DOCX…), notas y calendario, revisa la información del sistema y ejecuta comandos de solo lectura de la terminal en una caja aislada. Con tu permiso crea notas, eventos, tareas y archivos: cada cambio pide confirmación y nunca borra nada
- **IA en Spotlight**: empieza con "ai:" para platicar, o escribe una pregunta que termine en "?" y elige preguntarle a la IA. Muestra cuánto tardó cada respuesta y qué tan rápida fue, y usa las mismas herramientas que el Asistente
- **Configuración › Inteligencia artificial**: estado de Ollama, modelos instalados, recomendaciones para *esta* computadora, descarga de modelos con progreso, la opción "Pensar antes de responder" y los permisos y herramientas del Asistente
- **Automatizador**: rutinas diarias a una hora programada, con un comando y, si quieres, la IA local explicando el resultado
- **Transcripción y subtítulos** en Configuración › Inteligencia artificial: modelos de whisper.cpp con etiquetas y el sello "Recomendado para tu computadora", junto a los modelos de IA recomendados para tu hardware (llmfit)
- **Assistant flows**: build automations from blocks, a trigger (a time, a new e-mail, a voice command or a shortcut) plus app actions, follow every run step by step and approve once what the flow may do
- **Agents and voice**: assistants with their own instructions, model and tools, called in the chat, in a flow or from Spotlight ("ai:@name"). And talk to the Assistant by voice with Meta + Shift + I
- **Ask about the screen** (Meta + S): circle or select any area of the screen to explain, translate, summarize, copy its text or search the web. It is analyzed on your computer and nothing is sent
- **App actions** (Lingmo Intents): Clock, Mail, Notes, Files, Screenshots and other apps offer actions to the Assistant, Flows and Spotlight: type what you want, such as an alarm at 7, and confirm. In Settings › Artificial Intelligence you can turn off an app or a single action, and sending or changing anything always asks first

### Configuración

- **Bienvenida** en el primer inicio de sesión: tema claro u oscuro, color de acento, fondo de pantalla y efectos
- **Pantallas**: arrastra para acomodarlas, gíralas y elige la principal
- **Luz nocturna** con horario automático y cambio de distribución del teclado desde la barra
- Páginas de **Atajos** y de **Inicio automático** para elegir qué se abre con el sistema
- **Actualizaciones sin terminal**: aviso en la barra y botón "Actualizar"
- Disponible en **48 idiomas**
- **Folders that follow your language**: when you switch language, your personal folders (Documents, Videos, Pictures…) get the new names; folders that exist in two languages are merged without deleting anything, and you can undo it

### Cámara y seguridad

- **Encuadre automático** de la cámara en tus reuniones, en cualquier app (Meet, Zoom, Teams, Discord)
- **Lector de huellas** para iniciar sesión, desbloquear y autorizar contraseñas de administrador
- **Reconocimiento facial** con la webcam para iniciar sesión y desbloquear (si falla, te pide la contraseña)

### Aplicaciones

- **Correo**: cuentas IMAP y POP3 con detección automática del proveedor y una guía para cada uno (contraseñas de aplicación de Gmail, Yahoo e iCloud). Carpetas con conteo de no leídos, búsqueda y filtros, destacar, archivar, mover y borrar varios mensajes a la vez, reglas automáticas, contactos con autocompletado y avisos de correo nuevo
- **Calendario y tareas** en Correo: vista de mes, semana, día y agenda, eventos que se repiten, recordatorios aun con la app cerrada y sincronización CalDAV (iCloud, Yahoo, Fastmail, Nextcloud). Tareas de hoy, próximas y atrasadas, e invitaciones a reuniones (.ics) con Aceptar, Tal vez o Rechazar
- **Notas** al estilo de Notion: editor de bloques, menú "/", subpáginas, íconos, favoritos, papelera y búsqueda rápida (Ctrl + K)
- **Optimizador**: haz clic en CPU, Memoria o Almacenamiento para ver los detalles: a dónde se fue el espacio del disco, carpeta por carpeta, con sugerencias, y las apps que más memoria y procesador usan. El botón "Optimizar y limpiar" borra cachés, la caché de actualizaciones, registros viejos y runtimes de Flatpak sin uso
- Administrador de **archivos** con arrastrar y soltar y ordenamiento como en Thunar
- **Terminal** con tema Dracula en modo oscuro y elección del shell (bash, zsh, fish…) en las nuevas preferencias, **editor de texto**, **calculadora** y **reproductor de video**
- **Reloj y alarmas**, un **Creador de medios USB** para grabar una ISO en una memoria USB, **Programas de Windows** (abre un .exe y ve la versión para Linux o una alternativa en la Tienda, o pruébalo con Bottles/Wine) y la **Tienda de aplicaciones** con Flathub y los repositorios de Arch en un solo lugar
- Todas las apps con el mismo look de Lingmo, en tema claro y oscuro
- **Capturas y grabación de pantalla**, con micrófono y audio del sistema
- Instalador **Calamares** y sonido con **PipeWire**
- **Juegos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instala desde Tienda → Juegos nativos. Al abrir por primera vez, proporciona la ROM de tu propio cartucho; los paquetes no incluyen datos del juego.
- **Captura de pantalla** (Print, Shift + Print y Ctrl + Print): todo lo que hace Flameshot (herramientas de anotación, fijar en la pantalla, copiar, guardar y línea de comandos) y más: "Copiar texto" con OCR en la propia computadora, ocultar datos con un clic, selección inteligente, captura con desplazamiento, modo presentación, historial editable y grabación en GIF
- **Fotos**: tus imágenes en biblioteca, favoritos y carpetas, con las mismas miniaturas del administrador de archivos
- **Lector de PDF**: miniaturas de las páginas, índice, notas y ajuste al ancho
- **Vista en columnas en Archivos** (Ctrl + 3) y miniaturas con el estándar freedesktop, compartidas con Fotos

### Video: Lingmo Studio

- **Lingmo Studio**: un editor de video hecho sobre MLT, con páginas como las de DaVinci Resolve: Editar, Color, Efectos, Audio y Entregar
- **Edición**: línea de tiempo con varias pistas, ripple, roll, slip y slide, cortes J y L, clips compuestos, proxies y panel de historial
- **Color**: ruedas de color, curvas, HSL, LUT .cube y scopes
- **Audio**: mezclador, ecualizador, compresor, reducción de ruido y normalización de volumen en LUFS
- **Exportar** en MP4 por defecto, con aceleración por la tarjeta de video (NVENC o VA-API)
- **Generar clips**: convierte un video largo en clips para Shorts, Reels, TikTok, Kwai, LinkedIn, X y Stories, con la duración y el área segura que recomienda cada red, los mejores momentos elegidos por una IA local (Ollama) y el encuadre 9:16 siguiendo la cara
- **Subtítulos** sincronizados palabra por palabra con whisper.cpp, en tu propia computadora: nueve estilos pensados para la lectura (karaoke con el color recorriendo la frase, palabra resaltada, palabra por palabra, podcast, neón, alto contraste, dos personas hablando…) y exportación a SRT, VTT y ASS
- **Cut**: the quick page for assembling a video, with the whole timeline in miniature above the detailed one, smart trim and shortcuts to Generate cuts and Captions
