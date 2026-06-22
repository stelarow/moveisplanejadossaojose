const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'brand-assets');

const variants = [
  { svg: 'logo-escuro.svg', prefix: 'logo-escuro', fillCheck: '#1a1a1a' },
  { svg: 'logo-claro.svg',  prefix: 'logo-claro',  fillCheck: '#ffffff' },
  { svg: 'logo-cor.svg',    prefix: 'logo-cor',    fillCheck: '#1f3a34' },
];

const sizes = [
  { suffix: '600',   width: 600 },
  { suffix: '1200',  width: 1200 },
];

(async () => {
  for (const v of variants) {
    const svgBuffer = fs.readFileSync(path.join(assetsDir, v.svg));
    for (const s of sizes) {
      const height = Math.round((s.width / 600) * 200);
      const outPath = path.join(assetsDir, `${v.prefix}-${s.suffix}.png`);
      await sharp(svgBuffer, { density: 384 })
        .resize({ width: s.width, height: height, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, quality: 95 })
        .toFile(outPath);
      console.log(`OK ${path.basename(outPath)} (${s.width}x${height})`);
    }
  }
  console.log('\nArquivos gerados em:', assetsDir);
})().catch((e) => { console.error(e); process.exit(1); });
