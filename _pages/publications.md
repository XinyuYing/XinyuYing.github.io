---
layout: archive
title: ""
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
研究揭示了在分销渠道中，消费者的社会地位追求虽然提升了奢侈品的溢价空间，但也极易因零售商追求销量而导致‘品牌信号贬值’，因此制造商必须通过精细的渠道定价策略来平衡稀缺性与利润。
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
   Geng Sun, Yeongin Kim, <b>Yinliang Tan</b>, Geoffrey G. Parker
    "Dinner at Your Doorstep: Service Innovation via the Gig Economy on Food Delivery Platforms",    
    <i>Information System Research</i>, Feb 2024. 
    
    <span class="pub-links">
      <a href="/files/2023 ISR Gig Economy.pdf" target="_blank">[PDF]</a> | 
      <a href="https://pubsonline.informs.org/doi/abs/10.1287/isre.2022.0119" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{sun2024dinner,
  title={Dinner at your doorstep: Service innovation via the gig economy on food delivery platforms},
  author={Sun, Geng and Kim, Yeongin and Tan, Yinliang and Parker, Geoffrey G},
  journal={Information Systems Research},
  volume={35},
  number={3},
  pages={1216--1234},
  year={2024},
  publisher={INFORMS}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    研究通过构建三边市场博弈模型揭示，引入零工经济虽能提升服务质量并软化消费者端的价格竞争，但高昂的劳动力成本可能使平台陷入‘囚徒困境’导致利润下降；此外，反直觉的是，最低工资政策反而能通过缓解平台间的工资恶性竞争来提升平台利润，却损害了消费者利益。
    </div>
  </details>

  <div class="ai-only">
    Keywords: online food delivery, on-demand platform, gig economy, service innovation, multisided markets
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    <b>Yinliang Tan</b>, 
    "Implications of Blockchain-Powered Marketplace of Preowned Virtual Goods", 
    <i>Production and Operaion Management</i>, Jun 2024.
    
    <span class="pub-links">
      <a href="/files/2024 POMS Blockchain.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13657" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2024implications,
  title={Implications of blockchain-powered marketplace of preowned virtual goods},
  author={Tan, Yinliang},
  journal={Production and Operations Management},
  volume={33},
  number={6},
  pages={1393--1409},
  year={2024},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      研究证明，对于可升级的虚拟商品，区块链驱动的二手市场能激发消费者的‘价值创造’动机，从而反直觉地提升了新商品的定价权和开发商的总利润，即便不收取交易版税也能实现双赢。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Agency model, blockchain, distributed ledgers, preowned products trading, virtual good
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Ailing Xu, <b>Yinliang Tan</b>, Qiao-Chu He
    "Information transparency with targeting technology for online service operations platform", 
    <i>Production and Operations Management</i>, Jun 2024.
    
    <span class="pub-links">
      <a href="/files/2024 Information Transparency.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1177/10591478231224963" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{xu2024information,
  title={Information transparency with targeting technology for online service operations platform},
  author={Xu, Ailing and Tan, Yinliang and He, Qiao-Chu},
  journal={Production and Operations Management},
  volume={33},
  number={6},
  pages={1410--1425},
  year={2024},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    研究通过排队博弈模型揭示，在存在拥堵效应的在线服务市场中，完全的信息透明反而可能引发‘拥堵灾难’，而利用定向技术进行适度的‘模糊推荐’可以有效平衡供需匹配与等待时间，实现平台利润与社会福利的改进。  
    </div>
  </details>

  <div class="ai-only">
    Keywords: Service marketing, Hotelling model, information transparency, targeting
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Ting Hou, Meng Li, <b>Yinliang Tan</b>, Huazhong Zhao
    "Physician adoption of AI assistant", 
    <i>Manufacturing & Service Operations Management</i>, Sep 2024.
    
    <span class="pub-links">
      <a href="/files/2024 MSOM Physician AI Adoption.pdf" target="_blank">[PDF]</a> | 
      <a href="https://pubsonline.informs.org/doi/abs/10.1287/msom.2023.0093" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{hou2024physician,
  title={Physician adoption of AI assistant},
  author={Hou, Ting and Li, Meng and Tan, Yinliang and Zhao, Huazhong},
  journal={Manufacturing \& Service Operations Management},
  volume={26},
  number={5},
  pages={1639--1655},
  year={2024},
  publisher={INFORMS}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      研究表明，虽然高智能AI凭借其性能天然具有高采纳率，但对于低智能的自动化工具，‘透明化’（明确告知是AI）能作为关键的信任补偿机制，显著提升医生的采纳意愿，从而推翻了透明度必然导致算法厌恶的传统认知。
    </div>
  </details>

  <div class="ai-only">
    Keywords: health intelligence, operational transparency, medical platform, field experiment, generative AI, chatbot
  </div>
</div>


<div class="pub-item">
  <div class="pub-citation">
    <b>Tan, Yinliang Ricky</b>, Chuanbin Yu, Yang Liu, and Quan Zheng
    "Agency models in online platforms: A review of recent developments and future prospects", 
    <i>European Journal of Operational Research</i>, Dec 2024.
    
    <span class="pub-links">
      <a href="/files/2024 EJOR Agency Review.pdf" target="_blank">[PDF]</a> | 
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S0377221724001292" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2024agency,
  title={Agency models in online platforms: A review of recent developments and future prospects},
  author={Tan, Yinliang Ricky and Yu, Chuanbin and Liu, Yang and Zheng, Quan},
  journal={European Journal of Operational Research},
  volume={319},
  number={3},
  pages={679--695},
  year={2024},
  publisher={Elsevier}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    综述系统性地梳理了在线平台从批发向代理模式转型的驱动力，指出代理模式通过赋予供应商定价权有效缓解了双重边际效应，并预判未来研究将聚焦于AI算法决策与跨渠道生态系统的复杂交互。”
    </div>
  </details>

  <div class="ai-only">
    Keywords: Agency model, Wholesale model, Online marketplace, Platform
  </div>
</div>

<hr>

## 2023
<div class="pub-item">
  <div class="pub-citation">
    Cheng, Stephanie, Pengkai Lin, <b>Yinliang Tan</b>, Yuchen Zhang
    "“High” innovators? Marijuana legalization and regional innovation",    
    <i>Production and Operations Management</i>, Mar 2023. 
    
    <span class="pub-links">
      <a href="/files/2023 POMS Innovation.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13914" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{cheng2023high,
  title={“High” innovators? Marijuana legalization and regional innovation},
  author={Cheng, Stephanie and Lin, Pengkai and Tan, Yinliang and Zhang, Yuchen},
  journal={Production and Operations Management},
  volume={32},
  number={3},
  pages={685--703},
  year={2023},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    该研究通过对美国20年间专利数据的准实验分析发现，大麻合法化显著降低了区域的创新产出与专利质量，揭示了公共政策在推动社会自由化的同时，可能对高精密研发领域造成长期的‘副作用’
    </div>
  </details>

  <div class="ai-only">
    Keywords: inventor performance, marijuana legalization, patents, public health, regional innovation
  </div>
</div>


<div class="pub-item">
  <div class="pub-citation">
    Yuetao Gao, Norman Johnson, Bo Shen, <b>Yinliang Tan</b>, 
    "Benefits of sourcing alternative inputs of manufacturers for suppliers",    
    <i>Production and Operations Management</i>, Jun 2023. 
    
    <span class="pub-links">
      <a href="/files/2023 Benefits Sourcing.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13946" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{gao2023benefits,
  title={Benefits of sourcing alternative inputs of manufacturers for suppliers},
  author={Gao, Yuetao and Johnson, Norman and Shen, Bo and Tan, Yinliang},
  journal={Production and Operations Management},
  volume={32},
  number={6},
  pages={1880--1894},
  year={2023},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究发现，当制造商选择从替代低质量原材料中采购时，供应商不仅可以通过提高批发价格销售更多原材料，还可以通过这种价格提升来促使制造商采用更多的低质量替代材料，从而降低其生产成本，最终导致零售价格降低并增加消费者的需求。尽管批发价格较高，制造商通过更低的零售价格仍能获得更高的利润，因此这一双重采购策略对整个供应链有利。
    </div>
  </details>

  <div class="ai-only">
    Keywords: dual sourcing, product design, strategic competition, supply chain management
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Feiqiong Wei, <b>Yinliang Tan</b>, Haibing Gao, Huazhong Zhao
    "When investors meet consumers: The roles and interactions of different backers in the crowdfunding market",    
    <i>Decision Sciences</i>, Aug 2023. 
    
    <span class="pub-links">
      <a href="/files/2023 DSJ Crowdfunding.pdf" target="_blank">[PDF]</a> | 
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/deci.12612" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{wei2024investors,
  title={When investors meet consumers: The roles and interactions of different backers in the crowdfunding market},
  author={Wei, Feiqiong and Tan, Yinliang and Gao, Haibing and Zhao, Huazhong},
  journal={Decision Sciences},
  volume={55},
  number={5},
  pages={474--490},
  year={2024},
  publisher={Wiley Online Library}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    该研究揭示了众筹市场中消费者与投资者之间存在显著且不对称的互动效应——消费者的早期购买是市场潜力的强信号，能有效吸引投资者；而创业者需在股权分红与产品定价间精妙平衡，以实现两类异质性支持者的共生与项目价值最大化
    </div>
  </details>

  <div class="ai-only">
    Keywords: backers’ interaction, crowdfunding, investment-based, platform design, reward-based
  </div>
</div>


<hr>

## 2022

<div class="pub-item">
  <div class="pub-citation">
    Haibing Gao, Subodha Kumar, <b>Yinliang (Ricky) Tan</b>, Huazhong Zhao
    "Socialize More, Pay Less: Randomized Field Experiments on Social Pricing",    
    <i>Information Systems Research</i>, Jan 2022. 
    
    <span class="pub-links">
      <a href="/files/2022 ISR Social Pricing.pdf" target="_blank">[PDF]</a> | 
      <a href="https://pubsonline.informs.org/doi/abs/10.1287/isre.2021.1089" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{gao2022socialize,
  title={Socialize more, pay less: Randomized field experiments on social pricing},
  author={Gao, Haibing and Kumar, Subodha and Tan, Yinliang and Zhao, Huazhong},
  journal={Information Systems Research},
  volume={33},
  number={3},
  pages={935--953},
  year={2022},
  publisher={INFORMS}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究通过田野实验，探讨了社交定价的有效性，发现社交定价能显著提高现有消费者的购买频率和订单价值，进而提升零售商的利润，并通过社交互动机制进一步优化效果。
    </div>
  </details>

  <div class="ai-only">
    Keywords: social pricing, eld experiments, price discrimination, social commerce
  </div>
</div>

<hr>

## 2021

<div class="pub-item">
  <div class="pub-citation">
   Shuhua Sun, Michael Burke, Huaizhong Chen,<b>Yinliang (Ricky) Tan</b>, Jiantong Zhang, Lili Hou
    "Mitigating the psychologically detrimental effects of supervisor undermining: Joint effects of voice and political skill",    
    <i>Human relations</i>, Jan 2021. 
    
    <span class="pub-links">
      <a href="/files/2022 Human Resource.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1177/0018726721992849" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{sun2022mitigating,
  title={Mitigating the psychologically detrimental effects of supervisor undermining: Joint effects of voice and political skill},
  author={Sun, Shuhua and Burke, Michael and Chen, Huaizhong and Tan, Yinliang and Zhang, Jiantong and Hou, Lili},
  journal={Human relations},
  volume={75},
  number={1},
  pages={87--112},
  year={2022},
  publisher={Sage Publications Sage UK: London, England}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    该研究通过对医护人员的三波追踪调查发现，面对‘恶上司’的打压，员工的积极建言并非总是良药——只有当员工具备高超的‘政治技能’时，建言才能作为心理护盾，有效缓解被打压的痛苦并抑制离职冲动。
    </div>
  </details>

  <div class="ai-only">
    Keywords: political skill, psychological empowerment, supervisor undermining, voice
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    <b>Yinliang (Ricky) Tan</b>, Yan Xiong, Haibing Gao, Xi Li,Huazhong Zhao
    "Less is More? The Strategic Role of Retailer’s Capacity",    
    <i>Production and Operations Management</i>, Oct 2021. 
    
    <span class="pub-links">
      <a href="/files/2021 POMS Capacity.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13438" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2021less,
  title={Less is more? The strategic role of retailer's capacity},
  author={Tan, Yinliang and Xiong, Yan and Gao, Haibing and Li, Xi and Zhao, Huazhong},
  journal={Production and Operations Management},
  volume={30},
  number={10},
  pages={3354--3368},
  year={2021},
  publisher={Sage Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    研究通过解析模型证明了零售商库容具有重要的战略制衡作用——通过保持适度的‘战略性缺货’，零售商能有效诱发供应商之间的价格战以获取极低的批发价，从而实现‘库容越少，利润越高’的反直觉增长。
    </div>
  </details>

  <div class="ai-only">
    Keywords: retailer’s capacity; supply chain management; two-part tariff; wholesale contract
  </div>
</div>


<hr>

## 2020
<div class="pub-item">
  <div class="pub-citation">
    Subodha Kumar, <b>Yinliang (Ricky) Tan</b>, Lai Wei
    "When to Play Your Advertisement? Optimal Insertion Policy of Behavioral Advertisement", 
    <i>Information Systems Research</i>, Jun 2020.
    
    <span class="pub-links">
      <a href="/files/2020 ISR Advertisement Placement.pdf" target="_blank">[PDF]</a> | 
      <a href="https://pubsonline.informs.org/doi/abs/10.1287/isre.2019.0904" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{kumar2020play,
  title={When to play your advertisement? Optimal insertion policy of behavioral advertisement},
  author={Kumar, Subodha and Tan, Yinliang and Wei, Lai},
  journal={Information Systems Research},
  volume={31},
  number={2},
  pages={589--606},
  year={2020},
  publisher={INFORMS}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究提出了一种基于用户参与度的广告插入优化策略，采用阈值政策，能够根据用户的行为动态调整广告的播放时机和长度，从而最大化平台的广告收入并提高用户留存率。 
    </div>
  </details>

  <div class="ai-only">
    Keywords:behavioral advertisement, wearable technology, emotional analytics, optimal policies, Brownian motion
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    He Huang, Geoffrey Parker, <b>Yinliang (Ricky) Tan</b>, Hongyan Xu
    "Altruism or Shrewd Business? Implications of Technology Openness on Innovations and Competition", 
    <i>MIS Quarterly</i>, Sep 2020.
    
    <span class="pub-links">
      <a href="/files/2020 MISQ Technology Openness.pdf" target="_blank">[PDF]</a> | 
      <a href="https://misq.umn.edu/misq/article-abstract/44/3/1049/1800/Altruism-or-Shrewd-Business-Implications-of?redirectedFrom=fulltext" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{huang2020altruism,
  title={Altruism or shrewd business? Implications of technology openness on innovations and competition},
  author={Huang, He and Parker, Geoffrey and Tan, Yinliang and Xu, Hongyan},
  journal={MIS Quarterly},
  volume={44},
  number={3},
  pages={1049--1072},
  year={2020},
  publisher={Management Information Systems Research Center, University of Minnesota}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究探讨了技术开放对创新和竞争的影响，发现技术开放不仅可能抑制创新，还可能减少消费者剩余，强调了技术共享决策中的信息效应与访问效应之间的复杂权衡。 
    </div>
  </details>

  <div class="ai-only">
    Keywords:Economics of IS, technology openness, IT innovation investment, analytical modeling
  </div>
</div>


<div class="pub-item">
  <div class="pub-citation">
    Yixuan Feng, <b>Yinliang (Ricky) Tan</b>, Yongrui Duan, Yu Bai 
    "Strategies analysis of luxury fashion rental platform in sharing economy",    
    <i>Transportation Research Part E: Logistics and Transportation Review</i>, Oct 2020. 
    
    <span class="pub-links">
      <a href="/files/2020 TRE Sharing Economy Luxury.pdf" target="_blank">[PDF]</a> | 
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S136655452030716X" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{feng2020strategies,
  title={Strategies analysis of luxury fashion rental platform in sharing economy},
  author={Feng, Yixuan and Tan, Yinliang Ricky and Duan, Yongrui and Bai, Yu},
  journal={Transportation Research Part E: Logistics and Transportation Review},
  volume={142},
  pages={102065},
  year={2020},
  publisher={Elsevier}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究分析了奢侈品牌公司与租赁平台的合作策略，发现代理合同在提升品牌公司利润、消费者福利和社会福利方面优于批发合同，且租赁平台的存在能通过市场扩展效应为品牌公司带来更多收益。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Luxury fashion rental, Sharing economy, Online platform, Conspicuous behavior
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Haibing Gao, Huazhong Zhao, <b>Yinliang (Ricky) Tan</b>, Ya (Lisa) Lin, Lai Wei
    "Social Promotion: A Creative Promotional Framework on Consumers’ Social Network Value", 
    <i>Production and Operations Management</i>, Dec 2020.
    
    <span class="pub-links">
      <a href="/files/2020 POMS Social Red Packets.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.13247" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{gao2020social,
  title={Social promotion: A creative promotional framework on consumers’ social network value},
  author={Gao, Haibing and Zhao, Huazhong and Tan, Yinliang and Lin, Ya and Wei, Lai},
  journal={Production and Operations Management},
  volume={29},
  number={12},
  pages={2661--2678},
  year={2020},
  publisher={Sage Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究提出了社交红包作为基于社交网络价值的定制化促销策略，分析了社交网络价值如何影响促销奖励，并发现通过社交互动，消费者可以提高其社交网络的商业价值，从而提升平台的销售效果。
    </div>
  </details>

  <div class="ai-only">
    Keywords:social promotion, social red packet, social commerce, platform design
  </div>
</div>

<hr>

## 2019

<div class="pub-item">
  <div class="pub-citation">
    Baozhuang Niu, Jiawei Li, Jie Zhang, Hsing Kenneth Cheng, <b>Yinliang (Ricky) Tan</b>
    "Strategic Analysis of Dual Sourcing and Dual Channel with an Unreliable Alternative Supplier", 
    <i>Production and Operations Management</i>, Mar 2019.
    
    <span class="pub-links">
      <a href="/files/.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12938" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{niu2019strategic,
  title={Strategic analysis of dual sourcing and dual channel with an unreliable alternative supplier},
  author={Niu, Baozhuang and Li, Jiawei and Zhang, Jie and Cheng, Hsing Kenneth and Tan, Yinliang},
  journal={Production and Operations Management},
  volume={28},
  number={3},
  pages={570--587},
  year={2019},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      本文在“OEM—竞争性供应商—非竞争但随机良率的备选供应商”的共竞供应链中证明：OEM 总是会选择双源采购，即使备选供应商不可靠；同时，竞争性供应商以“断供”威胁阻止 OEM 引入备选供应商在均衡中并不可信。
    </div>
  </details>

  <div class="ai-only">
    Keywords: co-opetitive supply chain; production technology; yield uncertainty; dual sourcing; dual channel
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    He Huang, Liming Liu, Geoffrey Parker, <b>Yinliang (Ricky) Tan</b>, Hongyan Xu
    "Multi-Attribute Procurement Auctions in the Presence of Satisfaction Risk", 
    <i>Production and Operations Management</i>, May 2019.
    
    <span class="pub-links">
      <a href="/files/2019 POMS Auction.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/full/10.1111/poms.12979" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{huang2019multi,
  title={Multi-attribute procurement auctions in the presence of satisfaction risk},
  author={Huang, He and Liu, Liming and Parker, Geoffrey and Tan, Yinliang and Xu, Hongyan},
  journal={Production and Operations Management},
  volume={28},
  number={5},
  pages={1206--1221},
  year={2019},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本文把“承诺质量+事后努力”共同决定的满意度风险内生嵌入多属性评分采购拍卖与绩效合同（PBC），证明投标者必须在报价前联合选择承诺质量与努力，并推导最优评分规则与保留分数：最优机制会向下扭曲承诺质量，且努力在“质量—努力互补/替代”两类情形下分别出现向下/向上扭曲，同时单独设保留质量或保留价格都不足以筛除劣质投标者。
    </div>
  </details>

  <div class="ai-only">
    Keywords: procurement auctions; performance-based contracts; satisfaction risk; mechanism design
  </div>
</div>

<hr>

## 2018
<div class="pub-item">
  <div class="pub-citation">
   Brent Kitchens, Tawnya Means, <b>Yinliang (Ricky) Tan</b>
    "Captivate: Building blocks for implementing active learning", 
    <i>Journal of Education for Business</i>, Jan 2018.
    
    <span class="pub-links">
      <a href="/files/2018 Active Learning.pdf" target="_blank">[PDF]</a> | 
      <a href="https://www.tandfonline.com/doi/abs/10.1080/08832323.2017.1417232" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{kitchens2018captivate,
  title={Captivate: Building blocks for implementing active learning},
  author={Kitchens, Brent and Means, Tawnya and Tan, Yinliang},
  journal={Journal of Education for Business},
  volume={93},
  number={2},
  pages={58--73},
  year={2018},
  publisher={Taylor \& Francis}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    研究提出一个用于设计与落地“主动学习（active learning）”课程的六要素框架 CAPTIvatE（内容传递、主动学习方法、物理环境、技术增强、激励对齐、教师投入），并用三门课程的实施对比给出初步证据：在学生投入相近的情况下，主动学习设计能显著提升学生“学到多少/课程价值/成绩”和师生同伴连接感。
    </div>
  </details>

  <div class="ai-only">
    Keywords: Active Learning, Pedagogy, Student engagement
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Xianjun Geng, <b>Yinliang (Ricky) Tan</b>, Lai Wei
    "How Add‐on Pricing Interacts with Distribution Contracts", 
    <i>Production and Operations Management</i>, Apr 2018.
    
    <span class="pub-links">
      <a href="/files/2018 POMS Add-on.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12831" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{geng2018add,
  title={How add-on pricing interacts with distribution contracts},
  author={Geng, Xianjun and Tan, Yinliang and Wei, Lai},
  journal={Production and Operations Management},
  volume={27},
  number={4},
  pages={605--623},
  year={2018},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      本文建立“上游厂商（核心产品+附加品）—下游平台（批发制/代理制）”博弈模型，发现分销契约会根本性改变企业在“附加品单独定价（add-on pricing）”与“捆绑（bundling）”之间的最优选择：批发制下企业更偏好捆绑，代理制下更偏好附加品定价；其关键机制是代理制下平台对降价成本的“损失分担效应（loss-sharing）
    </div>
  </details>

  <div class="ai-only">
    Keywords: add-on pricing; online platform; agency model; supply chain contract
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
    Lin Tian, Asoo J. Vakharia, <b>Yinliang (Ricky) Tan</b>, Yifan Xu
    "Marketplace, Reseller, or Hybrid: Strategic Analysis of an Emerging E-Commerce Model", 
    <i>Production and Operations Management</i>, Aug 2018.
    
    <span class="pub-links">
      <a href="/files/2018 POMS Marketplace.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12885" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tian2018marketplace,
  title={Marketplace, reseller, or hybrid: Strategic analysis of an emerging e-commerce model},
  author={Tian, Lin and Vakharia, Asoo J and Tan, Yinliang and Xu, Yifan},
  journal={Production and Operations Management},
  volume={27},
  number={8},
  pages={1595--1610},
  year={2018},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      本文在“两家上游供应商竞争 + 一个线上中介平台”的框架下比较纯转售（Reseller）、纯平台（Marketplace）与混合（Hybrid）三种模式，核心结论是：“平台模式一定更优、能消除双重加价”的传统观点在供应商竞争存在时不成立；最优模式取决于“上游竞争强度 × 履约（仓储/配送）成本”的交互——竞争越激烈、履约成本越高越应转售；竞争越弱、履约成本越低越应平台；中间区域混合最优。
    </div>
  </details>

  <div class="ai-only">
    Keywords: online marketplace; channel structure; upstream competition; order-fulfillment cost
  </div>
</div>

<hr>

## 2017

<div class="pub-item">
  <div class="pub-citation">
  <b>Yinliang (Ricky) Tan</b>,Janice E. Carrillo 
    "Strategic Analysis of the Agency Model for Digital Goods", 
    <i>Production and Operations Management</i>, Apr 2017.
    
    <span class="pub-links">
      <a href="/files/2017 POMS E-book.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12595" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2017strategic,
  title={Strategic analysis of the agency model for digital goods},
  author={Tan, Yinliang and Carrillo, Janice E},
  journal={Production and Op{\'e}rations management},
  volume={26},
  number={4},
  pages={724--741},
  year={2017},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本文以电子书为代表的数字产品为背景，构建“出版商—零售商”的定价博弈，证明由出版商主导电子书定价的代理制（agency）在相当广的参数区间内比批发制（wholesale）更能缓解双重加价、提高供应链利润并提升消费者剩余；其优势来自“收入分成 + 上游定价权”这两项机制的叠加。
    </div>
  </details>

  <div class="ai-only">
    Keywords: digital goods; channel coordination; e-book industry; agency pricing
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
   <b>Yinliang (Ricky) Tan</b>, Anand A. Paul, Qi Deng, Lai Wei
    "Mitigating Inventory Overstocking: Optimal Order-up-to Level to Achieve a Target Fill Rate over a Finite Horizon", 
    <i>Production and Operations Management}</i>, Nov 2017.
    
    <span class="pub-links">
      <a href="/files/2017 POMS Fill Rate.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12750" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2017mitigating,
  title={Mitigating inventory overstocking: Optimal order-up-to level to achieve a target fill rate over a finite horizon},
  author={Tan, Yinliang and Paul, Anand A and Deng, Qi and Wei, Lai},
  journal={Production and Operations Management},
  volume={26},
  number={11},
  pages={1971--1988},
  year={2017},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究提出了一种模拟优化算法，帮助库存管理人员在有限评审期和正的提前期条件下减少库存过剩，确保目标填充率的实现，并显著降低库存成本。
    </div>
  </details>

  <div class="ai-only">
    Keywords: service level agreement; fill rate; positive lead time; base-stock policy; simulation-based optimization
  </div>
</div>


<hr>

## 2015
<div class="pub-item">
  <div class="pub-citation">
   Anuj Kumar, <b>Yinliang (Ricky) Tan</b>
    "The Demand Effects of Joint Product Advertising in Online Videos", 
    <i>Management Science</i>, Mar 2015.
    
    <span class="pub-links">
      <a href="/files/2015 MS Online Video.pdf" target="_blank">[PDF]</a> | 
      <a href="https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2014.2086" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{kumar2015demand,
  title={The demand effects of joint product advertising in online videos},
  author={Kumar, Anuj and Tan, Yinliang},
  journal={Management Science},
  volume={61},
  number={8},
  pages={1921--1937},
  year={2015},
  publisher={INFORMS}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究通过田野实验，探讨了产品视频广告在电子商务网站上展示相关产品的需求效应，发现视频广告不仅提高了焦点产品的销售，还通过揭示产品互补性显著增加了配饰产品的销售。
    </div>
  </details>

  <div class="ai-only">
    Keywords: electronic commerce, product advertising, online product networks, virtual product experience, complementary products, demand spillovers, randomized field experiment, value of IT, average treatment effect
  </div>
</div>

<div class="pub-item">
  <div class="pub-citation">
   Anand Paul, <b>Yinliang (Ricky) Tan</b>, Asoo J. Vakharia
    "Inventory Planning for a Modular Product Family", 
    <i>Production and Operations Management</i>, Jul 2015.
    
    <span class="pub-links">
      <a href="/files/2015 POMS Inventory Planning for a Modular Product Family.pdf" target="_blank">[PDF]</a> | 
      <a href="https://journals.sagepub.com/doi/abs/10.1111/poms.12370" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{paul2015inventory,
  title={Inventory planning for a modular product family},
  author={Paul, Anand and Tan, Yinliang and Vakharia, Asoo J},
  journal={Production and Operations Management},
  volume={24},
  number={7},
  pages={1033--1053},
  year={2015},
  publisher={SAGE Publications Sage CA: Los Angeles, CA}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本文在模块化产品族的成品变体备货问题中，建立了“利润最大化 + 总体与变体级 fill rate 约束”的统一框架，并通过 iPad 案例的计算实验表明：提高对消费者模块选项偏好的估计精度，比提高对总需求的预测精度更能带来利润提升与更合理的库存配置.  
    </div>
  </details>

  <div class="ai-only">
    Keywords: modular products, inventory planning, fill rates
  </div>
</div>


<div class="pub-item">
  <div class="pub-citation">
  <b>Yinliang (Ricky) Tan</b>,  Janice E. Carrillo, Hsing Kenny Cheng
    "The Agency Model for Digital Goods", 
    <i>Decision Sciences</i>, Sep 2015.
    
    <span class="pub-links">
      <a href="/files/2016 Decision Science E-book.pdf" target="_blank">[PDF]</a> | 
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/deci.12173" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{tan2016agency,
  title={The agency model for digital goods},
  author={Tan, Yinliang and Carrillo, Janice E and Cheng, Hsing Kenny},
  journal={Decision Sciences},
  volume={47},
  number={4},
  pages={628--660},
  year={2016},
  publisher={Wiley Online Library}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本文以电子书为代表的数字产品为背景，建立“出版商—两家竞争零售商”的定价博弈模型，证明当由上游出版商在代理制下统一定价时，该代理制能够实现对竞争零售商的供应链协调（虚拟纵向一体化），并在一定分成区间内实现出版商、零售商与消费者剩余的帕累托改进。  
    </div>
  </details>

  <div class="ai-only">
    Keywords: Coordination Mechanism, E-book Industry, Pricing,Supply Chain Contracts.
  </div>
</div>

<hr>

## 2014

<div class="pub-item">
  <div class="pub-citation">
   <b>Yinliang (Ricky) Tan</b>, Janice Carrillo
    "The Agency Model for Digital Goods: Strategic Analysis of Dual Channels in Electronic Publishing Industry", 
    <i>Proceedings of PICMET'14 Conference: Portland International Center for Management of Engineering and Technology; Infrastructure and Service Integration</i>, Oct 2014.
    
    <span class="pub-links">
      <a href="/files/2014 PICMET Conference Proceedings.pdf" target="_blank">[PDF]</a> | 
      <a href="https://ieeexplore.ieee.org/abstract/document/6921312" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@inproceedings{tan2014agency,
  title={The agency model for digital goods: Strategic analysis of dual channels in electronic publishing industry},
  author={Tan, Yinliang Ricky and Carrillo, Janice},
  booktitle={Proceedings of PICMET'14 Conference: Portland International Center for Management of Engineering and Technology; Infrastructure and Service Integration},
  pages={646--657},
  year={2014},
  organization={IEEE}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
    本研究通过博弈论模型分析了电子书行业中代理模式与批发模式的战略影响，表明代理模式能有效减少供应链的双重边际化效应，并提高消费者剩余和社会福利。
    </div>
  </details>

  <div class="ai-only">
    Keywords: 
  </div>
</div>

<hr>

## 2012

<div class="pub-item">
  <div class="pub-citation">
   Nazli Turken, <b>Yinliang (Ricky) Tan</b>, Asoo J. Vakharia, Lan Wang, Ruoxuan Wang, Arda Yenipazarli 
    "The Multi-product Newsvendor Problem: Review, Extensions, and Directions for Future Research", 
    <i>International Series in Operations Research & Management Science</i>, Jan 2012.
    
    <span class="pub-links">
      <a href="/files/2012 Book Chapter Multi-product Newsvendor.pdf" target="_blank">[PDF]</a> | 
      <a href="https://link.springer.com/chapter/10.1007/978-1-4614-3600-3_1" target="_blank">[Google Scholar]</a> | 
      <details class="cite-box">
        <summary class="cite-toggle">[Cite]</summary>
        <div class="bibtex-code">
@article{turken2012multi,
  title={The multi-product newsvendor problem: Review, extensions, and directions for future research},
  author={Turken, Nazli and Tan, Yinliang and Vakharia, Asoo J and Wang, Lan and Wang, Ruoxuan and Yenipazarli, Arda},
  journal={Handbook of newsvendor problems: Models, extensions and applications},
  pages={3--39},
  year={2012},
  publisher={Springer}
}
        </div>
      </details>
    </span>
  </div>

  <details class="core-insight">
    <summary>核心介绍 (Core Insight)</summary>
    <div class="insight-content">
      该研究通过扩展经典的单产品新闻售货员模型，提出了多产品新闻售货员问题，并探讨了多种产品间的替代和互补效应，旨在优化库存管理策略，以提高多产品库存系统中的预期利润。
    </div>
  </details>

  <div class="ai-only">
    Keywords: 
  </div>
</div>



<hr>
