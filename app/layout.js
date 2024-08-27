import MainNavigation from "@/components/MainNavigation";
import "../styles/globals.css";
export const metadata = {
  title: "exP Clothing Store",
  description: "Clothing Store!",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative">
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
