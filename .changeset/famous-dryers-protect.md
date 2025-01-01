---
'@devtools/plugin-scaffolder-backend': minor
'@devtools/plugin-scaffolder-node': patch
---

Added the ability to use `${{ context.task.id }}` in nunjucks templating, as well as `ctx.task.id` in actions to get the current task ID.
