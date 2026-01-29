
// Manual type declarations to resolve "Cannot find type definition file for 'vite/client'"
// Each module uses a unique internal constant name to avoid "Duplicate identifier" errors
// which can occur when multiple modules are merged or when declarations overlap with 
// other environment type definitions.

// Fix: Added 'export {}' to ensure this file is treated as a module, isolating internal 'const' declarations.
export {};

declare global {
  interface ImportMetaEnv {
    readonly [key: string]: string | boolean | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Fix: Use unique internal identifier names for each module to prevent 'src' duplication errors across different asset types.
declare module '*.svg' {
  const svg_src_unique: string;
  export default svg_src_unique;
}

declare module '*.png' {
  const png_src_unique: string;
  export default png_src_unique;
}

declare module '*.jpg' {
  const jpg_src_unique: string;
  export default jpg_src_unique;
}

declare module '*.jpeg' {
  const jpeg_src_unique: string;
  export default jpeg_src_unique;
}

declare module '*.gif' {
  const gif_src_unique: string;
  export default gif_src_unique;
}

declare module '*.webp' {
  const webp_src_unique: string;
  export default webp_src_unique;
}

declare module '*.ico' {
  const ico_src_unique: string;
  export default ico_src_unique;
}

// Fix: Use unique internal identifier names for each CSS module type to prevent 'classes' duplication errors.
declare module '*.module.css' {
  const css_classes_unique: { readonly [key: string]: string };
  export default css_classes_unique;
}

declare module '*.module.scss' {
  const scss_classes_unique: { readonly [key: string]: string };
  export default scss_classes_unique;
}

declare module '*.module.sass' {
  const sass_classes_unique: { readonly [key: string]: string };
  export default sass_classes_unique;
}

declare module '*.module.less' {
  const less_classes_unique: { readonly [key: string]: string };
  export default less_classes_unique;
}

declare module '*.module.styl' {
  const styl_classes_unique: { readonly [key: string]: string };
  export default styl_classes_unique;
}
