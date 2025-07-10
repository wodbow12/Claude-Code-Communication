#!/bin/bash

# 🚀 Agent-to-Agent Message Sending Script

# Agent → tmux target mapping
get_agent_target() {
    case "$1" in
        "president") echo "president" ;;
        "boss1") echo "multiagent:0.0" ;;
        "worker1") echo "multiagent:0.1" ;;
        "worker2") echo "multiagent:0.2" ;;
        "worker3") echo "multiagent:0.3" ;;
        *) echo "" ;;
    esac
}

show_usage() {
    cat << EOF
🤖 Agent-to-Agent Message Sender

Usage:
  $0 [agent_name] [message]
  $0 --list

Available Agents:
  president - Project Overseer
  boss1     - Team Leader
  worker1   - Executor A
  worker2   - Executor B
  worker3   - Executor C

Examples:
  $0 president "Follow the instructions"
  $0 boss1 "Start the Hello World project"
  $0 worker1 "Task completed"
EOF
}

# List available agents
show_agents() {
    echo "📋 Available Agents:"
    echo "=========================="
    echo "  president → president:0     (Project Overseer)"
    echo "  boss1     → multiagent:0.0  (Team Leader)"
    echo "  worker1   → multiagent:0.1  (Executor A)"
    echo "  worker2   → multiagent:0.2  (Executor B)"
    echo "  worker3   → multiagent:0.3  (Executor C)"
}

# Log sent messages
log_send() {
    local agent="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')

    mkdir -p logs
    echo "[$timestamp] $agent: SENT - \"$message\"" >> logs/send_log.txt
}

# Send message to tmux target
send_message() {
    local target="$1"
    local message="$2"

    echo "📤 Sending to: $target ← '$message'"

    # Clear Claude Code prompt if necessary
    tmux send-keys -t "$target" C-c
    sleep 0.3

    # Send message
    tmux send-keys -t "$target" "$message"
    sleep 0.1

    # Press enter
    tmux send-keys -t "$target" C-m
    sleep 0.5
}

# Check if tmux target exists
check_target() {
    local target="$1"
    local session_name="${target%%:*}"

    if ! tmux has-session -t "$session_name" 2>/dev/null; then
        echo "❌ Error: Session '$session_name' not found"
        return 1
    fi

    return 0
}

# Main execution
main() {
    if [[ $# -eq 0 ]]; then
        show_usage
        exit 1
    fi

    # --list option
    if [[ "$1" == "--list" ]]; then
        show_agents
        exit 0
    fi

    if [[ $# -lt 2 ]]; then
        show_usage
        exit 1
    fi

    local agent_name="$1"
    local message="$2"

    # Get tmux target
    local target
    target=$(get_agent_target "$agent_name")

    if [[ -z "$target" ]]; then
        echo "❌ Error: Unknown agent '$agent_name'"
        echo "Available agents: $0 --list"
        exit 1
    fi

    # Check if tmux session exists
    if ! check_target "$target"; then
        exit 1
    fi

    # Send message
    send_message "$target" "$message"

    # Log message
    log_send "$agent_name" "$message"

    echo "✅ Message sent to $agent_name: '$message'"

    return 0
}

main "$@"
