import { Outlet, Links, Meta, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

export const meta = () => [
  { title: "Letters to You Films" },
  { name: "description", content: "Cinematic wedding films — romantic, timeless, real." },
];

export default function Root() {
  return (
    <html lang="en">
      <head><Meta /><Links /></head>
      <body>
        <Navbar />
        <main><Outlet /></main>
        <Footer />
        <ScrollRestoration /><Scripts />
      </body>
    </html>
  );
}

