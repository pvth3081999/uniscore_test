import type { Metadata } from "next";
import Header from "../components/layout/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uniscore Football",
  description: "Football Player Details",
  icons: {
    icon: "/Icons/Football-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
