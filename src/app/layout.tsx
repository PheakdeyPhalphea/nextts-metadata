import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/nanbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - kdeyShop",
    default: "Shop!68",
  },
  description: "This is my lucky  shop description",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: "kdeyshop",
    description: "This is description shop",
    images: [
      "https://i.pinimg.com/564x/55/a0/44/55a0447cb116f2d012cf1e1906e9042c.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUILayout>
          <NavbarComponent />
          <Suspense fallback={<LoadingComponent />}>
            <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
          </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
