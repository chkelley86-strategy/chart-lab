# Chart Lab

My workspace for learning d3 and building a small chart library that follows a design system. It's part of a 4-month plan to test a data viz design-systems studio.

## Week 1: Foundations (about 5 hours)

| Session | Time | Do this |
| --- | --- | --- |
| 1 · Weekday evening | 1.5 hrs | Set up your tools and publish this repo to GitHub (steps below) |
| 2 · Weekday evening | 1.5 hrs | Lesson 01 · Selections, then exercise 1 and 2 of Lesson 02 |
| 3 · Weekend | 2 hrs | Finish Lesson 02 · Data joins and Lesson 03 · SVG basics |

- [ ] Tools installed: VS Code, Git, Node.js
- [ ] Repo published to GitHub
- [ ] Lesson 01 · Selections
- [ ] Lesson 02 · Data joins
- [ ] Lesson 03 · SVG basics (your first hand-built bar chart)
- [ ] Wrote a few lines in `LEARNING-LOG.md`
- [ ] Committed and pushed at least once per session

Try each exercise yourself before you open the solution. Getting stuck for 10 minutes is part of learning it. After that, check the solution page linked at the top of each lesson.

## One-time setup on your Mac

### 1. Install the tools

1. **VS Code:** download it from [code.visualstudio.com](https://code.visualstudio.com/) and drag it into Applications.
2. **Git:** open the Terminal app and run `git --version`. If macOS offers to install the command line developer tools, click Install and wait for it to finish.
3. **Node.js:** download the **LTS** installer from [nodejs.org](https://nodejs.org/) and run it. Then check in Terminal:
   ```bash
   node -v
   npm -v
   ```
   Both should print a version number.

### 2. Open this project

1. In VS Code, choose **File → Open Folder…** and pick the `chart-lab` folder.
2. Open a terminal inside VS Code with **Terminal → New Terminal**.
3. Install d3 and Vite (only needed once):
   ```bash
   npm install
   ```
4. Start the local preview server:
   ```bash
   npm run dev
   ```
5. Open the link it prints (usually http://localhost:5173). The page reloads every time you save a file. Press `Ctrl + C` in the terminal to stop the server.

### 3. Publish to your GitHub account

1. In VS Code, click the **Accounts** icon (bottom-left) and choose **Sign in with GitHub**. Approve it in the browser.
2. Open the **Source Control** panel (the branch icon on the left, or `Ctrl + Shift + G`).
3. Click **Publish to GitHub**. Choose a **public** repository named `chart-lab` (public repos double as your portfolio).
4. Check that it's there at `https://github.com/<your-username>/chart-lab`.

## Each session after that

1. Open the folder in VS Code and run `npm run dev`.
2. Work through the lesson's `exercise.js`.
3. Save your progress to GitHub. In **Source Control**, write a short message (for example, "Lesson 02: data joins exercises 1–2"), click **Commit**, then click **Sync Changes**.

## Project layout

```
chart-lab/
├── index.html              ← lesson menu
├── styles.css              ← shared styles (become design tokens in week 4)
├── lessons/
│   ├── 01-selections/      ← index.html + exercise.js (yours) + solution.html/js
│   ├── 02-data-joins/
│   └── 03-svg-basics/
├── LEARNING-LOG.md         ← what you learned and where you got stuck
├── package.json            ← project dependencies (d3, vite)
└── vite.config.js          ← preview and build settings
```

## Reference

- [d3 documentation](https://d3js.org/): see d3-selection for this week's material
- [MDN SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial): basic shapes and positions
