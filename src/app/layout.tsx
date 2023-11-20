import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--satoshi-font",
});

const monument = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "400",
    },
  ],
  variable: "--monument-font",
});

export const metadata = {
  title: "Niftables task",
  description: "By Samuel Ayegbusi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${monument.variable}`}>
        {children}
      </body>
    </html>
  );
}
