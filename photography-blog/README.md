# 📷 Your Photography Blog — Setup Guide

A clean, Edge-inspired photography blog hosted FREE on GitHub Pages.

---

## Step 1: Set Up GitHub (5 minutes)

1. Go to **github.com** and create a free account
2. Click the **+** icon (top right) → **New repository**
3. Name it exactly: `yourusername.github.io`
   (replace `yourusername` with your actual GitHub username)
4. Check **"Add a README file"**
5. Click **Create repository**

---

## Step 2: Upload Your Blog Files (3 minutes)

1. Open your new repository on GitHub
2. Click **"uploading an existing file"** (or drag & drop)
3. Select ALL the files from this folder:
   - `index.html`
   - `posts.js`
   - The entire `assets/` folder
4. Click **Commit changes**

Your site will be live at: `https://yourusername.github.io`

---

## Step 3: Set Up Free Image Hosting on Cloudinary (5 minutes)

GitHub has a 100MB file limit — use Cloudinary for photos (25GB free).

1. Go to **cloudinary.com** → Sign up free
2. Once logged in, click **Media Library**
3. Click **Upload** → choose your photo
4. Click on the uploaded photo → click **Copy URL**
5. The URL looks like:
   `https://res.cloudinary.com/yourname/image/upload/v.../photo.jpg`

---

## Step 4: Customize Your Blog (2 minutes)

Open `posts.js` in a text editor. At the top, edit:

```javascript
const SITE_CONFIG = {
  title: "Ravi Sharma",          // Your name
  tagline: "Moments in Light",   // Your tagline
  about: "Photographer based in Kanpur.",
  instagram: "yourhandle",       // Or leave as ""
  email: "you@email.com",        // Or leave as ""
};
```

---

## Step 5: Add a New Photo Post

Copy this block and paste it at the TOP of the POSTS list in `posts.js`:

```javascript
{
  id: 10,               // ← Just any number, must be unique
  title: "Monsoon Evening",
  date: "2024-06-15",   // ← YYYY-MM-DD format
  caption: "The rain came suddenly, turning the streets into mirrors.",
  image: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/v.../photo.jpg",
  tags: ["rain", "street"],
},
```

Then save the file, go to GitHub, click on `posts.js` → pencil icon (edit) → paste your changes → **Commit changes**.

Your new photo is live within 1–2 minutes! ✅

---

## Tips

- **Best image width**: Upload photos at 1200–1600px wide for quality + speed
- **Cloudinary auto-optimizes**: Add `q_auto,f_auto/` to URLs for faster loading
  Example: `https://res.cloudinary.com/name/image/upload/q_auto,f_auto/v.../photo.jpg`
- **Posts order**: Posts at the TOP of the list appear first on the site
- **No coding needed**: After initial setup, you only ever edit `posts.js`

---

## Folder Structure

```
photography-blog/
├── index.html        ← The website (don't need to edit this)
├── posts.js          ← ADD YOUR PHOTOS HERE
├── README.md         ← This guide
└── assets/
    ├── fonts/        ← Lora + Inter fonts (Edge theme)
    └── images/       ← Theme images
```
