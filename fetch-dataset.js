const https = require('https');
const fs = require('fs');

const baseUrl = 'https://datasets-server.huggingface.co/rows?dataset=princeton-nlp%2FSWE-bench_Verified&config=default&split=test';
const outputFile = 'swe_bench_data.jsonl';
const totalRows = 500;
const rowsPerRequest = 100;

function fetchData(offset, limit) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}&offset=${offset}&length=${limit}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function fetchAllData() {
  const writeStream = fs.createWriteStream(outputFile);

  for (let offset = 0; offset < totalRows; offset += rowsPerRequest) {
    const limit = Math.min(rowsPerRequest, totalRows - offset);
    console.log(`Fetching rows ${offset} to ${offset + limit - 1}...`);

    try {
      const data = await fetchData(offset, limit);
      data.rows.forEach(row => {
        const jsonlRow = {
          instance_id: row.row.instance_id,
          patch: row.row.patch,
          repo: row.row.repo,
          base_commit: row.row.base_commit,
          hints_text: row.row.hints_text,
          created_at: row.row.created_at,
          test_patch: row.row.test_patch,
          problem_statement: row.row.problem_statement,
          version: row.row.version,
          environment_setup_commit: row.row.environment_setup_commit,
          FAIL_TO_PASS: row.row.FAIL_TO_PASS,
          PASS_TO_PASS: row.row.PASS_TO_PASS,
        };
        writeStream.write(JSON.stringify(jsonlRow) + '\n');
      });
    } catch (error) {
      console.error(`Error fetching data for offset ${offset}:`, error);
    }
  }

  writeStream.end();
  console.log(`Data has been written to ${outputFile}`);
}

fetchAllData();
