# I Know PDF — Free Browser PDF Tools

A free, open-source PDF toolkit that runs entirely in your browser. No servers, no uploads, no cost.

## Features
- **Merge PDF** — Combine multiple PDFs
- **Split PDF** — Split into separate files
- **Delete Pages** — Remove unwanted pages
- **Extract Pages** — Save specific pages
- **Rotate Pages** — Fix page orientation
- **Reorder Pages** — Drag-and-drop rearranging
- **PDF to JPG** — Convert pages to images
- **JPG to PDF** — Images to PDF
- **PDF to Text** — Extract text content
- **PDF to HTML** — Convert to web page
- **Compress PDF** — Reduce file size
- **Protect PDF** — Add password
- **Unlock PDF** — Remove password
- **View PDF** — In-browser reader

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1: Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `pdfmagic` (or any name you like)
3. Make it **Public**
4. Click **Create repository**

### Step 3: Upload the files
**Option A — GitHub Web Interface (easiest):**
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL the project files/folders
3. Click **Commit changes**

**Option B — Git command line:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pdfmagic.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 5: Access your site
Your site will be live at:
`https://YOUR_USERNAME.github.io/pdfmagic/`

(Takes 1-2 minutes to deploy the first time)

## Tech Stack
- [pdf-lib](https://pdf-lib.js.org/) — PDF creation and manipulation
- [PDF.js](https://mozilla.github.io/pdf.js/) — PDF rendering in browser
- Pure HTML, CSS, JavaScript — no build tools needed

## Privacy
All file processing happens entirely in your browser. Files are never uploaded to any server.

## License
MIT License — free to use, modify, and distribute.
