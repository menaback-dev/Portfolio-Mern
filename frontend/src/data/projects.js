export const projects = [
  {
  id: 1,
  title: "TMS API",
  category: "ASP.NET Core",
  image: "/projects/tms-api.png",
  shortDescription:
    "Production-minded REST API for a Training Management System.",
  overview:
    "Backend for courses, enrollments, grades, and role-based access used by students, instructors, and admins.",
  problem:
    "Training centres need a reliable API for catalog, enrollment workflows, identity, and admin operations—not a single-page demo backend.",
  solution:
    "Built a clean-architecture ASP.NET Core 10 API with EF Core, PostgreSQL, Identity, JWT + refresh tokens, and enrollment approval flows.",
  architecture:
    "Four-project layout (Api, Application, Domain, Infrastructure) with controllers, services/handlers, entities, and EF persistence pointing inward.",
  challenges: [
    "JWT claims and role-based authorization",
    "Enrollment lifecycle (Pending → Approved)",
    "Auto-generated student registration numbers (TMS-YYYY-NNNN)",
    "CORS and secure browser integration with the SPA",
  ],
  results: [
    "Stable contract for Angular client dashboards",
    "Secure login with short-lived access tokens and refresh rotation",
    "Admin-ready course and enrollment management endpoints",
  ],
  tech: [
    "ASP.NET Core 10",
    "EF Core",
    "PostgreSQL",
    "Identity",
    "JWT",
    "MediatR",
    "xUnit",
  ],
  github: "https://github.com/menaback-dev/TmsApi.git",
},

{
  id: 2,
  title: "TMS Client",
  category: "Angular",
  image: "/projects/tms-client.png",
  shortDescription:
    "Role-based Angular SPA for the Training Management System.",
  overview:
    "Glass-styled frontend for students, instructors, and admins: catalog, enrollment requests, approvals, grading, and dashboards.",
  problem:
    "Each role needs a different workspace; a generic UI would mix student enroll flows with instructor analytics and admin controls.",
  solution:
    "Built an Angular 22 standalone app with JWT auth, role-based routing, SignalStore for enrollments, and Material tables for admin operations.",
  architecture:
    "Feature modules (student / instructor / admin), shared UI, HTTP interceptors, guards, and environment/proxy config to the .NET API.",
  challenges: [
    "Mapping JWT claims to session and student registration IDs",
    "Enroll as Pending without exposing admin actions to instructors",
    "Consistent glass UI across auth and dashboards",
    "Defensive forms (exhaustMap) and live enrollment state",
  ],
  results: [
    "Clear dashboards per role after login",
    "Student enroll → admin approve → instructor roster flow",
    "Polished auth and unauthorized experiences",
  ],
  tech: [
    "Angular 22",
    "TypeScript",
    "Tailwind CSS",
    "daisyUI",
    "Angular Material",
    "NgRx SignalStore",
    "RxJS",
    "Playwright",
  ],
  github: "https://github.com/menaback-dev/tms-client.git",
},

{
  id: 3,

  title: "SkillBridge",

  category: "Full-Stack Web App",

  image: "/projects/skillbridge.png",

  shortDescription:
    "Skill-based recruitment platform connecting developers and employers through automated talent matching.",

  overview:
    "A full-stack job portal designed to match candidates with job postings based on skills. Candidates can build profiles, track applications, and view match percentages, while employers can post vacancies, filter candidates by match criteria, and manage candidate pipelines.",

  problem:
    "Traditional hiring portals rely on generic keyword search, leading to poor candidate-job fit, high friction in screening applications, and lack of transparency regarding required skills versus candidate proficiency.",

  solution:
    "Built a Clean Architecture ASP.NET Core Web API with an Angular frontend featuring an automated skill-matching engine, role-based JWT authentication, multi-skill chip filtering, and application status workflows.",

  architecture:
    "Monorepo with a Clean Architecture backend (.NET Domain, Application, Infrastructure, Api) and an Angular standalone component frontend driven by reactive forms, Angular Signals, and HTTP interceptors.",

  challenges: [
    "Dynamic skill matching calculation across multi-skill profiles",
    "Role-based access control and state persistence for Employers vs. Candidates",
    "Optimistic application status transitions with backend validation consistency",
  ],

  results: [
    "Automated instant skill match scoring (0-100%) for every candidate application",
    "Streamlined hiring pipeline with Shortlist and Reject actions for employers",
    "Comprehensive test coverage across both backend domain logic and Angular components",
  ],

  tech: [
    "Angular",
    "ASP.NET Core",
    "C#",
    "PostgreSQL",
    "Entity Framework Core",
    "TypeScript",
    "Docker",
  ],

  github:
    "https://github.com/ermi-e3/skillbridge-hackathon",
},

{
  id: 4,
  title: "CivicFix - Municipal Issue Tracking Platform",
  category: "Full-Stack (.NET & Angular)",
  image: "/projects/civicfix.png",
  shortDescription:
    "Full-stack civic reporting and municipal issue lifecycle management platform.",
  overview:
    "A comprehensive municipal governance system that empowers citizens to report community infrastructure problems (potholes, streetlights, sanitation) while providing municipal staff and administrators with dedicated dashboards to triage, assign, track, and resolve issues with complete audit history.",
  problem:
    "Municipalities struggle with fragmented communication channels, delayed response times, lack of staff accountability, and opaque resolution workflows that leave citizens in the dark about their reported issues.",
  solution:
    "Developed a robust full-stack platform featuring an Angular SPA with TailwindCSS/DaisyUI and an ASP.NET Core Web API following Clean Architecture, role-based JWT authentication, and PostgreSQL persistence with automated status lifecycle workflows.",
  architecture:
    "Clean Architecture separating Domain entities, Application use-case contracts/DTOs, Infrastructure persistence & Identity, and API controllers, paired with an Angular standalone component-based frontend utilizing reactive services, HTTP interceptors, and route guards.",
  challenges: [
    "Multi-persona role-based access control and navigation for Citizens, Staff, and Admins",
    "Strict issue status lifecycle state transitions and chronological audit history tracking",
    "Dynamic staff assignment workflows and workload distribution queues",
    "High-contrast, accessible UI design adhering to municipal accessibility standards",
  ],
  results: [
    "Streamlined citizen issue reporting with automated geolocation tagging and photo evidence",
    "Accelerated resolution turnaround with dedicated staff queues and status workflows",
    "Ensured accountability through transparent, time-stamped status change history",
    "Built a modular, production-ready codebase ready for municipal scalability",
  ],
  tech: [
    ".NET 10",
    "ASP.NET Core",
    "Angular 19",
    "TypeScript",
    "PostgreSQL",
    "Entity Framework Core",
    "Tailwind CSS",
    "DaisyUI",
    "Docker",
  ],
  github: "https://github.com/beka-tech/civicfix-hackathon",
}

];