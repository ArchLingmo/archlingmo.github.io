## Fonctionnalités

Tout ceci est déjà inclus dans ArchLingmo aujourd’hui.

### Bureau

- **Barre supérieure** avec horloge, calendrier au clic sur la date et icônes de la zone de notification
- **Centre de contrôle** : Wi-Fi, Bluetooth, mode sombre, éclairage nocturne, ne pas déranger et volume dans un seul panneau
- **Dock** avec aperçu des fenêtres au survol et un fond **opaque, en verre ou sans fond**
- **Spotlight** (Super + Espace) : applications, fichiers, calculs, conversion d’unités et de devises, et recherche dans le contenu des documents
- **Historique du presse-papiers** (Super + V)
- **Coins actifs** : amenez la souris dans un coin pour voir toutes les fenêtres, afficher le bureau ou verrouiller l’écran
- **Effets** : fenêtres en gelée, lampe magique et Alt+Tab en pages de livre
- Menu global aussi pour les applications GTK
- **Widgets horloge et météo** sur le bureau, avec les vraies prévisions de la ville de votre choix, regroupés sous une seule icône dans la barre supérieure
- **Alt+Tab « Carrousel »** : passez d’une fenêtre à l’autre dans un carrousel en 3D, façon cover flow, avec reflet
- **Icônes Lingmo** : un thème d’icônes maison, aux icônes fluides en forme de squircle, générées à partir de WhiteSur. Les icônes des applications tierces reçoivent automatiquement la même plaque
- **Dock avec agrandissement** des icônes jusqu’à 200 % au survol et **barre d’état** avec des hauteurs prêtes à choisir

### Intelligence artificielle (sur votre ordinateur)

- **Assistant** (Super + I) : une IA qui tourne sur votre ordinateur, avec Ollama. Elle lit vos documents (PDF, DOCX…), vos notes et votre agenda, consulte les informations système et exécute des commandes de terminal en lecture seule dans une boîte isolée. Avec votre permission, elle crée des notes, des événements, des tâches et des fichiers : chaque modification demande une confirmation, et elle ne supprime jamais rien
- **IA dans Spotlight** : commencez par "ai:" pour discuter, ou tapez une question qui se termine par "?" et choisissez de la poser à l’IA. Elle indique le temps et la vitesse de chaque réponse, et utilise les mêmes outils que l’Assistant
- **Paramètres › Intelligence artificielle** : état d’Ollama, modèles installés, recommandations pour *cet* ordinateur, téléchargement des modèles avec progression, option « Réfléchir avant de répondre », et permissions et outils de l’Assistant
- **Automator** : routines quotidiennes à heure fixe, avec une commande et, si vous le souhaitez, l’IA locale qui explique le résultat
- **Transcription et sous-titres** dans Paramètres › Intelligence artificielle : modèles whisper.cpp avec étiquettes et le badge « Recommandé pour votre ordinateur », à côté des modèles d’IA recommandés pour votre matériel (llmfit)

### Paramètres

- **Accueil** à la première connexion : thème clair ou sombre, couleur d’accentuation, fond d’écran et effets
- **Écrans** : glissez-les pour les disposer, faites-les pivoter et choisissez l’écran principal
- **Éclairage nocturne** avec horaire automatique, et changement de disposition du clavier depuis la barre
- Pages **Raccourcis** et **Démarrage** pour choisir ce qui s’ouvre avec le système
- **Mises à jour sans terminal** : notification dans la barre et bouton « Mettre à jour »
- Disponible en **48 langues**

### Caméra et sécurité

- **Cadrage automatique** de la caméra en réunion, dans n’importe quelle application (Meet, Zoom, Teams, Discord)
- **Lecteur d’empreintes** pour se connecter, déverrouiller et autoriser les mots de passe administrateur
- **Reconnaissance faciale** par webcam pour se connecter et déverrouiller (en cas d’échec, le mot de passe est demandé)

### Applications

- **Mail** : comptes IMAP et POP3 avec détection automatique du fournisseur et un guide pour chacun (mots de passe d’application pour Gmail, Yahoo et iCloud). Dossiers avec nombre de non-lus, recherche et filtres, favoris, archivage, déplacement et suppression de plusieurs messages à la fois, règles automatiques, contacts avec saisie automatique et notifications de nouveaux messages
- **Agenda et tâches** dans Mail : vues mois, semaine, jour et planning, événements récurrents, rappels même quand l’application est fermée, et synchronisation CalDAV (iCloud, Yahoo, Fastmail, Nextcloud). Tâches du jour, à venir et en retard, et invitations à des réunions (.ics) avec Accepter, Peut-être ou Refuser
- **Notes** à la façon de Notion : éditeur par blocs, menu "/", sous-pages, icônes, favoris, corbeille et recherche rapide (Ctrl + K)
- **Optimiseur** : cliquez sur Processeur, Mémoire ou Stockage pour voir le détail : où est passé l’espace disque, dossier par dossier, avec des suggestions, et les applications qui consomment le plus de mémoire et de processeur. Le bouton « Optimiser et nettoyer » vide les caches, le cache des mises à jour, les anciens journaux et les runtimes Flatpak inutilisés
- Gestionnaire de **fichiers** avec glisser-déposer et tri comme dans Thunar
- **Terminal** avec le thème Dracula en mode sombre et choix du shell (bash, zsh, fish…) dans les nouvelles préférences, **éditeur de texte**, **calculatrice** et **lecteur vidéo**
- **Horloge et alarmes**, un **Créateur de support USB** pour écrire une ISO sur une clé USB, **Programmes Windows** (ouvrez un .exe et voyez la version Linux ou une alternative dans la Logithèque, ou essayez-le avec Bottles/Wine) et la **Logithèque** avec Flathub et les dépôts d’Arch au même endroit
- Toutes les applications partagent le même look Lingmo, en thème clair et sombre
- **Captures et enregistrement d’écran**, avec micro et son du système
- Installateur **Calamares** et son via **PipeWire**
- **Jeux natifs**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installez depuis Logithèque → Jeux natifs. Au premier lancement, fournissez la ROM de votre propre cartouche ; les paquets ne contiennent aucune donnée de jeu.
- **Capture d’écran** (Print, Shift + Print et Ctrl + Print) : tout ce que fait Flameshot (outils d’annotation, épingler à l’écran, copier, enregistrer et ligne de commande) et plus encore : « Copier le texte » avec OCR sur l’ordinateur, masquage des données en un clic, sélection intelligente, capture défilante, mode présentation, historique modifiable et enregistrement en GIF
- **Photos** : vos images en photothèque, favoris et dossiers, avec les mêmes miniatures que le gestionnaire de fichiers
- **Lecteur PDF** : miniatures des pages, table des matières, notes et ajustement à la largeur
- **Vue en colonnes dans Fichiers** (Ctrl + 3) et miniatures au standard freedesktop, partagées avec Photos

### Vidéo : Lingmo Studio

- **Lingmo Studio** : un éditeur vidéo basé sur MLT, avec des pages comme celles de DaVinci Resolve : Montage, Couleur, Effets, Audio et Livraison
- **Montage** : timeline multipiste, ripple, roll, slip et slide, coupes J et L, clips composés, proxys et panneau d’historique
- **Couleur** : roues chromatiques, courbes, HSL, LUT .cube et scopes
- **Audio** : mixeur, égaliseur, compresseur, réduction du bruit et normalisation du volume en LUFS
- **Export** en MP4 par défaut, accéléré par la carte graphique (NVENC ou VA-API)
- **Générer des extraits** : transforme une longue vidéo en extraits pour Shorts, Reels, TikTok, Kwai, LinkedIn, X et Stories, avec la durée et la zone sûre recommandées par chaque réseau, les meilleurs passages choisis par une IA locale (Ollama) et un recadrage 9:16 qui suit le visage
- **Sous-titres** synchronisés mot à mot avec whisper.cpp, sur votre propre ordinateur : neuf styles pensés pour la lecture (karaoké avec la couleur qui balaie la phrase, mot mis en évidence, mot à mot, podcast, néon, contraste élevé, deux personnes qui parlent…) et export en SRT, VTT et ASS
