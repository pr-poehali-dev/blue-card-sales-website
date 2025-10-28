import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const BlueCard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passportNumber: '',
    dateOfBirth: '',
    address: '',
    purpose: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="fullName">Полное имя *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="passportNumber">Номер паспорта *</Label>
              <Input
                id="passportNumber"
                value={formData.passportNumber}
                onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                placeholder="1234 567890"
              />
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Дата рождения *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Адрес регистрации *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="г. Москва, ул. Ленина, д. 1, кв. 1"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="purpose">Цель получения синей карты *</Label>
              <Textarea
                id="purpose"
                value={formData.purpose}
                onChange={(e) => handleInputChange('purpose', e.target.value)}
                placeholder="Опишите цель получения синей карты..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="additionalInfo">Дополнительная информация</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Укажите дополнительные сведения, если необходимо"
                rows={4}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={48} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Проверьте ваши данные</h3>
              <p className="text-muted-foreground">Убедитесь, что вся информация указана верно</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6 space-y-3 text-sm">
              <div><strong>Имя:</strong> {formData.fullName}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Телефон:</strong> {formData.phone}</div>
              <div><strong>Паспорт:</strong> {formData.passportNumber}</div>
              <div><strong>Дата рождения:</strong> {formData.dateOfBirth}</div>
              <div><strong>Адрес:</strong> {formData.address}</div>
              <div><strong>Цель:</strong> {formData.purpose}</div>
              {formData.additionalInfo && <div><strong>Доп. информация:</strong> {formData.additionalInfo}</div>}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="ArrowLeft" size={20} />
              <span className="font-semibold">Назад на главную</span>
            </button>
            <h1 className="text-2xl font-bold text-primary">Синяя карта и страхование</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 text-primary">Оформление синей карты</h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму в 4 простых шага
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center relative">
                <div className="absolute top-5 left-0 right-0 h-1 bg-border -z-10">
                  <div 
                    className="h-full bg-secondary transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                  />
                </div>
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300',
                        step <= currentStep
                          ? 'bg-secondary text-white shadow-lg scale-110'
                          : 'bg-white border-2 border-border text-muted-foreground'
                      )}
                    >
                      {step < currentStep ? (
                        <Icon name="Check" size={20} />
                      ) : (
                        step
                      )}
                    </div>
                    <span className="text-xs mt-2 text-center font-medium">
                      {step === 1 && 'Контакты'}
                      {step === 2 && 'Документы'}
                      {step === 3 && 'Информация'}
                      {step === 4 && 'Проверка'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Шаг {currentStep} из 4
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && 'Введите ваши контактные данные'}
                  {currentStep === 2 && 'Укажите паспортные данные'}
                  {currentStep === 3 && 'Расскажите о цели получения карты'}
                  {currentStep === 4 && 'Проверьте введенную информацию'}
                </CardDescription>
              </CardHeader>
              <CardContent className="min-h-[400px]">
                {renderStep()}

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <Icon name="ChevronLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  {currentStep < 4 ? (
                    <Button onClick={nextStep} className="bg-secondary hover:bg-secondary/90">
                      Далее
                      <Icon name="ChevronRight" size={20} className="ml-2" />
                    </Button>
                  ) : (
                    <Button className="bg-secondary hover:bg-secondary/90">
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">© 2024 Синяя карта и страхование</p>
          <p className="text-sm opacity-75">Ваш надежный партнер в оформлении документов</p>
        </div>
      </footer>
    </div>
  );
};

export default BlueCard;
