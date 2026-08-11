// Gera versões PNG (1200x630) das ilustrações SVG dos posts para uso como og:image.
// Scrapers de preview (WhatsApp, Facebook, X, LinkedIn) não renderizam SVG — sem
// isso o card compartilhado fica sem imagem. Rode manualmente ao adicionar/alterar
// uma ilustração em src/assets/posts:  node scripts/gen-og-images.mjs
import sharp from 'sharp';
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const SRC = 'src/assets/posts';
const OUT = 'public/og';
const BG = '#2e1065'; // brand-950 (aurora) — mesmo fundo das ilustrações

mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => extname(f) === '.svg')) {
	const png = await sharp(readFileSync(join(SRC, file)), { density: 192 })
		.resize(1200, 630, { fit: 'contain', background: BG })
		.flatten({ background: BG })
		.png()
		.toBuffer();
	const name = `${basename(file, '.svg')}.png`;
	writeFileSync(join(OUT, name), png);
	console.log(`og/${name}`);
}
