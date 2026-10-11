## Lộ trình

Những gì chúng tôi sẽ xây dựng tiếp theo. Những gì đã sẵn sàng có trong mục [Tính năng](#recursos).
Các mốc thời gian chỉ là dự kiến và có thể thay đổi. Góp ý và thứ tự ưu tiên được thảo luận trên
Discord của chúng tôi, và mỗi hạng mục đều trở thành một pull request công khai trên GitHub.

Thứ tự ưu tiên đến từ những vấn đề được nhắc đến nhiều nhất trên các diễn đàn và trong các bài đánh giá bản phân phối khác:
nỗi sợ bản cập nhật làm hỏng hệ thống, trình điều khiển, cài phần mềm không cần terminal và
chăm sóc máy tính mà không cần rành kỹ thuật.

### 28/09 – 08/11 · Phần mềm không rắc rối (và an toàn)

- [x] **Cửa hàng ứng dụng**: đánh giá của người dùng và quyền của từng ứng dụng trước khi cài (Cửa hàng với Flathub và kho phần mềm của Arch đã có sẵn)
- [x] **Kéo để cài đặt**, như trên Mac: nhấp đúp vào tệp .exe, .deb, .rpm hoặc AppImage và kéo vào **Ứng dụng**
- [x] **Mọi thứ từ bên ngoài đều chạy trong hộp cách ly**: chương trình Windows (Bottles), gói .deb/.rpm (Podman) và AppImage không thể thấy hệ thống hay tệp của bạn nếu chưa được phép
- [x] Trang **Hộp** trong Cài đặt: xem, cấp hoặc thu hồi quyền truy cập tệp, mạng, camera và micrô, và xóa một hộp
- [x] **Ứng dụng Android** (APK) trong hộp, với Waydroid, hiện trong trình khởi chạy như mọi ứng dụng khác
- [x] **Chơi game chỉ với một cú nhấp**: Steam, Proton và chế độ chơi game, kèm cảnh báo cho các game có hệ thống chống gian lận không chạy trên Linux
- [x] **Trò chơi gốc Linux**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Cài đặt từ Cửa hàng → Trò chơi gốc Linux. Khi mở lần đầu, cung cấp ROM từ băng trò chơi của bạn; các gói không chứa dữ liệu trò chơi.
- [ ] **Thêm trò chơi gốc Linux**: Zelda: Ocarina of Time (Ship of Harkinian) và Mario Kart 64 (SpaghettiKart), vẫn đang “Sắp ra mắt” trong cửa hàng

### 09/11 – 13/12 · Chăm sóc máy tính

- [ ] **Trình giám sát hệ thống** (Ctrl + Shift + Esc): mạng và card đồ họa, bên cạnh bộ xử lý, bộ nhớ và ổ đĩa mà Tối ưu hóa đã hiển thị
- [ ] **Thông tin hệ thống** với nút "Sao chép báo cáo" để nhờ trợ giúp trên Discord hoặc diễn đàn
- [ ] Làm mờ và thay nền camera với đường cắt chất lượng cao (tóc, tai nghe và vai)

### 14/12 – 31/01/2027 · Cập nhật không lo lắng

- [ ] **Điểm khôi phục tự động** trước mỗi lần cập nhật (btrfs), có thể quay lại ngay từ menu khởi động
- [ ] Nút **"Quay về hôm qua"** trong Cài đặt và trong trình cập nhật
- [ ] Trình cập nhật hiển thị tin tức của Arch bằng ngôn ngữ dễ hiểu và tạm giữ những bản cập nhật cần xử lý thủ công
- [ ] **Trình quản lý driver**: nhận diện card đồ họa (NVIDIA, AMD, Intel) và cài đúng driver, luôn giữ đồng bộ với kernel

### 01/02 – 31/03/2027 · Phần cứng hằng ngày

- [ ] **Máy in và máy quét** được tự động nhận diện, có màn hình đơn giản để thêm thiết bị
- [ ] **Tai nghe Bluetooth**: chọn giữa chất lượng âm nhạc và micro, tự trở lại chất lượng cao sau cuộc gọi
- [ ] **Pin**: giới hạn sạc 80% để pin bền hơn, cấu hình năng lượng và tình trạng pin
- [ ] Tỷ lệ hiển thị lẻ sắc nét (125%, 150%) trên mọi ứng dụng, theo từng màn hình

### 01/04 – 31/05/2027 · Tích hợp và giao diện

- [ ] **Đổi bố cục** chỉ với một cú nhấp: kiểu macOS, kiểu Windows hoặc Lingmo
- [ ] **Phiên bản trước** của tệp ngay trong trình quản lý tệp, giống Time Machine
- [ ] **Kết nối điện thoại**: thông báo, tệp và bộ nhớ tạm với Android và iPhone (KDE Connect)
- [ ] **Tài khoản đám mây**: Google Drive và OneDrive hiện trong trình quản lý tệp
- [ ] Sao chép chữ từ ảnh chụp màn hình (OCR)
- [ ] Trình cài đặt cảnh báo về BitLocker và Secure Boot khi cài song song với Windows

### Từ tháng 6 năm 2027

- [ ] Trợ lý AI: tóm tắt, dịch và giải thích đoạn văn bản được chọn trong mọi ứng dụng
- [ ] Kiểm soát của phụ huynh: thời gian sử dụng màn hình và giờ đi ngủ
- [ ] Phiên Wayland
- [ ] ISO được tạo và kiểm thử tự động cho mỗi phiên bản
- [ ] Office và Adobe với Windows tích hợp (WinBoat), cho ai cần đến
