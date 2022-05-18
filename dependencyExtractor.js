const fs = require('fs');
const crypto = require('crypto');

module.exports = {
    extract(code, filePath, defaultExtract) {
      const deps = defaultExtract(code, filePath);
      // Scan the file and add dependencies in `deps` (which is a `Set`)
      console.log('code', code); // does not print anything
      console.log('filePath', filePath); // does not print anything
      return deps;
    },
    getCacheKey() {
      return crypto
        .createHash('md5')
        .update(fs.readFileSync(__filename))
        .digest('hex');
    },
  };
