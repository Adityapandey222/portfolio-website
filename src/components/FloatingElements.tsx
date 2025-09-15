import { Code2, Figma, Palette, Zap, Smartphone, Layers, Globe, Cpu } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large Floating Tech Icons - Right Side */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-primary/40 animate-float shadow-glow">
        <Code2 className="w-10 h-10 text-primary drop-shadow-lg" />
      </div>
      
      <div className="absolute top-32 right-32 w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-lg border border-blue-500/40 animate-float" style={{ animationDelay: '1s' }}>
        <Figma className="w-8 h-8 text-blue-400 drop-shadow-lg" />
      </div>
      
      <div className="absolute top-48 right-48 w-24 h-24 bg-primary/15 rounded-3xl flex items-center justify-center backdrop-blur-lg border border-primary/30 animate-float" style={{ animationDelay: '2s' }}>
        <Palette className="w-12 h-12 text-primary drop-shadow-lg" />
      </div>
      
      <div className="absolute bottom-32 right-20 w-18 h-18 bg-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-accent/30 animate-float" style={{ animationDelay: '3s' }}>
        <Zap className="w-9 h-9 text-accent drop-shadow-lg" />
      </div>
      
      {/* Medium Tech Badges */}
      <div className="absolute top-24 right-64 w-20 h-12 bg-orange-500/25 rounded-lg flex items-center justify-center backdrop-blur-lg border border-orange-500/40 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-orange-300 font-bold text-sm drop-shadow-lg">HTML5</div>
      </div>
      
      <div className="absolute top-64 right-12 w-18 h-12 bg-blue-600/25 rounded-lg flex items-center justify-center backdrop-blur-lg border border-blue-600/40 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-blue-300 font-bold text-sm drop-shadow-lg">CSS3</div>
      </div>
      
      <div className="absolute bottom-48 right-36 w-22 h-14 bg-yellow-500/25 rounded-xl flex items-center justify-center backdrop-blur-lg border border-yellow-500/40 animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="text-yellow-300 font-bold text-base drop-shadow-lg">JS</div>
      </div>

      {/* Additional 3D Objects */}
      <div className="absolute top-40 right-72 w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-green-500/30 animate-float" style={{ animationDelay: '4s' }}>
        <Smartphone className="w-7 h-7 text-green-400 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-64 right-56 w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-purple-500/30 animate-float" style={{ animationDelay: '0.8s' }}>
        <Layers className="w-8 h-8 text-purple-400 drop-shadow-lg" />
      </div>

      <div className="absolute top-80 right-80 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-lg border border-cyan-500/30 animate-float" style={{ animationDelay: '3.2s' }}>
        <Globe className="w-6 h-6 text-cyan-400 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-80 right-72 w-18 h-18 bg-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-red-500/30 animate-float" style={{ animationDelay: '1.8s' }}>
        <Cpu className="w-9 h-9 text-red-400 drop-shadow-lg" />
      </div>
      
      {/* Glowing particles with different sizes */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-70 shadow-glow" />
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/6 w-4 h-4 bg-primary/40 rounded-full animate-float shadow-glow" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/4 right-2/3 w-2 h-2 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '3.5s' }} />

      {/* Left side subtle elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-40" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-accent/40 rounded-full animate-float opacity-30" style={{ animationDelay: '6s' }} />
    </div>
  );
};

export default FloatingElements;