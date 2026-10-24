## 功能

以下一切，今天的 ArchLingmo 已經具備。

### 桌面

- **頂部列**：時鐘、按日期即彈出的月曆，以及系統匣圖示
- **控制中心**：Wi-Fi、藍牙、深色模式、夜間模式、請勿打擾及音量，全部集中在一個面板
- **Dock**：滑鼠移到上面即可預覽視窗，背景可選**實色、磨砂玻璃或無背景**
- **Spotlight**（Super + Space）：應用程式、檔案、計數、單位及貨幣換算，並可搜尋文件內容
- **剪貼簿記錄**（Super + V）
- **熱點角落**：把滑鼠移到角落，即可查看所有視窗、顯示桌面或鎖定螢幕
- **特效**：果凍視窗、神燈效果及翻書頁式 Alt+Tab
- GTK 應用程式同樣支援全域選單
- 桌面上的**時鐘及天氣小工具**，顯示你所選城市的真實天氣預報，並在頂部列歸入同一個圖示
- **「輪播」Alt+Tab**：以帶倒影的 3D 輪播切換視窗，類似 Cover Flow 風格
- **Lingmo 圖示**：自家圖示主題，以 WhiteSur 為基礎生成的流暢 squircle（超橢圓）圖示。第三方應用程式的圖示亦會自動套上相同的底板
- **Dock 放大效果**：滑鼠移到上面時圖示最多放大至 200%，**頂部列**亦有多款預設高度可選

### 人工智能（就在你的電腦上）

- **助理**（Super + I）：透過 Ollama 在你電腦上運行的 AI。它會閱讀你的文件（PDF、DOCX⋯⋯）、筆記及月曆，查看系統資料，並在隔離箱內執行唯讀的終端機指令。得到你的許可後，它可以建立筆記、活動、待辦事項及檔案：每項更改都要先確認，而且它從不刪除任何東西
- **Spotlight 內的 AI**：以 "ai:" 開頭即可傾偈，或輸入以 "?" 結尾的問題並選擇問 AI。會顯示每個回答所花的時間和速度，並與助理使用相同的工具
- **設定 › 人工智能**：Ollama 狀態、已安裝的模型、針對*這部*電腦的建議、附進度顯示的模型下載、「回答前先思考」選項，以及助理的權限和工具
- **自動化工具**：在指定時間執行的每日例行工作，執行一個指令，亦可讓本機 AI 解釋結果
- **語音轉錄及字幕**位於設定 › 人工智能：whisper.cpp 模型附有標籤及「建議用於你的電腦」標記，旁邊是針對你的硬件建議的 AI 模型（llmfit）
- **Assistant flows**: build automations from blocks, a trigger (a time, a new e-mail, a voice command or a shortcut) plus app actions, follow every run step by step and approve once what the flow may do
- **Agents and voice**: assistants with their own instructions, model and tools, called in the chat, in a flow or from Spotlight ("ai:@name"). And talk to the Assistant by voice with Meta + Shift + I
- **Ask about the screen** (Meta + S): circle or select any area of the screen to explain, translate, summarize, copy its text or search the web. It is analyzed on your computer and nothing is sent
- **App actions** (Lingmo Intents): Clock, Mail, Notes, Files, Screenshots and other apps offer actions to the Assistant, Flows and Spotlight: type what you want, such as an alarm at 7, and confirm. In Settings › Artificial Intelligence you can turn off an app or a single action, and sending or changing anything always asks first

### 設定

- 首次登入時的**歡迎畫面**：淺色或深色主題、強調色、桌面背景及特效
- **顯示器**：拖曳排列、旋轉並選擇主顯示器
- **夜間模式**可自動按時間開關，並可在頂部列切換鍵盤配置
- **快捷鍵**及**開機啟動**頁面，自選開機時要開啟的程式
- **毋須終端機即可更新**：頂部列會有提示，並附「更新」按鈕
- 提供 **48 種語言**
- **Folders that follow your language**: when you switch language, your personal folders (Documents, Videos, Pictures…) get the new names; folders that exist in two languages are merged without deleting anything, and you can undo it

### 相機與安全

- 開會時相機**自動取景**，適用於任何應用程式（Meet、Zoom、Teams、Discord）
- **指紋辨識器**可用於登入、解鎖及授權管理員密碼
- 透過網絡攝影機進行**人臉辨識**以登入及解鎖（失敗時會要求輸入密碼）

### 應用程式

- **郵件**：支援 IMAP 及 POP3 帳戶，自動偵測供應商並為每家提供設定指引（Gmail、Yahoo 及 iCloud 的應用程式密碼）。資料夾顯示未讀數目，支援搜尋及篩選，可一次過為多封郵件加星號、封存、移動及刪除，另有自動規則、聯絡人自動完成及新郵件通知
- 郵件內的**月曆及待辦事項**：月、週、日及議程檢視，重複活動，即使已關閉程式亦會提醒，並支援 CalDAV 同步（iCloud、Yahoo、Fastmail、Nextcloud）。今日、即將到來及已逾期的待辦事項，以及可選擇接受、或許或拒絕的會議邀請（.ics）
- Notion 風格的**筆記**：區塊編輯器、"/" 選單、子頁面、圖示、我的最愛、垃圾桶及快速搜尋（Ctrl + K）
- **優化工具**：按 CPU、記憶體或儲存空間即可查看詳情：逐個資料夾看看磁碟空間用在哪裏，並附建議，以及最佔記憶體和處理器的應用程式。「優化及清理」按鈕會清除快取、更新快取、舊記錄檔及未使用的 Flatpak 運行環境
- **檔案管理員**支援拖放，排序方式與 Thunar 相同
- 深色模式下採用 Dracula 主題、並可在新的偏好設定中選擇 shell（bash、zsh、fish⋯⋯）的**終端機**，以及**文字編輯器**、**計數機**及**影片播放器**
- **時鐘及鬧鐘**、把 ISO 寫入 USB 手指的 **USB Media Creator**、**Windows 程式**（開啟 .exe 即可在商店查看 Linux 版本或替代方案，或透過 Bottles/Wine 試用），以及將 Flathub 及 Arch 軟件庫集中一處的**應用程式商店**
- 所有應用程式都採用一致的 Lingmo 外觀，提供淺色及深色主題
- **螢幕截圖及螢幕錄影**，可同時錄取咪高峰及系統聲音
- **Calamares** 安裝程式，並以 **PipeWire** 處理聲音
- **原生遊戲**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). 從商店 → 原生遊戲安裝。首次啟動時，請提供從自己的卡帶擷取的 ROM；套件不包含遊戲資料。
- **螢幕截圖**（Print、Shift + Print 及 Ctrl + Print）：Flameshot 做到的一切（標註工具、釘在螢幕上、複製、儲存及指令行）全部都有，而且更多：在本機進行 OCR 的「複製文字」、一按遮蓋敏感資料、智能選取、捲動截圖、簡報模式、可編輯的記錄及 GIF 錄影
- **相片**：以相片庫、我的最愛及資料夾瀏覽你的圖片，縮圖與檔案管理員相同
- **PDF 閱讀器**：頁面縮圖、目錄、筆記及符合寬度
- **檔案管理員的分欄檢視**（Ctrl + 3），以及符合 freedesktop 標準、與相片共用的縮圖

### 影片：Lingmo Studio

- **Lingmo Studio**：以 MLT 打造的影片編輯器，頁面設計與 DaVinci Resolve 相似：剪接、調色、特效、音訊及交付
- **剪接**：多軌時間線，ripple、roll、slip 及 slide 編輯，J 型及 L 型剪接，複合片段、代理檔案及記錄面板
- **調色**：色輪、曲線、HSL、.cube LUT 及示波器
- **音訊**：混音器、等化器、壓縮器、降噪，以及以 LUFS 為準的音量標準化
- **匯出**預設為 MP4，並以顯示卡加速（NVENC 或 VA-API）
- **生成短片**：把長片剪成適合 Shorts、Reels、TikTok、Kwai、LinkedIn、X 及 Stories 的短片，按各平台建議的長度及安全區域處理，由本機 AI（Ollama）揀選最精彩的片段，並跟隨面部重新構圖為 9:16
- **字幕**透過 whisper.cpp 在你自己的電腦上逐字同步：九款為閱讀而設計的樣式（顏色掃過整句的卡拉 OK、突出單字、逐字顯示、Podcast、霓虹、高對比、兩人對話⋯⋯），並可匯出為 SRT、VTT 及 ASS
- **Cut**: the quick page for assembling a video, with the whole timeline in miniature above the detailed one, smart trim and shortcuts to Generate cuts and Captions
