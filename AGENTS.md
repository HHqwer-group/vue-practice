# Repository guidance

## Code Review Rules

- Filtering a task list must not change which task an action targets. Use stable task IDs rather than indexes from a filtered list.
- Clearing completed tasks must preserve every unfinished task, including tasks hidden by search or status filters.
- Treat URL parameters as untrusted input. Render shared notes as text, or sanitize them with an appropriate HTML sanitizer before HTML rendering.

## Repeated Business Conditions and Derived State

- When the same compound condition expresses the same business meaning in two or more places within the code touched by the current task, extract it into a clearly named expression and reuse it consistently.
- Use a local `const` when the condition is reused only within a single function.
- In Vue components, use a computed property when the condition depends on reactive data and is shared across methods, computed properties, or templates. Do not duplicate derived state in `data` or synchronize it manually with watchers.
- Extract logic into a shared utility only when it is needed across components or modules. Avoid unnecessary abstraction for simple, one-off expressions.
- Minimal changes do not mean the fewest lines of code. Extracting repeated conditions directly related to the current change is appropriate cleanup, not unrelated refactoring. Preserve behavior and avoid expanding the task's scope.
- Before delivery, review the changed code for repeated conditions, meaningful names, and correct reactive updates.
