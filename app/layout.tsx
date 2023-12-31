import "./styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const dataFooter = {
  socials: [
    {
      name: "twitter",
      href: "https://twitter.com/BrickProtocol",
      width: 28,
      height: 28,
    },
    {
      name: "discord",
      href: "https://twitter.com/BrickProtocol",
      width: 28,
      height: 28,
    },
  ],
  items: [
    {
      title: "Resources",
      column: [
        {
          link: "Documentation",
          url: "",
        },
        {
          link: "Github",
          url: "",
        },
        {
          link: "Notion",
          url: "",
        },
      ],
    },
    {
      title: "Community",
      column: [
        {
          link: "Discord",
          url: "",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer {...dataFooter} />
      </body>
    </html>
  );
}
