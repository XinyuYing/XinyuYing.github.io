import {ArrowUpRight,Check} from 'lucide-react';
import {packages,pricingNote,priceLabel,type PackageId} from './pricing-model';
export default function PricingSection({onSelect,standalone=false,selected=null}:{onSelect:(id:PackageId)=>void;standalone?:boolean;selected?:PackageId|null}){
 const Heading=standalone?'h1':'h2',choice=packages.find(item=>item.id===selected);
 return <section id="configure" className={'pricing-section'+(standalone?' standalone-pricing':'')} aria-labelledby="pricing-title">
  <div className="section-heading"><p className="eyebrow">选择你的 SmartHome Max</p><Heading id="pricing-title">给你的家，合适的开始。</Heading><p className="pricing-disclosure">{pricingNote}</p></div>
  <div className="pricing-grid">{packages.map((item,index)=><article className={'price-card price-card-'+index+(selected===item.id?' is-selected':'')} key={item.id}>
   <h3>{item.name}</h3><p className="package-audience">{item.audience}</p>
   <div className="package-price"><span className="currency">¥</span><strong>{item.price.toLocaleString('zh-CN')}</strong><span>/ 年</span></div>
   <button className={'button '+(selected===item.id||(!selected&&index===1)?'primary':'secondary')} onClick={()=>onSelect(item.id)} aria-label={(standalone?'选择':'查看')+item.name+'配置'} aria-pressed={standalone?selected===item.id:undefined}>{selected===item.id?<><Check size={17}/>已选择{item.name}</>:<>{standalone?'选择此配置':'查看配置'}<ArrowUpRight size={17}/></>}</button>
   <ul>{item.features.map(feature=><li key={feature}><Check size={16}/>{feature}</li>)}</ul>
  </article>)}</div>
  {standalone&&<div className="selected-plan" role="status" aria-live="polite">{choice?<><Check size={20}/><p><strong>已选择{choice.name}</strong><span>{priceLabel(choice)} · {choice.features[choice.features.length-1]}</span></p></>:<p>选择一个版本，查看适合你的配置。</p>}</div>}
  <p className="pricing-footnote">案例设定价。主机、家具、机器人、安装与改造另计。</p>
 </section>;
}
