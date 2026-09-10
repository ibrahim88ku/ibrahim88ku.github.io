import {
  ArrowUpRight, Cloud, Database, Github, Linkedin, Mail, Server,
  ShieldCheck, Terminal, Network, Boxes, Download, ChevronRight
} from "lucide-react";

const skills = [
  ["Storage & SAN", "Dell EMC • NetApp • Hitachi • HPE • IBM • Pure • Huawei"],
  ["Backup & DR", "Veeam • Commvault • NetBackup • Acronis • Data Domain • StoreOnce"],
  ["Virtualization", "VMware • Hyper-V • Nutanix • Proxmox • vSAN"],
  ["Cloud", "AWS • Azure • GCP • OCI • IBM Cloud • DigitalOcean"],
  ["Kubernetes & DevOps", "Kubernetes • K3s • Rancher • Docker • Jenkins • GitLab"],
  ["Networking", "Cisco • Brocade • FC • SAN zoning • NDFC • SANnav"]
];

const projects = [
  {
    title: "Multi-Data-Center Oracle Storage & Migration",
    area: "Storage / Oracle",
    text: "Storage provisioning and migration work supporting Oracle 12c/19c RAC and ADG environments across multiple data centers, including SAN zoning and NVMe-based workload transitions.",
    tags: ["Oracle RAC", "ADG", "SAN", "NVMe", "FC"]
  },
  {
    title: "Enterprise Backup & Disaster Recovery",
    area: "Backup / DR",
    text: "Designed and operated backup and recovery solutions across Commvault, Veeam and enterprise storage platforms, including DR workflows for critical application services.",
    tags: ["Commvault", "Veeam", "DR", "Air-gap", "Dell EMC"]
  },
  {
    title: "Hyper-V HA & S2D Infrastructure",
    area: "Virtualization",
    text: "Engineering work around Dell PowerEdge, Windows Server 2022, Hyper-V, Failover Clustering, VLAN segmentation, storage and Veeam protection.",
    tags: ["Hyper-V", "Windows", "Dell", "S2D", "Veeam"]
  },
  {
    title: "AWS Cloud Platform Architecture",
    area: "Cloud / DevOps",
    text: "Cloud architecture and migration work covering AWS Organizations, IAM Identity Center, Route 53, S3, CloudFront, SES, SNS, Amplify and ECS-based application hosting.",
    tags: ["AWS", "IAM", "ECS", "S3", "CloudFront"]
  },
  {
    title: "Kubernetes Shared Persistent Storage",
    area: "Kubernetes",
    text: "Operations and architecture work involving Kubernetes workloads, shared persistent storage, Rancher/K3s ecosystems and backup-oriented workflows.",
    tags: ["Kubernetes", "K3s", "Rancher", "Storage", "Velero"]
  },
  {
    title: "SAN, Fabric & Enterprise Storage Operations",
    area: "Data Center",
    text: "Hands-on enterprise storage and fabric engineering across Dell EMC, NetApp, Hitachi and HPE platforms, including zoning, provisioning, migrations and troubleshooting.",
    tags: ["NetApp", "Hitachi", "HPE", "Brocade", "Cisco"]
  }
];

const certs = [
  "Google Professional Cloud Architect",
  "Certified Kubernetes Administrator (CKA)",
  "Red Hat Certified Engineer (RHCE)",
  "Red Hat Certified System Administrator (RHCSA)",
  "VMware VCP-DCV",
  "VMware vSAN Specialist",
  "Commvault Certified Professional",
  "Azure Fundamentals",
  "Hitachi GAD + UR",
  "Dell Unity Implementation",
  "Dell PowerEdge MX",
  "Dell Midrange Storage Architect",
  "Oracle Cloud Infrastructure Foundations",
  "OCI Architect",
];

function SectionTitle({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="kicker mb-3">{kicker}</div>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-slate-400 leading-7">{body}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-bold tracking-tight">IK<span className="text-sky-400">.</span></a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Technologies</a>
            <a href="#certifications" className="hover:text-white">Certifications</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium hover:border-sky-400/50">Let's connect</a>
        </div>
      </header>

      <section className="grid-bg relative overflow-hidden border-b border-slate-800/60 pt-36">
        <div className="section flex min-h-[620px] items-center">
          <div className="max-w-4xl">
            <div className="kicker mb-5">Infrastructure • Cloud • Architecture</div>
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl">
              Ibrahim Khalil
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-300 md:text-2xl">
              Professional Certified Engineer &amp; Technology Architect
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Senior infrastructure engineering professional focused on enterprise storage,
              backup &amp; disaster recovery, virtualization, cloud platforms, Kubernetes,
              networking and platform DevOps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300">
                Explore projects <ArrowUpRight size={17} />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500">
                Career timeline <ChevronRight size={17} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["12+ Years Experience", "Enterprise Infrastructure", "Multi-Cloud", "Storage & DR", "Kubernetes"].map(x => <span className="tag" key={x}>{x}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <SectionTitle kicker="01 / About" title="A career built around complex infrastructure." body="This portfolio is designed to document the engineering behind the environments — not just list technologies. It brings together professional experience, major implementations, architecture decisions, troubleshooting and hands-on technical work." />
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card md:col-span-2">
            <Server className="mb-5 text-sky-300" />
            <h3 className="text-xl font-semibold">Infrastructure-first engineering</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Experience spans enterprise data-center infrastructure, storage, SAN fabrics,
              backup, disaster recovery, virtualization and modern cloud platforms.
              The focus is on dependable platforms, operational resilience and practical implementation.
            </p>
          </div>
          <div className="card">
            <ShieldCheck className="mb-5 text-emerald-300" />
            <h3 className="text-xl font-semibold">Reliability &amp; recovery</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Backup, recovery, DR design, storage resilience and infrastructure troubleshooting
              are recurring themes across the portfolio.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section border-t border-slate-800/60">
        <SectionTitle kicker="02 / Experience" title="Professional experience" />
        <div className="relative border-l border-slate-800 pl-7">
          <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-sky-400" />
          <div className="card">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <div className="kicker">Jul 2022 — Present</div>
                <h3 className="mt-2 text-2xl font-bold">Lead Engineer, Platform Infrastructure &amp; DevOps</h3>
                <p className="mt-1 text-slate-400">Nagad Ltd. • FinTech</p>
              </div>
              <span className="tag h-fit">Current</span>
            </div>
            <p className="mt-6 leading-7 text-slate-400">
              Leading and contributing to platform infrastructure engineering across storage,
              backup, virtualization, data-center workloads, cloud and Kubernetes operations.
              Recent work includes database workload offload, Oracle storage provisioning and
              migration, SAN/NVMe transitions, Elastic workloads, DFS/RAC environments,
              Commvault/NetApp/HPE/Hitachi operations and shared persistent storage for Kubernetes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Dell EMC", "NetApp", "Hitachi", "HPE", "Commvault", "Oracle", "Kubernetes", "Cisco", "VMware"].map(x => <span className="tag" key={x}>{x}</span>)}
            </div>
          </div>
          <div className="mt-7 card">
            <div className="kicker">Previous experience</div>
            <h3 className="mt-2 text-xl font-bold">Telecom &amp; Enterprise Infrastructure</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Earlier engineering experience across telecom and enterprise environments,
              building the foundation in servers, storage, virtualization, networking,
              backup and data-center operations.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section border-t border-slate-800/60">
        <SectionTitle kicker="03 / Selected projects" title="What I have actually engineered" body="A first-version project catalogue. The next iteration can turn each entry into a dedicated case study with sanitized architecture diagrams, implementation steps, challenges and outcomes." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article className="card group" key={p.title}>
              <div className="flex items-start justify-between">
                <span className="kicker">{String(i + 1).padStart(2, "0")} • {p.area}</span>
                <ArrowUpRight size={18} className="text-slate-600 group-hover:text-sky-300" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{p.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section border-t border-slate-800/60">
        <SectionTitle kicker="04 / Technology" title="Technology landscape" />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map(([title, detail], i) => {
            const icons = [Database, Boxes, Server, Cloud, Terminal, Network];
            const Icon = icons[i];
            return <div className="card flex gap-5" key={title}>
              <Icon className="mt-1 shrink-0 text-sky-300" />
              <div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section id="certifications" className="section border-t border-slate-800/60">
        <SectionTitle kicker="05 / Certifications" title="Professional certifications" body="Selected certifications and credentials represented from the current career information. Credential IDs and verification links can be added in the next content pass." />
        <div className="grid gap-3 md:grid-cols-2">
          {certs.map((c, i) => <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4" key={c}>
            <span className="font-mono text-xs text-sky-400">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-slate-200">{c}</span>
          </div>)}
        </div>
      </section>

      <section className="section border-t border-slate-800/60">
        <SectionTitle kicker="06 / Architecture" title="From CV to engineering case studies" body="The next version should make the technical depth the centrepiece: sanitized architecture diagrams, before/after designs, migration paths, troubleshooting notes and measurable outcomes for each major project." />
        <div className="card overflow-hidden">
          <div className="grid gap-0 md:grid-cols-5">
            {["Requirement", "Architecture", "Implementation", "Validation", "Outcome"].map((x, i) => (
              <div key={x} className="border-b border-slate-800 p-5 md:border-b-0 md:border-r last:md:border-r-0">
                <div className="font-mono text-xs text-sky-400">0{i + 1}</div>
                <div className="mt-2 font-semibold">{x}</div>
                <div className="mt-2 text-xs leading-5 text-slate-500">Documented as a reusable technical case-study section.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section border-t border-slate-800/60 pb-12">
        <div className="card text-center">
          <div className="kicker">07 / Contact</div>
          <h2 className="mt-3 text-3xl font-bold">Let's connect professionally.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            For infrastructure architecture, storage, backup &amp; DR, cloud, virtualization,
            Kubernetes or platform engineering opportunities.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950" href="mailto:your-email@example.com"><Mail size={17} /> Email</a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3" href="https://www.linkedin.com/in/ibrahim88ku/" target="_blank"><Linkedin size={17} /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3" href="https://github.com/ibrahim88ku" target="_blank"><Github size={17} /> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3" href="/resume.pdf"><Download size={17} /> Resume</a>
          </div>
        </div>
        <footer className="pt-10 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Ibrahim Khalil. Built as a technical portfolio.
        </footer>
      </section>
    </main>
  );
}