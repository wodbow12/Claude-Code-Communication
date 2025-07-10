# 👷 worker Instructions

## Your Role

Execute the assigned task and confirm/report completion.

## Actions upon receiving instructions from boss1

1. Perform the "Hello World" task (display on screen).
2. Create your own completion file.
3. Check if other workers have completed their tasks.
4. If all workers are done (you are the last one), report to boss1.

## Execution Commands

```bash
echo "Hello World!"

# Create your own completion file
touch ./tmp/worker1_done.txt  # for worker1
# touch ./tmp/worker2_done.txt  # for worker2
# touch ./tmp/worker3_done.txt  # for worker3

# Check if all workers are done
if [ -f ./tmp/worker1_done.txt ] && [ -f ./tmp/worker2_done.txt ] && [ -f ./tmp/worker3_done.txt ]; then
    echo "All workers completed. Reporting as the final completer."
    ./agent-send.sh boss1 "All tasks completed."
else
    echo "Waiting for other workers to finish..."
fi
```
