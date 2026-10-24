---
title: ArchLingmo Silício (Si)
date: 2026-10-24
codename: silicon
element: Silício
symbol: Si
number: 14
color: "#2779FF"
version: 2026.11
status: upcoming
cover: screenshots/silicio/glass-desktop.jpg
summary: Vidro Lingmo e a Ilha, ícones próprios, o Lingmo Studio, celular e PC juntos, um teclado e um mouse para vários computadores. E o Assistente começa a ganhar fluxos, agentes e voz.
---

A próxima versão do ArchLingmo se chama **Silício**. Ela ainda está sendo preparada; este
post conta o que já está pronto nos repositórios e chega na próxima ISO.

## Por que Silício

> O **vidro** é feito de dióxido de silício (SiO₂), e o Silício é a versão do **Vidro
> Lingmo**. A **IA** que roda no seu computador roda em chips de silício. E o silício é o
> elemento da **eletrônica**, o que liga os aparelhos: nesta versão o celular, o PC e os
> outros computadores da mesa passam a trabalhar juntos.

Silício é o elemento de número atômico **14**. Os nomes não seguem a ordem da tabela: cada
versão leva o elemento que combina com o que ela traz.

## Wallpapers Silício

Dois novos fundos acompanham a versão: vidro transparente em azul-gelo no tema claro e
reflexos de safira no escuro. As curvas deixam espaço para os ícones e a barra de status.
Os arquivos vêm em 3840 × 2160 e aparecem em Configurações › Plano de fundo.

![Wallpaper Silício claro](assets/silicio-light.jpg)
![Wallpaper Silício escuro](assets/silicio-dark.jpg)

## Vidro Lingmo e a Ilha

Um material só para a casca inteira: barra de status, dock, Central de Controle,
notificações, lançador, Spotlight, menus e dicas ganham **vidro fosco** com borda fina,
brilho no topo e sombra suave. Em Configurações › Aparência você escolhe a intensidade:
**Forte, Equilibrado, Suave ou Desligado**.

![A área de trabalho com o Vidro Lingmo e uma notificação](screenshots/silicio/glass-desktop.jpg)

A **Ilha** mora no meio da barra de status e se abre quando algo está acontecendo: a
música que está tocando, um timer, a gravação da tela, uma cópia de arquivos ou um
download, sem tirar você do que está fazendo.

![A Ilha com um timer e uma cópia de arquivos](screenshots/silicio/island.jpg)

E com **Reduzir movimento** ligado, as animações ficam curtas, sem efeito de mola e sem a
luz que segue o ponteiro no vidro.

## Ícones Lingmo

Um tema de ícones próprio, com ícones fluidos em formato **squircle** gerados por código
sobre o WhiteSur. Os apps de terceiros ganham a mesma placa sozinhos, e as pastas, a
lixeira e os discos foram redesenhados.

## Alt+Tab Carrossel

A troca de janelas virou um **carrossel em 3D**, no estilo cover flow, com reflexo. É o
novo padrão.

![Alt+Tab Carrossel](screenshots/alt-tab-carousel.jpg)

## Lingmo Studio

Um editor de vídeo feito sobre o MLT, com páginas como as do **DaVinci Resolve**: Corte,
Editar, Cor, Efeitos, Áudio e Entregar.

- **Gerar cortes**: transforma um vídeo longo em cortes para **Shorts, Reels e TikTok**,
  com os melhores trechos escolhidos por uma IA local e o enquadramento 9:16 seguindo o rosto.
- **Legendas queimadas no vídeo**, sincronizadas palavra por palavra com a fala, em nove
  estilos feitos para a leitura.
- A transcrição usa o **whisper.cpp**, com o modelo escolhido conforme o seu hardware.

![Lingmo Studio gerando cortes para Shorts e Reels](screenshots/studio-cuts.jpg)

## Assistente: fluxos, agentes e voz (em andamento)

O Assistente continua rodando no seu computador, e está aprendendo a fazer mais:
**fluxos** de várias etapas, **agentes** que trabalham numa tarefa até o fim e **conversa
por voz**. Essa parte ainda está em desenvolvimento e pode chegar aos poucos.

## Celular ↔ PC

O app **Celular e dispositivos** junta o **KDE Connect** e o **LocalSend**: notificações,
mensagens, bateria e arquivos do celular no computador, com Android e iPhone. Arraste um
arquivo para a borda da tela e solte num **dispositivo próximo**.

![Enviar para um dispositivo próximo](screenshots/silicio/phone-send.jpg)

## Um teclado e um mouse para todos os computadores

Com o **Deskflow**, o cursor passa da borda da tela para o computador ao lado, com o mesmo
teclado e a mesma área de transferência. Você arrasta os computadores para ficarem como
estão na mesa, e a conexão é criptografada.

![Teclado e mouse compartilhados nas Configurações](screenshots/silicio/continuity.jpg)

## Por baixo do capô

- A **Lingmo Camera** (enquadramento automático, desfoque de fundo e login pelo rosto) agora
  vem **instalada por padrão**.
- O **KWin X11 continua vivo no Plasma 6.8**: o Arch deixou só o Wayland, então
  recompilamos o `kwin-x11` com as bibliotecas atuais do KDE e empacotamos o
  `kglobalacceld-x11`, para os atalhos do KWin (Alt+Tab, Alt+F4...) funcionarem no X11.
- **Sessão mais segura**: se a placa de vídeo falhar ao iniciar (por exemplo, depois de
  atualizar o driver sem reiniciar), a dock e a barra de status voltam sozinhas com
  **renderização por software**, em vez de a área de trabalho sumir.
- E mais: a fonte **Inter** como padrão, notificações com ações e resposta rápida, o app
  **Fotos**, o **Leitor de PDF** e uma nova captura de tela com OCR.

Quer testar antes? Use o [repositório do ArchLingmo](#download) e acompanhe no Discord.
