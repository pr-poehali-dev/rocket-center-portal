import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7bb3c060-7952-44c6-a577-9d7b48da4bd7/files/b633c7b9-c056-4f1c-be67-f7e9ae9ccdd0.jpg";

const BRANCHES = [
  { id: 1, name: "Rocket Center Центр", address: "ул. Ленина, 42", pcs: 48, open: "Круглосуточно" },
  { id: 2, name: "Rocket Center Север", address: "пр. Победы, 18", pcs: 32, open: "Круглосуточно" },
  { id: 3, name: "Rocket Center Юг", address: "ул. Гагарина, 7", pcs: 40, open: "Круглосуточно" },
];

const SERVICES = [
  { icon: "Monitor", title: "Топовые ПК", desc: "RTX 4080, i9-13900K, 32GB RAM — только флагманы" },
  { icon: "Headphones", title: "Pro-периферия", desc: "HyperX, SteelSeries, Razer — почувствуй разницу" },
  { icon: "Wifi", title: "Интернет 1 Гбит", desc: "Никаких лагов. Пинг < 5ms до серверов СНГ" },
  { icon: "Coffee", title: "Бар и снеки", desc: "Энергетики, кофе, бургеры прямо к твоему месту" },
  { icon: "Shield", title: "24/7 техподдержка", desc: "Что-то пошло не так? Мы рядом всегда" },
  { icon: "Users", title: "VIP-комнаты", desc: "Закрытые залы для компаний, геймерских тусовок и LAN-вечеринок. По запросу — VR-станции, Xbox One и PlayStation 5" },
];

const TARIFFS = [
  {
    name: "СТАРТ",
    price: "89",
    unit: "₽/час",
    color: "#00FF88",
    features: ["Стандартный ПК", "GTX 1080 Ti", "Базовая периферия", "Интернет 1 Гбит"],
    popular: false,
  },
  {
    name: "PRO",
    price: "149",
    unit: "₽/час",
    color: "#00D4FF",
    features: ["Игровой ПК", "RTX 3080", "Pro-периферия", "Кресло геймера", "Бесплатный напиток"],
    popular: true,
  },
  {
    name: "ULTRA",
    price: "219",
    unit: "₽/час",
    color: "#BF00FF",
    features: ["ПК мечты", "RTX 4080", "OLED 240Hz", "Razer/HyperX", "Мини-бар", "VIP-зона"],
    popular: false,
  },
];

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#tariffs" },
  { label: "Филиалы", href: "#branches" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const TIMES = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [booking, setBooking] = useState({
    branch: "",
    date: "",
    time: "",
    duration: "2",
    tariff: "PRO",
    name: "",
    phone: "",
  });
  const [bookingDone, setBookingDone] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 4000);
  };

  const getTariffPrice = () => {
    const t = TARIFFS.find(t => t.name === booking.tariff);
    return t ? parseInt(t.price) : 89;
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white font-golos">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#00FF88]/10" style={{ background: 'rgba(5,5,8,0.92)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: '#00FF88', boxShadow: '0 0 20px #00FF8880' }}>
                <Icon name="Rocket" size={16} className="text-[#050508]" />
              </div>
              <span className="font-rajdhani font-bold text-xl tracking-widest uppercase" style={{ color: '#00FF88', textShadow: '0 0 10px #00FF8880' }}>
                ROCKET<span className="text-white"> CENTER</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map(item => (
                <a key={item.href} href={item.href}
                  className="font-rajdhani font-500 uppercase tracking-widest text-sm text-gray-400 hover:text-[#00FF88] transition-colors duration-200">
                  {item.label}
                </a>
              ))}
            </div>

            <a href="#booking" className="hidden md:block px-5 py-2 rounded text-sm btn-solid-neon">
              Забронировать
            </a>

            <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-[#00FF88]/10 py-4 px-4" style={{ background: 'rgba(5,5,8,0.98)' }}>
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className="block py-3 font-rajdhani uppercase tracking-widest text-sm text-gray-400 hover:text-[#00FF88] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center px-5 py-2 rounded btn-solid-neon text-sm">
              Забронировать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Rocket Center" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(0,255,136,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(0,212,255,0.10) 0%, transparent 50%), linear-gradient(to bottom, #050508 0%, transparent 30%, transparent 70%, #050508 100%)'
          }} />
        </div>

        <div className="absolute top-1/4 left-8 w-px h-32 opacity-40" style={{ background: 'linear-gradient(to bottom, transparent, #00FF88, transparent)' }} />
        <div className="absolute bottom-1/4 right-8 w-px h-32 opacity-40" style={{ background: 'linear-gradient(to bottom, transparent, #00D4FF, transparent)' }} />
        <div className="absolute top-24 right-24 w-1 h-1 rounded-full" style={{ background: '#00FF88', boxShadow: '0 0 10px #00FF88' }} />
        <div className="absolute bottom-32 left-24 w-1 h-1 rounded-full" style={{ background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-rajdhani tracking-widest uppercase mb-8"
            style={{ borderColor: 'rgba(0,255,136,0.3)', color: '#00FF88', background: 'rgba(0,255,136,0.05)' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00FF88' }} />
            Онлайн бронирование открыто
          </div>

          <h1 className="font-rajdhani font-bold uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}>
            <span className="text-white">ИГРОВОЙ</span>{" "}
            <span className="text-gradient-green">КЛУБ</span>
            <br />
            <span className="text-white">ROCKET</span>{" "}
            <span style={{ color: '#00FF88', textShadow: '0 0 40px #00FF88, 0 0 80px #00FF8840' }}>CENTER</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Флагманские ПК · Профессиональная периферия · 3 филиала в городе
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="px-8 py-4 rounded text-lg btn-solid-neon">
              Забронировать ПК
            </a>
            <a href="#tariffs" className="px-8 py-4 rounded text-lg btn-neon">
              Смотреть тарифы
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            {[
              { num: "120+", label: "Игровых ПК" },
              { num: "3", label: "Филиала" },
              { num: "24/7", label: "Работаем" },
              { num: "VIP", label: "Комнаты" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-rajdhani font-bold text-2xl md:text-3xl" style={{ color: '#00FF88', textShadow: '0 0 10px #00FF8880' }}>{stat.num}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="font-rajdhani text-xs tracking-widest uppercase">Скролл</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00FF88' }}>// 01</span>
            <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl text-white mt-2 tracking-wide">
              Наши <span className="text-gradient-green">Услуги</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-lg p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,255,136,0.12)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.35)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.12)'}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)' }}>
                  <Icon name={s.icon} size={22} className="text-[#00FF88]" />
                </div>
                <h3 className="font-rajdhani font-bold text-xl uppercase tracking-wide text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 px-4 relative">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 60%)'
        }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00D4FF' }}>// 02</span>
            <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl mt-2 tracking-wide" style={{ color: '#00D4FF', textShadow: '0 0 20px #00D4FF80' }}>
              Тарифы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {TARIFFS.map((t) => (
              <div key={t.name}
                className={`relative rounded-lg p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${t.popular ? 'scale-[1.03]' : ''}`}
                style={{
                  background: 'rgba(10,10,20,0.9)',
                  border: `1px solid ${t.color}${t.popular ? 'AA' : '30'}`,
                  boxShadow: t.popular ? `0 0 30px ${t.color}25, 0 0 60px ${t.color}12` : 'none'
                }}>
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-rajdhani font-bold uppercase tracking-widest"
                    style={{ background: t.color, color: '#050508' }}>
                    Популярный
                  </div>
                )}
                <div className="font-rajdhani font-bold text-sm uppercase tracking-widest mb-4" style={{ color: t.color }}>
                  {t.name}
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="font-rajdhani font-bold text-5xl text-white">{t.price}</span>
                  <span className="text-gray-400 mb-1">{t.unit}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color, boxShadow: `0 0 6px ${t.color}` }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking"
                  className="block text-center py-3 px-6 rounded text-sm font-rajdhani font-bold uppercase tracking-wider transition-all duration-300"
                  style={{
                    border: `1px solid ${t.color}`,
                    color: t.popular ? '#050508' : t.color,
                    background: t.popular ? t.color : 'transparent',
                    boxShadow: t.popular ? `0 0 20px ${t.color}50` : 'none'
                  }}>
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-4 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00FF88' }}>// 03</span>
            <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl text-white mt-2 tracking-wide">
              Бронирование <span className="text-gradient-green">ПК</span>
            </h2>
            <p className="text-gray-400 mt-3">Выбери филиал, дату и время — займи место онлайн</p>
          </div>

          {bookingDone ? (
            <div className="rounded-lg p-12 text-center" style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(0,255,136,0.1)', border: '2px solid #00FF88', boxShadow: '0 0 30px #00FF8840' }}>
                <Icon name="Check" size={32} className="text-[#00FF88]" />
              </div>
              <h3 className="font-rajdhani font-bold text-2xl uppercase tracking-wide mb-3" style={{ color: '#00FF88' }}>Бронь подтверждена!</h3>
              <p className="text-gray-400">Мы свяжемся с тобой для подтверждения. До встречи в Rocket Center!</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="rounded-lg p-8" style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,255,136,0.15)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Филиал */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Выбери филиал</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {BRANCHES.map(b => (
                      <button type="button" key={b.id}
                        onClick={() => setBooking(prev => ({ ...prev, branch: b.name }))}
                        className="p-4 rounded-lg border text-left transition-all duration-200"
                        style={{
                          borderColor: booking.branch === b.name ? '#00FF88' : 'rgba(255,255,255,0.1)',
                          background: booking.branch === b.name ? 'rgba(0,255,136,0.08)' : 'transparent'
                        }}>
                        <div className="font-rajdhani font-bold text-sm text-white truncate">{b.name.replace('Rocket Center ', '')}</div>
                        <div className="text-gray-500 text-xs mt-1">{b.address}</div>
                        <div className="flex items-center gap-1 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00FF88', boxShadow: '0 0 4px #00FF88' }} />
                          <span className="text-xs" style={{ color: '#00FF88' }}>{b.pcs} ПК</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Дата */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Дата</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={booking.date}
                    onChange={e => setBooking(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark' }}
                  />
                </div>

                {/* Время */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Время начала</label>
                  <select
                    required
                    value={booking.time}
                    onChange={e => setBooking(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
                    style={{ background: '#0F0F1A', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark' }}>
                    <option value="" disabled>Выбери время</option>
                    {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Длительность */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Длительность</label>
                  <div className="flex gap-2">
                    {["1","2","3","4","5","6"].map(h => (
                      <button type="button" key={h}
                        onClick={() => setBooking(prev => ({ ...prev, duration: h }))}
                        className="flex-1 py-3 rounded-lg text-sm font-rajdhani font-bold transition-all duration-200"
                        style={{
                          border: `1px solid ${booking.duration === h ? '#00FF88' : 'rgba(255,255,255,0.1)'}`,
                          background: booking.duration === h ? '#00FF88' : 'transparent',
                          color: booking.duration === h ? '#050508' : '#9ca3af'
                        }}>
                        {h}ч
                      </button>
                    ))}
                  </div>
                </div>

                {/* Тариф */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Тариф</label>
                  <select
                    value={booking.tariff}
                    onChange={e => setBooking(prev => ({ ...prev, tariff: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none"
                    style={{ background: '#0F0F1A', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark' }}>
                    {TARIFFS.map(t => <option key={t.name} value={t.name}>{t.name} — {t.price}₽/час</option>)}
                  </select>
                </div>

                {/* Имя */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Как тебя зовут?"
                    value={booking.name}
                    onChange={e => setBooking(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>

                {/* Телефон */}
                <div>
                  <label className="block text-xs font-rajdhani uppercase tracking-widest mb-2" style={{ color: '#00FF88' }}>Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={booking.phone}
                    onChange={e => setBooking(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
              </div>

              {booking.branch && booking.date && booking.time && (
                <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.2)' }}>
                  <div className="font-rajdhani text-sm uppercase tracking-wider mb-1" style={{ color: '#00FF88' }}>Итого</div>
                  <div className="text-white text-2xl font-rajdhani font-bold">
                    {parseInt(booking.duration) * getTariffPrice()}₽
                    <span className="text-gray-500 text-sm font-normal ml-2">за {booking.duration} час(а)</span>
                  </div>
                </div>
              )}

              <button type="submit"
                className="w-full mt-6 py-4 rounded-lg text-lg btn-solid-neon disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!booking.branch}>
                {booking.branch ? "Забронировать место" : "Выбери филиал для брони"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* BRANCHES */}
      <section id="branches" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00D4FF' }}>// 04</span>
            <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl mt-2 tracking-wide" style={{ color: '#00D4FF', textShadow: '0 0 20px #00D4FF80' }}>
              Наши Филиалы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCHES.map((b) => (
              <div key={b.id} className="rounded-lg p-8 transition-all duration-300 hover:-translate-y-2"
                style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,212,255,0.15)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.15)'}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <Icon name="MapPin" size={22} className="text-[#00D4FF]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00FF88', boxShadow: '0 0 6px #00FF88' }} />
                    <span className="text-xs font-rajdhani uppercase tracking-wider" style={{ color: '#00FF88' }}>Открыто</span>
                  </div>
                </div>

                <h3 className="font-rajdhani font-bold text-xl text-white uppercase tracking-wide mb-2">{b.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{b.address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">ПК</div>
                    <div className="font-rajdhani font-bold text-2xl" style={{ color: '#00D4FF', textShadow: '0 0 10px #00D4FF80' }}>{b.pcs}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Время</div>
                    <div className="font-rajdhani font-bold text-sm text-white">{b.open}</div>
                  </div>
                </div>

                <a href="#booking" className="block text-center py-3 px-4 rounded text-sm btn-neon-blue w-full">
                  Забронировать здесь
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00FF88, transparent)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00FF88' }}>// 05</span>
              <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl text-white mt-2 mb-6 tracking-wide">
                О нас
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Rocket Center — это не просто интернет-кафе. Мы создаём пространство, где каждый геймер
                чувствует себя профессионалом. Только топовое железо, только честный пинг, только атмосфера побед.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Основаны в 2019 году. За 5 лет выросли до 3 филиалов, 120+ игровых мест и тысяч
                довольных клиентов. Есть VIP-комнаты для компаний, LAN-вечеринок и геймерских тусовок.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5", label: "Лет на рынке" },
                  { num: "10K+", label: "Клиентов" },
                  { num: "VIP", label: "Комнаты" },
                  { num: "4.9★", label: "Рейтинг" },
                ].map(s => (
                  <div key={s.label} className="rounded-lg p-4" style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,255,136,0.12)' }}>
                    <div className="font-rajdhani font-bold text-3xl" style={{ color: '#00FF88', textShadow: '0 0 10px #00FF8880' }}>{s.num}</div>
                    <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden" style={{ border: '1px solid rgba(0,255,136,0.2)' }}>
                <img src={HERO_IMAGE} alt="Rocket Center interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.08), rgba(0,212,255,0.08))' }} />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-lg px-6 py-4"
                style={{ background: 'rgba(10,10,20,0.95)', border: '1px solid rgba(0,255,136,0.3)', backdropFilter: 'blur(12px)' }}>
                <div className="font-rajdhani font-bold text-xl" style={{ color: '#00FF88' }}>RTX 4080</div>
                <div className="text-gray-400 text-xs">в каждом ULTRA-месте</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-4 relative">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,255,136,0.05) 0%, transparent 60%)'
        }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs uppercase tracking-widest" style={{ color: '#00FF88' }}>// 06</span>
            <h2 className="font-rajdhani font-bold uppercase text-4xl md:text-5xl text-white mt-2 tracking-wide">
              <span className="text-gradient-green">Контакты</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { role: "PR-менеджер", desc: "Вопросы рекламы и сотрудничества", name: "Иванов Иван Иванович", tg: "@ivanov_rc" },
              { role: "Технический директор", desc: "Технические вопросы и оборудование", name: "Сергеев Сергей Сергеевич", tg: "@sergeev_rc" },
              { role: "Генеральный директор", desc: "Общие вопросы и партнёрство", name: "Пугачев Егор Иванович", tg: "@pugachev_rc" },
            ].map(c => (
              <div key={c.tg} className="rounded-lg p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(10,10,20,0.8)', border: '1px solid rgba(0,255,136,0.12)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.35)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.12)'}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)' }}>
                    <Icon name="User" size={20} className="text-[#00FF88]" />
                  </div>
                  <div>
                    <div className="text-xs font-rajdhani uppercase tracking-widest mb-0.5" style={{ color: '#00FF88' }}>{c.role}</div>
                    <div className="text-gray-400 text-xs">{c.desc}</div>
                  </div>
                </div>
                <div className="font-golos font-semibold text-white mb-3">{c.name}</div>
                <a href={`https://t.me/${c.tg.replace('@','')}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-wider transition-colors hover:opacity-80"
                  style={{ color: '#00D4FF' }}>
                  <Icon name="Send" size={15} />
                  {c.tg}
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-lg p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.2)' }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <h3 className="font-rajdhani font-bold text-3xl md:text-4xl uppercase text-white mb-4 relative z-10">
              Готов к игре?
            </h3>
            <p className="text-gray-400 mb-8 relative z-10">Забронируй место прямо сейчас и получи первый час со скидкой 20%</p>
            <a href="#booking" className="inline-block px-10 py-4 rounded text-lg btn-solid-neon relative z-10">
              Забронировать со скидкой
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 px-4" style={{ borderColor: 'rgba(0,255,136,0.1)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#00FF88' }}>
              <Icon name="Rocket" size={12} className="text-[#050508]" />
            </div>
            <span className="font-rajdhani font-bold text-sm tracking-widest uppercase" style={{ color: '#00FF88' }}>
              ROCKET CENTER
            </span>
          </div>
          <div className="text-gray-600 text-xs">© 2024 Rocket Center. Все права защищены.</div>
          <div className="flex gap-6">
            {NAV_ITEMS.slice(0, 3).map(l => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-[#00FF88] text-xs font-rajdhani uppercase tracking-widest transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}