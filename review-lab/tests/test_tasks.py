import sqlite3
import unittest
from pathlib import Path

from task_service import completion_percentage

ROOT = Path(__file__).resolve().parents[1]


class TaskTests(unittest.TestCase):
    def test_empty_progress(self):
        self.assertEqual(completion_percentage(0, 0), 0)

    def test_partial_progress(self):
        self.assertEqual(completion_percentage(1, 4), 25)

    def test_migration_retains_pending_task(self):
        with sqlite3.connect(':memory:') as connection:
            connection.executescript((ROOT / 'migrations/001_tasks.sql').read_text())
            connection.execute("INSERT INTO tasks VALUES (1, 10, 'Learn Vue', 0)")
            connection.commit()
            connection.executescript((ROOT / 'migrations/002_task_status.sql').read_text())
            self.assertEqual(
                connection.execute('SELECT title, status FROM tasks').fetchone(),
                ('Learn Vue', 'pending'),
            )


if __name__ == '__main__':
    unittest.main()
