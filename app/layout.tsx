import "./globals.css";

export const metadata = {
  title: "SHEEEEN | Premium Auto Detailing Mysore",
  description:
    "Premium car wash and detailing services in Mysore, Karnataka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts – EXACT like HTML */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Oswald:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['DM_Sans'] antialiased overflow-x-hidden selection:bg-[#053E43] selection:text-white">
        {children}
      </body>
    </html>
  );
}
