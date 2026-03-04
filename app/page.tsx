import Image from "next/image";

/* ── Static nav items ── */
const navItems = [
  { label: "गृहपृष्ठ", href: "/", active: true },
  { label: "राजनीति", href: "#" },
  { label: "समाज", href: "#" },
  { label: "अर्थतन्त्र", href: "#" },
  { label: "खेलकुद", href: "#" },
  { label: "विचार", href: "#" },
  { label: "अन्तर्वार्ता", href: "#" },
  { label: "फोटो फिचर", href: "#" },
  { label: "भिडियो", href: "#" },
];

/* ── Nepali date helper ── */
function getNepaliDate() {
  const now = new Date();
  return now.toLocaleDateString("ne-NP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const nepaliDate = getNepaliDate();

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>

      {/* ═══════════  TOP UTILITY BAR  ═══════════ */}
      <div style={{ background: "var(--color-primary-dark)" }} className="text-white">
        <div className="max-w-[1140px] mx-auto px-4 py-2 flex items-center justify-between">
          <span className="opacity-80 text-[11px] sm:text-xs font-medium">{nepaliDate}</span>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" aria-label="Twitter/X" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" aria-label="YouTube" className="opacity-60 hover:opacity-100 transition-opacity">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════  HEADER / MASTHEAD  ═══════════ */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 relative z-[40] shadow-sm">
        <div className="max-w-[1140px] mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-4 sm:gap-5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/30 transition-all duration-500"></div>
              <Image
                src="/sarlahipati_favicon.jpg"
                alt="सर्लाहीपाटी लोगो"
                width={200}
                height={200}
                priority
                className="relative h-14 w-14 sm:h-20 sm:w-20 object-cover rounded-full shadow-lg ring-4 ring-white group-hover:ring-emerald-100 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                सर्लाहीपाटी
              </h1>
              <p className="text-[10px] sm:text-xs mt-1 font-semibold tracking-widest uppercase text-slate-500">
                सर्लाहीको विश्वसनीय समाचार पोर्टल
              </p>
            </div>
          </a>

          {/* Header Ad Space or Date Area */}
          <div className="hidden lg:flex items-center bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-inner">
            <span className="text-sm font-semibold text-slate-600 tracking-wide flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-emerald-600"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              {nepaliDate}
            </span>
          </div>
        </div>
      </header>

      {/* ═══════════  NAVIGATION  ═══════════ */}
      <nav className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-emerald-700 to-emerald-900">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="nav-scroll flex items-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  nav-link relative inline-block px-4 sm:px-6 py-3.5 text-[13px] sm:text-[15px] font-bold shrink-0 transition-all duration-300
                  ${item.active
                    ? "text-white bg-white/10"
                    : "text-emerald-100/80 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.label}
                {item.active && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-500 rounded-t-md"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════════  BREAKING NEWS TICKER  ═══════════ */}
      <div className="overflow-hidden py-3 bg-rose-600 text-white shadow-inner relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-500 opacity-50"></div>
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 flex items-center gap-4">
          <span className="bg-white text-rose-700 px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-black shrink-0 uppercase tracking-widest animate-pulse shadow-md">
            ब्रेकिङ
          </span>
          <div className="overflow-hidden flex-1 relative">
            <p className="ticker-animate text-xs sm:text-[15px] font-bold whitespace-nowrap drop-shadow-sm">
              सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई? — यस
              क्षेत्रका प्रभावशाली स्थानीय नेता तथा &apos;किङमेकर&apos; भनेर
              चिनिने शिवपुजन यादवका छोरा अमनिशकुमार यादव पनि प्रतिस्पर्धामा — सर्लाहीपाटी
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════  MAIN CONTENT  ═══════════ */}
      <main className="max-w-[1140px] mx-auto px-4 py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* ────────────  Article  ──────────── */}
          <article
            className="flex-1 min-w-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white border border-slate-100"
          >
            {/* Title block */}
            <div className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12">
              <span
                className="inline-block text-rose-600 bg-rose-50 text-[11px] sm:text-xs font-black px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider"
              >
                राजनीति
              </span>
              <h1
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black leading-[1.4] sm:leading-[1.3] text-slate-900 tracking-tight"
              >
                सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई?
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pb-6 text-xs sm:text-[13px] text-slate-500 border-b border-slate-100 font-medium tracking-wide">
                <span className="flex items-center gap-2">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  फागुन २०, २०८२
                </span>
                <span className="flex items-center gap-2 text-emerald-700 font-bold">
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  सर्लाहीपाटी संवाददाता
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-8 mx-5 sm:mx-8 lg:mx-12 rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
              <div className="relative w-full">
                <Image
                  src="/news_img.jpg"
                  alt="सर्लाही–४ मा गगन–अमरेश भिडन्त"
                  width={1280}
                  height={569}
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              <p className="py-3 px-4 text-xs italic text-slate-500 text-center bg-slate-50 border-t border-slate-100">
                सर्लाही–४ का प्रमुख उम्मेदवारहरू — तस्बिर: सर्लाहीपाटी
              </p>
            </div>

            {/* Share & Body */}
            <div className="px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-10 sm:pb-14">
              {/* Share Row */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                  सेयर गर्नुहोस्:
                </span>
                <a href="#" className="share-btn w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: "#1877f2" }} aria-label="Facebook">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="share-btn w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: "#111" }} aria-label="X">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="share-btn w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: "#25d366" }} aria-label="WhatsApp">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </div>

              {/* Article Body */}
              <div className="article-body">
                <p>
                  सर्लाही–४ को आगामी निर्वाचनमा मुख्य प्रतिस्पर्धा नेपाली
                  कांग्रेसका सभापति गगन थापा र राष्ट्रिय स्वतन्त्र पार्टीका
                  नेता अमरेशकुमार सिंहबीच हुने अनुमान गरिए पनि मैदानमा अर्को
                  रोचक मोड देखिएको छ। यस क्षेत्रका प्रभावशाली स्थानीय नेता
                  तथा &lsquo;किङमेकर&rsquo; भनेर चिनिने शिवपुजन यादवका २६ वर्षीय
                  छोरा अमनिशकुमार यादव पनि प्रतिस्पर्धामा बलियाे छन्।
                </p>
                <p>
                  युवापुस्तालाई प्रतिनिधित्व गर्ने जेन–जी उम्मेदवारको रूपमा
                  उनको उपस्थितिले चुनावी समीकरणलाई थप रोचक बनाएको छ।
                </p>
                <p>
                  शिवपुजन यादव लामो समयदेखि यस क्षेत्रको राजनीतिमा प्रभावशाली
                  भूमिका खेल्दै आएका छन्। विभिन्न चुनावमा उनले दिएको
                  समर्थनले उम्मेदवारको जित–हारमा ठूलो प्रभाव पार्ने गरेको
                  भन्दै उनलाई स्थानीय रूपमा &lsquo;किङमेकर&rsquo; को रूपमा
                  चिनिन्छ।
                </p>
                <p>
                  स्थानीय तह निर्वाचनको नतिजा हेर्दा पनि सर्लाही–४ अन्तर्गतका
                  धेरै क्षेत्रमा एमालेको राम्रो मत आधार रहेको देखिन्छ।
                </p>
                <p>
                  सर्लाही ४ काे उत्तरतर्फ पर्ने बरहथवा नगरपालिकाका चार वटा
                  वडामा अघिल्लो स्थानीय तह निर्वाचनमा एमालेले जित हासिल
                  गरेको थियो, जसले त्यहाँ संगठनात्मक बलियो उपस्थिति
                  देखाउँछ।
                </p>
                <p>
                  दक्षिणतर्फका क्षेत्रमा भने शिवपुजन यादवको व्यक्तिगत प्रभाव
                  र नेटवर्क बलियो मानिन्छ। लामो समयदेखि स्थानीय राजनीतिमा
                  सक्रिय रहेका उनले विभिन्न चुनावमा दिएको समर्थनले परिणाममा
                  प्रभाव पार्ने गरेको छ।
                </p>
                <p>
                  यसरी गगन थापा, अमरेशकुमार सिंह र २६ वर्षकाजेन–जी उम्मेदवार
                  अमनिशकुमार यादवबीचको सम्भावित त्रिकोणात्मक प्रतिस्पर्धाले
                  सर्लाही–४ को चुनावलाई देशकै सबैभन्दा चासोको केन्द्र बनाउने
                  संकेत देखिएको छ।
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-5 flex flex-wrap items-center gap-2" style={{ borderTop: "1px solid var(--color-border)" }}>
                <span className="text-[11px] sm:text-xs font-bold mr-1" style={{ color: "var(--color-text-light)" }}>
                  ट्यागहरू:
                </span>
                {["सर्लाही", "गगन थापा", "अमरेश सिंह", "अमनिश यादव", "निर्वाचन"].map((tag) => (
                  <a key={tag} href="#" className="tag-link text-[11px] sm:text-xs px-3 py-1 rounded-full">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* ────────────  Sidebar  ──────────── */}
          <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 space-y-6">

            {/* Trending Box */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white border border-slate-100">
              <div className="px-6 py-4 text-white font-black text-[15px] flex items-center gap-3 bg-gradient-to-r from-emerald-800 to-emerald-600">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                लोकप्रिय समाचार
              </div>
              <div>
                {[
                  "सर्लाही–४ मा गगन–अमरेश भिडन्त, फाइदा अमनिश यादवलाई?",
                  "स्थानीय तह निर्वाचनमा एमालेको बलियो उपस्थिति",
                  "बरहथवा नगरपालिकामा राजनीतिक दृश्य",
                  "युवा नेतृत्वको उदय: जेन–जी उम्मेदवार",
                  "किङमेकर शिवपुजन यादवको भूमिका",
                ].map((title, i) => (
                  <a
                    key={i}
                    href="#"
                    className="trending-item flex items-start gap-4 px-6 py-4 group bg-white hover:bg-slate-50 border-b border-slate-100 last:border-b-0 transition-colors"
                  >
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[13px] font-black shadow-md ${i === 0 ? "bg-rose-600" : "bg-emerald-700"}`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[14px] font-bold leading-relaxed text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div
              className="rounded-3xl p-8 text-center shadow-2xl shadow-emerald-900/10 relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950"
            >
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="text-3xl mb-3">📰</div>
                <h3 className="text-white text-base font-bold mb-1.5">सर्लाहीपाटी न्यूजलेटर</h3>
                <p className="text-white/65 text-xs mb-4 leading-relaxed">
                  ताजा समाचार तपाईंको इमेलमा पाउनुहोस्
                </p>
                <div className="flex flex-col gap-2.5">
                  <input
                    type="email"
                    placeholder="तपाईंको इमेल"
                    className="newsletter-input rounded-lg px-4 py-2.5 text-sm w-full outline-none"
                    style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                  />
                  <button
                    className="rounded-lg px-4 py-2.5 text-sm font-bold w-full transition-all hover:brightness-110 active:scale-[0.97]"
                    style={{ background: "var(--color-accent)", color: "white" }}
                  >
                    सदस्यता लिनुहोस्
                  </button>
                </div>
              </div>
            </div>


          </aside>
        </div>
      </main>

      {/* ═══════════  FOOTER  ═══════════ */}
      <footer className="bg-slate-900 text-white mt-12 sm:mt-24 border-t-4 border-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-4 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-4 group">
                <Image
                  src="/sarlahipati_favicon.jpg"
                  alt="सर्लाहीपाटी"
                  width={100}
                  height={100}
                  className="h-11 w-11 object-cover rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
                />
                <span className="text-xl font-extrabold tracking-wide">सर्लाहीपाटी</span>
              </a>
              <p className="text-white/50 text-xs leading-relaxed max-w-[260px]">
                सर्लाहीको विश्वसनीय अनलाइन समाचार पोर्टल। स्थानीय तथा राष्ट्रिय समाचारको भरपर्दो स्रोत।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/85 uppercase tracking-wider text-[13px]">द्रुत लिंकहरू</h4>
              <ul className="space-y-2.5 text-xs text-white/55">
                <li><a href="/" className="footer-link">गृहपृष्ठ</a></li>
                <li><a href="#" className="footer-link">राजनीति</a></li>
                <li><a href="#" className="footer-link">समाज</a></li>
                <li><a href="#" className="footer-link">अर्थतन्त्र</a></li>
                <li><a href="#" className="footer-link">खेलकुद</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/85 uppercase tracking-wider text-[13px]">सम्पर्क</h4>
              <ul className="space-y-2.5 text-xs text-white/55">
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  info@sarlahipati.com
                </li>

                <li className="flex items-center gap-2">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  सर्लाही, मधेश प्रदेश
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-sm mb-4 text-white/85 uppercase tracking-wider text-[13px]">सामाजिक सञ्जाल</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-[#1877f2] transition-all duration-200" aria-label="Facebook">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-[#111] transition-all duration-200" aria-label="X">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-[#ff0000] transition-all duration-200" aria-label="YouTube">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-10 pt-6 text-center text-xs text-white/30" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            © {new Date().getFullYear()} सर्लाहीपाटी। सर्वाधिकार सुरक्षित।
          </div>
        </div>
      </footer>
    </div>
  );
}
