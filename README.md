# Aakarsh Sangar Personal Site

This is a static personal portfolio site.

## Publish Free With GitHub Pages

You do not need to buy a domain. The cleanest free GitHub Pages URL is:

`https://aakarsh-s.github.io/`

To get that exact style of URL, the repository must be named exactly:

`aakarsh-s.github.io`

Recommended setup for the clean URL:

1. Create or rename your repository to `aakarsh-s.github.io`.
2. Upload the contents of this `personal-site` folder to that repository.
3. In GitHub, open the repository settings.
4. Go to `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Choose the `main` branch and `/ (root)` folder.
7. Save. GitHub will publish the site at `https://aakarsh-s.github.io/`.

If you keep the current repository name, `Engineering-Portfolio`, the URL will be:

`https://aakarsh-s.github.io/Engineering-Portfolio/`

Both work, but `aakarsh-s.github.io` is simpler.

## Add a Project

1. Put the project image in `assets/projects/`.
2. Find that project in `projects.json`.
3. Add a relative image path such as `./assets/projects/my-project.png`.
4. Add the real GitHub URL to `github`.
5. Add a CAD, demo, paper, or writeup URL to `docs` when useful.

Example:

```json
{
  "title": "Project Name",
  "featured": true,
  "category": "Robotics",
  "status": "2026",
  "description": "One or two sentences about what it does.",
  "github": "https://github.com/username/repo",
  "docs": "https://example.com/project-writeup",
  "docsLabel": "Writeup",
  "image": "./assets/projects/project-name.png",
  "imageAlt": "Screenshot of Project Name",
  "tags": ["React", "AI", "Tools"]
}
```

For multiple project images, use `images` instead of `image`:

```json
"images": [
  {
    "src": "./assets/projects/main-screenshot.png",
    "alt": "Main project screenshot"
  },
  {
    "src": "./assets/projects/detail-screenshot.png",
    "alt": "Supporting project screenshot"
  }
]
```

Current project slots are based on the CV template:

- Custom Robotic Arm
  - Iteration page: `arm-iterations.html`
- Jetson Orin Nano Robotics Platform
- Faultline
- Vision-Based Health Monitoring System
- ModalAI Robotics Internship
- FIRST / FTC Robotics
- CalHacks AI Hackathon
- TritonHacks
- Science Olympiad Coaching

## Optional Custom Domain

A custom domain can be added later, but it is not required.
