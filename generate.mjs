import { createClient } from "@hey-api/openapi-ts";
import childProcess from "child_process";
import fs from "fs/promises";
import YAML from "yaml";

async function main() {
  const response = await fetch("https://api.genesiscloud.com/compute/v1/openapi.yaml");

  const file = await response.text();

  const spec = YAML.parse(file);

  for (const [_, path] of Object.entries(spec.paths)) {
    for (const [methodname, method] of Object.entries(path)) {
      if (methodname !== "parameters") {
        delete method.responses.default;
      }
    }
  }

  await createClient({
    input: spec,
    output: `./src`,
    client: "fetch",
    name: "GenesisCloudClient",
    useOptions: true,
  });

  childProcess.execSync(`prettier -w ./src`);

  // Until https://github.com/ferdikoomen/openapi-typescript-codegen/pull/494 gets merged
  {
    const src = `./src/models/Timestamp.ts`;

    if (
      await fs
        .access(src)
        .then(() => true)
        .catch(() => false)
    ) {
      let file = (await fs.readFile(src)).toString();

      file = file.replaceAll("string", "Date");

      await fs.writeFile(src, file);
    }
  }
}

// eslint-disable-next-line no-floating-promise/no-floating-promise
main();
