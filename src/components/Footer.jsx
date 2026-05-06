export default function Footer() {
  return (
    <footer className="border-t border-graphite-800/50 bg-graphite-950 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gold-burned/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-6">
          <a href="#home" className="font-cinzel text-2xl font-bold tracking-widest text-graphite-400 hover:text-gold-burned transition-colors">
            <span className="text-gold-burned">O</span>G.
          </a>
        </div>
        
        <p className="font-inter text-graphite-500 text-sm tracking-widest uppercase mb-2 text-center">
          Forged by Hand & Code
        </p>
        
        <p className="font-inter text-graphite-600 text-xs text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved. The Realm of OG.
        </p>
      </div>
    </footer>
  );
}
