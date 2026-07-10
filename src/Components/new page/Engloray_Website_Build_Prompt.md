# **Engloray Learning Company - Single Page Website Build Prompt**

## **Project Overview**
Create an extraordinary, elegant, modern single-page website in **React.js** for "Engloray Learning Company." The website must feature smooth animations, 3D elements, interactive components, and a sophisticated design that stands out from ordinary educational websites.

---

## **1. NAVBAR & HEADER**
- **Position:** Fixed at the top with a subtle backdrop blur effect
- **Logo:** Engloray Learning Company logo on the left side (use a modern, tech-forward design with gradients—blues, purples, or teals)
- **Navigation Links:** Home, About, Services, Contact (styled with hover effects that glow or change color)
- **Styling:** Semi-transparent dark background with gradient accent line at the bottom. Links should have smooth transitions on hover.

---

## **2. HERO SECTION - 5-SLIDE CAROUSEL**
- **Slides:** 5 unique slides, each with:
  - A compelling slogan or feature about Engloray
  - Background with gradient overlays or animated patterns
  - Example slogans: "Transform Your Skills," "Learn From Industry Experts," "Build Your Future," "Master New Technologies," "Join 1000+ Successful Graduates"
- **Navigation:** Left and right arrow buttons (styled with icons, positioned on the sides with hover effects)
- **Auto-Transition:** Optional: Auto-advance every 5 seconds with pause on hover
- **Animations:** Fade-in/slide-in effects for text and content on each slide
- **Responsiveness:** Full-width, at least 600px height

---

## **3. BEFORE & AFTER 3D SKILL PROGRESSION**
- **Style:** Interactive before-and-after swipe/slider comparison
- **Left Side (Before):** 3D model/character/graph showing low skill level (e.g., a small bar chart, a character in a learning pose, or an abstract representation of basic skills)
- **Right Side (After):** Same 3D model/character showing significant growth and advancement (tall bar chart, leveled-up character, advanced representation)
- **Interaction:** Horizontal drag slider in the middle to reveal before/after. The slider should have a smooth, glowing effect.
- **3D Library:** Use React Three Fiber (Three.js) to render 3D models/graphics. Alternatively, use Lottie animations for smooth, professional 3D-style transitions.
- **Text Overlay:** "Before Joining Engloray" on left, "After Finishing Courses" on right with key metrics (e.g., "Skills: 20% → 95%")

---

## **4. COURSES & INTERNSHIPS SECTION**
- **Layout:** Two-column responsive grid
  - **Left Column - Courses (5 boxes):**
    1. Graphic Designing
    2. Full Stack Java
    3. UI/UX
    4. Drawing
    5. Digital Marketing
    - **Design:** Small, clickable cards with icons, course names, brief description (1-2 lines), and a subtle hover lift effect
    - **Styling:** Dark background with colored borders or gradient accents per course
  
  - **Right Column - Internships (7 boxes):**
    1. Graphic Designing
    2. Website Development
    3. UI/UX
    4. Software Development
    5. Sales Executive
    6. Training Mentor
    7. Business Development Management
    - **Design:** Similar card-based layout with internship icons and descriptions
    - **Styling:** Distinct color scheme from courses (e.g., lighter accent colors)

---

## **5. MENTOR CARDS SECTION - HORIZONTALLY SCROLLABLE**
- **Layout:** Horizontal scrollable carousel (use scroll-snap or a custom carousel library)
- **Card Design:** Each mentor card should display:
  - **Image:** Circular or rounded-square mentor photo (high quality, professional)
  - **Name:** Bold, clear
  - **Domain:** Randomly chosen from the 5 courses (displayed as a badge or tag)
  - **Brief Description:** 2-3 lines about their expertise and teaching approach
  - **Icon/Badge:** Specialization icon
- **Styling:** Gradient background, smooth shadows, card hover effects (scale up, shadow expand)
- **Scrolling:** Smooth horizontal scroll with visible scroll indicators or arrow buttons to navigate left/right
- **Number of Mentors:** 6-8 mentors (create realistic mentor data)

---

## **6. INTERNSHIPS INTERACTIVE SECTION**
- **Left Side - Internship List (Creative Shape):**
  - Display all 7 internships in an **artistic, non-standard layout** (e.g., circular arrangement, hexagonal tiles, staggered cards, or an organic blob shape)
  - Each internship should be **clickable**
  - On hover: Highlight/glow effect
  - **Styling:** Use gradients, subtle animations, and modern fonts
  
- **Right Side - 3D Display & Description:**
  - When an internship is clicked, display:
    - **3D Model/Illustration:** A professional 3D representation or animated illustration of that internship role (e.g., a 3D character/avatar in that role)
    - **Title & Description:** Full details about the internship (duration, responsibilities, eligibility, benefits)
    - **Smooth Transition:** 3D model should rotate/animate on load or when switched
  - **Styling:** Modern, sleek design with a dark theme and accent color highlights

---

## **7. FEEDBACK/TESTIMONIALS SECTION - AUTO-SCROLLING CAROUSEL**
- **Style:** Tweet-style horizontal loop carousel
- **Content:** 6-7 student testimonials/feedback quotes
- **Features:**
  - Each feedback card displays: Student name, profile picture (small), feedback text, star rating
  - **Auto-Scroll:** Continuously scrolls horizontally (carousel loop)
  - **Infinite Loop:** When the last feedback reaches the left edge, it wraps around smoothly to the beginning
  - **Manual Control:** Optional pause on hover; clickable navigation dots
- **Styling:** Modern card design with a quote icon, shadows, and smooth gradient backgrounds
- **Typography:** Elegant, readable font for quotes

---

## **8. CALL-TO-ACTION SECTION**
- **"Seats Are Available" Box:**
  - A prominent, eye-catching container with:
    - Bold headline: "Seats Are Available"
    - Inspiring slogan: (e.g., "Don't Miss Out on Your Future!", "Limited Spots Left - Enroll Now!")
    - **Apply Button:** Large, animated button with hover effects (glow, color change, slight scale increase)
    - **Button Styling:** Gradient background, rounded corners, smooth transitions
  - **Styling:** Use contrasting colors to make it stand out (e.g., gold, neon colors, or bright accent)

---

## **9. ACHIEVEMENTS/STATS SECTION**
- **Content:** Highlight three key achievements:
  1. "Quality Mentors" - Brief description of mentor expertise
  2. "Excellent Facilities" - Description of infrastructure, labs, resources
  3. "1000+ Successful Students" - Highlight student success stories and placements
- **Layout:** Three equal columns or a horizontal row of cards
- **Styling:** Icons + text, subtle animations (count-up numbers if showing statistics), gradient backgrounds
- **Typography:** Large, bold numbers with supporting descriptions

---

## **10. FOOTER**
- **Content:**
  - Company name and tagline
  - Contact details (email, phone, address) - *User will edit these*
  - Social media links (LinkedIn, Twitter, Instagram, YouTube)
  - Quick links (Courses, Internships, About, Contact)
  - Copyright notice
- **Styling:** Dark background with accent colors, clean layout, proper spacing
- **Responsive:** Mobile-friendly with stacked layout on smaller screens

---

## **DESIGN & STYLING REQUIREMENTS**

### **Color Palette:**
- **Primary:** Deep blues, purples, or teals (modern tech aesthetic)
- **Accent:** Gold, neon pink, cyan, or bright orange for CTAs and highlights
- **Background:** Dark theme (charcoal, dark blue) with gradient overlays
- **Text:** White or light gray for contrast

### **Typography:**
- **Headers:** Bold, modern sans-serif (e.g., Poppins, Montserrat, Inter)
- **Body:** Clean, readable sans-serif (e.g., Segoe UI, Open Sans)
- **Font Sizes:** Responsive and scalable

### **Effects & Animations:**
- Smooth fade-in/slide-in animations on page load
- Hover effects on all interactive elements (buttons, cards, links)
- Parallax scrolling effects (optional but recommended)
- Gradient animations/transitions
- Glowing/shadow effects on interactive elements
- Smooth scroll behavior throughout the page

### **3D Elements:**
- Use **React Three Fiber** for 3D models in the before-and-after section and internship display
- Alternative: High-quality **Lottie animations** for 3D-style visuals
- Ensure 3D elements are performant and load smoothly

### **Responsiveness:**
- Mobile-first design approach
- Responsive breakpoints: mobile (< 768px), tablet (768px - 1024px), desktop (> 1024px)
- Hamburger menu for navbar on mobile
- Stacked layouts for multi-column sections on mobile

---

## **TECHNICAL REQUIREMENTS**

### **Framework & Libraries:**
- **React.js** (Latest version with hooks)
- **React Router** (for smooth navigation within the single page)
- **React Three Fiber** or **Three.js** (for 3D graphics)
- **Framer Motion** or **React Spring** (for animations)
- **Tailwind CSS** or **Styled Components** (for styling)
- **Lottie** (for animated illustrations)
- **SwiperJS** or **Embla Carousel** (for carousels/sliders)
- **Lucide React** or **React Icons** (for icons)

### **Performance:**
- Optimize images (use WebP format, lazy loading)
- Code splitting for better load times
- Minimize re-renders using React.memo and useMemo
- Ensure smooth animations (60 FPS)

### **Accessibility:**
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Alt text for images

---

## **ADDITIONAL FEATURES (OPTIONAL BUT RECOMMENDED)**

1. **Smooth Scroll Navigation:** Clicking navbar links smoothly scrolls to corresponding sections
2. **Dark Mode Toggle:** (Optional) Allow users to switch between dark and light themes
3. **Lazy Loading:** Images and 3D models load as the user scrolls
4. **Form Validation:** Apply button leads to a form with proper validation
5. **Analytics Integration:** Track user interactions
6. **SEO Optimization:** Meta tags, structured data

---

## **DELIVERABLES**

1. Fully functional React.js application
2. All sections as described above
3. Responsive design across all devices
4. Smooth animations and transitions
5. 3D elements integrated seamlessly
6. Clean, commented code
7. Deployed on a hosting platform (Vercel, Netlify, or similar)

---

## **TONE & VISION**

The website should feel:
- **Modern & Cutting-Edge:** Use contemporary design trends
- **Professional Yet Creative:** Balance elegance with innovation
- **Inviting & Motivational:** Inspire users to join the courses
- **Smooth & Interactive:** Every interaction should feel polished
- **Sophisticated:** Avoid clichés; make it unique and memorable

---

## **HOW TO USE THIS PROMPT**

1. **Copy this entire prompt** and paste it into ChatGPT, Claude, Gemini, or any AI service you prefer
2. **Add a follow-up request:** 
   > "Please provide the complete React.js code for this website. Include all components, styling, and necessary dependencies. Ensure the code is production-ready, well-documented, and optimized."

3. **Iterate:** If you want specific changes, ask for adjustments:
   - "Change the primary color to neon green"
   - "Add more mentors to the carousel"
   - "Make the before-and-after section more interactive"
   - "Adjust the internship layout to be circular instead of hexagonal"

4. **Get the Code:** The AI will provide you with:
   - Complete React component structure
   - All necessary imports and dependencies
   - Styling (CSS, Tailwind, or Styled Components)
   - Instructions for setup and deployment

---

## **NOTES FOR DEVELOPERS**

- This prompt is detailed enough to guide an AI to create exactly what you envision
- It leaves room for creative implementation
- All measurements and design choices can be adjusted based on preference
- The 3D elements should be performant and not slow down the website
- Test the website on mobile devices to ensure responsiveness
- Consider accessibility features for all users
- Optimize images before uploading to reduce load times

---

**Good luck with your Engloray Learning Company website! 🚀**
