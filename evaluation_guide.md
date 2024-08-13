# SWE-bench Verified Evaluation Guide

This guide provides detailed instructions on how to run evaluations using the SWE-bench Verified dataset and our Docker-based evaluation harness.

## Prerequisites

- Completed setup as described in `setup.md`
- Docker installed and running
- At least 120GB of free disk space

## Evaluation Process Overview

1. Generate predictions using your model
2. Prepare predictions in the required format
3. Run the evaluation harness
4. Analyze results

## Generating Predictions

You can use one of the following methods to generate predictions:

### Using API Models (e.g., GPT-3.5, Claude)

```bash
python -m src.inference.run_api \
    --dataset_name_or_path princeton-nlp/SWE-bench_Verified \
    --model_name_or_path <model_name> \
    --output_dir ./predictions
```

### Using Local Models (e.g., SWE-Llama)

```bash
python -m src.inference.run_llama \
    --dataset_path princeton-nlp/SWE-bench_Verified \
    --model_name_or_path princeton-nlp/SWE-Llama-13b \
    --output_dir ./predictions \
    --temperature 0
```

## Preparing Predictions

Ensure your predictions are in the correct format:

```json
{
  "instance_id": "repo_name__issue-1234",
  "model_patch": "diff --git a/file.py b/file.py\n...",
  "model_name_or_path": "your_model_name"
}
```

Save these predictions in a JSON or JSONL file.

## Running the Evaluation Harness

Use the following command to run the evaluation:

```bash
python -m src.harness.run_evaluation \
    --dataset_name princeton-nlp/SWE-bench_Verified \
    --predictions_path ./predictions/your_predictions.json \
    --max_workers 12 \
    --run_id your_run_id \
    --cache_level env
```

Important parameters:
- `max_workers`: Recommended to use fewer than `min(0.75 * os.cpu_count(), 28)`.
- `cache_level`: Controls how the harness caches images between runs.
  - `env` (default): Stores base and environment images (~100GB disk space).
  - `instance`: Stores all images for fastest evaluation (~2,000GB disk space).
  - `base` or `none`: Minimizes disk space usage but requires rebuilding images.

## Analyzing Results

After the evaluation completes:

1. Check the `evaluation_results` directory for the output files.
2. The main results file will be named `your_model_name.your_run_id.json`.
3. This file contains overall statistics and per-instance results.

Key metrics to look for:
- `resolved_instances`: Number of instances your model successfully solved.
- `total_instances`: Total number of instances in the dataset.

Your score is calculated as: (resolved_instances / total_instances) * 100

## Tips for Improving Performance

1. Analyze failed instances to understand common error patterns.
2. Experiment with different model architectures and prompting strategies.
3. Consider fine-tuning your model on similar tasks.
4. Ensure your model generates syntactically correct patches.

## Troubleshooting

- If Docker containers fail to start, check your system's resource allocation to Docker.
- For "out of disk space" errors, try clearing Docker cache or using a lower `cache_level`.
- If evaluation seems stuck, check the logs in the `logs` directory for more information.

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [SWE-bench GitHub Repository](https://github.com/princeton-nlp/SWE-bench)
- [Hugging Face Datasets Documentation](https://huggingface.co/docs/datasets/)

For any persistent issues or questions, please open an issue in the project repository.