# Joseph Hassan - Portfolio

Welcome to my portfolio! This repository showcases some of the projects and skills I've developed as a full-stack developer and automation specialist. I’m passionate about crafting intuitive web experiences and leveraging technology to boost operational efficiency.

## 🚀 About Me

I'm Joseph Hassan, a full-stack developer with expertise in Power Platform. I specialize in building responsive web applications, automating workflows, and creating seamless user experiences. I thrive on solving complex problems and turning ideas into practical solutions.

### What I Do:
- Full-stack development (HTML, CSS, JavaScript, Python, Node.js)
- Automation with Power Platform (Power Automate, Power BI, Power Apps)
- UI/UX design and responsive web development
- Custom software solutions for businesses

### What I Believe:
I believe technology should serve people clearly, elegantly, and powerfully. My goal is to make digital experiences more intuitive and impactful.

## 💼 Projects

Here are some of the key projects I’ve worked on:

### 🌦️ Weather App
- **Description:** A weather forecasting application that provides real-time weather data based on user location.
- **Technologies Used:** HTML, CSS, JavaScript, Geolocation API
- [View on GitHub](https://github.com/JHCodeQuest/weather-application)

### Etsy Page Development
- **Description:** Designed and developed a custom Etsy page for a client, optimizing the shop layout for better user engagement and conversion.
- **Technologies Used:** HTML, CSS, JavaScript
- **Client Outcome:** Increased sales and user interaction.

## ⚙️ Skills

- **Languages:** HTML, CSS, JavaScript, Python
- **Frameworks & Tools:** Node.js, React, Power Platform (Power BI, Power Automate, Power Apps), Git
- **UI/UX:** Responsive Design, Web Design Principles
- **Other Skills:** API Integration, GitHub, Low-code Development

## 🎓 Certifications

- Microsoft Certified: Azure Fundamentals

## 📫 Contact

I’m always open to new opportunities and collaborations. Let’s connect!

- LinkedIn: [Joseph Hassan](https://www.linkedin.com/in/joseph-hassan-8679ba17/)

Feel free to explore my projects, give feedback, or reach out if you want to collaborate.

---

*This portfolio is a representation of my work and expertise in the tech industry. It includes examples of projects, skills, and certificates that demonstrate my capabilities as a full-stack developer and automation expert.*

## License

This repository is licensed under the **Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)**.  
You may not use, share, or modify the content without express permission.

For more details, visit:  
[https://creativecommons.org/licenses/by-nd/4.0/](https://creativecommons.org/licenses/by-nd/4.0/)

## 🗂 Repository structure

This repo serves **https://jhcodequest.github.io/** and holds two sites:

| Path | Served at | What it is |
| --- | --- | --- |
| `src/`, `index.html` | `/` | This portfolio — Vite + React + Tailwind |
| `public/services/` | `/services/` | Freelance ICT services site (plain HTML/CSS/JS) |

Anything in `public/` is copied to the build root as-is, which is how
`/services/` is published without a build step of its own.

### Local development

```bash
npm ci
npm run dev     # dev server
npm run build   # production build into dist/
```

### Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. It can also be run manually from the Actions tab.

### History

This repo is the result of merging the former `JHPortfolio` repository in with
its full commit history. `JHPortfolio` is retained only to redirect old
`/JHPortfolio/` links here. The separate `jhcodequest` repo is unrelated — it is
the GitHub profile README.
