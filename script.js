const projectGrid = document.querySelector("#project-grid");
const featuredGrid = document.querySelector("#featured-grid");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const media = document.createElement("div");
  media.className = "project-media";
  const images = Array.isArray(project.images)
    ? project.images.map((image) => (typeof image === "string" ? { src: image } : image))
    : project.image
      ? [{ src: project.image, alt: project.imageAlt }]
      : [];

  if (images.length) {
    const img = document.createElement("img");
    img.src = images[0].src;
    img.alt = images[0].alt || project.imageAlt || `${project.title} screenshot`;
    media.append(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "project-placeholder";
    placeholder.textContent = "Project image coming soon";
    media.append(placeholder);
  }

  const gallery = document.createElement("div");
  gallery.className = "project-gallery";
  if (images.length > 1) {
    for (const image of images.slice(1)) {
      const thumb = document.createElement("img");
      thumb.src = image.src;
      thumb.alt = image.alt || `${project.title} supporting image`;
      gallery.append(thumb);
    }
  }

  const body = document.createElement("div");
  body.className = "project-body";

  const category = document.createElement("p");
  category.className = "project-category";
  category.textContent = [project.category, project.status].filter(Boolean).join(" / ");

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const meta = document.createElement("div");
  meta.className = "project-meta";
  for (const tag of project.tags || []) {
    const chip = document.createElement("span");
    chip.className = "tag";
    chip.textContent = tag;
    meta.append(chip);
  }

  const links = document.createElement("div");
  links.className = "project-links";

  if (project.github) {
    const github = document.createElement("a");
    github.className = "project-link";
    github.href = project.github;
    github.target = "_blank";
    github.rel = "noreferrer";
    github.textContent = "GitHub";
    links.append(github);
  }

  if (project.docs) {
    const docs = document.createElement("a");
    docs.className = "project-link";
    docs.href = project.docs;
    docs.target = "_blank";
    docs.rel = "noreferrer";
    docs.textContent = project.docsLabel || "Docs";
    links.append(docs);
  }

  if (!project.github && !project.docs) {
    const placeholder = document.createElement("span");
    placeholder.className = "project-link muted-link";
    placeholder.textContent = "Links coming soon";
    links.append(placeholder);
  }

  body.append(category, title, description, meta, links);
  article.append(media);
  if (gallery.childElementCount) {
    article.append(gallery);
  }
  article.append(body);
  return article;
}

async function loadProjects() {
  try {
    const response = await fetch("./projects.json");
    if (!response.ok) {
      throw new Error(`Unable to load projects: ${response.status}`);
    }

    const projects = await response.json();
    const featuredProjects = projects.filter((project) => project.featured);
    const remainingProjects = projects.filter((project) => !project.featured);

    featuredGrid.replaceChildren(...featuredProjects.map(createProjectCard));
    projectGrid.replaceChildren(...remainingProjects.map(createProjectCard));
  } catch (error) {
    const fallback = document.createElement("p");
    fallback.className = "project-description";
    fallback.textContent = "Projects could not be loaded.";
    featuredGrid.replaceChildren(fallback.cloneNode(true));
    projectGrid.replaceChildren(fallback);
    console.error(error);
  }
}

loadProjects();
