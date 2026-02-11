function uid() {
  return "cr_" + crypto.randomUUID();
}

export const STYLES = [
  { id: "action", name: "Action — Blockbuster", blurb: "Affiche épique, ultra sérieuse (c’est ça qui est drôle)." },
  { id: "comedy", name: "Comédie — Feel‑good", blurb: "Couleurs chaudes, sourire, vibe cadeau familial." },
  { id: "adventure", name: "Aventure — Explorateur", blurb: "Jungle, trésor, globe‑trotter (version premium)." },
  { id: "scifi", name: "Science‑fiction — Space", blurb: "Lumière ciné, futur proche, affiche qui claque." },
  { id: "magazine", name: "Magazine — Personnalité de l’année", blurb: "Couverture de magazine stylée + tagline." },
  { id: "vintage", name: "Vintage — Pub années 50", blurb: "Publicité rétro, propre, imprimable." },
];

export function saveCreation(input) {
  const id = uid();
  const creation = {
    id,
    createdAt: new Date().toISOString(),
    status: "preview_ready",
    ...input,
  };
  localStorage.setItem("poster_mvp_creation_" + id, JSON.stringify(creation));
  localStorage.setItem("poster_mvp_last", id);
  return id;
}

export function loadCreation(id) {
  const raw = localStorage.getItem("poster_mvp_creation_" + id);
  if (!raw) return null;
  return JSON.parse(raw);
}

export function setStatus(id, status, extra = {}) {
  const cr = loadCreation(id);
  if (!cr) return null;
  const next = { ...cr, status, ...extra };
  localStorage.setItem("poster_mvp_creation_" + id, JSON.stringify(next));
  return next;
}

export function picsum(seed, w, h) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

// Capsule thumbnails: AI-generated examples stored locally (stable + fast).
export function stylePhoto(styleId, w = 900, h = 900) {
  const url = {
    action: "/assets/capsules/action.png",
    comedy: "/assets/capsules/comedy.png",
    adventure: "/assets/capsules/adventure.png",
    scifi: "/assets/capsules/scifi.png",
    magazine: "/assets/capsules/magazine.png",
    vintage: "/assets/capsules/vintage.png",
  }[styleId] || "/assets/capsules/action.png";

  // w/h handled by CSS (object-fit: cover) on the <img>.
  return url;
}

export function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

export function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
