"""Task operations for an authenticated caller using a SQLite connection."""


def get_task(connection, authenticated_user_id, task_id):
    return connection.execute(
        'SELECT id, owner_id, title, status FROM tasks WHERE id = ?',
        (task_id,),
    ).fetchone()


def completion_percentage(completed, total):
    if total == 0:
        return 0
    return round(completed / total) * 100
