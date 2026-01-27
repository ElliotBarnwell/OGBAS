# GitHub Pages Deployment Instructions for OGB Consulting

## Setup Steps

### 1. Install GitHub Pages Package
```bash
npm install --save-dev gh-pages
```

### 2. Update package.json

Add your GitHub repository URL to package.json (replace YOUR_USERNAME with your GitHub username):

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/ogbas",
  ...
}
```

Add these scripts to the "scripts" section of your package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

### 3. Replace the Default Files

In your `ogbas` directory:
1. Replace the contents of `src/App.js` with the code from `App.jsx`
2. Replace the contents of `src/App.css` with the provided CSS file

### 4. Deploy to GitHub Pages

First, create a GitHub repository:
1. Go to GitHub and create a new repository named `ogbas`
2. Don't initialize with README, .gitignore, or license

Then, in your terminal (from the ogbas directory):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - OGB Consulting website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ogbas.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"

Your site will be live at: `https://YOUR_USERNAME.github.io/ogbas`

## Future Updates

Whenever you make changes to the website:

```bash
git add .
git commit -m "Description of your changes"
git push origin main
npm run deploy
```

The `npm run deploy` command automatically builds and publishes to GitHub Pages.

## Project Structure

```
ogbas/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js          (your landing page component)
│   ├── App.css         (your styles)
│   └── index.js
├── package.json
└── README.md
```

## Notes

- The site is completely static once built - perfect for GitHub Pages
- React compiles to optimized HTML/CSS/JS files
- No server-side code needed
- Fast loading and SEO-friendly
- Mobile responsive design included

## Customization Tips

To customize the website later:
- Edit colors in the `:root` section of App.css
- Modify content directly in App.js
- All styles use CSS variables for easy theming
- Service cards expand/collapse with click interaction
