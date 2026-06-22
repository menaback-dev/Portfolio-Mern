export const projects = [
  {
    id: 1,

    title: "E-Commerce API",

    category: "Django",

    image: "/projects/ecommerce-api.png",

    shortDescription:
      "Scalable REST API for modern online stores.",

    overview:
      "A backend platform for managing products, orders, payments, inventory and customers.",

    problem:
      "The client needed a scalable backend capable of handling inventory management, customer accounts, and order processing.",

    solution:
      "Built a REST API using Django REST Framework with JWT authentication and PostgreSQL.",

    architecture:
      "Layered architecture separating views, services, serializers and database models.",

    challenges: [
      "Inventory synchronization",
      "Permission management",
      "Order transaction consistency",
    ],

    results: [
      "Reduced manual inventory updates",
      "Improved order tracking",
      "Provided scalable API foundation",
    ],

    tech: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],

    github:
      "https://github.com/example/project",

    demo:
      "https://demo.example.com",
  },
  {
    id: 2,
    title: "Task Management System",
    image: "/projects/task-api.jpg",
    category: "FastAPI",
    shortDescription:
      "Backend system for managing tasks, teams, and workflows with role-based access control.",
    tech: ["FastAPI", "PostgreSQL", "JWT"],
  },
  {
    id: 3,
    title: "Analytics API",
    image: "/projects/analytics.jpg",
    category: "FastAPI",
    shortDescription:
      "High-performance analytics service for processing and aggregating large datasets.",
    tech: ["FastAPI", "MySQL", "Docker"],
  },
];