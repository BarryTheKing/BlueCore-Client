(() => {
  "use strict";

  /* ================= translations ================= */
  const translations = {
    en: {
      nav: { features: "Features", cosmetics: "Cosmetics", compare: "Compare", install: "Install", faq: "FAQ" },
      hero: {
        eyebrow: "Bedrock Edition · Android",
        titleHtml: "A client reshaped<br><span>in moonlight.</span>",
        sub: "BlueCore is a lightweight client layer that keeps Bedrock worlds running smoothly on your phone, with an interface you can shape with crystal-clear precision.",
        ctaPrimary: "Download latest", ctaGhost: "Browse modules",
        frameTitle: "BlueCore · ClickGUI preview",
        mod: { performance: "Performance", hud: "Dynamic HUD", zoom: "Zoom", ping: "Ping display", photo: "Photo mode", theme: "Crystal theme" },
        on: "On", off: "Off"
      },
      stats: { downloads: "downloads", rating: "community rating", modules: "modules", version: "latest version support" },
      features: { heading: "Four categories, one interface", sub: "Toggle every module with a single tap; settings stay synced across worlds." },
      tabs: { performance: "Performance", visual: "Visual", hud: "HUD", tools: "Tools" },
      mod: {
        chunks: { title: "Smooth Chunks", desc: "Speeds up chunk loading so low-end phones keep moving without freezing." },
        thermal: { title: "Thermal Guard", desc: "Balances CPU/GPU load across long sessions to slow down device heating." },
        ping: { title: "Ping Optimizer", desc: "Watches your server connection and flags you when latency spikes." },
        crystal: { title: "Crystal Theme Pack", desc: "Moonlit particles, sky filters and water/lava shimmer tuning." },
        zoom: { title: "Zoom", desc: "One-tap zoom with no loss of clarity — handy for sniping details or exploring." },
        photo: { title: "Photo Mode", desc: "Hides the HUD and frees the camera angle for clean screenshots." },
        health: { title: "Dynamic Health/Hunger", desc: "Drag indicators to any corner and resize them to taste." },
        keys: { title: "Keystrokes", desc: "Shows live movement and action inputs — great for content creators." },
        coords: { title: "Coordinates + Compass", desc: "Keeps position, heading and altitude in one slim strip up top." },
        packs: { title: "Pack Manager", desc: "Enable, sort and apply texture and behavior packs from one screen." },
        servers: { title: "Server List", desc: "Pin your go-to servers and check ping and player count before joining." },
        touch: { title: "Touch Layout Editor", desc: "Fine-tune button size, opacity and placement down to the pixel." }
      },
      cosmetics: {
        heading: "Cosmetics", badge: "Coming in v2",
        sub: "A first look at capes, trails and emotes landing in the next major update. This is a snapshot preview — nothing here can be equipped yet.",
        locked: "Locked · v2",
        footnote: "Previews are early work-in-progress and may change before release."
      },
      cosmetic: {
        cape: { title: "Lunar Cape", desc: "A flowing cape with a soft moonlit shimmer." },
        trail: { title: "Comet Trail", desc: "Leaves a brief trail of light behind you while sprinting." },
        emote: { title: "Crystal Emote", desc: "A short emote that summons floating shards around you." },
        aurora: { title: "Aurora Cloak", desc: "A cloak that slowly shifts color like the northern lights." },
        dust: { title: "Stardust Particles", desc: "Ambient sparkle particles drifting around your character." },
        wings: { title: "Moonlit Wings", desc: "Decorative wings with a subtle, steady glow." }
      },
      compare: {
        heading: "Vanilla vs BlueCore",
        col: { feature: "Feature", vanilla: "Vanilla", bluecore: "BlueCore" },
        row1: { feature: "Stable FPS on low-end phones", vanilla: "Depends on device", bluecore: "Optimized" },
        row2: { feature: "Custom HUD layout", vanilla: "No", bluecore: "Yes" },
        row3: { feature: "Cosmetics", vanilla: "No", bluecore: "Coming in v2" },
        row4: { feature: "Built-in pack manager", vanilla: "No", bluecore: "Yes" },
        row5: { feature: "Root required", vanilla: "—", bluecore: "No" }
      },
      testimonials: { heading: "What players say" },
      testimonial: {
        "1": { quote: "My FPS finally feels stable on my old phone.", name: "_Nova" },
        "2": { quote: "The HUD editor is exactly what I wanted.", name: "ClayBuilds" },
        "3": { quote: "Waiting for cosmetics in v2!", name: "Pekka.exe" }
      },
      install: {
        heading: "Install in three steps",
        step1: { title: "Pick your version", desc: "Choose the BlueCore build that matches your device below." },
        step2: { title: "Allow unknown sources", desc: "Give your file manager one-time install permission in Android settings." },
        step3: { title: "Open Minecraft and play", desc: "BlueCore runs in the background and works in any world right away." },
        versionLabel: "Bedrock version", version121: "1.21.x — latest",
        downloadPrefix: "Download",
        note: "Source is reviewable on GitHub. Always follow the rules of the server you play on."
      },
      changelog: {
        heading: "Changelog",
        v142: "Added the Ping Optimizer module; improved water shimmer in the Crystal Theme pack.",
        v140: "Rebuilt the touch layout editor from scratch and added Thermal Guard.",
        v131: "1.21.x support, minor HUD positioning fixes."
      },
      roadmap: {
        heading: "What's next — v2 roadmap", inProgress: "In progress", planned: "Planned",
        item1: "Cosmetics system goes live", item2: "Cloud-synced settings",
        item3: "Tablet-friendly layout", item4: "Per-device performance profiles"
      },
      community: { heading: "Stay in the loop", sub: "Star the repo on GitHub to hear about v2 first.", cta: "View on GitHub" },
      faq: {
        heading: "Frequently asked questions",
        q1: { q: "Does BlueCore put my account at risk?", a: "BlueCore runs locally on your device and never touches your account credentials; as with any third-party software, use is at your own responsibility." },
        q2: { q: "Will I get banned on servers?", a: "BlueCore doesn't include modules that break fairness between players — only performance and visual customization. Always check the rules of the server you join." },
        q3: { q: "When do cosmetics unlock?", a: "Cosmetics are a snapshot preview for the upcoming v2 release and can't be equipped yet. They'll unlock once v2 ships." },
        q4: { q: "Is there an iOS version?", a: "Only Android is in development right now. iOS isn't on the roadmap." }
      },
      footer: { copyright: "© 2026 BlueCore Client", disclaimer: "Not an official Minecraft or Mojang product." }
    },

    tr: {
      nav: { features: "Modüller", cosmetics: "Cosmetics", compare: "Karşılaştır", install: "Kurulum", faq: "S.S.S." },
      hero: {
        eyebrow: "Bedrock Edition · Android",
        titleHtml: "Ay ışığında<br><span>yeniden</span> şekillenen client.",
        sub: "BlueCore, telefonunda Bedrock dünyalarını daha akıcı çalıştıran, arayüzünü kristal netliğinde özelleştiren hafif bir istemci katmanı.",
        ctaPrimary: "Son sürümü indir", ctaGhost: "Modülleri gör",
        frameTitle: "BlueCore · ClickGUI önizleme",
        mod: { performance: "Performans", hud: "Dinamik HUD", zoom: "Zoom", ping: "Ping göstergesi", photo: "Fotoğraf modu", theme: "Kristal tema" },
        on: "Açık", off: "Kapalı"
      },
      stats: { downloads: "indirme", rating: "topluluk puanı", modules: "modül", version: "güncel sürüm desteği" },
      features: { heading: "Dört kategori, tek arayüz", sub: "Her modül tek dokunuşla açılır kapanır; ayarlar dünyalar arasında senkronize kalır." },
      tabs: { performance: "Performans", visual: "Görsel", hud: "HUD", tools: "Araçlar" },
      mod: {
        chunks: { title: "Akıcı Chunk", desc: "Düşük donanımlı telefonlarda bile chunk yüklemeyi hızlandırıp donmaları azaltır." },
        thermal: { title: "Isınma Koruması", desc: "Uzun oturumlarda CPU/GPU yükünü dengeleyerek cihazın ısınmasını geciktirir." },
        ping: { title: "Ping Optimizer", desc: "Sunucu bağlantısını izler, gecikme arttığında seni bilgilendirir." },
        crystal: { title: "Kristal Tema Paketi", desc: "Ay ışığı esintili parçacıklar, gökyüzü filtreleri ve su/lav parlaklık ayarları." },
        zoom: { title: "Zoom", desc: "Tek tuşla netlik kaybetmeden yakınlaştırma; keşif ya da detay odaklı anlarda fark yaratır." },
        photo: { title: "Fotoğraf Modu", desc: "HUD'u gizleyip serbest kamera açısıyla temiz ekran görüntüsü almana izin verir." },
        health: { title: "Dinamik Can/Açlık", desc: "Göstergeleri sürükle bırak ile istediğin köşeye taşı, boyutunu ayarla." },
        keys: { title: "Tuş Vuruşları", desc: "Hareket ve aksiyon tuşlarını ekranda canlı gösterir; içerik üreticileri için ideal." },
        coords: { title: "Koordinat + Pusula", desc: "Konum, yön ve yükseklik bilgisini sade bir şerit halinde üstte tutar." },
        packs: { title: "Paket Yöneticisi", desc: "Doku ve davranış paketlerini tek ekrandan etkinleştir, sırala, dünyalara uygula." },
        servers: { title: "Sunucu Listesi", desc: "Sık kullandığın sunucuları sabitle, katılmadan önce ping ve oyuncu sayısını gör." },
        touch: { title: "Dokunmatik Düzen Editörü", desc: "Buton boyutu, opaklık ve yerleşimini santim santim özelleştir." }
      },
      cosmetics: {
        heading: "Cosmetics", badge: "v2'de geliyor",
        sub: "Bir sonraki büyük güncellemeyle gelecek pelerin, iz ve emote'lere ilk bakış. Bu bir snapshot önizlemesi — şu an hiçbiri kullanılamaz.",
        locked: "Kilitli · v2",
        footnote: "Önizlemeler erken aşamadadır ve çıkışa kadar değişebilir."
      },
      cosmetic: {
        cape: { title: "Lunar Pelerin", desc: "Yumuşak ay ışığı parıltısına sahip, dalgalanan bir pelerin." },
        trail: { title: "Kuyrukluyıldız İzi", desc: "Koşarken arkanda kısa süreli bir ışık izi bırakır." },
        emote: { title: "Kristal Emote", desc: "Etrafında süzülen kristal parçaları çağıran kısa bir emote." },
        aurora: { title: "Aurora Pelerini", desc: "Kuzey ışıkları gibi yavaşça renk değiştiren bir pelerin." },
        dust: { title: "Yıldız Tozu Parçacıkları", desc: "Karakterinin etrafında süzülen ortam parıltı parçacıkları." },
        wings: { title: "Ay Işığı Kanatları", desc: "Hafif ve sabit bir parıltıya sahip dekoratif kanatlar." }
      },
      compare: {
        heading: "Vanilla ile BlueCore",
        col: { feature: "Özellik", vanilla: "Vanilla", bluecore: "BlueCore" },
        row1: { feature: "Düşük donanımda stabil FPS", vanilla: "Cihaza bağlı", bluecore: "Optimize" },
        row2: { feature: "Özelleştirilebilir HUD düzeni", vanilla: "Yok", bluecore: "Var" },
        row3: { feature: "Cosmetics", vanilla: "Yok", bluecore: "v2'de geliyor" },
        row4: { feature: "Dahili paket yöneticisi", vanilla: "Yok", bluecore: "Var" },
        row5: { feature: "Root gerekir mi", vanilla: "—", bluecore: "Hayır" }
      },
      testimonials: { heading: "Oyuncular ne diyor" },
      testimonial: {
        "1": { quote: "Eski telefonumda FPS artık gerçekten stabil hissettiriyor.", name: "_Nova" },
        "2": { quote: "HUD editörü tam istediğim gibiydi.", name: "ClayBuilds" },
        "3": { quote: "v2'deki cosmetics'i bekliyorum!", name: "Pekka.exe" }
      },
      install: {
        heading: "Üç adımda kurulum",
        step1: { title: "Sürümünü seç", desc: "Cihazına uygun BlueCore sürümünü aşağıdan seç." },
        step2: { title: "Bilinmeyen kaynaklara izin ver", desc: "Android ayarlarından dosya yöneticin için tek seferlik kurulum izni ver." },
        step3: { title: "Minecraft'ı aç, oyna", desc: "BlueCore arka planda devreye girer; herhangi bir dünyada doğrudan kullanılabilir." },
        versionLabel: "Bedrock sürümü", version121: "1.21.x — güncel",
        downloadPrefix: "İndir",
        note: "Kaynağı GitHub üzerinde incelenebilir. Oynadığın sunucunun kurallarına her zaman uy."
      },
      changelog: {
        heading: "Değişiklik günlüğü",
        v142: "Ping Optimizer modülü eklendi; Kristal Tema paketinde su parlaklığı iyileştirildi.",
        v140: "Dokunmatik düzen editörü tamamen yenilendi, Isınma Koruması modülü eklendi.",
        v131: "1.21.x sürüm desteği, küçük HUD konumlama düzeltmeleri."
      },
      roadmap: {
        heading: "Sırada ne var — v2 yol haritası", inProgress: "Devam ediyor", planned: "Planlandı",
        item1: "Cosmetics sistemi yayına giriyor", item2: "Buluta senkronize ayarlar",
        item3: "Tablet uyumlu düzen", item4: "Cihaza özel performans profilleri"
      },
      community: { heading: "Haberdar ol", sub: "v2'yi ilk öğrenmek için GitHub'da repoyu yıldızla.", cta: "GitHub'da görüntüle" },
      faq: {
        heading: "Sık sorulanlar",
        q1: { q: "BlueCore hesabımı riske atar mı?", a: "BlueCore cihazında yerel olarak çalışır ve hesap bilgilerine asla dokunmaz; yine de herhangi bir üçüncü taraf yazılım gibi sorumluluk kullanıcıya aittir." },
        q2: { q: "Sunucularda yasaklanır mıyım?", a: "BlueCore, oyuncular arası dengeyi bozan modüller içermez — yalnızca performans ve görsel özelleştirme sunar. Katıldığın sunucunun kurallarını her zaman kontrol et." },
        q3: { q: "Cosmetics ne zaman kullanılabilir olacak?", a: "Cosmetics, yaklaşan v2 sürümü için bir snapshot önizlemesidir ve henüz kuşanılamaz. v2 yayınlandığında açılacak." },
        q4: { q: "iOS sürümü var mı?", a: "Şu an yalnızca Android için geliştiriliyor. iOS yol haritasında değil." }
      },
      footer: { copyright: "© 2026 BlueCore Client", disclaimer: "Minecraft ve Mojang'ın resmi bir ürünü değildir." }
    },

    de: {
      nav: { features: "Funktionen", cosmetics: "Kosmetik", compare: "Vergleich", install: "Installation", faq: "FAQ" },
      hero: {
        eyebrow: "Bedrock Edition · Android",
        titleHtml: "Ein Client, neu geformt<br><span>im Mondlicht.</span>",
        sub: "BlueCore ist eine schlanke Client-Schicht, die Bedrock-Welten flüssig auf deinem Handy laufen lässt — mit einer Oberfläche, die du mit kristallklarer Präzision gestalten kannst.",
        ctaPrimary: "Neueste Version laden", ctaGhost: "Module ansehen",
        frameTitle: "BlueCore · ClickGUI-Vorschau",
        mod: { performance: "Leistung", hud: "Dynamisches HUD", zoom: "Zoom", ping: "Ping-Anzeige", photo: "Fotomodus", theme: "Kristall-Theme" },
        on: "An", off: "Aus"
      },
      stats: { downloads: "Downloads", rating: "Community-Bewertung", modules: "Module", version: "aktuelle Versionsunterstützung" },
      features: { heading: "Vier Kategorien, eine Oberfläche", sub: "Jedes Modul mit einem Tipp umschalten; Einstellungen bleiben weltübergreifend synchron." },
      tabs: { performance: "Leistung", visual: "Visuell", hud: "HUD", tools: "Werkzeuge" },
      mod: {
        chunks: { title: "Flüssige Chunks", desc: "Beschleunigt das Laden von Chunks, damit auch schwächere Handys ruckelfrei bleiben." },
        thermal: { title: "Thermischer Schutz", desc: "Gleicht CPU/GPU-Last über lange Sitzungen aus und verlangsamt die Erwärmung." },
        ping: { title: "Ping-Optimierer", desc: "Beobachtet deine Serververbindung und warnt dich bei Latenzspitzen." },
        crystal: { title: "Kristall-Theme-Paket", desc: "Mondlicht-Partikel, Himmelsfilter und Wasser-/Lava-Glanz-Einstellungen." },
        zoom: { title: "Zoom", desc: "Zoom mit einem Tipp ohne Schärfeverlust — praktisch zum Erkunden oder für Details." },
        photo: { title: "Fotomodus", desc: "Blendet das HUD aus und gibt den Kamerawinkel für saubere Screenshots frei." },
        health: { title: "Dynamisches Leben/Hunger", desc: "Ziehe Anzeigen in jede Ecke und passe ihre Größe an." },
        keys: { title: "Tastenanzeige", desc: "Zeigt Bewegungs- und Aktionseingaben live an — ideal für Content Creator." },
        coords: { title: "Koordinaten + Kompass", desc: "Hält Position, Richtung und Höhe in einer schlanken Leiste oben." },
        packs: { title: "Paket-Manager", desc: "Textur- und Verhaltenspakete von einem Bildschirm aus aktivieren, sortieren und anwenden." },
        servers: { title: "Serverliste", desc: "Pinne deine Lieblingsserver und prüfe Ping und Spielerzahl vor dem Beitritt." },
        touch: { title: "Touch-Layout-Editor", desc: "Feinabstimmung von Knopfgröße, Transparenz und Position bis aufs Pixel." }
      },
      cosmetics: {
        heading: "Kosmetik", badge: "Kommt in v2",
        sub: "Ein erster Blick auf Umhänge, Spuren und Emotes im nächsten großen Update. Dies ist eine Snapshot-Vorschau — nichts davon ist bereits nutzbar.",
        locked: "Gesperrt · v2",
        footnote: "Vorschauen sind frühe Entwürfe und können sich bis zur Veröffentlichung ändern."
      },
      cosmetic: {
        cape: { title: "Lunar-Umhang", desc: "Ein fließender Umhang mit sanftem Mondlichtschimmer." },
        trail: { title: "Kometenspur", desc: "Hinterlässt beim Sprinten kurz eine Lichtspur." },
        emote: { title: "Kristall-Emote", desc: "Ein kurzes Emote, das schwebende Splitter um dich herum erscheinen lässt." },
        aurora: { title: "Aurora-Umhang", desc: "Ein Umhang, der wie Polarlichter langsam die Farbe wechselt." },
        dust: { title: "Sternenstaub-Partikel", desc: "Sanft funkelnde Partikel, die um deinen Charakter schweben." },
        wings: { title: "Mondlicht-Flügel", desc: "Dekorative Flügel mit einem dezenten, gleichmäßigen Leuchten." }
      },
      compare: {
        heading: "Vanilla vs. BlueCore",
        col: { feature: "Funktion", vanilla: "Vanilla", bluecore: "BlueCore" },
        row1: { feature: "Stabile FPS auf schwächeren Handys", vanilla: "Je nach Gerät", bluecore: "Optimiert" },
        row2: { feature: "Eigenes HUD-Layout", vanilla: "Nein", bluecore: "Ja" },
        row3: { feature: "Kosmetik", vanilla: "Nein", bluecore: "Kommt in v2" },
        row4: { feature: "Integrierter Paket-Manager", vanilla: "Nein", bluecore: "Ja" },
        row5: { feature: "Root erforderlich", vanilla: "—", bluecore: "Nein" }
      },
      testimonials: { heading: "Was Spieler sagen" },
      testimonial: {
        "1": { quote: "Meine FPS fühlen sich auf meinem alten Handy endlich stabil an.", name: "_Nova" },
        "2": { quote: "Der HUD-Editor ist genau das, was ich wollte.", name: "ClayBuilds" },
        "3": { quote: "Ich warte auf die Kosmetik in v2!", name: "Pekka.exe" }
      },
      install: {
        heading: "In drei Schritten installieren",
        step1: { title: "Version wählen", desc: "Wähle unten die BlueCore-Version, die zu deinem Gerät passt." },
        step2: { title: "Unbekannte Quellen erlauben", desc: "Erteile deinem Dateimanager in den Android-Einstellungen eine einmalige Installationsberechtigung." },
        step3: { title: "Minecraft öffnen und spielen", desc: "BlueCore läuft im Hintergrund und funktioniert sofort in jeder Welt." },
        versionLabel: "Bedrock-Version", version121: "1.21.x — neueste",
        downloadPrefix: "Herunterladen",
        note: "Der Quellcode ist auf GitHub einsehbar. Halte dich immer an die Regeln des Servers, auf dem du spielst."
      },
      changelog: {
        heading: "Änderungsprotokoll",
        v142: "Ping-Optimierer-Modul hinzugefügt; Wasserglanz im Kristall-Theme-Paket verbessert.",
        v140: "Touch-Layout-Editor komplett überarbeitet, Thermischer Schutz hinzugefügt.",
        v131: "Unterstützung für 1.21.x, kleinere HUD-Positionierungskorrekturen."
      },
      roadmap: {
        heading: "Was als Nächstes kommt — v2-Roadmap", inProgress: "In Arbeit", planned: "Geplant",
        item1: "Kosmetik-System geht live", item2: "Cloud-synchronisierte Einstellungen",
        item3: "Tablet-freundliches Layout", item4: "Geräteabhängige Leistungsprofile"
      },
      community: { heading: "Bleib auf dem Laufenden", sub: "Markiere das Repo auf GitHub mit einem Stern, um als Erster von v2 zu erfahren.", cta: "Auf GitHub ansehen" },
      faq: {
        heading: "Häufig gestellte Fragen",
        q1: { q: "Gefährdet BlueCore mein Konto?", a: "BlueCore läuft lokal auf deinem Gerät und greift nie auf deine Kontodaten zu; wie bei jeder Drittanbieter-Software liegt die Nutzung in deiner eigenen Verantwortung." },
        q2: { q: "Werde ich auf Servern gebannt?", a: "BlueCore enthält keine Module, die die Fairness zwischen Spielern beeinträchtigen — nur Leistungs- und visuelle Anpassungen. Prüfe immer die Regeln des Servers, dem du beitrittst." },
        q3: { q: "Wann wird die Kosmetik freigeschaltet?", a: "Kosmetik ist eine Snapshot-Vorschau für das kommende v2-Release und kann noch nicht ausgerüstet werden. Sie wird mit v2 freigeschaltet." },
        q4: { q: "Gibt es eine iOS-Version?", a: "Derzeit wird nur für Android entwickelt. iOS steht nicht auf der Roadmap." }
      },
      footer: { copyright: "© 2026 BlueCore Client", disclaimer: "Kein offizielles Minecraft- oder Mojang-Produkt." }
    },

    es: {
      nav: { features: "Funciones", cosmetics: "Cosméticos", compare: "Comparar", install: "Instalación", faq: "Preguntas" },
      hero: {
        eyebrow: "Bedrock Edition · Android",
        titleHtml: "Un client transformado<br><span>a la luz de la luna.</span>",
        sub: "BlueCore es una capa de cliente ligera que mantiene los mundos de Bedrock funcionando con fluidez en tu teléfono, con una interfaz que puedes moldear con precisión de cristal.",
        ctaPrimary: "Descargar última versión", ctaGhost: "Ver módulos",
        frameTitle: "BlueCore · vista previa de ClickGUI",
        mod: { performance: "Rendimiento", hud: "HUD dinámico", zoom: "Zoom", ping: "Indicador de ping", photo: "Modo foto", theme: "Tema de cristal" },
        on: "Activado", off: "Desactivado"
      },
      stats: { downloads: "descargas", rating: "valoración de la comunidad", modules: "módulos", version: "soporte de la última versión" },
      features: { heading: "Cuatro categorías, una sola interfaz", sub: "Activa cada módulo con un toque; los ajustes se mantienen sincronizados entre mundos." },
      tabs: { performance: "Rendimiento", visual: "Visual", hud: "HUD", tools: "Herramientas" },
      mod: {
        chunks: { title: "Chunks Fluidos", desc: "Acelera la carga de chunks para que los teléfonos modestos no se congelen." },
        thermal: { title: "Protección Térmica", desc: "Equilibra la carga de CPU/GPU en sesiones largas para ralentizar el calentamiento del dispositivo." },
        ping: { title: "Optimizador de Ping", desc: "Vigila tu conexión al servidor y te avisa cuando la latencia sube." },
        crystal: { title: "Paquete de Tema de Cristal", desc: "Partículas iluminadas por la luna, filtros de cielo y ajustes de brillo de agua/lava." },
        zoom: { title: "Zoom", desc: "Zoom de un toque sin perder nitidez; útil para explorar o fijarte en detalles." },
        photo: { title: "Modo Foto", desc: "Oculta el HUD y libera el ángulo de cámara para capturas limpias." },
        health: { title: "Vida/Hambre Dinámicos", desc: "Arrastra los indicadores a cualquier esquina y ajusta su tamaño." },
        keys: { title: "Teclas Pulsadas", desc: "Muestra en vivo las entradas de movimiento y acción; ideal para creadores de contenido." },
        coords: { title: "Coordenadas + Brújula", desc: "Mantiene posición, rumbo y altitud en una franja delgada arriba." },
        packs: { title: "Gestor de Paquetes", desc: "Activa, ordena y aplica paquetes de texturas y comportamiento desde una pantalla." },
        servers: { title: "Lista de Servidores", desc: "Fija tus servidores favoritos y revisa ping y número de jugadores antes de unirte." },
        touch: { title: "Editor de Controles Táctiles", desc: "Ajusta tamaño, opacidad y posición de botones con precisión." }
      },
      cosmetics: {
        heading: "Cosméticos", badge: "Llega en v2",
        sub: "Un primer vistazo a capas, estelas y emotes que llegarán en la próxima gran actualización. Esto es una vista previa snapshot — nada de esto se puede equipar todavía.",
        locked: "Bloqueado · v2",
        footnote: "Las vistas previas son trabajo en progreso y pueden cambiar antes del lanzamiento."
      },
      cosmetic: {
        cape: { title: "Capa Lunar", desc: "Una capa ondulante con un suave brillo de luz de luna." },
        trail: { title: "Estela de Cometa", desc: "Deja una breve estela de luz detrás de ti al correr." },
        emote: { title: "Emote de Cristal", desc: "Un emote corto que invoca fragmentos flotantes a tu alrededor." },
        aurora: { title: "Capa Aurora", desc: "Una capa que cambia de color lentamente como una aurora boreal." },
        dust: { title: "Partículas de Polvo Estelar", desc: "Partículas de brillo ambiental que flotan alrededor de tu personaje." },
        wings: { title: "Alas de Luz de Luna", desc: "Alas decorativas con un brillo sutil y constante." }
      },
      compare: {
        heading: "Vanilla vs BlueCore",
        col: { feature: "Función", vanilla: "Vanilla", bluecore: "BlueCore" },
        row1: { feature: "FPS estable en teléfonos modestos", vanilla: "Depende del dispositivo", bluecore: "Optimizado" },
        row2: { feature: "Diseño de HUD personalizado", vanilla: "No", bluecore: "Sí" },
        row3: { feature: "Cosméticos", vanilla: "No", bluecore: "Llega en v2" },
        row4: { feature: "Gestor de paquetes integrado", vanilla: "No", bluecore: "Sí" },
        row5: { feature: "Requiere root", vanilla: "—", bluecore: "No" }
      },
      testimonials: { heading: "Lo que dicen los jugadores" },
      testimonial: {
        "1": { quote: "Por fin mi FPS se siente estable en mi teléfono viejo.", name: "_Nova" },
        "2": { quote: "El editor de HUD es justo lo que quería.", name: "ClayBuilds" },
        "3": { quote: "¡Esperando los cosméticos de v2!", name: "Pekka.exe" }
      },
      install: {
        heading: "Instala en tres pasos",
        step1: { title: "Elige tu versión", desc: "Elige abajo la versión de BlueCore que coincide con tu dispositivo." },
        step2: { title: "Permite orígenes desconocidos", desc: "Dale a tu gestor de archivos permiso de instalación único en los ajustes de Android." },
        step3: { title: "Abre Minecraft y juega", desc: "BlueCore funciona en segundo plano y se activa en cualquier mundo al instante." },
        versionLabel: "Versión de Bedrock", version121: "1.21.x — última",
        downloadPrefix: "Descargar",
        note: "El código fuente se puede revisar en GitHub. Sigue siempre las reglas del servidor en el que juegues."
      },
      changelog: {
        heading: "Registro de cambios",
        v142: "Se añadió el módulo Optimizador de Ping; se mejoró el brillo del agua en el paquete de Tema de Cristal.",
        v140: "Editor de controles táctiles reconstruido desde cero y se añadió Protección Térmica.",
        v131: "Soporte para 1.21.x, pequeñas correcciones de posición del HUD."
      },
      roadmap: {
        heading: "Lo que viene — hoja de ruta v2", inProgress: "En progreso", planned: "Planeado",
        item1: "El sistema de cosméticos se activa", item2: "Ajustes sincronizados en la nube",
        item3: "Diseño adaptado a tablets", item4: "Perfiles de rendimiento por dispositivo"
      },
      community: { heading: "Mantente al tanto", sub: "Marca el repositorio en GitHub con una estrella para enterarte primero de v2.", cta: "Ver en GitHub" },
      faq: {
        heading: "Preguntas frecuentes",
        q1: { q: "¿BlueCore pone en riesgo mi cuenta?", a: "BlueCore se ejecuta localmente en tu dispositivo y nunca toca las credenciales de tu cuenta; como con cualquier software de terceros, el uso es tu propia responsabilidad." },
        q2: { q: "¿Me banearán en los servidores?", a: "BlueCore no incluye módulos que rompan la equidad entre jugadores — solo personalización de rendimiento y visual. Revisa siempre las reglas del servidor al que te unas." },
        q3: { q: "¿Cuándo se desbloquean los cosméticos?", a: "Los cosméticos son una vista previa snapshot para el próximo lanzamiento v2 y todavía no se pueden equipar. Se desbloquearán cuando salga v2." },
        q4: { q: "¿Hay una versión para iOS?", a: "Por ahora solo se desarrolla para Android. iOS no está en la hoja de ruta." }
      },
      footer: { copyright: "© 2026 BlueCore Client", disclaimer: "No es un producto oficial de Minecraft ni de Mojang." }
    }
  };

  const SUPPORTED_LANGS = Object.keys(translations);
  const LANG_KEY = "bluecore-lang";

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function t(lang, key) {
    const value = getNested(translations[lang], key);
    if (value !== undefined) return value;
    return getNested(translations.en, key);
  }

  let currentLang = "en";

  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = "en";
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(lang, el.getAttribute("data-i18n"));
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = t(lang, el.getAttribute("data-i18n-html"));
      if (value !== undefined) el.innerHTML = value;
    });

    refreshDownloadLabel();
  }

  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    const saved = localStorage.getItem(LANG_KEY);
    const browserLang = (navigator.language || "en").slice(0, 2);
    const initial = saved || (SUPPORTED_LANGS.includes(browserLang) ? browserLang : "en");
    langSelect.value = initial;
    applyLanguage(initial);

    langSelect.addEventListener("change", () => {
      localStorage.setItem(LANG_KEY, langSelect.value);
      applyLanguage(langSelect.value);
    });
  } else {
    applyLanguage("en");
  }

  /* ================= theme toggle ================= */
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const THEME_KEY = "bluecore-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  applyTheme(getPreferredTheme());

  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ================= module category tabs ================= */
  const tabs = document.querySelectorAll(".module-tab");
  const cards = document.querySelectorAll(".module-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tb) => tb.classList.remove("is-active"));
      tab.classList.add("is-active");
      const cat = tab.dataset.cat;
      cards.forEach((card) => {
        card.classList.toggle("is-hidden", card.dataset.cat !== cat);
      });
    });
  });

  /* ================= version picker + download label ================= */
  const versionSelect = document.getElementById("version-select");
  const downloadBtn = document.getElementById("download-btn");
  const versionToFile = {
    "1.21.x": "BlueCore_1.4.2.apk",
    "1.20.x": "BlueCore_1.3.1.apk",
    "1.19.x": "BlueCore_1.2.0.apk",
  };

  function refreshDownloadLabel() {
    if (!versionSelect || !downloadBtn) return;
    const file = versionToFile[versionSelect.value] || versionToFile["1.21.x"];
    downloadBtn.textContent = `${t(currentLang, "install.downloadPrefix")} ${file}`;
  }

  if (versionSelect) versionSelect.addEventListener("change", refreshDownloadLabel);

  /* ================= scroll reveal ================= */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ================= nebula starfield background ================= */
  const canvas = document.getElementById("nebula-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let width, height;
  let animId = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.round((width * height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      drift: (Math.random() - 0.5) * 0.04,
      twinkleSpeed: Math.random() * 0.015 + 0.003,
      twinklePhase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    const grad = ctx.createRadialGradient(
      width * 0.75, height * 0.15, 0,
      width * 0.75, height * 0.15, Math.max(width, height) * 0.8
    );
    grad.addColorStop(0, "rgba(91, 141, 239, 0.22)");
    grad.addColorStop(0.5, "rgba(127, 214, 255, 0.09)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const grad2 = ctx.createRadialGradient(
      width * 0.15, height * 0.8, 0,
      width * 0.15, height * 0.8, Math.max(width, height) * 0.7
    );
    grad2.addColorStop(0, "rgba(91, 141, 239, 0.14)");
    grad2.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    for (const s of stars) {
      const twinkle = reduceMotion
        ? s.baseAlpha
        : s.baseAlpha * (0.6 + 0.4 * Math.sin(time * s.twinkleSpeed + s.twinklePhase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(234, 246, 255, ${twinkle})`;
      ctx.fill();

      if (!reduceMotion) {
        s.y += s.drift;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }
    }

    animId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  animId = requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    } else if (!document.hidden && !animId) {
      animId = requestAnimationFrame(draw);
    }
  });
})();
