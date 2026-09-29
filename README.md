# 教師節祝福 PWA

本專案是 Google Classroom「PWA APP」作業的示範成品。

## 專案內容
- `index.html`：PWA 主頁面
- `style.css`：介面樣式
- `app.js`：互動功能與 localStorage
- `manifest.json`：PWA 安裝資訊
- `sw.js`：Service Worker，提供離線快取
- `icons/`：PWA 圖示
- `screenshots/`：手機版展示截圖

## 如何測試
1. 將整個資料夾部署到 HTTPS 網站（例如 GitHub Pages）。
2. 用 Chrome/Safari 開啟網站。
3. Android Chrome 可使用「新增至主畫面／安裝應用程式」。
4. iPhone Safari 點「分享」→「加入主畫面」。
5. 回到手機主畫面點擊「教師節祝福」圖示。

注意：Service Worker 需要 HTTPS（localhost 開發環境除外）。
