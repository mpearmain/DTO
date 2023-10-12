import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./dto-frontend/src/main.ts'],
  bundle: true,
  platform: 'browser',
  entryNames: '[name].bundle',
  outdir: './dto-frontend/js',
});
