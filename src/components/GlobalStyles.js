import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Import modern fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap');

/*
=============== 
Variables
===============
*/
:root {
  /* Telugu Cultural Colors */
  --primary-light: #FFD700; /* Gold/Yellow - Auspicious color */
  --primary: #FF6B35; /* Vibrant Orange - Traditional Telugu color */
  --primary-dark: #C62828; /* Deep Red - Sacred color */
  --secondary: #4CAF50; /* Green - Prosperity */
  --accent-gold: #FFD700; /* Gold - Traditional */
  --accent-red: #D32F2F; /* Red - Sacred/Festival color */
  --border: 1px solid #FF6B35;
  --transition: all 0.3s linear;
  --nav-height: 80px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
  
  /* Cultural gradient combinations */
  --gradient-primary: linear-gradient(135deg, #FF6B35 0%, #FFD700 100%);
  --gradient-festival: linear-gradient(135deg, #D32F2F 0%, #FF6B35 100%);
  --gradient-prosperity: linear-gradient(135deg, #4CAF50 0%, #FFD700 100%);
}

/*
=============== 
Global Styles
===============
*/
* {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

body {
  background: #FFFFFF;
  color: #2C1810;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

a:hover {
  cursor: pointer;
}

.navbar {
  border-bottom: var(--border);
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

.title {
    font-family: "Permanent Marker";
}

.card {
  height: var(--card-height);
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

.page-item.active .page-link {
    background-color: var(--primary);
    border-color: var(--primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }
  .form-group {
      max-width: 750px;
    }
}

 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
  }
`;

export default GlobalStyles;
