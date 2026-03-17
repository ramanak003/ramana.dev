export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   * @example "@ramanak" - Users can install components with: `npx shadcn add @ramanak/wheel-picker`
   * @see https://ui.shadcn.com/docs/registry/namespace#overview
   */
  namespace: process.env.REGISTRY_NAMESPACE || "@ramanak",
  /**
   * URL pattern for resolving namespaced components
   * The {name} placeholder will be replaced with the component name
   * @example "https://ramana.dev/r/{name}.json" resolves to "https://ramana.dev/r/wheel-picker.json"
   * This tells shadcn CLI where to fetch component definitions when installing with namespace prefix
   * @see https://ui.shadcn.com/docs/registry/namespace#url-pattern-system
   */
  namespaceUrl:
    process.env.REGISTRY_NAMESPACE_URL ||
    "https://ramanak003.github.io/ramana.dev/r/{name}.json",
}
