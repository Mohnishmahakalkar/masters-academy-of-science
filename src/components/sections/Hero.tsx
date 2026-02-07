import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useContent } from "../../data/contentStore";

const Hero = () => {
  const { content } = useContent();
  const hero = content.hero;
  const highlightIndex = hero.headline.indexOf(hero.highlight);
  const hasHighlight = hero.highlight && highlightIndex >= 0;
  const headlineStart = hasHighlight ? hero.headline.slice(0, highlightIndex) : hero.headline;
  const headlineEnd = hasHighlight
    ? hero.headline.slice(highlightIndex + hero.highlight.length)
    : "";

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#f2a019]/20 blur-3xl" />
        <span className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#2cc2b3]/20 blur-[120px]" />
        {/* <span className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#f5e1b8]/30 blur-3xl" /> */}
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70"
          >
            {hero.badge}
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2a019]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl xl:text-6xl"
          >
            {headlineStart}
            {hasHighlight ? (
              <span className="text-[#f2a019]">{hero.highlight}</span>
            ) : null}
            {headlineEnd}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-base text-white/75 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#f2a019] px-6 py-3 text-base font-semibold text-[#0b1d2a] transition hover:bg-[#ffc35d]"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:text-white"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
          <motion.div
            className="mt-10 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center lg:col-span-5 lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-sm overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(3,12,20,0.45)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,_rgba(242,160,25,0.28)_0%,_rgba(11,29,42,0)_55%)]" />
            <div className="relative z-10 h-64 w-full">
              <HeroCanvas />
            </div>
            <div className="relative z-10 mt-6 flex items-center justify-between text-sm text-white/70">
              <span>{hero.card.title}</span>
              <span className="text-white">{hero.card.time}</span>
            </div>
            <div className="relative z-10 mt-2 flex items-center justify-between text-xs text-white/50">
              <span>{hero.card.subtitleLeft}</span>
              <span>{hero.card.subtitleRight}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <pointLight position={[-3, -2, 2]} intensity={0.9} color="#f2a019" />
      <mesh position={[0, 0, -0.08]}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshStandardMaterial color="#7ce8ff" transparent opacity={0.08} />
      </mesh>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <Globe />
      </Float>
    </Canvas>
  );
};

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const earthMap = useTexture("/earth/sl_070722_51460_20.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.25;
      globeRef.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    }
  });

  return (
    <mesh ref={globeRef} scale={1.4}>
      <sphereGeometry args={[0.95, 64, 64]} />
      <meshStandardMaterial map={earthMap} roughness={0.7} metalness={0.0} />
    </mesh>
  );
};
