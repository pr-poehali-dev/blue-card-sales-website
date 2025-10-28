import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50
  };

  const insurancePosts = [
    {
      title: 'Медицинское страхование для путешествий',
      description: 'Полное покрытие медицинских расходов за границей. Включает экстренную помощь, госпитализацию и репатриацию.',
      icon: 'Heart',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Страхование от несчастных случаев',
      description: 'Защита вас и вашей семьи от непредвиденных обстоятельств. Выплаты при травмах и временной нетрудоспособности.',
      icon: 'Shield',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Страхование имущества',
      description: 'Комплексная защита вашего имущества во время пребывания за границей. Покрытие от кражи, утери и повреждений.',
      icon: 'Home',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="absolute top-32 right-1/4 w-32 h-32 border-4 border-white/30 rotate-45" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border-4 border-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/10" />
          
          <svg className="absolute top-1/4 left-1/4 w-40 h-40" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3"/>
          </svg>
          
          <svg className="absolute bottom-1/3 right-1/4 w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3"/>
          </svg>
          
          <div className="absolute top-2/3 left-1/4 w-20 h-20 border-4 border-white/25 rotate-12 rounded-lg" />
          
          <svg className="absolute bottom-1/4 right-1/3 w-36 h-36" viewBox="0 0 100 100">
            <path d="M 50 10 L 90 50 L 50 90 L 10 50 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3"/>
          </svg>
          
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rotate-45" />
          
          <svg className="absolute bottom-1/2 left-1/2 w-28 h-28" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" transform="rotate(30 50 50)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Синяя карта<br />и страхование
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
              Ваш надежный партнер в оформлении документов и защите интересов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => navigate('/blue-card')}
              >
                Оформить синюю карту
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => document.getElementById('insurance')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать о страховании
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary-foreground/60" />
        </div>
      </section>

      <section id="insurance" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">Наши услуги страхования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексная защита для вас и ваших близких
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {insurancePosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={post.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {post.description}
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 h-auto text-secondary hover:text-secondary/80">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2024 Синяя карта и страхование</p>
          <p className="text-sm opacity-75">Ваш надежный партнер в оформлении документов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
