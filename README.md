# HNG Frontend Stage 0 & Stage 1 Tasks


## 📋 Project Overview

This repository contains submissions for both **HNG Frontend Stage 0** and **Stage 1** tasks.

### Stage 0: Profile Card
**Target:** Create a personal profile card with real-time data display and accessibility features.

**Overview:** A responsive profile card showcasing personal information with live timestamp updates, social links, and keyboard navigation support.

### Stage 1: Multi-Page Application
**Target:** Build a complete multi-page website with form validation and semantic HTML structure.

**Overview:** An expanded application featuring Home, Contact, and About pages with client-side form validation, accessibility compliance, and responsive design. 


## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional but recommended)

### Local Setup

#### Option 1: Direct File Opening (Quick Start)

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/charlzx/hng-stage-0.git
   cd hng-stage-0/
   ```

2. **Open in browser**
   - Simply double-click `index.html`
   - Or right-click `index.html` and select "Open with" → Your browser

#### Option 2: Using Python HTTP Server (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/charlzx/hng-stage-0.git
   cd hng-stage-0/
   ```

2. **Start a local server**
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 420px (Compact layout)
- **Small tablets**: 420px - 599px (Default layout)
- **Tablets**: 600px - 959px (Side-by-side header, grid lists)
- **Desktop**: ≥ 960px (Wider card, optimized spacing)

## ♿ Accessibility Features

- Semantic HTML5 elements (`article`, `header`, `nav`, `section`, `figure`)
- ARIA labels and landmarks
- Screen reader-friendly text (`.sr-only` class)
- Keyboard navigation support
- Focus indicators for interactive elements
- Proper color contrast ratios
- Reduced motion support for accessibility preferences

## 🎨 Customization

### Update Profile Information

Edit `index.html`:
- **Name**: Change text in `.profile-name`
- **Bio**: Update `.profile-bio` content
- **Social Links**: Modify `href` attributes in `.social-links`
- **Hobbies/Dislikes**: Update list items in respective sections

### Change Avatar

1. **Replace** `assets/image.png` with your image
2. **Or click** on the avatar when the page is loaded to upload a new one

### Modify Colors

Edit `styles.css`:
- **Primary color**: Search for `#5563f6` (blue)
- **Accent color**: Search for `#3945c6` (dark blue)
- **Background**: Modify the `radial-gradient` in `body`
- **Text color**: Update `#0a0a0a` (near black)

### Adjust Time Update Interval

Edit `script.js`:
```javascript
const TIME_UPDATE_INTERVAL = 100; // Change this value (in milliseconds)
```

___
___

## 🔗 HNG Resources

Learn more about the HNG Internship:
- [HNG Internship](https://hng.tech/internship)
- [HNG Premium](https://hng.tech/premium)
- [Hire Top Developers](https://hng.tech/hire)
