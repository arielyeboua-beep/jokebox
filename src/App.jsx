import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  QrCode, 
  Music, 
  Smartphone, 
  Flame, 
  TrendingUp, 
  CheckCircle2, 
  Radio, 
  Sparkles, 
  Sliders, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Volume2, 
  Clock, 
  Award,
  ChevronRight,
  Send,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Carte 1: Mélangeur Diagnostique (3 cartes en cycle élastique)
  const initialMixerCards = [
    {
      id: 1,
      title: "Kerozen — Allez les Éléphants",
      type: "Demande Standard",
      amount: "+2 000 FCFA",
      method: "Wave",
      table: "Table 7 • Maquis Duval",
      status: "Validé en 3s",
      tagColor: "text-neon-orange border-neon-orange/40 bg-neon-orange/10",
      accentGlow: "border-neon-orange/30 shadow-[0_0_20px_rgba(255,122,26,0.15)]"
    },
    {
      id: 2,
      title: "Didi B — Tala (VIP Boost x3)",
      type: "Boost Prioritaire",
      amount: "+6 500 FCFA",
      method: "Orange Money",
      table: "VIP Salon 2 • Club Havana",
      status: "Passe au son suivant",
      tagColor: "text-neon-pink border-neon-pink/40 bg-neon-pink/10",
      accentGlow: "border-neon-pink/30 shadow-[0_0_20px_rgba(255,46,136,0.15)]"
    },
    {
      id: 3,
      title: "Josey — Zambéléman (Dédicace)",
      type: "Dédicace Anniversaire",
      amount: "+3 500 FCFA",
      method: "MTN Money",
      table: "Bar Central • Le Charly",
      status: "Sur écran géant",
      tagColor: "text-neon-green border-neon-green/40 bg-neon-green/10",
      accentGlow: "border-neon-green/30 shadow-[0_0_20px_rgba(43,227,139,0.15)]"
    }
  ];

  const [mixerCards, setMixerCards] = useState(initialMixerCards);
  const [mixerTotalRevenue, setMixerTotalRevenue] = useState(64500);

  useEffect(() => {
    const interval = setInterval(() => {
      setMixerCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
      setMixerTotalRevenue(r => r + 2000);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Carte 2: Machine à Écrire Télémétrie
  const telemetryLogs = [
    "[23:14:02] FLASH QR CODE Table #4 -> Session ouverte",
    "[23:14:15] TITRE SÉLECTIONNÉ : Magic System - 1er Gaou",
    "[23:14:21] DÉDICACE : 'Joyeux anniversaire Aïcha, on fête ça fort ! 🥂'",
    "[23:14:28] PAIEMENT WAVE REÇU : 2 500 FCFA (Réf #WV-8891)",
    "[23:14:31] DJ CONFIRMATION : Accepté avec Boost DJ",
    "[23:14:35] FILE D'ATTENTE : 'Ta chanson passe dans 2 titres'",
    "[23:14:40] ÉCRAN GÉANT : Projection lumineuse lancée !"
  ];

  const [telemetryText, setTelemetryText] = useState("");
  const [logIndex, setLogIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = telemetryLogs[logIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setTelemetryText((prev) => prev + currentLine[charIndex]);
        setCharIndex(c => c + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTelemetryText("");
        setCharIndex(0);
        setLogIndex((i) => (i + 1) % telemetryLogs.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, logIndex]);

  // Carte 3: Planificateur Protocole Curseur
  const [cursorStep, setCursorStep] = useState(0);
  const scheduleDays = [
    { day: "L", label: "Lun", theme: "Rétro", revenue: "18k" },
    { day: "M", label: "Mar", theme: "Acoustic", revenue: "24k" },
    { day: "M", label: "Mer", theme: "Afrobeats", revenue: "38k" },
    { day: "J", label: "Jeu", theme: "Zoblazo", revenue: "45k" },
    { day: "V", label: "Ven", theme: "Coupé-Décalé", revenue: "112k" },
    { day: "S", label: "Sam", theme: "Fiesta VIP", revenue: "165k" },
    { day: "D", label: "Dim", theme: "Chill Lounge", revenue: "55k" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // GSAP Lifecycle
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-anim-item", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.08,
      });

      // Feature Cards Entrance
      gsap.from(".feature-card-anim", {
        scrollTrigger: {
          trigger: "#features-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Manifesto Split Reveal
      gsap.from(".manifesto-anim", {
        scrollTrigger: {
          trigger: "#manifesto-section",
          start: "top 75%",
        },
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Protocol Sticky Stacking Interaction
      const cards = gsap.utils.toArray(".protocol-card");
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(card, {
                scale: 1 - progress * 0.1,
                filter: `blur(${progress * 15}px)`,
                opacity: 1 - progress * 0.5,
                ease: "power2.inOut",
                duration: 0.1,
              });
            },
          });
        }
      });

      // Rotating Vinyl Animation
      gsap.to(".rotating-vinyl", {
        rotation: 360,
        repeat: -1,
        duration: 14,
        ease: "none",
      });

      // Scanning Laser Animation
      gsap.to(".scanning-laser", {
        y: 180,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "power1.inOut",
      });

      // Audio Waveform Animation
      gsap.to(".ecg-path", {
        strokeDashoffset: -400,
        repeat: -1,
        duration: 2.8,
        ease: "linear",
      });

    }, rootRef);

    // Navbar scroll listener
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-[#0F0B1A] text-[#F5F1E8] font-sans overflow-x-hidden wax-texture selection:bg-[#FF7A1A] selection:text-black">
      {/* Global SVG Noise Overlay */}
      <div className="noise-overlay" />

      {/* ============================================================== */}
      {/* A. NAVBAR — "L'Île Flottante"                                  */}
      {/* ============================================================== */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-full px-5 py-3 md:px-7 md:py-3.5 flex items-center justify-between gap-6 md:gap-10 ${
            navScrolled
              ? "bg-[#0F0B1A]/85 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              : "bg-white/5 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF7A1A] to-[#FF2E88] flex items-center justify-center shadow-[0_0_15px_rgba(255,122,26,0.6)] group-hover:scale-105 transition-transform">
              <Radio className="w-4 h-4 text-black font-black" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-2xl md:text-3xl tracking-wider text-white">JOKEBOX</span>
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            </div>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F5F1E8]/75">
            <a href="#features-section" className="interactive-lift hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#experience-section" className="interactive-lift hover:text-white transition-colors">Expérience Live</a>
            <a href="#protocol-section" className="interactive-lift hover:text-white transition-colors">Protocole 3 Étapes</a>
            <a href="#pricing-section" className="interactive-lift hover:text-white transition-colors">Offres Lieux</a>
          </div>

          {/* CTA Nav Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-magnetic px-4 py-2 text-xs md:text-sm font-semibold text-black bg-[#FF7A1A] shadow-[0_0_20px_rgba(255,122,26,0.5)]"
            >
              <span className="btn-slide-bg bg-white" />
              <span className="btn-content flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5" />
                <span>Tester Démo</span>
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ============================================================== */}
      {/* B. SECTION HERO — "Le Plan d'Ouverture"                        */}
      {/* ============================================================== */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden pb-16 pt-32 px-5 sm:px-10 md:px-16 lg:px-24">
        {/* Full Frame Unsplash Background with heavy gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
            alt="Ambiance boîte de nuit et maquis abidjanais"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110"
          />
          {/* Heavy Primary to Deep Night Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1A] via-[#0F0B1A]/85 to-[#0F0B1A]/35" />
          {/* Subtle neon glow splashes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF7A1A]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#FF2E88]/15 blur-[130px] pointer-events-none" />
        </div>

        {/* Hero Content pushed to bottom-left third */}
        <div className="relative z-10 max-w-5xl">
          {/* Abidjan Local Badge */}
          <div className="hero-anim-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181226]/90 border border-[#FF7A1A]/30 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,122,26,0.2)]">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A1A] font-semibold">
              Abidjan Nightlife • Wave • Orange Money • MTN
            </span>
          </div>

          {/* High-Contrast Hero Typography */}
          <h1 className="hero-anim-item font-display tracking-tight text-white uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] mb-4">
            JOKEBOX TRANSFORME CHAQUE SON EN
            <span className="block font-dramatic italic font-normal text-[#FF7A1A] capitalize text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] via-[#FF2E88] to-[#2BE38B] drop-shadow-[0_10px_30px_rgba(255,122,26,0.3)] mt-2">
              Ambiance & Revenu.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="hero-anim-item text-base sm:text-lg md:text-xl text-[#F5F1E8]/85 max-w-2xl font-normal leading-relaxed mb-8">
            Vos clients demandent déjà des musiques au DJ. Avec JOKEBOX, chaque requête flashée au QR code sur la table génère du cash direct pour votre maquis, projette leur dédicace en grand écran et fait monter la température de la salle.
          </p>

          {/* Action CTAs */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#pricing-section"
              className="btn-magnetic px-7 py-4 text-base font-bold text-black bg-[#FF7A1A] shadow-[0_0_30px_rgba(255,122,26,0.6)]"
            >
              <span className="btn-slide-bg bg-white" />
              <span className="btn-content flex items-center gap-2.5">
                <span>Équiper mon établissement</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-magnetic px-6 py-4 text-base font-semibold text-white bg-[#181226]/80 border border-white/20 hover:border-neon-pink/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <span className="btn-slide-bg bg-neon-pink/20" />
              <span className="btn-content flex items-center gap-2 text-[#F5F1E8]">
                <Smartphone className="w-4 h-4 text-neon-pink" />
                <span>Tester le flux client live</span>
              </span>
            </button>
          </div>

          {/* Social Proof / Live Stat Ticker */}
          <div className="hero-anim-item mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <div>
              <div className="font-display text-3xl text-white tracking-wide">+142 000 FCFA</div>
              <div className="text-xs text-[#9E97AA]">Moyenne générée par soirée</div>
            </div>
            <div>
              <div className="font-display text-3xl text-neon-green tracking-wide">5 Secondes</div>
              <div className="text-xs text-[#9E97AA]">Validation Wave / OM / MTN</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-display text-3xl text-neon-pink tracking-wide">0 Litige</div>
              <div className="text-xs text-[#9E97AA]">Remboursement DJ automatique</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* C. FONCTIONNALITÉS — "Artefacts Fonctionnels Interactifs"        */}
      {/* ============================================================== */}
      <section id="features-section" className="py-24 px-5 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-neon-orange tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture Technologique Dédiée</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            3 Artefacts Conçus pour la Ferveur & la Rentabilité
          </h2>
          <p className="text-[#9E97AA] text-base md:text-lg max-w-2xl mt-3">
            Plus qu'un simple lecteur : un système complet reliant les tables de vos clients, la cabine du DJ et la caisse de l'établissement.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARTE 1 — "Mélangeur Diagnostique" (Flux de revenus live) */}
          <div className="feature-card-anim bg-[#181226]/90 border border-white/10 rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-between shadow-card-elevated backdrop-blur-xl relative overflow-hidden group hover:border-[#FF7A1A]/40 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7A1A]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-neon-orange font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/20">
                  01. Cash Machine DJ
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-neon-green">
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-ping" />
                  Live Ticker
                </span>
              </div>

              <h3 className="font-display text-3xl text-white tracking-wide uppercase mb-2">
                Monétisation Instantanée
              </h3>
              <p className="text-sm text-[#9E97AA] leading-relaxed mb-6">
                Chaque son demandé passe de la gratuité à un flux de micro-revenus immédiats crédités sur votre compte.
              </p>

              {/* Stacked Elastic Cycling Cards */}
              <div className="relative h-60 w-full mb-6">
                {mixerCards.map((card, idx) => {
                  const offsets = [
                    { top: "0px", scale: 1, zIndex: 30, opacity: 1 },
                    { top: "18px", scale: 0.94, zIndex: 20, opacity: 0.8 },
                    { top: "36px", scale: 0.88, zIndex: 10, opacity: 0.6 },
                  ];
                  const pos = offsets[idx] || offsets[2];

                  return (
                    <div
                      key={card.id}
                      style={{
                        top: pos.top,
                        transform: `scale(${pos.scale})`,
                        zIndex: pos.zIndex,
                        opacity: pos.opacity,
                        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                      className={`absolute left-0 right-0 p-4 rounded-[1.5rem] bg-[#221A36] border ${card.accentGlow}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${card.tagColor}`}>
                          {card.type}
                        </span>
                        <span className="font-display text-lg text-white font-bold">{card.amount}</span>
                      </div>
                      <div className="font-medium text-white text-sm truncate mb-1">{card.title}</div>
                      <div className="flex items-center justify-between text-[11px] text-[#9E97AA] font-mono">
                        <span>{card.table}</span>
                        <span className="text-neon-green font-semibold">✓ {card.method}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Night Revenue Counter */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9E97AA]">Total encaissé ce soir :</span>
              <span className="font-display text-xl text-neon-orange font-bold tracking-wider">
                {mixerTotalRevenue.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
          </div>

          {/* CARTE 2 — "Machine à Écrire Télémétrie" (Dédicaces en direct) */}
          <div className="feature-card-anim bg-[#181226]/90 border border-white/10 rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-between shadow-card-elevated backdrop-blur-xl relative overflow-hidden group hover:border-[#FF2E88]/40 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2E88]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-neon-pink font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20">
                  02. Écran Géant & Dédicaces
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#FF2E88]">
                  <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                  Flux DJ Actif
                </span>
              </div>

              <h3 className="font-display text-3xl text-white tracking-wide uppercase mb-2">
                Télémétrie en Direct
              </h3>
              <p className="text-sm text-[#9E97AA] leading-relaxed mb-6">
                Le client suit sa commande en temps réel pendant que sa dédicace s'affiche en grand sur les écrans du maquis.
              </p>

              {/* Typewriter Terminal Window */}
              <div className="rounded-[1.5rem] bg-[#0A0712] border border-white/15 p-4 font-mono text-xs leading-relaxed h-56 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#9E97AA]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="ml-1 text-white/60">terminal-jokebox.live</span>
                  </span>
                  <span className="text-neon-pink">BPM: 132 • LIVE</span>
                </div>

                <div className="flex-1 py-3 text-neon-green overflow-hidden">
                  <div className="text-[#9E97AA] text-[11px] mb-2">[Console Maquis VIP connecté]</div>
                  <div className="text-white text-xs font-semibold">
                    {telemetryText}
                    <span className="inline-block w-2 h-4 ml-1 bg-neon-pink animate-pulse align-middle" />
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#9E97AA]">
                  <span>Statut : Diffusion synchro</span>
                  <span className="text-neon-orange font-bold">4 titres en attente</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#9E97AA]">
              <Flame className="w-4 h-4 text-neon-pink shrink-0" />
              <span>Dédicaces lumineuses visibles jusqu'au bout de la salle</span>
            </div>
          </div>

          {/* CARTE 3 — "Planificateur Protocole Curseur" (Paiements Wave/OM & Planning) */}
          <div className="feature-card-anim bg-[#181226]/90 border border-white/10 rounded-[2.5rem] p-7 md:p-8 flex flex-col justify-between shadow-card-elevated backdrop-blur-xl relative overflow-hidden group hover:border-[#2BE38B]/40 transition-colors">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2BE38B]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-neon-green font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
                  03. Paiements 100% Locaux
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-neon-green">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Automatisé
                </span>
              </div>

              <h3 className="font-display text-3xl text-white tracking-wide uppercase mb-2">
                Paiement Wave & Orange
              </h3>
              <p className="text-sm text-[#9E97AA] leading-relaxed mb-6">
                Encaissement direct en 5 secondes sans friction. En cas de refus du DJ, le client est remboursé automatiquement à la seconde.
              </p>

              {/* Animated Schedule Matrix with moving cursor */}
              <div className="rounded-[1.5rem] bg-[#221A36] border border-white/15 p-4 relative h-56 flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-mono text-[#9E97AA] pb-2 border-b border-white/10">
                  <span>Planning des Soirées</span>
                  <span className="text-neon-green font-semibold">Taux acceptation: 98%</span>
                </div>

                {/* Weekday Grid */}
                <div className="grid grid-cols-7 gap-1.5 my-2">
                  {scheduleDays.map((item, idx) => {
                    const isSelected = (cursorStep === 1 || cursorStep === 2) && idx === 5; // Samedi sélectionné
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all duration-300 text-center ${
                          isSelected
                            ? "bg-gradient-to-b from-[#FF7A1A] to-[#FF2E88] text-white scale-105 shadow-[0_0_15px_rgba(255,122,26,0.5)]"
                            : "bg-[#181226] text-[#9E97AA] hover:text-white"
                        }`}
                      >
                        <span className="font-display text-sm font-bold">{item.day}</span>
                        <span className="font-mono text-[9px] mt-0.5">{item.revenue}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Trigger Button */}
                <div
                  className={`py-2 px-3 rounded-xl border flex items-center justify-between text-xs transition-all duration-300 ${
                    cursorStep >= 3
                      ? "bg-neon-green/20 border-neon-green text-neon-green shadow-[0_0_15px_rgba(43,227,139,0.4)]"
                      : "bg-[#181226] border-white/10 text-white"
                  }`}
                >
                  <span className="font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-neon-green" />
                    <span>Reversement Wave Instantané</span>
                  </span>
                  <span className="font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
                    {cursorStep >= 3 ? "✓ Validé 24/7" : "En attente"}
                  </span>
                </div>

                {/* Simulated Moving SVG Cursor */}
                <div
                  className="absolute pointer-events-none transition-all duration-700 ease-out z-40"
                  style={{
                    top: cursorStep <= 1 ? "75px" : cursorStep === 2 ? "80px" : "165px",
                    left: cursorStep <= 2 ? "76%" : "50%",
                    transform: cursorStep === 2 ? "scale(0.85)" : "scale(1)",
                  }}
                >
                  <svg className="w-6 h-6 text-neon-orange drop-shadow-[0_0_8px_rgba(255,122,26,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 0l16 12-7 2-4 9-5-23z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9E97AA]">
              <span>Remboursement instantané :</span>
              <span className="text-neon-green font-mono font-bold">0% de perte client</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* D. PHILOSOPHIE — "Le Manifeste"                                */}
      {/* ============================================================== */}
      <section id="manifesto-section" className="relative py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#08050E] overflow-hidden border-y border-white/10">
        {/* Parallax texture image at low opacity */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
            alt="Texture lumières de nuit"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <div className="manifesto-anim inline-flex items-center gap-2 font-mono text-xs uppercase text-neon-pink tracking-widest font-semibold mb-6">
            <Radio className="w-3.5 h-3.5" />
            <span>Le Manifeste de la Nuit Ivoirienne</span>
          </div>

          {/* Statement 1: Smaller, neutral, common reality */}
          <p className="manifesto-anim text-lg sm:text-xl md:text-2xl text-[#9E97AA] font-light max-w-3xl mb-8 leading-relaxed">
            « La plupart des maquis, bars et clubs subissent des demandes incessantes de chansons qui dérangent le DJ, créent des frustrations entre clients et ne rapportent pas un seul franc à la caisse de l’établissement. »
          </p>

          {/* Statement 2: Massive dramatic italic contrast statement */}
          <div className="manifesto-anim font-dramatic italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
            « Nous faisons de chaque seconde de fête une{" "}
            <span className="text-[#FF7A1A] underline decoration-[#FF7A1A]/40 underline-offset-8 font-normal">
              ferveur collective
            </span>
            , un spectacle sur écran géant et un{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E88] to-[#2BE38B] font-normal">
              nouveau revenu garanti
            </span>
            . »
          </div>

          <div className="manifesto-anim mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-xl text-neon-orange">
                01
              </div>
              <span className="text-sm font-medium text-white">Le client est valorisé</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-xl text-neon-pink">
                02
              </div>
              <span className="text-sm font-medium text-white">Le DJ reste maître du tempo</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display text-xl text-neon-green">
                03
              </div>
              <span className="text-sm font-medium text-white">La caisse encaisse chaque verre</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* E. PROTOCOLE — "Archive Empilée Sticky"                        */}
      {/* ============================================================== */}
      <section id="protocol-section" className="relative py-20 px-5 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-neon-green tracking-widest font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Protocole d'Exécution en 3 Étapes</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Comment Ça Fonctionne Sur le Terrain
          </h2>
          <p className="text-[#9E97AA] text-base md:text-lg max-w-xl mx-auto mt-2">
            Zéro téléchargement d'application. Une expérience 100% web optimisée pour smartphone en pleine ambiance.
          </p>
        </div>

        {/* 3 Fullscreen Sticky Stacking Cards */}
        <div className="relative space-y-12">
          
          {/* STEP 01: Scan QR Code */}
          <div className="protocol-card bg-[#181226] border border-white/15 rounded-[3rem] p-8 md:p-14 shadow-card-elevated backdrop-blur-2xl flex flex-col md:flex-row items-center gap-10 min-h-[520px] transition-all">
            <div className="flex-1 space-y-5">
              <div className="font-mono text-sm text-neon-orange font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neon-orange" />
                ÉTAPE 01 / SCAN IMMÉDIAT DU QR CODE
              </div>
              <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase">
                Le client flashe le QR code sur sa table
              </h3>
              <p className="text-[#9E97AA] text-base sm:text-lg leading-relaxed font-light">
                Chaque table dispose d'un chevalet lumineux ou sticker résistant aux verres. Le client ouvre l'appareil photo de son téléphone et le catalogue musical validé par le DJ s'affiche immédiatement.
              </p>
              <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Sans téléchargement</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Ouverture en &lt; 1 seconde</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Catalogue DJ synchronisé</span>
              </div>
            </div>

            {/* Unique SVG Animation: Rotating Concentric Vinyl & Laser Arm */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7A1A]/20 to-transparent blur-2xl" />
              
              {/* Rotating Vinyl Record */}
              <svg className="w-full h-full rotating-vinyl drop-shadow-[0_0_30px_rgba(255,122,26,0.3)]" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="95" fill="#0D0A14" stroke="#FF7A1A" strokeWidth="2" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(255,122,26,0.2)" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="100" cy="100" r="35" fill="#181226" stroke="#FF2E88" strokeWidth="2" />
                <circle cx="100" cy="100" r="8" fill="#FF7A1A" />
                {/* Vinyl sound waves */}
                <path d="M100 20 A80 80 0 0 1 180 100" fill="none" stroke="#FF7A1A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
              </svg>

              {/* Center QR Badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-2xl bg-black/80 border border-neon-orange flex items-center justify-center shadow-[0_0_20px_rgba(255,122,26,0.5)]">
                  <QrCode className="w-8 h-8 text-neon-orange" />
                </div>
              </div>
            </div>
          </div>

          {/* STEP 02: Dedication & Mobile Payment */}
          <div className="protocol-card bg-[#181226] border border-white/15 rounded-[3rem] p-8 md:p-14 shadow-card-elevated backdrop-blur-2xl flex flex-col md:flex-row items-center gap-10 min-h-[520px] transition-all">
            <div className="flex-1 space-y-5">
              <div className="font-mono text-sm text-neon-pink font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neon-pink" />
                ÉTAPE 02 / DÉDICACE & PAIEMENT SANS FRICTION
              </div>
              <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase">
                Choix du son, dédicace et règlement en 5 secondes
              </h3>
              <p className="text-[#9E97AA] text-base sm:text-lg leading-relaxed font-light">
                Le client tape le titre ou l’artiste, ajoute sa dédicace (« Pour le boss de la table VIP ! ») et active s’il le souhaite le Boost pour passer en priorité. Il valide le montant avec son compte Wave, Orange Money ou MTN.
              </p>
              <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Wave 1-Clic</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Orange Money OTP</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Remboursement instantané</span>
              </div>
            </div>

            {/* Unique SVG Animation: Scanning Laser Beam on Frequency Matrix */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center shrink-0 rounded-3xl bg-[#0B0813] border border-white/10 p-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF2E88]/10 to-transparent" />
              
              {/* Dot Matrix Grid */}
              <div className="grid grid-cols-6 gap-3 w-full h-full p-4 place-items-center">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/15 transition-colors" />
                ))}
              </div>

              {/* Sweeping Laser Line */}
              <div className="scanning-laser absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF2E88] to-transparent shadow-[0_0_15px_#FF2E88]" />

              {/* Mobile Phone Mockup Overlay */}
              <div className="absolute inset-x-8 inset-y-6 rounded-2xl border border-neon-pink/40 bg-black/70 backdrop-blur-sm flex flex-col justify-between p-3.5 font-mono text-[10px]">
                <div className="flex justify-between text-neon-pink">
                  <span>CONFIRMATION WAVE</span>
                  <span>2 000 F</span>
                </div>
                <div className="text-center py-2 text-white font-bold text-xs">
                  Dédicace : "Joyeux Anniv Aïcha"
                </div>
                <div className="bg-neon-pink text-black text-center py-1.5 rounded-lg font-bold">
                  ✓ Validé sur mobile
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03: Live Projection & Atmosphere */}
          <div className="protocol-card bg-[#181226] border border-white/15 rounded-[3rem] p-8 md:p-14 shadow-card-elevated backdrop-blur-2xl flex flex-col md:flex-row items-center gap-10 min-h-[520px] transition-all">
            <div className="flex-1 space-y-5">
              <div className="font-mono text-sm text-neon-green font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neon-green" />
                ÉTAPE 03 / DIFFUSION LIVE & ÉCRAN GÉANT
              </div>
              <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase">
                « Ta chanson passe dans 3 titres » & l'ambiance explose
              </h3>
              <p className="text-[#9E97AA] text-base sm:text-lg leading-relaxed font-light">
                Le client reçoit une alerte en temps réel. Dès que le DJ lance le morceau, la dédicace s'affiche en grand avec des animations lumineuses sur les télévisions et projecteurs du maquis.
              </p>
              <div className="pt-4 flex flex-wrap gap-3 font-mono text-xs text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Affichage Grand Écran</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Suivi minute par minute</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">Clients captivés</span>
              </div>
            </div>

            {/* Unique SVG Animation: Pulsing ECG Audio Waveform with stroke-dashoffset */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center shrink-0 rounded-3xl bg-[#0B0813] border border-white/10 p-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2BE38B]/10 to-transparent" />
              
              <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(43,227,139,0.5)]" viewBox="0 0 300 200">
                {/* Background Grid Lines */}
                <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                
                {/* Audio Waveform Path */}
                <path
                  className="ecg-path"
                  d="M0 100 L40 100 L55 60 L70 140 L85 90 L100 110 L115 40 L130 160 L145 70 L160 120 L180 100 L210 100 L225 50 L240 150 L255 100 L300 100"
                  fill="none"
                  stroke="#2BE38B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="200"
                  strokeDashoffset="0"
                />
              </svg>

              <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-xl p-2.5 border border-neon-green/40 flex items-center justify-between text-xs font-mono">
                <span className="text-white flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-neon-green animate-bounce" />
                  "Premier Gaou"
                </span>
                <span className="text-neon-green font-bold">EN COURS 02:41</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* F. TARIFICATION — "Pour Tous les Lieux de Fête"                 */}
      {/* ============================================================== */}
      <section id="pricing-section" className="py-24 px-5 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase text-neon-orange tracking-widest font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Modèle Économique Transparent</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Des Formules Adaptées à Chaque Établissement
          </h2>
          <p className="text-[#9E97AA] text-base md:text-lg max-w-xl mx-auto mt-2">
            Commencez sans aucun frais fixe ou activez la suite complète pour vos écrans géants et VIP.
          </p>
        </div>

        {/* 3 Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* TIER 1: Maquis Populaire */}
          <div className="bg-[#181226]/80 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-card-elevated backdrop-blur-xl relative group hover:border-white/20 transition-all">
            <div>
              <div className="font-mono text-xs text-[#9E97AA] uppercase tracking-wider mb-2 font-semibold">
                Formule Démarrage
              </div>
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-1">
                Maquis & Bar
              </h3>
              <p className="text-sm text-[#9E97AA] mb-6">
                Idéal pour les maquis ouverts, terrasses et bars de quartier souhaitant tester sans risque.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-white font-bold">0 FCFA</span>
                  <span className="text-xs font-mono text-[#9E97AA]">/ mois</span>
                </div>
                <div className="text-xs text-neon-orange font-mono mt-1">15% de commission sur les dédicaces</div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#F5F1E8]/85 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  <span>20 QR codes imperméables livrés à Abidjan</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  <span>Interface web smartphone pour le DJ</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  <span>Paiements Wave & Orange Money</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  <span>Reversements hebdomadaires automatiques</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-magnetic w-full py-4 text-sm font-bold text-white bg-white/10 border border-white/20 hover:border-white"
            >
              <span className="btn-slide-bg bg-white/20" />
              <span className="btn-content">Installer dans mon maquis</span>
            </button>
          </div>

          {/* TIER 2: Club & Lounge VIP (Featured Middle Card with Neon Orange Glow) */}
          <div className="bg-gradient-to-b from-[#221A36] to-[#181226] border-2 border-neon-orange rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(255,122,26,0.35)] backdrop-blur-2xl relative lg:-translate-y-3 z-20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A1A] text-black font-display tracking-wider text-xs px-4 py-1 rounded-full uppercase font-bold shadow-[0_0_15px_#FF7A1A]">
              Recommandé • Le Plus Populaire
            </div>

            <div>
              <div className="font-mono text-xs text-neon-orange uppercase tracking-wider mb-2 font-bold">
                Performance Complète
              </div>
              <h3 className="font-display text-4xl text-white uppercase tracking-wide mb-1">
                Club & Lounge Chic
              </h3>
              <p className="text-sm text-[#F5F1E8]/70 mb-6">
                Pour les clubs, rooftops et lounges qui veulent l'affichage grand écran et maximiser chaque table VIP.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-white font-bold">25 000 FCFA</span>
                  <span className="text-xs font-mono text-[#9E97AA]">/ mois</span>
                </div>
                <div className="text-xs text-neon-green font-mono mt-1">Seulement 10% de commission par titre</div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#F5F1E8] mb-8 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" />
                  <span>50 QR codes haut de gamme en plexiglas néon</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" />
                  <span>Affichage dynamique sur Téléviseurs & Vidéoprojecteurs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" />
                  <span>Tableau de bord DJ pro sur tablette avec BPM</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-orange shrink-0" />
                  <span>Boosts VIP et enchères de morceaux en direct</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  <span>Reversements instantanés 24h/24 par Wave direct</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-magnetic w-full py-4 text-base font-bold text-black bg-[#FF7A1A] shadow-[0_0_25px_rgba(255,122,26,0.6)]"
            >
              <span className="btn-slide-bg bg-white" />
              <span className="btn-content flex items-center justify-center gap-2">
                <span>Démarrer l'essai 14 jours</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* TIER 3: Empire Multi-Lieux */}
          <div className="bg-[#181226]/80 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-card-elevated backdrop-blur-xl relative group hover:border-white/20 transition-all">
            <div>
              <div className="font-mono text-xs text-[#9E97AA] uppercase tracking-wider mb-2 font-semibold">
                Multi-Établissements
              </div>
              <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-1">
                Réseau & Franchise
              </h3>
              <p className="text-sm text-[#9E97AA] mb-6">
                Pour les propriétaires de plusieurs établissements, complexes hôteliers ou festivals.
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-white font-bold">Sur Devis</span>
                </div>
                <div className="text-xs text-neon-pink font-mono mt-1">Commission dégressive sur volume</div>
              </div>

              <ul className="space-y-3.5 text-sm text-[#F5F1E8]/85 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0" />
                  <span>Gestion multi-locaux centralisée sur un compte</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0" />
                  <span>Intégration sur mesure DMX & régie vidéo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0" />
                  <span>Branding 100% personnalisé à l'enseigne du club</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0" />
                  <span>Account Manager dédié à Abidjan 24h/24</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowDemoModal(true)}
              className="btn-magnetic w-full py-4 text-sm font-bold text-white bg-white/10 border border-white/20 hover:border-white"
            >
              <span className="btn-slide-bg bg-white/20" />
              <span className="btn-content">Contacter l'équipe VIP</span>
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* G. PIED DE PAGE                                               */}
      {/* ============================================================== */}
      <footer className="relative bg-[#08050E] rounded-t-[4rem] border-t border-white/10 pt-16 pb-12 px-5 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Brand & Status Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-4xl tracking-wider text-white">JOKEBOX</span>
                <span className="w-2.5 h-2.5 rounded-full bg-neon-green" />
              </div>
              <p className="text-sm text-[#9E97AA] max-w-md">
                Le Jukebox Digital de la Nuit Abidjanaise — De Yopougon à Marcory, transformez l'ambiance en opportunité.
              </p>
            </div>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#181226] border border-white/10 font-mono text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green" />
              </span>
              <span className="text-white font-medium">SYSTÈME OPÉRATIONNEL</span>
              <span className="text-[#9E97AA] hidden sm:inline">• Latence Wave : 42ms</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 text-sm">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Produit</h4>
              <ul className="space-y-2.5 text-[#9E97AA]">
                <li><a href="#features-section" className="hover:text-neon-orange transition-colors">Fonctionnalités</a></li>
                <li><a href="#protocol-section" className="hover:text-neon-orange transition-colors">Application DJ</a></li>
                <li><a href="#manifesto-section" className="hover:text-neon-orange transition-colors">Écrans Géants</a></li>
                <li><a href="#pricing-section" className="hover:text-neon-orange transition-colors">Tarifs & Modèle</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Paiements</h4>
              <ul className="space-y-2.5 text-[#9E97AA]">
                <li className="flex items-center gap-1.5"><span className="text-neon-green">●</span> Wave Côte d'Ivoire</li>
                <li className="flex items-center gap-1.5"><span className="text-neon-orange">●</span> Orange Money CI</li>
                <li className="flex items-center gap-1.5"><span className="text-yellow-400">●</span> MTN MoMo</li>
                <li className="flex items-center gap-1.5"><span className="text-blue-400">●</span> Moov Money Flooz</li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Établissements</h4>
              <ul className="space-y-2.5 text-[#9E97AA]">
                <li><a href="#" className="hover:text-neon-pink transition-colors">Maquis & Bars</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Clubs & Discothèques</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Lounges & Rooftops</a></li>
                <li><a href="#" className="hover:text-neon-pink transition-colors">Événements & Festivals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Contact & Support</h4>
              <ul className="space-y-2.5 text-[#9E97AA]">
                <li>Abidjan, Côte d'Ivoire</li>
                <li className="text-white font-mono font-medium">+225 07 00 00 00 00</li>
                <li>contact@jokebox.ci</li>
                <li className="text-neon-green font-medium">Assistance WhatsApp 24/7</li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E97AA] gap-4">
            <div>
              © 2026 JOKEBOX CI. Tous droits réservés. Conçu pour la culture nocturne ivoirienne.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions Générales</a>
              <a href="#" className="hover:text-white transition-colors">Charte DJ</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* MODAL SIMULATEUR CLIENT : LE SCAN DU QR CODE EN DIRECT         */}
      {/* ============================================================== */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-md bg-[#181226] border border-neon-orange/40 rounded-[2.5rem] p-6 shadow-[0_0_50px_rgba(255,122,26,0.4)] text-[#F5F1E8] overflow-hidden">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/30 text-neon-orange font-mono text-[11px] font-bold mb-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Simulateur Client Smartphone</span>
              </div>
              <h3 className="font-display text-2xl text-white">Scanner & Commander</h3>
              <p className="text-xs text-[#9E97AA]">Maquis Le Prince • Table 12</p>
            </div>

            {/* Simulated Mobile Screen */}
            <div className="rounded-2xl bg-[#0E0A17] border border-white/10 p-4 space-y-3.5 font-sans">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[#9E97AA]">Rechercher un son :</label>
                <div className="flex items-center gap-2 bg-[#181226] border border-white/15 rounded-xl px-3 py-2 text-sm text-white">
                  <Music className="w-4 h-4 text-neon-orange" />
                  <span>Kerozen - Motivation</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[#9E97AA]">Dédicace (optionnelle) :</label>
                <div className="bg-[#181226] border border-white/15 rounded-xl px-3 py-2 text-xs text-white">
                  "Grosse force à toute la team ! On est ensemble jusqu'au matin 🍾"
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-neon-pink/10 border border-neon-pink/30">
                <div className="text-xs">
                  <div className="font-bold text-white">Option Boost VIP</div>
                  <div className="text-[10px] text-[#9E97AA]">Passe devant 3 morceaux</div>
                </div>
                <div className="font-display text-lg text-neon-pink">+1 500 F</div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="font-mono text-[#9E97AA]">Total à régler :</span>
                <span className="font-display text-2xl text-neon-orange font-bold">3 500 FCFA</span>
              </div>

              {/* Payment selector buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    alert("Simulateur Wave : Paiement de 3 500 FCFA validé ! La dédicace a été transmise au DJ.");
                    setShowDemoModal(false);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-[#1EA7FD] hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Payer par Wave</span>
                </button>
                <button
                  onClick={() => {
                    alert("Simulateur Orange Money : Code OTP confirmé ! Votre son passe dans 3 titres.");
                    setShowDemoModal(false);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-[#FF6600] hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Orange Money</span>
                </button>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="font-mono text-[10px] text-[#9E97AA]">
                🔒 Transaction sécurisée • Remboursement garanti si rejet DJ
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
