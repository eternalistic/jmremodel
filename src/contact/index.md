---
layout: layout.html
---

<div class="container">
  <div class="eyebrow"></div>
  <h1>Contact</h1>

<section id="contact-us" class="section-row contact-us">
    <div class="two-column two-column__50-50">
      <div class="column-first column">
        <p>For more information about our services please fill out the form below or give us a call.</p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <div class="form-item form-item__name">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="form-item form-item__group">
            <div class="two-column two-column__50-50 two-column__align-center">
              <div class="form-item form-item__phone">
                <label for="phone">Phone</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div class="form-item form-item__email form-item__reset">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
          </div>
          <div class="form-item form-item__message">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" color="60" /></textarea>
          </div>
          <div class="form-item form-item__submit">
            <button type="submit" class="button">Send</button>
          </div>
        </form>
      </div>
      <div class="column-last column">
        <ul class="contact-list">
          <li class="contact-list__item">(509) 429-4935</li>
          <li class="contact-list__item"><a href="mailto:info@vancefabrication.com" class="contact-list__link">info@vancefabrication.com</a></li>
          <li class="contact-list__item">24 Hour Service Available</li>
        </ul>
      </div>
    </div>
</section>


</div>
