# SWE-bench Verified Dataset Information

## Overview

SWE-bench Verified is a curated subset of the original SWE-bench dataset, consisting of 500 high-quality samples. These samples have been validated by human annotators to ensure they are solvable and representative of real-world software engineering tasks.

## Dataset Characteristics

- **Size**: 500 samples
- **Source**: Derived from real GitHub issues and pull requests
- **Languages**: Primarily Python
- **Validation**: Human-verified for solvability and clarity

## Dataset Structure

Each sample in the dataset typically includes:

1. **Problem Statement**: A description of the issue, derived from the original GitHub issue.
2. **Codebase Context**: Relevant parts of the codebase where the issue occurs.
3. **Tests**: Associated unit tests that should pass when the issue is resolved.
4. **Gold Solution**: The actual solution that was implemented to resolve the issue.

## Accessing the Dataset

To access the SWE-bench Verified dataset:

```python
from datasets import load_dataset

dataset = load_dataset("princeton-nlp/SWE-bench_Verified")
```

## Sample Entry

Here's an example of what a dataset entry might look like:

```python
{
    'instance_id': 'repo_name__issue-1234',
    'problem_statement': 'Function X fails when given input Y...',
    'context': 'def X(input):\n    ...',
    'tests': 'def test_X():\n    assert X(Y) == expected_output',
    'solution': 'diff --git a/file.py b/file.py\n...',
}
```

## Dataset Splits

The dataset may be divided into different splits (e.g., train, validation, test). To access a specific split:

```python
train_dataset = load_dataset("princeton-nlp/SWE-bench_Verified", split="train")
validation_dataset = load_dataset("princeton-nlp/SWE-bench_Verified", split="validation")
test_dataset = load_dataset("princeton-nlp/SWE-bench_Verified", split="test")
```

## Best Practices

1. **Understand the Context**: Always consider the full context provided in each sample.
2. **Test Thoroughly**: Use the provided tests to validate your solutions.
3. **Respect Original Intent**: Aim to solve the issue as described, without introducing unrelated changes.
4. **Learn from Gold Solutions**: Study the provided solutions to understand effective problem-solving approaches.

## Ethical Considerations

- Respect the original authors and maintainers of the codebases represented in the dataset.
- Do not use the dataset to generate or distribute harmful code.
- Be mindful of potential biases in the dataset selection and validation process.

## Additional Resources

- [SWE-bench GitHub Repository](https://github.com/princeton-nlp/SWE-bench)
- [OpenAI's SWE-bench Verified Announcement](https://openai.com/index/introducing-swe-bench-verified/)
- [Hugging Face Dataset Page](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified)

For more detailed information or specific questions about the dataset, refer to the official documentation or contact the dataset maintainers.