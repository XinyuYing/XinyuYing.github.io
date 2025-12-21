---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<style>
  /* 基础排版 */
  .pub-item { margin-bottom: 35px; line-height: 1.6; }
  .pub-citation { font-size: 1rem; color: #222; }
  
  /* 链接通用样式 */
  .pub-links a, .cite-toggle { 
    text-decoration: none; 
    color: #0056b3; 
    font-weight: bold; 
    cursor: pointer;
    margin-left: 3px; /* 链接之间稍微留点空隙 */
  }
  .pub-links a:hover, .cite-toggle:hover { text-decoration: underline; }

  /* 关键修改：强制 Cite 不换行 */
  details.cite-box { display: inline; }
  summary.cite-toggle { display: inline; list-style: none; }
  summary.cite-toggle::-webkit-details-marker { display: none; }

  /* 核心介绍 (Core Insight) 的样式 - 已去除灰框 */
  details.core-insight { margin-top: 3px; }
  details.core-insight summary { 
    cursor: pointer; 
    color: #666; 
    font-size: 0.9em; 
    list-style: none; 
  }
  details.core-insight summary::-webkit-details-marker { display: none; }
  
  /* 自定义小三角 */
  details.core-insight summary::before {
    content: "▶"; display: inline-block; font-size: 0.8em; margin-right: 5px; transition: transform 0.2s; color: #999;
  }
  details.core-insight[open] summary::before { transform: rotate(90deg); }
  
  /* 展开后的文字内容 - 纯文字，无背景 */
  .insight-content {
    background-color: transparent; /* 透明背景 */
    padding: 2px 0 5px 18px; /* 左边稍微缩进一点点，对齐文字 */
    margin-top: 0; 
    color: #555; /* 深灰色字体，易读 */
    font-size: 0.95em;
    line-height: 1.5;
  }

  /* BibTeX 代码框 - 保持灰色框以免混淆 */
  .bibtex-code {
    display: block; 
    margin-top: 8px; padding: 10px; background: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; font-size: 0.85em; font-family: monospace;
  }

  /* 彻底隐藏 AI 关键词 */
  .ai-only { display: none !important; }
</style>


## Featured Articles

<div class="pub-item">
  <div class="pub-citation">
    <b>Yinliang Tan</b>, Co-author A, Co-author B, 
    "Generative AI in Supply Chain Management", 
    <i>Management Science</i>, December 2025.
    
    <span class="pub-links">
      <a href="/files/paper1.pdf" target="_blank">[PDF]</a> | 
      <a href="https://scholar.google.com/..." target="_blank">[Google Scholar]</a> | 
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
      本文通过实证分析发现，生成式AI的应用能显著降低供应链中的牛鞭效应。这里是纯文字展示，没有背景框，也没有图标，非常干净。
    </div>
  </details>

  <div class="ai-only">
    Keywords: GenAI, Supply Chain
  </div>
</div>

<hr>

## 2026

<div class="pub-item">
  <div class="pub-citation">
    Yuetao Gao, Shaoxuan Liu, Bo Shen, <b>Yinliang Tan</b>, 
    "Social pricing of luxury products in a distribution channel", 
    <i>Production and Operations Management</i>, Jan 2026.
    
    <span class="pub-links">
      <a href="/files/2023 POMS Social Pricing of Luxury.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13948" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{gao2026social,
  title={Social pricing of luxury products in a distribution channel},
  author={Gao, Yuetao and Liu, Shaoxuan and Shen, Bo and Tan, Yinliang},
  journal={Production and Operations Management},
  volume={35},
  number={1},
  pages={129--146},
  year={2026},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
像Facebook、Twitter、Instagram和TikTok等社交网络平台的兴起极大促进了个体之间的社交互动，因此他们的产品消费对同龄人变得更为明显。这种增强的可见性影响消费者对奢侈品的购买决策，因为它影响了从这些产品的显性消费中获得的社会价值。在本文中，我们开发了一个分析模型来研究这些社交技术对沿分销渠道提供奢侈品的制造商和零售商的社会定价的影响。消费者表现出显性消费偏好，并被分为自恋者和从众者：自恋者重视产品的独特性，而从众者则渴望产品的流行性。我们得出了以下有趣的结果。首先，更好的社交技术可以提高或降低显性消费的可见性，从而可能提高或降低批发价和零售价。其次，在更好的社交技术下，制造商可能会获利（亏损），而零售商可能会亏损（获利）；也就是说，制造商和零售商对社交技术水平的偏好可能并不一致。第三，社交技术的进步可能会损害消费者盈余。最后，我们考虑了几个模型扩展，以验证我们在更广泛背景下的发现。
    </div>
  </details>

  <div class="ai-only">
    Keywords: conspicuous consumption, distribution channel, luxury products, social technologies, social pricing
  </div>
</div>

<hr>

## 2025

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2024

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2023

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2022

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2021

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2020

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2019

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2018

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2017

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2015

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2012

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2009

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>

## 2025

<div class="pub-item">
  <div class="pub-citation">
    Author A, <b>Yinliang Tan</b>, 
    "Impact of Live Streaming on E-commerce", 
    <i>MIS Quarterly</i>, June 2024.
    
    <span class="pub-links">
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
      研究了直播带货中“信息过载”对消费者退货率的非线性影响。点击展开后直接显示文字，没有多余的装饰。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<hr>
