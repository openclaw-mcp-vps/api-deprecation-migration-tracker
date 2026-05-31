import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Deprecation Migration Tracker",
  description: "Track API deprecations and plan migration timelines. Monitor changelogs, get alerted on deprecations, and track your team's migration progress."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7a4f3fbb-5971-4d5a-a8c0-533cec5d591c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
