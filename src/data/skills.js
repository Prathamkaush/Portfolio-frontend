// Grouped by category for display
export const skillCategories = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "Node.js", "NestJS", "Next.js", "React"],
  },
  {
    title: "Databases",
    items: ["MariaDB", "PostgreSQL", "ClickHouse", "Redis", "Prisma ORM"],
  },
  {
    title: "Messaging & Processing",
    items: ["Kafka", "Cron Jobs"],
  },
  {
    title: "Payments & Integrations",
    items: ["Razorpay", "Easebuzz", "Delhivery", "Ekart"],
  },
  {
    title: "Infrastructure & DevOps",
    items: ["PM2", "Nginx", "SSL", "Linux", "Vercel"],
  },
  {
    title: "Auth & Security",
    items: ["JWT", "Role-Based Access Control (RBAC)"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Swagger", "Firebase (Notifications)"],
  },
];

// Flat list for tag cloud / simple view
export const skills = skillCategories.flatMap((cat) => cat.items);
