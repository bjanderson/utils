const fs = require('fs');
const glob = require('glob');
const path = require('path');

const dist = path.resolve('dist');

/**
 * The TypeScript tsc compiler does not convert absolute import paths in the source code to
 * relative require paths in the transpiled JS code that it generates. Therefore, it is up to
 * us to find a solution for converting those paths if we want to use absolute path imports
 * in our source code. We could use webpack, or gulp, or any other npm library, but the solution
 * is so simple that there's no need to learn how to use another 3rd party dependency.
 */

fixTSPaths();

function fixTSPaths() {
  glob(dist + '/**/*.js', {}, (err, filePaths) => {
    if (err) {
      console.error('err: ', err);
      return;
    }

    filePaths.map(name => {
      try {
        const segment = name.split('dist/')[1];
        const depth = segment.split('/').length - 1;
        const rel = toRelative(depth);

        let text = fs.readFileSync(name, 'utf8');
        text = convertImport(text, rel);

        fs.writeFileSync(name, text);

      } catch(err) {
        console.error(`failed on file: ${name}`);
        console.error('err: ', err);
      }
    });
  })
}

function toRelative(depth) {
  let rel = '';
  while (depth-- > 0) {
    rel += '../';
  }
  if (rel === '') {
    rel = './';
  }
  return rel;
}

function convertImport(str, rel) {
  str = str.replace(/'src\//g, `'${rel}`);
  str = str.replace(/"src\//g, `"${rel}`);
  return str;
}
