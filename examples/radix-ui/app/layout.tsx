import { Provider } from "./provider";
import "../styles/globals.css";

export const metadata = {
  title: "Chakra UI Example",
  description: "A responsive Next.js interface built with Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
