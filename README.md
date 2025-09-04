# Zincop Labs Interactive Platform

Zincop Labs is an interactive **React** application that allows users to explore programming labs, track their progress, and access lab exercises through a secure, password-protected login. The platform combines responsive UI design, animations, timers, and routing to provide an engaging learning experience.

## Features

* **Home Page**: Browse a grid of programming skills with interactive icons. Clicking a skill displays a popup with lab information and redirects to the login page. Includes category filtering (Programming, Design, DevOps).
* **Login Page**: Secure access to labs with a password (`Karthik`). Smooth animations and fingerprint login icon enhance user experience.
* **Lab Page**: Timer-based lab sessions with a 10-minute countdown. Auto-redirects to the home page when time expires. Manual exit button available.
* **Responsive UI**: Modern design using CSS Grid, Flexbox, and React Icons for a visually appealing interface.

## Technologies

* React (Functional Components & Hooks)
* React Router v6 (Page navigation)
* React Icons (Skill and login icons)
* CSS / Flexbox / Grid (Layout and animations)
* Yarn (Package management)

## Project Structure

```
zincop-labs/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── labPage.js
│   │   ├── loginPage.js
│   │   └── mainPage.js
│   ├── App.js
│   ├── App.css
│   └── mainPage.css
├── package.json
├── yarn.lock
└── README.md
```

## Installation

```bash
git clone https://github.com/your-username/zincop-labs.git
cd zincop-labs
yarn install
yarn start
```

Access the app at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the home page to view available skills.
2. Click a skill to see a popup with lab path and navigate to the login page.
3. Enter password `Karthik` to unlock the lab.
4. Lab page displays a countdown timer; exit early using the "Exit Lab" button if needed.

## License

MIT License

**Notes**: This project uses Yarn. The password is hardcoded for demonstration purposes.
