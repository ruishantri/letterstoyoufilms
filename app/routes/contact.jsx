export default function Contact() {
    return (
      <section className="page">
        <h2>Contact</h2>
        <p>We’d love to hear your story. Tell us about your day below:</p>
        <form action="https://formspree.io/f/yourformid" method="POST" className="contact-form">
          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows={4} /></label>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  