import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  ParkingCircle,
  Zap,
  Bath,
  Heart,
  Coffee,
  Users,
  Briefcase,
  Bed,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Menu as MenuIcon,
  Sparkles,
  ChefHat,
  Flame,
  FlameKindling,
  Drumstick,
  Soup,
  Truck,
  Car,
  Dog,
  Baby,
  Accessibility
} from "lucide-react";
import React, { useState } from "react";



const RoadDivider = () => {
  return (
    <div className="h-12 bg-dhaba-dark relative overflow-hidden flex items-center shadow-xl">
      {/* Edge lines */}
      <div className="absolute top-0 w-full h-[1px] bg-white/10" />
      <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />

      {/* Center dash lines */}
      <div className="w-full flex justify-center gap-10 md:gap-14 items-center px-4 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-12 md:w-16 h-1 bg-dhaba-mustard/90 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.4)] flex-shrink-0"
          />
        ))}
      </div>

      {/* Moving Vehicles */}
      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0 }}
        className="absolute z-10 text-dhaba-mustard/30"
      >
        <Truck size={24} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute z-10 text-white/20"
      >
        <Car size={20} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 10 }}
        className="absolute z-10 text-dhaba-mustard/20"
      >
        <Car size={20} fill="currentColor" />
      </motion.div>

      {/* Road grain effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:4px_4px]" />
    </div>
  );
};

const ReviewsMarquee = () => {
  const reviewsRow1 = [
    { text: "Stopped here on the way to Chandigarh. Hands down the cleanest washrooms on NH-1! Naivedyam's food was as authentic as the city outlets.", author: "Rahul Sharma" },
    { text: "Such a relief to have a premium stop at the 64th milestone. Enjoyed a perfect cup at Chaayos and the EV charging station was super fast.", author: "Priyanka T." },
    { text: "Finally a family-friendly stopover! The Uttham Lounge is so relaxing, and the security makes you feel very safe parking your car.", author: "Amit Verma" },
    { text: "Best pitstop on the Delhi-Panipat route. Had Blue Tokai coffee and some great food. The whole place is beautifully maintained and hygienic.", author: "Sonia Gupta" },
  ];

  const reviewsRow2 = [
    { text: "Absolutely loved the multi-cuisine options. Having Naivedyam and Chaayos under one roof on a highway is a game changer. Highly recommend!", author: "Vikram Rathi" },
    { text: "A breath of fresh air compared to regular dhabas. The air-conditioned infrastructure is top-notch. Staff is very professional and polite.", author: "Anjali Khanna" },
    { text: "Very premium vibe right at Ganaur. The interiors are modern and the food quality is fantastic. This is our new permanent stop.", author: "Deepak S." },
    { text: "Great accessibility, ample parking, and pristine hygiene standards. If you are travelling on NH-44, do not miss stopping at Highway Haven.", author: "Karan Patel" },
  ];

  const ReviewItem: React.FC<{ text: string; author: string }> = ({ text, author }) => (
    <div className="flex flex-col bg-[#FFFBEB] text-dhaba-dark rounded-2xl border-3 border-dhaba-dark shadow-[6px_6px_0px_#1C1917] transition-all duration-300 relative select-none hover:translate-y-[-2px] min-w-[300px] w-[300px]">
      {/* Top: Rating & Ticket Info */}
      <div className="flex items-center justify-center gap-4 px-6 py-3 border-b-2 border-dashed border-dhaba-dark/30 relative">
        <div className="absolute -bottom-[10px] -left-[10px] ticket-punch-hole bg-[#a41c1c]" />
        <div className="absolute -bottom-[10px] -right-[10px] ticket-punch-hole bg-[#a41c1c]" />

        <span className="text-[7px] font-mono font-black tracking-widest text-[#B91C1C] uppercase leading-none">NH-1 PASS</span>
        <div className="flex gap-0.5 text-amber-500 fill-amber-500">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" className="stroke-none" />)}
        </div>
        <span className="text-[7px] font-mono text-stone-500 font-black leading-none">NO. 064 GNR</span>
      </div>

      {/* Bottom: Text */}
      <div className="text-left whitespace-normal px-6 py-5">
        <p className="font-sans text-sm md:text-base font-extrabold leading-snug text-dhaba-dark">"{text}"</p>
        <span className="text-stone-500 text-[9px] uppercase tracking-[0.15em] font-display font-black mt-3 block">— {author}</span>
      </div>
    </div>
  );


  return (
    <section className="relative py-24 md:py-32 overflow-visible">
      {/* Tilted Top Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: "#a41c1c",
          clipPath: "polygon(0 4rem, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-4rem"
        }}
      />
      
      <div className="relative z-10 pt-4 md:pt-8">
      {/* Section Header */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-20 mb-20 text-center">
        <span className="font-serif italic text-dhaba-mustard text-2xl mb-4 block">Experiences That Speak for Themselves</span>
        <h2 className="font-display text-xl md:text-2xl text-white/80 tracking-tight leading-snug max-w-2xl mx-auto uppercase">
          Discover why travelers choose us for comfort, convenience, and a <span className="text-dhaba-mustard font-black">refined stopover.</span>
        </h2>
        <div className="w-20 h-1 bg-dhaba-mustard/30 mx-auto mt-8 rounded-full" />
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="flex flex-col gap-10 pointer-events-none overflow-hidden w-full">
        {/* Row 1 */}
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((r, i) => (
              <ReviewItem key={i} text={r.text} author={r.author} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="relative">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((r, i) => (
              <ReviewItem key={i} text={r.text} author={r.author} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side gradients to fade out reviews */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-dhaba-red via-dhaba-red/80 to-transparent z-10" />
      <div className="hidden md:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-dhaba-red via-dhaba-red/80 to-transparent z-10" />
      </div>
    </section>
  );
};

const fbBrands = [
  "Chokhi Dhani",
  "Three Sixty Lux",
  "Uttham",
  "Chaayos",
  "Naivedyam",
  "Blue Tokai Coffee",
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRetailOpen, setMobileRetailOpen] = useState(false);
  const [mobileFbOpen, setMobileFbOpen] = useState(false);

  // Retro Horn States
  const [isHornActive, setIsHornActive] = useState(false);
  const [showHornBubble, setShowHornBubble] = useState(false);
  const [hornHovered, setHornHovered] = useState(false);

  // Refs to clean up timeouts on multiple clicks
  const waveTimeoutRef = React.useRef<any>(null);
  const hornTimeoutRef = React.useRef<any>(null);

  // Web Audio synth double honk
  const playHornSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const playBeep = (delay: number, duration: number, freq: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sawtooth"; // retro synth brass tone
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        
        // Second harmonic for dual-tone truck horn flavor
        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(freq * 1.25, ctx.currentTime + delay);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + delay + 0.02);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + delay + duration - 0.04);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + duration);
        
        osc.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delay);
        osc2.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
        osc2.stop(ctx.currentTime + delay + duration);
      };
      
      // Honk Honk!
      playBeep(0, 0.15, 390);
      playBeep(0.18, 0.15, 390);
    } catch (e) {
      console.log("Audio Context blocked or not supported", e);
    }
  };

  const handleHornClick = () => {
    playHornSound();
    setIsHornActive(true);
    setShowHornBubble(true);

    if (waveTimeoutRef.current) clearTimeout(waveTimeoutRef.current);
    if (hornTimeoutRef.current) clearTimeout(hornTimeoutRef.current);

    waveTimeoutRef.current = setTimeout(() => {
      setIsHornActive(false);
    }, 800);

    hornTimeoutRef.current = setTimeout(() => {
      setShowHornBubble(false);
    }, 2000);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFBEB] text-[#1C1917] border-b-4 border-dhaba-dark shadow-[0_4px_0px_rgba(28,25,23,1)]">
      {/* Retro Bumper Safety/Hazard Strip */}
      <div className="h-[6px] w-full hazard-strip border-b-2 border-dhaba-dark" />
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo & Retro Badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center hover:scale-105 transition-transform duration-300 relative group cursor-pointer">
              <img 
                src="/BIG_HH.png" 
                alt="Highway Haven Logo" 
                fetchPriority="high"
                loading="eager"
                className="h-16 w-auto object-contain filter drop-shadow-sm animate-logo-glow" 
              />
            </div>
            
            {/* Retro Diner Blinking Neon Badge */}
            <div className="hidden sm:flex flex-col items-center justify-center bg-[#1C1917] px-2.5 py-0.5 border-2 border-dhaba-red rounded-lg shadow-[0_0_12px_rgba(185,28,28,0.4),inset_0_0_4px_rgba(185,28,28,0.2)] rotate-[-2deg] select-none scale-90">
              <span className="text-[8px] font-display font-black text-dhaba-mustard tracking-widest leading-none">HIGHWAY</span>
              <span className="text-[10px] font-mono font-black animate-neon-flicker tracking-tighter leading-tight">★ OPEN 24/7 ★</span>
            </div>
            
            {/* Dashboard Blinkers */}
            <div className="hidden md:flex gap-1.5 items-center bg-[#1C1917] px-2 py-0.5 rounded-full border-2 border-dhaba-dark shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] scale-90">
              <span className="w-1.5 h-1.5 rounded-full animate-blink-red" title="Alert Red" />
              <span className="w-1.5 h-1.5 rounded-full animate-blink-amber" style={{ animationDelay: '0.4s' }} title="Alert Amber" />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 font-display font-black text-xs tracking-widest uppercase select-none">
            
            {/* Group Bookings swinging board */}
            <a 
              href="#groups" 
              className="hover-swing text-[#1C1917] hover:text-dhaba-red border-2 border-dhaba-dark hover:bg-dhaba-mustard/15 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[#FFFDF6] flex items-center gap-1.5 whitespace-nowrap"
            >
              <Users size={12} className="text-dhaba-red" />
              <span>Group Bookings</span>
            </a>

            {/* F&B Dropdown */}
            <div className="relative group py-2">
              <button className="hover-swing flex items-center gap-1.5 text-[#1C1917] hover:text-dhaba-red border-2 border-dhaba-dark hover:bg-dhaba-mustard/15 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[#FFFDF6] font-display font-black uppercase whitespace-nowrap">
                <Coffee size={12} className="text-dhaba-red" />
                <span>F&B</span> 
                <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 text-dhaba-dark/60" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#FFFBEB] border-3 border-dhaba-dark rounded-2xl shadow-[6px_6px_0px_rgba(28,25,23,1)] p-1.5 w-64 flex flex-col overflow-hidden">
                  <div className="border-2 border-dashed border-dhaba-dark/20 rounded-xl p-2 bg-[#FFFDF6] flex flex-col gap-0.5">
                    {/* Retro Stamp Header */}
                    <div className="px-3 py-1 border-b border-dhaba-dark/10 mb-1 text-center">
                      <span className="text-[9px] font-display font-black text-dhaba-red tracking-widest">★ DHABA SPECIALS ★</span>
                    </div>
                    {fbBrands.map((brand) => (
                      <a
                        key={brand}
                        href="#brands"
                        className="group/item px-3 py-2 hover:bg-dhaba-mustard/20 rounded-lg transition-all duration-200 text-[10px] font-black tracking-widest text-[#1C1917]/80 hover:text-dhaba-red border-l-4 border-transparent hover:border-dhaba-red flex items-center justify-between"
                      >
                        <span>{brand}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-dhaba-red">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Retail Dropdown */}
            <div className="relative group py-2">
              <button className="hover-swing flex items-center gap-1.5 text-[#1C1917] hover:text-dhaba-red border-2 border-dhaba-dark hover:bg-dhaba-mustard/15 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[#FFFDF6] font-display font-black uppercase whitespace-nowrap">
                <Sparkles size={12} className="text-dhaba-red" />
                <span>Retail</span> 
                <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 text-dhaba-dark/60" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#FFFBEB] border-3 border-dhaba-dark rounded-2xl shadow-[6px_6px_0px_rgba(28,25,23,1)] p-1.5 w-56 flex flex-col overflow-hidden">
                  <div className="border-2 border-dashed border-dhaba-dark/20 rounded-xl p-2 bg-[#FFFDF6] flex flex-col gap-0.5">
                    {/* Retro Stamp Header */}
                    <div className="px-3 py-1 border-b border-dhaba-dark/10 mb-1 text-center">
                      <span className="text-[9px] font-display font-black text-dhaba-red tracking-widest">★ TRUCK SHOP ★</span>
                    </div>
                    <a 
                      href="#brands" 
                      className="group/item px-3 py-2 hover:bg-dhaba-mustard/20 rounded-lg transition-all duration-200 text-[10px] font-black tracking-widest text-[#1C1917]/80 hover:text-dhaba-red border-l-4 border-transparent hover:border-dhaba-red flex items-center justify-between"
                    >
                      <span>Leather 360</span>
                      <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-dhaba-red">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="hover-swing flex items-center gap-1.5 text-[#1C1917] hover:text-dhaba-red border-2 border-dhaba-dark hover:bg-dhaba-mustard/15 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-[#FFFDF6] font-display font-black uppercase whitespace-nowrap">
                <Zap size={12} className="text-dhaba-red" />
                <span>Services</span> 
                <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 text-dhaba-dark/60" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-[#FFFBEB] border-3 border-dhaba-dark rounded-2xl shadow-[6px_6px_0px_rgba(28,25,23,1)] p-1.5 w-56 flex flex-col overflow-hidden">
                  <div className="border-2 border-dashed border-dhaba-dark/20 rounded-xl p-2 bg-[#FFFDF6] flex flex-col gap-0.5">
                    {/* Retro Stamp Header */}
                    <div className="px-3 py-1 border-b border-dhaba-dark/10 mb-1 text-center">
                      <span className="text-[9px] font-display font-black text-dhaba-red tracking-widest">★ HIGHWAY SEVA ★</span>
                    </div>
                    <a 
                      href="#highlights" 
                      className="group/item px-3 py-2 hover:bg-dhaba-mustard/20 rounded-lg transition-all duration-200 text-[10px] font-black tracking-widest text-[#1C1917]/80 hover:text-dhaba-red border-l-4 border-transparent hover:border-dhaba-red flex items-center justify-between"
                    >
                      <span>Ev charging</span>
                      <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-dhaba-red">→</span>
                    </a>
                    <a 
                      href="#brands" 
                      className="group/item px-3 py-2 hover:bg-dhaba-mustard/20 rounded-lg transition-all duration-200 text-[10px] font-black tracking-widest text-[#1C1917]/80 hover:text-dhaba-red border-l-4 border-transparent hover:border-dhaba-red flex items-center justify-between"
                    >
                      <span>Guardian pharmacy</span>
                      <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 text-dhaba-red">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Horn Button */}
            <div className="relative flex items-center">
              <button 
                onClick={handleHornClick}
                onMouseEnter={() => setHornHovered(true)}
                onMouseLeave={() => setHornHovered(false)}
                className="relative flex items-center gap-1.5 px-3 py-1.5 bg-dhaba-red text-white border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all rounded-xl cursor-pointer"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dhaba-mustard opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-dhaba-mustard"></span>
                </span>
                <span className="font-display font-black text-[9px] tracking-widest uppercase">HORN OK PLEASE</span>
              </button>
              
              {/* Visual Sound Waves */}
              {/* Visual Sound Waves */}
              {isHornActive && (
                <>
                  <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full border border-dhaba-mustard/50 pointer-events-none animate-horn-wave" />
                  <div className="absolute -right-3 -bottom-3 w-10 h-10 rounded-full border border-dhaba-mustard/50 pointer-events-none animate-horn-wave animate-delay-200" />
                </>
              )}

              {/* PEEP PEEP Comic Pop-up */}
              <AnimatePresence>
                {showHornBubble && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 10, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
                    exit={{ opacity: 0, scale: 0.5, x: 10 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-dhaba-mustard text-dhaba-dark px-2.5 py-1.5 border-2 border-dhaba-dark rounded-md font-display font-black text-[10px] shadow-[3px_3px_0px_#1C1917] pointer-events-none z-50 whitespace-nowrap"
                  >
                    HONK HONK! 🎺
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-2 h-2 bg-dhaba-mustard border-r-2 border-t-2 border-dhaba-dark rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* License Plate Style "Get Directions" Button */}
            <a
              href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#FBBF24] text-dhaba-dark px-7 py-2.5 border-3 border-dhaba-dark shadow-[4px_4px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_rgba(28,25,23,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-display font-black tracking-widest uppercase rounded-xl flex items-center justify-center select-none overflow-visible group"
            >
              {/* License Plate Rivets */}
              <span className="w-1.5 h-1.5 bg-stone-500 rounded-full border border-dhaba-dark absolute top-1 left-1 shadow-sm opacity-80" />
              <span className="w-1.5 h-1.5 bg-stone-500 rounded-full border border-dhaba-dark absolute top-1 right-1 shadow-sm opacity-80" />
              <span className="w-1.5 h-1.5 bg-stone-500 rounded-full border border-dhaba-dark absolute bottom-1 left-1 shadow-sm opacity-80" />
              <span className="w-1.5 h-1.5 bg-stone-500 rounded-full border border-dhaba-dark absolute bottom-1 right-1 shadow-sm opacity-80" />
              
              {/* NH-44 Tag */}
              <span className="text-[8px] bg-dhaba-teal text-white px-1.5 py-0.5 border border-dhaba-dark rounded uppercase tracking-tighter absolute -left-3 -top-1.5 rotate-[-12deg] shadow-[2px_2px_0px_rgba(28,25,23,1)] font-mono group-hover:scale-105 transition-transform">
                NH-44
              </span>
  
              <span className="flex items-center gap-1">
                Get directions <MapPin size={12} className="text-dhaba-red" />
              </span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            
            {/* Tiny Horn on mobile too */}
            <button 
              onClick={handleHornClick}
              aria-label="Play horn sound"
              className="w-10 h-10 bg-dhaba-red text-white border-2 border-dhaba-dark shadow-[2px_2px_0px_rgba(28,25,23,1)] rounded-xl flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(28,25,23,1)] transition-all active:scale-95 relative"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
              {showHornBubble && (
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-dhaba-mustard text-dhaba-dark px-2 py-0.5 border-2 border-dhaba-dark rounded text-[9px] font-black shadow-[2px_2px_0px_#1C1917] z-50 whitespace-nowrap animate-bounce">
                  PEEP! 🎺
                  <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-1.5 h-1.5 bg-dhaba-mustard border-r border-t border-dhaba-dark rotate-45" />
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="w-12 h-12 bg-dhaba-mustard border-3 border-dhaba-dark shadow-[3px_3px_0px_rgba(28,25,23,1)] rounded-xl flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_rgba(28,25,23,1)] transition-all text-dhaba-dark active:scale-95"
            >
              {isOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden bg-[#FFFBEB] border-t-4 border-dhaba-dark p-5 flex flex-col gap-4 font-display text-base text-center border-x-4 border-b-4 rounded-b-[32px] mx-2 relative z-50 shadow-[4px_4px_0px_rgba(28,25,23,1)]"
          >
            <div className="border-2 border-dashed border-dhaba-dark/20 rounded-2xl p-4 bg-[#FFFDF6] flex flex-col gap-4">
              
              <a 
                href="#groups" 
                className="text-dhaba-dark hover:text-dhaba-red font-black uppercase tracking-wider text-base py-1.5 border-b border-dhaba-dark/5 flex items-center justify-center gap-2" 
                onClick={() => setIsOpen(false)}
              >
                <Users size={16} className="text-dhaba-red" />
                Group bookings
              </a>
              
              {/* Mobile F&B Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileFbOpen(!mobileFbOpen)}
                  className="flex items-center justify-center gap-2 text-dhaba-dark hover:text-dhaba-red font-black uppercase tracking-wider text-base w-full py-1"
                >
                  <Coffee size={16} className="text-dhaba-red" />
                  F&B <ChevronDown size={18} className={mobileFbOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <AnimatePresence>
                  {mobileFbOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex flex-col gap-2.5 bg-dhaba-mustard/10 border border-dhaba-dark/10 p-3.5 rounded-xl w-full overflow-hidden"
                    >
                      {fbBrands.map((brand) => (
                        <a 
                          key={brand} 
                          href="#brands" 
                          className="text-xs font-black text-dhaba-dark/80 hover:text-dhaba-red tracking-widest uppercase border-b border-dhaba-dark/5 pb-1.5 last:border-0 last:pb-0" 
                          onClick={() => setIsOpen(false)}
                        >
                          {brand}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Retail Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileRetailOpen(!mobileRetailOpen)}
                  className="flex items-center justify-center gap-2 text-dhaba-dark hover:text-dhaba-red font-black uppercase tracking-wider text-base w-full py-1"
                >
                  <Sparkles size={16} className="text-dhaba-red" />
                  Retail <ChevronDown size={18} className={mobileRetailOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <AnimatePresence>
                  {mobileRetailOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex flex-col gap-2.5 bg-dhaba-mustard/10 border border-dhaba-dark/10 p-3.5 rounded-xl w-full overflow-hidden"
                    >
                      <a href="#brands" className="text-xs font-black text-dhaba-dark/80 hover:text-dhaba-red tracking-widest uppercase" onClick={() => setIsOpen(false)}>Leather 360</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-center gap-2 text-dhaba-dark hover:text-dhaba-red font-black uppercase tracking-wider text-base w-full py-1"
                >
                  <Zap size={16} className="text-dhaba-red" />
                  Services <ChevronDown size={18} className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex flex-col gap-2.5 bg-dhaba-mustard/10 border border-dhaba-dark/10 p-3.5 rounded-xl w-full overflow-hidden text-center"
                    >
                      <a href="#highlights" className="text-xs font-black text-dhaba-dark/80 hover:text-dhaba-red tracking-widest uppercase border-b border-dhaba-dark/5 pb-1.5" onClick={() => setIsOpen(false)}>Ev charging</a>
                      <a href="#brands" className="text-xs font-black text-dhaba-dark/80 hover:text-dhaba-red tracking-widest uppercase pt-1" onClick={() => setIsOpen(false)}>Guardian pharmacy</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Directions Button for mobile */}
              <a
                href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#FBBF24] text-dhaba-dark px-6 py-3 border-3 border-dhaba-dark shadow-[4px_4px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_rgba(28,25,23,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-display font-black tracking-widest uppercase rounded-xl flex items-center justify-center gap-1.5 mt-2"
              >
                {/* Rivets */}
                <span className="w-1 h-1 bg-stone-500 rounded-full border border-dhaba-dark absolute top-1 left-1 opacity-80" />
                <span className="w-1 h-1 bg-stone-500 rounded-full border border-dhaba-dark absolute top-1 right-1 opacity-80" />
                <span className="w-1 h-1 bg-stone-500 rounded-full border border-dhaba-dark absolute bottom-1 left-1 opacity-80" />
                <span className="w-1 h-1 bg-stone-500 rounded-full border border-dhaba-dark absolute bottom-1 right-1 opacity-80" />
                
                Get directions <MapPin size={16} className="text-dhaba-red" />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ParkingIcon = () => (
  <div className="relative border-[3px] border-dhaba-mustard rounded-xl w-12 h-12 flex flex-col items-center justify-center text-dhaba-mustard font-display font-extrabold select-none bg-black/10 shrink-0 shadow-inner">
    <span className="text-2xl leading-none -mt-0.5 font-black">P</span>
    <svg className="w-4 h-4 fill-current -mt-0.5" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  </div>
);

const ShieldCheckIcon = () => (
  <svg className="w-12 h-12 text-dhaba-mustard fill-current shrink-0 filter drop-shadow-md" viewBox="0 0 24 24">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-2 13l-3.5-3.5 1.41-1.41L10 12.17l5.09-5.08L16.5 8.5 10 15z" />
  </svg>
);

const FamilyIcon = () => (
  <svg className="w-12 h-12 text-dhaba-mustard fill-current shrink-0 filter drop-shadow-md" viewBox="0 0 24 24">
    {/* Left Parent */}
    <circle cx="6" cy="6.5" r="2" />
    <path d="M6 9.5c-1.8 0-3.3 1.2-3.8 2.8L4 19h1.5v-4.5h1V19H8l1.8-6.7c-.5-1.6-2-2.8-3.8-2.8z" />
    {/* Right Parent */}
    <circle cx="18" cy="6.5" r="2" />
    <path d="M18 9.5c-1.8 0-3.3 1.2-3.8 2.8l1.8 6.7h1.5v-4.5h1V19h1.5l1.8-6.7c-.5-1.6-2-2.8-3.8-2.8z" />
    {/* Child in Middle */}
    <circle cx="12" cy="9.5" r="1.5" />
    <path d="M12 11.8c-1.2 0-2.2.8-2.5 1.9L10.5 19H12v-3.5h1V19h1.5l1-5.3c-.3-1.1-1.3-1.9-2.5-1.9z" />
  </svg>
);

const SparkleStarsIcon = () => (
  <svg className="w-12 h-12 text-dhaba-mustard fill-current shrink-0 filter drop-shadow-md" viewBox="0 0 24 24">
    {/* Large 4-pointed star */}
    <path d="M10 2c.3 2.5 1.7 3.9 4.2 4.2-2.5.3-3.9 1.7-4.2 4.2-.3-2.5-1.7-3.9-4.2-4.2 2.5-.3 3.9-1.7 4.2-4.2z" />
    {/* Medium 4-pointed star */}
    <path d="M17 10c.2 1.8 1.2 2.8 3 3-1.8.2-2.8 1.2-3 3-.2-1.8-1.2-2.8-3-3 1.8-.2 2.8-1.2 3-3z" />
    {/* Small 4-pointed star */}
    <path d="M6 14c.1 1.2.8 1.9 2 2-1.2.1-1.9.8-2 2-.1-1.2-.8-1.9-2-2 1.2-.1 1.9-.8 2-2z" />
  </svg>
);

const Hero = () => {
  const brands = [
    {
      name: "UTTHAM LOUNGE",
      logo: "/resturents icons/uthham.png",
      tagline: "GT ROAD'S FIRST PREMIUM LOUNGE",
      w: 225,
      h: 224
    },
    {
      name: "JUGNI DHABA",
      logo: "/resturents icons/jugni.png",
      tagline: "MULTICUISINE NON VEG & VEG",
      w: 225,
      h: 225
    },
    {
      name: "BLUE TOKAI",
      logo: "/resturents icons/blue tokai.png",
      tagline: "SPECIALTY COFFEE & BREWS",
      w: 225,
      h: 225
    },
    {
      name: "NAIVEDYAM",
      logo: "/resturents icons/naivedham.png",
      tagline: "AUTHENTIC SOUTH INDIAN VEG",
      w: 230,
      h: 132
    },
    {
      name: "CHAAYOS",
      logo: "/resturents icons/chayos.png",
      tagline: "EXPERIMENTS WITH CHAI & SNACKS",
      w: 404,
      h: 316
    },
    {
      name: "GUARDIAN PHARMACY",
      logo: "/gUARDIAN PHARMA d1.png",
      tagline: "24/7 PHARMACY & WELLNESS STORE",
      w: 225,
      h: 225
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#eab308]">
      {/* Animated rotating sunburst layer */}
      <div className="absolute inset-0 z-0 opacity-65 overflow-hidden">
        <div className="w-[300vw] h-[300vw] sm:w-[200vw] sm:h-[200vw] absolute top-[-100vw] left-[-100vw] sm:top-[-50vw] sm:left-[-50vw] sunburst-rays animate-spin-slow origin-center" />
      </div>

      {/* Radial soft lighting overlay to highlight the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#eab308_80%)] z-1 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-none mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-12 flex-grow flex flex-col items-center justify-center gap-6">
        
        {/* 1. HIGHWAY HAVEN Logo Container (No background, floating logo with premium glow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6, type: "spring" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative select-none text-center mx-auto max-w-sm md:max-w-xl group flex items-center justify-center pt-8 pb-4"
        >
          {/* Sparkles around logo */}
          <motion.span 
            animate={{ scale: [1, 1.25, 1], rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -left-12 top-6 text-4xl text-dhaba-red filter drop-shadow-[0_0_8px_rgba(185,28,28,0.5)] select-none font-bold hidden sm:inline"
          >
            ✦
          </motion.span>
          <motion.span 
            animate={{ scale: [1.25, 1, 1.25], rotate: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -right-12 bottom-6 text-4xl text-dhaba-red filter drop-shadow-[0_0_8px_rgba(185,28,28,0.5)] select-none font-bold hidden sm:inline"
          >
            ✦
          </motion.span>
          <span className="absolute left-1/2 -top-2 -translate-x-1/2 text-2xl text-dhaba-red animate-pulse hidden sm:inline">✦</span>
          
          <img 
            src="/BIG_HH.png" 
            alt="Highway Haven" 
            fetchPriority="high"
            loading="eager"
            className="h-28 md:h-44 w-auto object-contain mx-auto animate-logo-glow group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* 2. Red Sawtooth Banner: SKIP THE MURTHAL RUSH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex items-center justify-center my-4 relative max-w-5xl"
        >
          {/* Left Circle Badge (Food/Kitchen Icon) */}
          <div className="absolute left-0 sm:left-4 lg:left-8 z-20 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white border-[5px] border-[#B91C1C] flex items-center justify-center shadow-2xl shrink-0 group hover:rotate-12 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#B91C1C] flex items-center justify-center text-white">
              <UtensilsCrossed className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Center Jagged Banner */}
          <div className="flex items-stretch w-full mx-8 sm:mx-16 lg:mx-20 h-16 sm:h-24 bg-[#B91C1C] shadow-2xl relative overflow-visible border-y-4 border-white/25">
            {/* Left red sawtooth SVG */}
            <svg className="h-full w-4 sm:w-6 text-[#B91C1C] fill-current flex-shrink-0" viewBox="0 0 24 100" preserveAspectRatio="none">
              <polygon points="24,0 0,10 24,20 0,30 24,40 0,50 24,60 0,70 24,80 0,90 24,100" />
            </svg>
            
            {/* Center text content */}
            <div className="flex-grow flex items-center justify-center bg-[#B91C1C] text-white font-display font-black text-lg sm:text-4xl lg:text-5xl tracking-tight uppercase px-4 select-none drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
              SKIP THE MURTHAL RUSH
            </div>

            {/* Right red sawtooth SVG */}
            <svg className="h-full w-0 sm:w-0 text-[#B91C1C] fill-current flex-shrink-0" viewBox="0 0 24 100" preserveAspectRatio="none">
              <polygon points="0,0 24,10 0,20 24,30 0,40 24,50 0,60 24,70 0,80 24,90 0,100" />
            </svg>
          </div>

          {/* Right Circle Badge (Toilet Icon) */}
          <div className="absolute right-0 sm:right-4 lg:right-8 z-20 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white border-[5px] border-[#B91C1C] flex items-center justify-center shadow-2xl shrink-0 group hover:rotate-12 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#B91C1C] flex items-center justify-center text-white">
              <Bath className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
          </div>
        </motion.div>

        {/* 3. Subtitle Box: Better Than Murthal Because... */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-display font-black tracking-tight text-[#1C1917] text-xs sm:text-base lg:text-2xl uppercase max-w-4xl px-4 select-none"
        >
          Better Than Murthal Because
          <span className="block text-[#B91C1C] text-sm sm:text-lg lg:text-3xl mt-1 tracking-wide font-extrabold animate-sign-blink">
            It's Easier, Faster and Cleaner.
          </span>
        </motion.div>

        {/* 4. White Brand Logos Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-[32px] p-6 sm:p-8 shadow-3xl border-4 border-[#B91C1C] max-w-6xl w-full mx-auto mt-4 group relative"
        >
          {/* All India Permit stamp decal */}
          <div className="absolute -top-6 -right-2 sm:-right-4 bg-dhaba-cream text-[#B91C1C] border-3 border-dashed border-[#B91C1C] px-3.5 py-2.5 rounded-full font-display font-black text-[9px] sm:text-[10px] tracking-wider uppercase rotate-[12deg] shadow-lg select-none z-20 flex flex-col items-center justify-center leading-none">
            <span className="text-[7px]">★ NATIONAL HIGHWAY ★</span>
            <span>ALL INDIA PERMIT</span>
            <span className="text-[7px] text-dhaba-dark">NO. 064 GANAUR</span>
          </div>

          {/* Mobile Auto-Playing Infinite Slider */}
          <div className="md:hidden overflow-hidden w-full py-2">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 w-max"
            >
              {[...brands, ...brands].map((brand, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between text-center p-3 w-[160px] shrink-0">
                  <div className="flex flex-col items-center">
                    <img src={brand.logo} alt={brand.name} width={brand.w || undefined} height={brand.h || undefined} loading="lazy" decoding="async" className="h-12 object-contain mb-3" />
                    <h3 className="font-display font-black text-[#1C1917] text-[13px] uppercase tracking-wide">{brand.name}</h3>
                  </div>
                  <div className="w-full">
                    <div className="bg-[#B91C1C] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full mt-2 uppercase leading-none text-center">
                      {brand.tagline}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Grid Layout with Divider Borders */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 items-stretch md:divide-y-0 md:divide-x divide-stone-300 pb-4">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex flex-col items-center justify-between text-center p-3 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <img src={brand.logo} alt={brand.name} width={brand.w || undefined} height={brand.h || undefined} loading="lazy" decoding="async" className="h-12 object-contain mb-3" />
                  <h3 className="font-display font-black text-[#1C1917] text-[13px] uppercase tracking-wide">{brand.name}</h3>
                </div>
                <div className="w-full">
                  <div className="bg-[#B91C1C] text-white text-[12px] font-bold px-2.5 py-1.5 rounded-full mt-2 uppercase leading-none text-center">
                    {brand.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* High-Fidelity Highlights Strip */}
      <div className="relative z-10 w-full bg-[#820d0d] py-6 px-4 md:px-8 border-t-4 border-dhaba-mustard shadow-[0_-8px_30px_rgb(0,0,0,0.3)]">
        <div className="w-full max-w-none mx-auto grid grid-cols-2 gap-y-6 gap-x-2 sm:flex sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-stretch sm:items-center sm:gap-8 md:gap-4">
          
          {/* Item 1: Ample Parking */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 select-none flex-1 justify-center sm:justify-start">
            <ParkingIcon />
            <div className="flex flex-col font-display font-black tracking-wider leading-none text-white text-base md:text-lg lg:text-xl uppercase">
              <span>Ample</span>
              <span className="text-dhaba-mustard">Parking</span>
            </div>
          </div>

          {/* Item 2: Safe & Secure */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 select-none flex-1 justify-center sm:justify-start">
            <ShieldCheckIcon />
            <div className="flex flex-col font-display font-black tracking-wider leading-none text-white text-base md:text-lg lg:text-xl uppercase">
              <span>Safe &</span>
              <span className="text-dhaba-mustard">Secure</span>
            </div>
          </div>

          {/* Item 3: Family Friendly */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 select-none flex-1 justify-center sm:justify-start">
            <FamilyIcon />
            <div className="flex flex-col font-display font-black tracking-wider leading-none text-white text-base md:text-lg lg:text-xl uppercase">
              <span>Family</span>
              <span className="text-dhaba-mustard">Friendly</span>
            </div>
          </div>

          {/* Item 4: 5 Star Quality Washrooms */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 select-none flex-1 justify-center sm:justify-start">
            <SparkleStarsIcon />
            <div className="flex flex-col font-display font-black tracking-wider leading-none text-white text-base md:text-lg lg:text-xl uppercase">
              <span>5 Star Quality</span>
              <span className="text-dhaba-mustard">Washrooms</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Hanging Badge */}
      <motion.div
        animate={{ rotate: [-2, 3, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-12 hidden lg:flex flex-col items-center z-20 hover-swing cursor-pointer"
      >
        {/* Hanging chains */}
        <div className="flex gap-14 -mb-2">
          <div className="w-1.5 h-10 bg-dhaba-dark rounded-full relative shadow-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:3px_3px] opacity-25" />
          </div>
          <div className="w-1.5 h-10 bg-dhaba-dark rounded-full relative shadow-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:3px_3px] opacity-25" />
          </div>
        </div>
        {/* Board sign */}
        <div className="bg-[#B91C1C] px-6 py-5 rounded-2xl border-4 border-dhaba-dark shadow-[6px_6px_0px_#1C1917] flex flex-col items-center justify-center select-none text-center">
          <span className="text-[9px] font-display font-black tracking-widest text-[#FFFBEB] uppercase mb-1.5 bg-[#0D9488] px-2 py-0.5 rounded border border-dhaba-dark leading-none">APPROVED PITSTOP</span>
          <p className="font-display text-dhaba-mustard text-center text-3xl leading-none font-black tracking-tighter uppercase">OPEN<br />24/7</p>
          <span className="text-[8px] font-mono text-[#FFFBEB]/70 mt-1.5">KM 64 • NH-1</span>
        </div>
      </motion.div>

    </section>
  );
};

const Highlights = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const highlights = [
    {
      title: "Ample Parking",
      icon: <ParkingCircle size={48} />,
      desc: "Large, secure parking area designed for cars, buses, and modern travelers. 24/7 surveillance for your peace of mind.",
      img: "/img/Ample Parking.jpeg"
    },
    {
      title: "EV Charging",
      icon: <Zap size={48} />,
      desc: "Ultra-fast DC charging stations for all electric vehicles. Recharge your car while you recharge yourself.",
      img: "/img/EV Charging.jpeg"
    },
    {
      title: "Pristine Washrooms",
      icon: <Bath size={48} />,
      desc: "Exceptionally clean, hotel-quality washrooms designed for maximum comfort during your journey.",
      img: "/img/Pristine Washrooms.jpeg"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section id="highlights" className="py-24 bg-dhaba-mustard relative overflow-hidden">
      <div className="dhaba-pattern absolute inset-0 opacity-10"></div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <span className="font-serif italic text-dhaba-red text-2xl">Why Stop Here?</span>
          <h2 className="font-display text-5xl md:text-7xl text-dhaba-dark mt-2 tracking-tight uppercase">WORLD CLASS COMFORT & AMENITIES</h2>
          <div className="w-48 h-3.5 hazard-strip mx-auto mt-6 rounded border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917]" />
        </div>

        {/* Mobile Carousel (shown on screens < lg) */}
        <div className="lg:hidden flex flex-col items-center w-full max-w-xs sm:max-w-sm mx-auto">
          {/* Active Highlight Card */}
          <div className="w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHighlight}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FFFDF6] rounded-3xl overflow-hidden border-4 border-dhaba-dark shadow-[8px_8px_0px_#1C1917] group relative transition-all duration-300 w-full"
              >
                <div className="h-48 overflow-hidden relative m-2.5 rounded-2xl border-2 border-dashed border-dhaba-dark/30 bg-stone-900">
                  <img src={highlights[activeHighlight].img} alt={highlights[activeHighlight].title} width={1000} height={667} loading="lazy" decoding="async" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-dhaba-red/10" />
                </div>
                <div className="absolute top-36 left-8 bg-[#BC3030] p-4 rounded-xl border-3 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] text-white z-10">
                  {highlights[activeHighlight].icon}
                </div>
                <div className="p-8 pt-10 text-left">
                  <h3 className="font-display text-2xl mb-3 text-[#B91C1C] font-black uppercase tracking-tight flex items-center gap-2">
                    <span>✦</span> {highlights[activeHighlight].title}
                  </h3>
                  <p className="text-dhaba-dark/80 text-sm font-sans leading-relaxed">{highlights[activeHighlight].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Row */}
          <div className="flex items-center gap-6 mt-6 justify-center">
            {/* Left Arrow Button */}
            <button 
              onClick={() => setActiveHighlight((prev) => (prev === 0 ? highlights.length - 1 : prev - 1))}
              className="w-8 h-8 bg-dhaba-dark text-white rounded-full flex items-center justify-center transition-all hover:bg-dhaba-dark/80 active:scale-90 cursor-pointer"
              aria-label="Previous highlight"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHighlight(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeHighlight === idx ? 'bg-[#BC3030] w-3' : 'bg-dhaba-dark/20'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow Button */}
            <button 
              onClick={() => setActiveHighlight((prev) => (prev === highlights.length - 1 ? 0 : prev + 1))}
              className="w-8 h-8 bg-dhaba-dark text-white rounded-full flex items-center justify-center transition-all hover:bg-dhaba-dark/80 active:scale-90 cursor-pointer"
              aria-label="Next highlight"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Desktop Grid (shown on screens >= lg) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 w-full">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-[#FFFDF6] rounded-3xl overflow-hidden border-4 border-dhaba-dark shadow-[8px_8px_0px_#1C1917] group relative transition-all duration-300 lg:min-w-0"
            >
              <div className="h-48 overflow-hidden relative m-2.5 rounded-2xl border-2 border-dashed border-dhaba-dark/30 bg-stone-900">
                <img src={item.img} alt={item.title} width={1000} height={667} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dhaba-red/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="absolute top-36 left-8 bg-[#BC3030] p-4 rounded-xl border-3 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] text-white z-10 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="p-8 pt-10 text-left">
                <h3 className="font-display text-2xl mb-3 text-[#B91C1C] font-black uppercase tracking-tight flex items-center gap-2">
                  <span>✦</span> {item.title}
                </h3>
                <p className="text-dhaba-dark/80 text-sm md:text-base font-sans leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

const LoungeSection = () => {
  const [activeFacility, setActiveFacility] = useState(0);
  const facilities = [
    { name: "Gourmet Buffet", icon: <UtensilsCrossed />, desc: "Breakfast, Lunch & Dinner" },
    { name: "Wash & Change", icon: <Bath />, desc: "Fresh up for the journey" },
    { name: "Nap Facility", icon: <Bed />, desc: "Quick rest in luxury" },
    { name: "Business Center", icon: <Briefcase />, desc: "Work on the go" },
    { name: "Private Dining", icon: <ChefHat />, desc: "Exclusive meal space" }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFacility((prev) => (prev + 1) % facilities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [facilities.length]);

  return (
    <section id="lounge" className="py-24 bg-gradient-to-br from-[#B91C1C] via-dhaba-red to-[#991B1B] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Sparkles size={200} />
      </div>
      <div className="absolute inset-0 opacity-10 dhaba-pattern pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left min-w-0">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight leading-[1.1] text-white">
              <span className="block lg:whitespace-nowrap uppercase">FIRST HIGHWAY PITSTOP</span>
              <span className="block lg:whitespace-nowrap uppercase">TO OFFER A <span className="text-dhaba-mustard font-serif italic lowercase">lounge</span></span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-dhaba-mustard text-dhaba-dark px-4 py-1.5 border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] rounded-lg font-display font-black text-xs mb-6 uppercase tracking-wider">
              GT Road First Airport Style Lounge
            </div>
            <p className="text-dhaba-cream/80 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              Experience our premium sanctuary designed for the discerning traveler. A place to rest, work, and dine in absolute luxury.
            </p>

            <div className="mt-12 max-w-3xl mx-auto lg:mx-0">
              {/* Mobile Carousel (shown on screens < lg) */}
              <div className="lg:hidden flex flex-col items-center w-full max-w-xs sm:max-w-sm mx-auto">
                {/* Active Facility Card */}
                <div className="w-full min-w-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFacility}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 rounded-2xl bg-white/5 border-2 border-white/20 flex flex-col items-start text-left relative overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,0.2)] w-full h-[140px] justify-between"
                    >
                      {/* Dashboard indicator LED */}
                      <div className="absolute top-4 right-4 flex items-center select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] shadow-[0_0_8px_#EAB308] animate-blink-amber" />
                      </div>

                      <div className="text-dhaba-mustard mb-3">
                        {React.cloneElement(facilities[activeFacility].icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
                      </div>
                      <div>
                        <h3 className="font-display text-[11px] font-bold uppercase tracking-widest text-white mb-1">
                          {facilities[activeFacility].name}
                        </h3>
                        <p className="text-dhaba-mustard/60 text-[8px] uppercase tracking-wider font-bold">
                          {facilities[activeFacility].desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Row */}
                <div className="flex items-center gap-6 mt-6 justify-center">
                  {/* Left Arrow Button */}
                  <button 
                    onClick={() => setActiveFacility((prev) => (prev === 0 ? facilities.length - 1 : prev - 1))}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/25 active:scale-90 cursor-pointer"
                    aria-label="Previous facility"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex gap-2">
                    {facilities.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveFacility(idx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeFacility === idx ? 'bg-dhaba-mustard w-3' : 'bg-white/20'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Right Arrow Button */}
                  <button 
                    onClick={() => setActiveFacility((prev) => (prev === facilities.length - 1 ? 0 : prev + 1))}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all border border-white/25 active:scale-90 cursor-pointer"
                    aria-label="Next facility"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Desktop Grid (shown on screens >= lg) */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
                {facilities.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border-2 border-white/20 flex flex-col items-start text-left group transition-all hover:bg-white/10 hover:border-dhaba-mustard/40 hover:-translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_rgba(234,179,8,0.25)] relative overflow-hidden"
                  >
                    {/* Dashboard indicator LED */}
                    <div className="absolute top-4 right-4 flex items-center select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 border border-white/25 group-hover:animate-blink-amber group-hover:bg-[#EAB308] group-hover:shadow-[0_0_8px_#EAB308]" />
                    </div>

                    <div className="text-dhaba-mustard mb-4">
                      {React.cloneElement(f.icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
                    </div>
                    <div>
                      <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-1">{f.name}</h3>
                      <p className="text-dhaba-mustard/60 text-[9px] uppercase tracking-wider font-bold">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-4 pb-14 bg-[#FFFDF6] border-4 border-dhaba-dark rounded-3xl shadow-[10px_10px_0px_#1C1917] rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md md:max-w-lg mx-auto">
              <div className="rounded-xl overflow-hidden relative h-[400px] md:h-[460px] border-2 border-dhaba-dark bg-stone-900">
                <img
                  src="/img/Lounge.jpeg"
                  alt="Luxury Lounge Preview"
                  width={1000}
                  height={668}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              </div>
              <p className="font-serif italic text-dhaba-dark text-center text-lg md:text-xl mt-6 select-none leading-none">
                ★ UTTHAM LOUNGE ★
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const JugniFoodGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "JUGNI",
      tag: "DESI TADKA 🔥",
      desc: "Discover the soul of North Indian meat artistry. Jugni is our dedicated sanctuary for non-veg aficionados, serving legendary slow-cooked curries and sizzling charcoal grills & All Time Favourite Parathas.",
      images: [
        "/Gallery/gallery-1.jpeg",
        "/Gallery/gallery-2.jpeg",
        "/Gallery/gallery-3.jpeg",
      ]
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[slideIndex];

  return (
    <section className="relative py-24 md:py-40 overflow-visible">
      {/* Tilted Background Layer */}
      <div 
        className="absolute inset-x-0 top-0 -bottom-16 -skew-y-2 origin-left z-0"
        style={{ backgroundColor: "#EAB308" }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Circular Overlapping Images with Slide Transition */}
          <div className="relative order-2 lg:order-1 h-[450px] md:h-[600px] flex items-center justify-center min-w-0">
            <div className="relative w-full max-w-[550px] aspect-square scale-90 md:scale-100">
              {/* Circle 1 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full overflow-hidden border-8 border-dhaba-mustard outline outline-4 outline-dhaba-dark z-10 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${slideIndex}-img0`}
                    src={activeSlide.images[0]}
                    alt={`${activeSlide.title} food item 1`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {/* Circle 2 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] aspect-square rounded-full overflow-hidden border-8 border-dhaba-mustard outline outline-4 outline-dhaba-dark z-20 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${slideIndex}-img1`}
                    src={activeSlide.images[1]}
                    alt={`${activeSlide.title} food item 2`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: -10 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {/* Circle 3 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full overflow-hidden border-8 border-dhaba-mustard outline outline-4 outline-dhaba-dark z-30 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${slideIndex}-img2`}
                    src={activeSlide.images[2]}
                    alt={`${activeSlide.title} food item 3`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 min-w-0 min-h-[350px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                  <h2 className="font-display text-4xl md:text-6xl text-dhaba-dark uppercase tracking-tight flex items-center">
                    {activeSlide.title === "JUGNI" ? (
                      <img src="/resturents icons/jugni.png" alt="Jugni Indian Diner Logo" className="h-20 md:h-24 object-contain drop-shadow-[2px_2px_0px_#1C1917] -ml-2" />
                    ) : (
                      <>DHABA <span className="text-dhaba-red">SOUL</span></>
                    )}
                  </h2>
                  <span className="bg-dhaba-mustard text-dhaba-dark border-2 border-dhaba-dark px-3 py-1 rounded font-display font-black text-xs tracking-wider uppercase rotate-[4deg] shadow-[2px_2px_0px_#1C1917] select-none leading-none">
                    {activeSlide.tag}
                  </span>
                </div>
                <p className="text-dhaba-dark/80 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {activeSlide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slider Tabs / Quick Switch */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              <button
                onClick={() => setSlideIndex(0)}
                className={`px-5 py-2.5 rounded-xl border-3 border-dhaba-dark font-display font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                  slideIndex === 0 
                    ? "bg-[#B91C1C] text-white shadow-[3px_3px_0px_#1C1917]" 
                    : "bg-white text-dhaba-dark hover:bg-stone-50 shadow-[1px_1px_0px_#1C1917]"
                }`}
              >
                JUGNI SPECIALS
              </button>
            </div>

            {/* Slider Controls */}
            {slides.length > 1 && (
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                <button
                  onClick={() => setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-12 h-12 rounded-xl bg-white border-3 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all text-dhaba-dark flex items-center justify-center"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-3.5 rounded-full border-2 border-dhaba-dark transition-all duration-300 ${
                        slideIndex === idx ? "w-8 bg-[#B91C1C] shadow-[1px_1px_0px_#1C1917]" : "w-3.5 bg-white"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setSlideIndex((prev) => (prev + 1) % slides.length)}
                  className="w-12 h-12 rounded-xl bg-white border-3 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all text-dhaba-dark flex items-center justify-center"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = Array.from({ length: 15 }, (_, i) => `/Gallery/gallery-${i + 1}.jpeg`);
  
  const row1 = images.slice(0, 8);
  const row2 = images.slice(8, 15);

  const GalleryImage = ({ src }: { src: string }) => (
    <div className="relative w-[280px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden border-4 border-dhaba-dark shadow-[6px_6px_0px_#1C1917] group flex-shrink-0 bg-stone-900 cursor-pointer">
      <img 
        src={src} 
        alt="Highway Haven Gallery" 
        loading="lazy" 
        decoding="async" 
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <span className="bg-dhaba-red text-white px-3 py-1 rounded font-display font-black text-[10px] sm:text-xs tracking-widest uppercase border-2 border-dhaba-dark shadow-[2px_2px_0px_#1C1917]">
          HIGHWAY HAVEN
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-dhaba-mustard relative overflow-hidden border-t-4 border-dhaba-dark">
      <div className="dhaba-pattern absolute inset-0 opacity-10"></div>

      <div className="w-full relative z-10">
        <div className="text-center mb-16 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <span className="font-serif italic text-dhaba-red text-2xl">Capture The Moments</span>
          <h2 className="font-display text-5xl md:text-7xl text-dhaba-dark mt-2 tracking-tight uppercase">OUR GALLERY</h2>
          <div className="w-48 h-3.5 hazard-strip mx-auto mt-6 rounded border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917]" />
        </div>

        <div className="flex flex-col gap-8 pb-10">
          {/* Row 1 */}
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -3200] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-6 px-3 hover:[animation-play-state:paused]"
            >
              {[...row1, ...row1, ...row1].map((src, idx) => (
                <GalleryImage key={`r1-${idx}`} src={src} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [-3200, 0] }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-6 px-3 hover:[animation-play-state:paused]"
            >
              {[...row2, ...row2, ...row2].map((src, idx) => (
                <GalleryImage key={`r2-${idx}`} src={src} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GroupBookings = () => {
  return (
    <section id="groups" className="py-24 md:py-32 bg-dhaba-red text-white relative overflow-hidden border-y-4 border-dhaba-dark">
      {/* Texture & Glow */}
      <div className="absolute inset-0 opacity-10 dhaba-pattern pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl">
            <div className="mb-10">
              <span className="font-serif italic text-dhaba-mustard text-xl md:text-2xl block mb-4 underline decoration-dhaba-mustard decoration-2 underline-offset-8 w-fit">Unforgettable Celebrations</span>
              <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none text-white">GROUP BOOKINGS</h2>
            </div>

            <p className="text-lg md:text-2xl text-dhaba-cream/80 mb-12 leading-relaxed font-medium">
              Whether it's a Milestone Birthday, an exclusive Kitty Party, or a Corporate stopover, we offer a sanctuary of privacy and hospitality tailored for your group.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-12 mb-16">
              {[
                { name: "Birthdays & Kitty Parties", icon: <Sparkles size={18} /> },
                { name: "Dedicated Seating Areas", icon: <MapPin size={18} /> },
                { name: "Customized Group Menus", icon: <UtensilsCrossed size={18} /> },
                { name: "Priority Service", icon: <Zap size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 sm:gap-4 group cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-dhaba-mustard text-dhaba-dark flex items-center justify-center border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] group-hover:bg-[#FFFBEB] transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-display text-xs sm:text-base md:text-xl uppercase tracking-wider text-white font-bold group-hover:text-dhaba-mustard transition-colors flex items-center gap-1.5 select-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-dhaba-mustard">👉</span>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full md:w-fit bg-[#FFFBEB] text-[#BC3030] px-12 py-5 border-3 border-dhaba-dark shadow-[6px_6px_0px_#1C1917] hover:shadow-[2px_2px_0px_#1C1917] hover:translate-x-[4px] hover:translate-y-[4px] active:scale-95 transition-all font-display font-black text-xl md:text-2xl hover:bg-dhaba-mustard hover:text-dhaba-dark flex items-center justify-center gap-6 uppercase tracking-[0.2em] group">
              ENQUIRE NOW <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Immersive Images */}
          <div className="lg:w-1/2 relative max-w-3xl">
            <div className="relative z-10 space-y-8">
              {/* Polaroid 1 */}
              <div className="relative p-3.5 pb-10 bg-[#FFFDF6] border-4 border-dhaba-dark shadow-[10px_10px_0px_rgba(0,0,0,0.35)] rounded-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 md:w-[580px] text-dhaba-dark">
                <div className="rounded-lg overflow-hidden border-2 border-dhaba-dark aspect-video bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Group Event"
                    width={1200}
                    height={801}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-serif italic text-dhaba-dark text-center text-xs md:text-sm mt-4 select-none leading-none">
                  ★ Kitty Parties & Celebrations ★
                </p>
              </div>

              {/* Polaroid 2 */}
              <div className="relative p-3.5 pb-10 bg-[#FFFDF6] border-4 border-dhaba-dark shadow-[10px_10px_0px_rgba(0,0,0,0.35)] rounded-2xl transform -rotate-1 translate-x-12 -translate-y-12 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-700 md:w-[580px] hidden md:block text-dhaba-dark">
                <div className="rounded-lg overflow-hidden border-2 border-dhaba-dark aspect-video bg-stone-900">
                  <img
                    src="/img/food3.jpeg"
                    className="w-full h-full object-cover"
                    alt="Family Gathering"
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-serif italic text-dhaba-dark text-center text-xs md:text-sm mt-4 select-none leading-none">
                  ★ Family Milestones & Corporate Stopovers ★
                </p>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -inset-20 bg-dhaba-mustard/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Brand {
  name: string;
  logo: string;
  subtitle: string;
}

interface BrandCardProps {
  brand: Brand;
  key?: React.Key;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse tilt effect calculation - reduced values for less wobbliness
  const mouseRotateX = useTransform(y, [-150, 150], [12, -12]);
  const mouseRotateY = useTransform(x, [-150, 150], [-12, 12]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(mouseRotateX, springConfig);
  const springRotateY = useSpring(mouseRotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Set values relative to center of the card
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      className="relative w-full aspect-[4/5] bg-dhaba-dark rounded-[30px] overflow-hidden group cursor-pointer border-4 border-dhaba-dark transition-all duration-300 shadow-[6px_6px_0px_#1C1917] hover:shadow-[10px_10px_0px_#1C1917] hover:-translate-y-1 hover:-translate-x-1 flex-shrink-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#F8FAFC]">
        <motion.img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          className="w-[65%] h-[65%] object-contain opacity-100 group-hover:scale-110 transition-all duration-700 -mt-8 drop-shadow-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dhaba-dark via-dhaba-dark/40 to-transparent pointer-events-none" />
      </div>

      {/* Retro Inner Keyline Border */}
      <div className="absolute inset-3 border-2 border-white/0 group-hover:border-dhaba-mustard/45 rounded-2xl pointer-events-none transition-colors duration-300 z-10" />

      {/* Pitstop Choice Label Stamp */}
      <div className="absolute top-4 left-4 bg-dhaba-mustard text-dhaba-dark px-2 py-0.5 rounded border border-dhaba-dark font-display font-black text-[8px] tracking-wider uppercase rotate-[-3deg] shadow z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
        NH-1 FAVORITE
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end pointer-events-none text-left z-20">
        <motion.div
          className="transition-transform duration-500"
        >
          <div
            className="opacity-100 mt-2 transition-all duration-500"
          >
            <p className="font-sans text-white/70 text-xs sm:text-sm leading-tight max-w-[90%] font-bold">
              {brand.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};


const Brands = () => {
  const brands = [
    {
      name: "Blue Tokai Coffee",
      logo: "/Blue tokai HHd6.png",
      subtitle: "Freshly roasted specialty coffee"
    },
    {
      name: "Chaayos",
      logo: "/Chaayos HHd4.png",
      subtitle: "Experiments with Chai."
    },
    {
      name: "Naivedyam",
      logo: "/Naivedyam HHd5.png",
      subtitle: "Authentic South Indian dining."
    },
    {
      name: "Guardian Pharmacy",
      logo: "/gUARDIAN PHARMA d1.png",
      subtitle: "Your trusted wellness partner."
    },
    {
      name: "Chokhi Dhani",
      logo: "/Chokhi dhani HHd2.png",
      subtitle: "Rajasthani cultural dining."
    },
    {
      name: "Uttham Lounge",
      logo: "/resturents icons/uthham.png",
      subtitle: "Supreme Indian flavors and sweets."
    },
    {
      name: "Jugni",
      logo: "/resturents icons/jugni.png",
      subtitle: "North Indian meat artistry."
    },
    {
      name: "Three Sixty Lux",
      logo: "/three sixty HHd3.png",
      subtitle: "Luxury lounge and bar."
    }
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#a41c1c" }}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif italic text-dhaba-mustard text-2xl">Premium Amenities</span>
          <h2 className="font-display text-4xl md:text-7xl text-white mt-4 tracking-tight leading-none uppercase">WORLD-CLASS BRANDS</h2>
          <div className="w-48 h-3.5 hazard-strip mx-auto mt-8 rounded border border-white/20 shadow-md" />
        </div>


        {/* Mobile View: Dual Row Auto Marquee */}
        <div className="md:hidden -mx-4 overflow-hidden flex flex-col gap-6 py-10">
          {/* Row 1: Left to Right */}
          <motion.div
            animate={{ x: [-1400, 0] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 px-4"
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={`row1-${brand.name}-${i}`} className="w-[200px] flex-shrink-0">
                <BrandCard brand={brand} />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Right to Left */}
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 px-4"
          >
            {[...[...brands].reverse(), ...brands].map((brand, i) => (
              <div key={`row2-${brand.name}-${i}`} className="w-[200px] flex-shrink-0">
                <BrandCard brand={brand} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Flexbox (Centered) */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 lg:gap-8">
          {brands.map((brand, i) => (
            <div key={brand.name} className="w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)] max-w-[320px]">
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="bg-dhaba-mustard pt-16 pb-12 md:py-24 text-dhaba-dark overflow-hidden border-t-4 md:border-y-4 border-dhaba-dark">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-24 pb-4 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 md:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-[45%] lg:shrink-0 mb-12 lg:mb-0">
            <div className="mb-10 md:mb-12">
              <h2 className="font-display text-4xl md:text-8xl tracking-tight uppercase leading-none text-dhaba-dark">
                GET IN <span className="text-dhaba-red">TOUCH</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 mb-12 md:mb-16">
              <div className="postage-stamp-card p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:scale-[1.03] transition-transform w-full">
                {/* Rotated postal postmark stamp */}
                <div className="absolute top-2 right-2 border-2 border-dashed border-[#B91C1C]/80 text-[#B91C1C]/80 px-2 py-0.5 rounded-full font-mono text-[7px] tracking-widest uppercase rotate-[20deg] select-none pointer-events-none leading-none">
                  GANAUR G.P.O.
                </div>
                <h3 className="font-display text-[10px] md:text-xs tracking-[0.2em] text-[#B91C1C] uppercase mb-3 font-black">Location</h3>
                <p className="text-sm md:text-xl font-black leading-tight text-dhaba-dark">64th Milestone, Ganaur,<br /> Sonipat, Haryana</p>
              </div>

              <div className="postage-stamp-card p-4 sm:p-5 rounded-2xl relative overflow-hidden group hover:scale-[1.03] transition-transform w-full">
                {/* Rotated postal postmark stamp */}
                <div className="absolute top-2 right-2 border-2 border-dashed border-[#B91C1C]/80 text-[#B91C1C]/80 px-2 py-0.5 rounded-full font-mono text-[7px] tracking-widest uppercase rotate-[-15deg] select-none pointer-events-none leading-none">
                  DELHI DEL.
                </div>
                <h3 className="font-display text-[10px] md:text-xs tracking-[0.2em] text-[#B91C1C] uppercase mb-3 font-black">Connect</h3>
                <div className="text-sm md:text-xl font-black leading-tight text-dhaba-dark flex flex-col gap-1">
                  <span>+91 98839 52115</span>
                  <span className="text-[9px] sm:text-sm md:text-base lg:text-lg break-all select-all font-black text-dhaba-dark leading-normal">info@highwayhaven.in</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 md:gap-6 bg-dhaba-red text-white px-8 md:px-12 py-4 md:py-5 border-3 border-dhaba-dark shadow-[5px_5px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[4px] hover:translate-y-[4px] active:scale-95 transition-all font-display font-black text-lg md:text-2xl hover:bg-dhaba-dark uppercase tracking-[0.2em] group w-full md:w-fit"
            >
              NAVIGATE <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Map Container */}
          <div className="w-full lg:w-[55%] mt-8 lg:mt-0 relative">
            {/* Map Header Sign */}
            <div className="absolute -top-3.5 left-6 md:left-10 bg-dhaba-mustard text-dhaba-dark px-4 py-1.5 border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] rounded font-display font-black text-[10px] tracking-widest uppercase z-20 flex items-center gap-1.5 select-none leading-none">
              <span className="w-1 h-1 bg-[#1C1917] rounded-full" />
              NH-1 ROUTE FINDER
              <span className="w-1 h-1 bg-[#1C1917] rounded-full" />
            </div>

            <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] border-4 border-dhaba-dark shadow-[6px_6px_0px_#1C1917] relative rounded-2xl overflow-hidden bg-stone-900">

              <iframe
                title="Google Maps location of Highway Haven Ganaur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.284301299278!2d77.0342687!3d29.156293299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc900750c276f%3A0x3848e514f5da0fc4!2sHIGHWAY+HAVEN!5e0!3m2!1sen!2sin!4v1775284336139!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale saturate-50 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MilestoneIcon = () => (
  <div className="relative w-16 h-24 border-3 border-dhaba-dark rounded-t-full bg-white overflow-hidden shadow-[4px_4px_0px_#1C1917] flex flex-col shrink-0 select-none">
    {/* Yellow top dome */}
    <div className="bg-[#EAB308] border-b-3 border-dhaba-dark h-10 w-full flex items-center justify-center">
      <span className="font-display font-black text-dhaba-dark text-[10px] tracking-widest">NH 1</span>
    </div>
    {/* White bottom */}
    <div className="flex-grow flex flex-col items-center justify-center px-1 py-1 leading-none text-dhaba-dark bg-white">
      <span className="font-display font-black text-[9px] uppercase tracking-tighter">GANAUR</span>
      <span className="font-display font-black text-lg my-0.5">64</span>
      <span className="font-display font-extrabold text-[8px] uppercase">KM</span>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#BC3030] text-white pt-24 pb-16 relative overflow-hidden border-t-4 border-dhaba-dark">
      {/* Retro Bumper Safety/Hazard Strip Divider */}
      <div className="absolute top-0 left-0 w-full h-[12px] hazard-strip border-b-3 border-dhaba-dark" />
      
      {/* Decorative pulse for red background */}
      <div className="absolute top-[12px] left-0 w-full h-1 bg-white/10" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2 min-w-0">
            
            {/* Header section with Logo and Milestone and Taillights */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center hover:scale-105 transition-transform duration-300 relative group cursor-pointer bg-[#FFFBEB]/10 p-2.5 rounded-2xl border border-white/15">
                  <img src="/haven 12.png" alt="Highway Haven Logo" width={1080} height={563} loading="lazy" decoding="async" className="h-16 w-auto object-contain" />
                </div>
                <MilestoneIcon />
              </div>
              
              {/* Retro Truck Taillight Cluster */}
              <div className="flex gap-2.5 bg-[#1C1917] p-2.5 rounded-xl border-3 border-dhaba-dark shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] select-none mr-2 scale-90 sm:scale-100">
                <span className="w-4.5 h-4.5 rounded-full bg-dhaba-red shadow-[0_0_12px_#B91C1C,inset_0_2px_2px_rgba(255,255,255,0.4)] animate-pulse" title="Brake Light" />
                <span className="w-4.5 h-4.5 rounded-full bg-dhaba-mustard shadow-[0_0_12px_#EAB308,inset_0_2px_2px_rgba(255,255,255,0.4)] animate-pulse" style={{ animationDelay: '0.3s' }} title="Turn Signal" />
                <span className="w-4.5 h-4.5 rounded-full bg-stone-300 shadow-[0_0_5px_#D6D3D1,inset_0_2px_2px_rgba(255,255,255,0.4)]" title="Reverse Light" />
              </div>
            </div>

            <p className="text-white/85 max-w-md text-base leading-relaxed mb-8 font-medium">
              Redefining the Indian highway experience. We provide a premium sanctuary for travelers, blending traditional hospitality with modern luxury.
            </p>
            
            {/* Social media links as Neo-Brutalist Yellow tiles */}
            <div className="flex gap-4">
              {[
                { name: "Star", icon: <Star size={20} className="fill-current" /> },
                { name: "Map", icon: <MapPin size={20} /> },
                { name: "Call", icon: <Phone size={20} /> },
                { name: "Clock", icon: <Clock size={20} /> }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href="#highlights" 
                  className="w-11 h-11 bg-dhaba-mustard text-dhaba-dark border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] hover:shadow-[1px_1px_0px_#1C1917] hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95 transition-all rounded-lg flex items-center justify-center"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Retro Bumper Stickers (Truck Art Style Decals) */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="bg-[#0F766E] text-white border-2 border-dhaba-dark px-3 py-1.5 shadow-[2px_2px_0px_#1C1917] rounded-md rotate-[-1.5deg] font-display font-black text-[9px] tracking-widest uppercase select-none">
                USE DIPPER AT NIGHT 🌙
              </div>
              <div className="bg-dhaba-mustard text-dhaba-dark border-2 border-dhaba-dark px-3 py-1.5 shadow-[2px_2px_0px_#1C1917] rounded-md rotate-[1.2deg] font-display font-black text-[9px] tracking-widest uppercase select-none">
                HORN OK PLEASE 🎺
              </div>
              <div className="bg-[#1C1917] text-[#FFFBEB] border-2 border-[#EAB308] px-3 py-1.5 shadow-[2px_2px_0px_rgba(234,179,8,0.3)] rounded-md rotate-[-0.8deg] font-display font-black text-[9px] tracking-wider uppercase flex items-center gap-1 select-none">
                🧿 Buri Nazar Wale...
              </div>
              <div className="bg-[#B91C1C] text-white border-2 border-dhaba-dark px-3 py-1.5 shadow-[2px_2px_0px_#1C1917] rounded-md rotate-[2deg] font-display font-black text-[9px] tracking-widest uppercase select-none">
                SPEED 40 KM/H 🏎️
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="bg-[#EAB308] text-dhaba-dark px-4 py-1.5 border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] rounded-lg inline-block font-display font-black text-xs tracking-wider uppercase mb-8 select-none">
              QUICK LINKS
            </div>
            <ul className="space-y-4 font-sans font-bold text-white text-base">
              <li>
                <a href="#highlights" className="hover:text-dhaba-mustard transition-colors flex items-center gap-1.5 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-dhaba-mustard">→</span> Highlights
                </a>
              </li>
              <li>
                <a href="#lounge" className="hover:text-dhaba-mustard transition-colors flex items-center gap-1.5 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-dhaba-mustard">→</span> Lounge
                </a>
              </li>
              <li>
                <a href="#groups" className="hover:text-dhaba-mustard transition-colors flex items-center gap-1.5 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-dhaba-mustard">→</span> Group Bookings
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-dhaba-mustard transition-colors flex items-center gap-1.5 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-dhaba-mustard">→</span> Location
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="bg-[#EAB308] text-dhaba-dark px-4 py-1.5 border-2 border-dhaba-dark shadow-[3px_3px_0px_#1C1917] rounded-lg inline-block font-display font-black text-xs tracking-wider uppercase mb-8 select-none">
              CONNECT
            </div>
            <p className="text-white/85 mb-6 text-sm font-medium leading-relaxed">Stay updated with our latest facilities and offers.</p>
            <div className="flex flex-col gap-4">
              <a href="tel:+919883952115" className="flex items-center gap-3 text-base hover:text-dhaba-mustard transition-colors font-bold text-white/90 border border-white/10 hover:border-dhaba-mustard hover:bg-white/5 px-4 py-2.5 rounded-xl transition-all">
                <Phone size={18} className="text-dhaba-mustard" /> +91 98839 52115
              </a>
              <a href="mailto:info@highwayhaven.co.in" className="flex items-center gap-3 text-base hover:text-dhaba-mustard transition-colors font-bold text-white/90 border border-white/10 hover:border-dhaba-mustard hover:bg-white/5 px-4 py-2.5 rounded-xl transition-all">
                <Briefcase size={18} className="text-dhaba-mustard shrink-0" /> <span className="break-all">info@highwayhaven.co.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/90 font-sans font-semibold text-xs tracking-wide">
          <p>© 2026 Highway Haven. NH-1's Premium Stopover. All rights reserved.</p>
          <p className="hover:text-white transition-colors duration-300">
            Mindfully Made By{" "}
            <a 
              href="https://scraft.studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FEF08A] hover:underline font-black"
            >
              Scraft
            </a>
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-dhaba-mustard transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dhaba-mustard transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-dhaba-red selection:text-white overflow-x-hidden w-full max-w-[100vw]">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <RoadDivider />
        <LoungeSection />
        <RoadDivider />
        <Highlights />
        <RoadDivider />
        <Brands />
        <JugniFoodGallery />
        <ReviewsMarquee />
        <GallerySection />
        <RoadDivider />
        <GroupBookings />
        <RoadDivider />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
