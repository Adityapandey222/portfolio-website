import { Code2, Figma, Palette, Zap } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/30 animate-float">
        <Code2 className="w-8 h-8 text-primary" />
      </div>
      
      <div className="absolute top-40 right-40 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-accent/30 animate-float" style={{ animationDelay: '1s' }}>
        <Figma className="w-6 h-6 text-accent" />
      </div>
      
      <div className="absolute top-60 right-60 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 animate-float" style={{ animationDelay: '2s' }}>
        <Palette className="w-10 h-10 text-primary" />
      </div>
      
      <div className="absolute bottom-40 right-32 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center backdrop-blur-sm border border-accent/25 animate-float" style={{ animationDelay: '3s' }}>
        <Zap className="w-7 h-7 text-accent" />
      </div>
      
      {/* HTML5 Badge */}
      <div className="absolute top-32 right-80 w-18 h-18 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-orange-500/30 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-orange-400 font-bold text-xs">HTML5</div>
      </div>
      
      {/* CSS3 Badge */}
      <div className="absolute top-80 right-24 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/30 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-blue-400 font-bold text-xs">CSS3</div>
      </div>
      
      {/* JavaScript Badge */}
      <div className="absolute bottom-60 right-48 w-20 h-20 bg-yellow-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-yellow-500/30 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="text-yellow-400 font-bold text-sm">JS</div>
      </div>
      
      {/* Glowing particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-2/3 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default FloatingElements;