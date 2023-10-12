type APlugin = {
  name: string;
  install: (context: any, options?: any) => void;
};

declare module 'rete-alight-render-plugin' {
  const plugin: APlugin;
  export default plugin;
}
