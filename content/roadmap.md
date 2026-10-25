## Roadmap

O que ainda vamos construir. O que já está pronto fica em [Recursos](#recursos).
As datas são uma previsão e podem mudar. Sugestões e prioridades são discutidas no nosso
Discord, e cada item vira um pull request aberto no GitHub.

As prioridades vêm do que mais aparece nos fóruns e nas análises de outras distros:
medo de uma atualização quebrar o sistema, drivers, instalar programas sem terminal e
cuidar do computador sem precisar ser técnico.

### 28/09 a 08/11 · Programas sem complicação (e seguros)

- [x] **Loja de aplicativos**: notas dos usuários e as permissões de cada app antes de instalar (a Loja com o Flathub e os repositórios do Arch já está pronta)
- [x] **Instalar arrastando**, como no Mac: dois cliques num .exe, .deb, .rpm ou AppImage e arraste para **Aplicativos**
- [x] **Tudo de fora roda numa caixa isolada**: programas do Windows (Bottles), pacotes .deb/.rpm (Podman) e AppImages não enxergam o seu sistema nem os seus arquivos sem permissão
- [x] Página **Caixas** nas Configurações: ver, dar ou tirar acesso a arquivos, rede, câmera e microfone, e apagar uma caixa
- [x] **Apps Android** (APK) numa caixa, com o Waydroid, aparecendo no lançador como qualquer app
- [x] **Jogos em um clique**: Steam, Proton e modo jogo, com aviso para jogos com anti-cheat que não funcionam no Linux
- [x] **Jogos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instale pela Loja → Jogos nativos. Na primeira abertura, forneça a ROM extraída do seu próprio cartucho; os pacotes não incluem dados dos jogos.
- [x] **Perguntar sobre a tela** (Meta + S): circule uma área para explicar, traduzir ou resumir, com a IA no seu computador
- [x] **Ações dos apps** (Lingmo Intents): os apps oferecem ações ao Assistente, aos Fluxos e ao Spotlight
- [x] **Assistente com fluxos, agentes e voz** (Meta + Shift + I)
- [x] **Um teclado e um mouse para vários computadores** (Deskflow), com a área de transferência compartilhada

### 09/11 a 13/12 · Criar e compartilhar

- [ ] **Lingmo Studio mais esperto**: reenquadrar seguindo o assunto principal (não só o rosto), saber quem está falando em cada trecho (diarização) e efeitos de áudio em cada trilha
- [ ] **Publicar os jogos nativos que faltam**: Zelda: Ocarina of Time (Ship of Harkinian) e Mario Kart 64 (SpaghettiKart), hoje "Em breve" na Loja, assim que a licença dos projetos permitir distribuí-los
- [ ] Terminar de passar para o **LingmoUI** as barras laterais das Configurações, do E-mail e do gerenciador de arquivos, com o mesmo visual dos outros apps
- [ ] Preparar o caminho para a **sessão Wayland**: testar os apps e os efeitos do Lingmo no Wayland (a sessão completa continua prevista para 2027)

### 09/11 a 13/12 · Cuidar do computador

- [ ] **Monitor do sistema** (Ctrl + Shift + Esc): rede e placa de vídeo, além do processador, da memória e do disco que o Otimizador já mostra
- [ ] **Informações do sistema** com um botão "Copiar relatório" para pedir ajuda no Discord ou em fóruns
- [ ] Desfoque e fundo da câmera com recorte de qualidade (cabelo, fone e ombros)

### 14/12 a 31/01/2027 · Atualizar sem medo

- [ ] **Ponto de restauração automático** antes de cada atualização (btrfs), com opção de voltar direto pelo menu de inicialização
- [ ] Botão **"Voltar para ontem"** nas Configurações e no atualizador
- [ ] O atualizador mostra as notícias do Arch em português simples e segura atualizações que pedem cuidado manual
- [ ] **Gerenciador de drivers**: detecta a placa de vídeo (NVIDIA, AMD, Intel) e instala o driver certo, mantendo-o em dia com o kernel

### 01/02 a 31/03/2027 · Hardware do dia a dia

- [ ] **Impressoras e scanners** reconhecidos sozinhos, com uma tela simples para adicionar
- [ ] **Fones Bluetooth**: escolher entre qualidade de música e microfone, voltando à qualidade depois das chamadas
- [ ] **Bateria**: limite de carga em 80% para durar mais, perfis de energia e saúde da bateria
- [ ] Escala fracionada nítida (125%, 150%) em todos os apps, por monitor

### 01/04 a 31/05/2027 · Integração e visual

- [ ] **Trocar o layout** com um clique: estilo macOS, estilo Windows ou Lingmo
- [ ] **Versões anteriores** dos arquivos no gerenciador de arquivos, como no Time Machine
- [x] **Celular integrado**: notificações, arquivos e área de transferência com Android e iPhone (KDE Connect)
- [ ] **Contas na nuvem**: Google Drive e OneDrive aparecendo no gerenciador de arquivos
- [x] Copiar o texto de uma captura de tela (OCR)
- [ ] Instalador que avisa sobre BitLocker e Secure Boot ao instalar ao lado do Windows

### 01/02 a 31/05/2027 · Aprender com o Lingmo

- [ ] **Lingmo Tutor para crianças**: a criança pergunta falando, escrevendo, com foto do caderno ou PDF da lição, e o Tutor explica no idioma do sistema, no nível da idade, com voz clara e o texto destacado
- [ ] **Ensinar sem entregar a resposta**: dicas e perguntas que levam a criança a pensar, exercícios parecidos para praticar e contas conferidas antes de mostrar
- [ ] **Ler em voz alta com ajuda**: a criança lê um texto e o Tutor ajuda na pronúncia e na fluência
- [ ] **Modo dos pais**: idade e matérias, tempo de uso, histórico só no computador e filtro de assuntos sempre ligado; nada vai para a internet

### A partir de junho de 2027

- [ ] Assistente de IA: resumir, traduzir e explicar o texto selecionado em qualquer app
- [ ] Controle parental: tempo de uso e horário de dormir
- [ ] Sessão Wayland
- [ ] ISO gerada e testada automaticamente a cada versão
- [ ] Office e Adobe com Windows integrado (WinBoat), para quem precisar
