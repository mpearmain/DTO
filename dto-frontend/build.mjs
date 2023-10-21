import esbuild from 'esbuild';

const watch = !!process.argv.includes('--watch');

const opts = {
  entryPoints: ['./dto-frontend/src/main.tsx'],
  bundle: true,
  sourcemap: 'inline',
  platform: 'browser',
  entryNames: '[name].bundle',
  outdir: './dto-frontend/js',
};

if (watch) {
  esbuild.context(opts).then((v) => v.watch());
} else {
  esbuild.buildSync(opts);
}
