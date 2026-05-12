const C = {
  bg: "#F4FCF9",
  dark: "#2E4A3A",
  mint: "#3BA58F",
  mintLight: "#B8E0D4",
  mintMid: "#D6F0E9",
  peach: "#E8A25E",
  white: "#ffffff",
  dark2: "#1C3028",
};

/* ── tiny helpers ── */
const Tag = ({ children, color = C.mint }: { children: React.ReactNode; color?: string }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body"
    style={{ backgroundColor: `${color}22`, color }}
  >
    {children}
  </span>
);

const SlideLabel = ({ n, label }: { n: number; label: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-heading shrink-0"
      style={{ backgroundColor: C.mint, color: C.white }}
    >
      {n}
    </div>
    <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: C.mint }}>
      {label}
    </span>
  </div>
);

const Dot = () => (
  <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 shrink-0" style={{ backgroundColor: C.mint }} />
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-1 font-body text-base leading-relaxed" style={{ color: "rgba(46,74,58,0.8)" }}>
    <Dot />
    <span>{children}</span>
  </li>
);

/* ── color swatch ── */
const Swatch = ({ hex, name, usage }: { hex: string; name: string; usage: string }) => (
  <div className="flex items-center gap-4">
    <div
      className="w-14 h-14 rounded-2xl shrink-0 border"
      style={{ backgroundColor: hex, borderColor: "rgba(46,74,58,0.08)" }}
    />
    <div>
      <div className="font-heading text-base font-bold" style={{ color: C.dark }}>{hex}</div>
      <div className="font-body text-sm font-semibold" style={{ color: C.mint }}>{name}</div>
      <div className="font-body text-xs" style={{ color: "rgba(46,74,58,0.55)" }}>{usage}</div>
    </div>
  </div>
);

/* ── font sample ── */
const FontRow = ({
  family,
  weight,
  role,
  sample,
  size = "text-2xl",
}: {
  family: string;
  weight: string;
  role: string;
  sample: string;
  size?: string;
}) => (
  <div className="flex items-center gap-6 py-4" style={{ borderBottom: `1px solid ${C.mintLight}` }}>
    <div className="w-40 shrink-0">
      <div className="font-body text-sm font-semibold" style={{ color: C.dark }}>{family}</div>
      <div className="font-body text-xs" style={{ color: "rgba(46,74,58,0.5)" }}>{weight}</div>
      <Tag>{role}</Tag>
    </div>
    <div className={`${size} font-heading`} style={{ fontFamily: family === "Quicksand" ? "'Cabin', sans-serif" : "'Lato', sans-serif", fontWeight: weight === "Regular" || weight === "Light" ? 400 : weight === "SemiBold" ? 600 : 700, color: C.dark }}>
      {sample}
    </div>
  </div>
);

/* ── mock browser frame ── */
const BrowserMock = ({ children, title = "goldclipper.ru" }: { children: React.ReactNode; title?: string }) => (
  <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: C.mintLight }}>
    <div className="flex items-center gap-2 px-4 h-10" style={{ backgroundColor: "#E8F5F0" }}>
      <div className="flex gap-1.5">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div
        className="flex-1 mx-4 h-6 rounded-md flex items-center px-3 font-body text-xs"
        style={{ backgroundColor: C.white, color: "rgba(46,74,58,0.5)" }}
      >
        {title}
      </div>
    </div>
    {children}
  </div>
);

/* ── phone mock ── */
const PhoneMock = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4"
    style={{ borderColor: C.dark, width: 220, minHeight: 420 }}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-2xl z-10" style={{ backgroundColor: C.dark }} />
    <div className="pt-5 overflow-hidden">{children}</div>
  </div>
);

/* ── site preview (mini) ── */
const SiteMiniPreview = () => (
  <div style={{ backgroundColor: C.bg, fontFamily: "'Lato', sans-serif", fontSize: 9, color: C.dark, padding: "0" }}>
    {/* mini header */}
    <div style={{ backgroundColor: C.white, padding: "6px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${C.mintLight}` }}>
      <span style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 10, color: C.dark }}>Gold Clipper ✨</span>
      <div style={{ backgroundColor: C.mint, color: C.white, borderRadius: 20, padding: "2px 8px", fontSize: 8, fontWeight: 600 }}>🐾 Записаться</div>
    </div>
    {/* mini hero */}
    <div style={{ padding: "16px 12px 12px", background: `linear-gradient(135deg, ${C.bg} 60%, ${C.mintMid})` }}>
      <div style={{ backgroundColor: C.mintMid, color: C.mint, borderRadius: 20, padding: "2px 8px", fontSize: 7, fontWeight: 600, display: "inline-block", marginBottom: 6 }}>Груминг-салон в Москве</div>
      <div style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 15, lineHeight: 1.2, marginBottom: 6 }}>
        Gold Clipper —<br />груминг, который<br /><span style={{ color: C.mint }}>не пугает</span> 🐶🐱
      </div>
      <div style={{ fontSize: 8, color: "rgba(46,74,58,0.65)", marginBottom: 10, lineHeight: 1.4 }}>
        Стрижём, моем, любим. Без стресса, без криков.
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ backgroundColor: C.mint, color: C.white, borderRadius: 20, padding: "4px 10px", fontSize: 8, fontWeight: 700 }}>🧡 Записаться</div>
        <div style={{ border: `1px solid ${C.mintLight}`, borderRadius: 20, padding: "4px 10px", fontSize: 8, color: C.dark }}>Услуги</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginTop: 10 }}>
        {["🧼 Чисто", "📱 Видео", "😌 Без страха", "🩺 Ветврач"].map((t) => (
          <div key={t} style={{ backgroundColor: C.white, border: `1px solid ${C.mintLight}`, borderRadius: 8, padding: "4px 6px", fontSize: 7, textAlign: "center" }}>{t}</div>
        ))}
      </div>
    </div>
    {/* mini services */}
    <div style={{ padding: "10px 12px", backgroundColor: C.white }}>
      <div style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 10, marginBottom: 6 }}>Что умеем</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        {["✂️ Стрижка\n1 800 ₽", "🛁 Всё вкл.\nот 2 500 ₽", "🍃 Кошки\n1 500 ₽", "✨ SPA\n+800 ₽"].map((s) => (
          <div key={s} style={{ backgroundColor: C.bg, border: `1px solid ${C.mintLight}`, borderRadius: 8, padding: "5px 6px", fontSize: 7.5, lineHeight: 1.5, whiteSpace: "pre-line" }}>{s}</div>
        ))}
      </div>
    </div>
  </div>
);

/* ── component showcase ── */
const ComponentBox = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <div className="font-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(46,74,58,0.45)" }}>{label}</div>
    {children}
  </div>
);

import React from "react";

export default function Portfolio() {
  return (
    <div style={{ backgroundColor: C.dark2, fontFamily: "'Lato', sans-serif", minHeight: "100vh" }}>

      {/* top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14" style={{ backgroundColor: "rgba(28,48,40,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(59,165,143,0.15)" }}>
        <a href="/" className="font-heading text-sm font-bold" style={{ color: C.mintLight }}>
          ← Вернуться на сайт
        </a>
        <span className="font-heading text-sm font-bold" style={{ color: C.mint }}>
          Gold Clipper — Портфолио
        </span>
        <span className="font-body text-xs" style={{ color: "rgba(184,224,212,0.4)" }}>2026</span>
      </nav>

      <div className="pt-14">

        {/* ═══ СЛАЙД 1 — ОБЛОЖКА ═══ */}
        <section style={{ background: `linear-gradient(135deg, ${C.dark2} 0%, #1A3D2E 50%, #0F2920 100%)`, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
          {/* decor blobs */}
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(59,165,143,0.15), transparent 70%)`, top: "-100px", right: "-200px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(232,162,94,0.1), transparent 70%)`, bottom: "60px", left: "-80px", pointerEvents: "none" }} />
          {/* paw prints decor */}
          <div style={{ position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", opacity: 0.06, fontSize: 180, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>🐾</div>

          <div className="max-w-7xl mx-auto px-8 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex gap-2 flex-wrap mb-8">
                  <Tag>Веб-дизайн</Tag>
                  <Tag>UI/UX</Tag>
                  <Tag color={C.peach}>Брендинг</Tag>
                  <Tag color={C.peach}>2026</Tag>
                </div>

                <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: C.white }}>
                  Gold<br />
                  <span style={{ color: C.mint }}>Clipper</span>
                </h1>

                <p className="font-body text-xl leading-relaxed mb-4" style={{ color: "rgba(184,224,212,0.75)" }}>
                  Лендинг для груминг-салона
                </p>
                <p className="font-body text-lg mb-10 italic" style={{ color: "rgba(184,224,212,0.5)" }}>
                  «Безстресс-груминг с ветконтролем и видеонаблюдением»
                </p>

                <div className="space-y-2">
                  {[
                    { label: "Направление", val: "Веб-дизайн, UI/UX, брендинг" },
                    { label: "Ниша", val: "Груминг (уход за собаками и кошками)" },
                    { label: "Школа", val: "Yudaev School" },
                    { label: "Год", val: "2026" },
                  ].map((r) => (
                    <div key={r.label} className="flex gap-3 font-body text-sm">
                      <span style={{ color: "rgba(184,224,212,0.4)", minWidth: 110 }}>{r.label}</span>
                      <span style={{ color: "rgba(184,224,212,0.85)" }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right: browser mock */}
              <div className="hidden lg:block">
                <BrowserMock>
                  <SiteMiniPreview />
                </BrowserMock>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 2 — О ПРОЕКТЕ ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={2} label="О проекте" />
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl mb-6" style={{ color: C.dark }}>О проекте</h2>
                <p className="font-body text-lg leading-relaxed mb-6" style={{ color: "rgba(46,74,58,0.8)" }}>
                  Gold Clipper — это концепция лендинга для груминг-салона, ориентированного на владельцев собак и кошек с запросом на безопасный и комфортный уход.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "rgba(46,74,58,0.7)" }}>
                  Задача: разработать современный, чистый и доверительный интерфейс, который закрывает ключевые боли ЦА.
                </p>
              </div>
              <div className="space-y-4">
                <div className="font-body text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: C.mint }}>Закрытые боли</div>
                {[
                  { emoji: "😰", text: "Страх стресса у питомца" },
                  { emoji: "🦠", text: "Небезопасная стерилизация инструментов" },
                  { emoji: "👁️", text: "Отсутствие прозрачности процесса" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}>
                    <span className="text-2xl shrink-0">{item.emoji}</span>
                    <span className="font-body text-base" style={{ color: C.dark }}>{item.text}</span>
                  </div>
                ))}
                <p className="font-body text-sm pt-2" style={{ color: "rgba(46,74,58,0.5)" }}>
                  Проект выполнен в рамках обучения в школе Yudaev School. Тема экзамена — дизайн лендинга для груминг-салона.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 3 — ЦЕЛЕВАЯ АУДИТОРИЯ ═══ */}
        <section style={{ backgroundColor: C.white, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={3} label="Целевая аудитория" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4" style={{ color: C.dark }}>Целевая аудитория</h2>
            <p className="font-body text-lg mb-12" style={{ color: "rgba(46,74,58,0.65)" }}>
              Владельцы собак и кошек, 25–45 лет, доход средний и выше.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl" style={{ backgroundColor: C.bg, border: `1.5px solid ${C.mintLight}` }}>
                <div className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.peach }}>Боли и страхи</div>
                <ul className="space-y-3">
                  {[
                    "Питомец боится стрижки и испытывает стресс",
                    "Нет времени везти животное в салон",
                    "Страх, что навредят или заразят инфекцией",
                    "Животное ведёт себя агрессивно или тревожно",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 font-body text-base" style={{ color: "rgba(46,74,58,0.8)" }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.peach }}>✗</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl" style={{ backgroundColor: C.mintMid, border: `1.5px solid ${C.mint}` }}>
                <div className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.mint }}>Потребности</div>
                <ul className="space-y-3">
                  {[
                    "Безопасный и спокойный груминг",
                    "Индивидуальный подход",
                    "Прозрачность (можно наблюдать)",
                    "Ветеринарный контроль",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 font-body text-base" style={{ color: C.dark }}>
                      <span className="shrink-0 mt-0.5" style={{ color: C.mint }}>✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 4 — СТРУКТУРА ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={4} label="Структура" />
            <h2 className="font-heading text-4xl md:text-5xl mb-12" style={{ color: C.dark }}>Структура лендинга</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: 1, title: "Хедер + Hero", desc: "Главный экран с УТП" },
                { n: 2, title: "Для кого", desc: "Сегментация аудитории" },
                { n: 3, title: "Услуги и цены", desc: "Каталог с ценами" },
                { n: 4, title: "Почему мы", desc: "5 ключевых преимуществ" },
                { n: 5, title: "FAQ", desc: "Вопросы и ответы" },
                { n: 6, title: "Отзывы", desc: "Реальные клиенты" },
                { n: 7, title: "Запись", desc: "Форма онлайн-записи" },
                { n: 8, title: "Футер", desc: "Контакты и навигация" },
              ].map((item) => (
                <div key={item.n} className="p-5 rounded-2xl hover-lift" style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-heading mb-3" style={{ backgroundColor: C.mint, color: C.white }}>
                    {item.n}
                  </div>
                  <div className="font-heading text-base font-bold mb-1" style={{ color: C.dark }}>{item.title}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(46,74,58,0.55)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 5 — HERO ═══ */}
        <section style={{ backgroundColor: C.white, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={5} label="Первый экран" />
            <h2 className="font-heading text-4xl md:text-5xl mb-12" style={{ color: C.dark }}>Первый экран</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: C.mint }}>Заголовок</div>
                    <div className="font-heading text-xl font-bold" style={{ color: C.dark }}>Gold Clipper — безстресс-груминг в Москве</div>
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: C.mint }}>Подзаголовок</div>
                    <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(46,74,58,0.7)" }}>
                      Стрижка, гигиена и SPA без седации. Ветеринарный осмотр перед процедурой. Видеонаблюдение в боксе.
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="font-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: C.mint }}>Блок доверия</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["🧼 Стерильные инструменты", "📱 Онлайн-трансляция", "😌 Без успокоительных", "🩺 Бесплатный ветосмотр"].map((b) => (
                      <div key={b} className="px-3 py-2 rounded-xl font-body text-xs font-medium" style={{ backgroundColor: C.mintMid, color: C.dark }}>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: C.mint }}>CTA-кнопка</div>
                  <div className="inline-block px-6 py-3 rounded-full font-body text-sm font-semibold" style={{ backgroundColor: C.mint, color: C.white }}>
                    🐾 Записать питомца
                  </div>
                </div>
              </div>

              {/* mini hero preview */}
              <BrowserMock>
                <div style={{ backgroundColor: C.bg, padding: "20px 16px" }}>
                  <div style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.25, color: C.dark, marginBottom: 8 }}>
                    Gold Clipper —<br />груминг, который<br /><span style={{ color: C.mint }}>не пугает</span> 🐶🐱
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "rgba(46,74,58,0.65)", marginBottom: 14, lineHeight: 1.5 }}>
                    Стрижём, моем, любим. Без стресса.
                  </div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                    <div style={{ backgroundColor: C.mint, color: C.white, borderRadius: 24, padding: "6px 14px", fontSize: 11, fontWeight: 700 }}>🧡 Записаться</div>
                    <div style={{ border: `1.5px solid ${C.mintLight}`, borderRadius: 24, padding: "6px 14px", fontSize: 11, color: C.dark }}>Услуги</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    {["🧼 Чисто", "📱 Видео", "😌 Без криков", "🩺 Ветврач"].map((b) => (
                      <div key={b} style={{ backgroundColor: C.white, border: `1px solid ${C.mintLight}`, borderRadius: 10, padding: "6px 8px", fontSize: 10, textAlign: "center", color: C.dark }}>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </BrowserMock>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 6 — ПЕРЕБИВКА 1 ═══ */}
        <section style={{ background: `linear-gradient(135deg, ${C.mint} 0%, #2A8A76 100%)`, padding: "96px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.06, fontSize: 120, display: "flex", alignItems: "center", justifyContent: "center", gap: 40, pointerEvents: "none", userSelect: "none" }}>
            🐾🐾🐾
          </div>
          <div className="relative z-10">
            <div style={{ fontSize: 64, marginBottom: 24 }}>🧼&nbsp;&nbsp;✨&nbsp;&nbsp;🐾</div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold" style={{ color: C.white }}>
              Чистота.<br />Прозрачность.<br />Спокойствие.
            </h2>
          </div>
        </section>

        {/* ═══ СЛАЙД 7 — ПРОТОТИП ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={7} label="Прототип" />
            <h2 className="font-heading text-4xl md:text-5xl mb-6" style={{ color: C.dark }}>Прототип</h2>
            <p className="font-body text-lg leading-relaxed mb-12" style={{ color: "rgba(46,74,58,0.7)", maxWidth: 540 }}>
              Прототип помогает визуализировать структуру и навигацию, облегчает коммуникацию с заказчиком.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Последовательность блоков", desc: "Правильный порядок контента при скролле: от боли к решению к действию" },
                { title: "Состояния кнопок и форм", desc: "Hover, focus, active — каждый интерактивный элемент имеет три состояния" },
                { title: "Адаптивное поведение", desc: "Проверено на ширинах 320 px, 768 px, 1200 px — переполнений нет" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: C.white, border: `1.5px solid ${C.mintLight}` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl" style={{ backgroundColor: C.mintMid }}>
                    {["🗺️", "🖱️", "📐"][i]}
                  </div>
                  <div className="font-heading text-base font-bold mb-2" style={{ color: C.dark }}>{item.title}</div>
                  <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(46,74,58,0.65)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 8 — ДЕСКТОП ═══ */}
        <section style={{ backgroundColor: C.white, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={8} label="Десктоп" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4" style={{ color: C.dark }}>Главная страница. Десктоп</h2>
            <p className="font-body text-base mb-10" style={{ color: "rgba(46,74,58,0.6)" }}>
              Лендинг выполнен на сетке 12 колонок. Ширина контейнера — 1200 px.
            </p>

            <BrowserMock>
              <div style={{ height: 520, overflowY: "auto" }}>
                <SiteMiniPreview />
                {/* extended preview */}
                <div style={{ backgroundColor: C.white, padding: "14px 12px" }}>
                  <div style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 11, marginBottom: 8, color: C.dark }}>Почему нас любят</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                    {["🔒 Безопасно", "🧘 Без стресса", "📸 Видеозапись", "🩺 Ветврач", "💎 Косметика"].map((s) => (
                      <div key={s} style={{ backgroundColor: C.bg, border: `1px solid ${C.mintLight}`, borderRadius: 8, padding: "5px 6px", fontSize: 7.5, textAlign: "center", color: C.dark }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ backgroundColor: C.bg, padding: "14px 12px" }}>
                  <div style={{ fontFamily: "'Cabin', sans-serif", fontWeight: 700, fontSize: 11, marginBottom: 8, color: C.dark }}>Отзывы</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
                    {["Анна и корги Сева ⭐⭐⭐⭐⭐", "Михаил и кошка Мотя ⭐⭐⭐⭐⭐", "Елена и той-терьер Боня ⭐⭐⭐⭐⭐"].map((r) => (
                      <div key={r} style={{ backgroundColor: C.white, border: `1px solid ${C.mintLight}`, borderRadius: 8, padding: "6px", fontSize: 7.5, color: C.dark, lineHeight: 1.4 }}>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ backgroundColor: C.dark, padding: "12px", textAlign: "center" }}>
                  <div style={{ color: C.mint, fontSize: 9, fontWeight: 700, marginBottom: 4 }}>Gold Clipper ✨</div>
                  <div style={{ color: "rgba(184,224,212,0.5)", fontSize: 7.5 }}>© 2026 Gold Clipper — груминг с душой</div>
                </div>
              </div>
            </BrowserMock>
          </div>
        </section>

        {/* ═══ СЛАЙД 9 — МОБАЙЛ ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={9} label="Мобильная версия" />
            <h2 className="font-heading text-4xl md:text-5xl mb-6" style={{ color: C.dark }}>Мобильная адаптация</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <ul className="space-y-3">
                  <Li>Сетка становится 4 колонками</Li>
                  <Li>Отступы уменьшаются для комфортного чтения</Li>
                  <Li>Шрифты масштабируются на 20–25%</Li>
                  <Li>Навигация трансформируется в бургер-меню</Li>
                  <Li>Карточки услуг — в одну колонку</Li>
                  <Li>Форма записи занимает всю ширину экрана</Li>
                </ul>
                <div className="p-5 rounded-2xl font-body text-sm leading-relaxed" style={{ backgroundColor: C.mintMid, color: C.dark }}>
                  Пользовательский опыт остаётся комфортным на любом устройстве. Все интерактивные зоны — не менее 44 px.
                </div>
              </div>

              {/* phone mock */}
              <div className="flex justify-center gap-8">
                <PhoneMock>
                  <div style={{ fontSize: 8, transform: "scale(0.85)", transformOrigin: "top left", width: "118%" }}>
                    <SiteMiniPreview />
                  </div>
                </PhoneMock>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 10 — ЦВЕТА ═══ */}
        <section style={{ backgroundColor: C.white, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={10} label="Цвета" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4" style={{ color: C.dark }}>Колористика</h2>
            <p className="font-body text-lg mb-12 italic" style={{ color: "rgba(46,74,58,0.55)" }}>«Мятная свежесть»</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { hex: "#F4FCF9", name: "Бледная мята", usage: "Основной фон сайта" },
                { hex: "#3BA58F", name: "Мята — акцент", usage: "Кнопки, иконки, важные элементы" },
                { hex: "#B8E0D4", name: "Светлая мята", usage: "Фон карточек, разделители" },
                { hex: "#2E4A3A", name: "Тёмный текст", usage: "Основной текст, заголовки" },
                { hex: "#E8A25E", name: "Тёплый персик", usage: "Скидки, акции, hover-эффекты" },
              ].map((s) => (
                <Swatch key={s.hex} {...s} />
              ))}
            </div>

            {/* demo strip */}
            <div className="rounded-3xl overflow-hidden flex h-16">
              {["#F4FCF9", "#3BA58F", "#B8E0D4", "#2E4A3A", "#E8A25E"].map((c) => (
                <div key={c} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="font-body text-sm mt-4 text-center" style={{ color: "rgba(46,74,58,0.45)" }}>
              Ассоциации: чистота, свежесть, спокойствие, доверие
            </p>
          </div>
        </section>

        {/* ═══ СЛАЙД 11 — ШРИФТЫ ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={11} label="Шрифты" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4" style={{ color: C.dark }}>Типографика</h2>
            <p className="font-body text-base mb-10" style={{ color: "rgba(46,74,58,0.55)" }}>
              Шрифтовая пара создаёт ощущение воздушности, современности и при этом остаётся максимально читаемой.
            </p>

            <div style={{ backgroundColor: C.white, borderRadius: 24, padding: "8px 24px", border: `1.5px solid ${C.mintLight}` }}>
              <FontRow family="Quicksand" weight="Bold" role="H1–H3" sample="Gold Clipper" size="text-4xl" />
              <FontRow family="Quicksand" weight="SemiBold" role="H4–H5" sample="Груминг с душой" size="text-2xl" />
              <FontRow family="Quicksand" weight="Medium" role="Кнопки" sample="Записаться сейчас" size="text-xl" />
              <FontRow family="Poppins" weight="Regular" role="Основной текст" sample="Стрижём, моем, любим. Без стресса." size="text-lg" />
              <FontRow family="Poppins" weight="SemiBold" role="Цены" sample="2 500 ₽" size="text-2xl" />
              <FontRow family="Poppins" weight="Light" role="Мелкий текст" sample="Политика конфиденциальности" size="text-sm" />
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 12 — КОМПОНЕНТЫ ═══ */}
        <section style={{ backgroundColor: C.white, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={12} label="Компоненты" />
            <h2 className="font-heading text-4xl md:text-5xl mb-12" style={{ color: C.dark }}>Компоненты</h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* buttons */}
              <ComponentBox label="Кнопки">
                <div className="space-y-3">
                  <div>
                    <div className="font-body text-xs mb-1.5" style={{ color: "rgba(46,74,58,0.4)" }}>Основная</div>
                    <button className="px-6 py-3 rounded-full font-body font-semibold text-sm" style={{ backgroundColor: C.mint, color: C.white }}>
                      🐾 Записать хвостика
                    </button>
                  </div>
                  <div>
                    <div className="font-body text-xs mb-1.5" style={{ color: "rgba(46,74,58,0.4)" }}>Вторичная</div>
                    <button className="px-6 py-3 rounded-full font-body font-semibold text-sm border-2" style={{ borderColor: C.mint, color: C.mint, backgroundColor: "transparent" }}>
                      Смотреть услуги
                    </button>
                  </div>
                  <div>
                    <div className="font-body text-xs mb-1.5" style={{ color: "rgba(46,74,58,0.4)" }}>Акцент (скидки)</div>
                    <button className="px-6 py-3 rounded-full font-body font-semibold text-sm" style={{ backgroundColor: C.peach, color: C.white }}>
                      🎁 Акция: 6-й визит бесплатно
                    </button>
                  </div>
                </div>
              </ComponentBox>

              {/* service card */}
              <ComponentBox label="Карточка услуги">
                <div className="p-6 rounded-3xl" style={{ backgroundColor: C.bg, border: `1.5px solid ${C.mintLight}`, maxWidth: 260 }}>
                  <div className="text-3xl mb-4">✂️</div>
                  <div className="font-heading text-lg font-bold mb-1" style={{ color: C.dark }}>Гигиеническая стрижка</div>
                  <div className="font-body text-sm mb-4" style={{ color: "rgba(46,74,58,0.6)" }}>малыши до 5 кг</div>
                  <div className="font-heading text-2xl font-bold mb-4" style={{ color: C.mint }}>1 800 ₽</div>
                  <button className="w-full py-2.5 rounded-xl font-body text-sm font-semibold" style={{ backgroundColor: C.mintMid, color: C.dark }}>
                    🐾 Хочу так же
                  </button>
                </div>
              </ComponentBox>

              {/* input */}
              <ComponentBox label="Поле ввода">
                <div className="space-y-2" style={{ maxWidth: 320 }}>
                  <div>
                    <div className="font-body text-xs mb-1" style={{ color: "rgba(46,74,58,0.4)" }}>Default</div>
                    <input
                      readOnly
                      value=""
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none"
                      style={{ backgroundColor: C.bg, border: `2px solid ${C.mintLight}` }}
                    />
                  </div>
                  <div>
                    <div className="font-body text-xs mb-1" style={{ color: "rgba(46,74,58,0.4)" }}>Focus</div>
                    <input
                      readOnly
                      value=""
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none"
                      style={{ backgroundColor: C.bg, border: `2px solid ${C.mint}` }}
                    />
                  </div>
                </div>
              </ComponentBox>

              {/* faq accordion */}
              <ComponentBox label="FAQ-аккордеон">
                <div className="rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${C.mintLight}`, maxWidth: 320 }}>
                  <div className="px-5 py-4 font-heading text-base font-bold flex items-center justify-between" style={{ backgroundColor: C.white, color: C.dark }}>
                    <span>А если собака кусается?</span>
                    <span style={{ color: C.mint }}>▾</span>
                  </div>
                  <div className="px-5 pb-4 font-body text-sm leading-relaxed" style={{ backgroundColor: C.white, color: "rgba(46,74,58,0.7)", borderTop: `1px solid ${C.mintLight}` }}>
                    Бывает. Наденем намордник, будем аккуратны. Только предупредите заранее.
                  </div>
                </div>
                <p className="font-body text-xs mt-4" style={{ color: "rgba(46,74,58,0.4)" }}>
                  Все компоненты собраны в единую систему и легко масштабируются.
                </p>
              </ComponentBox>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 13 — ПОРТФОЛИО ДО/ПОСЛЕ ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={13} label="Портфолио" />
            <h2 className="font-heading text-4xl md:text-5xl mb-4" style={{ color: C.dark }}>Портфолио</h2>
            <p className="font-body text-base mb-12" style={{ color: "rgba(46,74,58,0.6)" }}>
              Примеры работ нашего салона. Каждый питомец — индивидуальный подход и гарантия безопасности.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { before: "🐩", after: "✨🐩", breed: "Пудель", work: "Модельная стрижка" },
                { before: "🐈", after: "✨🐈", breed: "Мейн-кун", work: "Вычёсывание + гигиена" },
                { before: "🐕", after: "✨🐕", breed: "Хаски", work: "Тримминг / вычёс" },
                { before: "🐱", after: "✨🐱", breed: "Британец", work: "Купание + уход" },
              ].map((item, i) => (
                <div key={i} className="rounded-3xl overflow-hidden" style={{ border: `1.5px solid ${C.mintLight}` }}>
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col items-center justify-center py-6 gap-2" style={{ backgroundColor: "#FFF0E0" }}>
                      <span style={{ fontSize: 40 }}>{item.before}</span>
                      <span className="font-body text-xs font-semibold" style={{ color: C.peach }}>ДО</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-6 gap-2" style={{ backgroundColor: C.mintMid }}>
                      <span style={{ fontSize: 40 }}>{item.after}</span>
                      <span className="font-body text-xs font-semibold" style={{ color: C.mint }}>ПОСЛЕ</span>
                    </div>
                  </div>
                  <div className="p-4" style={{ backgroundColor: C.white }}>
                    <div className="font-heading text-sm font-bold" style={{ color: C.dark }}>{item.breed}</div>
                    <div className="font-body text-xs" style={{ color: "rgba(46,74,58,0.6)" }}>{item.work}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-sm mt-8 text-center" style={{ color: "rgba(46,74,58,0.4)" }}>
              Больше примеров — в галерее ниже.
            </p>
          </div>
        </section>

        {/* ═══ СЛАЙД 14 — ПЕРЕБИВКА 2 ═══ */}
        <section style={{ background: `linear-gradient(135deg, #1C3028 0%, ${C.dark} 100%)`, padding: "96px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.04, fontSize: 200, pointerEvents: "none", userSelect: "none" }}>
            🐾
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-8">
            <div style={{ fontSize: 72, marginBottom: 24 }}>🐶</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold" style={{ color: C.white }}>
              Результат,<br />который говорит<br /><span style={{ color: C.mint }}>сам за себя.</span>
            </h2>
          </div>
        </section>

        {/* ═══ СЛАЙД 15 — ИТОГИ ═══ */}
        <section style={{ backgroundColor: C.bg, padding: "96px 0" }}>
          <div className="max-w-5xl mx-auto px-8">
            <SlideLabel n={15} label="Итоги" />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl mb-8" style={{ color: C.dark }}>Итоги проекта</h2>
                <ul className="space-y-4">
                  {[
                    "Разработан современный лендинг для груминг-салона",
                    "Закрыты ключевые боли ЦА: стресс, безопасность, прозрачность",
                    "Создана единая визуальная система в палитре «Мятная свежесть»",
                    "Добавлены адаптивы под мобильные устройства",
                    "Проект готов к передаче в разработку",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-base" style={{ color: "rgba(46,74,58,0.85)" }}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" style={{ backgroundColor: C.mint, color: C.white }}>{i + 1}</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 font-heading text-2xl font-bold" style={{ color: C.mint }}>
                  Gold Clipper — груминг с душой.
                </div>
              </div>

              {/* final mockup */}
              <div className="flex flex-col items-center gap-6">
                <div style={{ transform: "perspective(800px) rotateY(-4deg)", transformOrigin: "right center" }}>
                  <BrowserMock>
                    <div style={{ height: 220, overflow: "hidden" }}>
                      <SiteMiniPreview />
                    </div>
                  </BrowserMock>
                </div>
                <div style={{ transform: "perspective(800px) rotateY(4deg)", transformOrigin: "left center" }}>
                  <PhoneMock>
                    <div style={{ fontSize: 8, transform: "scale(0.85)", transformOrigin: "top left", width: "118%" }}>
                      <SiteMiniPreview />
                    </div>
                  </PhoneMock>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ СЛАЙД 16 — КОНТАКТЫ ═══ */}
        <section style={{ background: `linear-gradient(135deg, ${C.dark2} 0%, #1A3D2E 100%)`, padding: "96px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, rgba(59,165,143,0.12), transparent 70%)`, top: "-80px", right: "-100px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, rgba(232,162,94,0.08), transparent 70%)`, bottom: "-60px", left: "-80px", pointerEvents: "none" }} />

          <div className="relative z-10 max-w-2xl mx-auto px-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold" style={{ backgroundColor: C.mint, color: C.white }}>
                GC
              </div>
              <span className="font-heading text-2xl font-bold" style={{ color: C.mintLight }}>Gold Clipper ✨</span>
            </div>

            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4" style={{ color: C.white }}>
              Спасибо<br />за внимание!
            </h2>
            <p className="font-body text-lg mb-12" style={{ color: "rgba(184,224,212,0.6)" }}>
              Буду рад сотрудничеству
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                { emoji: "🎓", label: "Школа", val: "Yudaev School" },
                { emoji: "📅", label: "Год", val: "2026" },
                { emoji: "🎨", label: "Направление", val: "UI/UX, Веб" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(59,165,143,0.1)", border: "1px solid rgba(59,165,143,0.2)" }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{item.emoji}</div>
                  <div className="font-body text-xs" style={{ color: "rgba(184,224,212,0.5)" }}>{item.label}</div>
                  <div className="font-heading text-base font-bold" style={{ color: C.mintLight }}>{item.val}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-10">
              {[
                { icon: "✉️", text: "@gold_clipper", href: "https://t.me/gold_clipper" },
                { icon: "🌐", text: "goldclipper.ru", href: "#" },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  className="flex items-center justify-center gap-2 font-body text-base transition-colors"
                  style={{ color: "rgba(184,224,212,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.mintLight)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(184,224,212,0.7)")}
                >
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </a>
              ))}
            </div>

            <a
              href="/"
              className="inline-block px-8 py-4 rounded-full font-heading text-lg font-bold transition-all hover:scale-105"
              style={{ backgroundColor: C.mint, color: C.white }}
            >
              Смотреть сайт →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
