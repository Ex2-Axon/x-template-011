import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

/* ── Floating Organic Shapes ── */
function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="noise-bg" />
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[100px] animate-float organic-shape"
        style={{ animationDuration: '15s' }}
      />
      <div 
        className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-primary/10 blur-[80px] animate-float organic-shape"
        style={{ animationDuration: '20s', animationDelay: '-5s' }}
      />
      <div 
        className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-muted/30 blur-[60px] animate-float organic-shape"
        style={{ animationDuration: '12s', animationDelay: '-2s' }}
      />
    </div>
  )
}

/* ── Interactive Counter Component ── */
function Counter({ count, setCount }: { count: number, setCount: (c: number) => void }) {
  return (
    <div className="flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
      <button
        onClick={() => setCount(count + 1)}
        className="btn-primary group relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore
          <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-mono transition-transform group-active:scale-125">
            {count}
          </span>
        </span>
        <div className="absolute inset-0 bg-accent translate-y-full transition-transform group-hover:translate-y-0" />
      </button>
      <p className="text-sm text-text/60 font-medium">Click to interact with the layers</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center px-6 py-12 md:py-24">
      <BackgroundDecor />

      {/* ── Header ── */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-16 md:mb-24 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary organic-shape flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-primary">TEMPLATE</span>
        </div>
        <div className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-widest uppercase animate-pulse">
          Day 11 — New
        </div>
      </header>

      {/* ── Hero Section ── */}
      <main className="w-full max-w-4xl flex flex-col items-center text-center gap-8 md:gap-12">
        <div 
          className="relative layer-parallax mb-4"
          style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
        >
          <div className="absolute -inset-4 bg-white/50 blur-2xl rounded-full -z-10 animate-pulse" />
          <div className="relative glass-card p-6 md:p-8 organic-shape overflow-hidden">
             <img 
              src={heroImg} 
              alt="Hero" 
              className="w-48 md:w-64 h-auto drop-shadow-2xl animate-scale-in"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <img src={reactLogo} className="w-8 h-8 animate-float" style={{ animationDuration: '4s' }} alt="React" />
              <img src={viteLogo} className="w-8 h-8 animate-float" style={{ animationDuration: '5s', animationDelay: '-1s' }} alt="Vite" />
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-text text-reveal">
            NATURAL FLOW
          </h1>
          <p className="text-lg md:text-xl text-text/70 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Experience a seamless and serene digital environment with <span className="text-primary font-semibold">Organic Layers</span>. 
            Crafted for the modern web.
          </p>
        </div>

        <Counter count={count} setCount={setCount} />

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12 md:mt-20">
          {[
            { title: 'Documentation', desc: 'Deep dive into the architecture', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            { title: 'Community', desc: 'Join the conversation on Discord', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
          ].map((item, i) => (
            <div 
              key={item.title}
              className="glass-card p-8 rounded-3xl text-left hover:bg-white/60 transition-colors group animate-slide-up"
              style={{ animationDelay: `${0.8 + i * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-text/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-24 md:mt-32 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 border-t border-muted/20 pt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="text-text/40 text-sm font-medium">
          // SYSTEM v1.11.0 — ORGANIC LAYERS READY
        </div>
        <div className="flex gap-6">
          {['GitHub', 'Discord', 'X.com', 'Bluesky'].map(social => (
            <a 
              key={social}
              href="#" 
              className="text-text/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
            >
              {social}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
