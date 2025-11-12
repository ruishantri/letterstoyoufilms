interface HeroProps {
  image?: string;
  heading: string;
  subheading?: string;
}

export default function Hero({ image, heading, subheading }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h1>{heading}</h1>
        {subheading && <p>{subheading}</p>}
      </div>
    </section>
  );
}
