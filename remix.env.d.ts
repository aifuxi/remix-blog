/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const jsonValue: any;
  export default jsonValue;
}
