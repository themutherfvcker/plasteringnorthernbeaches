#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Type-check the lead-capture surface with a Next-independent tsconfig so the
# Deno Edge Function (owned by the HSP branch) is not part of the graph. This
# script uses only devDependencies already declared in package.json.
./node_modules/.bin/tsc --noEmit --incremental false \
  --target ES2022 --module commonjs --moduleResolution node \
  --lib ES2022,DOM --strict --esModuleInterop --skipLibCheck \
  --jsx react tests/lead-pipeline.test.ts lib/lead-pipeline.ts lib/lead-client.ts \
  app/api/leads/route.ts app/api/lead-notify/route.ts

# Compile test modules in memory: no generated files or cleanup commands.
LEAD_TESTS_REPO_ROOT="$PWD" node <<'NODE'
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    fileName: filename,
  });
  module._compile(result.outputText, filename);
};
require('./tests/lead-pipeline.test.ts');
NODE
