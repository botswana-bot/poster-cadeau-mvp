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

// Realistic thumbnails with people (free, no API key).
// Uses randomuser.me portrait images (stable URLs) so we always see a face.
// For the MVP, we pick different portrait IDs per style.
export function stylePhoto(styleId, w = 900, h = 900) {
  const url = {
    action: "https://randomuser.me/api/portraits/men/32.jpg",
    comedy: "https://randomuser.me/api/portraits/women/44.jpg",
    adventure: "https://randomuser.me/api/portraits/men/65.jpg",
    scifi: "https://randomuser.me/api/portraits/women/68.jpg",
    magazine: "https://randomuser.me/api/portraits/women/12.jpg",
    vintage: "https://randomuser.me/api/portraits/men/8.jpg",
  }[styleId] || "https://randomuser.me/api/portraits/men/1.jpg";

  // w/h not controllable here; CSS (object-fit: cover) handles cropping.
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
