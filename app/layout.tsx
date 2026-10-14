import "./globals.css";
import type { Metadata } from "next";

const base = "https://ibrahim88ku.github.io";
export const metadata: Metadata = {
 title: "Ibrahim Khalil | Storage, Backup, Virtualization, Cloud, Kubernetes, DevOps",
 description: "Hire Ibrahim Khalil, a Principal Infrastructure Engineer and Technology Architect with 12+ years delivering enterprise storage, SAN, Commvault/Veeam backup, disaster recovery, VMware, Hyper-V, AWS, Azure, GCP, Kubernetes and DevOps solutions internationally.",
 metadataBase: new URL(base),
 alternates: {canonical: "/"},
 robots: {index: true, follow: true},
 applicationName: "Ibrahim Khalil — Enterprise Infrastructure Architect",
 authors: [{name:"Ibrahim Khalil",url:base}],
 creator:"Ibrahim Khalil",
 keywords: ["Ibrahim Khalil", "hire infrastructure engineer", "enterprise storage consultant", "storage architect", "SAN engineer", "Dell EMC consultant", "Hitachi VSP", "NetApp ONTAP", "Cisco MDS", "Brocade SAN", "Commvault consultant", "Veeam backup engineer", "backup and disaster recovery consultant", "VMware vSphere", "Hyper-V engineer", "Proxmox", "AWS cloud architect", "Azure engineer", "GCP", "Oracle Cloud OCI", "Kubernetes administrator", "DevOps engineer", "Linux administrator", "storage migration", "data center infrastructure", "remote infrastructure support"],
 icons: {icon:"/favicon.svg",shortcut:"/favicon.svg",apple:"/ik-logo.svg"},
 openGraph: {type:"profile",url:base,siteName:"Ibrahim Khalil — Technology Architect",title:"Ibrahim Khalil | Enterprise Infrastructure, Storage, Backup & Cloud",description:"Enterprise storage, SAN, backup & DR, virtualization, cloud, Kubernetes and DevOps consulting, architecture and implementation.",images:[{url:"/ik-logo.svg",width:128,height:128,alt:"Ibrahim Khalil IK monogram logo"}]},
 twitter: {card:"summary",title:"Ibrahim Khalil | Technology Architect",description:"Storage, SAN, Backup & DR, Virtualization, Cloud, Kubernetes & DevOps"}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 const structured = {"@context":"https://schema.org","@type":"Person",name:"Ibrahim Khalil",url:base,jobTitle:"Principal Engineer, Platform Infrastructure & DevOps",description:"Enterprise storage, backup, SAN, virtualization, cloud and Kubernetes infrastructure architect and engineer",email:"mailto:ibrahim88ku@gmail.com",sameAs:["https://www.linkedin.com/in/ibrahim88ku/"],knowsAbout:["Enterprise Storage","SAN Fabric","Backup and Disaster Recovery","Commvault","Veeam","Dell EMC","Hitachi VSP","NetApp ONTAP","VMware vSphere","Microsoft Hyper-V","AWS","Azure","Google Cloud","Kubernetes","Linux","DevOps"]};
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/>{children}</body></html>;
}
