/// <reference types="vite/client" />

/**
 * unplugin-icons virtual modules. The plugin generates a React component per
 * icon at build time, so these imports need ambient types for TypeScript.
 */
declare module "~icons/*" {
  import type { ComponentType, SVGProps } from "react";

  const Icon: ComponentType<SVGProps<SVGSVGElement>>;
  export default Icon;
}
