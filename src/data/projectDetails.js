/**
 * Full project details for the dedicated Projects page.
 * Add your screenshot paths to images[] and screenshots{} when you have them.
 */
export const projectDetails = [
  {
    id: "first-female",
    title: "First Female",
    tagline: "Fashion e‑commerce with CMS & delivery checker",
    description:
      "E‑commerce platform for women's fashion (First Female). Admin can edit homepage sections via CMS. Product page includes delivery service checker. Integrated payments and Delhivery for shipping.",
    tech: [
      "Next.js",
      "NestJS",
      "MariaDB",
      "Prisma ORM",
      "Delhivery API",
      "Razorpay",
      "CMS (admin-editable homepage sections)",
      "Delivery service checker on product page",
    ],
    links: [
      { label: "Live Store", url: "https://www.firstfemale.in/" },
      { label: "Admin Panel", url: "https://v2admin.firstfemale.in/" },
    ],
    /** Add paths like "/images/firstfemale-home.png", "/images/firstfemale-admin.png" */
    images: ["/images/firstfemale-home.png", "/images/firstfemale-admin.png", "/images/firstfemale-products.png"],
    screenshots: {
      home: ["/images/firstfemale-home.png"],
      admin: ["/images/firstfemale-admin.png"],
      product: ["/images/firstfemale-products.png"],
    },
  },
  {
    id: "shopybucks",
    title: "Shopybucks",
    tagline: "Multi-vendor commerce — Admin, Seller, Employee & User panels",
    description:
      "Full multi-panel commerce platform (Meesho-style): Admin, Seller, Employee, and User sides. Role-based access, order lifecycle, payments, shipping, seller payouts, event-driven processing with Kafka and Redis, Firebase notifications.",
    tech: [
      "Next.js",
      "NestJS",
      "MariaDB",
      "Prisma ORM",
      "Ekart Delivery API",
      "Easebuzz",
      "Kafka",
      "Redis (caching)",
      "Firebase (notifications)",
      "RBAC (Admin, Seller, Employee, User)",
    ],
    links: [
      { label: "Store", url: "https://shopybucks.com/" },
      { label: "Seller Panel", url: "https://seller.shopybucks.com/" },
      { label: "Admin Panel", url: "https://adminv2.shopybucks.com/" },
      { label: "Employee Panel", url: "http://internal.shopybucks.com/" },
    ],
    images: ["/images/shopybucks-home.png", "/images/shopybucks-seller.png", "/images/shopybucks-admin.png", "/images/shopybucks-employee.png"],
    screenshots: {
      user: ["/images/shopybucks-home.png"],
      admin: ["/images/shopybucks-admin.png"],
      seller: ["/images/shopybucks-seller.png"],
      employee: ["/images/shopybucks-employee.png"],
    },
  },
  {
    id: "ai-scheduler-bot",
    title: "AI Automated Scheduler Bot",
    tagline: "Cron-based task reminder, analytics & keep-alive (under test)",
    description:
      "Personal automation bot with cron jobs for task reminders, analytics, keep-alive server, and other scheduled tasks. Uses Telegram bot and GPT-4o mini. Git workflow for cron handling. Backend on Render; currently in test phase.",
    tech: [
      "Node.js",
      "Telegram Bot",
      "GPT-4o mini",
      "Render (backend)",
      "Cron jobs (reminders, analytics, keep-alive, etc.)",
      "Git workflow for cron handling",
    ],
    links: [],
    images: ["/images/strictbot.png"],
    screenshots: {
      bot: [],
      cron: [],
    },
  },
];

/** For home page cards: first 3 from projectDetails with summary fields */
export const projectsSummary = projectDetails.map((p) => ({
  id: p.id,
  title: p.title,
  tagline: p.tagline,
  description: p.description,
  tech: p.tech.slice(0, 6),
  links: p.links,
  image: p.images?.[0] || null,
}));
