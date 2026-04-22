import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/710ac242-afeb-4d9d-9eb3-d0bf025d51a2/files/96bac8e1-ae17-4ca9-a006-83230b2704f1.jpg";
const DOG_IMAGE = "https://cdn.poehali.dev/projects/710ac242-afeb-4d9d-9eb3-d0bf025d51a2/files/fb9f7d83-ed6a-49b3-b81d-edf8fd9bda6d.jpg";

const services = [
  {
    icon: "Scissors",
    title: "Комплексный груминг",
    desc: "Стрижка, купание, сушка, расчёсывание и укладка",
    prices: [
      { name: "Маленькая порода", price: "от 1 500 ₽" },
      { name: "Средняя порода", price: "от 2 500 ₽" },
      { name: "Крупная порода", price: "от 3 500 ₽" },
    ],
    color: "#F5A623",
  },
  {
    icon: "Droplets",
    title: "Купание и сушка",
    desc: "Профессиональные шампуни, кондиционеры и аромат",
    prices: [
      { name: "Маленькая порода", price: "от 700 ₽" },
      { name: "Средняя порода", price: "от 1 200 ₽" },
      { name: "Крупная порода", price: "от 1 800 ₽" },
    ],
    color: "#06B6D4",
  },
  {
    icon: "Sparkles",
    title: "SPA-уход",
    desc: "Маски, увлажнение, восстановление шерсти",
    prices: [
      { name: "Маска для шерсти", price: "от 500 ₽" },
      { name: "Увлажняющий уход", price: "от 800 ₽" },
      { name: "Полный SPA", price: "от 2 000 ₽" },
    ],
    color: "#FF6B6B",
  },
  {
    icon: "Heart",
    title: "Гигиенические процедуры",
    desc: "Стрижка когтей, чистка ушей, зубов",
    prices: [
      { name: "Когти", price: "от 300 ₽" },
      { name: "Уши + зубы", price: "от 400 ₽" },
      { name: "Комплекс", price: "от 600 ₽" },
    ],
    color: "#8B5CF6",
  },
];

const masters = [
  { name: "Анна Королёва", exp: "8 лет опыта", spec: "Пудели, мальтезе, йорки", emoji: "👩‍🦰" },
  { name: "Михаил Озёров", exp: "6 лет опыта", spec: "Крупные породы, хаски", emoji: "👨‍🦱" },
  { name: "Дарья Лисина", exp: "5 лет опыта", spec: "Кошки всех пород", emoji: "👩‍🦳" },
];

const whyUs = [
  { icon: "Award", title: "Сертифицированные мастера", desc: "Все грумеры прошли международную сертификацию и любят животных" },
  { icon: "Clock", title: "Запись онлайн 24/7", desc: "Выбирайте удобное время без звонков и ожиданий на линии" },
  { icon: "Shield", title: "Безопасные средства", desc: "Только гипоаллергенная косметика без вредных компонентов" },
  { icon: "Camera", title: "Фото до и после", desc: "Отправляем фотографии питомца на WhatsApp по завершению" },
  { icon: "Star", title: "Рейтинг 4.9 из 5", desc: "Более 500 довольных клиентов доверяют нам своих питомцев" },
  { icon: "MapPin", title: "Удобное расположение", desc: "В центре города, рядом с метро, парковка для клиентов" },
];

const reviews = [
  { name: "Светлана М.", pet: "Бишон Фризе Буся", text: "Обожаем этот салон! Бусю здесь всегда ждут с улыбкой, результат каждый раз лучше ожиданий. Анна — просто волшебница ножниц!", stars: 5 },
  { name: "Игорь К.", pet: "Хаски Гром", text: "Михаил отлично справляется с нашим непоседой. Гром обычно боится груминга, но здесь ведёт себя спокойно. Виден профессиональный подход.", stars: 5 },
  { name: "Мария Т.", pet: "Кот Персик", text: "Сдала кота на стрижку, переживала очень. Отдали ухоженного, довольного, без стресса. Дарья — молодец! Теперь ходим только сюда.", stars: 5 },
  { name: "Алексей В.", pet: "Пудель Шарли", text: "Записался через сайт — очень удобно. Стрижка идеальная, всё чисто, запах приятный. Цены адекватные для такого качества.", stars: 5 },
];

const faq = [
  { q: "Как долго длится груминг?", a: "Зависит от породы и выбранных услуг. Комплексный груминг маленькой породы — 1.5–2 часа, крупной — до 4 часов. Точное время уточняем при записи." },
  { q: "Нужно ли записываться заранее?", a: "Да, мы работаем по записи. Это гарантирует, что мастер уделит вашему питомцу всё необходимое время и внимание." },
  { q: "Что делать, если питомец боится груминга?", a: "Наши мастера умеют работать с тревожными животными. Используем мягкий подход, делаем паузы. Можно обсудить особенности вашего питомца при записи." },
  { q: "Принимаете ли вы кошек?", a: "Да! У нас есть отдельный мастер по кошачьему грумингу. Работаем со всеми породами, включая длинношёрстных и экзотических." },
  { q: "Какие средства используете?", a: "Только профессиональная гипоаллергенная косметика: iv san bernard, Bio-Groom. Без парабенов и SLS." },
  { q: "Есть ли скидки для постоянных клиентов?", a: "Да! После 5-го визита вы получаете карту постоянного клиента со скидкой 10% на все услуги." },
];

const bookingSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export default function Index() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#for-whom", label: "Для кого" },
    { href: "#services", label: "Услуги" },
    { href: "#why-us", label: "О нас" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#booking", label: "Запись" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--cream)" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "var(--dark)", borderBottom: "1px solid rgba(245,166,35,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--gold)", color: "var(--dark)" }}>
              GC
            </div>
            <span className="font-display text-xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              GOLD CLIPPER
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold font-body transition-all hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--dark)" }}
          >
            Записаться
          </a>

          <button
            className="md:hidden p-2"
            style={{ color: "var(--gold)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: "var(--dark-mid)" }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-base font-medium py-1"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-2 text-center px-5 py-3 rounded-full font-semibold"
              style={{ background: "var(--gold)", color: "var(--dark)" }}
              onClick={() => setMenuOpen(false)}
            >
              Записаться
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ backgroundColor: "var(--dark)" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(245,166,35,0.4) 0%, transparent 60%)" }} />
        <div className="absolute top-16 right-0 w-1/2 h-full opacity-40 hidden lg:block">
          <img src={HERO_IMAGE} alt="Груминг салон" className="w-full h-full object-cover object-center" style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.9), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border text-xs font-medium font-body animate-fade-in-up" style={{ borderColor: "rgba(245,166,35,0.4)", color: "var(--gold)", backgroundColor: "rgba(245,166,35,0.1)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--gold)" }} />
              Профессиональный груминг в Москве
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold leading-none mb-6 animate-fade-in-up delay-100" style={{ color: "#fff" }}>
              ВАШИ<br />
              <span className="shimmer-text">ПИТОМЦЫ</span><br />
              ЗАСЛУЖИВАЮТ<br />
              <span style={{ color: "var(--gold)" }}>ЛУЧШЕГО</span>
            </h1>

            <p className="font-body text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up delay-200" style={{ color: "rgba(255,255,255,0.7)" }}>
              Профессиональный уход, любовь к животным и результат, который покорит вас с первого взгляда
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="#booking"
                className="px-8 py-4 rounded-full font-semibold font-body text-lg text-center transition-all hover:scale-105 hover:shadow-2xl animate-pulse-gold"
                style={{ background: "var(--gold)", color: "var(--dark)" }}
              >
                Записаться онлайн
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full font-semibold font-body text-lg text-center border transition-all hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff", backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                Смотреть услуги
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 animate-fade-in-up delay-400">
              <div>
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold)" }}>500+</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>довольных клиентов</div>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
              <div>
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold)" }}>4.9★</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>рейтинг салона</div>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
              <div>
                <div className="font-display text-3xl font-bold" style={{ color: "var(--gold)" }}>3</div>
                <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>мастера-эксперта</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#for-whom" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Icon name="ChevronDown" size={32} />
          </a>
        </div>
      </section>

      {/* FOR WHOM */}
      <section id="for-whom" className="py-24 relative" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Для кого</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--dark)" }}>
              МЫ ЛЮБИМ<br /><span style={{ color: "var(--gold)" }}>ВСЕХ ПИТОМЦЕВ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🐩", title: "Собаки", desc: "Все породы от чихуахуа до сенбернара. Стрижки по стандарту и авторские", count: "60+ пород" },
              { emoji: "🐱", title: "Кошки", desc: "Длинношёрстные, короткошёрстные, экзотические. Мягкий безстрессовый груминг", count: "30+ пород" },
              { emoji: "🐇", title: "Кролики и грызуны", desc: "Нежный уход для маленьких пушистиков, чистка и стрижка коготков", count: "все виды" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl hover-lift cursor-default overflow-hidden"
                style={{ backgroundColor: i === 1 ? "var(--dark)" : "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 -translate-y-8 translate-x-8" style={{ backgroundColor: "var(--gold)" }} />
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-3xl font-bold mb-3" style={{ color: i === 1 ? "#fff" : "var(--dark)" }}>
                  {item.title}
                </h3>
                <p className="font-body text-base leading-relaxed mb-4" style={{ color: i === 1 ? "rgba(255,255,255,0.65)" : "rgba(26,18,8,0.6)" }}>
                  {item.desc}
                </p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body" style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "var(--gold-dark)" }}>
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & PRICES */}
      <section id="services" className="py-24" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Услуги</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "#fff" }}>
              УСЛУГИ И <span style={{ color: "var(--gold)" }}>ЦЕНЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl hover-lift cursor-default relative overflow-hidden transition-all"
                style={{ backgroundColor: "#fff", border: "2px solid transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${s.color}20` }}>
                  <Icon name={s.icon} size={22} fallback="Star" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: "var(--dark)" }}>{s.title}</h3>
                <p className="font-body text-sm mb-5 leading-relaxed" style={{ color: "rgba(26,18,8,0.6)" }}>{s.desc}</p>
                <div className="space-y-2">
                  {s.prices.map((p, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span className="font-body text-xs" style={{ color: "rgba(26,18,8,0.55)" }}>{p.name}</span>
                      <span className="font-display text-sm font-bold" style={{ color: s.color }}>{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              * Точная стоимость рассчитывается при записи с учётом породы и состояния шерсти
            </p>
          </div>
        </div>
      </section>

      {/* WHY GOLD CLIPPER */}
      <section id="why-us" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Почему мы</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--dark)" }}>
                ПОЧЕМУ<br /><span style={{ color: "var(--gold)" }}>GOLD</span><br />CLIPPER
              </h2>
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(26,18,8,0.65)" }}>
                Мы не просто стрижём — мы создаём образ. Каждый питомец для нас особенный, и мы подходим к каждому индивидуально.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body transition-all hover:scale-105"
                style={{ background: "var(--gold)", color: "var(--dark)" }}
              >
                Записаться <Icon name="ArrowRight" size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl hover-lift"
                  style={{ backgroundColor: i % 3 === 1 ? "var(--dark)" : "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(245,166,35,0.15)" }}>
                    <Icon name={item.icon} size={20} fallback="Star" />
                  </div>
                  <h4 className="font-display text-base font-bold mb-1" style={{ color: i % 3 === 1 ? "#fff" : "var(--dark)" }}>
                    {item.title}
                  </h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: i % 3 === 1 ? "rgba(255,255,255,0.55)" : "rgba(26,18,8,0.55)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, var(--dark) 0%, #2C1F0A 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Команда</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "#fff" }}>
              НАШИ <span style={{ color: "var(--gold)" }}>МАСТЕРА</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {masters.map((m, i) => (
              <div key={i} className="text-center p-8 rounded-3xl hover-lift" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(245,166,35,0.15)" }}>
                <div className="text-6xl mb-4">{m.emoji}</div>
                <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "#fff" }}>{m.name}</h3>
                <div className="font-body text-sm mb-2" style={{ color: "var(--gold)" }}>{m.exp}</div>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Специализация: {m.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>FAQ</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--dark)" }}>
              ЧАСТЫЕ <span style={{ color: "var(--gold)" }}>ВОПРОСЫ</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl overflow-hidden border-0 px-6"
                style={{ backgroundColor: "#fff" }}
              >
                <AccordionTrigger className="font-display text-lg font-semibold py-5 hover:no-underline" style={{ color: "var(--dark)" }}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base pb-5 leading-relaxed" style={{ color: "rgba(26,18,8,0.65)" }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Отзывы</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "#fff" }}>
              ЧТО ГОВОРЯТ <span style={{ color: "var(--gold)" }}>КЛИЕНТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 rounded-3xl hover-lift" style={{ backgroundColor: i === 1 ? "rgba(245,166,35,0.12)" : "rgba(255,255,255,0.05)", border: i === 1 ? "1px solid rgba(245,166,35,0.3)" : "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                  "{r.text}"
                </p>
                <div>
                  <div className="font-display text-base font-bold" style={{ color: "#fff" }}>{r.name}</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "var(--gold)" }}>{r.pet}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <img src={DOG_IMAGE} alt="Довольный питомец" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" style={{ border: "3px solid var(--gold)" }} />
            <p className="font-display text-xl font-semibold" style={{ color: "#fff" }}>Ваш питомец — следующий счастливчик!</p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-body text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: "var(--gold)" }}>Запись</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--dark)" }}>
              ЗАПИСАТЬСЯ<br /><span style={{ color: "var(--gold)" }}>ОНЛАЙН</span>
            </h2>
            <p className="font-body text-base" style={{ color: "rgba(26,18,8,0.6)" }}>Выберите услугу, мастера и удобное время</p>
          </div>

          <div className="rounded-3xl p-8 md:p-10 shadow-2xl" style={{ backgroundColor: "#fff" }}>
            <div className="space-y-6">
              <div>
                <label className="font-display text-sm font-semibold block mb-2 tracking-wide" style={{ color: "var(--dark)" }}>ВАШЕ ИМЯ</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all"
                  style={{ backgroundColor: "var(--cream)", border: "2px solid transparent" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                />
              </div>

              <div>
                <label className="font-display text-sm font-semibold block mb-2 tracking-wide" style={{ color: "var(--dark)" }}>ТЕЛЕФОН</label>
                <input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all"
                  style={{ backgroundColor: "var(--cream)", border: "2px solid transparent" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                />
              </div>

              <div>
                <label className="font-display text-sm font-semibold block mb-3 tracking-wide" style={{ color: "var(--dark)" }}>УСЛУГА</label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => setSelectedService(s.title)}
                      className="px-3 py-2.5 rounded-xl text-left transition-all text-sm font-body"
                      style={{
                        backgroundColor: selectedService === s.title ? "var(--gold)" : "var(--cream)",
                        color: selectedService === s.title ? "var(--dark)" : "rgba(26,18,8,0.7)",
                        fontWeight: selectedService === s.title ? "600" : "400",
                      }}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-sm font-semibold block mb-3 tracking-wide" style={{ color: "var(--dark)" }}>МАСТЕР</label>
                <div className="grid grid-cols-4 gap-2">
                  {[...masters, { name: "Любой", exp: "", spec: "", emoji: "🎲" }].map((m) => (
                    <button
                      key={m.name}
                      onClick={() => setSelectedMaster(m.name)}
                      className="px-2 py-2.5 rounded-xl text-center transition-all font-body text-sm"
                      style={{
                        backgroundColor: selectedMaster === m.name ? "var(--dark)" : "var(--cream)",
                        color: selectedMaster === m.name ? "#fff" : "rgba(26,18,8,0.7)",
                        fontWeight: selectedMaster === m.name ? "600" : "400",
                      }}
                    >
                      <div className="text-xl mb-0.5">{m.emoji}</div>
                      <div className="text-xs">{m.name.split(" ")[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-sm font-semibold block mb-3 tracking-wide" style={{ color: "var(--dark)" }}>ВРЕМЯ</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {bookingSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className="py-2.5 rounded-xl text-sm font-body font-medium transition-all"
                      style={{
                        backgroundColor: selectedTime === t ? "var(--gold)" : "var(--cream)",
                        color: selectedTime === t ? "var(--dark)" : "rgba(26,18,8,0.7)",
                        fontWeight: selectedTime === t ? "700" : "400",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-sm font-semibold block mb-2 tracking-wide" style={{ color: "var(--dark)" }}>ПОРОДА И ПОЖЕЛАНИЯ</label>
                <textarea
                  placeholder="Например: пудель той, боится фена, хотим модельную стрижку..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all resize-none"
                  style={{ backgroundColor: "var(--cream)", border: "2px solid transparent" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
                />
              </div>

              <button
                className="w-full py-4 rounded-2xl font-display text-xl font-bold tracking-wide transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, var(--gold) 0%, #FFD166 100%)", color: "var(--dark)" }}
              >
                ОТПРАВИТЬ ЗАЯВКУ ✦
              </button>

              <p className="text-center font-body text-xs" style={{ color: "rgba(26,18,8,0.4)" }}>
                Мы свяжемся с вами в течение 15 минут для подтверждения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "var(--dark)", borderTop: "1px solid rgba(245,166,35,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--gold)", color: "var(--dark)" }}>
                  GC
                </div>
                <span className="font-display text-xl font-bold" style={{ color: "var(--gold)" }}>GOLD CLIPPER</span>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Профессиональный груминг-салон для собак и кошек. Любим каждого питомца.
              </p>
            </div>

            <div>
              <div className="font-display text-sm font-semibold tracking-wider mb-4" style={{ color: "var(--gold)" }}>МЕНЮ</div>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-body text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display text-sm font-semibold tracking-wider mb-4" style={{ color: "var(--gold)" }}>КОНТАКТЫ</div>
              <ul className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (999) 123-45-67" },
                  { icon: "Mail", text: "info@goldclipper.ru" },
                  { icon: "MapPin", text: "Москва, ул. Пушкина, 12" },
                  { icon: "Clock", text: "Пн–Вс 9:00–21:00" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <Icon name={item.icon} size={14} fallback="Info" />
                    <span className="font-body text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display text-sm font-semibold tracking-wider mb-4" style={{ color: "var(--gold)" }}>МЫ В СОЦ. СЕТЯХ</div>
              <div className="flex gap-3">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "MessageCircle", label: "Telegram" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((s) => (
                  <button
                    key={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "rgba(245,166,35,0.12)", color: "var(--gold)" }}
                  >
                    <Icon name={s.icon} size={18} fallback="Share2" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2024 Gold Clipper. Все права защищены.
            </p>
            <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              Политика конфиденциальности · Оферта
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}