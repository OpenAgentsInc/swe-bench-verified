# SWE-bench Verified Workflow

1. **Data Ingestion**
   - Save the 500 SWE-bench Verified samples to our database
   - Each sample includes a problem statement and a base commit SHA

2. **Task Assignment**
   - Assign a single sample to an agent

3. **Agent Initialization**
   - Agent receives:
     - GitHub base commit SHA
     - Problem statement (original GitHub issue text)

4. **Codebase Exploration**
   - Agent accesses the GitHub repository at the specified commit
   - Traverses the codebase, storing relevant knowledge
   - Analyzes the project structure and dependencies

5. **Problem Analysis**
   - Agent processes the problem statement
   - Identifies the specific issues to be addressed

6. **Solution Development**
   - Agent formulates a strategy to resolve the issue
   - Develops code changes based on the analysis

7. **Patch Creation**
   - Agent generates a patch file with the proposed changes
   - Ensures the patch format is compatible with git apply

8. **Self-Verification**
   - Agent reviews the patch for potential side effects
   - Checks if the proposed changes fully address the problem statement

9. **Submission**
   - Agent submits the final patch for evaluation

10. **Evaluation**
    - The patch is applied to the codebase
    - Hidden tests (FAIL_TO_PASS and PASS_TO_PASS) are run
    - Results are recorded and compared against the gold standard solution

Note: The agent does not have access to the test files or the gold standard solution during the process. The evaluation is performed independently after the agent submits its solution.