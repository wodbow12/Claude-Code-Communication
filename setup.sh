#!/bin/bash

# 🚀 Multi-Agent Communication Demo Environment Setup
# Reference: setup_full_environment.sh

set -e  # Exit on error

# Colored log functions
log_info() {
    echo -e "\033[1;32m[INFO]\033[0m $1"
}

log_success() {
    echo -e "\033[1;34m[SUCCESS]\033[0m $1"
}

echo "🤖 Multi-Agent Communication Demo Environment Setup"
echo "==================================================="
echo ""

# STEP 1: Cleanup existing sessions
log_info "🧹 Starting cleanup of existing sessions..."

tmux kill-session -t multiagent 2>/dev/null && log_info "Deleted existing 'multiagent' session" || log_info "'multiagent' session did not exist"
tmux kill-session -t president 2>/dev/null && log_info "Deleted existing 'president' session" || log_info "'president' session did not exist"

# Clear completion files
mkdir -p ./tmp
rm -f ./tmp/worker*_done.txt 2>/dev/null && log_info "Cleared existing completion files" || log_info "No completion files found"

log_success "✅ Cleanup complete"
echo ""

# STEP 2: Create multiagent session (4 panes: boss1 + worker1,2,3)
log_info "📺 Creating multiagent session (4 panes)..."

# Create initial pane
tmux new-session -d -s multiagent -n "agents"

# Create 2x2 grid (total 4 panes)
tmux split-window -h -t "multiagent:0"      # Horizontal split
tmux select-pane -t "multiagent:0.0"
tmux split-window -v                        # Vertical split on left
tmux select-pane -t "multiagent:0.2"
tmux split-window -v                        # Vertical split on right

# Set pane titles
log_info "Setting pane titles..."
PANE_TITLES=("boss1" "worker1" "worker2" "worker3")

for i in {0..3}; do
    tmux select-pane -t "multiagent:0.$i" -T "${PANE_TITLES[$i]}"
    
    # Set working directory
    tmux send-keys -t "multiagent:0.$i" "cd $(pwd)" C-m
    
    # Set color prompt
    if [ $i -eq 0 ]; then
        # boss1: red
        tmux send-keys -t "multiagent:0.$i" "export PS1='(\[\033[1;31m\]${PANE_TITLES[$i]}\[\033[0m\]) \[\033[1;32m\]\w\[\033[0m\]\$ '" C-m
    else
        # workers: blue
        tmux send-keys -t "multiagent:0.$i" "export PS1='(\[\033[1;34m\]${PANE_TITLES[$i]}\[\033[0m\]) \[\033[1;32m\]\w\[\033[0m\]\$ '" C-m
    fi
    
    # Welcome message
    tmux send-keys -t "multiagent:0.$i" "echo '=== ${PANE_TITLES[$i]} Agent ==='" C-m
done

log_success "✅ multiagent session created"
echo ""

# STEP 3: Create president session (1 pane)
log_info "👑 Creating president session..."

tmux new-session -d -s president
tmux send-keys -t president "cd $(pwd)" C-m
tmux send-keys -t president "export PS1='(\[\033[1;35m\]PRESIDENT\[\033[0m\]) \[\033[1;32m\]\w\[\033[0m\]\$ '" C-m
tmux send-keys -t president "echo '=== PRESIDENT Session ==='" C-m
tmux send-keys -t president "echo 'Project Overseer'" C-m
tmux send-keys -t president "echo '========================='" C-m

log_success "✅ president session created"
echo ""

# STEP 4: Environment check and display
log_info "🔍 Checking environment..."

echo ""
echo "📊 Setup Result:"
echo "================"

# Check tmux sessions
echo "📺 Tmux Sessions:"
tmux list-sessions
echo ""

# Display pane layout
echo "📋 Pane Layout:"
echo "  multiagent session (4 panes):"
echo "    Pane 0: boss1     (Team Leader)"
echo "    Pane 1: worker1   (Operator A)"
echo "    Pane 2: worker2   (Operator B)"
echo "    Pane 3: worker3   (Operator C)"
echo ""
echo "  president session (1 pane):"
echo "    Pane 0: PRESIDENT (Project Overseer)"

echo ""
log_success "🎉 Demo environment setup complete!"
echo ""
echo "📋 Next Steps:"
echo "  1. 🔗 Attach to session:"
echo "     tmux attach-session -t multiagent   # View multi-agent session"
echo "     tmux attach-session -t president    # View president session"
echo ""
echo "  2. 🤖 Launch Claude Code:"
echo "     # Step 1: Authenticate in President"
echo "     tmux send-keys -t president 'claude' C-m"
echo "     # Step 2: After authentication, launch agents"
echo "     for i in {0..3}; do tmux send-keys -t multiagent:0.\$i 'claude' C-m; done"
echo ""
echo "  3. 📜 Check Instructions:"
echo "     PRESIDENT: instructions/president.md"
echo "     boss1: instructions/boss.md"
echo "     worker1,2,3: instructions/worker.md"
echo "     System Overview: CLAUDE.md"
echo ""
echo "  4. 🎯 Start Demo: Enter in PRESIDENT — 'You are the president. Please follow the instructions.'"
