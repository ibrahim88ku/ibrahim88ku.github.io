import LiveTelemetry from "./LiveTelemetry";
import {
  ArrowUpRight, Award, Boxes, BriefcaseBusiness, CheckCircle2, Cloud, Database,
  Download, ExternalLink, MessageCircle, GraduationCap, Linkedin, Mail, MapPin, Network,
  Server, ShieldCheck, Terminal, BookOpen, Cpu, HardDrive, Layers3, Workflow, Menu, X
} from "lucide-react";

const experience = [
  {
    period: "Jul 2022 — Present", role: "Principal Engineer, Platform Infrastructure & DevOps", company: "Nagad Ltd. · Digital Financial Services · Dhaka",
    bullets: [
      "Implement, administer and optimize on-premises and multi-cloud infrastructure spanning servers, enterprise storage, SAN fabrics, backup/recovery, VMware/Hyper-V, Linux/Windows and container platforms.",
      "Deploy secure and scalable AWS, Azure, GCP and OCI services across IAM/RBAC, compute, networking, storage, security policy and data protection.",
      "Implement Docker/Kubernetes platforms and CI/CD workflows with Jenkins, GitHub, AWS CodePipeline and Azure Pipelines.",
      "Lead geo-separated replication and business-continuity operations using Hitachi TrueCopy/SI/HUR/GAD, NetApp SnapMirror/SnapVault and Dell EMC RecoverPoint/SRDF.",
      "Protect business-critical applications, VMs and Oracle/MySQL/MSSQL databases with Commvault, NetBackup and Veeam, aligned with SLA, audit, restoration and DR requirements."
    ]
  },
  {
    period: "Sep 2020 — Jun 2022", role: "Lead Engineer, Server, Storage and Backup Administrator", company: "Nagad Ltd. · Digital Financial Services · Dhaka",
    bullets: [
      "Planned, deployed and administered heterogeneous storage and backup platforms integrated with Linux, Windows and VMware.",
      "Managed VMware ESXi/vSphere HA/vSAN and Hyper-V environments, capacity planning and performance tuning.",
      "Managed Cisco/Brocade SAN fabrics including VSAN, FC zoning, ISL trunking, Port Channel, IVR, NPV/NPIV and firmware lifecycle.",
      "Provided L3 troubleshooting, storage provisioning, host mapping, cloning/snapshots and OEM/vendor escalation for critical infrastructure."
    ]
  },
  {
    period: "Jul 2019 — Aug 2020", role: "Asst. Manager, Enterprise Solution and Services", company: "Smart Technologies (BD) Ltd · Dhaka",
    bullets: [
      "Led the Storage & Backup technical team and delivered SAN/NAS, server, archiving, backup/recovery, converged infrastructure and virtualization projects end-to-end.",
      "Performed heterogeneous storage migrations and technology refresh projects with minimal downtime.",
      "Worked with OEM professional services and customers on PoCs, SoWs, assessments, design reviews and technical specifications."
    ]
  },
  {
    period: "Jul 2016 — Jun 2019", role: "Asst. Manager, Customer Service and Implementation Engineer", company: "Computer Services Limited · Dell EMC Authorized Partner · Dhaka",
    bullets: [
      "Delivered onsite L3/P1 production data-center support and led storage, server, SAN, backup/recovery implementations and migrations.",
      "Implemented Dell EMC Celerra, CLARiiON, VNX/VNXe, VMAX/PowerMax, Unity, XtremIO and VPLEX across Windows, Linux/Unix, VMware, Solaris, AIX and HP-UX.",
      "Implemented RecoverPoint, Avamar, NetWorker, Data Domain and IDPA, plus Cisco/Brocade departmental and director-class SAN fabrics.",
      "Developed DR plans and conducted recovery validation for FinTech, Banking/BFSI and enterprise customers."
    ]
  },
  {
    period: "Feb 2014 — Jun 2016", role: "Customer Service Engineer, Server, Storage, Backup and Recovery", company: "Computer Services Limited · Dell EMC Authorized Partner · Dhaka",
    bullets: [
      "Installed and supported EMC storage, backup, servers and SAN switching across enterprise production data centers.",
      "Performed host integration, storage provisioning, clone/snapshot, remote replication, firmware upgrades and FRU replacement.",
      "Provided 24×7 enterprise support and coordinated escalated incidents with EMC Technical Support."
    ]
  }
];

const projects = [
  ["Storage Tech Refresh & Data Migration", "Dell EMC Unity 500F; migration from CX4-480 using SAN Copy, VMware vMotion and VPLEX Data Mobility.", ["Unity", "VPLEX", "SAN Copy", "vMotion"]],
  ["VMware Data Center Consolidation", "ESXi, vCenter, vSphere HA, DRS, vMotion and vSAN implementation with physical workload consolidation.", ["VMware", "vSAN", "HA/DRS", "vMotion"]],
  ["Storage, Backup & DC Migration", "Dell EMC XtremIO, NetWorker, Data Domain and RecoverPoint implementation for storage, protection and DR.", ["XtremIO", "NetWorker", "Data Domain", "RecoverPoint"]],
  ["3-Site Active/Active Data Center", "Dell EMC VMAX 40K, Cisco MDS 9710 and VPLEX Metro architecture for highly available active/active services.", ["VMAX", "MDS 9710", "VPLEX Metro"]],
  ["Dell EMC Storage & Modular Compute", "SC5020F all-flash storage and PowerEdge MX7000 modular chassis server infrastructure implementation.", ["SC5020F", "MX7000", "All-Flash"]],
  ["Enterprise NAS & File Services", "Isilon/PowerScale, Synology and QNAP for SMB/NFS, AD integration, permissions, snapshots and replication.", ["PowerScale", "Synology", "QNAP", "SMB/NFS"]],
  ["Commvault Enterprise Backup", "Three-data-center Commvault infrastructure with HPE StoreOnce and Hitachi VSP G350/E790 disk-library integration.", ["Commvault", "StoreOnce", "VSP", "3-DC"]],
  ["Veeam Backup & Replication", "VMware/Hyper-V protection with HPE 3PAR repositories, proxies, retention, replication, Instant VM Recovery and health monitoring.", ["Veeam", "3PAR", "Instant Recovery"]],
  ["Rubrik Data Protection", "Policy-based VMware and Hyper-V backup/recovery including retention, recovery workflows and backup validation.", ["Rubrik", "VMware", "Hyper-V"]],
  ["Acronis Cyber Protect Cloud", "Hyper-V VM backup and Microsoft 365 protection for email and SharePoint, including backup and archiving.", ["Acronis", "M365", "Hyper-V"]],
  ["Hitachi Active/Active Data Center", "VSP 5100/5600/G350, Cisco MDS 9706 and Hitachi GAD/HUR for active/active data-center services.", ["Hitachi VSP", "GAD", "HUR", "MDS 9706"]],
  ["NetApp AFF Enterprise Storage", "AFF A300 with ONTAP, SVMs, aggregates, volumes, LUNs, SMB/NFS, iSCSI/FC, SnapMirror and VMware integration.", ["NetApp AFF", "ONTAP", "SnapMirror", "FC"]],
  ["HPE Storage & SAN Infrastructure", "HPE 3PAR/MSA and Brocade 6510 including CPGs, volumes, host mapping, FC zoning and ISL configuration.", ["3PAR", "MSA", "Brocade", "FC"]],
  ["Cross-Platform VM Migration", "VM migrations between VMware and Hyper-V using StarWind V2V and VMware vCenter Converter.", ["VMware", "Hyper-V", "V2V"]],
  ["Multi-Cloud Infrastructure", "Infrastructure across AWS, GCP, Azure and OCI covering compute, networking, storage, IAM/RBAC, security and data protection.", ["AWS", "Azure", "GCP", "OCI"]],
  ["Kubernetes & Docker Platform", "Containerized application platforms using Docker, Kubernetes and Rancher-managed K3s clusters.", ["Kubernetes", "Docker", "Rancher", "K3s"]],
  ["CI/CD & Platform Automation", "Jenkins and GitHub Actions workflows for automated application build, test and deployment processes.", ["Jenkins", "GitHub Actions", "CI/CD"]],
  ["Oracle & SAN Workload Modernization", "Multi-DC storage provisioning, SAN zoning and migration supporting Oracle RAC/ADG and NVMe-based workload transitions.", ["Oracle RAC", "ADG", "SAN", "NVMe"]]
] as const;

const profileSpecialties = [
  "Enterprise storage architecture, deployment, administration, performance tuning, data replication, migration and technology refresh across Dell EMC, Hitachi Vantara, NetApp, IBM and HPE.",
  "Backup, recovery and disaster recovery architecture, implementation, administration and restore validation with Commvault, Veritas NetBackup, Veeam, Acronis, Dell EMC NetWorker, Avamar, Data Domain and IDPA.",
  "Cisco MDS and Brocade Fibre Channel SAN fabric design, implementation, zoning, ISL/port-channel configuration, troubleshooting and lifecycle management.",
  "Cloud and cloud-native infrastructure across AWS, Microsoft Azure, Google Cloud and Oracle Cloud Infrastructure: compute, IAM, networking, storage, serverless services and security.",
  "Docker, Kubernetes, K3s and container orchestration; CI/CD automation using Jenkins, GitHub Actions, AWS CodePipeline and Azure Pipelines.",
  "Rack, blade, converged, hyperconverged and modular-chassis compute platforms: implementation, commissioning, upgrades and operations.",
  "Data-center virtualization with VMware vSphere, ESXi, vCenter, vSAN, HA/DRS, Microsoft Hyper-V and Proxmox VE.",
  "Linux and Windows Server administration, clustering, security hardening, patching, performance diagnostics and automation with PowerShell, Bash and Python.",
  "Data-center infrastructure operations: capacity planning, high availability, monitoring, incident response, OEM escalation, preventive maintenance and DR drills."
];

const tech = [
  ["Enterprise Storage & NAS", HardDrive, ["Dell EMC: Unity/Unity XT, PowerStore, PowerMax/VMAX, VNX/VNXe, CLARiiON, XtremIO, SC/Compellent, EqualLogic, PowerVault ME, VPLEX, Isilon/PowerScale", "Hitachi Vantara: VSP 5000/G/E Series, HNAS, Ops Center Administrator, HDvM, HDLM", "NetApp: ONTAP, AFF/FAS, SVM, aggregates, FlexVol, LUNs, LIFs, SnapMirror/SnapVault", "HPE: 3PAR/Primera, MSA, Nimble/Alletra; IBM enterprise storage", "NAS & protocols: SMB/CIFS, NFSv3/v4, iSCSI, FC, NVMe/FC, multipathing, snapshots, thin provisioning, deduplication and compression", "Capacity and performance: IOPS, throughput, latency, pool oversubscription, QoS, LUN masking, host groups, storage migration"]],
  ["SAN Fabric & Storage Networking", Network, ["Cisco MDS 9000/9700, NX-OS, DCNM/NDFC; Brocade Fabric OS, Web Tools, SANnav", "Fibre Channel 8/16/32G, VSAN, WWPN/WWNN, device alias, FC zoning and zonesets", "ISL/E-Port, trunking, Port Channel, principal switch, domain IDs, IVR, NPV/NPIV", "FC-NVMe, FCoE, iSCSI, host-to-array connectivity, MPIO, PowerPath, HDLM, DM-Multipath", "Fabric health, CRC/error counters, link diagnostics, firmware upgrades, change validation"]],
  ["Backup, Recovery & Cyber Resilience", ShieldCheck, ["Commvault CommServe, MediaAgent, disk libraries, DDB, storage policies, Oracle RMAN, SQL Server, VMware and file agents", "Veeam Backup & Replication, proxies, repositories, SureBackup, Instant VM Recovery, backup copy and replication", "Veritas NetBackup/Backup Exec, Rubrik, Acronis Cyber Protect Cloud, Microsoft 365 protection", "Dell EMC NetWorker, Avamar, PowerProtect Data Domain, IDPA/DPS; HPE StoreOnce, tape and S3-compatible object storage", "3-2-1-1-0 protection principles, immutability/WORM, air-gapped copies, RPO/RTO, retention, restore testing and DR drills"]],
  ["Replication, HA & Disaster Recovery", Workflow, ["Hitachi Global-Active Device (GAD), Universal Replicator (HUR), TrueCopy (TC), ShadowImage (SI)", "Dell EMC VPLEX Metro, RecoverPoint, SRDF; NetApp SnapMirror, SnapVault", "Synchronous/asynchronous replication, consistency groups, journal volumes, quorum and split-brain considerations", "Active/active and active/passive data centers, site failover/failback, replication link recovery", "Business continuity design, recovery runbooks, DR testing, application consistency and validation"]],
  ["Servers, Compute & Data Center", Server, ["Dell PowerEdge R-series and MX7000 modular chassis; HPE ProLiant, Synergy, Superdome", "Cisco UCS, IBM/Lenovo servers, Huawei FusionServer", "RAID controllers, HBA, firmware, iDRAC/iLO, BIOS/UEFI, hardware diagnostics and lifecycle management", "Converged infrastructure, capacity planning, rack integration and operational monitoring"]],
  ["Virtualization & HCI", Layers3, ["VMware ESXi, vCenter, vSphere HA/DRS, vMotion, Storage vMotion, vSAN, VCF fundamentals", "Microsoft Hyper-V, Failover Clustering, Live Migration, Hyper-V Replica, Cluster Shared Volumes", "Proxmox VE, KVM/QEMU, Corosync, HA Manager, Ceph/RBD concepts", "Dell VxRail, Sangfor HCI, Huawei DCS/FusionCompute, HCI, virtual networking, datastore lifecycle, P2V/V2V, StarWind V2V", "Availability design, VM migration, storage integration, performance tuning and recovery"]],
  ["Public Cloud & Architecture", Cloud, ["AWS: Organizations, IAM/Identity Center, VPC, EC2, ECS/Fargate, S3, RDS/Aurora, ALB, Route 53, CloudFront, Amplify, SES/SNS, CloudWatch, KMS, Secrets Manager", "Microsoft Azure: VMs, VNets, storage, RBAC, Azure Backup, AKS, Azure Pipelines", "Google Cloud: IAM, VPC, Compute Engine, Cloud Storage, GKE and cloud architecture", "Oracle Cloud Infrastructure: IAM, VCN, compute, block/object storage and cloud networking", "Multi-account governance, least privilege, hybrid connectivity, cost awareness, security baselines and disaster recovery"]],
  ["Containers, Kubernetes & DevOps", Boxes, ["Docker, Kubernetes, K3s, Rancher, Helm, namespaces, RBAC, Ingress, Services and Deployments", "PersistentVolume/PersistentVolumeClaim, StorageClass, CSI drivers, dynamic provisioning, snapshots and storage integration", "AWS EKS, Azure AKS, Google GKE; container networking and persistent workloads", "Jenkins, GitHub Actions, GitLab CI/CD, AWS CodePipeline, Azure Pipelines", "Git, Terraform/IaC concepts, Bash, PowerShell, Python, automated build/test/deployment"]],
  ["Operating Systems, Security & Observability", Terminal, ["RHEL, CentOS, Ubuntu, Linux systemd, LVM, multipath, NFS, SSH, SELinux and shell scripting", "Windows Server 2012–2022, Active Directory, DNS, DHCP, Group Policy, PowerShell", "NGINX, Apache HTTP Server, HAProxy, Squid (Linux forward/reverse proxy), BIND, certificates/TLS, firewall and network troubleshooting", "Messaging, streaming & caching: Apache Kafka, RabbitMQ, Redis; service availability, performance and operational troubleshooting", "Prometheus, Grafana, CloudWatch, ELK/Elasticsearch, syslog and performance metrics", "Patching, vulnerability remediation, least-privilege access, change management and incident analysis"]]
] as const;

const certifications = [
  "Google Cloud Certified — Professional Cloud Architect",
  "Certified Kubernetes Administrator (CKA)",
  "Hitachi Vantara Qualified Professional — Global-Active Device",
  "Hitachi Vantara Qualified Professional — Universal Replicator",
  "Microsoft Certified: Azure Fundamentals",
  "Red Hat Certified Engineer (RHCE)",
  "Red Hat Certified System Administrator (RHCSA)",
  "Commvault Certified Professional",
  "VMware Certified Specialist — vSAN",
  "VMware Certified Professional — Data Center Virtualization (VCP-DCV)",
  "Dell Specialist — Implementation Engineer, PowerEdge MX Modular",
  "Dell Specialist — Implementation Engineer, Unity Solutions",
  "Dell Specialist — Technology Architect, Midrange Storage Solutions",
  "Dell Associate — Information Storage and Management"
];

const training = [
  "Hitachi Ops Center Administration & Replication — Singapore", "Managing Hitachi Universal Replicator — Singapore",
  "Managing In-System Replication — Singapore", "Operating and Managing Global-Active Device — Singapore",
  "Dell EMC VNX Unified Storage Installation & Maintenance — Singapore", "Cisco & Brocade SAN Management — Singapore",
  "Dell EMC Avamar Management, Installation & Configuration", "Dell EMC VMAX3 Installation & Maintenance",
  "Dell EMC NetWorker Implementation & Management", "Data Protection & Management", "VPLEX Implementation",
  "NetApp ONTAP 9.8 Cluster Administration & Data Protection", "DCMDS — Configuring Cisco MDS 9000 Series Switches",
  "VMware vSphere: Install, Configure", "VMware vSAN: Deploy and Manage", "Commvault Professional Foundations & Advanced"
];

function SectionTitle({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return <div className="mb-10 max-w-4xl"><div className="kicker mb-3">{kicker}</div><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>{body && <p className="mt-4 text-slate-400 leading-7">{body}</p>}</div>;
}

const navLinks = [["Profile","about"],["Technology","technology"],["Projects","projects"],["Credentials","credentials"],["Career","experience"],["Education","education"],["Approach","approach"],["Reviews","reviews"],["Contact","contact"]];

function GlobeIK({size=44}:{size?:number}) {return <span className="globe-logo" style={{width:size,height:size}} aria-label="IK globe logo"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="2"/><ellipse cx="32" cy="32" rx="12" ry="27" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".65"/><path d="M5 32h54M11 18h42M11 46h42" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".55"/></svg><span>IK</span></span>}

function DataCenterScene(){return <div className="datacenter-scene" aria-hidden="true"><div className="dc-binary">{Array.from({length:13},(_,i)=><span key={i}>{'101101001011010010100111000101001010110101100101101001'.slice(i,i+36)}</span>)}</div><div className="dc-racks">{Array.from({length:9},(_,r)=><div className="dc-rack" key={r}><div className="rack-label">RACK {String(r+1).padStart(2,'0')}</div>{Array.from({length:12},(_,u)=><div className="rack-unit" key={u}><i/><i/><b/></div>)}</div>)}</div><div className="dc-floor"/></div>}


export default function Home() {
  return <main>
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight"><GlobeIK/><span className="brand-lockup"><span className="brand-name">IBRAHIM KHALIL</span><span className="brand-online"><i/>ONLINE</span></span></a>
        <nav className="hidden gap-5 text-sm text-slate-300 lg:flex">
          {navLinks.map(([n,id]) => <a key={id} href={`#${id}`} className="hover:text-white">{n}</a>)}
        </nav>
        <details className="mobile-menu lg:hidden"><summary aria-label="Open navigation menu"><Menu size={22}/><span>Menu</span></summary><nav className="mobile-menu-list glass" aria-label="Mobile navigation">{navLinks.map(([n,id])=><a key={id} href={`#${id}`}>{n}</a>)}</nav></details>
      </div>
    </header>

    <section id="home" className="grid-bg hero-atmosphere relative overflow-hidden border-b border-slate-800/60 pt-28">
      <DataCenterScene/>
      <div className="section hero-content relative z-10 flex min-h-[720px] items-center">
        <div className="hero-copy max-w-5xl">
          <div className="hero-disciplines mb-7" aria-label="Core engineering disciplines">{["STORAGE & SAN", "BACKUP & DR", "VIRTUALIZATION", "LINUX & WINDOWS", "CLOUD", "KUBERNETES & DEVOPS"].map((label,i) => <span className="hero-discipline" key={label}><span className="discipline-dot"/>{label}</span>)}</div>
          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">Ibrahim Khalil</h1>
          <p className="mt-5 text-xl font-semibold text-slate-200 md:text-3xl">Professional Certified Engineer &amp; Technology Architect</p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-400 md:text-lg">12+ years designing, implementing, administering, migrating and supporting enterprise on-premises and cloud infrastructure. Deep hands-on experience across enterprise storage, SAN fabrics, backup &amp; disaster recovery, virtualization, servers, multi-cloud, Kubernetes and CI/CD.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore 50+ projects <ArrowUpRight size={17}/></a>
            <a href="/Ibrahim-Khalil-CV.pdf" className="btn-secondary"><Download size={17}/> Download CV</a>
            <a href="https://www.linkedin.com/in/ibrahim88ku/" target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={17}/> LinkedIn</a>
          </div>
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {[["12+","Years experience"],["50+","Projects"],["200+","Implementations"],["4","Major clouds"]].map(([v,l]) => <div className="metric" key={l}><div className="text-2xl font-extrabold text-white">{v}</div><div className="mt-1 text-xs text-slate-500">{l}</div></div>)}
          </div>
        </div>
        <LiveTelemetry/>
      </div>
    </section>

    <section id="about" className="section">
      <SectionTitle kicker="01 / Professional profile" title="Enterprise infrastructure engineering from architecture to production operations." body="My career combines solution architecture, implementation, migration, L3 troubleshooting and operational ownership across mission-critical infrastructure. I have delivered projects for FinTech, Banking/BFSI, Telecom, Defense, Government and enterprise customers, working with multiple OEM vendors and international clients."/>
      <div className="card"><Cpu className="mb-5 text-sky-300"/><h3 className="text-xl font-semibold">Architecture, hands-on delivery & international OEM engagements</h3><p className="mt-3 leading-7 text-slate-300">I work across the full infrastructure lifecycle: requirements, assessment, architecture, implementation, migration, validation, performance optimization, protection, disaster recovery and operational support. My strongest depth is in enterprise storage, SAN and data protection, extended by virtualization, cloud and container platforms.</p><p className="mt-4 leading-7 text-slate-300">I have delivered multi-vendor OEM infrastructure projects and supported clients across the United States, Canada, Australia, Europe (including Germany, the Netherlands and Switzerland), the Middle East (including Saudi Arabia and the UAE), and Asia (including India, Bangladesh, Singapore, Malaysia and Hong Kong). Engagements span on-site implementations, partner/OEM collaboration, remote consulting, production support and cross-region delivery.</p><p className="mt-4 text-sm leading-6 text-slate-400">Industry exposure: financial services, banking, telecommunications, government, defense and enterprise infrastructure.</p></div>
      <div className="card mt-5"><h3 className="text-xl font-semibold">Core technical competencies</h3><ul className="mt-5 grid gap-4 lg:grid-cols-2">{profileSpecialties.map(item => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300"><CheckCircle2 size={17} className="mt-1 shrink-0 text-cyan-300"/>{item}</li>)}</ul></div>
    </section>

    <section id="technology" className="section border-t border-slate-800/60">
      <SectionTitle kicker="02 / Technology stack" title="Platforms, products & engineering domains" body="A multi-vendor technology landscape developed through production operations, customer implementations, migrations, support engagements, training and architecture work."/>
      <div className="grid gap-5 md:grid-cols-2">
        {tech.map(([title,Icon,items]) => <div className="card" key={title}><Icon className="mb-4 text-sky-300"/><h3 className="text-lg font-bold">{title}</h3><div className="mt-4 grid gap-2">{items.map(x => <div key={x} className="flex gap-2 text-sm leading-6 text-slate-400"><span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-sky-400"/>{x}</div>)}</div></div>)}
      </div>
    </section>

    <section id="projects" className="section border-t border-slate-800/60">
      <SectionTitle kicker="03 / Project portfolio" title="Selected enterprise projects & implementations" body="50+ projects and 200+ implementations across storage, SAN, servers, backup/recovery, DR, virtualization, cloud, Kubernetes/K3s and CI/CD. The entries below combine CV-selected work with additional current technical portfolio themes."/>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(([title,text,tags],i) => <article className="card group" key={title}><div className="flex items-start justify-between"><span className="kicker">Project {String(i+1).padStart(2,"0")}</span><ArrowUpRight size={18} className="text-slate-600 group-hover:text-sky-300"/></div><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></article>)}
      </div>
    </section>

    <section id="credentials" className="section border-t border-slate-800/60">
      <SectionTitle kicker="04 / Credentials" title="Professional certifications & technical training" body="Vendor and platform credentials spanning cloud, Kubernetes, Linux, virtualization, enterprise storage, replication and data protection."/>
      <div className="grid gap-8 lg:grid-cols-2">
        <div><h3 className="mb-4 flex items-center gap-2 text-xl font-bold"><Award className="text-sky-300"/> Certifications</h3><div className="space-y-2">{certifications.map((c,i) => <div className="credential" key={c}><span className="font-mono text-xs text-sky-400">{String(i+1).padStart(2,"0")}</span><span>{c}</span></div>)}</div></div>
        <div><h3 className="mb-4 flex items-center gap-2 text-xl font-bold"><BookOpen className="text-sky-300"/> Professional training</h3><div className="space-y-2">{training.map((c,i) => <div className="credential" key={c}><span className="font-mono text-xs text-sky-400">{String(i+1).padStart(2,"0")}</span><span>{c}</span></div>)}</div></div>
      </div>
    </section>

    <section id="experience" className="section border-t border-slate-800/60">
      <SectionTitle kicker="05 / Career" title="Professional experience" body="Progression from enterprise implementation and 24×7 support to technical leadership, architecture and platform infrastructure engineering."/>
      <div className="space-y-6">
        {experience.map((e,i) => <article className="card" key={e.role}>
          <div className="grid gap-5 md:grid-cols-[220px_1fr]"><div><div className="kicker">{e.period}</div><div className="mt-3 text-xs text-slate-500">Role {String(i+1).padStart(2,"0")}</div></div><div><h3 className="text-xl font-bold md:text-2xl">{e.role}</h3><p className="mt-1 text-sky-200/80">{e.company}</p><ul className="mt-5 space-y-3">{e.bullets.map(b => <li key={b} className="flex gap-3 text-sm leading-6 text-slate-400"><CheckCircle2 size={16} className="mt-1 shrink-0 text-sky-400/70"/>{b}</li>)}</ul></div></div>
        </article>)}
      </div>
    </section>

    <section id="education" className="section border-t border-slate-800/60">
      <SectionTitle kicker="06 / Education & research" title="Academic background"/>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="card"><GraduationCap className="mb-4 text-sky-300"/><div className="kicker">2018</div><h3 className="mt-2 text-xl font-bold">M.Sc. in Computer Science</h3><p className="mt-2 text-slate-400">Jahangirnagar University · Savar, Dhaka</p></div>
        <div className="card"><GraduationCap className="mb-4 text-sky-300"/><div className="kicker">2013</div><h3 className="mt-2 text-xl font-bold">B.Sc. (Engg.) in Electronics & Communication Engineering</h3><p className="mt-2 text-slate-400">Khulna University · School of Science, Engineering & Technology</p></div>
        <div className="card md:col-span-2"><BookOpen className="mb-4 text-emerald-300"/><div className="kicker">Research & publication</div><h3 className="mt-2 text-xl font-bold">WDM Transmission for Free Space Optics under Different Atmospheric Conditions</h3><p className="mt-3 text-sm leading-6 text-slate-400">STM Journals, Trends in Opto-electro & Optical Communications, Vol. 4, Issue 1, ISSN 2231-0401, 2014.</p><a className="mt-4 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200" href="https://engineeringjournals.stmjournals.in/index.php/TOEOC/article/view/1829" target="_blank" rel="noreferrer">Publication reference <ExternalLink size={14}/></a></div>
      </div>
    </section>

    <section id="approach" className="section border-t border-slate-800/60">
      <SectionTitle kicker="07 / Engineering approach" title="From requirement to resilient production platform"/>
      <div className="grid gap-3 md:grid-cols-5">{[["01","Assess"],["02","Architect"],["03","Implement"],["04","Validate"],["05","Operate & Improve"]].map(([n,x]) => <div className="card" key={x}><div className="kicker">{n}</div><div className="mt-2 font-semibold">{x}</div></div>)}</div>
    </section>

    <section id="reviews" className="section border-t border-slate-800/60">
      <SectionTitle kicker="08 / Reviews" title="Client Feedback"/>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          "Enterprise storage and SAN projects benefit from rigorous planning, careful Fibre Channel zoning, and migration strategies that prioritize production availability across Dell EMC, Hitachi and NetApp platforms.",
          "Reliable backup and disaster recovery depend on tested restore procedures, clear recovery objectives, and consistent operations across Commvault, Veeam and multi-data-center replication environments.",
          "Complex VMware, Hyper-V, cloud and Kubernetes deployments demand an engineer who connects infrastructure architecture with practical implementation, automation and long-term operational resilience."
        ].map((quote, i) => <article className="card" key={i}>
          <div className="text-amber-300 tracking-[.22em] text-lg" aria-label="Five decorative stars">★★★★★</div>
          <p className="mt-4 text-base italic leading-8 text-slate-200">“{quote}”</p>
        </article>)}
      </div>
      <p className="mt-4 text-xs text-slate-500">Editorial portfolio highlights; not attributed or verified customer testimonials. Replace with permission-approved client quotes when available.</p>
    </section>

    <section id="contact" className="section border-t border-slate-800/60 pb-12">
      <div className="card text-center"><div className="kicker">09 / Contact</div><h2 className="mt-3 text-3xl font-bold">Connect for infrastructure & technology engineering.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">Enterprise storage, SAN, backup &amp; DR, virtualization, cloud, Kubernetes, DevOps and platform infrastructure opportunities.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a className="btn-primary" href="mailto:ibrahim88ku@gmail.com"><Mail size={17}/> Email</a><a className="btn-secondary" href="https://www.linkedin.com/in/ibrahim88ku/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a className="btn-secondary" href="https://wa.me/ibrahim88ku" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp · @ibrahim88ku</a><a className="btn-secondary" href="/Ibrahim-Khalil-CV.pdf"><Download size={17}/> CV</a></div></div>
      <footer className="pt-10 text-center text-xs text-slate-600">© {new Date().getFullYear()} Ibrahim Khalil · Professional Certified Engineer & Technology Architect</footer>
    </section>
  </main>;
}
