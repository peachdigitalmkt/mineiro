self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalação Concluída');
});

self.addEventListener('fetch', (e) => {
  // Apenas deixa a requisição passar normalmente
});
