import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const C = {
  bg: "#F4FCF9",
  dark: "#2E4A3A",
  mint: "#3BA58F",
  mintLight: "#B8E0D4",
  mintMid: "#D6F0E9",
  peach: "#E8A25E",
  white: "#ffffff",
};

const services = [
  {
    emoji: "✂️",
    title: "Гигиеническая стрижка",
    sub: "малыши до 5 кг",
    price: "1 800 ₽",
  },
  {
    emoji: "🛁",
    title: "Всё включено",
    sub: "стрижка, мойка, когти, уши",
    price: "от 2 500 ₽",
  },
  {
    emoji: "🍃",
    title: "Экспресс-линька для кошек",
    sub: "быстро и бережно",
    price: "1 500 ₽",
  },
  {
    emoji: "✨",
    title: "SPA с озонированием",
    sub: "глубокое восстановление",
    price: "+800 ₽",
  },
];

const whyUs = [
  { emoji: "🔒", title: "Безопасно, серьёзно", desc: "Ножницы и машинки проходят автоклав. Как в больнице, только вкуснее пахнет." },
  { emoji: "🧘‍♀️", title: "Без стресса вообще", desc: "Хотите перерыв? Сделаем. Не нравится? Остановимся. Угостим печенькой (питомца, не вас)." },
  { emoji: "📸", title: "Вы всё видите", desc: "Смотрите стрижку из дома по камере. Никаких тайн." },
  { emoji: "🩺", title: "Здоровье под контролем", desc: "Перед процедурой питомца посмотрит ветеринар. Спокойно и бесплатно." },
  { emoji: "💎", title: "Только хорошая косметика", desc: "Iv San Bernard, Bio-Groom — без химии и аллергии." },
];

const reviews = [
  { stars: 5, text: "«Наш корги-кусака наконец-то подстригся без скандала. Ребята — волшебники. Спасибо за терпение!»", author: "Анна и корги Сева" },
  { stars: 5, text: "«Кошка после переезда была сама не своя. В Gold Clipper её поняли, делали всё с перерывами. Выглядит шикарно, настроение хорошее.»", author: "Михаил и кошка Мотя" },
  { stars: 5, text: "«Для моего старого пса стрижка всегда была пыткой. А тут — спокойно, нежно. Вы чудо. Спасибо!»", author: "Елена и той-терьер Боня" },
];

const faq = [
  { q: "А если моя собака кусается?", a: "Бывает. Наденем намордник, будем аккуратны. Только предупредите нас заранее, ладно?" },
  { q: "Что, если питомец испугается?", a: "Сразу остановимся. Дадим отдохнуть, погладим, угостим. Ветврач под боком." },
  { q: "Можно постоять рядом?", a: "Лучше через стекло или онлайн. Мы заметили: когда хозяин рядом, питомец отвлекается и нервничает больше." },
  { q: "Инструменты моют вообще?", a: "Не просто моют — стерилизуют. После каждого хвостика." },
  { q: "Скидки будут?", a: "Конечно. Придёте 5 раз — 6-й в подарок. Любим постоянных клиентов." },
];

const navLinks = [
  { href: "#services", label: "Что умеем" },
  { href: "#why-us", label: "Почему мы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#reviews", label: "Хвасталки" },
  { href: "#booking", label: "Запись" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [petType, setPetType] = useState("");

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: C.bg, color: C.dark }}>

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: "rgba(244,252,249,0.92)", borderBottom: `1px solid ${C.mintLight}` }}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: C.mint, color: C.white }}>
              GC
            </div>
            <span className="font-heading text-lg font-bold" style={{ color: C.dark }}>
              Gold Clipper ✨
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium transition-colors hover:text-mint"
                style={{ color: "rgba(46,74,58,0.7)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.mint)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(46,74,58,0.7)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contacts + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79991234567" className="font-body text-sm font-medium" style={{ color: C.dark }}>
              📞 +7 (999) 123-45-67
            </a>
            <a href="https://t.me/gold_clipper" className="font-body text-sm" style={{ color: C.mint }}>
              ✉️ @gold_clipper
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-full text-sm font-semibold font-body transition-all hover:scale-105 animate-pulse-mint"
              style={{ backgroundColor: C.mint, color: C.white }}
            >
              🐾 Записать хвостика
            </a>
          </div>

          <button className="lg:hidden p-2" style={{ color: C.mint }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-5 py-4 flex flex-col gap-3" style={{ backgroundColor: C.white, borderTop: `1px solid ${C.mintLight}` }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-base py-1" style={{ color: C.dark }} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-1 text-center px-5 py-3 rounded-full font-semibold font-body"
              style={{ backgroundColor: C.mint, color: C.white }}
              onClick={() => setMenuOpen(false)}
            >
              🐾 Записать хвостика
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none" style={{ background: `radial-gradient(circle, ${C.mintLight}, transparent 70%)`, transform: "translate(30%, -20%)" }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-25 pointer-events-none" style={{ background: `radial-gradient(circle, ${C.mintMid}, transparent 70%)`, transform: "translate(-30%, 30%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-body mb-6 animate-fade-in-up"
              style={{ backgroundColor: C.mintMid, color: C.mint }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.mint }} />
              Груминг-салон в Москве
            </div>

            <h1
              className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100"
              style={{ color: C.dark }}
            >
              Gold Clipper —<br />
              груминг, который<br />
              <span style={{ color: C.mint }}>не пугает</span> 🐶🐱
            </h1>

            <p
              className="font-body text-xl leading-relaxed mb-10 animate-fade-in-up delay-200"
              style={{ color: "rgba(46,74,58,0.75)", maxWidth: "560px" }}
            >
              Стрижём, моем, любим. Без стресса, без криков, без успокоительных.
              А вы смотрите онлайн и не волнуетесь.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="#booking"
                className="px-8 py-4 rounded-full font-semibold font-body text-lg text-center transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: C.mint, color: C.white }}
              >
                🧡 Записаться сейчас
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full font-semibold font-body text-lg text-center border-2 transition-all hover:scale-105"
                style={{ borderColor: C.mintLight, color: C.dark, backgroundColor: "transparent" }}
              >
                Смотреть услуги
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 animate-fade-in-up delay-400">
              {[
                { emoji: "🧼", text: "Чисто как в операционной" },
                { emoji: "📱", text: "Вы всё видите по видео" },
                { emoji: "😌", text: "Никаких «усыпляй»" },
                { emoji: "🩺", text: "Ветврач проверит бесплатно" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 rounded-2xl font-body text-sm font-medium gap-2"
                  style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}`, color: C.dark }}
                >
                  <span className="text-2xl">{b.emoji}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#for-whom" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" style={{ color: C.mintLight }}>
          <Icon name="ChevronDown" size={30} />
        </a>
      </section>

      {/* ── FOR WHOM ── */}
      <section id="for-whom" className="py-24" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>Для кого</div>
            <h2 className="font-heading text-4xl md:text-5xl" style={{ color: C.dark }}>Кого мы обожаем</h2>
            <p className="font-body text-lg mt-4" style={{ color: "rgba(46,74,58,0.65)", maxWidth: 500, margin: "16px auto 0" }}>
              Всех! Даже если ваш пёс — маленький дракон, а кошка считает себя тигром.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🐕", title: "Собаки", desc: "от чихуа до кане-корсо", extra: "Любая порода, любой характер" },
              { emoji: "🐈", title: "Кошки с характером", desc: "независимые и нежные", extra: "Мягкий подход к каждой" },
              { emoji: "🦸‍♂️", title: "Особенные питомцы", desc: "боятся, кусаются, грустят", extra: "Особое внимание и терпение" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl hover-lift"
                style={{
                  backgroundColor: i === 1 ? C.mint : C.bg,
                  border: `1.5px solid ${i === 1 ? C.mint : C.mintLight}`,
                }}
              >
                <div className="text-5xl mb-5">{item.emoji}</div>
                <h3 className="font-heading text-2xl mb-2" style={{ color: i === 1 ? C.white : C.dark }}>{item.title}</h3>
                <p className="font-body text-base mb-1" style={{ color: i === 1 ? "rgba(255,255,255,0.8)" : "rgba(46,74,58,0.65)" }}>{item.desc}</p>
                <p className="font-body text-sm" style={{ color: i === 1 ? "rgba(255,255,255,0.6)" : C.mint }}>{item.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>Услуги</div>
            <h2 className="font-heading text-4xl md:text-5xl" style={{ color: C.dark }}>Что мы умеем (и любим)</h2>
            <p className="font-body text-base mt-4" style={{ color: "rgba(46,74,58,0.6)" }}>
              Цену скажем после знакомства. Обещаем без сюрпризов в чеке.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl hover-lift flex flex-col"
                style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}
              >
                <div className="text-4xl mb-5">{s.emoji}</div>
                <h3 className="font-heading text-xl mb-1" style={{ color: C.dark }}>{s.title}</h3>
                <p className="font-body text-sm mb-4" style={{ color: "rgba(46,74,58,0.6)" }}>{s.sub}</p>
                <div className="mt-auto">
                  <div className="font-heading text-2xl font-bold mb-4" style={{ color: C.mint }}>{s.price}</div>
                  <a
                    href="#booking"
                    className="block text-center w-full py-2.5 rounded-xl font-body text-sm font-semibold transition-all hover:scale-105"
                    style={{ backgroundColor: C.mintMid, color: C.dark }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = C.mint; e.currentTarget.style.color = C.white; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = C.mintMid; e.currentTarget.style.color = C.dark; }}
                  >
                    🐾 Хочу так же
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="py-24" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>Почему мы</div>
            <h2 className="font-heading text-4xl md:text-5xl" style={{ color: C.dark }}>
              Почему мурлыки и хвостики нас любят
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className={`p-7 rounded-3xl hover-lift ${i === 2 ? "lg:col-span-1" : ""}`}
                style={{
                  backgroundColor: i === 0 ? C.mint : i === 3 ? C.mintMid : C.bg,
                  border: `1.5px solid ${C.mintLight}`,
                }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-heading text-xl mb-2" style={{ color: i === 0 ? C.white : C.dark }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: i === 0 ? "rgba(255,255,255,0.8)" : "rgba(46,74,58,0.65)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>FAQ</div>
            <h2 className="font-heading text-4xl md:text-5xl" style={{ color: C.dark }}>Что вас волнует? Спросите 🤓</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl overflow-hidden px-6 border-0"
                style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}
              >
                <AccordionTrigger
                  className="font-heading text-lg py-5 hover:no-underline text-left"
                  style={{ color: C.dark }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base pb-5 leading-relaxed" style={{ color: "rgba(46,74,58,0.7)" }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24" style={{ backgroundColor: C.white }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>Хвасталки</div>
            <h2 className="font-heading text-4xl md:text-5xl" style={{ color: C.dark }}>Что говорят счастливые хозяева</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl hover-lift"
                style={{
                  backgroundColor: i === 1 ? C.mint : C.bg,
                  border: `1.5px solid ${i === 1 ? C.mint : C.mintLight}`,
                }}
              >
                <div className="flex gap-0.5 mb-4 text-lg">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} style={{ color: i === 1 ? "#FFE68A" : C.peach }}>★</span>
                  ))}
                </div>
                <p className="font-body text-base leading-relaxed mb-5 italic" style={{ color: i === 1 ? "rgba(255,255,255,0.88)" : "rgba(46,74,58,0.8)" }}>
                  {r.text}
                </p>
                <div className="font-body text-sm font-semibold" style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : C.mint }}>
                  — {r.author}
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center p-6 rounded-2xl font-body text-base"
            style={{ backgroundColor: C.mintMid, color: C.dark }}
          >
            Наш рейтинг: <strong>5.0</strong> на Яндекс.Картах (можете проверить 😉)
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section id="booking" className="py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="font-body text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C.mint }}>Запись</div>
            <h2 className="font-heading text-4xl md:text-5xl mb-3" style={{ color: C.dark }}>Давайте знакомиться 🐾</h2>
          </div>

          <div className="rounded-3xl p-8 shadow-lg" style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}>
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="font-body text-sm font-semibold block mb-2" style={{ color: C.dark }}>Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all"
                  style={{ backgroundColor: C.bg, border: `2px solid ${C.mintLight}` }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = C.mint)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = C.mintLight)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-body text-sm font-semibold block mb-2" style={{ color: C.dark }}>Телефон или Telegram</label>
                <input
                  type="text"
                  placeholder="+7 (999) 123-45-67 или @username"
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all"
                  style={{ backgroundColor: C.bg, border: `2px solid ${C.mintLight}` }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = C.mint)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = C.mintLight)}
                />
              </div>

              {/* Pet type */}
              <div>
                <label className="font-body text-sm font-semibold block mb-2" style={{ color: C.dark }}>Собака или кошка?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ label: "🐶 Собака", val: "dog" }, { label: "🐱 Кошка", val: "cat" }].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setPetType(opt.val)}
                      className="py-3 rounded-xl font-body text-sm font-semibold transition-all"
                      style={{
                        backgroundColor: petType === opt.val ? C.mint : C.bg,
                        color: petType === opt.val ? C.white : C.dark,
                        border: `2px solid ${petType === opt.val ? C.mint : C.mintLight}`,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* When */}
              <div>
                <label className="font-body text-sm font-semibold block mb-2" style={{ color: C.dark }}>Когда удобно прийти?</label>
                <input
                  type="text"
                  placeholder="Например: в будни после 17:00"
                  className="w-full px-4 py-3 rounded-xl font-body text-base outline-none transition-all"
                  style={{ backgroundColor: C.bg, border: `2px solid ${C.mintLight}` }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = C.mint)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = C.mintLight)}
                />
              </div>

              {/* Submit */}
              <button
                className="w-full py-4 rounded-2xl font-heading text-xl font-bold transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: C.mint, color: C.white }}
              >
                💛 Отправить заявку
              </button>

              <p className="text-center font-body text-sm" style={{ color: "rgba(46,74,58,0.5)" }}>
                Мы перезвоним через 15 минут — обсудим детали и цену. Без спама и без обязательств.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.dark }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: C.mint, color: C.white }}>
                  GC
                </div>
                <span className="font-heading text-xl" style={{ color: C.mintLight }}>Gold Clipper ✨</span>
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(184,224,212,0.6)" }}>
                Груминг с душой. Любим каждого хвостика.
              </p>
            </div>

            {/* Contacts */}
            <div>
              <div className="font-body text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: C.mint }}>Контакты</div>
              <ul className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (999) 123-45-67", href: "tel:+79991234567" },
                  { icon: "MessageCircle", text: "@gold_clipper", href: "https://t.me/gold_clipper" },
                  { icon: "MapPin", text: "Москва, ул. ваша, дом X (рядом с метро)", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="flex items-center gap-2 font-body text-sm transition-colors"
                      style={{ color: "rgba(184,224,212,0.7)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.mintLight)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,224,212,0.7)")}
                    >
                      <Icon name={item.icon} size={14} fallback="Info" />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav */}
            <div>
              <div className="font-body text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: C.mint }}>Меню</div>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-body text-sm transition-colors"
                      style={{ color: "rgba(184,224,212,0.6)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.mintLight)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,224,212,0.6)")}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(184,224,212,0.12)" }}
          >
            <p className="font-body text-xs" style={{ color: "rgba(184,224,212,0.35)" }}>
              © 2026 Gold Clipper — груминг с душой
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="font-body text-xs transition-colors" style={{ color: "rgba(184,224,212,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.mintLight)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,224,212,0.35)")}
              >
                Политика конфиденциальности
              </a>
              <span style={{ color: "rgba(184,224,212,0.2)" }}>|</span>
              <a href="#" className="font-body text-xs" style={{ color: "rgba(184,224,212,0.35)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.mintLight)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,224,212,0.35)")}
              >
                Ваши данные в безопасности
              </a>
              <button
                onClick={scrollTop}
                className="ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: C.mint, color: C.white }}
              >
                <Icon name="ArrowUp" size={14} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
