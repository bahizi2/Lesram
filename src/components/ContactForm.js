import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" row="4"></textarea>
        <button className="show">Send Message</button>
      </form>
      {/* <form>
                <input type="text" name="First Name" placeholder="First Name" required>
                <input type="text" name="Last Name" placeholder="Last Name" required>
            <input type="email" name="Email Address" placeholder="Your Email Address" required>
            <textarea name="Message"   rows="7" placeholder="Message" required></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form> */}
    </div>
  );
}

export default ContactForm;
