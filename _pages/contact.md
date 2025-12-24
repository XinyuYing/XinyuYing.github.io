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

  /* 中英文标签样式 */
  .contact-info strong {
    font-size: 1.2em;
    color: #333;
  }
  
  .contact-info p span {
    color: #666;
    font-size: 0.9em;
  }
</style>

<div class="contact-container">
  
  <div class="contact-info">
    <h1>保持联系...</h1> 
    
    <p>演讲活动或媒体评论请和我联系</p>
    
    <p>✉️ <a href="mailto:yrtan@ceibs.edu">yrtan@ceibs.edu</a></p>

    <p style="margin-top: 30px;">
      对于其他所有咨询事宜，请联系我的助手Maggie</p>
    <p>✉️ <a href="mailto:zmaggie2@ceibs.edu">zmaggie2@ceibs.edu</a>
    </p>

    <div class="address-block">
      <strong>谭寅亮教授</strong><br>
      中欧国际工商学院 (CEIBS)<br>
      上海市浦东新区洪丰路699号<br>
      上海，中国 201206<br>
      中国
    </div>
  </div>

  <div class="contact-form">
    <form action="https://formspree.io/f/xykgjwro" method="POST">
      
      <div class="form-group">
        <label>姓名/Name <span class="required">(必填/required)</span></label>
        <input type="text" name="name" required placeholder="Your Name">
      </div>

      <div class="form-group">
        <label>电子邮箱/Email <span class="required">(必填/required)</span></label>
        <input type="email" name="email" required placeholder="your.email@example.com">
      </div>

      <div class="form-group">
        <label>公司/Company <span class="required">(必填/required)</span></label>
        <input type="text" name="company">
      </div>

      <div class="form-group">
        <label>联系事由/Message <span class="required">(必填/required)</span></label>
        <textarea name="message" required placeholder="How can I help you?"></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>

</div>
