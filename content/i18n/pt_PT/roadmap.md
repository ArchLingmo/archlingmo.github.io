## Roadmap

O que ainda vamos construir. O que já está pronto encontra-se em [Funcionalidades](#recursos).
As datas são uma previsão e podem mudar. As sugestões e prioridades são discutidas no nosso
Discord, e cada item transforma-se num pull request aberto no GitHub.

As prioridades vêm do que mais aparece nos fóruns e nas análises de outras distros:
o receio de que uma atualização estrague o sistema, os controladores, instalar programas sem terminal e
cuidar do computador sem ser preciso perceber de informática.

### 28/09 a 08/11 · Programas sem complicações (e seguros)

- [x] **Loja de aplicações**: classificações dos utilizadores e as permissões de cada aplicação antes de instalar (a Loja com o Flathub e os repositórios do Arch já está pronta)
- [x] **Instalar a arrastar**, como no Mac: duplo clique num .exe, .deb, .rpm ou AppImage e arraste para **Aplicações**
- [x] **Tudo o que vem de fora corre numa caixa isolada**: programas do Windows (Bottles), pacotes .deb/.rpm (Podman) e AppImages não veem o seu sistema nem os seus ficheiros sem permissão
- [x] Página **Caixas** nas Definições: ver, dar ou retirar acesso a ficheiros, rede, câmara e microfone, e apagar uma caixa
- [x] **Aplicações Android** (APK) numa caixa, com o Waydroid, a aparecer no lançador como qualquer outra aplicação
- [x] **Jogos com um clique**: Steam, Proton e modo de jogo, com aviso para jogos com anti-cheat que não funcionam no Linux
- [x] **Jogos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instale pela Loja → Jogos nativos. Na primeira abertura, forneça a ROM extraída do seu próprio cartucho; os pacotes não incluem dados dos jogos.
- [ ] **Mais jogos nativos**: Zelda: Ocarina of Time (Ship of Harkinian) e Mario Kart 64 (SpaghettiKart), ainda como "Em breve" na loja

### 09/11 a 13/12 · Cuidar do computador

- [ ] **Monitor do sistema** (Ctrl + Shift + Esc): rede e placa gráfica, além do processador, da memória e do disco que o Otimizador já mostra
- [ ] **Informações do sistema** com um botão "Copiar relatório" para pedir ajuda no Discord ou em fóruns
- [ ] Desfocagem e fundo da câmara com recorte de qualidade (cabelo, auscultadores e ombros)

### 14/12 a 31/01/2027 · Atualizar sem receio

- [ ] **Ponto de restauro automático** antes de cada atualização (btrfs), com opção de voltar atrás diretamente a partir do menu de arranque
- [ ] Botão **"Voltar a ontem"** nas Definições e no atualizador
- [ ] O atualizador mostra as notícias do Arch em linguagem simples e retém as atualizações que exigem intervenção manual
- [ ] **Gestor de controladores**: deteta a placa gráfica (NVIDIA, AMD, Intel) e instala o controlador certo, mantendo-o em dia com o kernel

### 01/02 a 31/03/2027 · Hardware do dia a dia

- [ ] **Impressoras e digitalizadores** reconhecidos automaticamente, com um ecrã simples para os adicionar
- [ ] **Auscultadores Bluetooth**: escolher entre qualidade de música e microfone, regressando à qualidade de música depois das chamadas
- [ ] **Bateria**: limite de carga nos 80% para durar mais, perfis de energia e estado da bateria
- [ ] Escala fracionária nítida (125%, 150%) em todas as aplicações, por monitor

### 01/04 a 31/05/2027 · Integração e aspeto

- [ ] **Mudar o esquema** com um clique: estilo macOS, estilo Windows ou Lingmo
- [ ] **Versões anteriores** dos ficheiros no gestor de ficheiros, como no Time Machine
- [ ] **Telemóvel integrado**: notificações, ficheiros e área de transferência com Android e iPhone (KDE Connect)
- [ ] **Contas na nuvem**: Google Drive e OneDrive a aparecer no gestor de ficheiros
- [ ] Copiar o texto de uma captura de ecrã (OCR)
- [ ] Instalador que avisa sobre BitLocker e Secure Boot ao instalar ao lado do Windows

### A partir de junho de 2027

- [ ] Assistente de IA: resumir, traduzir e explicar o texto selecionado em qualquer aplicação
- [ ] Controlo parental: tempo de utilização e hora de dormir
- [ ] Sessão Wayland
- [ ] ISO gerada e testada automaticamente em cada versão
- [ ] Office e Adobe com Windows integrado (WinBoat), para quem precisar
