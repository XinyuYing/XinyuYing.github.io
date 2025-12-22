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
研究揭示了社交媒体对奢侈品渠道的非直观影响：更高的消费可见度反而可能降低定价，并导致制造商与零售商的利益错位。
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
    Ling Zhong, Jiajia Nie, <b>Yinliang Ricky Tan</b>, 
    "Game of brands: Managing brand spillover in a co-opetitive supply chain", 
    <i>Transportation Research Part E: Logistics and Transportation Review</i>, Jul 2025.
    
    <span class="pub-links">
      <a href="/files/2025 TRE Brand Spillover.pdf" target="_blank">[PDF]</a> | 
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S1366554525001413" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{zhong2025game,
  title={Game of brands: Managing brand spillover in a co-opetitive supply chain},
  author={Zhong, Ling and Nie, Jiajia and Tan, Yinliang Ricky},
  journal={Transportation Research Part E: Logistics and Transportation Review},
  volume={199},
  pages={104100},
  year={2025},
  publisher={Elsevier}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      研究通过博弈模型揭示，代工厂（CM）利用品牌溢出的‘搭便车’策略反而可能因加剧竞争或迫使OEM转向自制而损害自身利润，承诺放弃品牌搭便车往往是更优的长期战略。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Game theory, Supply chain management, Co-opetition, Outsourcing, Brand Spillover
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Jun Pei, Ruiqi Wang, Ping Yan, <b>Yinliang Ricky Tan</b>
    "Quality management in supply chain: Strategic implications and the paradox of AI inspection", 
    <i>Decision Sciences</i>, Mar 2025.
    
    <span class="pub-links">
      <a href="/files/2025 DSJ AI.pdf" target="_blank">[PDF]</a> | 
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/deci.70003" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{pei2025quality,
  title={Quality management in supply chain: Strategic implications and the paradox of AI inspection},
  author={Pei, Jun and Wang, Ruiqi and Yan, Ping and Tan, Yinliang},
  journal={Decision Sciences},
  year={2025},
  publisher={Wiley Online Library}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
     研究揭示了AI质检的‘投资悖论’——当制造商将AI技术共享给供应商时，尽管整体质量管理效率提升，制造商为了成本最优化反而会降低对该技术的研发投入水平，且即使AI更精准便宜，若供应商传统能力处于特定区间，制造商仍可能拒绝采用。
    </div>
  </details>

  <div class="ai-only">
    Keywords: AI inspection, inspection modes, quality management, retail returns, supply chain management, technology-sharing
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
     Meiqian Li, Guowei Liu, Guofang Nan, <b>Yinliang Ricky Tan</b>
    "Governmental enforcement against piracy on media platforms", 
    <i>Decision Support Systems</i>, Apr 2025.
    
    <span class="pub-links">
      <a href="/files/2025 DSS Piracy.pdf" target="_blank">[PDF]</a> | 
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0167923625000594" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{li2025governmental,
  title={Governmental enforcement against piracy on media platforms},
  author={Li, Meiqian and Liu, Guowei and Nan, Guofang and Tan, Yinliang Ricky},
  journal={Decision Support Systems},
  pages={114458},
  year={2025},
  publisher={Elsevier}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
     研究通过博弈模型揭示，政府打击盗版的最优力度高度依赖于平台的盈利模式，且在面对高质量盗版时，适度放松执法反而能通过倒逼平台优化定价来最大化社会福利。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Live Streaming, E-commerce
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Junghee Lee, Lai Wei, Ming Hu, <b>Yinliang Ricky Tan</b>, 
    "The Hidden Impact of Prosumers and Its Fair Mitigation", 
    <i>Production and Operations Management</i>, Jul 2025.
    
    <span class="pub-links">
      <a href="/files/2026 POMS Prosumer.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/full/10.1177/10591478251394133" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{lee2025hidden,
  title={The Hidden Impact of Prosumers and Its Fair Mitigation},
  author={Lee, Junghee and Wei, Lai and Hu, Ming and Tan, Yinliang},
  journal={Production and Operations Management},
  pages={10591478251394133},
  year={2025},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}

        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      研究揭示了产消者虽然环保，却因增加电网不确定性而导致普通消费者电费上涨的‘隐性不公’，并提出了一种‘公平感知固定费用’机制来消除这种交叉补贴，实现环境效益与社会公平的双赢。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Prosumer, Electricity Price, Unfairness, Intervention
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
