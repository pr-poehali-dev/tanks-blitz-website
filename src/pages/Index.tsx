import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const tankData = [
    {
      id: 1,
      name: 'Maus',
      type: 'Heavy Tank',
      tier: 'X',
      armor: 200,
      speed: 20,
      firepower: 95,
      image: '/img/444481d4-d8d0-4099-abe6-472b225afef6.jpg',
      description: 'Сверхтяжёлый танк с максимальной бронезащитой'
    },
    {
      id: 2,
      name: 'Leopard 1',
      type: 'Medium Tank',
      tier: 'X',
      armor: 70,
      speed: 65,
      firepower: 85,
      image: '/img/444481d4-d8d0-4099-abe6-472b225afef6.jpg',
      description: 'Быстрый средний танк с отличной точностью'
    },
    {
      id: 3,
      name: 'T-54',
      type: 'Medium Tank',
      tier: 'IX',
      armor: 120,
      speed: 50,
      firepower: 80,
      image: '/img/444481d4-d8d0-4099-abe6-472b225afef6.jpg',
      description: 'Универсальный боевой танк'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Турнир "Стальные Баталии"',
      date: '25-30 сентября',
      type: 'Киберспорт',
      reward: '100,000 золота'
    },
    {
      id: 2,
      title: 'Акция x3 опыта',
      date: '22-24 сентября',
      type: 'Акция',
      reward: 'Тройной опыт'
    },
    {
      id: 3,
      title: 'Премиум танки со скидкой',
      date: '20-27 сентября',
      type: 'Акция',
      reward: 'Скидка 50%'
    }
  ];

  const stats = [
    { label: 'Активных игроков', value: '2.5M+', icon: 'Users' },
    { label: 'Танков в игре', value: '400+', icon: 'Shield' },
    { label: 'Киберспорт турниров', value: '50+', icon: 'Trophy' },
    { label: 'Стран участвуют', value: '120+', icon: 'Globe' }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-primary/20 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">TANKS BLITZ</div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'tanks', label: 'Танки', icon: 'Shield' },
              { id: 'events', label: 'События', icon: 'Calendar' },
              { id: 'news', label: 'Новости', icon: 'Newspaper' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <Button className="neon-glow bg-gradient-to-r from-primary to-secondary text-background font-semibold">
            Играть сейчас
          </Button>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/img/d0006212-76f3-4821-814f-1714d6cd78aa.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">
          TANKS BLITZ
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Киберспортивные танковые баталии нового поколения
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="neon-glow bg-gradient-to-r from-primary to-accent text-background font-semibold">
            <Icon name="Play" className="mr-2" size={20} />
            Начать играть
          </Button>
          <Button size="lg" variant="outline" className="cyber-border text-primary">
            <Icon name="Download" className="mr-2" size={20} />
            Скачать игру
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="mb-2">
                <Icon name={stat.icon} size={32} className="mx-auto text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TanksSection = () => (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Каталог танков
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tankData.map((tank) => (
            <Card key={tank.id} className="cyber-border hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={tank.image} 
                  alt={tank.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  Tier {tank.tier}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gradient">{tank.name}</CardTitle>
                    <CardDescription>{tank.type}</CardDescription>
                  </div>
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{tank.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Броня</span>
                      <span className="text-primary">{tank.armor}mm</span>
                    </div>
                    <Progress value={tank.armor / 2} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Скорость</span>
                      <span className="text-accent">{tank.speed} км/ч</span>
                    </div>
                    <Progress value={tank.speed} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Огневая мощь</span>
                      <span className="text-secondary">{tank.firepower}%</span>
                    </div>
                    <Progress value={tank.firepower} className="h-2" />
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-background">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const EventsSection = () => (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Календарь событий
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="cyber-border hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-gradient">{event.title}</CardTitle>
                  <Badge variant={event.type === 'Киберспорт' ? 'default' : 'secondary'}>
                    {event.type}
                  </Badge>
                </div>
                <CardDescription className="flex items-center text-primary">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  {event.date}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-accent">
                    <Icon name="Gift" className="mr-2" size={16} />
                    <span className="text-sm">{event.reward}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-background">
                    Участвовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const NewsSection = () => (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Последние новости
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="cyber-border">
            <div className="relative">
              <img 
                src="/img/46e56c0f-0ae0-4543-8219-e6dd31bf5a31.jpg" 
                alt="Турнир"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gradient">Новый сезон киберспорта стартует!</CardTitle>
              <CardDescription className="flex items-center">
                <Icon name="Clock" className="mr-2" size={16} />
                22 сентября 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Грандиозный турнир с призовым фондом 1 миллион рублей. 
                Лучшие команды сразятся за звание чемпионов.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary text-background">
                Читать далее
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="cyber-border p-4">
              <div className="flex items-start space-x-4">
                <Icon name="Zap" className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gradient">Обновление 8.5</h3>
                  <p className="text-sm text-muted-foreground">Новые танки и улучшенная графика</p>
                  <span className="text-xs text-primary">21 сентября</span>
                </div>
              </div>
            </Card>

            <Card className="cyber-border p-4">
              <div className="flex items-start space-x-4">
                <Icon name="Trophy" className="text-secondary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gradient">Результаты турнира</h3>
                  <p className="text-sm text-muted-foreground">Команда "Steel Warriors" побеждает</p>
                  <span className="text-xs text-primary">20 сентября</span>
                </div>
              </div>
            </Card>

            <Card className="cyber-border p-4">
              <div className="flex items-start space-x-4">
                <Icon name="Settings" className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gradient">Баланс изменения</h3>
                  <p className="text-sm text-muted-foreground">Корректировка характеристик танков</p>
                  <span className="text-xs text-primary">19 сентября</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'tanks':
        return <TanksSection />;
      case 'events':
        return <EventsSection />;
      case 'news':
        return <NewsSection />;
      default:
        return (
          <>
            <Hero />
            <TanksSection />
            <EventsSection />
            <NewsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className={activeSection === 'home' ? '' : 'pt-20'}>
        {renderSection()}
      </main>
      
      <footer className="bg-muted/50 border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">TANKS BLITZ</h3>
              <p className="text-muted-foreground text-sm">
                Киберспортивная платформа для танковых сражений
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Скачать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Системные требования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обновления</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Киберспорт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Tanks Blitz. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;