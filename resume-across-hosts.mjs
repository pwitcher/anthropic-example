import { listSessions, renameSession } from "@anthropic-ai/claude-agent-sdk";

const sessions = await listSessions({ dir: "D:\\github\\far-force", limit: 5 });

for (const session of sessions) {
  const modified = new Date(session.lastModified).toLocaleString();
  console.log(`${session.summary} — ${modified} (${session.sessionId})`);
}

if (sessions.length > 0) {
    await renameSession(sessions[0].sessionId, "Auth module refactor – JWT approach", {
    dir: "D:\\github\\far-force"
    });
  console.log(`Renamed session ${sessions[0].sessionId}`);
}