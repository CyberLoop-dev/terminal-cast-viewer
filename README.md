<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0f766e&height=170&section=header&text=Terminal%20Cast%20Viewer&fontColor=ffffff&fontSize=36" alt="Terminal Cast Viewer banner"/></p>
<p align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=2800&pause=900&center=true&vCenter=true&width=620&lines=Replay%20terminal%20recordings%20locally%3BBrowse%20asciinema%20v2%20cast%20files%3BNo%20upload%2C%20no%20account" alt="Typing title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/terminal-cast-viewer?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/terminal-cast-viewer?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/terminal-cast-viewer?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/terminal-cast-viewer?style=flat-square" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" width="520" alt="Terminal Cast Viewer illustration"/></p>

## 🧭 Overview
Terminal Cast Viewer is an offline-first browser app for inspecting and replaying local asciinema v2 recordings. Your `.cast` file stays in your browser.

## ✨ Features
- 🎞️ Load asciinema v2 JSONL recordings from your device
- ⏯️ Play, pause, restart, and change playback speed
- 🔎 Search visible terminal output
- 🔒 Process recordings locally; nothing is uploaded

## 🖥️ Demo
No hosted demo is provided. Run the project locally using the quick-start instructions.

## 🚀 Quick Start
Requires Node.js 18 or newer.

```bash
npm start
```

Open http://127.0.0.1:4173 and choose a `.cast` file. Run checks with `npm test`.

## 🧰 Tech Stack
- Node.js built-in HTTP server
- Vanilla JavaScript modules and browser File API
- Node.js built-in test runner

## 🗂️ Folder Structure
```text
.
├── assets/mark.svg
├── tests/cast.test.js
├── app.js
├── cast.js
├── index.html
├── package.json
├── server.js
└── style.css
```

## 🗺️ Roadmap
- [ ] Add more real-world fixtures and edge-case examples
- [ ] Improve reporting and usability based on feedback
- [ ] Keep the core workflow lightweight and local-first

## 🤝 Contributing
Issues and focused pull requests are welcome. Please add or update tests when changing behavior.

## 📄 License
MIT License. See [LICENSE](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0f172a&height=100&section=footer" alt="Animated wave footer"/></p>
