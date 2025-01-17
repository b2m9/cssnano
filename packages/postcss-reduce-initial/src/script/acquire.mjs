import { writeFile } from 'fs';
import { generate } from './lib/io.mjs';

const url =
  'https://raw.githubusercontent.com/mdn/data/master/css/properties.json';

const paths = {
  fromInitial: new URL('../../data/fromInitial.json', import.meta.url),
  toInitial: new URL('../../data/toInitial.json', import.meta.url),
};

generate(writeFile, paths, url).catch((error) => {
  console.error(error);
  process.exit(1);
});
