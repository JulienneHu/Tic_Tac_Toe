import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'Tic_Tac_Toe'; 

export default defineConfig({
  base: `/${Tic_Tac_Toe}/`,
  plugins: [react()],
});
