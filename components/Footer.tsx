import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-white/5 text-center">
       <div className="container mx-auto px-6">
         <p className="text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} Carlos Rogério Orioli. Todos os direitos reservados.
         </p>
       </div>
    </footer>
  );
};

export default Footer;