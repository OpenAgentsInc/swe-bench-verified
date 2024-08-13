# Detailed Setup Instructions

This guide provides comprehensive setup instructions for the SWE-bench Verified High Score Project.

## Prerequisites

- Python 3.8+
- Git
- Docker
- 120GB+ free disk space

## Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone [Your Repository URL]
   cd [Your Repository Name]
   ```

2. **Set Up a Virtual Environment** (Optional but recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Install Docker**
   - Follow the [official Docker installation guide](https://docs.docker.com/get-docker/)
   - Ensure Docker is running

5. **Set Up Hugging Face Access** (for dataset and model access)
   ```bash
   pip install huggingface_hub
   huggingface-cli login
   ```

6. **Configure Environment Variables**
   Create a `.env` file in the project root and add:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

7. **Verify Installation**
   ```bash
   python verify_setup.py
   ```

## Troubleshooting

- If you encounter Docker-related issues, ensure your user has permissions to run Docker commands.
- For package conflicts, try creating a new virtual environment.
- If you're having trouble accessing the dataset, check your Hugging Face account permissions.

## Next Steps

After completing the setup:
1. Read through `dataset_info.md` to understand the SWE-bench Verified dataset.
2. Explore `evaluation_guide.md` for instructions on running evaluations.
3. Start developing your model improvements using `model_development.md` as a guide.

For any issues not covered here, please open an issue in the GitHub repository.