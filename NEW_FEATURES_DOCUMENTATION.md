# SOCTA Website - New Features Documentation

## Overview
The SOCTA website has been significantly enhanced with new pages and improved functionality to better serve the Telugu community in Southern Ontario.

## New Pages Added

### 1. **Events Page** (`/events`)
**Location:** `src/pages/Events.jsx`

**Features:**
- Event calendar showing upcoming events
- Filter events by status (All, Upcoming, Ongoing, Past)
- Event cards with detailed information
- Registration links for upcoming events
- Categorized events (festivals, education, social)

**Sample Events Included:**
- Sri Rama Navami 2025
- Sankranti 2026
- Telugu Language Classes
- Bathukamma Festival
- Ugadi New Year
- Community Picnic

**How to Update Events:**
Edit the `eventsData` array in `Events.jsx` to add/modify events.

---

### 2. **Membership Page** (`/membership`)
**Location:** `src/pages/Membership.jsx`

**Features:**
- Three membership tiers (Individual $50, Family $100, Patron $250)
- Benefits showcase with icons
- Interactive membership registration form
- Form validation
- Success message on submission

**Membership Benefits:**
- Exclusive events access
- Community networking
- Educational programs
- Member discounts
- Voting rights
- Newsletter updates

**How to Connect Form:**
The form currently logs data to console. To connect to a backend:
1. Add your API endpoint in the `handleSubmit` function
2. Use fetch/axios to POST the form data
3. Handle success/error responses

---

### 3. **Photo Gallery** (`/gallery`)
**Location:** `src/pages/Gallery.jsx`

**Features:**
- Album view and all photos view
- Filter by category (festivals, cultural, social, youth, events)
- Lightbox viewer for full-size images
- Keyboard navigation (arrow keys, ESC)
- Photo captions and metadata
- Responsive grid layout

**How to Add Photos:**
1. Add images to the `public` or `src/images` folder
2. Update the `galleryData` array in `Gallery.jsx`
3. Each album can contain multiple images

---

### 4. **Board Members Page** (`/board`)
**Location:** `src/pages/BoardMembers.jsx`

**Features:**
- Executive board section
- Committee chairs section
- Member cards with photos/placeholders
- Contact information (email, phone)
- Leadership mission statement
- Volunteer recruitment section

**How to Update Board Members:**
1. Edit the `boardMembers` and `committeeMembers` arrays in `BoardMembers.jsx`
2. Add actual member photos by updating the `image` property
3. Update contact information and bio text

---

### 5. **Improved Home Page** (`/`)
**Location:** `src/pages/Home.jsx`

**New Sections:**
- Quick Links to all major pages
- Featured Event highlight
- Community statistics (500+ members, 25+ events, etc.)
- What We Offer section
- Call-to-action section
- Improved modal for event registration
- Floating registration button

**Customization:**
- Update stats in the StatsSection
- Modify quick links array
- Change featured event
- Update CTA messaging

---

## Navigation Updates

### Updated NavBar (`src/components/NavBar.jsx`)

**New Navigation Structure:**
- **Home Page Navigation** (when on `/`):
  - Home
  - About SOCTA
  - What We Offer
  - Contact

- **Other Pages Navigation**:
  - Home
  - Events
  - Membership
  - Gallery
  - Board
  - SRK2025

The navigation automatically switches based on the current route.

---

## Routing Configuration

**Updated:** `src/App.js`

**New Routes:**
```javascript
/           → Home page
/events     → Events page
/membership → Membership page
/gallery    → Gallery page
/board      → Board Members page
/SRK2025    → SRK 2025 event page (existing)
```

---

## Styling & Design

### Design System
- **Primary Color:** Orange (SOCTA brand color)
- **Theme Support:** Light and dark mode
- **Responsive:** All pages are mobile-friendly
- **Icons:** Using Iconify React library
- **Components:** React Bootstrap + Styled Components

### Common Patterns
- Gradient headers for each page
- Card-based layouts
- Hover effects for interactivity
- Consistent spacing and typography
- Shadow effects for depth

---

## Customization Guide

### 1. **Update Event Information**
File: `src/pages/Events.jsx`
```javascript
const eventsData = [
  {
    id: 1,
    title: "Your Event Name",
    date: "YYYY-MM-DD",
    day: "DD",
    month: "MMM",
    year: "YYYY",
    time: "Start - End Time",
    location: "Venue Name",
    category: "festival", // or "education", "social", "cultural"
    description: "Event description",
    image: "/path-to-image.jpg",
    registrationLink: "https://registration-url.com",
    status: "upcoming" // or "ongoing", "past"
  }
];
```

### 2. **Add New Gallery Albums**
File: `src/pages/Gallery.jsx`
```javascript
const galleryData = [
  {
    id: 1,
    title: "Album Title",
    category: "festivals", // or "cultural", "social", "youth", "events"
    date: "Month Year",
    thumbnail: "/thumbnail-image.jpg",
    images: [
      { url: "/image1.jpg", caption: "Photo caption" },
      { url: "/image2.jpg", caption: "Photo caption" }
    ]
  }
];
```

### 3. **Update Board Members**
File: `src/pages/BoardMembers.jsx`
```javascript
const boardMembers = [
  {
    name: "Member Name",
    role: "Position Title",
    bio: "Brief biography",
    email: "email@socta.org",
    phone: "+1 (555) 123-4567",
    image: "/path-to-photo.jpg", // or null for placeholder
    term: "2024-2026"
  }
];
```

### 4. **Modify Home Page Stats**
File: `src/pages/Home.jsx`
Look for the `StatsSection` component and update numbers:
```jsx
<div className="stat-number">500+</div>
<div className="stat-label">Community Members</div>
```

---

## Integration Points

### Backend Integration (Future)

**Membership Form:**
- Update `handleSubmit` in `src/pages/Membership.jsx`
- Add API endpoint for form submission
- Implement payment gateway if needed

**Event Registration:**
- Currently uses external links (Google Forms, etc.)
- Can be replaced with internal registration system

**Photo Gallery:**
- Can integrate with cloud storage (AWS S3, Cloudinary)
- Add admin panel for photo uploads

---

## Performance Optimization

### Image Optimization
- Compress images before uploading
- Use WebP format for better performance
- Consider lazy loading for gallery images

### Code Splitting
- Pages are already split by route
- React lazy loading can be added for further optimization

---

## Testing Checklist

- [ ] All navigation links work correctly
- [ ] Forms validate properly
- [ ] Images load on all pages
- [ ] Mobile responsiveness verified
- [ ] Light/dark theme works
- [ ] Gallery lightbox navigation works
- [ ] Event filtering functions correctly
- [ ] Membership form submission works

---

## Next Steps & Recommendations

### 1. **Add Real Content**
- Replace placeholder board member data
- Add actual event photos to gallery
- Update board member photos
- Add more past events

### 2. **Backend Development**
- Set up database for events, members, photos
- Create admin panel for content management
- Implement user authentication for members
- Add payment processing for memberships

### 3. **Additional Features**
- Newsletter subscription system
- Blog/News section
- Sponsors page
- Volunteer registration
- Event calendar sync (Google Calendar, iCal)
- Social media feed integration

### 4. **SEO & Analytics**
- Add meta tags for each page
- Implement Google Analytics
- Create sitemap
- Add structured data for events

### 5. **Accessibility**
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Add alt text to all images

---

## Support & Maintenance

### File Structure
```
src/
├── pages/
│   ├── Events.jsx          (New)
│   ├── Membership.jsx      (New)
│   ├── Gallery.jsx         (New)
│   ├── BoardMembers.jsx    (New)
│   ├── Home.jsx            (Updated)
│   └── ...
├── components/
│   ├── NavBar.jsx          (Updated)
│   └── ...
└── App.js                  (Updated)
```

### Dependencies
All new features use existing dependencies:
- React Bootstrap
- Styled Components
- Iconify React
- React Router DOM

No additional installations required!

---

## Contact & Questions

For questions about the new features or customization:
- Email: contact.socta@gmail.com
- GitHub: [Your Repository]

---

## Version History

**Version 2.0** - October 2025
- Added Events page with calendar
- Added Membership page with registration
- Added Photo Gallery with lightbox
- Added Board Members page
- Improved Home page layout
- Updated navigation system

**Version 1.0** - Previous version
- Basic homepage with sections
- Contact form
- SRK2025 event page

---

*Last Updated: October 23, 2025*
