// src/styles.d.ts o en un archivo global.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
