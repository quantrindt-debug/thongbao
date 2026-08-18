import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/thongbao/', // Thêm dòng này (nhớ thay đúng tên repository trên GitHub của bạn nếu khác)
})