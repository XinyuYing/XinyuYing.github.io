---
layout: archive
title: ""
permalink: /contact/
author_profile: false
sidebar:
  nav: "docs"
---

<style>
  /* 容器：使用 Flexbox 实现左右布局 */
  .contact-container {
    display: flex;
    flex-wrap: wrap; /* 手机端自动换行 */
    gap: 50px;       /* 左右两栏的间距 */
    margin-top: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }

  /* 左边：联系信息 */
  .contact-info {
    flex: 1; /* 占用 1 份空间 */
    min-width: 300px;
  }
  
  .contact-info h1 { font-size: 2.5em; margin-bottom: 20px; font-weight: bold; }
  .contact-info p { margin-bottom: 15px; line-height: 1.6; color: #333; }
  .contact-info a { color: #d9534f; text-decoration: none; border-bottom: 1px dotted #d9534f; }
  .contact-info a:hover { border-bottom: 1px solid #d9534f; }
  .address-block { margin-top: 30px; font-style: normal; color: #444; }

  /* 右边：表单区域 */
  .contact-form {
    flex: 1.2; /* 占用 1.2 份空间，稍微宽一点 */
    min-width: 300px;
  }

  /* 表单控件样式 */
  .form-group { margin-bottom: 20px; }
  .form-group label { display: block; margin-bottom: 8px; font-weight: 600; font-size: 0.9em; color: #333; }
  .form-group input, .form-group textarea, .form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc; /* 浅灰色边框 */
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 1em;
    box-sizing: border-box; /* 确保 padding 不会撑破宽度 */
  }
  .form-group textarea { height: 150px; resize: vertical; }

  /* 发送按钮样式 */
  .submit-btn {
    background-color: #d9534f; /* 红色按钮，类似截图 */
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
    <h1>Get In Touch...</h1>
    
    <p>Connect with me for speaking engagements and media commentary.</p>
    
    <p>✉️ <a href="mailto:yrtan@ceibs.edu">yrtan@ceibs.edu</a></p>

    <p style="margin-top: 30px;">
      For all other inquiries, please contact my assistant at <a href="mailto:assistant@example.com">assistant@example.com</a>
    </p>

    <div class="address-block">
      <strong>Prof. Yinliang Tan</strong><br>
      China Europe International Business School (CEIBS)<br>
      699 Hongfeng Road, Pudong<br>
      Shanghai, P.R.C. 201206<br>
      China
    </div>
  </div>

  <div class="contact-form">
    <form action="https://formspree.io/f/xykgjwro" method="POST">
      
      <div class="form-group">
        <label>Name (required)</label>
        <input type="text" name="name" required placeholder="Your Name">
      </div>

      <div class="form-group">
        <label>Email (required)</label>
        <input type="email" name="email" required placeholder="your.email@example.com">
      </div>

      <div class="form-group">
        <label>Company / Organization</label>
        <input type="text" name="company">
      </div>

      <div class="form-group">
        <label>Message (required)</label>
        <textarea name="message" required placeholder="How can I help you?"></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>

</div>
