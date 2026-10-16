BEGIN;
CREATE TABLE tasks_new (
  id INTEGER PRIMARY KEY,
  owner_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
);
INSERT INTO tasks_new (id, owner_id, title, status)
SELECT id, owner_id, title, 'pending' FROM tasks WHERE done = 0;
DROP TABLE tasks;
ALTER TABLE tasks_new RENAME TO tasks;
COMMIT;
