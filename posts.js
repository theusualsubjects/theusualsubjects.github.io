// ============================================================
//  YOUR PHOTOGRAPHY BLOG — ADD YOUR POSTS HERE
//  ============================================================
//  HOW TO ADD A NEW PHOTO POST:
//  1. Upload your photo to Cloudinary (free at cloudinary.com)
//  2. Copy the image URL Cloudinary gives you
//  3. Copy one of the blocks below, paste it at the TOP of the list
//  4. Fill in your image URL, title, date, and caption
//  5. Save this file, commit & push to GitHub — done!
// ============================================================

const SITE_CONFIG = {
  title: "Your Names",          // ← Change to your name or blog name
  tagline: "Photography",      // ← Change to your tagline
  about: "Stories told through a lens.",  // ← Short bio
  instagram: "",               // ← Your Instagram handle (or leave empty)
  email: "",                   // ← Your email (or leave empty)
};

const POSTS = [

  // ── SAMPLE POST 3 ──────────────────────────────────────────
  {
    id: 1,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },

  // ── SAMPLE POST 2 ──────────────────────────────────────────
  {
    id: 2,
    title: "Street Fragment",
    date: "2024-02-28",
    caption: "The city reveals itself in pieces — a shadow, a reflection, a fleeting expression. This corner had been waiting to be seen.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
    tags: ["street", "urban"],
  },
{
    id: 3,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },
  {
    id: 4,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },
  {
    id: 5,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },
  {
    id: 6,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },
  {
    id: 7,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/v1781461726/IMG_0584_wh7bwb.jpg",
    tags: ["landscape", "light"],
  },
  {
    id: 8,
    title: "Golden Hour in the Hills",
    date: "2024-03-15",
    caption: "There's a brief window each evening when the light turns everything to gold. I chased it for weeks before catching this moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    tags: ["landscape", "light"],
  },
  // ── SAMPLE POST 1 ──────────────────────────────────────────
  {
    id: 9,
    title: "First Light",
    date: "2024-01-10",
    caption: "Woke up at 4am to be there before sunrise. The cold was brutal, but the stillness of the world before it wakes — that is everything.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    tags: ["nature", "dawn"],
  },

];
