import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const fragrances = [
  {
    id: 1,
    name: 'Лаванда & Ваниль',
    description: 'Успокаивающий аромат французской лаванды с нотами мадагаскарской ванили',
    price: '1 200 ₽',
    image: '/img/a3414b01-f216-4256-92b8-5b0dc52ca0ae.jpg'
  },
  {
    id: 2,
    name: 'Корица & Апельсин',
    description: 'Теплые специи корицы в сочетании со свежестью цитрусовых',
    price: '1 350 ₽',
    image: '/img/6b3683af-61d8-4a76-a358-5e6db5df7012.jpg'
  },
  {
    id: 3,
    name: 'Сандал & Пачули',
    description: 'Глубокий древесный аромат с восточными нотами',
    price: '1 500 ₽',
    image: '/img/a3414b01-f216-4256-92b8-5b0dc52ca0ae.jpg'
  },
  {
    id: 4,
    name: 'Роза & Жасмин',
    description: 'Изысканный цветочный букет для особых моментов',
    price: '1 400 ₽',
    image: '/img/6b3683af-61d8-4a76-a358-5e6db5df7012.jpg'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" size={24} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Candle Workshop</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Ручные свечи<br />
              <span className="text-primary">с душой</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем уникальные ароматические свечи из натурального воска.
              Каждая свеча — это история, рассказанная через аромат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('catalog')}
                className="text-lg px-8"
              >
                Посмотреть каталог
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Каталог ароматов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя нашу коллекцию уникальных ароматов. 
              Каждая свеча создается вручную с особой заботой о деталях.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fragrances.map((fragrance) => (
              <Card key={fragrance.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{fragrance.name}</CardTitle>
                  <CardDescription className="text-sm mb-4 min-h-[3rem]">
                    {fragrance.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {fragrance.price}
                    </Badge>
                    <Button size="sm" className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">О нашей мастерской</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы создаем свечи уже более 5 лет, используя только натуральные материалы 
                  и традиционные техники изготовления. Каждая свеча проходит ручную проверку качества.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Leaf" size={20} className="text-primary" />
                    <span>100% натуральный соевый воск</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <span>Ручная работа с любовью</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Время горения до 50 часов</span>
                  </div>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/img/a3414b01-f216-4256-92b8-5b0dc52ca0ae.jpg"
                  alt="Наша мастерская"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Свяжитесь с нами для индивидуальных заказов или вопросов
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                  <CardDescription>
                    г. Москва<br />
                    ул. Ремесленная, 12
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                  <CardDescription>
                    +7 (495) 123-45-67<br />
                    Ежедневно 10:00-20:00
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <CardDescription>
                    info@candleworkshop.ru<br />
                    orders@candleworkshop.ru
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Flame" size={24} className="text-primary" />
              <span className="text-xl font-bold">Candle Workshop</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 Candle Workshop. Создано с любовью к ароматам.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}