import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import EarthGlobe from '@/components/EarthGlobe';

const Index = () => {
  const navigate = useNavigate();

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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground mb-6">
                  AIO — PRODUCT ALPHA
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
                  Синяя карта<br />
                  для новых<br />
                  возможностей
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg leading-relaxed">
                  Оформите синюю карту и получите доступ к качественному страхованию. Мы делаем процесс простым и быстрым.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => navigate('/blue-card')}
                >
                  Начать оформление
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
                  onClick={() => document.getElementById('insurance')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Подробнее
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  <span>Более 10,000 клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  <span>100% безопасность</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center animate-scale-in h-[600px]">
              <EarthGlobe />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary-foreground/60" />
        </div>
      </section>

      <section id="insurance" className="py-24 bg-white">
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
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in bg-gradient-to-br from-white to-gray-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon name={post.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {post.description}
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оформите синюю карту сегодня и получите полный пакет страховых услуг
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl"
            onClick={() => navigate('/blue-card')}
          >
            Оформить сейчас
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Синяя карта</h3>
              <p className="text-gray-400">Ваш надежный партнер в оформлении документов и страхования</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Синяя карта</li>
                <li>Медицинское страхование</li>
                <li>Страхование имущества</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@bluecard.com</li>
                <li>Телефон: +7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Синяя карта и страхование. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;