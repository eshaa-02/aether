import React, { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================
   AETHER — Premium Luxury Fragrance Experience
   ============================================================ */

/* Point this at wherever your /public/images folder is served from.
   Drop your files in public/images with these names, or edit the
   paths below to match your own filenames. */
const img = (file) => `/images/${file}`;

const NAV_LINKS = [
  { label: "Shop", href: "#collection" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#story" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const TONE_HEX = {
  champagne: ["#F3D9A6", "#B5813C"],
  amber: ["#E3934F", "#7A3A16"],
  aqua: ["#4FC79A", "#0E5A44"],
  rose: ["#E88BAE", "#7A1F49"],
  smoke: ["#B48BD1", "#3A2049"],
};

const PRODUCTS = [
  {
    id: "01",
    name: "AETHER NO. 01",
    title: "Lumière",
    family: "Citrus Floral",
    price: "$210",
    color: "champagne",
    image: img("lumiere.png"),
    desc: "The first hour of daylight through linen curtains. Bergamot and pear open into an iris heart, settling on skin-warm musk.",
    notes: {
      top: ["Bergamot", "Pear", "Pink Pepper"],
      heart: ["Iris", "Jasmine", "Neroli"],
      base: ["White Musk", "Cedarwood"],
    },
  },
  {
    id: "02",
    name: "AETHER NO. 02",
    title: "Noctis",
    family: "Amber Woods",
    price: "$235",
    color: "amber",
    image: img("noctis.png"),
    desc: "A room after the guests have left. Dark amber and smoked woods, low and unhurried, worn like a second skin.",
    notes: {
      top: ["Cardamom", "Blood Orange"],
      heart: ["Oud", "Labdanum"],
      base: ["Amber", "Vetiver", "Tonka Bean"],
    },
  },
  {
    id: "03",
    name: "AETHER NO. 03",
    title: "Pétrichor",
    family: "Green Aquatic",
    price: "$195",
    color: "aqua",
    image: img("petrichor.png"),
    desc: "The exact minute rain stops on hot stone. Green galbanum and violet leaf over a mineral, rain-soaked base.",
    notes: {
      top: ["Violet Leaf", "Galbanum"],
      heart: ["Fig", "Lily of the Valley"],
      base: ["Vetiver", "Ambroxan"],
    },
  },
  {
    id: "04",
    name: "AETHER NO. 04",
    title: "Velours",
    family: "Powdery Musk",
    price: "$220",
    color: "rose",
    image: img("velours.png"),
    desc: "The inside of a wrist, an hour after perfume was last applied. Soft powder and skin musk, almost bare.",
    notes: {
      top: ["Almond Blossom", "Mandarin"],
      heart: ["Iris Butter", "Heliotrope"],
      base: ["Musk", "Sandalwood"],
    },
  },
  {
    id: "05",
    name: "AETHER NO. 05",
    title: "Fumée",
    family: "Smoked Incense",
    price: "$245",
    color: "smoke",
    image: img("fumee.png"),
    desc: "A candle blown out in a stone chapel. Smoked incense and dry woods, with a single thread of dark honey.",
    notes: {
      top: ["Saffron", "Pink Pepper"],
      heart: ["Incense", "Black Tea"],
      base: ["Dark Honey", "Guaiac Wood"],
    },
  },
];

const JOURNAL = [
  {
    cat: "Craft",
    date: "12.03",
    title: "The Chemistry of Memory",
    blurb: "Why certain molecules can return you to a room you haven't stood in for a decade.",
    image: img("journal-1.jpg"),

    content: `
  Certain scents have a strange ability to make us remember places, people, and moments that we thought we had forgotten.
  
  A fragrance does not simply live on the skin. It becomes part of memory.
  
  The reason scent feels so intimate is that our sense of smell is closely connected with the areas of the brain responsible for emotion and memory. A single note of cedar, vanilla, jasmine, or rain can suddenly bring back a childhood room, an old summer evening, or someone we once loved.
  
  At AETHER, we believe fragrance should feel less like an accessory and more like a personal archive.
  
  The most beautiful fragrances are not always the loudest ones. Sometimes they are quiet. They stay close to the skin and reveal themselves slowly, becoming part of the person wearing them.
  
  A fragrance becomes truly yours when it begins to carry your memories.
  
  And perhaps that is the real chemistry of scent: not what a perfume smells like, but what it makes you remember.
  `
  },
  {
    cat: "Culture",
    date: "08.03",
    title: "A Language Without Words",
    blurb: "How fragrance speaks before we ever say a word.",
    image: img("journal-2.jpg"),

    content: `
  Before we introduce ourselves, fragrance can already tell a story.
  
  It can feel warm or distant, mysterious or familiar, soft or unmistakably bold. Unlike clothing or jewellery, fragrance moves with us. It changes with our skin, our surroundings, and even the weather.
  
  This is what makes perfume so personal.
  
  There is no single fragrance that means the same thing to everyone. A rose can remind one person of a garden and another of an old perfume bottle sitting on a grandmother's dresser.
  
  Fragrance is therefore a language without words.
  
  At AETHER, we approach each composition as a quiet conversation between ingredients. Notes are selected not simply because they smell beautiful, but because they create atmosphere.
  
  The opening introduces the mood.
  
  The heart reveals the personality.
  
  The base is what remains after everything else has disappeared.
  
  Perhaps the most interesting thing about perfume is that people may forget exactly what you wore, but they rarely forget how your presence made them feel.
  
  That is the language of fragrance.
  `
  },
  {
    cat: "Ritual",
    date: "01.03",
    title: "The Art of Wearing Scent",
    blurb: "A slower, more intimate approach to making fragrance part of your ritual.",
    image: img("journal-3.jpg"),

    content: `
  Wearing perfume does not have to be a final step before leaving the house.
  
  It can be a ritual.
  
  A quiet moment in the morning. A pause before getting dressed. A familiar gesture that marks the beginning of a new day.
  
  The way fragrance is applied can change the experience completely. A small amount on the pulse points allows warmth from the skin to gently release the composition throughout the day.
  
  But there is no perfect formula.
  
  Some prefer fragrance close to the skin. Others want a softer trail that follows them through a room.
  
  The important thing is to let the fragrance become part of you rather than allowing it to overwhelm you.
  
  Give it time.
  
  The first impression is only the beginning. As the top notes disappear, the heart begins to emerge. Later, the deeper base notes remain quietly against the skin.
  
  This slow transformation is part of the beauty of perfume.
  
  Fragrance is not something you simply wear.
  
  It is something you experience.
  `
  },
];

/* ============================================================
   HOOKS
============================================================ */

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function useLockScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function Eyebrow({ children, style }) {
  return (
    <div className="ae-eyebrow" style={style}>
      {children}
    </div>
  );
}

function RevealWords({ text, className = "", delayStep = 40 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="ae-word-mask">
          <span
            className="ae-word"
            style={{
              transitionDelay: `${index * delayStep}ms`,
              opacity: inView ? 1 : 0,
              transform: inView
                ? "translateY(0) rotate(0deg)"
                : "translateY(110%) rotate(2deg)",
              filter: inView ? "blur(0px)" : "blur(6px)",
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0, y = 28 }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .9s cubic-bezier(.16,.8,.24,1) ${delay}ms,
        transform .9s cubic-bezier(.16,.8,.24,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   APP
============================================================ */

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quickView, setQuickView] = useState(null);
  const [journalArticle, setJournalArticle] = useState(null);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [cart, setCart] = useState([]);

  const heroRef = useRef(null);
  const bottleRef = useRef(null);
  const ribbonRef = useRef(null);
  const petalRef = useRef(null);
  const textRef = useRef(null);

  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  const rafId = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const reduceMotion = useRef(false);
  const pointerFine = useRef(false);

  useLockScroll(loading || cartOpen || searchOpen || menuOpen || !!quickView);

  /* Loader */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Environment */
  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    pointerFine.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  /* Cursor + parallax */
  useEffect(() => {
    if (reduceMotion.current) return;

    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;

      target.current.x = (event.clientX / innerWidth - 0.5) * 2;
      target.current.y = (event.clientY / innerHeight - 0.5) * 2;

      if (pointerFine.current && cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMove);

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;

      const { x, y } = current.current;

      if (bottleRef.current) {
        bottleRef.current.style.transform = `translate3d(${x * 10}px, ${y * 8}px, 0) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      }

      if (ribbonRef.current) {
        ribbonRef.current.style.transform = `translate3d(${x * 20}px, ${y * 6}px, 0) rotate(${x * 3}deg)`;
      }

      if (petalRef.current) {
        petalRef.current.style.transform = `translate3d(${x * 16}px, ${y * -14}px, 0)`;
      }

      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${x * -4}px, ${y * -3}px, 0)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const setCursor = useCallback((label, tone) => {
    if (!pointerFine.current || !cursorRef.current) return;

    cursorRef.current.dataset.state = label || "default";

    const [a, b] = TONE_HEX[tone] || ["#D4A15C", "#C2477B"];
    cursorRef.current.style.setProperty("--tone-a", a);
    cursorRef.current.style.setProperty("--tone-b", b);

    if (cursorLabelRef.current) {
      cursorLabelRef.current.textContent =
        label === "view" ? "VIEW" : label === "explore" ? "EXPLORE" : "";
    }
  }, []);

  /* Add to cart */
  const addToCart = (id) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === id);

      if (existing) {
        return previous.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...previous, { id, qty: 1 }];
    });

    const product = PRODUCTS.find((item) => item.id === id);

    if (product) {
      setToast(`${product.title} added to your bag`);
    }

    setCartOpen(true);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  /* Quantity */
  const changeQty = (id, delta) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* Remove */
  const removeFromCart = (id) => {
    setCart((previous) => previous.filter((item) => item.id !== id));

    setToast("Item removed from your bag");

    setTimeout(() => {
      setToast("");
    }, 1800);
  };

  const cartTotal = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    const price = product ? Number(product.price.replace("$", "")) : 0;

    return sum + price * item.qty;
  }, 0);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  /* Keyboard */
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setCartOpen(false);
        setSearchOpen(false);
        setMenuOpen(false);
        setQuickView(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = PRODUCTS.filter((product) => {
    const value = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(value) ||
      product.title.toLowerCase().includes(value) ||
      product.family.toLowerCase().includes(value)
    );
  });

  return (
    <div className="ae-root" onMouseLeave={() => setCursor(null)}>
      <GlobalStyles />

      {/* Cursor */}
      <div ref={cursorRef} className="ae-cursor" data-state="default">
        <span className="ae-cursor-dot" />
        <span ref={cursorLabelRef} className="ae-cursor-label" />
      </div>

      {/* Loader */}
      <div className={`ae-loader ${!loading ? "ae-loader-done" : ""}`}>
        <div className="ae-loader-inner">
          <span className="ae-loader-ring" />
          <div className="ae-loader-word">AETHER</div>
          <div className="ae-loader-small">PARFUMS · EST. 2026</div>
        </div>

        <div className="ae-loader-curtain ae-loader-curtain-l" />
        <div className="ae-loader-curtain ae-loader-curtain-r" />
      </div>

      {/* Toast */}
      <div className={`ae-toast ${toast ? "ae-toast-show" : ""}`}>
        {toast}
      </div>

      {/* Navbar */}
      <header className={`ae-nav ${scrolled ? "ae-nav-scrolled" : ""}`}>
        <div className="ae-nav-inner">
          <button
            className="ae-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            AETHER
          </button>

          <nav className="ae-nav-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="ae-nav-link"
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setCursor("view")}
                onMouseLeave={() => setCursor(null)}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="ae-nav-right">
            <button
              className="ae-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            <button
              className="ae-icon-btn"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping bag"
            >
              <BagIcon />
              {cartCount > 0 && <span className="ae-badge">{cartCount}</span>}
            </button>

            <button
              className="ae-burger ae-show-mobile"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`ae-mobile-menu ${menuOpen ? "ae-mobile-menu-open" : ""}`}>
        <button
          className="ae-close ae-close-rot"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="ae-mobile-brand">AETHER</div>

        <nav className="ae-mobile-links">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              style={{ transitionDelay: `${index * 70}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="ae-hero">
        <div className="ae-hero-grid">
          <div ref={textRef} className="ae-hero-text">
            <Eyebrow>AETHER — PARFUMS</Eyebrow>

            <h1 className="ae-hero-headline">
              <span className="ae-hero-line">WEAR THE</span>
              <span className="ae-hero-line ae-hero-line-italic">MEMORY.</span>
            </h1>

            <p className="ae-hero-sub">
              Five fragrances, each a fragment of a moment held in scent —
              crafted in small batches from rare naturals and quiet restraint.
            </p>

            <a
              href="#collection"
              className="ae-btn"
              onMouseEnter={() => setCursor("view")}
              onMouseLeave={() => setCursor(null)}
            >
              <span>DISCOVER THE COLLECTION</span>
              <ArrowIcon />
            </a>
          </div>

          <div className="ae-hero-art">
            <div ref={petalRef} className="ae-petal" />
            <div ref={ribbonRef} className="ae-ribbon" />

            <div
              ref={bottleRef}
              className="ae-hero-bottle"
              onMouseEnter={() => setCursor("view", PRODUCTS[0].color)}
              onMouseLeave={() => setCursor(null)}
            >
              <img
                src={img("hero.png")}
                alt="AETHER Lumière fragrance bottle"
                className="ae-hero-real-image"
                width={720}
                height={960}
              />
              <div className="ae-vapor v1" />
              <div className="ae-vapor v2" />
              <div className="ae-vapor v3" />
            </div>
          </div>
        </div>

        <div className="ae-scroll-hint">
          <span className="ae-scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="ae-intro">
        <Eyebrow>THE ART OF FRAGRANCE</Eyebrow>

        <p className="ae-intro-statement">
          <RevealWords text="A fragrance is not simply worn." />
          <br />
          <RevealWords
            text="It becomes part of the memory it was made for."
            delayStep={35}
          />
        </p>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="ae-showcase">
        <Reveal className="ae-section-head">
          <Eyebrow>THE COLLECTION</Eyebrow>
          <h2 className="ae-h2">Five Scents, Held Still</h2>
          <p className="ae-section-description">
            Five distinct compositions. One AETHER signature.
          </p>
        </Reveal>

        {PRODUCTS.map((product, index) => (
          <ShowcaseRow
            key={product.id}
            product={product}
            reverse={index % 2 === 1}
            onView={() => setQuickView(product)}
            onAdd={() => addToCart(product.id)}
            setCursor={setCursor}
          />
        ))}
      </section>

      {/* NOTES */}
      <section className="ae-notes">
        <Reveal className="ae-section-head">
          <Eyebrow>ANATOMY OF A SCENT</Eyebrow>
          <h2 className="ae-h2">AETHER N°01 — Lumière</h2>
        </Reveal>

        <Reveal className="ae-notes-visual-wrap">
          <img
            src={PRODUCTS[0].image}
            alt={PRODUCTS[0].title}
            className="ae-notes-real-image"
            width={220}
            height={220}
          />
        </Reveal>

        <div className="ae-notes-grid">
          {["top", "heart", "base"].map((tier, index) => (
            <Reveal key={tier} delay={index * 120}>
              <div className="ae-note-col">
                <div className="ae-note-label">{tier} notes</div>
                <ul>
                  {PRODUCTS[0].notes[tier].map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="ae-story">
        <Reveal className="ae-story-art">
          <div className="ae-story-art-inner">
            <img
              src={PRODUCTS[4].image}
              alt={PRODUCTS[4].title}
              className="ae-story-real-image"
              width={420}
              height={520}
            />
          </div>
        </Reveal>

        <Reveal className="ae-story-text" delay={120}>
          <Eyebrow>OUR STORY</Eyebrow>

          <h2 className="ae-h2 ae-story-h2">
            Born from the tension between memory and desire.
          </h2>

          <p className="ae-body-text">
            AETHER began in a small Marseille atelier, where a single
            perfumer set out to capture not scenes but sensations — the
            particular quiet of a house at dusk, the static charge before
            rain.
          </p>

          <a
            href="#contact"
            className="ae-link-arrow"
            onMouseEnter={() => setCursor("view")}
            onMouseLeave={() => setCursor(null)}
          >
            SPEAK WITH AETHER
            <ArrowIcon />
          </a>
        </Reveal>
      </section>

      {/* CINEMATIC */}
      <CinematicSection setCursor={setCursor} />

      {/* JOURNAL */}
      <section id="journal" className="ae-journal">
        <Reveal className="ae-section-head">
          <Eyebrow>THE JOURNAL</Eyebrow>
          <h2 className="ae-h2">Notes on Scent</h2>
        </Reveal>

        <div className="ae-journal-grid">
          {JOURNAL.map((article, index) => (
            <Reveal key={article.title} delay={index * 100}>
              <article
                className="ae-journal-card"
                onMouseEnter={() =>
                  setCursor("explore", PRODUCTS[index % PRODUCTS.length].color)
                }
                onMouseLeave={() => setCursor(null)}
              >
                <div className="ae-journal-img">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="ae-journal-real-image"
                    width={420}
                    height={260}
                  />
                </div>

                <div className="ae-journal-meta">
                  {article.cat} — {article.date}
                </div>

                <h3 className="ae-journal-title">{article.title}</h3>

                <p className="ae-journal-blurb">{article.blurb}</p>

                <button
                  className="ae-link-arrow ae-link-arrow-sm ae-read-article"
                  onClick={() => setJournalArticle(article)}
                >
                  READ ARTICLE
                  <ArrowIcon />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="ae-contact">
        <div className="ae-contact-grid">
          <Reveal className="ae-contact-copy">
            <Eyebrow>GET IN TOUCH</Eyebrow>

            <h2 className="ae-contact-title">
              Let's talk
              <br />
              <em>fragrance.</em>
            </h2>

            <p className="ae-body-text">
              Questions about a fragrance, your order, or finding your
              signature scent? Our AETHER team would love to hear from you.
            </p>

            <div className="ae-contact-details">
              <a href="mailto:hello@aether.com">hello@aether.com</a>
              <a href="tel:+33100000000">+33 1 00 00 00 00</a>
              <span>PARIS · NEW YORK · EVERYWHERE</span>
            </div>
          </Reveal>

          <Reveal className="ae-contact-form-wrap" delay={120}>
            <form
              className="ae-contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setToast("Message received — we'll be in touch.");
                event.currentTarget.reset();
                setTimeout(() => setToast(""), 2500);
              }}
            >
              <label>
                <span>YOUR NAME</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>

              <label>
                <span>EMAIL ADDRESS</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                <span>SUBJECT</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                />
              </label>

              <label>
                <span>MESSAGE</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                />
              </label>

              <button type="submit" className="ae-btn ae-contact-submit">
                <span>SEND MESSAGE</span>
                <ArrowIcon />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="ae-newsletter">
        <Reveal>
          <Eyebrow style={{ color: "var(--champagne-soft)" }}>
            AETHER NOTES
          </Eyebrow>

          <h2 className="ae-h2">Stay Close to the Scent.</h2>

          <form
            className="ae-newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              setToast("You're on the AETHER list.");
              event.currentTarget.reset();
              setTimeout(() => setToast(""), 2200);
            }}
          >
            <input type="email" placeholder="Email address" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="ae-footer">
        <div className="ae-footer-top">
          <div className="ae-logo ae-footer-logo">AETHER</div>

          <div className="ae-footer-cols">
            <div>
              <div className="ae-footer-heading">Shop</div>
              <a href="#collection">All Fragrances</a>
              <a href="#collection">Gift Sets</a>
              <a href="#collection">Discovery Set</a>
            </div>

            <div>
              <div className="ae-footer-heading">About</div>
              <a href="#story">Our Story</a>
              <a href="#journal">The Journal</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <div className="ae-footer-heading">Contact</div>
              <a href="mailto:hello@aether.com">hello@aether.com</a>
              <a href="#contact">Instagram</a>
              <a href="#contact">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="ae-footer-bottom">
          <span>© {new Date().getFullYear()} AETHER PARFUMS</span>
          <div>
            <a href="#collection">Privacy</a>
            <a href="#collection">Terms</a>
          </div>
        </div>
      </footer>

      {/* SEARCH */}
      <div className={`ae-search-overlay ${searchOpen ? "ae-overlay-open" : ""}`}>
        <button
          className="ae-close"
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
          }}
          aria-label="Close search"
        >
          ×
        </button>

        <div className="ae-search-inner">
          <div className="ae-search-kicker">SEARCH AETHER</div>

          <input
            autoFocus
            className="ae-search-input"
            placeholder="Search fragrances..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className="ae-search-results">
            {query &&
              filtered.map((product) => (
                <button
                  key={product.id}
                  className="ae-search-result"
                  onClick={() => {
                    setQuickView(product);
                    setSearchOpen(false);
                    setQuery("");
                  }}
                >
                  <span className="ae-search-result-id">N°{product.id}</span>
                  <span>
                    {product.name} — {product.title}
                  </span>
                  <span className="ae-search-result-price">{product.price}</span>
                </button>
              ))}

            {query && filtered.length === 0 && (
              <div className="ae-search-empty">
                No fragrances match "{query}".
              </div>
            )}

            {!query && (
              <div className="ae-search-empty">
                Search by fragrance name, collection, or scent family.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CART */}
      <div
        className={`ae-drawer-overlay ${cartOpen ? "ae-overlay-open" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      <aside className={`ae-drawer ${cartOpen ? "ae-drawer-open" : ""}`} aria-label="Shopping bag">
        <div className="ae-drawer-head">
          <div>
            <span>YOUR BAG</span>
            <small>{cartCount} {cartCount === 1 ? "item" : "items"}</small>
          </div>

          <button
            className="ae-close ae-close-static"
            onClick={() => setCartOpen(false)}
            aria-label="Close bag"
          >
            ×
          </button>
        </div>

        <div className="ae-drawer-items">
          {cart.length === 0 && (
            <div className="ae-drawer-empty">
              <div className="ae-empty-icon">♢</div>
              <strong>Your bag is empty.</strong>
              <span>Discover a fragrance to begin your collection.</span>

              <button
                className="ae-link-arrow"
                onClick={() => {
                  setCartOpen(false);
                  document
                    .getElementById("collection")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                EXPLORE COLLECTION
                <ArrowIcon />
              </button>
            </div>
          )}

          {cart.map((item) => {
            const product = PRODUCTS.find((p) => p.id === item.id);
            if (!product) return null;

            return (
              <div key={item.id} className="ae-drawer-item">
                <div className={`ae-drawer-item-art tone-${product.color}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="ae-cart-real-image"
                    width={110}
                    height={140}
                  />
                </div>

                <div className="ae-drawer-item-info">
                  <div className="ae-drawer-item-name">{product.title}</div>
                  <div className="ae-drawer-item-family">{product.family}</div>
                  <div className="ae-drawer-item-price">{product.price}</div>

                  <div className="ae-qty">
                    <button onClick={() => changeQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)}>+</button>
                    <button
                      className="ae-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ae-drawer-foot">
          <div className="ae-drawer-total">
            <span>Subtotal</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <p className="ae-drawer-note">
            Shipping and taxes calculated at checkout.
          </p>

          <button
            className="ae-btn ae-btn-block"
            disabled={cart.length === 0}
            onClick={() => {
              setToast("Checkout is ready to connect.");
              setTimeout(() => setToast(""), 2200);
            }}
          >
            <span>PROCEED TO CHECKOUT</span>
            <ArrowIcon />
          </button>
        </div>
      </aside>

      {/* QUICK VIEW */}
      <div
        className={`ae-modal-overlay ${quickView ? "ae-overlay-open" : ""}`}
        onClick={() => setQuickView(null)}
      />

      {quickView && (
        <div className="ae-modal" role="dialog" aria-modal="true">
          <button
            className="ae-close"
            onClick={() => setQuickView(null)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="ae-modal-grid">
            <div className={`ae-modal-art tone-${quickView.color}`}>
              <img
                src={quickView.image}
                alt={quickView.name}
                className="ae-modal-real-image"
                width={520}
                height={640}
              />
            </div>

            <div className="ae-modal-info">
              <div className="ae-note-label">{quickView.family}</div>

              <h3 className="ae-modal-title">
                {quickView.name}
                <br />
                <em>{quickView.title}</em>
              </h3>

              <p className="ae-body-text">{quickView.desc}</p>

              <div className="ae-modal-notes">
                {["top", "heart", "base"].map((tier) => (
                  <div key={tier}>
                    <div className="ae-note-label ae-note-label-sm">{tier}</div>
                    <div>{quickView.notes[tier].join(" · ")}</div>
                  </div>
                ))}
              </div>

              <div className="ae-modal-buy">
                <span className="ae-modal-price">{quickView.price}</span>

                <button
                  className="ae-btn"
                  onClick={() => {
                    addToCart(quickView.id);
                    setQuickView(null);
                  }}
                >
                  <span>ADD TO BAG</span>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* JOURNAL ARTICLE MODAL */}
      {journalArticle && (
        <>
          <div
            className="ae-modal-overlay ae-overlay-open"
            onClick={() => setJournalArticle(null)}
          />

          <div className="ae-modal ae-journal-modal" role="dialog" aria-modal="true">

            <button
              className="ae-close"
              onClick={() => setJournalArticle(null)}
              aria-label="Close article"
            >
              ×
            </button>

            <div className="ae-journal-modal-content">

              <div className="ae-note-label">
                {journalArticle.cat} — {journalArticle.date}
              </div>

              <h2 className="ae-modal-title">
                {journalArticle.title}
              </h2>

              <div className="ae-journal-modal-image">
                <img
                  src={journalArticle.image}
                  alt={journalArticle.title}
                />
              </div>

              <p className="ae-journal-modal-intro">
                {journalArticle.blurb}
              </p>

              <div className="ae-journal-article-text">
                {journalArticle.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              <button
                className="ae-link-arrow"
                onClick={() => setJournalArticle(null)}
              >
                CLOSE ARTICLE
                <ArrowIcon />
              </button>

            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================
   SHOWCASE ROW
============================================================ */

function ShowcaseRow({ product, reverse, onView, onAdd, setCursor }) {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <div ref={ref} className={`ae-show-row ${reverse ? "ae-show-row-rev" : ""}`}>
      <div
        className={`ae-show-art tone-${product.color}`}
        style={{
          clipPath: inView ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
          transition: "clip-path 1.1s cubic-bezier(.16,.8,.24,1)",
        }}
        onClick={onView}
        onMouseEnter={() => setCursor("view", product.color)}
        onMouseLeave={() => setCursor(null)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="ae-show-real-image"
          width={640}
          height={800}
        />
      </div>

      <div
        className="ae-show-info"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity .9s ease .25s, transform .9s ease .25s",
        }}
      >
        <div className="ae-show-id">N°{product.id}</div>
        <h3 className="ae-show-name">{product.title}</h3>
        <div className="ae-show-family">{product.family}</div>
        <p className="ae-body-text">{product.desc}</p>

        <div className="ae-show-notes">
          {product.notes.top
            .concat(product.notes.heart, product.notes.base)
            .join(" · ")}
        </div>

        <div className="ae-show-actions">
          <span className="ae-show-price">{product.price}</span>

          <div className="ae-product-actions">
            <button
              className="ae-link-arrow"
              onClick={onView}
              onMouseEnter={() => setCursor("view", product.color)}
              onMouseLeave={() => setCursor(null)}
            >
              DISCOVER
              <ArrowIcon />
            </button>

            <button
              className="ae-add-button"
              onClick={onAdd}
              onMouseEnter={() => setCursor("view", product.color)}
              onMouseLeave={() => setCursor(null)}
            >
              ADD TO BAG
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CINEMATIC
============================================================ */

function CinematicSection({ setCursor }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="ae-cinema">
      <div
        className="ae-cinema-bg"
        style={{
          transform: inView ? "scale(1)" : "scale(1.08)",
          transition: "transform 1.6s cubic-bezier(.16,.8,.24,1)",
        }}
      />

      <div className="ae-cinema-orb" />

      <div
        className="ae-cinema-text"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease .3s, transform 1s ease .3s",
        }}
        onMouseEnter={() => setCursor("explore")}
        onMouseLeave={() => setCursor(null)}
      >
        <Eyebrow style={{ color: "var(--champagne-soft)" }}>
          A NOTE ON RESTRAINT
        </Eyebrow>

        <p>
          "The best fragrance is the one no one can quite place — only
          remember."
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   ICONS
============================================================ */

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="ae-arrow" width="16" height="10" viewBox="0 0 16 10" fill="none">
      <path d="M0 5H15M15 5L10.5 .5M15 5L10.5 9.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/* ============================================================
   COMPLETE CSS
============================================================ */

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Sora:wght@400;500;600;700;800&display=swap');

      :root {
        --ivory: #F8F5EE;
        --ivory-deep: #EEE7D8;
        --charcoal: #17140F;
        --stone: #716B5F;
        --line: #DCD3C0;
        --champagne: #B99A6B;
        --champagne-soft: #E7D9BC;
        --black: #0B0A08;

        --gold-1: #F3D9A6;
        --gold-2: #B5813C;
        --amber-1: #E3934F;
        --amber-2: #7A3A16;
        --emerald-1: #4FC79A;
        --emerald-2: #0E5A44;
        --ruby-1: #E88BAE;
        --ruby-2: #A02458;
        --plum-1: #B48BD1;
        --plum-2: #3A2049;
      }

      * { box-sizing: border-box; }

      html { scroll-behavior: smooth; background: var(--ivory); }
      body { margin: 0; background: var(--ivory); }

      button, input, textarea { font: inherit; }

      .ae-root {
        min-height: 100vh;
        background: var(--ivory);
        color: var(--charcoal);
        font-family: 'Sora', sans-serif;
        overflow-x: clip;
      }

      .ae-root h1, .ae-root h2, .ae-root h3 {
        font-family: 'Fraunces', serif;
        font-optical-sizing: auto;
        font-weight: 400;
        margin: 0;
      }

      .ae-root a { color: inherit; text-decoration: none; }
      .ae-root button { font-family: inherit; background: none; border: none; cursor: pointer; color: inherit; }
      .ae-root ul { margin: 0; padding: 0; list-style: none; }

      .ae-eyebrow {
        font-size: 11px;
        line-height: 1.4;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: var(--stone);
        font-weight: 700;
        margin-bottom: 18px;
      }

      .ae-h2 {
        font-size: clamp(34px, 4vw, 54px);
        line-height: 1.04;
        font-weight: 300;
        letter-spacing: -.02em;
      }

      .ae-body-text {
        color: var(--stone);
        font-size: 15px;
        line-height: 1.8;
        font-weight: 400;
        max-width: 48ch;
      }

      /* CURSOR */

      .ae-cursor {
        position: fixed;
        top: 0; left: 0;
        width: 0; height: 0;
        pointer-events: none;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        --tone-a: #D4A15C;
        --tone-b: #C2477B;
      }

      @media (pointer: fine) {
        .ae-root, .ae-root a, .ae-root button { cursor: none; }
      }

      .ae-cursor-dot {
        position: absolute;
        width: 13px; height: 13px;
        margin: -6.5px 0 0 -6.5px;
        border-radius: 50%;
        border: 1.5px solid var(--charcoal);
        background: transparent;
        transition: width .32s cubic-bezier(.16,.8,.24,1), height .32s cubic-bezier(.16,.8,.24,1),
          margin .32s cubic-bezier(.16,.8,.24,1), background .32s ease, border-color .32s ease,
          box-shadow .32s ease;
      }

      .ae-cursor-dot::after {
        content: "";
        position: absolute;
        inset: 0;
        margin: auto;
        width: 5px; height: 5px;
        border-radius: 50%;
        background: var(--charcoal);
        opacity: 0;
        transition: opacity .3s ease;
      }

      .ae-cursor[data-state="view"] .ae-cursor-dot,
      .ae-cursor[data-state="explore"] .ae-cursor-dot {
        width: 74px; height: 74px;
        margin: -37px 0 0 -37px;
        border: none;
        background: conic-gradient(from 0deg, var(--tone-a), var(--tone-b), var(--tone-a));
        box-shadow: 0 0 40px 8px color-mix(in srgb, var(--tone-a) 45%, transparent);
        animation: aeCursorSpin 3.2s linear infinite;
      }

      .ae-cursor[data-state="view"] .ae-cursor-dot::after,
      .ae-cursor[data-state="explore"] .ae-cursor-dot::after {
        opacity: 1;
        background: var(--ivory);
        width: 8px; height: 8px;
      }

      @keyframes aeCursorSpin {
        to { transform: rotate(360deg); }
      }

      .ae-cursor-label {
        position: absolute;
        color: var(--ivory);
        font-size: 9px;
        letter-spacing: .15em;
        font-weight: 700;
        pointer-events: none;
        mix-blend-mode: difference;
      }

      /* LOADER */

      .ae-loader {
        position: fixed;
        inset: 0;
        z-index: 5000;
        background: var(--ivory);
        overflow: hidden;
      }

      .ae-loader-inner {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        animation: aeLoaderIn 1.2s ease forwards;
      }

      .ae-loader-ring {
        width: 46px; height: 46px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--gold-2);
        border-right-color: var(--ruby-2);
        border-bottom-color: var(--emerald-2);
        animation: aeSpin 1s linear infinite;
      }

      @keyframes aeSpin { to { transform: rotate(360deg); } }

      .ae-loader-word {
        font-family: 'Fraunces', serif;
        font-size: 32px;
        letter-spacing: .32em;
        padding-left: .32em;
      }

      .ae-loader-small { font-size: 9px; letter-spacing: .18em; color: var(--stone); }

      @keyframes aeLoaderIn {
        0% { opacity: 0; transform: translateY(18px); }
        60% { opacity: 1; transform: translateY(0); }
        100% { opacity: 1; }
      }

      .ae-loader-curtain {
        position: absolute;
        top: 0; bottom: 0;
        width: 50%;
        background: var(--ivory);
        transition: transform 1.1s cubic-bezier(.76,0,.24,1);
        z-index: 2;
      }

      .ae-loader-curtain-l { left: 0; }
      .ae-loader-curtain-r { right: 0; }

      .ae-loader-done .ae-loader-inner { opacity: 0; transition: opacity .45s ease; }
      .ae-loader-done .ae-loader-curtain-l { transform: translateX(-100%); }
      .ae-loader-done .ae-loader-curtain-r { transform: translateX(100%); }

      .ae-loader-done {
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity .6s ease, visibility 0s linear .6s;
      }

      /* TOAST */

      .ae-toast {
        position: fixed;
        left: 50%;
        bottom: 28px;
        z-index: 6000;
        transform: translate(-50%, 20px);
        padding: 13px 22px;
        background: var(--charcoal);
        color: var(--ivory);
        font-size: 12px;
        letter-spacing: .04em;
        box-shadow: 0 18px 45px rgba(0,0,0,.18);
        opacity: 0;
        pointer-events: none;
        transition: all .4s cubic-bezier(.16,.8,.24,1);
      }

      .ae-toast-show { opacity: 1; transform: translate(-50%, 0); }

      /* NAV */

      .ae-nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 1000;
        padding: 25px 0;
        transition: background .45s ease, padding .45s ease, box-shadow .45s ease, backdrop-filter .45s ease;
      }

      .ae-nav-scrolled {
        padding: 15px 0;
        background: rgba(248,245,238,.84);
        backdrop-filter: blur(18px);
        box-shadow: 0 1px 0 rgba(23,20,15,.08);
      }

      .ae-nav-inner {
        width: min(1400px, calc(100% - 80px));
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .ae-logo {
        font-family: 'Fraunces', serif;
        font-size: 24px;
        line-height: 1;
        letter-spacing: .28em;
        padding-left: .28em;
        white-space: nowrap;
        background: linear-gradient(120deg, var(--gold-2), var(--ruby-2) 60%, var(--emerald-2));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .ae-nav-center { display: flex; align-items: center; gap: 34px; }

      .ae-nav-link {
        position: relative;
        font-size: 11px;
        line-height: 1.4;
        letter-spacing: .14em;
        font-weight: 600;
        color: #4F4A42;
        padding: 6px 0;
      }

      .ae-nav-link::after {
        content: "";
        position: absolute;
        left: 0; bottom: 0;
        width: 100%; height: 2px;
        background: linear-gradient(90deg, var(--gold-2), var(--ruby-2));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .35s ease;
      }

      .ae-nav-link:hover::after { transform: scaleX(1); }

      .ae-nav-right { display: flex; align-items: center; gap: 18px; }

      .ae-icon-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      .ae-badge {
        position: absolute;
        top: -6px; right: -6px;
        width: 17px; height: 17px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(120deg, var(--gold-2), var(--ruby-2));
        color: var(--ivory);
        font-size: 9px;
        font-weight: 700;
      }

      .ae-burger {
        display: none;
        flex-direction: column;
        gap: 5px;
        width: 23px;
        padding: 3px 0;
      }

      .ae-burger span { width: 100%; height: 1px; background: var(--charcoal); }

      /* MOBILE MENU */

      .ae-mobile-menu {
        position: fixed;
        inset: 0;
        z-index: 2000;
        background: var(--ivory);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity .45s ease;
      }

      .ae-mobile-menu-open { opacity: 1; pointer-events: auto; }

      .ae-mobile-brand {
        position: absolute;
        top: 27px; left: 50%;
        transform: translateX(-50%);
        font-family: 'Fraunces', serif;
        font-size: 22px;
        letter-spacing: .3em;
      }

      .ae-mobile-links { display: flex; flex-direction: column; align-items: center; gap: 22px; }

      .ae-mobile-links a {
        font-family: 'Fraunces', serif;
        font-size: clamp(30px, 8vw, 46px);
        line-height: 1;
        opacity: 0;
        transform: translateY(18px);
        transition: opacity .55s ease, transform .55s cubic-bezier(.16,.8,.24,1);
      }

      .ae-mobile-menu-open .ae-mobile-links a { opacity: 1; transform: translateY(0); }

      .ae-close {
        position: absolute;
        top: 25px; right: 30px;
        z-index: 5;
        font-size: 28px;
        line-height: 1;
        font-weight: 300;
      }

      .ae-close-static { position: static; }
      .ae-close-rot { transition: transform .3s ease; }
      .ae-close-rot:hover { transform: rotate(90deg); }

      /* HERO */

      /* HERO */

      .ae-hero {
        position: relative;
        min-height: 100svh;
        max-width: 1440px;
        margin: 0 auto;
        padding: 125px 40px 55px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      
        /* FULL HERO BACKGROUND */
        background-image: url("/images/hero-background.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      
.ae-hero::before {
  content: "";
  position: absolute;
  width: 620px;
  height: 620px;
  right: 3%;
  top: 12%;
  border-radius: 50%;

  background: conic-gradient(
    from 180deg,
    rgba(243,217,166,.35),
    rgba(232,139,174,.20),
    rgba(79,199,154,.18),
    rgba(243,217,166,.35)
  );

  filter: blur(60px);
  animation: heroGlow 9s ease-in-out infinite;
}

      .ae-hero::after {
        content: "";
        position: absolute;
        width: 350px; height: 350px;
        left: -8%; bottom: -20%;
        border-radius: 50%;
        background: rgba(79,199,154,.22);
        filter: blur(90px);
      }

      @keyframes heroGlow {
        0%, 100% { transform: scale(1) translate(0,0); }
        50% { transform: scale(1.1) translate(-14px,14px) rotate(20deg); }
      }

      .ae-hero-grid {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns: minmax(0,1fr) minmax(0,1fr);
        align-items: center;
        gap: 50px;
      }

      /* HERO TEXT */

.ae-hero-text {
  max-width: 540px;
  position: relative;
  z-index: 5;
}

/* SMALL LABEL */
.ae-hero-text .ae-note-label {
  color: #51483f;
  font-weight: 600;
  letter-spacing: .18em;
  text-shadow: 0 1px 10px rgba(250, 247, 241, .75);
}

/* MAIN HEADING */
.ae-hero-headline {
  font-size: clamp(58px, 7.2vw, 106px);
  line-height: .88;
  letter-spacing: -.035em;
  font-weight: 300;

  /* PREMIUM DARK WARM CHARCOAL */
  color: #211a17;

  /* subtle readability */
  text-shadow:
    0 2px 18px rgba(250, 247, 241, .45);
}

.ae-hero-line {
  display: block;
}

/* MEMORY */
.ae-hero-line-italic {
  font-style: italic;

  background: linear-gradient(
    110deg,
    #a8663c 0%,
    #a83f59 52%,
    #713b56 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  filter: drop-shadow(
    0 2px 10px rgba(250, 247, 241, .45)
  );
}

/* DESCRIPTION */
.ae-hero-sub {
  max-width: 46ch;
  margin: 30px 0 35px;

  color: #000000;

  font-size: 16px;
  font-weight: bold;
  line-height: 1.8;
  font-weight: 500;

  text-shadow:
    0 1px 12px rgba(250, 247, 241, .65);
}
.ae-hero-text::before {
  content: "";
  position: absolute;

  width: 620px;
  height: 480px;

  left: -100px;
  top: -90px;

  background: radial-gradient(
    ellipse at center,
    rgba(250, 247, 241, .72) 0%,
    rgba(250, 247, 241, .48) 38%,
    rgba(250, 247, 241, .16) 62%,
    transparent 78%
  );

  filter: blur(18px);

  z-index: -1;
  pointer-events: none;
}

      .ae-hero-art {
        position: relative;
        min-height: 540px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1400px;
      }
      
      .ae-hero-bottle {
        display: none !important;
      }

      .ae-float { animation: aeFloat 5.5s ease-in-out infinite; }

      @keyframes aeFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-14px); }
      }

      .ae-hero-real-image {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
        transition: transform .7s cubic-bezier(.16,.8,.24,1);
      }

      .ae-hero-bottle:hover .ae-hero-real-image { transform: scale(1.06); }

      .ae-vapor {
        position: absolute;
        width: 4px; height: 42px;
        top: 2px;
        border-radius: 50%;
        background: linear-gradient(to top, rgba(232,139,174,.5), transparent);
        filter: blur(2px);
      }

      .v1 { left: 44%; animation: aeVapor 4s ease-in-out infinite; }
      .v2 { left: 50%; animation: aeVapor 4.6s ease-in-out infinite .6s; }
      .v3 { left: 56%; animation: aeVapor 5.2s ease-in-out infinite 1.1s; }

      @keyframes aeVapor {
        0% { opacity: 0; transform: translateY(0) scaleY(.6); }
        30% { opacity: .7; }
        100% { opacity: 0; transform: translateY(-55px) scaleY(1.3); }
      }

      .ae-petal {
        position: absolute;
        width: 100px; height: 100px;
        top: 10%; left: 5%;
        border-radius: 50% 0 50% 50%;
        background: linear-gradient(135deg, var(--ruby-1), transparent);
        opacity: .55;
        animation: aeRotSlow 15s linear infinite;
      }

      .ae-ribbon {
        position: absolute;
        width: 250px; height: 1px;
        right: 2%; bottom: 14%;
        background: linear-gradient(90deg, transparent, var(--gold-1), transparent);
        animation: aeDrift 8s ease-in-out infinite;
      }

      @keyframes aeRotSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes aeDrift { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-22px); } }

      .ae-scroll-hint {
        position: absolute;
        left: 40px; bottom: 28px;
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 11px;
        font-size: 9px;
        letter-spacing: .18em;
        color: var(--stone);
      }

      .ae-scroll-line { width: 1px; height: 38px; overflow: hidden; position: relative; background: var(--line); }

      .ae-scroll-line::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, var(--gold-2), var(--ruby-2));
        animation: aeScrollLine 2s ease-in-out infinite;
      }

      @keyframes aeScrollLine {
        0% { transform: translateY(-100%); }
        50% { transform: translateY(0); }
        100% { transform: translateY(100%); }
      }

      /* BUTTONS */

      .ae-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        min-height: 48px;
        padding: 14px 24px;
        border: 1px solid var(--charcoal);
        overflow: hidden;
        font-size: 11px;
        line-height: 1.2;
        letter-spacing: .14em;
        font-weight: 700;
      }

      .ae-btn::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, var(--charcoal), var(--ruby-2) 55%, var(--gold-2));
        transform: translateY(101%);
        transition: transform .45s cubic-bezier(.16,.8,.24,1);
      }

      .ae-btn span, .ae-btn .ae-arrow {
        position: relative;
        z-index: 2;
        transition: color .35s ease, transform .35s ease;
      }

      .ae-btn:hover::before { transform: translateY(0); }
      .ae-btn:hover span, .ae-btn:hover .ae-arrow { color: var(--ivory); }
      .ae-btn:hover .ae-arrow { transform: translateX(4px); }

      .ae-btn-block { width: 100%; }
      .ae-btn:disabled { opacity: .4; pointer-events: none; }

      .ae-link-arrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 5px;
        border-bottom: 1px solid currentColor;
        font-size: 11px;
        line-height: 1.2;
        letter-spacing: .12em;
        font-weight: 700;
      }

      .ae-link-arrow .ae-arrow { transition: transform .3s ease; }
      .ae-link-arrow:hover .ae-arrow { transform: translateX(5px); }

      /* INTRO */

      .ae-intro {
        padding: 170px 40px;
        max-width: 1050px;
        margin: 0 auto;
        text-align: center;
      }

      .ae-intro-statement {
        font-family: 'Fraunces', serif;
        font-size: clamp(32px, 4.3vw, 54px);
        line-height: 1.25;
        font-weight: 300;
      }

      .ae-word-mask { display: inline-block; overflow: hidden; vertical-align: bottom; }

      .ae-word {
        display: inline-block;
        transition: opacity .8s cubic-bezier(.16,.8,.24,1), transform .8s cubic-bezier(.16,.8,.24,1), filter .8s ease;
      }

      /* SHOWCASE */

      .ae-showcase {
        padding: 80px 40px 60px;
        max-width: 1320px;
        margin: 0 auto;
        perspective: 1400px;
      }

      .ae-section-head { margin-bottom: 75px; }

      .ae-section-description { margin-top: 14px; color: var(--stone); font-size: 14px; line-height: 1.6; }

      .ae-show-row {
        display: grid;
        grid-template-columns: minmax(0,1fr) minmax(0,1fr);
        gap: 70px;
        align-items: center;
        padding: 95px 0;
        border-top: 1px solid var(--line);
      }

      .ae-show-row-rev { direction: rtl; }
      .ae-show-row-rev > * { direction: ltr; }

      .ae-show-art {
        position: relative;
        min-height: 460px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        transition: transform .5s cubic-bezier(.16,.8,.24,1), box-shadow .5s ease;
      }

      .ae-show-art:hover {
        transform: rotateX(2deg) rotateY(-3deg) translateY(-6px);
        box-shadow: 0 40px 80px rgba(23,20,15,.22);
      }

      .tone-champagne { background: radial-gradient(circle at 50% 45%, var(--gold-1) 0%, var(--gold-2) 100%); }
      .tone-amber { background: radial-gradient(circle at 50% 45%, var(--amber-1) 0%, var(--amber-2) 100%); }
      .tone-aqua { background: radial-gradient(circle at 50% 45%, var(--emerald-1) 0%, var(--emerald-2) 100%); }
      .tone-rose { background: radial-gradient(circle at 50% 45%, var(--ruby-1) 0%, var(--ruby-2) 100%); }
      .tone-smoke { background: radial-gradient(circle at 50% 45%, var(--plum-1) 0%, var(--plum-2) 100%); }

      .ae-show-real-image {
        position: absolute;
        inset: 0;
        width: 100%; height: 100%;
        object-fit: cover;
        transition: transform .6s cubic-bezier(.16,.8,.24,1);
        filter: saturate(1.08) contrast(1.03);
      }

      .ae-show-art:hover .ae-show-real-image { transform: scale(1.06); }

      .ae-show-id { color: var(--ruby-2); font-size: 12px; line-height: 1.4; letter-spacing: .2em; margin-bottom: 9px; }
      .ae-show-name { font-size: clamp(38px, 4vw, 58px); line-height: .95; font-weight: 300; margin-bottom: 8px; }
      .ae-show-family { font-size: 12px; line-height: 1.4; color: var(--stone); letter-spacing: .08em; margin-bottom: 20px; }
      .ae-show-notes { font-size: 12px; line-height: 1.7; color: var(--stone); margin: 20px 0; }

      .ae-show-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;
        margin-top: 25px;
        padding-top: 20px;
        border-top: 1px solid var(--line);
      }

      .ae-show-price { font-family: 'Fraunces', serif; font-size: 27px; white-space: nowrap; }

      .ae-product-actions { display: flex; align-items: center; justify-content: flex-end; gap: 20px; flex-wrap: wrap; }

      .ae-add-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        min-height: 43px;
        padding: 12px 16px;
        background: var(--charcoal) !important;
        color: var(--ivory) !important;
        font-size: 10px;
        line-height: 1;
        letter-spacing: .13em;
        font-weight: 700;
        transition: transform .35s ease, background .35s ease, box-shadow .35s ease;
      }

      .ae-add-button span { font-size: 18px; line-height: .8; font-weight: 300; }

      .ae-add-button:hover {
        transform: translateY(-3px);
        background: linear-gradient(120deg, var(--gold-2), var(--ruby-2)) !important;
        color: var(--ivory) !important;
        box-shadow: 0 14px 34px rgba(160,36,88,.3);
      }

      /* NOTES */

      .ae-notes {
        padding: 125px 40px;
        background: var(--ivory-deep);
        text-align: center;
      }

      .ae-notes-visual-wrap { display: flex; justify-content: center; margin-top: 45px; }

      .ae-notes-real-image {
        width: 220px; height: 220px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 0 0 6px rgba(181,129,60,.25), 0 25px 60px rgba(58,42,24,.25);
      }

      .ae-notes-grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 60px;
        max-width: 930px;
        margin: 55px auto 0;
      }

      .ae-note-col { text-align: left; }

      .ae-note-label {
        font-size: 11px;
        line-height: 1.4;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: var(--ruby-2);
        font-weight: 700;
        margin-bottom: 15px;
      }

      .ae-note-label-sm { margin-bottom: 5px; }

      .ae-note-col li {
        font-family: 'Fraunces', serif;
        font-size: 23px;
        line-height: 1.2;
        padding: 9px 0;
        border-top: 1px solid var(--line);
      }

      .ae-note-col li:first-child { border-top: none; }

      /* STORY */

      .ae-story {
        display: grid;
        grid-template-columns: minmax(0,1fr) minmax(0,1fr);
        gap: 85px;
        align-items: center;
        max-width: 1320px;
        margin: 0 auto;
        padding: 140px 40px;
      }

      .ae-story-art-inner {
        min-height: 500px;
        border-radius: 20px;
        background: radial-gradient(circle at 30% 30%, #3B2049, var(--charcoal) 68%);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .ae-story-real-image {
        width: 78%; height: 78%;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 30px 70px rgba(0,0,0,.4);
      }

      .ae-story-h2 { margin: 5px 0 28px; max-width: 620px; }
      .ae-story-text .ae-link-arrow { margin-top: 28px; }

      /* CINEMA */

      .ae-cinema {
        position: relative;
        min-height: 68vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--black);
      }

      .ae-cinema-bg {
        position: absolute;
        inset: -5%;
        background: radial-gradient(circle at 30% 30%, #3B2049 0%, #17140F 35%, #0B0A08 75%);
      }

      .ae-cinema-orb {
        position: absolute;
        width: 500px; height: 500px;
        border-radius: 50%;
        right: -12%; bottom: -35%;
        background: rgba(232,139,174,.16);
        filter: blur(90px);
      }

      .ae-cinema-text { position: relative; z-index: 2; max-width: 700px; padding: 30px; color: var(--ivory); text-align: center; }

      .ae-cinema-text p {
        font-family: 'Fraunces', serif;
        font-style: italic;
        font-size: clamp(27px, 3.4vw, 43px);
        line-height: 1.25;
        margin-top: 12px;
      }

      /* JOURNAL */

      .ae-journal { max-width: 1320px; margin: 0 auto; padding: 140px 40px; }
      .ae-journal-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 38px; }

      .ae-journal-img {
        height: 260px;
        margin-bottom: 22px;
        border-radius: 14px;
        overflow: hidden;
        background: var(--ivory-deep);
      }

      .ae-journal-real-image {
        width: 100%; height: 100%;
        object-fit: cover;
        transition: transform .6s ease;
      }

      .ae-journal-card:hover .ae-journal-real-image { transform: scale(1.06); }

      .ae-journal-meta { color: var(--ruby-2); font-size: 10px; line-height: 1.4; letter-spacing: .15em; margin-bottom: 11px; }
      .ae-journal-title { font-size: 29px; line-height: 1; margin-bottom: 12px; }
      .ae-journal-blurb { color: var(--stone); font-size: 14px; line-height: 1.7; max-width: 38ch; }
      .ae-link-arrow-sm { margin-top: 18px; border-bottom: none; }

      /* CONTACT */

      .ae-contact {
        padding: 150px 40px;
        background:
          radial-gradient(circle at 15% 25%, rgba(232,139,174,.22), transparent 32%),
          radial-gradient(circle at 90% 75%, rgba(79,199,154,.24), transparent 30%),
          var(--ivory-deep);
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }

      .ae-contact-grid {
        max-width: 1180px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: .85fr 1.15fr;
        gap: 110px;
        align-items: start;
      }

      .ae-contact-title { font-size: clamp(55px, 6vw, 82px); line-height: .88; letter-spacing: -.025em; margin-bottom: 30px; }
      .ae-contact-title em { color: var(--ruby-2); font-weight: 400; font-style: italic; }

      .ae-contact-details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 45px;
        color: var(--stone);
        font-size: 13px;
        line-height: 1.5;
      }

      .ae-contact-details a { color: var(--charcoal); font-weight: 600; }

      .ae-contact-form { display: flex; flex-direction: column; gap: 27px; }
      .ae-contact-form label { display: flex; flex-direction: column; gap: 9px; }

      .ae-contact-form label span {
        color: var(--stone);
        font-size: 10px;
        line-height: 1.4;
        letter-spacing: .16em;
        font-weight: 700;
      }

      .ae-contact-form input, .ae-contact-form textarea {
        width: 100%;
        padding: 13px 0;
        border: none;
        border-bottom: 1px solid #CFC6B2;
        outline: none;
        resize: vertical;
        background: transparent;
        color: var(--charcoal);
        font-family: 'Sora', sans-serif;
        font-size: 15px;
        line-height: 1.6;
        transition: border-color .3s ease;
      }

      .ae-contact-form input:focus, .ae-contact-form textarea:focus { border-color: var(--ruby-2); }
      .ae-contact-form input::placeholder, .ae-contact-form textarea::placeholder { color: #9A9385; }

      .ae-contact-submit { align-self: flex-start; margin-top: 5px; }

      /* NEWSLETTER */

      .ae-newsletter {
        padding: 130px 40px;
        background: linear-gradient(135deg, var(--charcoal), #2A1738 55%, var(--charcoal));
        color: var(--ivory);
        text-align: center;
      }

      .ae-newsletter h2 { color: var(--ivory); margin-bottom: 38px; }

      .ae-newsletter-form {
        max-width: 520px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 25px;
        border-bottom: 1px solid rgba(244,240,230,.3);
        padding-bottom: 13px;
      }

      .ae-newsletter-form input {
        flex: 1; min-width: 0;
        background: transparent;
        border: none;
        outline: none;
        color: var(--ivory);
        font-size: 15px;
      }

      .ae-newsletter-form input::placeholder { color: rgba(244,240,230,.5); }

      .ae-newsletter-form button {
        color: var(--gold-1);
        font-size: 11px;
        letter-spacing: .15em;
        font-weight: 700;
        white-space: nowrap;
      }

      /* FOOTER */

      .ae-footer { max-width: 1320px; margin: 0 auto; padding: 90px 40px 30px; }

      .ae-footer-top {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 60px;
        padding-bottom: 60px;
        border-bottom: 1px solid var(--line);
      }

      .ae-footer-logo { font-size: 29px; }
      .ae-footer-cols { display: flex; gap: 85px; }

      .ae-footer-heading {
        color: var(--stone);
        font-size: 10px;
        letter-spacing: .15em;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      .ae-footer-cols a { display: block; font-size: 13px; line-height: 1.5; padding: 5px 0; opacity: .82; }
      .ae-footer-cols a:hover { opacity: 1; text-decoration: underline; }

      .ae-footer-bottom {
        display: flex;
        justify-content: space-between;
        gap: 25px;
        padding-top: 25px;
        color: var(--stone);
        font-size: 10px;
        letter-spacing: .05em;
      }

      .ae-footer-bottom div { display: flex; gap: 22px; }

      /* SEARCH */

      .ae-search-overlay {
        position: fixed;
        inset: 0;
        z-index: 3000;
        background: rgba(248,245,238,.98);
        opacity: 0;
        pointer-events: none;
        transition: opacity .45s ease;
      }

      .ae-search-overlay.ae-overlay-open { opacity: 1; pointer-events: auto; }

      .ae-search-inner { width: min(760px, calc(100% - 50px)); margin: 140px auto 0; }

      .ae-search-kicker { color: var(--ruby-2); font-size: 10px; letter-spacing: .18em; font-weight: 700; margin-bottom: 12px; }

      .ae-search-input {
        width: 100%;
        padding: 14px 0 18px;
        border: none;
        border-bottom: 1px solid var(--charcoal);
        outline: none;
        background: transparent;
        font-family: 'Fraunces', serif;
        font-size: clamp(35px, 5vw, 52px);
      }

      .ae-search-results { margin-top: 25px; }

      .ae-search-result {
        width: 100%;
        display: grid;
        grid-template-columns: 55px 1fr auto;
        align-items: center;
        gap: 18px;
        padding: 17px 0;
        border-bottom: 1px solid var(--line) !important;
        text-align: left;
        font-size: 14px;
      }

      .ae-search-result-id { color: var(--ruby-2); }
      .ae-search-result-price { color: var(--stone); }
      .ae-search-empty { color: var(--stone); padding: 20px 0; font-size: 14px; line-height: 1.6; }

      /* DRAWER */

      .ae-drawer-overlay {
        position: fixed;
        inset: 0;
        z-index: 3100;
        background: rgba(11,10,8,.42);
        opacity: 0;
        pointer-events: none;
        transition: opacity .4s ease;
      }

      .ae-drawer-overlay.ae-overlay-open { opacity: 1; pointer-events: auto; }

      .ae-drawer {
        position: fixed;
        top: 0; right: 0; bottom: 0;
        z-index: 3200;
        width: min(480px, 100vw);
        display: flex;
        flex-direction: column;
        background: var(--ivory);
        transform: translateX(100%);
        transition: transform .55s cubic-bezier(.16,.8,.24,1);
        box-shadow: -25px 0 70px rgba(0,0,0,.12);
      }

      .ae-drawer-open { transform: translateX(0); }

      .ae-drawer-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 30px;
        border-bottom: 1px solid var(--line);
      }

      .ae-drawer-head > div { display: flex; align-items: baseline; gap: 10px; }
      .ae-drawer-head span { font-size: 12px; letter-spacing: .15em; font-weight: 700; }
      .ae-drawer-head small { color: var(--stone); font-size: 11px; }

      .ae-drawer-items { flex: 1; overflow-y: auto; padding: 18px 30px; }

      .ae-drawer-empty {
        min-height: 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        color: var(--stone);
      }

      .ae-empty-icon { font-family: 'Fraunces', serif; font-size: 50px; color: var(--ruby-2); margin-bottom: 5px; }

      .ae-drawer-empty strong {
        color: var(--charcoal);
        font-family: 'Fraunces', serif;
        font-size: 26px;
        font-weight: 400;
      }

      .ae-drawer-empty span { max-width: 28ch; font-size: 13px; line-height: 1.6; }
      .ae-drawer-empty .ae-link-arrow { margin-top: 20px; }

      .ae-drawer-item { display: flex; gap: 17px; padding: 20px 0; border-bottom: 1px solid var(--line); }

      .ae-drawer-item-art {
        width: 75px; height: 90px;
        flex: none;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ae-drawer-item-info { flex: 1; min-width: 0; }

      .ae-drawer-item-name { font-family: 'Fraunces', serif; font-size: 22px; line-height: 1; margin-bottom: 4px; }
      .ae-drawer-item-family { color: var(--stone); font-size: 11px; margin-bottom: 8px; }
      .ae-drawer-item-price { color: var(--charcoal); font-size: 13px; margin-bottom: 12px; }

      .ae-qty { display: flex; align-items: center; gap: 10px; min-height: 27px; }

      .ae-qty > button:not(.ae-remove) {
        width: 26px; height: 26px;
        border: 1px solid var(--line);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
      }

      .ae-qty > span { min-width: 18px; text-align: center; font-size: 12px; }

      .ae-remove { margin-left: auto; color: var(--stone); font-size: 9px; letter-spacing: .1em; text-decoration: underline; }
      .ae-remove:hover { color: var(--charcoal); }

      .ae-drawer-foot { padding: 25px 30px 30px; border-top: 1px solid var(--line); background: var(--ivory); }

      .ae-drawer-total { display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px; font-size: 15px; }
      .ae-drawer-total strong { font-family: 'Fraunces', serif; font-size: 27px; font-weight: 400; }
      .ae-drawer-note { color: var(--stone); font-size: 11px; margin: 0 0 20px; }

      /* MODAL */

      .ae-modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 3300;
        background: rgba(11,10,8,.52);
        opacity: 0;
        pointer-events: none;
        transition: opacity .4s ease;
      }

      .ae-modal-overlay.ae-overlay-open { opacity: 1; pointer-events: auto; }

      .ae-modal {
        position: fixed;
        top: 50%; left: 50%;
        z-index: 3400;
        width: min(860px, 92vw);
        max-height: 90vh;
        overflow-y: auto;
        transform: translate(-50%,-50%);
        background: var(--ivory);
        box-shadow: 0 35px 100px rgba(0,0,0,.25);
        animation: aeModalIn .4s cubic-bezier(.16,.8,.24,1);
      }

      @keyframes aeModalIn {
        from { opacity: 0; transform: translate(-50%,-47%) scale(.97); }
        to { opacity: 1; transform: translate(-50%,-50%) scale(1); }
      }

      .ae-modal-grid { display: grid; grid-template-columns: 1fr 1fr; }

      .ae-modal-art {
        position: relative;
        min-height: 480px;
        overflow: hidden;
      }

      .ae-modal-real-image {
        position: absolute;
        inset: 0;
        width: 100%; height: 100%;
        object-fit: cover;
      }

      .ae-modal-info { padding: 70px 50px; display: flex; flex-direction: column; justify-content: center; }

      .ae-modal-title { font-size: clamp(34px, 4vw, 52px); line-height: .95; font-weight: 300; margin: 7px 0 25px; }
      .ae-modal-title em { color: var(--ruby-2); font-weight: 400; font-style: italic; }

      .ae-modal-notes {
        display: flex;
        flex-direction: column;
        gap: 13px;
        margin: 28px 0;
        color: var(--stone);
        font-size: 13px;
        line-height: 1.5;
      }

      .ae-modal-buy {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-top: 12px;
        padding-top: 22px;
        border-top: 1px solid var(--line);
      }

      .ae-modal-price { font-family: 'Fraunces', serif; font-size: 30px; white-space: nowrap; }

      /* RESPONSIVE */

      @media (max-width: 1050px) {
        .ae-nav-center { gap: 20px; }
        .ae-show-row { gap: 45px; }
        .ae-contact-grid { gap: 60px; }
        .ae-footer-cols { gap: 50px; }
      }

      @media (max-width: 960px) {
        .ae-nav-center { display: none; }
        .ae-show-mobile { display: flex; }

        .ae-hero { min-height: auto; padding-top: 125px; padding-bottom: 90px; }
        .ae-hero-grid { grid-template-columns: 1fr; gap: 30px; }
        .ae-hero-art { min-height: 410px; order: -1; }
        .ae-hero-text { max-width: 620px; }

        .ae-show-row, .ae-story, .ae-contact-grid { grid-template-columns: 1fr; }
        .ae-show-row-rev { direction: ltr; }
        .ae-show-art { min-height: 420px; }

        .ae-notes-grid { grid-template-columns: 1fr; max-width: 520px; }
        .ae-note-col { text-align: center; }

        .ae-journal-grid { grid-template-columns: 1fr 1fr; }
        .ae-journal-card:last-child { grid-column: 1 / -1; max-width: calc(50% - 19px); }

        .ae-contact-grid { gap: 70px; }

        .ae-modal-grid { grid-template-columns: 1fr; }
        .ae-modal-art { min-height: 360px; }
        .ae-modal-info { padding: 45px 35px 50px; }
      }

      @media (max-width: 700px) {
        .ae-root, .ae-root a, .ae-root button { cursor: auto; }
        .ae-cursor { display: none; }

        .ae-nav-inner { width: calc(100% - 44px); }
        .ae-nav { padding: 18px 0; }
        .ae-nav-scrolled { padding: 13px 0; }
        .ae-logo { font-size: 21px; }
        .ae-nav-right { gap: 13px; }

        .ae-hero { padding-left: 22px; padding-right: 22px; padding-top: 105px; padding-bottom: 75px; }
        .ae-hero::before { width: 380px; height: 380px; right: -25%; }
        .ae-hero-art { min-height: 330px; }
        .ae-hero-headline { font-size: clamp(56px, 16vw, 84px); }
        .ae-hero-sub { font-size: 14px; line-height: 1.75; }

        .ae-hero-bottle {
          display: none !important;
        }

        .ae-btn { width: 100%; justify-content: center; padding: 15px 18px; }
        .ae-scroll-hint { left: 22px; bottom: 22px; }

        .ae-intro { padding: 110px 22px; }
        .ae-intro-statement { font-size: clamp(30px, 9vw, 42px); }

        .ae-showcase { padding: 65px 22px 30px; }
        .ae-section-head { margin-bottom: 50px; }

        .ae-show-row { padding: 65px 0; gap: 40px; }
        .ae-show-art { min-height: 350px; }
        .ae-show-name { font-size: 48px; }
        .ae-body-text { font-size: 14px; line-height: 1.75; }

        .ae-show-actions { align-items: flex-start; flex-direction: column; gap: 18px; }
        .ae-product-actions { width: 100%; justify-content: space-between; }
        .ae-add-button { flex: 1; }

        .ae-notes { padding: 90px 22px; }
        .ae-story { padding: 95px 22px; gap: 55px; }
        .ae-story-art-inner { min-height: 380px; }

        .ae-cinema { min-height: 62vh; }
        .ae-cinema-text { padding: 25px; }

        .ae-journal { padding: 95px 22px; }
        .ae-journal-grid { grid-template-columns: 1fr; }
        .ae-journal-card:last-child { grid-column: auto; max-width: none; }
        .ae-journal-img { height: 280px; }

        .ae-contact { padding: 95px 22px; }
        .ae-contact-title { font-size: 60px; }
        .ae-contact-grid { gap: 55px; }
        .ae-contact-submit { width: 100%; }

        .ae-newsletter { padding: 95px 22px; }
        .ae-newsletter-form { gap: 15px; }

        .ae-footer { padding: 70px 22px 25px; }
        .ae-footer-cols { width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 35px 25px; }
        .ae-footer-cols > div:last-child { grid-column: 1 / -1; }
        .ae-footer-bottom { flex-direction: column; gap: 15px; }

        .ae-search-inner { width: calc(100% - 44px); margin-top: 110px; }
        .ae-search-result { grid-template-columns: 40px 1fr; }
        .ae-search-result-price { grid-column: 2; margin-top: -10px; }

        .ae-drawer { width: 100%; }
        .ae-drawer-head, .ae-drawer-items, .ae-drawer-foot { padding-left: 22px; padding-right: 22px; }

        .ae-modal { width: calc(100vw - 28px); max-height: 92vh; }
        .ae-modal-art { min-height: 300px; }
        .ae-modal-info { padding: 35px 24px 30px; }
        .ae-modal-buy { align-items: stretch; flex-direction: column; }
        .ae-modal-buy .ae-btn { width: 100%; }
      }

      @media (max-width: 420px) {
        .ae-hero-headline { font-size: 54px; }
        .ae-show-name { font-size: 43px; }
        .ae-product-actions { flex-direction: column; align-items: stretch; }
        .ae-product-actions .ae-link-arrow { align-self: flex-start; }
        .ae-add-button { width: 100%; }

        .ae-newsletter-form { flex-direction: column; align-items: stretch; border-bottom: none; }
        .ae-newsletter-form input { padding: 12px 0; border-bottom: 1px solid rgba(244,240,230,.3); }
        .ae-newsletter-form button { align-self: flex-end; }
      }

      @media (prefers-reduced-motion: reduce) {
        .ae-root *, .ae-root *::before, .ae-root *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }
      }

      .ae-journal-modal {
        width: min(900px, 92vw);
        max-height: 88vh;
        overflow-y: auto;
      }
      
      .ae-journal-modal-content {
        padding: 70px 80px;
      }
      
      .ae-journal-modal-content .ae-modal-title {
        margin-top: 15px;
        margin-bottom: 30px;
      }
      
      .ae-journal-modal-intro {
        font-size: 19px;
        line-height: 1.7;
        margin-bottom: 35px;
        max-width: 720px;
      }
      
      .ae-journal-article-text {
        max-width: 720px;
      }
      
      .ae-journal-article-text p {
        font-size: 16px;
        line-height: 1.9;
        margin: 0 0 24px;
      }
      
      .ae-journal-modal-content > .ae-link-arrow {
        margin-top: 35px;
      }
      
      @media (max-width: 700px) {
        .ae-journal-modal-content {
          padding: 50px 25px;
        }
      
        .ae-journal-modal-intro {
          font-size: 17px;
        }
      
        .ae-journal-article-text p {
          font-size: 15px;
        }
      }
    `}</style>
  );
}