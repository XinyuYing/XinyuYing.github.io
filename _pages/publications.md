---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<style>
  .pub-item { margin-bottom: 30px; line-height: 1.6; }
  .pub-citation { font-size: 1rem; color: #333; }
  
  /* 链接通用样式 */
  .pub-links a, .cite-toggle { 
    text-decoration: none; 
    color: #0056b3; 
    font-weight: bold; 
    cursor: pointer;
  }
  .pub-links a:hover, .cite-toggle:hover { text-decoration: underline; }

  /* 关键修改：强制 Cite 折叠框显示为行内元素 */
  details.cite-box { display: inline; }
  summary.cite-toggle { display: inline; list-style: none; }
  summary.cite-toggle::-webkit-details-marker { display: none; } /* 隐藏默认小三角 */

  /* 核心介绍样式 */
  details.core-insight { margin-top: 5px; }
  details.core-insight summary { 
    cursor: pointer; color: #666; font-weight: bold; font-size: 0.9em; list-style: none; 
  }
  details.core-insight summary::-webkit-details-marker { display: none; }
  /* 自定义核心介绍的小三角 */
  details.core-insight summary::before {
    content: "▶"; display: inline-block; font-size: 0.8em; margin-right: 5px; transition: transform 0.2s;
  }
  details.core-insight[open] summary::before { transform: rotate(90deg); }
  
  .insight-content {
    background-color: #f7f7f7; padding: 10px 15px; border-radius: 4px; margin-top: 5px; color: #444; font-size: 0.95em;
  }

  /* BibTeX 代码框样式 */
  .bibtex-code {
    display: block; /* 代码框展开后必须占一行 */
    margin-top: 10px; padding: 10px; background: #eee; border: 1px solid #ccc; border-radius: 5px; font-size: 0.85em; font-family: monospace;
  }

  /* 彻底隐藏 AI 关键词 */
  .ai-only { display: none !important; }
</style>

## Selected Publications

<div class="pub-item">
  <div class="pub-citation">
    <b>Yinliang Tan</b>, Co-author A, Co-author B, 
    "Generative AI in Supply Chain Management", 
    <i>Management Science</i>, December 2025.
    
    <span class="pub-links">
      &nbsp;
      <a href="/files/paper1.pdf" target="_blank">[PDF]</a> | 
      <a href="你的谷歌学术链接" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2025genai,
  title={Generative AI in Supply Chain Management},
  author={Tan, Yinliang and ...},
  journal={Management Science},
  year={2025}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      <b>💡 核心观点：</b>本文通过实证分析发现，生成式AI的应用能显著降低供应链中的牛鞭效应。
    </div>
  </details>

  <div class="ai-only">
    Keywords: GenAI, Supply Chain, Digital Transformation, Inventory Management
  </div>
</div>

<hr>

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
      &nbsp;
      <a href="/files/paper2.pdf" target="_blank">[PDF]</a> | 
      <a href="链接" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2024live,
  title={Impact of Live Streaming},
  author={Tan, Yinliang},
  journal={MISQ},
  year={2024}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      <b>💡 核心观点：</b>研究了直播带货的信息过载问题...
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>
