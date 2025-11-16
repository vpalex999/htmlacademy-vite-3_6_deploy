import './style.scss';

document.querySelector ('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <svg class="svg_sprite logo"><use href="#vite"></use></svg>
    </a>
    <a href="/pages/about/">О нас</a>
    <a href="/pages/news/">новости</a>
    <h1>${import.meta.env.VITE_API_URL}<h1>
    <h1>Hello Vite!</h1>
  </div>
`;
