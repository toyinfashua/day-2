npm install --save @google-cloud/bigquery

gcloud beta auth application-default login

const BigQuery = require('@google-cloud/bigquery');

const projectId = 'YOUR_PROJECT_ID';

const bigquery = BigQuery({
  projectId: projectId
});

const datasetName = 'my_new_dataset';

bigquery.createDataset(datasetName)
  .then((results) => {
    const dataset = results[0];

    console.log(`Dataset ${dataset.id} created.`);
  });