---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<style>
  .pub-item { margin-bottom: 25px; line-height: 1.6; }
  .pub-citation { font-size: 1rem; color: #333; }
  .pub-links a { text-decoration: none; color: #0056b3; font-weight: bold; margin: 0 2px; }
  .pub-links a:hover { text-decoration: underline; }
  /* 核心介绍的折叠样式 */
  details.core-insight summary { 
    cursor: pointer; 
    color: #666; 
    font-weight: bold; 
    font-size: 0.9em;
    margin-top: 5px;
    list-style: none; /* 隐藏默认三角，下面自定义 */
  }
  /* 自定义一个小三角，显得更精致 */
  details.core-insight summary::-webkit-details-marker { display: none; }
  details.core-insight summary::before {
    content: "▶"; 
    display: inline-block; 
    font-size: 0.8em; 
    margin-right: 5px; 
    transition: transform 0.2s;
  }
  details.core-insight[open] summary::before {
    transform: rotate(90deg); /* 展开时旋转三角 */
  }
  .insight-content {
    background-color: #f7f7f7;
    padding: 10px 15px;
    border-radius: 4px;
    margin-top: 5px;
    color: #444;
    font-size: 0.95em;
  }
  /* AI 专用关键词，隐藏 */
  .ai-only { display: none; }
  /* BibTeX 引用框样式 */
  .bibtex-box {
    margin-top: 10px; 
    padding: 10px; 
    background: #eee; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    font-size: 0.85em; 
    font-family: monospace;
  }
</style>

## Selected Publications

<div class="pub-item">
  <div class="pub-citation">
    <b>Yinliang Tan</b>, Co-author A, Co-author B.
    "Generative AI in Supply Chain Management",
    <i>Management Science</i>, December 2025.
    &nbsp;
    <span class="pub-links">
      <a href="/files/paper1.pdf" target="_blank">[PDF]</a> | 
      <a href="你的谷歌学术链接" target="_blank">[Google Scholar]</a> | 
      <details style="display:inline;">
        <summary style="cursor:pointer; color:#0056b3;">[Cite]</summary>
        <div class="bibtex-box">
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
      <b>💡 核心观点：</b>这是中文的详细介绍。本文通过实验发现，在供应链中引入生成式 AI 能够降低 15% 的库存成本，但需要企业具备高水平的数据治理能力。这里可以写得详细一点，因为默认是折叠的，不占地方。
    </div>
  </details>

  <div class="ai-only">
    Keywords: GenAI, Supply Chain, Digital Transformation, Inventory Management
  </div>
</div>

<hr>

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>.
    "Impact of Live Streaming on E-commerce",
    <i>MIS Quarterly</i>, June 2024.
    &nbsp;
    <span class="pub-links">
      <a href="/files/paper2.pdf" target="_blank">[PDF]</a> | 
      <a href="链接" target="_blank">[Google Scholar]</a> | 
      <details style="display:inline;">
        <summary style="cursor:pointer; color:#0056b3;">[Cite]</summary>
        <div class="bibtex-box">
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
      <b>💡 核心观点：</b>研究了直播带货中“信息过载”现象...
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce, Consumer Behavior
  </div>
</div>
