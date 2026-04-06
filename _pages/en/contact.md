---
layout: archive
title: ""
permalink: /en/contact/
author_profile: false
lang: en
lang_pair: /contact/
---

<style>
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }
  .contact-info {
    flex: 1;
    min-width: 300px;
  }
  .contact-info h1 { font-size: 2.5em; margin-bottom: 20px; font-weight: bold; }
  .contact-info p { margin-bottom: 15px; line-height: 1.6; color: #333; }
  .contact-info a { color: #d9534f; text-decoration: none; border-bottom: 1px dotted #d9534f; }
  .contact-info a:hover { border-bottom: 1px solid #d9534f; }
  .address-block { margin-top: 30px; font-style: normal; color: #444; }
  .contact-form {
    flex: 1.2;
    min-width: 300px;
  }
  .form-group { margin-bottom: 20px; }
  .form-group label { display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9em; color: #333; }
  .form-group input, .form-group textarea, .form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 1em;
    box-sizing: border-box;
  }
  .form-group textarea { height: 150px; resize: vertical; }
  .submit-btn {
    background-color: #d9534f;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }
  .submit-btn:hover { background-color: #c9302c; }
</style>

<div class="contact-container">

  <div class="contact-info">
    <h1>Get in Touch...</h1>

    <p>For academic inquiries, please contact me directly.</p>

    <p>✉️ <a href="mailto:yrtan@ceibs.edu">yrtan@ceibs.edu</a></p>

    <p style="margin-top: 30px;">
      For other matters, please contact my research associate Ms. Zhang (Maggie).</p>
    <p>✉️ <a href="mailto:zmaggie2@ceibs.edu">zmaggie2@ceibs.edu</a></p>

    <div class="address-block">
      <strong>Prof. Yinliang (Ricky) Tan</strong><br>
      CEIBS (China Europe International Business School)<br>
      Room 232, Faculty Building<br>
      699 Hongfeng Road, Pudong New Area<br>
      Shanghai, China 201206
    </div>
  </div>

  <div class="contact-form">
    <form action="https://formspree.io/f/xykgjwro" method="POST">

      <div class="form-group">
        <label>Name <span class="required">(required)</span></label>
        <input type="text" name="name" required placeholder="Your Name">
      </div>

      <div class="form-group">
        <label>Email <span class="required">(required)</span></label>
        <input type="email" name="email" required placeholder="your.email@example.com">
      </div>

      <div class="form-group">
        <label>Company <span class="required">(required)</span></label>
        <input type="text" name="company">
      </div>

      <div class="form-group">
        <label>Message <span class="required">(required)</span></label>
        <textarea name="message" required placeholder="How can I help you?"></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>

</div>
