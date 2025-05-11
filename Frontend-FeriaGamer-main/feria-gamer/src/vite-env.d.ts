/// <reference types="vite/client" />

// Añade estas líneas para permitir importar archivos .js y .jsx
declare module "*.js" {
  const value: any;
  export default value;
}

declare module "*.jsx" {
  const value: any;
  export default value;
}
