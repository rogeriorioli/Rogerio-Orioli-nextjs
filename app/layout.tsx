import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rogeriorioli.vercel.app"),
  title: {
    default: "Carlos Rogério Orioli — Full Stack Developer",
    template: "%s | Carlos Rogério Orioli",
  },
  description:
    "Portfólio de Carlos Rogério Orioli, desenvolvedor Full Stack especializado em React, Next.js, Node.js, e-commerce, automação e IA.",
  applicationName: "Carlos Rogério Orioli",
  keywords: [
    "Carlos Rogério Orioli",
    "Full Stack Developer",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "Node.js",
    "automação com IA",
    "inteligência artificial",
    "VTEX",
    "Shopify",
    "Florianópolis",
  ],
  authors: [{ name: "Carlos Rogério Orioli", url: "https://rogeriorioli.vercel.app" }],
  creator: "Carlos Rogério Orioli",
  publisher: "Carlos Rogério Orioli",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "https://rogeriorioli.vercel.app",
    siteName: "Carlos Rogério Orioli",
    title: "Carlos Rogério Orioli — Full Stack Developer",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, Node.js, e-commerce, automação e IA.",
    images: [
      {
        url: "/carlos_orioli.png",
        width: 1122,
        height: 1402,
        alt: "Carlos Rogério Orioli — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Rogério Orioli — Full Stack Developer",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, Node.js, e-commerce, automação e IA.",
    images: ["/carlos_orioli.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
