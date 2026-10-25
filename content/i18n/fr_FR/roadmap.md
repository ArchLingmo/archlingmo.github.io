## Feuille de route

Ce que nous allons encore construire. Ce qui est déjà prêt se trouve dans [Fonctionnalités](#recursos).
Les dates sont des prévisions et peuvent changer. Les suggestions et les priorités sont discutées sur notre
Discord, et chaque élément devient une pull request ouverte sur GitHub.

Les priorités viennent de ce qui revient le plus sur les forums et dans les tests d’autres distributions :
la peur qu’une mise à jour casse le système, les pilotes, installer des logiciels sans terminal et
entretenir son ordinateur sans être technicien.

### 28/09 – 08/11 · Des logiciels sans complication (et en sécurité)

- [x] **Logithèque** : notes des utilisateurs et permissions de chaque application avant l’installation (la Logithèque avec Flathub et les dépôts d’Arch est déjà là)
- [x] **Installer en glissant**, comme sur Mac : double-cliquez sur un .exe, .deb, .rpm ou AppImage et glissez-le vers **Applications**
- [x] **Tout ce qui vient de l’extérieur tourne dans une boîte isolée** : programmes Windows (Bottles), paquets .deb/.rpm (Podman) et AppImages ne voient ni votre système ni vos fichiers sans permission
- [x] Une page **Boîtes** dans les Paramètres : voir, accorder ou retirer l’accès aux fichiers, au réseau, à la caméra et au micro, et supprimer une boîte
- [x] **Applications Android** (APK) dans une boîte, avec Waydroid, qui apparaissent dans le lanceur comme n’importe quelle application
- [x] **Jeux en un clic** : Steam, Proton et mode jeu, avec un avertissement pour les jeux dont l’anti-triche ne fonctionne pas sous Linux
- [x] **Jeux natifs**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installez depuis Logithèque → Jeux natifs. Au premier lancement, fournissez la ROM de votre propre cartouche ; les paquets ne contiennent aucune donnée de jeu.
- [x] **Demander à propos de l’écran** (Meta + S) : entourez une zone pour l’expliquer, la traduire ou la résumer, avec l’IA de votre ordinateur
- [x] **Actions des applications** (Lingmo Intents) : les applications proposent des actions à l’Assistant, aux Flux et à Spotlight
- [x] **Assistant avec flux, agents et voix** (Meta + Maj + I)
- [x] **Un clavier et une souris pour plusieurs ordinateurs** (Deskflow), avec le presse-papiers partagé

### 09/11 – 13/12 · Créer et partager

- [ ] **Un Lingmo Studio plus malin** : recadrer en suivant le sujet principal (pas seulement le visage), savoir qui parle dans chaque passage (diarisation) et effets audio sur chaque piste
- [ ] **Publier les jeux natifs manquants** : Zelda: Ocarina of Time (Ship of Harkinian) et Mario Kart 64 (SpaghettiKart), aujourd’hui « Bientôt disponible » dans la Logithèque, dès que la licence des projets permettra de les distribuer
- [ ] Finir de passer à **LingmoUI** les barres latérales des Paramètres, de Mail et du gestionnaire de fichiers, avec le même look que les autres applications
- [ ] Préparer le terrain pour la **session Wayland** : tester les applications et les effets de Lingmo sous Wayland (la session complète reste prévue pour 2027)

### 09/11 – 13/12 · Entretenir son ordinateur

- [ ] **Moniteur système** (Ctrl + Shift + Esc) : réseau et carte graphique, en plus du processeur, de la mémoire et du disque que l’Optimiseur affiche déjà
- [ ] **Informations système** avec un bouton « Copier le rapport » pour demander de l’aide sur Discord ou sur les forums
- [ ] Flou et arrière-plan de la caméra avec un détourage de qualité (cheveux, casque et épaules)

### 14/12 – 31/01/2027 · Mettre à jour sans crainte

- [ ] **Point de restauration automatique** avant chaque mise à jour (btrfs), avec la possibilité de revenir en arrière directement depuis le menu de démarrage
- [ ] Bouton **« Revenir à hier »** dans les Paramètres et dans l’outil de mise à jour
- [ ] L’outil de mise à jour affiche les actualités d’Arch en langage simple et retient les mises à jour qui demandent une intervention manuelle
- [ ] **Gestionnaire de pilotes** : détecte la carte graphique (NVIDIA, AMD, Intel) et installe le bon pilote, en le gardant à jour avec le noyau

### 01/02 – 31/03/2027 · Le matériel du quotidien

- [ ] **Imprimantes et scanners** reconnus automatiquement, avec un écran simple pour les ajouter
- [ ] **Casques Bluetooth** : choisir entre la qualité audio et le micro, avec retour à la qualité après les appels
- [ ] **Batterie** : limite de charge à 80 % pour durer plus longtemps, profils d’énergie et santé de la batterie
- [ ] Mise à l’échelle fractionnaire nette (125 %, 150 %) dans toutes les applications, par écran

### 01/04 – 31/05/2027 · Intégration et apparence

- [ ] **Changer de disposition** en un clic : style macOS, style Windows ou Lingmo
- [ ] **Versions précédentes** des fichiers dans le gestionnaire de fichiers, comme avec Time Machine
- [x] **Téléphone intégré** : notifications, fichiers et presse-papiers avec Android et iPhone (KDE Connect)
- [ ] **Comptes cloud** : Google Drive et OneDrive dans le gestionnaire de fichiers
- [x] Copier le texte d’une capture d’écran (OCR)
- [ ] Installateur qui prévient au sujet de BitLocker et de Secure Boot lors d’une installation à côté de Windows

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### À partir de juin 2027

- [ ] Assistant IA : résumer, traduire et expliquer le texte sélectionné dans n’importe quelle application
- [ ] Contrôle parental : temps d’écran et heure du coucher
- [ ] Session Wayland
- [ ] ISO générée et testée automatiquement à chaque version
- [ ] Office et Adobe avec Windows intégré (WinBoat), pour ceux qui en ont besoin
