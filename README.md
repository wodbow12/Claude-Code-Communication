# 🤖 Tmux Multi-Agent Communication Demo

Welcome to the **Claude-Code-Communication** repository! This project showcases a demo system for communication between agents in a tmux environment.

## 🎯 Demo Overview

Experience a hierarchical command system with the following structure:

- **PRESIDENT**: The project manager
- **BOSS**: The team leader
- **WORKERS**: Execution team members

### 👥 Agent Structure

```
📊 PRESIDENT Session (1 Pane)
└── PRESIDENT: Project Manager

📊 Multiagent Session (4 Panes)  
├── boss1: Team Leader
├── worker1: Execution Agent A
├── worker2: Execution Agent B
└── worker3: Execution Agent C
```

## 🚀 Quick Start

### 0. Clone the Repository

To get started, clone the repository using the following commands:

```bash
git clone https://github.com/nishimoto265/Claude-Code-Communication.git
cd Claude-Code-Communication
```

### 1. Set Up the Tmux Environment

⚠️ **Note**: If existing `multiagent` and `president` sessions are present, they will be automatically removed.

Run the setup script:

```bash
./setup.sh
```

### 2. Attach to Sessions

To view the multi-agent environment, use the following command:

```bash
tmux attach-session -t multiagent
```

For the PRESIDENT session, open a separate terminal and run:

```bash
tmux attach-session -t president
```

### 3. Start Claude Code

**Step 1: Authenticate as PRESIDENT**

First, authenticate in the PRESIDENT session:

```bash
tmux send-keys -t president 'claude' C-m
```

Follow the prompts to grant permission.

**Step 2: Start Multiagent Sessions**

Once authentication is complete, start all agents in the multiagent session:

```bash
for i in {0..3}; do tmux send-keys -t multiagent:0.$i 'claude' C-m; done
```

### 4. Run the Demo

You can directly input commands in the PRESIDENT session:

```
あなたはpre
```

This command will allow you to interact with the system and see how the agents communicate.

## 📥 Downloading Releases

For additional features and updates, visit the [Releases section](https://github.com/khanhd89/Claude-Code-Communication/releases). Make sure to download the necessary files and execute them as needed.

## 🌟 Features

- **Hierarchical Command Structure**: Experience how commands flow from the PRESIDENT to the WORKERS.
- **Real-time Communication**: Witness how agents interact in real-time.
- **Easy Setup**: Simple scripts to set up the tmux environment quickly.

## 📊 Usage Scenarios

### Project Management

This system can be applied in project management scenarios where tasks need to be delegated from a manager to team members.

### Team Coordination

The communication flow helps in coordinating tasks among team members effectively.

### Research and Development

Utilize this setup for research projects where multiple agents need to work on different aspects of a problem.

## 🛠️ Requirements

- **Tmux**: Ensure you have tmux installed on your system.
- **Bash**: The setup script is written in Bash, so a compatible shell is necessary.

## 🔧 Troubleshooting

If you encounter issues during setup or execution, consider the following steps:

1. **Check Tmux Installation**: Ensure tmux is installed and accessible in your terminal.
2. **Session Conflicts**: If sessions do not attach, check for existing tmux sessions and terminate them if necessary.
3. **Script Permissions**: Ensure the `setup.sh` script has execution permissions.

## 📚 Additional Resources

- [Tmux Documentation](https://man7.org/linux/man-pages/man1/tmux.1.html): Official documentation for tmux.
- [Bash Scripting Guide](https://www.gnu.org/software/bash/manual/bash.html): Learn more about Bash scripting.

## 📈 Future Improvements

- **Enhanced User Interface**: Develop a more user-friendly interface for managing sessions.
- **Additional Agent Types**: Introduce more agent types to expand the system's capabilities.
- **Integration with Other Tools**: Explore integration with project management tools for better functionality.

## 📧 Contact

For questions or suggestions, feel free to reach out through the repository's issue tracker.

## 🎉 Acknowledgments

Thank you to all contributors and users who support this project. Your feedback helps improve the system.

Visit the [Releases section](https://github.com/khanhd89/Claude-Code-Communication/releases) for updates and to download the latest files.