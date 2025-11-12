import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero 
        image="/assets/cover.jpg"
        heading="Letters to You Films"
        subheading="Cinematic stories of love — crafted with emotion and light."
      />

      <section className="intro">
        <h2>Stories that linger beyond the wedding day</h2>
        <p>We create wedding films that feel honest, poetic, and cinematic — preserving real emotion and fleeting moments.</p>
      </section>

      <section className="grid">
        <div><img src="/assets/sample1.jpg" alt="Wedding 1" /></div>
        <div><img src="/assets/sample2.jpg" alt="Wedding 2" /></div>
        <div><img src="/assets/sample3.jpg" alt="Wedding 3" /></div>
      </section>

      <section className="quote">
        <blockquote>
          “A love letter in motion — every glance, every breath, every heartbeat.”
        </blockquote>
      </section>
    </>
  );
}
