# Crypto Vitest

Vitest & Chart.js 練習專案

## 框架及套件

### 核心框架

- **Vue 3** (v3.5.13)
- **TypeScript** (v5.8.3)
- **Vite** (v6.3.5)
- **Vitest** (v3.2.4)

### UI 框架

- **Quasar Framework** (v2.18.1)
- **TailwindCSS** (v4.1.10)

### 狀態管理

- **Pinia** (v3.0.3)

### 路由管理

- **Vue Router** (v4.5.1)

### HTTP 工具

- **Axios** (v1.10.0)

### 表單驗證工具

- **Vee-validate** (v4.15.1)
- **Yup** (v1.6.1)

### 圖表工具

- **Chart.js** (v4.5.0)

### 開發工具

- **ESLint** (v9.29.0)
- **Prettier** (v3.6.1)
- **Husky** (v9.1.7)
- **VConsole** (v3.15.1)

## 🛠️ 開發命令

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 建構生產版本
npm run build

# 預覽生產建構
npm run preview

# 程式碼檢查
npm run lint

# 自動修復程式碼問題
npm run lint:fix

# 測試
npm run test
```

## 📁 專案結構

```
front_end_template/
├── __test__/                  # 測試文件
├── public/                    # 靜態資源
├── src/
│   ├── apis/                  # API 配置
│   │   └── axios.js          # Axios 攔截器配置
│   ├── assets/               # 靜態資源
│   ├── components/           # 共用組件
│   ├── router/               # 路由配置
│   │   ├── index.ts         # 路由器實例
│   │   └── routes.ts        # 路由定義
│   ├── stores/               # Pinia 狀態管理
│   │   └── base.ts          # 基礎 store
│   ├── styles/               # 樣式文件
│   │   ├── quasar-variables.sass  # Quasar 變數
│   │   └── style.css        # 全域樣式
│   ├── views/                # 頁面組件
│   │   └── HomeView.vue     # 首頁
│   ├── App.vue              # 根組件
│   ├── main.ts              # 應用入口
│   └── vite-env.d.ts        # Vite 型別定義
├── eslint.config.js          # ESLint 配置
├── package.json              # 專案依賴與腳本
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
└── README.md                 # 專案說明
```
