import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HelloBar from "@/components/home/HelloBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <HelloBar />
      <section className="relative">
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
}
