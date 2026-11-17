const translations = {
  tr: {
    navFeatures:"Özellikler",navAbout:"Hakkında",navDownload:"İndir",eyebrow:"MINECRAFT İÇİN YENİ BİR DENEYİM",
    heroTitle:'Oyunun.<br><span>Senin tarzın.</span>',heroText:"BlueCore Client, Minecraft deneyimini kişiselleştirmek için tasarlanan modern bir istemci projesidir. Daha fazlası için kendi çekirdeğini keşfet.",
    exploreBtn:"BlueCore'u keşfet",featuresBtn:"Özellikleri incele",statusNote:"Geliştirme aşamasında · Yakında daha fazla bilgi",
    statOne:"Tek merkez",statOneSub:"Düzenli bir deneyim",statTwo:"Kişiselleştir",statTwoSub:"Tarzını yansıt",statThree:"Hafif tasarım",statThreeSub:"Sadelik öncelikli",statFour:"Yeni fikirler",statFourSub:"Sürekli gelişim hedefi",
    featuresEyebrow:"BLUECORE EXPERIENCE",featuresTitle:'Daha fazlası.<br><span>Daha kişisel.</span>',featuresIntro:"Oyun deneyimini tek bir yerde toplama fikrinden, sade ve kullanışlı arayüze kadar her ayrıntı BlueCore kimliğiyle düşünülüyor.",
    feature1Title:"Tek merkezden yönetim",feature1Text:"Sürüm ve istemci seçeneklerini anlaşılır bir arayüzde bir araya getirme hedefi.",feature2Title:"Kişiselleştirilebilir görünüm",feature2Text:"Arayüzünü kendi renklerin ve tercihlerinle şekillendir.",feature3Title:"Akıcı deneyim hedefi",feature3Text:"Sadelik ve performans bilinciyle tasarlanan bir proje yaklaşımı.",
    aboutEyebrow:"BUILT AROUND BLUE",aboutTitle:"Merkezinde sen varsın.",aboutText:"BlueCore, Minecraft oyuncuları için tasarlanan bağımsız bir istemci projesidir. Bu web sayfası proje tanıtımıdır; listelenen fikirler geliştirme planını temsil eder ve henüz yayımlanmış özellikler olarak değerlendirilmemelidir.",learnMore:"Projeyi takip et",
    downloadEyebrow:"NEXT STOP: BLUECORE",downloadTitle:'Hazır olduğunda,<br><span>çekirdeğe katıl.</span>',downloadText:"BlueCore henüz geliştirme aşamasında. İndirme bağlantısı yayımlandığında bu bölüm güncellenecek.",soonBtn:"Çok yakında",footerText:"Bağımsız bir Minecraft istemci projesi."
  },
  en: {
    navFeatures:"Features",navAbout:"About",navDownload:"Download",eyebrow:"A NEW EXPERIENCE FOR MINECRAFT",
    heroTitle:'Your game.<br><span>Your style.</span>',heroText:"BlueCore Client is a modern client project designed to make your Minecraft experience your own. Discover the core of something new.",
    exploreBtn:"Explore BlueCore",featuresBtn:"Explore features",statusNote:"In development · More information coming soon",
    statOne:"One hub",statOneSub:"A more organized experience",statTwo:"Make it yours",statTwoSub:"Show your style",statThree:"Lightweight design",statThreeSub:"Simplicity first",statFour:"Fresh ideas",statFourSub:"Built to keep evolving",
    featuresEyebrow:"BLUECORE EXPERIENCE",featuresTitle:'More possibilities.<br><span>More personal.</span>',featuresIntro:"From bringing your game experience together to a clean, useful interface, every detail is imagined with the BlueCore identity.",
    feature1Title:"One central hub",feature1Text:"The goal is to bring version and client options together in a clear interface.",feature2Title:"Customizable look",feature2Text:"Shape the interface with your own colors and preferences.",feature3Title:"A smoother experience",feature3Text:"A project approach designed with simplicity and performance in mind.",
    aboutEyebrow:"BUILT AROUND BLUE",aboutTitle:"You're at the center.",aboutText:"BlueCore is an independent client project designed for Minecraft players. This is a project introduction page; the ideas listed represent development goals and should not be considered released features yet.",learnMore:"Follow the project",
    downloadEyebrow:"NEXT STOP: BLUECORE",downloadTitle:'When it is ready,<br><span>join the core.</span>',downloadText:"BlueCore is still in development. This section will be updated when a download becomes available.",soonBtn:"Coming soon",footerText:"An independent Minecraft client project."
  }
};

const languageSelect = document.getElementById("languageSelect");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function setLanguage(lang) {
  const pack = translations[lang] || translations.tr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = pack[el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = pack[el.dataset.i18nHtml];
    if (value) el.innerHTML = value;
  });
  languageSelect.value = lang;
  try { localStorage.setItem("bluecore-language", lang); } catch (_) {}
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☼" : "☾";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  try { localStorage.setItem("bluecore-theme", theme); } catch (_) {}
}

languageSelect.addEventListener("change", e => setLanguage(e.target.value));
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));

let savedTheme = "dark", savedLanguage = "tr";
try {
  savedTheme = localStorage.getItem("bluecore-theme") || "dark";
  savedLanguage = localStorage.getItem("bluecore-language") || "tr";
} catch (_) {}
setTheme(savedTheme);
setLanguage(savedLanguage);
document.getElementById("year").textContent = new Date().getFullYear();