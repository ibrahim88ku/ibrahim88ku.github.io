import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibrahim Khalil | Storage, Backup, Virtualization, Cloud, Kubernetes, DevOps",
  description: "Ibrahim Khalil — Professional Certified Engineer & Technology Architect with 12+ years across enterprise storage, SAN, backup & DR, virtualization, cloud, Kubernetes and DevOps.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://ibrahim88ku.github.io"),
  keywords: ["Ibrahim Khalil", "Technology Architect", "Storage Engineer", "SAN", "Commvault", "NetApp", "Hitachi", "Dell EMC", "VMware", "Hyper-V", "AWS", "Azure", "GCP", "Kubernetes", "DevOps"],
  openGraph: { title: "Ibrahim Khalil | Technology Architect", description: "Enterprise infrastructure, storage, backup & DR, cloud, virtualization, Kubernetes and DevOps portfolio.", url: "https://ibrahim88ku.github.io", siteName: "Ibrahim Khalil — Technical Portfolio", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
