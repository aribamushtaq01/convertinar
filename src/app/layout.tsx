import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  title: {
    default: "ConvertInAr – AR Product Visualization & 3D Model Generator",
    template: "%s | ConvertInAr",
  },
  description:
    "Turn any image into a 3D model instantly. Create AR QR codes for product visualization, virtual try-before-you-buy, and immersive AR experiences — no app required. Powered by AI & iPhone LiDAR.",

  keywords: [
    // AR & QR
    "AR QR code",
    "AR product visualization",
    "augmented reality QR code",
    "AR experiences",
    "no app AR",

    // 3D Model Generation
    "AI 3D model generator",
    "image to 3D model",
    "turn image into 3D",
    "3D models from photos",
    "photo to 3D model",

    // Scanning
    "iPhone LiDAR 3D scanner",
    "3D scanner app",
    "LiDAR scanning",

    // E-commerce & Try-On
    "virtual try before you buy",
    "AR try on",
    "e-commerce 3D models",
    "product design 3D",
    "3D product visualization",

    // Brand
    "ConvertInAr",
  ],

  authors: [{ name: "ConvertInAr" }],
  creator: "ConvertInAr",

  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: "https://convertinar.com",
    siteName: "ConvertInAr",
    title: "ConvertInAr – Turn Images into 3D Models & AR Experiences",
    description:
      "One QR Code. Infinite AR Possibilities. Convert product images into 3D models, enable virtual try-before-you-buy, and launch AR experiences on print, social, billboards & more — no app needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConvertInAr – AR Product Visualization & AI 3D Model Generator",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "ConvertInAr – AI 3D Models & AR QR Experiences",
    description:
      "Transform any image into a 3D model. Launch AR experiences via QR code. Virtual try-before-you-buy for e-commerce, powered by AI & iPhone LiDAR. No app required.",
    images: ["/og-image.png"],
    creator: "@ConvertInAr",
  },

  // ── Crawling & Canonicals ─────────────────────────────────
  metadataBase: new URL("https://convertinar.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}