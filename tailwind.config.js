// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,php}"], // Ajuste para seus arquivos
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",   // Vermelho
        dark: "#000000",      // Preto
        cinza: "#808080",   // Cinza
        verde: "#008000",    // Verde
      },
    },
  },
  plugins: [],
}
