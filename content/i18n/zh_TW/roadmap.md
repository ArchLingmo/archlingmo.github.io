## 開發藍圖

這是我們接下來要打造的內容。已經完成的部分請見[功能](#recursos)。
日期僅為預估，可能會有所變動。建議與優先順序會在我們的
Discord 上討論，每個項目都會成為 GitHub 上公開的 pull request。

優先順序來自論壇與其他發行版評測中最常出現的問題：
擔心更新弄壞系統、驅動程式、不用終端機就能安裝程式，以及
不需要懂技術也能照顧好電腦。

### 28/09 – 08/11 · 輕鬆（且安全地）使用程式

- [x] **應用程式商店**：安裝前查看使用者評分與每個 App 的權限（整合 Flathub 與 Arch 軟體庫的商店已經推出）
- [x] 像 Mac 一樣**拖曳安裝**：按兩下 .exe、.deb、.rpm 或 AppImage，再拖到「**應用程式**」
- [x] **所有外來程式都在隔離箱中執行**：Windows 程式（Bottles）、.deb/.rpm 套件（Podman）與 AppImage 未經允許都無法看到你的系統或檔案
- [x] 設定中的**隔離箱**頁面：檢視、授予或移除對檔案、網路、相機與麥克風的存取權，並可刪除隔離箱
- [x] 透過 Waydroid 在隔離箱中執行 **Android App**（APK），像其他 App 一樣出現在啟動器中
- [x] **一鍵玩遊戲**：Steam、Proton 與遊戲模式，並針對反作弊系統無法在 Linux 上運作的遊戲提出警告
- [x] **原生遊戲**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). 從商店 → 原生遊戲安裝。首次啟動時，請提供從自己的卡匣擷取的 ROM；套件不包含遊戲資料。
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · 創作與分享

- [ ] **更聰明的 Lingmo Studio**：跟隨主體（不只是臉部）重新構圖、辨識每一段是誰在說話（語者分段），以及為每條音軌加上音訊效果
- [ ] **推出其餘的原生遊戲**：Zelda: Ocarina of Time (Ship of Harkinian) 與 Mario Kart 64 (SpaghettiKart)，目前在商店中顯示「即將推出」，待專案授權允許散布後就會推出
- [ ] 將設定、郵件與檔案管理員的側邊欄全部改用 **LingmoUI**，與其他 App 外觀一致
- [ ] 為 **Wayland 工作階段**鋪路：在 Wayland 上測試 Lingmo 的 App 與特效（完整的工作階段仍預計於 2027 年推出）

### 09/11 – 13/12 · 照顧你的電腦

- [ ] **系統監視器**（Ctrl + Shift + Esc）：在最佳化工具已顯示的處理器、記憶體與磁碟之外，再加上網路與顯示卡
- [ ] **系統資訊**，附「複製報告」按鈕，方便在 Discord 或論壇上求助
- [ ] 相機背景模糊與替換，並提供高品質去背（頭髮、耳機與肩膀）

### 14/12 – 31/01/2027 · 安心更新

- [ ] 每次更新前自動建立**還原點**（btrfs），並可直接從開機選單還原
- [ ] 在設定與更新程式中提供「**回到昨天**」按鈕
- [ ] 更新程式以淺顯易懂的語言顯示 Arch 新聞，並暫緩需要手動處理的更新
- [ ] **驅動程式管理員**：偵測顯示卡（NVIDIA、AMD、Intel）並安裝正確的驅動程式，隨核心保持更新

### 01/02 – 31/03/2027 · 日常硬體

- [ ] **印表機與掃描器**自動辨識，並提供簡單的新增畫面
- [ ] **藍牙耳機**：可在音樂品質與麥克風之間切換，通話結束後自動恢復高品質
- [ ] **電池**：充電上限 80% 以延長壽命、電源設定檔與電池健康度
- [ ] 所有應用程式都有清晰的分數縮放（125%、150%），可依螢幕分別設定

### 01/04 – 31/05/2027 · 整合與外觀

- [ ] 一鍵**切換版面配置**：macOS 風格、Windows 風格或 Lingmo
- [ ] 在檔案管理員中查看檔案的**先前版本**，就像 Time Machine
- [x] **手機整合**：與 Android 和 iPhone 同步通知、檔案與剪貼簿（KDE Connect）
- [ ] **雲端帳號**：Google Drive 與 OneDrive 直接出現在檔案管理員中
- [x] 從螢幕截圖中複製文字（OCR）
- [ ] 安裝程式在與 Windows 並存安裝時，會提醒 BitLocker 與 Secure Boot 相關事項

### 2027 年 6 月起

- [ ] AI 助理：在任何 App 中摘要、翻譯與解釋所選取的文字
- [ ] 家長監護：螢幕使用時間與就寢時間
- [ ] Wayland 工作階段
- [ ] 每個版本的 ISO 都會自動建置與測試
- [ ] 為有需要的人提供整合 Windows 的 Office 與 Adobe（WinBoat）
