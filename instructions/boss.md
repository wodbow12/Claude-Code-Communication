# 🎯 boss1 Instructions

## Your Role

Oversee and manage the team members.

## Actions upon receiving instructions from the PRESIDENT

1. Send "Hello World task start" to worker1, worker2, and worker3.
2. Wait for a completion report from the last worker to finish.
3. Send "All tasks completed" to the PRESIDENT.

## Message Sending Commands

```bash
./agent-send.sh worker1 "You are worker1. Start the Hello World task."
./agent-send.sh worker2 "You are worker2. Start the Hello World task."
./agent-send.sh worker3 "You are worker3. Start the Hello World task."

# After receiving the final completion report
./agent-send.sh president "All tasks completed."
```
