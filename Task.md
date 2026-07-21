Mobile Responsive Audit & Fix — Engloray Website
Goal
Perform a senior-developer-level, systematic mobile responsiveness overhaul across every page and component of the Engloray website. The site currently has a mix of incomplete media queries, hardcoded pixel widths, and overflow issues that break the layout on phones (320px–767px).

Audit Findings
After reviewing all CSS/JSX files, here are the confirmed breakage categories and affected files:

Critical Issues Found
#	Issue	Affected Files
1	About section – hero-description-p has min-width: 990px causing horizontal overflow on mobile	About.css
2	About section – heading-inline-row has white-space: nowrap causing text overflow at small widths	About.css
3	About section – 435px breakpoint exists but 436px–767px is uncovered (gap in responsive coverage)	About.css
4	Tagline – tagline-bottom-text is absolutely positioned and bleeds below the section on many screen sizes	Tagline.css
5	Tagline – tagline-title at 4.5rem breaks to tiny on very small screens without a 320px floor	Tagline.css
6	CoreServices carousel – slide-wrapper uses fixed width: 500px inside a 100vw container causing visual clipping	CoreServices.css
7	Footer – footer-main-grid is repeat(5, 1fr) with no 1-col fallback for < 480px covered by only 2-col	Footer.css ✓ (already fixed)
8	TopNavbar – At 768px the mobile menu appears but overlaps the Navbar — z-index mismatch	TopNavbar.css
9	VisionMission – Cards row uses fixed min-height without mobile stack fallback	VisionMission.css
10	BusinessBoost section – needs mobile audit	BusinessBoost dir
11	Testimonials – complex carousel likely has mobile issues	Testimonials dir
12	OtherSectionCarousel – possible overflow at mobile	OtherSectionCarousel dir
13	DoubleMarquees – overflowing text on small screens	DoubleMarquees dir
14	MarqueeBrands – logo strip overflow on mobile	MarqueeBrands dir
15	TechGroup / TechLearning page sections – each section has its own CSS files that need mobile audits	Multiple
16	Sub pages (50+) – service, intern, course pages all use fixed widths that need media queries	Sub Pages dir
17	SearchBar – min-width: 160px in navbar wraps poorly on small screens	Navbar.css
18	Navbar dropdown – nav-explore-menu can overflow viewport on small screens	Navbar.css
Strategy & Breakpoints
A mobile-first approach using 5 breakpoints:

Name	Range
xs	320px–479px
sm	480px–767px
md	768px–1023px
lg	1024px–1279px
xl	1280px+
Key design rules enforced:

No element should exceed 100vw
max-width: 100% on all images/videos
All grids collapse to 1-column on mobile
Text uses clamp() for fluid scaling
Padding uses min() for safe mobile spacing
overflow-x: hidden on root containers
Proposed Changes (Grouped by Section)
1. Global Mobile Reset — src/index.css
[MODIFY] 
index.css
Add global overflow prevention and safe viewport meta:

html, body { overflow-x: hidden; max-width: 100vw; }
img, video { max-width: 100%; height: auto; }
* { box-sizing: border-box; }
Add CSS variable --mobile-pad: clamp(16px, 4vw, 24px) for consistent mobile padding
2. Homepage Components
[MODIFY] 
Tagline.css
Replace font-size: 4.5rem with clamp(2rem, 8vw, 4.5rem) for tagline-title
Replace font-size: 1.9rem with clamp(1rem, 4vw, 1.9rem) for tagline-subtitle
Fix tagline-bottom-text absolute positioning on xs screens — use relative positioning on mobile
Ensure tagline-container padding is safe on 320px devices
[MODIFY] 
About.css
Remove min-width: 990px from .hero-description-p — replace with width: 100%; max-width: 990px;
Remove white-space: nowrap from .heading-inline-row — allow text wrapping on mobile
Add @media (max-width: 768px) block with single-column grid layout
Fix gap between 435px breakpoint and 768px breakpoint
[MODIFY] 
VisionMission.css
Stack .cards-row to flex-direction: column on mobile
Reduce card min-height from fixed to min(400px, 80vw) on mobile
[MODIFY] 
CoreServices.css
Fix slide-wrapper overflow: replace fixed width: 500px with responsive calc
Ensure carousel dots are tap-friendly (min 44px touch target)
Add touch-action: pan-y for swipe support
[MODIFY] [BusinessBoost/BusinessBoost.css] — audit and fix
Review and add mobile stacking for any grid/flex layouts
[MODIFY] [Testimonials CSS] — audit and fix
Review and add mobile stacking
[MODIFY] [OtherSectionCarousel CSS] — audit and fix
[MODIFY] [DoubleMarquees CSS] — audit and fix
[MODIFY] [MarqueeBrands CSS] — audit and fix
3. Navigation Components
[MODIFY] 
Navbar.css
Fix SearchBar min-width in navbar to be responsive
Fix nav-explore-menu dropdown to stay within viewport
Ensure mobile menu slide-in doesn't overflow viewport width
[MODIFY] 
TopNavbar.css
Fix z-index stacking so mobile overlay doesn't block navbar
Ensure topnav-items mobile dropdown closes cleanly
4. Footer
[MODIFY] 
Footer.css
Verify all grid breakpoints (already partially done)
Add word-break: break-word for long text on mobile
5. TechGroup Section
[MODIFY] HeroSection.css, ServicesSection.css, PortfolioSection.css, TestimonialsSection.css, InternshipProgram.css, BenifitsFooter.css, About.css (TechGroup)
Each needs mobile stacking audit
Fix hardcoded pixel widths in grids
Ensure all images are max-width: 100%
Add proper @media (max-width: 768px) and @media (max-width: 480px) blocks
6. TechLearning Section
[MODIFY] TechLearningHero.css, Courses.css, LearningFeatures.css, LearningExperience.css, StudentTestimonials.css, TechCta.css, LearningFooter.css, NavigationBar.css
Each needs mobile stacking audit
Remove or fix zoom property usage (causes custom cursor misalignment on mobile)
Add touch-friendly button/tap targets (min 44×44px)
7. Sub Pages (Priority order)
Sub pages that are most commonly visited and most likely broken:

HIGH PRIORITY:
[MODIFY] BrandingAndDesigning.css / AppWebDev.css / UiUxPage.css
[MODIFY] GraphicDesignCourse.css / UiuxDesignCourse.css
[MODIFY] OurStoryPage.css / OurTeamPage.css
[MODIFY] CareersPage.css / ContactPage.css
[MODIFY] RaymartPage.css / RayMartPageTwo.css / RayMartPageThree.css
STANDARD PRIORITY:
All internship pages CSS
All service-detail pages CSS
All course pages CSS
Common fixes applied to all sub pages:

grid-template-columns - collapse to 1-col at 768px, add 2-col at 480px
Font sizes - use clamp() for headings
Hero sections - stack text+image to column
Padding - use min() for safe padding
CTA buttons - full width on mobile, stacked
Approach to Implementation
Given the huge scope (80+ CSS files), I'll apply fixes systematically in batches:

Batch 1 — Core Foundation (global CSS + homepage) Batch 2 — Navigation Batch 3 — TechGroup Section Batch 4 — TechLearning Section Batch 5 — Sub Pages (high priority) Batch 6 — Sub Pages (remaining)

Verification Plan
Manual Verification
After each batch:

Open browser DevTools → Device Toolbar
Test at: 320px, 375px, 425px, 768px, 1024px
Check for horizontal scroll (none acceptable)
Check all text is readable (min 14px rendered size)
Check all buttons are tappable (min 44px)
Check images don't overflow containers
Key Metrics
No overflow-x scroll on any page
All grid layouts collapse properly on mobile
Font sizes never fall below 14px on mobile
Touch targets are minimum 44×44px
IMPORTANT

Due to the massive scale (80+ files), this will be executed in prioritized batches, starting with the most visible/critical paths. Each batch will be complete and working before moving to the next.

NOTE

The custom-cursor-overrides.css already handles cursor restoration on touch devices (pointer: coarse). The zoom properties found in TechLearning section CSS files (zoom: 1.32) are responsiveness workarounds — these will be evaluated but not blindly removed.