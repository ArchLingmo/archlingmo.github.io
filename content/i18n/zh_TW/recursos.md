## 功能

以下功能現在都已內建於 ArchLingmo。

### 桌面

- **頂端列**：時鐘、點選日期即可開啟的行事曆，以及系統匣圖示
- **控制中心**：Wi-Fi、藍牙、深色模式、夜燈、勿擾模式與音量，全都在同一個面板
- **Dock**：滑鼠移過即可預覽視窗，背景可選**實色、毛玻璃或無背景**
- **Spotlight**（Super + 空白鍵）：搜尋 App、檔案、計算、單位與匯率換算，還能搜尋文件內容
- **剪貼簿歷史記錄**（Super + V）
- **熱點角落**：把滑鼠移到角落，即可檢視所有視窗、顯示桌面或鎖定螢幕
- **特效**：果凍視窗、神燈效果，以及書頁翻動式的 Alt+Tab
- GTK App 也支援全域選單
- 桌面上的**時鐘與天氣小工具**，顯示你所選城市的真實天氣預報，並在頂端列中收在同一個圖示下
- **「輪播」Alt+Tab**：以帶倒影的 3D 輪播切換視窗，類似 Cover Flow 風格
- **Lingmo 圖示**：自家的圖示主題，以 WhiteSur 為基礎產生的流暢 squircle（超橢圓）圖示。第三方 App 的圖示也會自動套上相同的底板
- **Dock 放大效果**：滑鼠移過時圖示最多放大到 200%，**頂端列**也提供多種預設高度可選

### 人工智慧（就在你的電腦上）

- **助理**（Super + I）：透過 Ollama 在你電腦上執行的 AI。它能讀取你的文件（PDF、DOCX…）、筆記與行事曆，檢視系統資訊，並在隔離箱中執行唯讀的終端機指令。經你同意後，它可以建立筆記、活動、待辦事項與檔案：每項變更都需要確認，而且它絕不刪除任何東西
- **Spotlight 中的 AI**：以 "ai:" 開頭即可聊天，或輸入以 "?" 結尾的問題並選擇詢問 AI。會顯示每個回答花了多少時間與速度，並與助理使用相同的工具
- **設定 › 人工智慧**：Ollama 狀態、已安裝的模型、針對*這台*電腦的推薦、附進度顯示的模型下載、「回答前先思考」選項，以及助理的權限與工具
- **自動化工具**：在指定時間執行的每日例行工作，執行一個指令，也可以讓本機 AI 解釋結果
- **語音轉文字與字幕**位於設定 › 人工智慧：whisper.cpp 模型附有標籤與「推薦給你的電腦」標章，旁邊是針對你的硬體推薦的 AI 模型（llmfit）
- **Assistant flows**: build automations from blocks, a trigger (a time, a new e-mail, a voice command or a shortcut) plus app actions, follow every run step by step and approve once what the flow may do
- **Agents and voice**: assistants with their own instructions, model and tools, called in the chat, in a flow or from Spotlight ("ai:@name"). And talk to the Assistant by voice with Meta + Shift + I
- **Ask about the screen** (Meta + S): circle or select any area of the screen to explain, translate, summarize, copy its text or search the web. It is analyzed on your computer and nothing is sent
- **App actions** (Lingmo Intents): Clock, Mail, Notes, Files, Screenshots and other apps offer actions to the Assistant, Flows and Spotlight: type what you want, such as an alarm at 7, and confirm. In Settings › Artificial Intelligence you can turn off an app or a single action, and sending or changing anything always asks first

### 設定

- 首次登入的**歡迎畫面**：淺色或深色主題、強調色、桌布與特效
- **顯示器**：拖曳排列、旋轉畫面並選擇主顯示器
- **夜燈**可自動排程，並可從頂端列切換鍵盤配置
- **快捷鍵**與**開機啟動**頁面，自訂隨系統啟動的項目
- **免終端機更新**：頂端列會顯示通知，按下「更新」按鈕即可
- 提供 **48 種語言**
- **Folders that follow your language**: when you switch language, your personal folders (Documents, Videos, Pictures…) get the new names; folders that exist in two languages are merged without deleting anything, and you can undo it

### 相機與安全性

- 會議時的**相機自動取景**，適用任何 App（Meet、Zoom、Teams、Discord）
- **指紋辨識器**：用於登入、解鎖與授權管理員密碼
- **臉部辨識**：透過網路攝影機登入與解鎖（辨識失敗時會要求輸入密碼）

### 應用程式

- **郵件**：支援 IMAP 與 POP3 帳號，自動偵測服務供應商並提供各家的設定指南（Gmail、Yahoo 與 iCloud 的應用程式密碼）。資料夾顯示未讀數量，支援搜尋與篩選，可一次為多封郵件加星號、封存、移動與刪除，另有自動規則、聯絡人自動完成與新郵件通知
- 郵件中的**行事曆與待辦事項**：月、週、日與議程檢視，重複活動，即使 App 已關閉也會提醒，並支援 CalDAV 同步（iCloud、Yahoo、Fastmail、Nextcloud）。今天、即將到來與已逾期的待辦事項，以及可選擇接受、也許或拒絕的會議邀請（.ics）
- Notion 風格的**筆記**：區塊編輯器、"/" 選單、子頁面、圖示、我的最愛、垃圾桶與快速搜尋（Ctrl + K）
- **最佳化工具**：點選 CPU、記憶體或儲存空間即可查看詳細資訊：逐一資料夾查看磁碟空間用到哪裡並附建議，以及最占記憶體與處理器的 App。「最佳化並清理」按鈕會清除快取、更新快取、舊記錄檔與未使用的 Flatpak 執行環境
- **檔案管理員**：支援拖放，排序方式與 Thunar 相同
- **終端機**（深色模式使用 Dracula 主題，並可在新的偏好設定中選擇 shell：bash、zsh、fish…）、**文字編輯器**、**計算機**與**影片播放器**
- **時鐘與鬧鐘**、將 ISO 寫入 USB 隨身碟的 **USB Media Creator**、**Windows 程式**（開啟 .exe 即可在商店中查看 Linux 版本或替代方案，或透過 Bottles/Wine 試用），以及將 Flathub 與 Arch 軟體庫集中在一處的**應用程式商店**
- 所有 App 都採用一致的 Lingmo 外觀，提供淺色與深色主題
- **螢幕截圖與錄影**，可同時收錄麥克風與系統音訊
- **Calamares** 安裝程式，音訊由 **PipeWire** 處理
- **原生遊戲**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). 從商店 → 原生遊戲安裝。首次啟動時，請提供從自己的卡匣擷取的 ROM；套件不包含遊戲資料。
- **螢幕截圖**（Print、Shift + Print 與 Ctrl + Print）：Flameshot 做得到的一切（標註工具、釘選在螢幕上、複製、儲存與命令列）全都有，還有更多：在本機進行 OCR 的「複製文字」、一鍵遮蔽敏感資料、智慧選取、捲動截圖、簡報模式、可編輯的歷史記錄與 GIF 錄製
- **照片**：以圖庫、我的最愛與資料夾瀏覽你的圖片，縮圖與檔案管理員相同
- **PDF 閱讀器**：頁面縮圖、目錄、註解與符合寬度
- **檔案管理員的欄狀檢視**（Ctrl + 3），以及符合 freedesktop 標準、與照片共用的縮圖

### 影片：Lingmo Studio

- **Lingmo Studio**：以 MLT 打造的影片編輯器，頁面就像 DaVinci Resolve：剪輯、調色、特效、音訊與交付
- **剪輯**：多軌時間軸，ripple、roll、slip 與 slide 編輯，J 型與 L 型剪接，複合片段、代理檔與歷史記錄面板
- **調色**：色輪、曲線、HSL、.cube LUT 與示波器
- **音訊**：混音器、等化器、壓縮器、降噪，以及以 LUFS 為準的音量標準化
- **匯出**預設為 MP4，並以顯示卡加速（NVENC 或 VA-API）
- **產生短片**：把長影片剪成適用於 Shorts、Reels、TikTok、Kwai、LinkedIn、X 與 Stories 的短片，採用各平台建議的長度與安全區域，由本機 AI（Ollama）挑出最精彩的片段，並跟隨臉部重新構圖為 9:16
- **字幕**透過 whisper.cpp 在你自己的電腦上逐字同步：九種為閱讀設計的樣式（顏色掃過整句的卡拉 OK、強調單字、逐字顯示、Podcast、霓虹、高對比、兩人對話…），並可匯出為 SRT、VTT 與 ASS
- **Cut**: the quick page for assembling a video, with the whole timeline in miniature above the detailed one, smart trim and shortcuts to Generate cuts and Captions
