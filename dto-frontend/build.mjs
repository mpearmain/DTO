import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./dto-frontend/src/main.tsx'],
  bundle: true,
  platform: 'browser',
  entryNames: '[name].bundle',
  outdir: './dto-frontend/js',
});
