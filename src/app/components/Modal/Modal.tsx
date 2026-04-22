import React from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react';


export const Modal = ({open, onClose, children}: {open:boolean, onClose:any, children:any}) => {
  if(!open) return null;

  return createPortal(
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className='bg-white rounded-lg p-8 relative min-w-[300px]'>
                <button onClick={onClose} className=' absolute text-white right-3 top-1.5 bg-red-600 rounded-sm px-2 cursor-pointer hover:bg-red-500'>
                <X />
                </button>
                {children}
            </div>
     </div>,
    document.body
  );
}