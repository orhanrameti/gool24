(function () {
  'use strict';

  /* Ndeshjet lexohen nga data.js (window.ORION_STREAMS). Ndrysho vetëm data.js për të shtuar/fshirë ndeshje. */
  const streams = window.ORION_STREAMS || { football: [], nba: [] };

  // ===== Translations (all languages) =====
  const i18n = {
    en: {
      'nav.football': 'Football',
      'nav.nba': 'NBA',
      'nav.language': 'Language',
      'hero.badge': 'Streams',
      'hero.title': 'Football & NBA',
      'hero.subtitle': 'On your screen',
      'hero.desc': 'Click Watch to see your match.',
      'section.football': 'Football',
      'section.nba': 'NBA',
      'table.match': 'Match',
      'table.league': 'League',
      'table.watch': 'Watch',
      'tabs.all': 'All',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Regular Season',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'No streams in this category.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Select a stream to watch.',
      'modal.placeholderNoUrl': 'Add link1, link2, link3, link4 in app.js for this match.',
      'modal.note': 'In app.js set link1, link2, link3, link4 for each match.',
      'links.choose': 'Choose a link to open in a new tab:',
      'links.link1': 'Link 1',
      'links.link2': 'Link 2',
      'links.link3': 'Link 3',
      'links.link4': 'Link 4',
      'footer.disclaimer': 'OrionLive — For information only. Streams depend on providers.',
      'aria.close': 'Close',
      'aria.menu': 'Menu',
      'sport.football': 'Football',
      'sport.nba': 'NBA',
    },
    sq: {
      'nav.football': 'Footboll',
      'nav.nba': 'NBA',
      'nav.language': 'Gjuha',
      'hero.badge': 'Transmetime',
      'hero.title': 'Footboll & NBA',
      'hero.subtitle': 'Direkt në ekran',
      'hero.desc': 'Kliko Shiko për të parë ndeshjen tënde.',
      'section.football': 'Footboll',
      'section.nba': 'NBA',
      'table.match': 'Ndeshja',
      'table.league': 'Liga',
      'table.watch': 'Shiko',
      'tabs.all': 'Të gjitha',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Sezoni i rregullt',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Nuk ka transmetime për këtë kategori.',
      'modal.stream': 'Transmetim',
      'modal.placeholder': 'Zgjidh një transmetim për të parë.',
      'modal.placeholderNoUrl': 'Vendosni URL-in e transmetimit (streamUrl) në app.js për këtë ndeshje.',
      'modal.note': 'Në app.js vendosni link1, link2, link3, link4 për çdo ndeshje.',
      'links.choose': 'Zgjidhni një link për ta hapur në tab të ri:',
      'links.link1': 'Link 1',
      'links.link2': 'Link 2',
      'links.link3': 'Link 3',
      'links.link4': 'Link 4',
      'footer.disclaimer': 'OrionLive — Vetëm për informacion. Transmetimet varen nga ofruesit.',
      'aria.close': 'Mbyll',
      'aria.menu': 'Menu',
      'sport.football': 'Futboll',
      'sport.nba': 'NBA',
    },
    es: {
      'nav.football': 'Fútbol',
      'nav.nba': 'NBA',
      'nav.language': 'Idioma',
      'hero.badge': 'Transmisiones',
      'hero.title': 'Fútbol y NBA',
      'hero.subtitle': 'En tu pantalla',
      'hero.desc': 'Haz clic en Watch para ver tu partido.',
      'section.football': 'Fútbol',
      'section.nba': 'NBA',
      'table.match': 'Partido',
      'table.league': 'Liga',
      'table.watch': 'Ver',
      'tabs.all': 'Todos',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Temporada regular',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'No hay transmisiones en esta categoría.',
      'modal.stream': 'Transmisión',
      'modal.placeholder': 'Elige una transmisión para ver.',
      'modal.placeholderNoUrl': 'Añade la URL del stream (streamUrl) en app.js para este partido.',
      'modal.note': 'Pon los enlaces iframe en app.js: en streams.football y streams.nba, en el campo streamUrl de cada partido.',
      'footer.disclaimer': 'OrionLive — Solo informativo. Las transmisiones dependen de los proveedores.',
      'aria.close': 'Cerrar',
      'aria.menu': 'Menú',
      'sport.football': 'Fútbol',
      'sport.nba': 'NBA',
    },
    fr: {
      'nav.football': 'Football',
      'nav.nba': 'NBA',
      'nav.language': 'Langue',
      'hero.badge': 'Streams',
      'hero.title': 'Football et NBA',
      'hero.subtitle': 'Sur votre écran',
      'hero.desc': 'Cliquez sur Watch pour voir votre match.',
      'section.football': 'Football',
      'section.nba': 'NBA',
      'table.match': 'Match',
      'table.league': 'Ligue',
      'table.watch': 'Voir',
      'tabs.all': 'Tous',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Saison régulière',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Aucun stream dans cette catégorie.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Choisissez un stream à regarder.',
      'modal.placeholderNoUrl': 'Ajoutez l\'URL du stream (streamUrl) dans app.js pour ce match.',
      'modal.note': 'Mettez les liens iframe dans app.js : dans streams.football et streams.nba, dans le champ streamUrl pour chaque match.',
      'footer.disclaimer': 'OrionLive — À titre informatif. Les streams dépendent des fournisseurs.',
      'aria.close': 'Fermer',
      'aria.menu': 'Menu',
      'sport.football': 'Football',
      'sport.nba': 'NBA',
    },
    de: {
      'nav.football': 'Fußball',
      'nav.nba': 'NBA',
      'nav.language': 'Sprache',
      'hero.badge': 'Streams',
      'hero.title': 'Fußball & NBA',
      'hero.subtitle': 'Auf deinem Bildschirm',
      'hero.desc': 'Klicke auf Watch, um dein Spiel zu sehen.',
      'section.football': 'Fußball',
      'section.nba': 'NBA',
      'table.match': 'Spiel',
      'table.league': 'Liga',
      'table.watch': 'Ansehen',
      'tabs.all': 'Alle',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Hauptrunde',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Keine Streams in dieser Kategorie.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Wähle einen Stream zum Anschauen.',
      'modal.placeholderNoUrl': 'Stream-URL (streamUrl) in app.js für dieses Spiel eintragen.',
      'modal.note': 'iframe-Links in app.js eintragen: in streams.football und streams.nba, im Feld streamUrl pro Spiel.',
      'footer.disclaimer': 'OrionLive — Nur zur Information. Streams abhängig von Anbietern.',
      'aria.close': 'Schließen',
      'aria.menu': 'Menü',
      'sport.football': 'Fußball',
      'sport.nba': 'NBA',
    },
    it: {
      'nav.football': 'Calcio',
      'nav.nba': 'NBA',
      'nav.language': 'Lingua',
      'hero.badge': 'Stream',
      'hero.title': 'Calcio e NBA',
      'hero.subtitle': 'Sul tuo schermo',
      'hero.desc': 'Clicca su Watch per vedere la tua partita.',
      'section.football': 'Calcio',
      'section.nba': 'NBA',
      'table.match': 'Partita',
      'table.league': 'Lega',
      'table.watch': 'Guarda',
      'tabs.all': 'Tutti',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Stagione regolare',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Nessuno stream in questa categoria.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Scegli uno stream da guardare.',
      'modal.placeholderNoUrl': 'Aggiungi l\'URL dello stream (streamUrl) in app.js per questa partita.',
      'modal.note': 'Inserisci i link iframe in app.js: in streams.football e streams.nba, nel campo streamUrl per ogni partita.',
      'footer.disclaimer': 'OrionLive — Solo informativo. Gli stream dipendono dai provider.',
      'aria.close': 'Chiudi',
      'aria.menu': 'Menu',
      'sport.football': 'Calcio',
      'sport.nba': 'NBA',
    },
    pt: {
      'nav.football': 'Futebol',
      'nav.nba': 'NBA',
      'nav.language': 'Idioma',
      'hero.badge': 'Transmissões',
      'hero.title': 'Futebol e NBA',
      'hero.subtitle': 'Na sua tela',
      'hero.desc': 'Clique em Watch para ver o seu jogo.',
      'section.football': 'Futebol',
      'section.nba': 'NBA',
      'table.match': 'Jogo',
      'table.league': 'Liga',
      'table.watch': 'Assistir',
      'tabs.all': 'Todos',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Temporada regular',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Nenhuma transmissão nesta categoria.',
      'modal.stream': 'Transmissão',
      'modal.placeholder': 'Escolha uma transmissão para assistir.',
      'modal.placeholderNoUrl': 'Adicione a URL do stream (streamUrl) no app.js para este jogo.',
      'modal.note': 'Coloque os links iframe no app.js: em streams.football e streams.nba, no campo streamUrl de cada jogo.',
      'footer.disclaimer': 'OrionLive — Apenas informativo. As transmissões dependem dos provedores.',
      'aria.close': 'Fechar',
      'aria.menu': 'Menu',
      'sport.football': 'Futebol',
      'sport.nba': 'NBA',
    },
    tr: {
      'nav.football': 'Futbol',
      'nav.nba': 'NBA',
      'nav.language': 'Dil',
      'hero.badge': 'Yayınlar',
      'hero.title': 'Futbol ve NBA',
      'hero.subtitle': 'Ekranınızda',
      'hero.desc': 'Maçınızı izlemek için İzle\'ye tıklayın.',
      'section.football': 'Futbol',
      'section.nba': 'NBA',
      'table.match': 'Maç',
      'table.league': 'Lig',
      'table.watch': 'İzle',
      'tabs.all': 'Tümü',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Normal sezon',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Bu kategoride yayın yok.',
      'modal.stream': 'Yayın',
      'modal.placeholder': 'İzlemek için bir yayın seçin.',
      'modal.placeholderNoUrl': 'Bu maç için app.js dosyasında streamUrl ekleyin.',
      'modal.note': 'iframe linklerini app.js içine ekleyin: streams.football ve streams.nba içinde, her maç için streamUrl alanına.',
      'footer.disclaimer': 'OrionLive — Sadece bilgi amaçlı. Yayınlar sağlayıcılara bağlıdır.',
      'aria.close': 'Kapat',
      'aria.menu': 'Menü',
      'sport.football': 'Futbol',
      'sport.nba': 'NBA',
    },
    ru: {
      'nav.football': 'Футбол',
      'nav.nba': 'NBA',
      'nav.language': 'Язык',
      'hero.badge': 'Трансляции',
      'hero.title': 'Футбол и NBA',
      'hero.subtitle': 'На вашем экране',
      'hero.desc': 'Нажмите Смотреть, чтобы увидеть матч.',
      'section.football': 'Футбол',
      'section.nba': 'NBA',
      'table.match': 'Матч',
      'table.league': 'Лига',
      'table.watch': 'Смотреть',
      'tabs.all': 'Все',
      'tabs.premier': 'Премьер-лига',
      'tabs.laliga': 'Ла Лига',
      'tabs.seriea': 'Серия A',
      'tabs.ucl': 'Лига чемпионов',
      'tabs.regularSeason': 'Регулярный сезон',
      'tabs.playoffs': 'Плей-офф',
      'empty.noCategory': 'Нет трансляций в этой категории.',
      'modal.stream': 'Трансляция',
      'modal.placeholder': 'Выберите трансляцию для просмотра.',
      'modal.placeholderNoUrl': 'Добавьте URL трансляции (streamUrl) в app.js для этого матча.',
      'modal.note': 'Добавьте ссылки iframe в app.js: в streams.football и streams.nba, в поле streamUrl для каждого матча.',
      'footer.disclaimer': 'OrionLive — Только информация. Трансляции зависят от провайдеров.',
      'aria.close': 'Закрыть',
      'aria.menu': 'Меню',
      'sport.football': 'Футбол',
      'sport.nba': 'NBA',
    },
    zh: {
      'nav.football': '足球',
      'nav.nba': 'NBA',
      'nav.language': '语言',
      'hero.badge': '直播',
      'hero.title': '足球与NBA',
      'hero.subtitle': '在您的屏幕上',
      'hero.desc': '点击“观看”查看您的比赛。',
      'section.football': '足球',
      'section.nba': 'NBA',
      'table.match': '比赛',
      'table.league': '联赛',
      'table.watch': '观看',
      'tabs.all': '全部',
      'tabs.premier': '英超',
      'tabs.laliga': '西甲',
      'tabs.seriea': '意甲',
      'tabs.ucl': '欧冠',
      'tabs.regularSeason': '常规赛',
      'tabs.playoffs': '季后赛',
      'empty.noCategory': '此分类下没有直播。',
      'modal.stream': '直播',
      'modal.placeholder': '请选择一个直播观看。',
      'modal.placeholderNoUrl': '在 app.js 中为此比赛添加 streamUrl。',
      'modal.note': '在 app.js 的 streams.football 和 streams.nba 中，为每场比赛的 streamUrl 字段添加 iframe 链接。',
      'footer.disclaimer': 'OrionLive — 仅供参考。直播取决于提供方。',
      'aria.close': '关闭',
      'aria.menu': '菜单',
      'sport.football': '足球',
      'sport.nba': 'NBA',
    },
    ar: {
      'nav.football': 'كرة القدم',
      'nav.nba': 'NBA',
      'nav.language': 'اللغة',
      'hero.badge': 'بث',
      'hero.title': 'كرة القدم و NBA',
      'hero.subtitle': 'على شاشتك',
      'hero.desc': 'انقر على مشاهدة لمشاهدة مباراتك.',
      'section.football': 'كرة القدم',
      'section.nba': 'NBA',
      'table.match': 'مباراة',
      'table.league': 'الدوري',
      'table.watch': 'شاهد',
      'tabs.all': 'الكل',
      'tabs.premier': 'بريميرليغ',
      'tabs.laliga': 'لا ليغا',
      'tabs.seriea': 'سيريا أ',
      'tabs.ucl': 'دوري الأبطال',
      'tabs.regularSeason': 'الموسم العادي',
      'tabs.playoffs': 'التصفيات',
      'empty.noCategory': 'لا توجد بثوث في هذه الفئة.',
      'modal.stream': 'بث',
      'modal.placeholder': 'اختر بثاً للمشاهدة.',
      'modal.placeholderNoUrl': 'أضف رابط البث (streamUrl) في app.js لهذه المباراة.',
      'modal.note': 'ضع روابط iframe في app.js: في streams.football و streams.nba، في حقل streamUrl لكل مباراة.',
      'footer.disclaimer': 'OrionLive — للمعلومات فقط. البثوث تعتمد على المزودين.',
      'aria.close': 'إغلاق',
      'aria.menu': 'القائمة',
      'sport.football': 'كرة القدم',
      'sport.nba': 'NBA',
    },
    hi: {
      'nav.football': 'फुटबॉल',
      'nav.nba': 'NBA',
      'nav.language': 'भाषा',
      'hero.badge': 'स्ट्रीम',
      'hero.title': 'फुटबॉल और NBA',
      'hero.subtitle': 'आपकी स्क्रीन पर',
      'hero.desc': 'अपना मैच देखने के लिए Watch पर क्लिक करें।',
      'section.football': 'फुटबॉल',
      'section.nba': 'NBA',
      'table.match': 'मैच',
      'table.league': 'लीग',
      'table.watch': 'देखें',
      'tabs.all': 'सभी',
      'tabs.premier': 'प्रीमियर लीग',
      'tabs.laliga': 'ला लीगा',
      'tabs.seriea': 'सीरी ए',
      'tabs.ucl': 'यूईएफए चैंपियंस',
      'tabs.regularSeason': 'रेगुलर सीज़न',
      'tabs.playoffs': 'प्लेऑफ़',
      'empty.noCategory': 'इस श्रेणी में कोई स्ट्रीम नहीं।',
      'modal.stream': 'स्ट्रीम',
      'modal.placeholder': 'देखने के लिए स्ट्रीम चुनें।',
      'modal.placeholderNoUrl': 'इस मैच के लिए app.js में streamUrl डालें।',
      'modal.note': 'app.js में iframe लिंक डालें: streams.football और streams.nba में, हर मैच के लिए streamUrl फ़ील्ड।',
      'footer.disclaimer': 'OrionLive — केवल जानकारी। स्ट्रीम प्रोवाइडर पर निर्भर।',
      'aria.close': 'बंद करें',
      'aria.menu': 'मेन्यू',
      'sport.football': 'फुटबॉल',
      'sport.nba': 'NBA',
    },
    nl: {
      'nav.football': 'Voetbal',
      'nav.nba': 'NBA',
      'nav.language': 'Taal',
      'hero.badge': 'Streams',
      'hero.title': 'Voetbal & NBA',
      'hero.subtitle': 'Op je scherm',
      'hero.desc': 'Klik op Watch om je wedstrijd te bekijken.',
      'section.football': 'Voetbal',
      'section.nba': 'NBA',
      'table.match': 'Wedstrijd',
      'table.league': 'Competitie',
      'table.watch': 'Bekijken',
      'tabs.all': 'Alle',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Regulier seizoen',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Geen streams in deze categorie.',
      'modal.stream': 'Stream',
      'modal.placeholder': 'Kies een stream om te kijken.',
      'modal.placeholderNoUrl': 'Voeg de stream-URL (streamUrl) toe in app.js voor deze wedstrijd.',
      'modal.note': 'Plaats iframe-links in app.js: in streams.football en streams.nba, in het veld streamUrl per wedstrijd.',
      'footer.disclaimer': 'OrionLive — Alleen informatie. Streams afhankelijk van aanbieders.',
      'aria.close': 'Sluiten',
      'aria.menu': 'Menu',
      'sport.football': 'Voetbal',
      'sport.nba': 'NBA',
    },
    pl: {
      'nav.football': 'Piłka nożna',
      'nav.nba': 'NBA',
      'nav.language': 'Język',
      'hero.badge': 'Transmisje',
      'hero.title': 'Piłka nożna i NBA',
      'hero.subtitle': 'Na ekranie',
      'hero.desc': 'Kliknij Watch, aby zobaczyć swój mecz.',
      'section.football': 'Piłka nożna',
      'section.nba': 'NBA',
      'table.match': 'Mecz',
      'table.league': 'Liga',
      'table.watch': 'Oglądaj',
      'tabs.all': 'Wszystkie',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'Liga Mistrzów',
      'tabs.regularSeason': 'Sezon regularny',
      'tabs.playoffs': 'Playoff',
      'empty.noCategory': 'Brak transmisji w tej kategorii.',
      'modal.stream': 'Transmisja',
      'modal.placeholder': 'Wybierz transmisję do obejrzenia.',
      'modal.placeholderNoUrl': 'Dodaj URL transmisji (streamUrl) w app.js dla tego meczu.',
      'modal.note': 'Umieść linki iframe w app.js: w streams.football i streams.nba, w polu streamUrl dla każdego meczu.',
      'footer.disclaimer': 'OrionLive — Tylko informacja. Transmisje zależą od dostawców.',
      'aria.close': 'Zamknij',
      'aria.menu': 'Menu',
      'sport.football': 'Piłka nożna',
      'sport.nba': 'NBA',
    },
    el: {
      'nav.football': 'Ποδόσφαιρο',
      'nav.nba': 'NBA',
      'nav.language': 'Γλώσσα',
      'hero.badge': 'Μεταδόσεις',
      'hero.title': 'Ποδόσφαιρο & NBA',
      'hero.subtitle': 'Στην οθόνη σας',
      'hero.desc': 'Κάντε κλικ στο Watch για να δείτε τον αγώνα σας.',
      'section.football': 'Ποδόσφαιρο',
      'section.nba': 'NBA',
      'table.match': 'Αγώνας',
      'table.league': 'Λίγκα',
      'table.watch': 'Παράκολουθηση',
      'tabs.all': 'Όλα',
      'tabs.premier': 'Premier League',
      'tabs.laliga': 'La Liga',
      'tabs.seriea': 'Serie A',
      'tabs.ucl': 'UEFA Champions',
      'tabs.regularSeason': 'Κανονική σεζόν',
      'tabs.playoffs': 'Playoffs',
      'empty.noCategory': 'Δεν υπάρχουν μεταδόσεις σε αυτή την κατηγορία.',
      'modal.stream': 'Μετάδοση',
      'modal.placeholder': 'Επιλέξτε μετάδοση για παρακολούθηση.',
      'modal.placeholderNoUrl': 'Προσθέστε το URL (streamUrl) στο app.js για αυτόν τον αγώνα.',
      'modal.note': 'Βάλτε τα iframe links στο app.js: στα streams.football και streams.nba, στο πεδίο streamUrl για κάθε αγώνα.',
      'footer.disclaimer': 'OrionLive — Μόνο πληροφορίες. Οι μεταδόσεις εξαρτώνται από παρόχους.',
      'aria.close': 'Κλείσιμο',
      'aria.menu': 'Μενού',
      'sport.football': 'Ποδόσφαιρο',
      'sport.nba': 'NBA',
    },
  };

  let currentLang = localStorage.getItem('orionlive-lang') || 'en';

  function t(key) {
    const lang = i18n[currentLang] || i18n.en;
    return lang[key] != null ? lang[key] : (i18n.en[key] != null ? i18n.en[key] : key);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang === 'ar' ? 'ar' : currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.textContent = val;
    });
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.setAttribute('aria-label', t('aria.close'));
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) menuBtn.setAttribute('aria-label', t('aria.menu'));
  }

  const footballTbody = document.getElementById('footballStreams');
  const nbaTbody = document.getElementById('nbaStreams');
  const modal = document.getElementById('streamModal');
  const modalTitle = document.getElementById('modalTitle');
  const linksButtons = document.getElementById('linksButtons');
  const modalLinksStep = document.getElementById('modalLinksStep');
  const modalStreamStep = document.getElementById('modalStreamStep');
  const streamEmbedInModal = document.getElementById('streamEmbedInModal');
  const btnBackLinks = document.getElementById('btnBackLinks');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function createStreamRow(item, sport) {
    const tr = document.createElement('tr');
    tr.className = 'stream-row';
    tr.dataset.id = item.id;
    tr.dataset.sport = sport;
    tr.dataset.league = item.league || '';
    const leagueText = item.league ? leagueLabel(item.league, sport) : '';
    const watchText = t('table.watch');
    tr.innerHTML = `
      <td class="td-match">${escapeHtml(item.title)}</td>
      <td class="td-league">${escapeHtml(leagueText)}</td>
      <td class="td-watch"><button type="button" class="btn-watch">${escapeHtml(watchText)}</button></td>
    `;
    tr.querySelector('.btn-watch').addEventListener('click', (e) => { e.stopPropagation(); openStream(item, sport); });
    tr.addEventListener('click', (e) => { if (!e.target.closest('.btn-watch')) openStream(item, sport); });
    return tr;
  }

  function leagueLabel(league, sport) {
    const key = sport === 'nba' ? (league === 'regular' ? 'tabs.regularSeason' : 'tabs.playoffs') : 'tabs.' + (league === 'premier' ? 'premier' : league === 'laliga' ? 'laliga' : league === 'seriea' ? 'seriea' : league === 'ucl' ? 'ucl' : league);
    return t(key);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderFootball() {
    footballTbody.innerHTML = '';
    streams.football.forEach((item) => footballTbody.appendChild(createStreamRow(item, 'football')));
  }

  function renderNBA() {
    nbaTbody.innerHTML = '';
    streams.nba.forEach((item) => nbaTbody.appendChild(createStreamRow(item, 'nba')));
  }

  function showStreamInModal(url) {
    streamEmbedInModal.innerHTML = '<iframe src="' + escapeHtml(url) + '" allowfullscreen></iframe>';
    if (modalLinksStep) modalLinksStep.style.display = 'none';
    if (modalStreamStep) modalStreamStep.style.display = 'block';
  }

  function showLinksStep() {
    streamEmbedInModal.innerHTML = '';
    if (modalStreamStep) modalStreamStep.style.display = 'none';
    if (modalLinksStep) modalLinksStep.style.display = 'block';
  }

  function openStream(item, sport) {
    window.open('player.html?matchId=' + encodeURIComponent(item.id) + '&link=1', '_blank', 'noopener,noreferrer');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    showLinksStep();
    linksButtons.innerHTML = '';
  }

  if (btnBackLinks) btnBackLinks.addEventListener('click', showLinksStep);

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('is-open'));
    navLinks.forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function () {
      currentLang = this.value;
      localStorage.setItem('orionlive-lang', currentLang);
      applyTranslations();
      renderFootball();
      renderNBA();
    });
  }

  const sections = document.querySelectorAll('.section, .hero');
  function setActiveNav() {
    const top = window.scrollY + 80;
    let current = '';
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      if (top >= offsetTop - 50) current = sec.id || '';
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isMatch = href === '#' + current;
      link.classList.toggle('active', isMatch);
    });
  }
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  applyTranslations();
  renderFootball();
  renderNBA();

  // Ad: 1ª klik → reklamë, 2ª → direkte, 3ª → reklamë, 4ª → direkte...
  var AD_URL = 'https://www.effectivegatecpm.com/jevjka47b?key=720eea0f218beda4532041c38ac49fab';
  var AD_COUNT_KEY = 'orionlive-ad-count';
  var AD_DATE_KEY = 'orionlive-ad-date';

  function getAdCount() {
    try {
      var today = new Date().toDateString();
      var savedDate = localStorage.getItem(AD_DATE_KEY);
      var savedCount = localStorage.getItem(AD_COUNT_KEY);
      if (savedDate !== today) return 0;
      var n = parseInt(savedCount, 10);
      return isNaN(n) ? 0 : n;
    } catch (e) { return 0; }
  }

  function incAdCount() {
    try {
      var today = new Date().toDateString();
      var c = getAdCount();
      localStorage.setItem(AD_COUNT_KEY, String(c + 1));
      localStorage.setItem(AD_DATE_KEY, today);
    } catch (e) {}
  }

  document.addEventListener('click', function () {
    var count = getAdCount();
    if (count % 2 === 0) window.open(AD_URL, '_blank', 'noopener,noreferrer');
    incAdCount();
  }, true);
})();
