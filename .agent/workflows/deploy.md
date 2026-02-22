---
description: How to deploy the Anonymium AI web application to GitHub Pages
---

This project is configured to be deployed to GitHub Pages using the `gh-pages` package.

### Prerequisites
1. Ensure your changes are committed and pushed to the main branch.
2. Verify that the `homepage` field in `package.json` points to your correct GitHub Pages URL.

### Deployment Steps

1. **Build and Deploy**
   Run the following command to build the project and deploy it to the `gh-pages` branch:
   // turbo
   ```bash
   npm run deploy
   ```

2. **Verify Deployment**
   Once the command finishes, your site should be live at the URL specified in the `homepage` field of `package.json`:
   [https://I-driod.github.io/anomynuim-web/](https://I-driod.github.io/anomynuim-web/)

---
> [!NOTE]
> The `npm run deploy` command automatically runs `npm run build` (via `predeploy`) before pushing the `dist` folder to GitHub.
