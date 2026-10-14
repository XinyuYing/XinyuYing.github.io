import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/cases/FutureTech/demo/', plugins: [react()], build: { target: 'es2022' } });
