# real-time-app

## SCSS

關於 SCSS 採用 vue-sass-loader 的方式撰寫，各個元件的通用變數、reset 放置在全域，其餘各個元素本身的樣式則放置在 component 內部。

## views、component 頁面區分方式

關於版面規劃，由於本專案路由具有巢狀、類似於 APP 的每頁跳轉模式，需要透過 SPA 加上路由模擬出多頁面、巢狀的 APP 狀態，故將每個頁面分別放置在 views 中，而進入到點名、問答、成績、課程資訊、私訊老師、公告中又各有不同元件需要切換（同個路由），故在 views 底下加入資料夾，方便辨識。