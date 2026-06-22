from claude_agent_sdk import list_sessions, rename_session
from datetime import datetime

sessions = list_sessions(directory=r"D:\github\far-force", limit=5)

for session in sessions:
    modified = datetime.fromtimestamp(session.last_modified / 1000).strftime("%Y-%m-%d %H:%M")
    print(f"{session.summary} - {modified} ({session.session_id})")

if sessions:
    rename_session(sessions[0].session_id, "Auth module refactor - JWT approach")
    print(f"Renamed session {sessions[0].session_id}")