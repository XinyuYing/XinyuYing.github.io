import type { Profile, Need } from './planner-model';
export type PackageId='home'|'space'|'complete';
const terms={currency:'CNY',billingPeriod:'year',scope:'software_license',excludes:['hub','hardware','furniture','installation','renovation'],pricingBasis:'fictional_case_assumption'} as const;
export type Package=typeof terms&{id:PackageId;name:string;price:number;audience:string;features:string[];needs:Need[]};
export const packages:Package[]=[
 {...terms,id:'home',name:'家庭版',price:4999,audience:'让到家之前，多一份从容。',features:['灯光、窗帘与环境协同','语音、App 与生活建议'],needs:['arrival']},
 {...terms,id:'space',name:'空间版',price:9999,audience:'给同一个空间，更多可能。',features:['包含家庭版能力','模块家具与训练情境协调'],needs:['arrival','training']},
 {...terms,id:'complete',name:'全屋版',price:19999,audience:'从一个指令，到全屋配合。',features:['包含空间版能力','聚会与机器人任务协同','室内与露台的跨空间协同'],needs:['arrival','training','party','terrace']}
];
export const priceLabel=(p:Package)=>`¥${p.price.toLocaleString('zh-CN')} / 年`;
export const pricingNote='年度软件方案 · 案例设定价';
export function packageFor(p:Profile):Package|null{if(!p.needs.length)return null;if(p.needs.some(n=>['party','terrace','car','glasses'].includes(n)))return packages[2];if(p.needs.includes('training'))return packages[1];return packages[0];}
export function applyPackage(p:Profile,id:PackageId):Profile{const choice=packages.find(x=>x.id===id);if(!choice)throw new Error('请选择有效配置。');return {...p,needs:[...choice.needs]};}
