import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afrasiyab | SQA Engineer Portfolio",
  description: "Portfolio of Afrasiyab, an SQA Engineer specialized in Manual, Automated, API, and UI/UX testing.",
  keywords: "Afrasiyab, SQA Engineer, QA, Software Quality Assurance, Portfolio, Playwright, API Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
