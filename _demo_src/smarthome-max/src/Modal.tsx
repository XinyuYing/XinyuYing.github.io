import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
export default function Modal({open,onClose,title,children,wide=false}:{open:boolean;onClose:()=>void;title:string;children:ReactNode;wide?:boolean}){
 const ref=useRef<HTMLDialogElement>(null);const returnFocus=useRef<HTMLElement|null>(null);const close=useRef(onClose);close.current=onClose;
 useEffect(()=>{const d=ref.current;if(!d)return;if(open&&!d.open){returnFocus.current=document.activeElement as HTMLElement;d.showModal();d.scrollTop=0;}else if(!open&&d.open){d.close();returnFocus.current?.focus({preventScroll:true});}},[open]);
 useEffect(()=>{if(!open)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[open]);
 useEffect(()=>{if(open){ref.current?.scrollTo(0,0);ref.current?.querySelector<HTMLButtonElement>('.modal-bar button')?.focus({preventScroll:true});}},[title,open]);
 return <dialog ref={ref} className={`modal ${wide?'modal-wide':''}`} aria-label={title} onCancel={e=>{e.preventDefault();close.current();}} onClick={e=>{if(e.target===ref.current){const r=ref.current.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close.current();}}}><div className="modal-bar"><span>{title}</span><button className="icon-button" aria-label="关闭弹窗" onClick={onClose}><X size={22}/></button></div>{children}</dialog>;
}
