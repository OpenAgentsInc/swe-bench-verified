# SWE-bench Verified High Score Project

## Project Overview

Welcome to our project dedicated to achieving high scores on SWE-bench Verified. Our goal is to develop and implement strategies that will maximize our performance on this benchmark, which is designed to evaluate AI models' ability to solve real-world software issues.

## About SWE-bench Verified

SWE-bench Verified is a human-validated subset of the original SWE-bench dataset, released by OpenAI. Key points:

1. It consists of 500 samples verified by human annotators to be non-problematic.
2. It addresses issues in the original dataset, such as overly specific unit tests and underspecified problem statements.
3. The benchmark aims to provide a more accurate evaluation of AI models' software engineering capabilities.
4. On SWE-bench Verified, GPT-4o resolves 33.2% of samples, more than doubling its previous score on the original SWE-bench.

## Quick Start

1. Clone this repository:
   ```bash
   git clone [Your Repository URL]
   cd [Your Repository Name]
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up Docker (required for evaluation):
   - Follow the [Docker setup guide](https://docs.docker.com/engine/install/)
   - Ensure you have at least 120GB of free disk space

4. Run a sample evaluation:
   ```bash
   python run_evaluation.py --model [Your Model Name] --output_dir ./results
   ```

## Project Structure

- `README.md`: This file
- `setup.md`: Detailed setup instructions
- `dataset_info.md`: Information about the SWE-bench Verified dataset
- `evaluation_guide.md`: Guide to running evaluations
- `model_development.md`: Strategies for developing high-performing models
- `results/`: Directory for storing evaluation results
- `src/`: Source code for our models and evaluation scripts

## Next Steps

1. Read through the detailed documentation in this repository
2. Set up your development environment
3. Familiarize yourself with the SWE-bench Verified dataset
4. Start developing and testing model improvements
5. Run evaluations and analyze results

## Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

For more detailed information on specific aspects of the project, please refer to the individual markdown files in this repository.