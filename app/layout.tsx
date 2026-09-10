import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibrahim Khalil | Infrastructure, Cloud & Technology Architecture",
  description:
    "Professional portfolio of Ibrahim Khalil — infrastructure, storage, backup & DR, cloud, virtualization, Kubernetes and DevOps engineering.",
  metadataBase: new URL("https://ibrahim88ku.github.io")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}