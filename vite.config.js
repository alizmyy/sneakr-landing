import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server — настройки сервера разработки (npm run dev)
  server: {
    // host: true — слушать на всех адресах (и IPv4 127.0.0.1, и IPv6 ::),
    // иначе на некоторых Windows браузер не может подключиться к localhost
    host: true,
    port: 5173,
  },
})
