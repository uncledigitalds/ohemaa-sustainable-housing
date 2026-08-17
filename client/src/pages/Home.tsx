/*
 * Ohemaa style reminder: Coastal Civic Modernism — grounded Ghanaian place, editorial whitespace,
 * deep teal infrastructure, warm sand accents, and calm interactions that make sustainable ownership feel tangible.
 */
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const heroImage = "/manus-storage/ohemaa-hero_59eca2dc.jpg";
const buildImage = "/manus-storage/ohemaa-construction_ae68cd32.jpg";
const markImage = "/manus-storage/ohemaa-mark_6cf81c28.png";

const features = ["3–4 bedroom homes", "1,200+ square feet", "Modern finishes", "Solar-ready", "Earthquake-resistant", "Live buyer portal"];
const timeline = [
  { phase: "01", title: "Foundation", time: "Months 1–2", copy: "Site preparation, ground work, and the first resilient base." },
  { phase: "02", title: "Framing", time: "Months 2–3", copy: "Recycled blocks, walls, roofing, and the shape of home." },
  { phase: "03", title: "Finishing", time: "Months 4–5", copy: "Interior details, exterior character, and final systems." },
  { phase: "04", title: "Delivery", time: "Month 6", copy: "A move-in ready home, handed over with confidence." },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);

  const goTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#16352f]">
      <section className="relative min-h-[760px] bg-[#0b6b58] text-white" id="top">
        <img src={heroImage} alt="Modern sustainable homes in a coastal Ghanaian setting" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,39,32,.92)_0%,rgba(5,67,54,.72)_44%,rgba(7,89,73,.18)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1280px] flex-col px-6 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/20 py-5">
            <button onClick={() => goTo("top")} className="flex items-center gap-3" aria-label="Ohemaa home">
              <img src={markImage} alt="" className="h-10 w-10 rounded-xl bg-white/10 object-contain p-1" />
              <span className="font-display text-2xl tracking-[-.03em]">ohemaa<span className="text-[#f0b38c]">.</span></span>
            </button>
            <nav className="hidden items-center gap-9 text-sm text-white/80 md:flex">
              <button onClick={() => goTo("impact")} className="nav-link">Why Ohemaa</button>
              <button onClick={() => goTo("community")} className="nav-link">The community</button>
              <button onClick={() => goTo("timeline")} className="nav-link">How it works</button>
            </nav>
            <Button onClick={() => setReserveOpen(true)} className="hidden rounded-full bg-white px-5 text-[#0b6b58] hover:bg-[#f0b38c] hover:text-[#16352f] md:inline-flex">Reserve now <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <button className="rounded-full border border-white/30 p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button>
          </header>
          {mobileOpen && <div className="absolute left-6 right-6 top-20 z-20 rounded-2xl border border-white/20 bg-[#0b6b58] p-5 shadow-xl md:hidden"><div className="flex flex-col gap-4 text-left text-sm"><button onClick={() => goTo("impact")}>Why Ohemaa</button><button onClick={() => goTo("community")}>The community</button><button onClick={() => goTo("timeline")}>How it works</button><Button onClick={() => { setMobileOpen(false); setReserveOpen(true); }} className="mt-2 bg-white text-[#0b6b58]">Reserve now</Button></div></div>}
          <div className="flex flex-1 items-center py-20 lg:py-28">
            <div className="max-w-3xl animate-rise">
              <p className="eyebrow mb-7 text-[#f0b38c]">A new standard for home ownership · Ghana</p>
              <h1 className="max-w-3xl font-display text-6xl leading-[.96] tracking-[-.055em] sm:text-7xl lg:text-[7.6rem]">Affordable housing built from waste.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">Recycled plastic blocks. 40% lower cost. 6-month build time. The future of sustainable homes in Ghana.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button onClick={() => setReserveOpen(true)} size="lg" className="rounded-full bg-[#f0b38c] px-7 text-[#16352f] hover:bg-white">Reserve your unit <ArrowRight className="ml-2 h-4 w-4" /></Button><Button onClick={() => goTo("community")} size="lg" variant="outline" className="rounded-full border-white/45 bg-transparent px-7 text-white hover:bg-white/10">Learn more <ChevronDown className="ml-2 h-4 w-4" /></Button></div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-white/20 py-5 text-xs uppercase tracking-[.18em] text-white/55"><span>01 — Reclaim</span><span className="hidden sm:inline">Accra · Ghana</span><span>Scroll to explore ↓</span></div>
        </div>
      </section>

      <section id="impact" className="bg-[#f7f7f3] px-6 py-24 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1280px]"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-[#0b6b58]">The numbers matter</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-none tracking-[-.045em] text-[#16352f] sm:text-6xl">A better way to build, measured.</h2></div><p className="max-w-xs text-sm leading-6 text-[#59716b]">Every Ohemaa home turns a practical need into a lasting environmental gain.</p></div><div className="grid gap-4 md:grid-cols-3">{[["40%", "Cost savings", "Lower than traditional concrete construction. Same quality, better value."], ["6", "Month build time", "From foundation to move-in. A clear path to a home of your own."], ["10K+", "Plastic bottles saved", "Per home, diverted from landfills and shaped into building blocks."]].map(([stat, title, copy], i) => <article key={title} className="metric-card" style={{ animationDelay: `${i * 80}ms` }}><span className="font-display text-7xl tracking-[-.06em] text-[#0b6b58]">{stat}</span><h3 className="mt-10 text-xl font-semibold tracking-[-.02em]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#59716b]">{copy}</p><span className="mt-12 block h-px w-12 bg-[#f0b38c]" /></article>)}</div></div></section>

      <section id="community" className="bg-white px-6 py-24 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><p className="eyebrow text-[#0b6b58]">01 — The project</p><h2 className="mt-5 max-w-xl font-display text-5xl leading-[.98] tracking-[-.05em] sm:text-6xl">The Beach Community.</h2><p className="mt-8 max-w-lg text-base leading-7 text-[#59716b]">A small, considered neighborhood for people who want room to grow and a lighter footprint on the place they call home.</p><p className="mt-5 max-w-lg text-base leading-7 text-[#59716b]">Each home is designed around practical comfort, natural light, and a build process you can actually follow. No mystery. Just a better starting point.</p><div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">{features.map((feature) => <div key={feature} className="flex items-center gap-3 text-sm font-medium"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e3f1ec] text-[#0b6b58]"><Check className="h-3.5 w-3.5" /></span>{feature}</div>)}</div><button onClick={() => setReserveOpen(true)} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0b6b58] underline decoration-[#f0b38c] decoration-2 underline-offset-8">Get the full project brief <ArrowRight className="h-4 w-4" /></button></div><div className="relative"><div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#f0b38c]" /><img src={buildImage} alt="Recycled plastic block construction detail" className="relative z-10 aspect-[4/3] w-full rounded-[2rem] object-cover" /><div className="absolute -bottom-5 -right-4 z-20 max-w-[180px] rounded-2xl bg-[#0b6b58] p-5 text-white shadow-xl"><span className="eyebrow text-[#f0b38c]">Built to last</span><p className="mt-3 font-display text-2xl leading-none">Materials with a second life.</p></div></div></div></section>

      <section id="timeline" className="bg-[#eaf0ec] px-6 py-24 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1280px]"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-[#0b6b58]">02 — The process</p><h2 className="mt-5 font-display text-5xl leading-none tracking-[-.05em] sm:text-6xl">From ground to keys.</h2></div><p className="max-w-sm text-sm leading-6 text-[#59716b]">A six-month build plan, made visible. Follow every meaningful step from the buyer portal.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{timeline.map((item, i) => <article key={item.phase} className="timeline-card" style={{ animationDelay: `${i * 70}ms` }}><span className="font-display text-4xl text-[#0b6b58]/40">{item.phase}</span><div className="mt-16"><p className="eyebrow text-[#0b6b58]">{item.time}</p><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#59716b]">{item.copy}</p></div></article>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#0b6b58] px-6 py-28 text-white lg:px-12 lg:py-36"><div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" /><div className="absolute -right-4 -top-16 h-64 w-64 rounded-full border border-white/10" /><div className="relative mx-auto max-w-[1280px]"><p className="eyebrow text-[#f0b38c]">03 — Your next chapter</p><h2 className="mt-6 max-w-2xl font-display text-6xl leading-[.92] tracking-[-.055em] sm:text-8xl">Ready to own?</h2><p className="mt-7 max-w-md text-lg leading-8 text-white/70">First phase: 12 units. Limited availability. Build a better starting point.</p><Button onClick={() => setReserveOpen(true)} size="lg" className="mt-9 rounded-full bg-white px-7 text-[#0b6b58] hover:bg-[#f0b38c] hover:text-[#16352f]">Reserve your home now <ArrowRight className="ml-2 h-4 w-4" /></Button></div></section>

      <footer className="bg-[#16352f] px-6 py-10 text-white/60 lg:px-12"><div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-6 text-sm md:flex-row md:items-center"><div className="flex items-center gap-3 text-white"><img src={markImage} alt="" className="h-8 w-8 rounded-lg bg-white/10 p-1" /><span className="font-display text-xl">ohemaa<span className="text-[#f0b38c]">.</span></span></div><p>Homes that give waste a second life.</p><p>© 2026 Ohemaa Housing Co.</p></div></footer>

      <Dialog open={reserveOpen} onOpenChange={setReserveOpen}><DialogContent className="rounded-3xl border-0 bg-[#f7f7f3] p-8 text-[#16352f] sm:max-w-md"><DialogHeader><DialogTitle className="font-display text-4xl tracking-[-.04em]">Reserve your place.</DialogTitle><DialogDescription className="pt-2 text-[#59716b]">Leave your details and the Ohemaa team will share the project brief, availability, and next steps.</DialogDescription></DialogHeader><form className="mt-5 space-y-4" onSubmit={(e) => { e.preventDefault(); setReserveOpen(false); }}><input required placeholder="Your name" className="field" /><input required type="email" placeholder="Email address" className="field" /><select className="field"><option>I'm interested in a 3–4 bedroom home</option><option>I want to learn more first</option></select><Button type="submit" className="w-full rounded-full bg-[#0b6b58] py-6 text-white hover:bg-[#075141]">Send my enquiry <ArrowRight className="ml-2 h-4 w-4" /></Button></form></DialogContent></Dialog>
    </main>
  );
}
