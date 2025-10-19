# HNG Frontend Stage 0 Task - Profile Card


## 📋 Project Overview

This project is a submission for the HNG Frontend Stage 0 task. It features a responsive, accessible profile card showcasing personal information with real-time timestamp display and interactive social links. It is built using HTML, CSS, and JavaScript. 

## ✨ Features

- **Real-time Timestamp**: Displays current time in milliseconds, updating every 100ms
- **Responsive Design**: Adapts seamlessly to different screen sizes (mobile, tablet, desktop)
- **Accessible**: Built with semantic HTML5, ARIA labels, and keyboard navigation support
- **Social Links**: Quick access to Twitter, GitHub, and LinkedIn profiles


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

## 🧪 Testing

The project includes `data-testid` attributes for automated testing:

- `test-profile-card` - Main profile card container
- `test-user-avatar` - Profile avatar image
- `test-user-name` - User's name
- `test-user-bio` - User's biography
- `test-user-time` - Real-time timestamp display
- `test-user-social-links` - Social media links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

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
