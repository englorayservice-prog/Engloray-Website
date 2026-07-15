# Copilot Instructions for Engloray-Website

## Project structure
- Frontend is a Create React App in `src/` using `react-router-dom` v7.
- `src/App.js` is the single router entrypoint; new pages are added as `<Route path="..." element={<Page/>} />`.
- Main UI lives under `src/Pages/` and reusable widgets under `src/Components/`.
- Styles are imported globally from `src/Styles/*.css` and component-local CSS files alongside components.
- Many page folders are nested under `src/Pages/Sub Pages/` and use paths with spaces, so preserve the exact directory names when editing imports.

## Key frontend conventions
- Use `import { Link } from 'react-router-dom'` or `useNavigate()` for navigation.
- Forms are typically implemented with local `useState` and `useEffect`; validation is manual and inline with the component.
- Animations use `motion/react` and `framer-motion` patterns in page components.
- Most pages call backend APIs directly via `fetch(...)` to `https://localhost:8081/api/...` rather than a shared API client.
- Some contact forms use EmailJS directly (`https://api.emailjs.com/api/v1.0/email/send`), while others use the local .NET API.

## Backend architecture
- Backend is an ASP.NET Core project in `EnglorayPortfolio.API/`.
- Controllers live in `EnglorayPortfolio.API/Controllers/`; routes are `api/[controller]` with `submit` POST endpoints.
- Database access uses Entity Framework Core via `EnglorayPortfolio.API/Data/AppDbContext.cs`.
- Email settings are configured in `EnglorayPortfolio.API/appsettings.json` and consumed via `EmailSettings`.
- Local backend development expects `https://localhost:8081` from the frontend, as set in `EnglorayPortfolio.API/Properties/launchSettings.json`.

## Common backend integration points
- `ButtonCoursesFormController` handles `POST api/ButtonCoursesForm/submit` and saves form data to `ButtonCoursesForms`.
- `ContactForm` frontend fetch calls hit `https://localhost:8081/api/ContactForm`.
- Other endpoints follow the same pattern: `api/WorkshopForm/submit`, `api/CourseForm/submit`, `api/InternshipForm/submit`, etc.

## Build / run commands
- Frontend: `npm install`, `npm start`, `npm run build`, `npm test`.
- Backend: from repo root use `dotnet run --project EnglorayPortfolio.API\EnglorayPortfolio.API.csproj`.
- The frontend expects the backend on `https://localhost:8081` during development.

## What to prioritize for edits
- For routing changes, update only `src/App.js` and the corresponding page component(s).
- For new pages, keep assets and CSS colocated within the page folder and mirror the naming style used in `src/Pages/Sub Pages/`.
- For API work, follow the existing controller conventions and validate user input in the controller before saving.
- Preserve global layout wrappers: `CustomCursor`, `CustomScrollbar`, `Chatbot`, and `ScrollToTop` are rendered in `App.js`.

## Avoid
- Do not assume a global state library exists; there is no Redux or MobX in this repo.
- Do not change the CRA build entrypoints unless the feature explicitly requires it.
- Do not introduce API base URL variables without confirming whether existing code depends on hard-coded `https://localhost:8081` values.

## Helpful files
- `src/App.js` – main route map and page wiring
- `src/index.js` – top-level app bootstrap and global CSS imports
- `EnglorayPortfolio.API/Program.cs` – backend startup, CORS, Swagger, and DB registration
- `EnglorayPortfolio.API/Controllers/` – backend endpoints and email logic
- `EnglorayPortfolio.API/Properties/launchSettings.json` – local backend URL
