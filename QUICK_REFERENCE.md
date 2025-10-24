# SOCTA Website - Quick Reference Guide

## 🚀 Quick Start

### View the Website
```bash
npm start
```
Opens at: `http://localhost:3001`

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 📄 New Pages Overview

| Page | File | URL | Description |
|------|------|-----|-------------|
| **Events** | `src/pages/Events.jsx` | `/events` | Event calendar & listings |
| **Membership** | `src/pages/Membership.jsx` | `/membership` | Join SOCTA portal |
| **Gallery** | `src/pages/Gallery.jsx` | `/gallery` | Photo albums |
| **Board** | `src/pages/BoardMembers.jsx` | `/board` | Leadership team |
| **Home** | `src/pages/Home.jsx` | `/` | Enhanced landing page |

---

## 🎯 Common Tasks

### 1. Add a New Event
**File:** `src/pages/Events.jsx`
**Location:** Find `eventsData` array (around line 81)

```javascript
{
  id: 7, // Increment ID
  title: "Event Name",
  date: "2025-12-25",
  day: "25",
  month: "Dec",
  year: "2025",
  time: "Time Range",
  location: "Venue",
  category: "festival", // or: education, social, cultural
  description: "Description",
  image: "/image.jpg",
  registrationLink: "https://link.com",
  status: "upcoming" // or: ongoing, past
}
```

### 2. Add Photos to Gallery
**File:** `src/pages/Gallery.jsx`
**Location:** Find `galleryData` array (around line 233)

```javascript
{
  id: 7,
  title: "Album Name",
  category: "festivals", // or: cultural, social, youth, events
  date: "Month Year",
  thumbnail: "/thumb.jpg",
  images: [
    { url: "/photo1.jpg", caption: "Caption" },
    { url: "/photo2.jpg", caption: "Caption" }
  ]
}
```

### 3. Update Board Members
**File:** `src/pages/BoardMembers.jsx`
**Location:** Find `boardMembers` array (around line 150)

```javascript
{
  name: "Name",
  role: "Position",
  bio: "Bio text",
  email: "email@socta.org",
  phone: "+1 (555) 123-4567",
  image: "/photo.jpg", // or null
  term: "2025-2027"
}
```

### 4. Change Home Page Stats
**File:** `src/pages/Home.jsx`
**Location:** Find `StatsSection` (around line 220)

```jsx
<div className="stat-number">500+</div>
<div className="stat-label">Label</div>
```

### 5. Update Featured Event
**File:** `src/pages/Home.jsx`
**Location:** Find `EventHighlight` section (around line 250)

Change:
- Image src
- Event title
- Date and time
- Location
- Description
- Registration link

---

## 🎨 Styling

### Colors
**Primary Color:** Orange (SOCTA brand)
```javascript
var(--primary)
```

**Background Colors:**
- Light theme: `#F5F2E8`
- Dark theme: `#27272A`

### Common Components
- **Container:** Bootstrap container
- **Row/Col:** Bootstrap grid
- **Card:** Bootstrap card
- **Button:** Bootstrap button
- **Icon:** Iconify React

---

## 📱 Navigation Structure

### Home Page (`/`)
- Scrolls to sections:
  - Home
  - About SOCTA
  - What We Offer
  - Contact

### Other Pages
- Links to:
  - Home
  - Events
  - Membership
  - Gallery
  - Board
  - SRK2025

---

## 🔧 Troubleshooting

### Port Already in Use
The app will automatically suggest another port (usually 3001)

### Images Not Showing
- Place images in `public` folder
- Reference as `/image.jpg` (not `./image.jpg`)

### Page Not Found After Deploy
- Ensure using `HashRouter` (already configured)
- URLs will have `#` like: `https://site.com/#/events`

### Form Not Submitting
- Currently logs to console
- Connect to backend API in `handleSubmit` function

---

## 📦 File Structure

```
src/
├── pages/
│   ├── Events.jsx          ← Event calendar & listings
│   ├── Membership.jsx      ← Membership portal
│   ├── Gallery.jsx         ← Photo gallery
│   ├── BoardMembers.jsx    ← Leadership page
│   ├── Home.jsx            ← Landing page (updated)
│   └── ...
├── components/
│   ├── NavBar.jsx          ← Navigation (updated)
│   ├── Hero.jsx
│   ├── Footer.jsx
│   └── ...
└── App.js                  ← Routes (updated)
```

---

## 🌐 URLs Cheat Sheet

```
http://localhost:3001/         → Home
http://localhost:3001/#/events → Events
http://localhost:3001/#/membership → Membership
http://localhost:3001/#/gallery → Gallery
http://localhost:3001/#/board → Board
http://localhost:3001/#/SRK2025 → SRK2025
```

---

## 💾 Data Arrays Quick Find

| What | File | Variable Name | Line |
|------|------|---------------|------|
| Events | `Events.jsx` | `eventsData` | ~81 |
| Gallery | `Gallery.jsx` | `galleryData` | ~233 |
| Board Members | `BoardMembers.jsx` | `boardMembers` | ~150 |
| Committees | `BoardMembers.jsx` | `committeeMembers` | ~175 |
| Quick Links | `Home.jsx` | `quickLinks` | ~120 |
| Membership Tiers | `Membership.jsx` | `membershipTiers` | ~140 |
| Benefits | `Membership.jsx` | `membershipBenefits` | ~115 |

---

## ✅ Pre-Launch Checklist

- [ ] Update board member information
- [ ] Add real photos to gallery
- [ ] Update current events
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Test forms
- [ ] Update contact information
- [ ] Add actual member photos
- [ ] Test theme toggle
- [ ] Verify all images load
- [ ] Test registration links

---

## 🎓 Learning Resources

### React Router
- [React Router Docs](https://reactrouter.com/)

### React Bootstrap
- [React Bootstrap Docs](https://react-bootstrap.github.io/)

### Styled Components
- [Styled Components Docs](https://styled-components.com/)

### Iconify
- [Iconify Icon Sets](https://icon-sets.iconify.design/)

---

## 📞 Need Help?

1. Check `NEW_FEATURES_DOCUMENTATION.md` for detailed info
2. Read `PROJECT_SUMMARY.md` for overview
3. Look at code comments in files
4. Email: contact.socta@gmail.com

---

## 🎉 You're All Set!

Everything is configured and ready to use. Just add your content and deploy!

**Last Updated:** October 23, 2025
