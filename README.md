# Wendyl Ziv S. Arellano — Personal CV

A responsive personal curriculum vitae and portfolio for Wendyl Ziv S. Arellano, a fourth-year BS Information Technology student at Davao del Norte State College, BSIT 4B, IT415.

## Links

- GitHub repository: https://github.com/Boytooo/wendyl-personal-cv-2026
- Live Vercel website: Add the actual production URL here after deployment.

## Technologies

HTML5, CSS3, and vanilla JavaScript. No framework, package installation, build step, database, or paid services are required. Google Fonts supplies DM Sans, DM Mono, and Instrument Serif; local fallback fonts keep the page usable offline.

## Features

- Profile, career objective, basic information, education, and skills.
- Three project previews: SmartAqua Pro (ongoing), this CV website, and the Student Information API specification. SmartAqua Pro uses a custom title cover, not a screenshot of its application.
- Academic experience and learning milestones, without invented employment or certifications.
- Working GitHub links, email links, email copying, and downloadable API specification.
- Mobile navigation with Escape-to-close, project filters, and expandable API details.
- Scroll reveals, hover states, smooth anchor navigation, and reduced-motion support.
- Semantic landmarks, keyboard focus indicators, skip link, live status messages, and print styling.

## Files

- `index.html`: content, navigation, project cards, and contact information.
- `style.css`: visual design, responsive layouts, animation, and print rules.
- `script.js`: menu, filters, details, clipboard handling, and scroll reveals.
- `assets/favicon.svg`: custom initials favicon.
- `assets/profile.png`: supplied personal profile photograph, used in the hero and CV preview.
- `assets/student-api.yaml`: completed OpenAPI coursework specification.
- `vercel.json`: static website settings and basic response headers.

## Preview locally

Open `index.html` directly in a browser. For a local server, run `python -m http.server 4173` from this folder, then open http://localhost:4173. Email copying needs HTTPS or localhost and falls back to displaying the email if clipboard access is unavailable.

## Personalize before final submission

The name, existing skills, email, and education were retained from the existing repository. Review all text for accuracy, especially newly written introductory text and learning interests.

1. Your supplied profile photograph is included in `assets/profile.png`. Its framing is controlled by `.profile-photo` in `style.css`; the original image is preserved.
2. Confirm education dates and expand MCPI to its full official name if desired.
3. Add your city if you want it public. Panabo City currently identifies school locations, not a claimed home address.
4. Add a real LinkedIn profile and any other social accounts you want public. These were omitted because no URLs were provided.
5. Add verified awards, certifications, internships, and other projects if applicable. None were invented.
6. Confirm the listed developing technical skills accurately represent your learning. The API project is documentation, not a working backend.
7. SmartAqua Pro is an ongoing IoT-based aquarium monitoring and automation project. Its description and repository link were supplied by the student: https://github.com/gehleegian/smart-aqua-pro-v1. Specific hardware, languages, your individual role, application screenshots, and a live demo were not supplied and are not claimed.
8. After deployment, replace the live-link instruction in this README with your actual Vercel URL.

## Deploy to Vercel

1. Push the updated files to this repository's `main` branch, keeping the existing Git history.
2. Open Vercel and select **Add New → Project**.
3. Import `Boytooo/wendyl-personal-cv-2026`. Connect or authorize GitHub if asked.
4. Select framework preset **Other**. Root directory is the repository root. Leave the build command empty and use `.` as the output directory if Vercel asks for one. No environment variables are needed.
5. Deploy, then open the generated production URL.
6. Test navigation, project filters, the API download, email links, and the layout on your phone and computer.
7. Add the live URL to this README and commit the update.

Submit both the live Vercel URL and GitHub repository URL in the LMS. A local preview is not a public deployment.

## Development history and attribution

The original repository history is preserved. The redesign adds separate commits for page layout/project content, interactions, and documentation/verification. AI assisted the redesign. Review the HTML structure, CSS breakpoints, and JavaScript event handlers so you can explain the work you submit. Make future commits for actual changes rather than creating empty commits just to increase the count.
