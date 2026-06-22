import { listSessions, renameSession } from "@anthropic-ai/claude-agent-sdk";
const sessions = await listSessions({ dir: "/path/to/project", limit: 5 });

for (const session of sessions) {
  const modified = new Date(session.lastModified).toLocaleString();
  console.log(`${session.summary} — ${modified} (${session.sessionId})`);
}

if (sessions.length > 0) {
    await renameSession(sessions[0].sessionId, "Auth module refactor – JWT approach", {
    dir: "/path/to/project"
    });
  console.log(`Renamed session ${sessions[0].sessionId}`);
}