import { useEffect, useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      if (sphere) {
        sphere.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={sphereRef} className="relative w-[500px] h-[500px] transition-transform duration-100">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 opacity-90 blur-xl animate-pulse-slow" />
      
      <div className="absolute inset-0 rounded-full overflow-hidden animate-spin-slow">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
        <div className="absolute top-[10%] left-[10%] w-[80%] h-[10%] bg-white/30 rounded-full blur-md" />
        <div className="absolute top-[25%] left-[15%] w-[70%] h-[8%] bg-white/25 rounded-full blur-lg" />
        <div className="absolute top-[40%] left-[20%] w-[60%] h-[10%] bg-white/30 rounded-full blur-md" />
        <div className="absolute top-[55%] left-[15%] w-[70%] h-[8%] bg-white/20 rounded-full blur-lg" />
        <div className="absolute top-[70%] left-[10%] w-[80%] h-[10%] bg-white/25 rounded-full blur-md" />
      </div>
      
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/30 to-blue-400/20" />
      
      <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-white/40 rounded-full blur-2xl" />
      <div className="absolute bottom-[30%] left-[20%] w-32 h-32 bg-pink-300/30 rounded-full blur-3xl" />
    </div>
  );
};

export default AnimatedSphere;
