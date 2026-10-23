# Task service review lab

Isolated SQLite task-service prototype for reviewing migrations and service behavior.
It is not connected to the Vue application and has no deployed HTTP endpoint.
Use synthetic data only.

## Contract

- Apply migrations in numeric order. Existing task IDs, owners, titles, and completion
  state must survive the status migration, including completed tasks.
- `get_task` receives the authenticated caller's user ID. A caller may read only
  their own tasks; missing or inaccessible tasks return `None`.
- Completion percentage is an integer rounded to the nearest percent, with zero
  for an empty task list.

## Run

Requires Python 3.12 in CI; no third-party packages or secrets are needed.

```sh
cd review-lab
python -m unittest discover -s tests -v
```

The GitHub Actions workflow runs these tests for pull requests. Keep review and
repair experiments on the test branch until their results have been evaluated.
