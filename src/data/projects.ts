export type Sector =
  | "Residential"
  | "Commercial"
  | "Banking"
  | "Healthcare"
  | "Institutional"
  | "Jewellery"
  | "Hospitality";

export interface Project {
  slug: string;
  title: string;
  sector: Sector;
  location?: string;
  client?: string;
  scope?: string;
  area?: string;
  year?: string;
  status?: string;
  brief: string;
  services?: string[];
  images: string[];
  featured?: boolean;
  /** true = has its own case-study page; false = opens a lightbox from the grid */
  caseStudy: boolean;
}

const img = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);

export const projects: Project[] = [
  {
    slug: "valanju-residence",
    title: "Valanju Residence",
    sector: "Residential",
    location: "Kolhapur",
    scope: "Architectural Design",
    brief:
      "A modern private residence composed of clean white volumes wrapped in vertical timber screens, with a private pool court at the entry. The massing opens the living floors to light and landscape while the screened facade filters the western sun — contemporary living rooted in its climate.",
    services: ["Architectural Design", "3D Visualization"],
    images: img("valanju-residence", 3),
    featured: true,
    caseStudy: true,
  },
  {
    slug: "circuit-bench",
    title: "Circuit Bench Entrance & Lobby",
    sector: "Institutional",
    location: "Kolhapur",
    scope: "Conceptual Design & Architectural Detailing",
    brief:
      "Conceptual design and architectural detailing of the entrance gateway (kaman) and internal lobby for the Circuit Bench at Kolhapur. The design pairs a dignified stone archway with arched interior volumes, restrained materials and the emblem of the court — civic architecture that carries the weight of the institution it serves.",
    services: ["Conceptual Design", "Architectural Detailing", "3D Visualization"],
    images: img("circuit-bench", 5),
    featured: true,
    caseStudy: true,
  },
  {
    slug: "dac-bank-rajarampuri",
    title: "DAC Bank, Rajarampuri Branch",
    sector: "Banking",
    location: "Rajarampuri 7th Lane, Kolhapur",
    client: "Dr. Annasaheb Chougule Co-Op Bank Pvt Ltd",
    scope: "Civil & Interior Work",
    area: "1,500 sq ft",
    year: "2021",
    status: "Completed",
    brief:
      "The Rajarampuri Branch has been designed as a contemporary banking space that prioritizes functionality, efficiency and customer comfort. The interior combines clean white finishes, warm wood textures and the bank's signature blue accents to create a professional yet welcoming environment. A well-planned layout, ergonomic workstations, ample lighting and organized customer service counters ensure smooth operations and seamless customer interaction.",
    services: ["Architectural Design", "Interior Design", "Working Drawings", "3D Visualization", "Site Supervision", "Turnkey Execution"],
    images: img("dac-bank-rajarampuri", 4),
    featured: true,
    caseStudy: true,
  },
  {
    slug: "dattajirao-mane-saraf",
    title: "Dattajirao Mane Saraf",
    sector: "Jewellery",
    location: "Kolhapur",
    scope: "Interior Design & Execution",
    brief:
      "A jewellery showroom designed around the ritual of the purchase — plush seating at the counters, focused display lighting and a warm material palette that lets the jewellery itself take centre stage, behind a storefront that anchors the street.",
    services: ["Interior Design", "Site Supervision", "Turnkey Execution"],
    images: img("dattajirao-mane-saraf", 2),
    featured: true,
    caseStudy: true,
  },
  {
    slug: "restaurant-tandulwadi",
    title: "Restaurant at Tandulwadi",
    sector: "Hospitality",
    location: "Tandulwadi, Maharashtra",
    scope: "Complete Restaurant Interior",
    brief:
      "Complete restaurant interior including planning, furniture, lighting and ambience development. The food-court frontage opens onto a generous plaza, while inside, patterned floors, leather seating and hanging greenery set a relaxed, convivial tone.",
    services: ["Interior Design", "Furniture Design", "Lighting Design", "3D Visualization"],
    images: img("restaurant-tandulwadi", 5),
    featured: true,
    caseStudy: true,
  },
  {
    slug: "manali-beauty-parlor",
    title: "Manali Beauty Parlor",
    sector: "Commercial",
    location: "Kolhapur",
    scope: "Salon Interior Planning & Execution",
    brief:
      "A boutique beauty parlor and styling salon designed with elegant vanity mirrors, warm ambient illumination, ergonomic treatment stations and comfortable client seating. The interior balances privacy for specialized treatments with an inviting, light-filled reception and styling studio.",
    services: ["Interior Design", "Lighting Design", "Custom Millwork", "Site Execution"],
    images: [
      "/images/projects/Manali_Beauty_parlor/beauty.jpeg",
      "/images/projects/Manali_Beauty_parlor/beauty_2.jpeg",
    ],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "santulan-kendra",
    title: "Santulan Kendra – Balaji Tambe",
    sector: "Healthcare",
    location: "Kolhapur",
    scope: "Interior Design & Execution",
    brief:
      "A wellness and ayurveda centre where retail, consultation and therapy share one calm environment. Product displays, reception and consulting rooms are organized in a clear sequence, finished in quiet materials that put visitors at ease.",
    services: ["Interior Design", "Site Supervision"],
    images: img("santulan-kendra", 6),
    caseStudy: true,
  },
  {
    slug: "sarvodaya-hospital",
    title: "Sarvodaya Super Speciality Healthcare",
    sector: "Healthcare",
    location: "Kolhapur",
    scope: "Interior Design & Execution",
    brief:
      "Interiors for a super-speciality healthcare facility — consulting rooms, patient wards and circulation designed for hygiene, wayfinding and calm. Durable finishes and clear planning keep the hospital working as hard as its staff.",
    services: ["Interior Design", "Site Supervision"],
    images: img("sarvodaya-hospital", 4),
    caseStudy: true,
  },
  {
    slug: "gym-rk-nagar",
    title: "Gym at R.K. Nagar",
    sector: "Commercial",
    location: "R.K. Nagar, Kolhapur",
    scope: "Interior Planning & Execution",
    brief:
      "Interior planning and execution of a contemporary fitness centre. A dark, energetic envelope with neon accent lighting, zoned training areas and robust flooring built to take a daily beating.",
    services: ["Interior Design", "Lighting Design", "Turnkey Execution"],
    images: img("gym-rk-nagar", 4),
    caseStudy: true,
  },
  {
    slug: "stone-oven-kankavli",
    title: "Stone Oven Franchise, Kankavli",
    sector: "Hospitality",
    location: "Kankavli",
    scope: "Restaurant Interior",
    brief:
      "A franchise restaurant interior with exposed brick, teal booth seating and bold graphic walls — a memorable brand environment delivered on a franchise timeline.",
    services: ["Interior Design", "Turnkey Execution"],
    images: img("stone-oven-kankavli", 3),
    caseStudy: true,
  },
  {
    slug: "collector-residence",
    title: "Collector's Residence",
    sector: "Institutional",
    location: "Near SP Office, Kolhapur",
    scope: "Design Assistance",
    brief:
      "Design of the official Collector's Residence near the SP Office, Kolhapur. Arched openings, heritage detailing and formal living spaces give the residence the gravitas its office demands, in a language that stays warm and livable.",
    services: ["Architectural Design", "3D Visualization"],
    images: img("collector-residence", 3),
    caseStudy: true,
  },
  {
    slug: "vengurlekar-residence",
    title: "Vengurlekar Residence",
    sector: "Residential",
    location: "Kudal",
    scope: "Architectural Design",
    brief:
      "A sloped-roof family villa in Kudal that borrows from the Konkan vernacular — deep verandahs, clay-tiled roofs and a garden approach — rendered in a crisp contemporary hand.",
    services: ["Architectural Design", "3D Visualization"],
    images: img("vengurlekar-residence", 2),
    caseStudy: true,
  },
  {
    slug: "ca-office-kudal",
    title: "Chartered Accountant Office",
    sector: "Commercial",
    location: "Kudal",
    scope: "Office Interior",
    brief:
      "A compact professional office with efficient cabins, counters and storage — quiet materials and disciplined detailing for a practice built on precision.",
    services: ["Interior Design", "Site Supervision"],
    images: img("ca-office-kudal", 4),
    caseStudy: true,
  },
  {
    slug: "sachin-super-speciality",
    title: "Sachin Super Speciality Hospital",
    sector: "Healthcare",
    location: "Kolhapur",
    scope: "Interior Design",
    brief: "Reception and public interiors for a super-speciality hospital in Kolhapur.",
    images: img("sachin-super-speciality", 1),
    caseStudy: false,
  },
];

/** Named projects from the firm's profile without photography — shown as an editorial index. */
export const projectIndex: Record<string, string[]> = {
  Banking: [
    "DAC Bank — Miraj Branch",
    "DAC Bank — Sangli Branch",
    "DAC Bank — Ichalkaranji Branch",
    "DAC Bank — Laxmipuri Branch",
    "DAC Bank — Aalte Branch",
    "DAC Bank — Hatkanangale Branch",
    "DAC Bank — Peth Vadgaon Branch",
    "DAC Bank — Abdul Lat (Ongoing)",
  ],
  "Commercial & Corporate": [
    "Mahalaxmi Bhakt Nivas, Kolhapur (4,000 sq ft)",
    "Sara Beauty Salon, Kolhapur",
    "Mai Marathi Restaurant, Kolhapur",
    "Harbhole Café (Multiple Branches)",
    "Durga Extraction Office Building",
    "Rajesh Silver Factory",
    "Shopping Mall, Kotoli",
  ],
  Healthcare: [
    "Metro Hospital",
    "Janaki Multispeciality Hospital",
    "Ganga Hospital",
    "Dr. Sharvil Gadave Clinic",
    "Dr. Kunal Patil Consultancy",
  ],
  Jewellery: ["Kalekar Jewellers", "Manali Jewellers", "Sanjay Mane Saraf", "Anagha Jewellers"],
  Residential: [
    "Sangaonkar Residence & Commercial Complex, Gujari (10,000 sq ft)",
    "Shete Residence Interior (4,500 sq ft)",
    "Chougule Residence — Interior & Execution (4,000 sq ft)",
    "Bamane Bungalow, Mohite Mala (3,500 sq ft)",
    "Deshmukh Bungalow (6,000 sq ft)",
    "Ladage Renovation, Interior & Landscape, Ruikar Colony (4,500 sq ft)",
    "Thanekar Residence Interior (2,400 sq ft)",
    "Herwade Residence Interior, Nagala Park (2,500 sq ft)",
    "Dhanal Residence, Shanivar Peth (5,000 sq ft)",
    "Zagade Bungalow (4,500 sq ft)",
    "Savardekar Residence (2,850 sq ft)",
    "…and numerous residential projects across Maharashtra",
  ],
};

export const sectors: Sector[] = [
  "Residential",
  "Commercial",
  "Banking",
  "Healthcare",
  "Institutional",
  "Jewellery",
  "Hospitality",
];

export const featuredProjects = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
