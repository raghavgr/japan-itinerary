// ── content helpers ───────────────────────────────────────────────────────────
const tr  = t => `<span class="train">${t}</span>`;
const bus = t => `<span class="bus">${t}</span>`;
const rl  = (url, label) => `<a class="reel" href="${url}" target="_blank">${label}</a>`;
const tip = t => `<div class="callout tip">${t}</div>`;
const wrn = t => `<div class="callout warn">${t}</div>`;
const ph  = t => `<div class="photo-spot">📸 ${t}</div>`;

// ── trip data ─────────────────────────────────────────────────────────────────
const TRIP = {

// ── sections (regions) ────────────────────────────────────────────────────────
sections: [
  {
    id: 'pretour', badge: 'PRE-TRIP', color: '#64748b',
    title: 'Before You Leave', nights: 'Book these before landing',
    extra: `
    <div class="pretip-grid">
      <div class="pretip-card">
        <h4>Book Immediately</h4>
        <ul>
          <li>JR Pass 14-day (¥50,000 / $340) — covers Haruka, all Shinkansen, Kanazawa</li>
          <li>R Star Hostel Kyoto booked Mar 26–28 ✓</li>
          <li>Sagano Romantic Railway (トロッコ) Rich Car — 10am Mar 28 ✓ booked</li>
          <li>Nijo Castle night show Mar 27 ✓ booked</li>
          <li>Wazuka tea-field stay Mar 29 → 30 (別所中山19) ✓</li>
          <li>Osaka hotel near Dotonbori Mar 30–31 <span class="my-tip">book now</span></li>
          <li>Sushi Azabu omakase Apr 1 ✓ booked</li>
          <li>teamLab Borderless Apr 1 3:30pm ✓ booked</li>
          <li>Shibuya Sky Apr 1 8:40pm ✓ booked</li>
          <li>Hakone/Fuji transport (Apr 2): Odakyu Romancecar OR Fujikyu bus</li>
        </ul>
      </div>
      <div class="pretip-card">
        <h4>Get Before Departure</h4>
        <ul>
          <li>IC Card (Suica/ICOCA) — load ¥5,000 at airport</li>
          <li>Pocket WiFi or SIM (IIJmio eSIM or Airalo)</li>
          <li>JR Pass exchange order — activate at KIX on arrival</li>
          <li>Yen cash — ¥50,000–80,000 ($340–$544) for the trip</li>
          <li>Google Maps offline: Kyoto, Osaka, Nara, Tokyo, Kanazawa</li>
        </ul>
      </div>
      <div class="pretip-card">
        <h4>Apps</h4>
        <ul>
          <li><strong>Navitime Japan</strong> — train routing inc. local Kintetsu/Eizan</li>
          <li><strong>Google Translate</strong> — camera mode for menus</li>
          <li><strong>Tabelog</strong> — restaurant reviews</li>
          <li><strong>Japan Official Travel App</strong> — JR timetables</li>
          <li><strong>PayPay</strong> — QR payments (many rural spots cash-only)</li>
        </ul>
      </div>
      <div class="pretip-card">
        <h4>Luggage Strategy</h4>
        <ul>
          <li>KIX → Himeji: travel light, forward main bag via Yamato Transport to Kyoto hotel (¥1,500–2,000, arrives next day)</li>
          <li>Wazuka: pack a small overnight bag — rural and off main train lines</li>
          <li>Osaka → Tokyo: forward bags from Osaka hotel to Tokyo hotel via Yamato</li>
        </ul>
      </div>
    </div>`
  },
  {
    id: 'himeji', badge: 'HIMEJI', color: 'var(--himeji)',
    title: 'Himeji — Gateway from KIX', nights: '1 night · Days 1–2'
  },
  {
    id: 'kyoto', badge: 'KYOTO', color: 'var(--kyoto)',
    title: 'Kyoto — Ancient Capital', nights: '3 nights · Days 2–4 (Mar 26–28)'
  },
  {
    id: 'wazuka', badge: 'WAZUKA 茶', color: 'var(--wazuka)',
    title: 'Wazuka — Matcha Source', nights: '1 night · Day 5 (Mar 29)'
  },
  {
    id: 'osaka', badge: 'OSAKA', color: 'var(--osaka)',
    title: 'Osaka — Full Days', nights: '2 nights · Days 6–7 (Mar 30–31)'
  },
  {
    id: 'tokyo', badge: 'TOKYO', color: 'var(--tokyo)',
    title: 'Tokyo — With Friend + Solo', nights: '6 nights · Days 8–13 (Apr 1–6)'
  },
  {
    id: 'kanazawa', badge: 'KANAZAWA', color: 'var(--kanazawa)',
    title: 'Kanazawa — Solo Day Trip', nights: 'Do on Apr 4, 5, or 6',
    extra: `<div class="callout tip" style="margin-bottom:16px">
      <strong>WHEN TO DO KANAZAWA:</strong> You have three possible days — Apr 4 (Sat), Apr 5 (Sun), or Apr 6 (Mon).
      <strong>Recommended: Apr 5 (Sunday)</strong> — Omicho market is lively Sunday morning, Higashi Chaya has pleasant weekend atmosphere, Kenroku-en is manageable.
      <strong>Saturday Apr 4</strong> is also excellent for market energy but Kenroku-en is most crowded.
      <strong>Monday Apr 6</strong> has the quietest Kenroku-en but it's your last full day before a 12:30PM departure — you'd need to return by 19:30 and pack.
      Whichever day you pick, swap that Tokyo day card with this one.
    </div>`
  },
  {
    id: 'departure', badge: 'DEPARTURE', color: '#64748b',
    title: 'Day 14 — Departure', nights: 'Tuesday, April 7'
  },
],

// ── days ─────────────────────────────────────────────────────────────────────
days: [

// ─────────────────────────────────────── DAY 1 ────────────────────────────────
{
  num: 1, section: 'himeji', region: 'himeji',
  title: 'Arrive KIX · Transfer to Himeji · Castle Exterior at Dusk',
  date: 'Wednesday, March 25',
  accom: `🏨 Tonight: <strong>Dormy Inn Himeji</strong> <span class="accom-dist">· 10min walk to castle · Onsite onsen · Check-in from 15:00</span>`,
  items: [
    { time: '14:15', alert: true, body: `Clear immigration + baggage — allow 45–60min. Activate your JR Pass at the JR Ticket Office in the arrivals hall before heading to the platform. Load ICOCA card at the machine (¥2,000 minimum).
      ${tip('Send your main luggage from KIX to your Kyoto hotel via <strong>Yamato Transport takkyubin</strong> counter in arrivals (¥1,500–2,000). It arrives the next day. Travel to Himeji with just a carry-on.')}` },
    { time: '15:15', body: `${tr('Haruka Ltd Express KIX → Shin-Osaka 50min — JR Pass ✓')} ${tr('Shinkansen Nozomi/Sakura Shin-Osaka → Himeji 30min ¥2,730 ($18.55) — JR Pass ✓')} Total door-to-door: ~1h 40min. Arrive Himeji ~16:55.` },
    { time: '17:00', body: `Check in <strong>Dormy Inn Himeji</strong> (10min walk to castle, onsite onsen, ¥8,000–12,000/$54–82). Drop bags and head out immediately — golden hour at the castle.` },
    { time: '17:30', alert: true, body: `<strong>Himeji Castle at golden hour 🏯</strong> The castle complex stays open until 18:00 (last entry 17:00). You can walk the outer grounds and moat for free after closing. The white walls glow amber at sunset — one of the best castle photography moments in Japan.
      ${ph('Castle tower from the Hana-no-Mon gate · Moat reflection at golden hour · White walls against blue sky')}` },
    { time: '19:00', body: `<strong>Himeji oden</strong> — regional style cooked in ginger-soy broth (unique to Himeji). Try Oden Izakaya near the station arcade. Budget ¥1,500–2,500 ($10–17).` },
    { time: '21:00', body: `Dormy Inn natural hot spring — soak out the jet lag.` },
  ]
},

// ─────────────────────────────────────── DAY 2 ────────────────────────────────
{
  num: 2, section: 'himeji', region: 'himeji',
  title: 'Himeji Castle at Opening · Koko-en Garden · Kyoto Arrival + Higashiyama',
  date: 'Thursday, March 26',
  accom: `🏨 Tonight: <strong>R Star Hostel Kyoto</strong> <span class="accom-dist">· Check-in this afternoon · Kawaramachi area · ~15min walk to Gion</span>`,
  items: [
    { time: '08:30', alert: true, body: `Arrive at Himeji Castle gate. Castle opens 09:00. Join the queue by 08:30 to be among the first in. Over <strong>1,000 sakura trees</strong> in the castle grounds peak late March — the moat walk lined with cherry blossoms is ranked among the top 5 sakura views in Japan.
      ${wrn('Weekday morning is the best possible time to visit Himeji — by 11AM tour buses from Osaka arrive and it becomes crowded.')}` },
    { time: '09:00', alert: true, body: `<strong>Himeji Castle interior 🏯</strong> ¥1,000 ($6.80) combined ticket includes the castle + Nishi-no-Maru. <strong>UNESCO World Heritage.</strong> Japan's most complete feudal castle — 400-year-old original wooden interiors, 6-storey main tower. Climb to the top for views over the sakura canopy. Allow 90min inside.
      ${ph('Spiral wooden staircase interior · Top-floor panorama · Moat + sakura reflection from the west bridge · Nishi-no-Maru princess tower framed by cherry trees')}` },
    { time: '10:45', body: `<strong>Koko-en Garden (好古園)</strong> ¥310 ($2.10). 9 interconnected traditional gardens adjacent to the castle west wall. Tea house (¥510 with matcha), koi ponds, shaped pine trees.` },
    { time: '12:00', body: `Quick lunch near the station — Himeji station basement has good options. Then: ${tr('Shinkansen Himeji → Kyoto 35min ¥2,730 ($18.55) — JR Pass ✓')} Arrive Kyoto ~13:15.` },
    { time: '13:30', body: `Check in R Star Hostel Kyoto. Pick up main luggage forwarded from KIX yesterday via Yamato takkyubin.` },
    { time: '15:30', alert: true, body: `<strong>Higashiyama Walking Route</strong> Start at <strong>Kiyomizudera</strong> (¥500/$3.40), walk north through Sannenzaka and Ninenzaka, Kodai-ji temple, ending at Yasaka Shrine in Gion. ${rl('https://www.instagram.com/reel/C9VKUb7Nqg8/', 'Higashiyama walk')}
      ${ph('Sannenzaka lane with lanterns at dusk · Kiyomizudera stage with sakura canopy below · Yasaka pagoda framed by cherry trees')}` },
    { time: '18:30', body: `Walk Hanamikoji-dori (main geisha street) as the lanterns come on. Dinner at Gion Kappa (¥2,500/$17) or Ippudo Ramen nearby.` },
  ]
},

// ─────────────────────────────────────── DAY 3 ────────────────────────────────
{
  num: 3, section: 'kyoto', region: 'kyoto',
  title: 'Fushimi Inari at Sunrise · Keage Incline · Philosopher\'s Path · Nijo Castle Night Show',
  date: 'Friday, March 27',
  accom: `🏨 <strong>R Star Hostel Kyoto</strong> <span class="accom-dist">· 5min JR to Fushimi Inari · 15min metro to Keage · Nijo Castle 20min by bus/taxi</span>`,
  items: [
    { time: '05:30', alert: true, body: `Depart for Fushimi Inari. ${tr('JR Nara Line Kyoto → Inari 5min ¥150 ($1.02)')} Arrive at the gate by 05:45–06:00. The thousands of vermilion torii tunnels winding up the mountain are completely empty at this hour.
      ${wrn('<strong>Fushimi Inari is one of the most photographed places in Japan.</strong> From 8AM it becomes a wall-to-wall crowd. The mountain above (Yotsutsuji viewpoint, ~45min hike) stays emptier all day.')}` },
    { time: '06:00', alert: true, body: `<strong>Fushimi Inari Taisha (伏見稲荷大社)</strong> Free, open 24hrs. Walk through the main lower torii gates, then hike up through the tunnel corridors. The Senbon Torii section is the classic view. Climb to Yotsutsuji (half-mountain viewpoint, 30–40min hike) for dawn views over Kyoto. Return down by 08:00.
      ${ph('Looking up the torii tunnel at first light · Pre-dawn mist in the gate corridors · City panorama from Yotsutsuji at sunrise')}` },
    { time: '08:15', body: `Breakfast near Inari station. Street stall inari-zushi (fox sushi — rice in fried tofu skin) from vendors near the shrine entrance. ¥200–400.` },
    { time: '09:30', alert: true, body: `<strong>Keage Incline (蹴上インクライン)</strong> ${tr('Kyoto Metro Tozai Line Fushimi → Keage 2 stops ¥220 ($1.50)')} The disused railway incline lined with ~90 cherry trees — one of the most photogenic and least-known sakura spots in Kyoto. The rusty rail tracks + pink blossoms is a classic composition.
      ${ph('Looking down the incline tracks through the sakura tunnel · Old rail cart with blossoms · Tracks between cherry tree roots')}` },
    { time: '11:00', body: `<strong>Nanzen-ji Temple</strong> 5-min walk from Keage. Free grounds. Sanmon gate ¥600 ($4.10) to climb. The surreal Roman-style red-brick <strong>aqueduct running through the temple grounds</strong> — one of the most unexpected structures in Kyoto. Garden ¥500 ($3.40).
      ${ph('Brick aqueduct with moss and greenery · Looking through the aqueduct arches')}` },
    { time: '12:30', alert: true, body: `<strong>Philosopher's Path (哲学の道)</strong> ${rl('https://www.instagram.com/reel/C1-pkSZP7YY/', 'reel')} Start at Nanzen-ji end, walk north 1.5km along the canal lined with 500 cherry trees. The most famous sakura walk in Japan. 30–45min with stops.
      ${tip('Walk before noon or after 4PM. This is peak sakura week.')}
      ${ph('Canal + cherry blossom reflections in water · Pink petal canopy overhead')}` },
    { time: '14:00', body: `<strong>Heian Shrine Garden</strong> Massive orange torii gate (largest in Japan), weeping cherry trees inside. ¥600 ($4.10). One of the most composed sakura views in Kyoto.` },
    { time: '15:30', body: `<strong>Ippodo Tea (一保堂茶舗)</strong> Founded 1717. Teramachi-Nijo, 10-min walk. THE place to buy matcha to take home.
      ${tip('<strong>MATCHA TO TAKE HOME:</strong> Ippodo Ichinomai ceremonial grade ¥2,200 ($15, 40g tin). Tsujiri Shijo flagship for everyday drinking. In-store tea bar ¥1,200 ($8.15) to taste before buying. Load up here — you\'re going to Wazuka the day after tomorrow for the source.')}` },
  ],
  altLabel: 'AFTERNOON OPTION — KIFUNE: Choose based on your Nijo Castle entry time',
  altGrid: [
    {
      badge: 'A', color: '--green',
      title: 'Add Kifune late afternoon (if Nijo entry ≥ 19:30)',
      items: [
        { time: '16:30', alert: true, body: `Depart for Kifune 🏮 ${tr('Kyoto Metro Karasuma Line → Kokusaikaikan 25min ¥280 ($1.90)')} ${tr('Eizan Railway Kokusaikaikan → Kibuneguchi 28min ¥420 ($2.86)')} Total ~55min from central Kyoto.` },
        { time: '17:30', alert: true, body: `<strong>Kifune Shrine at dusk 🏮</strong> The stone lantern-lined path lit as dusk settles — one of Kyoto's most magical sights. Lanterns glow orange against dark cedar forest. Free. <strong>Mountain valley blooms later (Apr 1–10) — come for the atmosphere.</strong>
          ${ph('Stone lantern pathway lit orange at dusk · Shrine torii with cedar trees at night · Lantern reflections in the stream')}` },
        { time: '18:30', body: `Leave Kifune. ${tr('Eizan Railway → Demachiyanagi 28min ¥420 ($2.86)')} Back in central Kyoto by ~19:30.` },
      ]
    },
    {
      badge: 'B', color: '--navy',
      title: 'Skip Kifune → Rest + early dinner before Nijo',
      items: [
        { time: '16:30', body: `Return hostel and rest. You've been up since 5:30am — 1–2hr rest before the evening castle show is well deserved.` },
        { time: '18:00', body: `Dinner near Nijo Castle. Nijo area has solid izakayas and ramen. Budget ¥1,500–2,500 ($10–17). ${tr('Kyoto Metro Tozai Line → Nijo-jo-mae')}` },
      ]
    }
  ],
  itemsAfter: [
    { time: '19:30 (or per ticket)', alert: true, body: `<strong>Nijo Castle Night Illumination 🏯 — FIXED TICKET</strong> The 400-year-old Nijo Castle is transformed by digital projection and illumination — the stone walls, Ninomaru Palace, and inner gardens lit in shifting color. Built by Tokugawa Ieyasu in 1603, UNESCO World Heritage. Show runs until ~21:30–22:00.
      ${tip('If your Nijo entry time is before 19:30, skip Kifune (Option B) and head to dinner near the castle instead. The nightingale floor — squeaky boards designed to detect intruders — is walkable during the evening show.')}
      ${ph('Nijubashi gate lit in gold · Ninomaru Palace garden with illuminations · Karamon gate with projection mapping')}` },
  ]
},

// ─────────────────────────────────────── DAY 4 ────────────────────────────────
{
  num: 4, section: 'kyoto', region: 'kyoto',
  title: 'Sagano Romantic Railway 🚃 Rich Car · Arashiyama · Kinkaku-ji · Ryoan-ji · Tenzan Onsen',
  date: 'Saturday, March 28',
  accom: `🏨 <strong>R Star Hostel Kyoto</strong> <span class="accom-dist">· Last night here · Saga-Torokko station 5min walk from bamboo grove · Rich Car FIXED 10am</span>`,
  items: [
    { time: '06:30', alert: true, body: `Depart for Arashiyama early. ${tr('JR Sagano Line Kyoto → Saga-Arashiyama 15min ¥240 ($1.63)')} Arrive before 7AM — the bamboo grove is <strong>empty at this hour</strong>.` },
    { time: '07:00', alert: true, body: `<strong>Sagano Bamboo Grove</strong> Free. Walk the main path before the tourist wave (very crowded from 9:30AM). The bamboo rustles and creaks — a sound UNESCO designated as one of Japan's 100 soundscapes to preserve.
      ${ph('Bamboo corridor with morning light shafts · Near-empty path looking up at canopy')}` },
    { time: '07:45', body: `<strong>Togetsu-kyo Bridge</strong> The iconic arched bridge over Oi River with Arashiyama mountain backdrop. Cherry trees along both riverbanks in late March.
      ${ph('Bridge reflection in still river at dawn · Mountain + sakura + bridge composition')}` },
    { time: '08:30', body: `<strong>Tenryu-ji Temple Garden</strong> ¥500 ($3.40) garden only. UNESCO. Pond garden with Arashiyama mountain as borrowed scenery. Nearly empty this early.` },
    { time: '09:30', body: `Breakfast near Arashiyama station. Grab a coffee and snack — several cafés open from 9AM. Head to Saga-Torokko station after (5min walk northwest from JR Saga-Arashiyama).` },
    { time: '10:00', alert: true, body: `<strong>🚃 Sagano Scenic Railway — Rich Car (FIXED TICKET)</strong> ${tr('Saga-Torokko → Kameoka-Torokko 25min ¥880 ($5.99)')} The <strong>Rich Car (リッチ号)</strong> is the open-air vintage carriage with no windows — pure wind, cedar scent, and the dramatic Hozugawa gorge rushing below. 7.3km through tunnels and forest along the river gorge. Late March: hillsides just greening up, cherry trees dotting the cliffs.
      ${tip('After Kameoka-Torokko: (A) <strong>Hozugawa River Boat</strong> (保津川下り ¥4,100 — 16km river ride back through the gorge, ~2hrs, incredible) or (B) JR Sanin Line Kameoka → Saga-Arashiyama 10min ¥230 ($1.56). Take JR if doing Kinkaku-ji + Ryoan-ji + onsen today.')}
      ${ph('Open Rich Car with gorge views below · Cliff face passing close · Cherry trees on canyon walls')}` },
    { time: '11:30', body: `Return to Arashiyama by JR (~10min from Kameoka). If you took the Hozugawa boat, back by ~13:00 — adjust afternoon accordingly.` },
    { time: '12:00', body: `Lunch in Arashiyama. Tofu kaiseki at Yudofu Sagano or nearby restaurant ¥1,500–3,000 ($10–20). OR matcha soft-serve and dango from street stalls.` },
    { time: '13:30', body: `Bus to Kinkaku-ji. ${bus('Bus 11 or 59 Arashiyama → Kinkakuji-michi ~35min ¥230 ($1.56)')}` },
    { time: '14:00', alert: true, body: `<strong>Kinkaku-ji (金閣寺) — Golden Pavilion</strong> ¥500 ($3.40). The three-storey gilded pavilion reflected in Kyoko-chi pond. Post-lunch timing means fewer early-morning tour buses.
      ${ph('Golden pavilion + perfect pond reflection · Top-floor gold detail · Pine tree framing pavilion')}` },
    { time: '15:00', body: `<strong>Ryoan-ji (龍安寺) — Rock Garden</strong> ¥600 ($4.10). 15min walk from Kinkaku-ji. The famous karesansui dry garden — 15 stones arranged so only 14 are visible from any viewpoint. Sit on the wooden veranda.` },
    { time: '16:30', alert: true, body: `<strong>Tenzan Onsen (天山の湯)</strong> ${bus('Bus back to Arashiyama ~30min')} Hidden local onsen, 5min walk from Arashiyama station. Outdoor rotenburo. ¥1,000 ($6.80). NOT a tourist trap — this is where locals go.
      ${tip('No tattoo ban. Bring a small towel or rent for ¥200. The outdoor bath in late March has cherry petals falling in.')}` },
    { time: '18:30', body: `Return Kyoto. ${tr('JR Sagano Saga-Arashiyama → Kyoto 15min')}` },
    { time: '19:30', body: `Pontocho Dinner. Pontocho alley — narrow lantern-lit corridor parallel to Kamo River. Best Kyoto dining street. Budget ¥3,000–5,000 ($20–34).` },
  ]
},

// ─────────────────────────────────────── DAY 5 ────────────────────────────────
{
  num: 5, section: 'wazuka', region: 'wazuka',
  title: 'Nara Day Trip · Matcha Grinding · Wazuka Matcha Stay',
  date: 'Sunday, March 29',
  accom: `🏨 Check out: <strong>R Star Hostel Kyoto</strong> → Tonight: <strong>Wazuka Tea Farm (別所中山19)</strong> <span class="accom-dist">· ~2h from Kyoto via JR Nara Line + taxi from Kamo</span>`,
  items: [
    { time: '08:00', body: `Breakfast + check out R Star Hostel. Drop luggage at Kyoto Station coin lockers (¥600–900/day) before heading to Nara — collect before continuing to Wazuka this evening.` },
    { time: '09:00', alert: true, body: `Depart Kyoto → Nara. ${tr('Kintetsu Ltd Express Kintetsu-Kyoto → Kintetsu-Nara 35min ¥760 ($5.15)')} — RECOMMENDED (faster + more direct than JR)` },
    { time: '09:45', alert: true, body: `<strong>Nara Deer Park + Todai-ji</strong> 1,200+ wild sika deer roam freely — deer senbei crackers ¥200 ($1.35). Sakura trees in bloom throughout. ${rl('https://www.instagram.com/reel/DR7P2FGiDGO/', 'Nara bucket list')} ${rl('https://www.instagram.com/reel/DVx9HjCEl72/', 'why Nara')}
      ${ph('Deer + sakura bokeh in Nara Park')}
      <br>Then: <strong>Todai-ji Great Buddha</strong> ¥600 ($4.10) — world's largest bronze Buddha (15m), world's largest wooden building.` },
    { time: '12:00', body: `<strong>Nakatanidou (中谷堂)</strong> — speed-mochi pounding show, yomogi mochi ¥130 ($0.90).<br><br>
      <strong>Shizuku by Nara Yamato Chaen</strong> — matcha grinding experience ¥1,500–2,500 ($10–17). Hand-grind tencha leaves on a stone ishiusu mill → whisk and drink. Reserve in advance.
      ${tip('Doing this immediately before Wazuka (the source of high-grade tencha) gives you the complete picture: grind matcha in Nara, then sleep surrounded by tea fields the same night.')}` },
    { time: '14:00', alert: true, body: `Depart Nara → Wazuka 🍵 ${tr('JR Nara Line → Kamo 45min ¥590 ($4.01) — JR Pass ✓')} ${bus('then taxi to Wazuka ~20min ¥2,500–3,500 ($17–24)')}
      ${wrn('Wazuka (別所中山19) is rural — confirm exact directions with your accommodation in advance. No convenience stores nearby. Buy snacks/water before leaving Nara.')}` },
    { time: '16:00', alert: true, body: `<strong>Arrive Wazuka Tea-Field Stay 🍵</strong> Check in. You're staying in the heart of Japan's most important tencha growing region — the steep hillside fields producing the leaves that become Uji matcha. In late March the fields are <strong>bright electric green</strong>.
      ${tip('Wazuka produces roughly 40% of Japan\'s tencha. The fields are covered in black shade cloth from April to suppress bitterness. In late March they\'re uncovered — a sea of vivid green terraces.')}` },
    { time: '18:00', body: `Evening in Wazuka. Dinner at your accommodation or prepare simple food (buy ready meals from Kamo convenience store before the taxi). Sit on the terrace with tea. Extremely peaceful and remote.` },
  ]
},

// ─────────────────────────────────────── DAY 6 ────────────────────────────────
{
  num: 6, section: 'osaka', region: 'wazuka',
  title: 'Wazuka Dawn · Tsubosaka-dera · Yoshino Cherry Mountain · Osaka Arrival',
  date: 'Monday, March 30',
  accom: `🏨 Check out: <strong>Wazuka (別所中山19)</strong> → Tonight: <strong>Osaka hotel near Dotonbori</strong> <span class="accom-dist">· Taxi to Kamo + JR + Kintetsu → Osaka Namba ~3h total</span>`,
  items: [
    { time: '06:00', alert: true, body: `<strong>Wazuka tea fields at sunrise</strong> Walk into the fields at first light. The terraced hillsides in late March — row upon row of precisely maintained tea bushes. Mist fills the valley below. Almost no tourists ever come here.
      ${ph('Tea field terrace rows with morning mist · Close-up of new spring tea leaves · Hillside panorama with river valley below')}` },
    { time: '08:00', body: `Breakfast + check-out. Ask your host about the local tea — they may offer fresh gyokuro or tencha. Arrange a taxi to Kamo station.` },
    { time: '09:00', body: `${bus('Taxi Wazuka → Kamo station ~¥2,500 ($17)')} ${tr('JR Nara Line Kamo → Nara ~55min ¥590 ($4.01) — JR Pass ✓')}` },
    { time: '10:30', body: `Arrive Nara → transfer to Kintetsu toward Yoshino. ${tr('Kintetsu Nara → Yamato-Yagi → Yoshino Line → Tsubosakayama ~50min ¥690 ($4.69)')} First stop: <strong>Tsubosaka-dera</strong>, 5min walk from station.` },
    { time: '11:00', alert: true, body: `<strong>Tsubosaka-dera (壷坂寺)</strong> ¥600 ($4.10). A dramatically situated hilltop temple with enormous stone Buddha statues — a 3.8m Shaka Nyorai and an 8.5m reclining Buddha, carved in India and donated here. Far fewer tourists than the main Nara sights. Panoramic views over the Yamato plain. The temple has a touching history of a blind man and his devoted wife that inspired a famous rakugo story.
      ${ph('Giant stone Buddha against the sky · Valley panorama from the hilltop · Temple pagoda with early cherry blossoms')}` },
    { time: '12:30', body: `Continue to Yoshino Mountain. ${tr('Kintetsu Yoshino Line → Yoshino ~35min ¥560 ($3.81)')} Arrive Yoshino ~13:00. Take the ropeway up (¥450 one-way, 3min) or walk the stone steps.` },
    { time: '13:00', alert: true, body: `<strong>Yoshino Mountain (吉野山) 🌸</strong> <strong>One of Japan's most sacred cherry blossom destinations.</strong> Over 30,000 yoshino cherry trees on the mountain slopes — planted over 1,300 years, UNESCO World Heritage. Divided into four zones: Shimo Senbon (lower), Naka Senbon (middle), Kami Senbon (upper), Oku Senbon (deep). In late March: lower and middle zones in bloom. Walk the <strong>Hana-mi-koji</strong> path through the groves. Kinpusen-ji main hall ¥1,000 ($6.80).
      ${tip('A Monday afternoon visit gives you the mountain without weekend crowds. The lower grove near the ropeway base is most accessible.')}
      ${ph('Mountain slopes blanketed in white and pale pink cherry blossoms · Stone lanterns along the path through the groves · Looking down the valley from Naka Senbon')}` },
    { time: '15:30', body: `Depart Yoshino → Osaka Namba. ${tr('Kintetsu Yoshino Line Yoshino → Osaka Namba direct 1h25min ¥1,130 ($7.69)')} Arrive Osaka ~17:00.` },
    { time: '17:00', alert: true, body: `<strong>Check in to Osaka hotel near Dotonbori</strong> Drop bags, freshen up. The hotel is a short walk to Dotonbori canal.
      ${tip('Large bag can be forwarded Yamato takkyubin from Wazuka to Osaka hotel — arrange with host the night before.')}` },
    { time: '18:30', body: `<strong>First taste of Dotonbori</strong> Walk the canal-side promenade — Glico running man sign, giant crab, takoyaki stalls. This is your neighborhood for the next two nights.
      ${tip('Tonight is a preview. Save the deep Osaka food crawl for tomorrow. Grab takoyaki and walk the canal. Budget ¥1,000–2,000.')}` },
  ]
},

// ─────────────────────────────────────── DAY 7 ────────────────────────────────
{
  num: 7, section: 'osaka', region: 'osaka',
  title: 'Osaka Full Day · Kuromon Market · Dotonbori · Shinsekai · Osaka Castle',
  date: 'Tuesday, March 31',
  accom: `🏨 <strong>Osaka hotel near Dotonbori</strong> <span class="accom-dist">· Full day to explore · Pack tonight for early Shinkansen tomorrow → Tokyo</span>`,
  items: [
    { time: '08:00', alert: true, body: `<strong>Kuromon Ichiba Market (黒門市場)</strong> "Osaka's kitchen." 180 shops in a covered arcade — fresh seafood, wagyu skewers, Osaka street snacks. Best in the morning when freshest. From the hotel, Dotonbori to Kuromon is ~10min walk. Try: king crab legs ¥800 ($5.44), uni on rice ¥1,200 ($8.15), fresh oysters ¥400 ($2.72) each.` },
    { time: '10:00', body: `<strong>Dotonbori deep dive</strong> The neon heartbeat of Osaka. Walk the canal-side promenade. Try <strong>Ichimi-an</strong> for traditional takoyaki (¥600/$4.10, 6 pcs). Osaka-style okonomiyaki at <strong>Mizuno</strong> (est. 1945, worth the queue). ${rl('https://www.instagram.com/reel/DPWfmAUD0mZ/', 'Osaka evening vibe')}` },
    { time: '12:00', body: `<strong>Shinsekai + Tsutenkaku Tower</strong> Retro 1930s entertainment district. Tower ¥800 ($5.44). Kushikatsu (deep-fried skewers — <strong>do not double-dip the sauce</strong>) at street-front restaurants.` },
    { time: '14:00', body: `<strong>Osaka Castle Park</strong> ${tr('Metro Sakaisuji Line → Tanimachi 4-chome 10min')} Castle ¥600 ($4.10) interior or walk the extensive sakura-filled park grounds (free). The moat lined with hundreds of cherry trees — late March is peak.
      ${ph('Castle tower from the second moat · Sakura trees reflected in moat water')}` },
    { time: '16:30', body: `Return to Dotonbori area. Explore at leisure — Hozenji Yokocho (moss-covered stone lane, Fudo-Myo-o statue that receives water offerings), Amerika-mura for youth fashion.` },
    { time: '19:00', body: `<strong>Last big Osaka dinner</strong> Options: wagyu yakiniku on Dotonbori, <strong>Kani Doraku</strong> (crab kaiseki ¥5,000–10,000), or kushikatsu omakase. Budget ¥3,000–6,000 ($20–$40).
      ${wrn('Pack tonight. Depart early tomorrow morning from Shin-Osaka → Shinkansen to Tokyo. Check out by ~09:00.')}` },
  ]
},

// ─────────────────────────────────────── DAY 8 ────────────────────────────────
{
  num: 8, section: 'tokyo', region: 'tokyo',
  title: 'Osaka → Tokyo · Sushi Azabu Omakase · teamLab Borderless · Shibuya Sky',
  date: 'Wednesday, April 1 — with friend',
  accom: `🏨 Check out: <strong>Osaka hotel</strong> → Tonight: <strong>Tokyo hotel (Shinjuku/Shibuya/Roppongi — book ahead)</strong> <span class="accom-dist">· Send luggage Yamato from Osaka · Travel light today</span>`,
  items: [
    { time: '08:30', alert: true, body: `Check out + luggage forward. Send main luggage to your Tokyo hotel via <strong>Yamato takkyubin</strong> from the hotel (arrives same day evening or next morning). Travel with a day bag only.
      ${tip('Shin-Osaka → Tokyo by Nozomi is 2h15min. Departing 09:30 gets you to Tokyo Station by ~12:00. Target: arrive 12:00–12:15 for your 12:30 omakase.')}` },
    { time: '09:30', body: `${tr('Shinkansen Nozomi Shin-Osaka → Tokyo 2h15min ¥14,720 ($100.14) — JR Pass ✓')} Board at <strong>Shin-Osaka</strong> (one subway stop north of Osaka Station).
      ${tip('Window seat right side (D/E seats) — Mt. Fuji visible ~5 minutes around Shin-Fuji station between 11:40–11:50 on clear days.')}` },
    { time: '12:00', body: `Arrive Tokyo Station → head to Azabu/Roppongi. ${tr('Tokyo Metro Hibiya Line Tokyo → Kamiyacho 15min ¥200 ($1.36)')} Sushi Azabu is a short taxi or walk from Kamiyacho (Azabudai Hills area).` },
    { time: '12:30', alert: true, body: `<strong>🍣 Sushi Azabu — Omakase (RESERVATION)</strong> Intimate counter omakase. The chef selects finest seasonal fish — late March/April: sakura-dai (cherry sea bream), shirauo (icefish), hamaguri (clam). Budget ¥15,000–25,000 ($102–$170) per person. Allow 1.5–2 hours at the counter.
      ${tip('Arrive on time — omakase counters run on tight schedules. No strong perfume. Relax and let the chef guide you.')}` },
    { time: '14:30', body: `Explore <strong>Azabudai Hills</strong> (麻布台ヒルズ, opened 2024) — one of Tokyo's newest luxury mixed-use developments. Public podium garden, art installations. teamLab is right here. You have ~45min before entry.` },
    { time: '15:30', alert: true, body: `<strong>🎨 teamLab Borderless — Azabudai Hills (FIXED TICKET 3:30PM)</strong> ¥3,200 ($21.77). The world's largest digital art museum — larger than the original Odaiba venue. Rooms with no boundaries — waterfalls, forests, flowers, and light all flow and respond to you. Non-linear path: you discover rooms in any order.
      <strong>Allow 2–2.5 hours.</strong> Could absorb 3hrs if you linger in the meditation rooms.
      ${wrn('Your 3:30pm ticket is confirmed. Wear comfortable shoes — 2+ hours walking. No large bags (storage available).')}
      ${ph('The "Forest of Resonating Lamps" spheres in still water · Walking through the waterfall room · Flowers blooming on walls around you')}` },
    { time: '18:00', body: `Exit teamLab. <strong>2h 40min gap until Shibuya Sky at 8:40pm.</strong>` },
    { time: '18:15', body: `Dinner in Roppongi / Azabudai Hills area. You had omakase at lunch so keep it lighter — ramen ¥1,000, Japanese curry ¥1,200, or izakaya bites. Budget ¥1,500–3,000 ($10–20).` },
    { time: '19:30', body: `Head to Shibuya. ${tr('Tokyo Metro Hibiya Line Roppongi → Shibuya ~15min ¥210 ($1.43)')} Arrive ~19:45.` },
    { time: '20:00', body: `<strong>Shibuya Scramble Crossing at night</strong> The world's busiest pedestrian crossing. Best viewed from Starbucks 2F on the Tsutaya side (free, grab a drink). Walk the scramble once as a pedestrian — chaotic and thrilling.` },
    { time: '20:40', alert: true, body: `<strong>🌆 Shibuya Sky — 46th floor + rooftop (FIXED TICKET 8:40PM)</strong> Shibuya Scramble Square at 230m. At 8:40PM: golden city lights in every direction. Sky swing, hammock nets, glass-floored sections. Tokyo Tower, Skytree, and the entire metropolis lit below.
      ${tip('The 8:40pm slot is ideal — dark enough for the full light show. Bring a light jacket — rooftop at 230m in late March/early April is cold. Views toward Shinjuku and Skytree both exceptional.')}
      ${ph('Tokyo at night 360° from the rooftop · Scramble Crossing as a pinpoint far below · Tokyo Tower lit red in the distance')}` },
    { time: '22:30', body: `Shibuya late night. <strong>Nonbei Yokocho</strong> (渋谷のんべい横丁) — a tiny lane of 20+ intimate bars, each seating 6–8 people. Whisky highball ¥800–1,200 ($5.44–8.15). Or head back to hotel — it's been a very long day.` },
  ]
},

// ─────────────────────────────────────── DAY 9 ────────────────────────────────
{
  num: 9, section: 'tokyo', region: 'fuji',
  title: 'Day Trip · Two Options: Kawaguchiko + Fuji OR Kamakura + Coastal Fuji',
  date: 'Thursday, April 2 — with friend',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Kawaguchiko 1h50min by bus · Kamakura 55min by JR · Check weather the night before</span>`,
  intro: 'Both options include Fuji views — Kawaguchiko puts Fuji center stage, Kamakura adds ancient temples and a coastal dimension. Check the weather forecast and Mt. Fuji webcam the evening before.',
  altLabel: 'CHOOSE YOUR DAY TRIP',
  altGrid: [
    {
      badge: 'A', color: '--fuji',
      title: 'Kawaguchiko + Chureito Pagoda + Fuji',
      items: [
        { time: '07:00', alert: true, body: `Shinjuku → Kawaguchiko. ${bus('Highway bus Shinjuku Bus Terminal → Kawaguchiko 1h50min ¥1,800 ($12.24) — BOOK AHEAD on Kosoku Bus')} OR ${tr('Fuji Excursion Ltd Express Shinjuku → Kawaguchiko 1h50min ¥4,130 ($28.10)')} Arrive ~09:00.` },
        { time: '09:30', alert: true, body: `<strong>Chureito Pagoda (忠霊塔)</strong> Classic Japan image: red five-story pagoda + cherry blossoms + Mt. Fuji. 398 steps up from Fujiyoshida Sengen Shrine. Early April is near-peak cherry timing here (mountain microclimate, slightly later than Tokyo).
          ${wrn('Check Mt. Fuji webcam the evening before — if cloudy, Option B may be better.')}
          ${ph('Chureito pagoda + sakura + Fuji · Pagoda steps through cherry canopy')}` },
        { time: '12:00', body: `<strong>Lake Kawaguchiko</strong> Rent a bicycle (¥1,000/day), ride the lake perimeter. Cherry trees on north shore with Fuji reflection in still water.
          ${ph('Fuji reflection in Lake Kawaguchiko with cherry blossoms')}` },
        { time: '14:30', body: `<strong>Fuji 5th Station (optional)</strong> ${bus('Fujikyu Bus → 5th Station 50min ¥1,500 ($10.20) round trip')} Still snowy in April. Views from 2,300m if clear. Skip if cloudy.` },
        { time: '16:00', body: `Return Tokyo. ${bus('Bus Kawaguchiko → Shinjuku 1h50min')} Back by 18:00.` },
        { time: '19:30', body: `Dinner with friend. Shibuya or Shinjuku.` },
      ]
    },
    {
      badge: 'B', color: '--kyoto',
      title: 'Kamakura + Enoshima Coastal Fuji',
      items: [
        { time: '07:00', alert: true, body: `Shinjuku → Kamakura. ${tr('JR Shonan-Shinjuku Line → Kamakura 55min ¥940 ($6.39) — JR Pass ✓')} Arrive ~08:00. Kamakura is Japan's medieval coastal capital (1185–1333 shogunate seat).` },
        { time: '08:15', alert: true, body: `<strong>Kotoku-in — Great Buddha (高徳院)</strong> ¥300 ($2.04). Opens 8:00am. The 13.4m bronze Amida Buddha cast in 1252. Enter the interior (¥20 extra). Early morning = minimal crowds.
          ${ph('Great Buddha from the approach · Looking up from base · Buddha against blue sky')}` },
        { time: '09:30', body: `<strong>Hase-dera Temple (長谷寺)</strong> ¥400 ($2.72). Hillside temple with sweeping Pacific Ocean views. The 9.18m wooden Kannon statue (carved from a single camphor tree, one of Japan's largest), cave of Benzaiten.
          ${ph('Pacific view from the upper garden · Kannon statue')}` },
        { time: '11:00', body: `Komachi-dori + Tsurugaoka Hachimangu shrine (free). <strong>Shirasudon</strong> (whitebait rice bowl — THE Kamakura local dish ¥1,200–1,800) for lunch.` },
        { time: '12:30', body: `<strong>Enoden coastal ride</strong> ${tr('Enoshima Electric Railway Kamakura → Enoshima 25min ¥260 ($1.77)')} The narrow-gauge Enoden runs right along the cliff edge — iconic. Get off at <strong>Shichirigahama</strong> for the Fuji view from the beach on clear days.
          ${ph('Mt. Fuji from Shichirigahama beach with ocean foreground · Enoden tram on cliff-edge track')}` },
        { time: '13:30', body: `<strong>Enoshima island (江の島)</strong> Walk across causeway (free), climb to <strong>Enoshima Sea Candle lighthouse</strong> ¥500 ($3.40) — panoramic Pacific + Fuji view on clear days.` },
        { time: '16:00', body: `Return Tokyo. ${tr('Odakyu Line Katase-Enoshima → Shinjuku 1h ¥580 ($3.95)')} Back by 17:00.` },
        { time: '19:30', body: `Dinner with friend. Shinjuku or Harajuku area.` },
      ]
    }
  ],
  afterGrid: tip('<strong>WHICH TO CHOOSE:</strong> Check the weather + Mt. Fuji webcam the night before. Crystal clear = Option A (Chureito pagoda + Fuji is THE shot). Partly cloudy = Option B (Kamakura is magnificent even without Fuji; Enoshima coastal views are a great consolation). Note: Kawaguchiko cherry blossoms peak Apr 5–12 (slightly later than Tokyo) — Apr 2 may be early for the full Chureito effect.')
},

// ─────────────────────────────────────── DAY 10 ────────────────────────────────
{
  num: 10, section: 'tokyo', region: 'tokyo',
  title: 'Tokyo with Friend · Asakusa · Yanaka · Shibuya · NRT Sendoff',
  date: 'Friday, April 3 — friend departs NRT',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Friend's last day · Friend departs NRT — leave hotel by 15:30</span>`,
  items: [
    { time: '08:30', alert: true, body: `<strong>Senso-ji Temple, Asakusa (浅草寺)</strong> ${tr('Ginza Line → Asakusa 20min from Shinjuku')} Tokyo's oldest temple. Thunder Gate (Kaminarimon), the Nakamise shopping arcade, the five-story pagoda. Arrive before 9AM for the best atmosphere.
      ${ph('Kaminarimon gate looking through to the pagoda · Incense smoke in front of the main hall')}` },
    { time: '10:30', body: `<strong>Yanaka (谷中)</strong> Old Tokyo neighbourhood that survived WWII bombing. Yanaka Ginza shotengai, Yanesen area, old cemetery with cats. The most "old Tokyo" feeling neighbourhood left in the city.` },
    { time: '12:30', body: `<strong>Akihabara</strong> ${tr('Yamanote Line → Akihabara 10min')} Electronics, anime, retro game shops.` },
    { time: '14:00', alert: true, body: `<strong>Shibuya Scramble Crossing</strong> ${tr('Yamanote Line → Shibuya')} Best viewed from Mag's Park observation deck (free) or Starbucks 2F overlooking the crossing.
      ${ph('Scramble from above at rush hour · Long exposure light trails')}` },
    { time: '15:00', body: `Harajuku / Omotesando. Takeshita Street, then Omotesando. Last souvenir shopping at Don Quijote Harajuku.` },
    { time: '15:30', alert: true, body: `<strong>Friend departs for NRT ✈️</strong> ${tr('Narita Express (N\'EX) Shinjuku → Narita Airport T1/T2 ~80min ¥3,070 ($20.88) — JR Pass ✓')} Friend needs to leave by <strong>15:30–16:00 at latest</strong>.
      ${wrn('International departures from NRT: check-in closes ~75min before. Friend should depart central Tokyo by 15:30–16:00 MAX.')}` },
    { time: '17:30', body: `Solo evening begins. You're now flying solo for 4 more days — Apr 4, 5, 6 are all yours. Tonight: Shinjuku Omoide Yokocho for dinner, then Kabukicho or Golden Gai (tiny 6-seat themed bars, 200+ in a maze of lanes).` },
  ]
},

// ─────────────────────────────────────── DAY 11 ────────────────────────────────
{
  num: 11, section: 'tokyo', region: 'tokyo',
  title: 'Solo Tokyo · Nakameguro Canal · Shimokitazawa · Daikanyama · Golden Gai',
  date: 'Saturday, April 4',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Solo day · Kanazawa option: see recommendation above · Meguro River sakura possibly still blooming</span>`,
  items: [
    { time: '08:30', alert: true, body: `<strong>Nakameguro Canal (中目黒) — sakura corridor</strong> ${tr('Tokyu Toyoko Line → Nakameguro 10min from Shibuya')} The Meguro River canal lined with ~800 cherry trees. In early April: full bloom or petal fall (hanafubuki — pink petal carpet on water). Go before 10AM for best light. Grab coffee from canal-side roasters (Onibus Coffee). ${rl('https://www.instagram.com/reel/C5y0GIlNPq6/', 'Nakameguro canal sakura')}
      ${ph('Canal looking toward bridge with pink petal ceiling overhead · Coffee cup + blossoms · Petal carpet on water surface')}` },
    { time: '10:00', body: `<strong>Daikanyama (代官山)</strong> 5min walk from Nakameguro. Upscale village neighbourhood — <strong>Tsutaya Bookstore</strong> (beautiful architecture, books + music + cafe, one of the most pleasant spots in Tokyo). Good brunch spots.` },
    { time: '12:00', body: `<strong>Shimokitazawa (下北沢)</strong> ${tr('Odakyu Line → Shimokitazawa 2 stops')} Tokyo's most atmospheric neighbourhood. 50+ vintage clothing shops, small live music venues, indie cafes, vinyl record stores. No chain stores by local ordinance. Lunch at a tiny curry shop (¥1,000/$6.80).
      ${tip('Saturday in Shimokitazawa is ideal — weekend markets, live music in afternoon, record stores at peak. Allow 2–3 hours to wander.')}` },
    { time: '15:30', body: `Harajuku + Yoyogi Park. Ura-Harajuku backstreets (small fashion boutiques). Yoyogi Park: huge open park for weekend cherry blossom picnics.` },
    { time: '18:30', body: `<strong>Shinjuku — Golden Gai by night</strong> 200+ tiny themed bars (each seats 4–8, no cover at most), beer or whisky ¥800–1,200 ($5.44–8.15). Jazz bars, horror bars, soul music bars — each has a different personality. This is Tokyo at its most eccentric and intimate.` },
    { time: '20:00', body: `Dinner Shinjuku. Kabukicho area izakayas or Nishi-Shinjuku restaurant row.` },
  ],
  afterGrid: tip('<strong>KANAZAWA ON SATURDAY (TODAY)?</strong> Apr 4 (Saturday) is great for Kanazawa — Omicho Market is most lively on weekends. But Kenroku-en will be most crowded. If you do Kanazawa today, use this Tokyo plan on Apr 5 or 6 instead. See the Kanazawa card in the Kanazawa section.')
},

// ─────────────────────────────────────── DAY 12 ────────────────────────────────
{
  num: 12, section: 'tokyo', region: 'tokyo',
  title: 'Solo Tokyo · Harajuku · Chidorigafuchi Sakura · Ginza · OR Hakone + Kamakura',
  date: 'Sunday, April 5',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Option A: full Tokyo day · Option B: Hakone + Kamakura if Apr 2 Kamakura wasn't done</span>`,
  intro: 'If you did Kamakura on Apr 2 already, take Option A (Tokyo neighborhoods). If you did Kawaguchiko on Apr 2 instead, today is your Kamakura + Hakone insurance day.',
  altLabel: 'CHOOSE TODAY\'S PLAN',
  altGrid: [
    {
      badge: 'A', color: '--tokyo',
      title: 'Tokyo Neighborhoods + Late Sakura',
      items: [
        { time: '08:00', alert: true, body: `<strong>Chidorigafuchi (千鳥ヶ淵)</strong> ${tr('Tokyo Metro Hanzomon Line → Kudanshita')} The Imperial Palace moat lined with weeping cherry trees overhanging the water. Rent a rowboat (¥800/30min) and drift under the blossoms — one of the most beautiful sakura experiences in Tokyo.
          ${ph('Rowboats under the cherry blossom canopy · Pink petals on green moat water')}` },
        { time: '10:00', body: `<strong>Meiji Shrine (明治神宮) + Yoyogi Park</strong> Free. Forest shrine is calming after the blossom crowds. Yoyogi Park: huge open park for Sunday cherry blossom picnics.` },
        { time: '12:30', body: `Harajuku + Omotesando. Takeshita Street (colorful crepes, youth fashion), then the wide tree-lined Omotesando boulevard. Lunch on Omotesando.` },
        { time: '15:00', body: `<strong>Ginza</strong> ${tr('Metro → Ginza 10min')} Dover Street Market Ginza (concept store with art installations). Itoya (13-floor stationery store). Tsukiji Outer Market for snacks.` },
        { time: '18:00', body: `Nihonbashi or Marunouchi evening walk. Old financial district with Meiji-era architecture lit at night.` },
        { time: '20:00', body: `Dinner. Ramen Kagari near Ginza (chicken tsuyu ramen ¥1,400, often queued) or yakitori under the Yurakucho railway arches.` },
      ]
    },
    {
      badge: 'B', color: '--fuji',
      title: 'Hakone Loop + Kamakura (Insurance Day)',
      items: [
        { time: '07:00', alert: true, body: `Shinjuku → Kamakura first. ${tr('JR Shonan-Shinjuku Line → Kamakura 55min ¥940 ($6.39) — JR Pass ✓')} Morning at Kamakura temples.` },
        { time: '08:00', body: `Kotoku-in Great Buddha (¥300) + Hase-dera (¥400). Allow 2hrs total. Enoden coastal ride to Shichirigahama for Fuji view from the beach.
          ${tip('April mornings often have clearer Fuji views than late March — better chance at the Shichirigahama beach shot today.')}` },
        { time: '12:00', body: `Lunch near Enoshima. Shirasu (whitebait) dishes on Enoshima island.` },
        { time: '13:00', body: `Head toward Hakone. ${tr('Odakyu from Katase-Enoshima → Odawara → Hakone-Yumoto ~1h30min')} Buy <strong>Hakone Free Pass ¥6,000 ($40.80)</strong>.` },
        { time: '14:30', body: `<strong>Hakone Ropeway → Owakudani</strong> volcanic zone (sulphur vents, black eggs). Continue to Lake Ashinoko if time allows.
          ${wrn('Owakudani closes occasionally due to volcanic activity — check ahead.')}` },
        { time: '16:00', body: `<strong>Tenzan Tohji-kyo onsen</strong> day use ¥1,300 ($8.84). Relax 1 hour.` },
        { time: '17:30', body: `Return Tokyo. ${tr('Odakyu Romance Car Hakone-Yumoto → Shinjuku 1h25min — Hakone Free Pass ✓')} Back by 19:00.` },
        { time: '20:00', body: `Dinner Shinjuku.` },
      ]
    }
  ],
  afterGrid: tip('<strong>KANAZAWA ON SUNDAY (TODAY)?</strong> Apr 5 (Sunday) is recommended for Kanazawa — see the Kanazawa card in the Kanazawa section and slot it in today if that\'s your choice.')
},

// ─────────────────────────────────────── DAY 13 ────────────────────────────────
{
  num: 13, section: 'tokyo', region: 'tokyo',
  title: 'Final Tokyo Day · Tsukiji · Ueno Sakura · Yanaka Old Town · Last Night',
  date: 'Monday, April 6',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Last night · Check-out by 09:00 tomorrow for 12:30PM NRT flight · Pack tonight</span>`,
  items: [
    { time: '07:00', alert: true, body: `<strong>Tsukiji Outer Market (築地場外市場)</strong> ${tr('Metro Hibiya Line → Tsukiji 10min')} The outer market fully operates — fish vendors, tamagoyaki stalls, fresh produce. Monday morning is excellent (Sunday many stalls close). Best breakfast in Tokyo: tamago sando ¥300, fresh tuna sashimi on rice ¥1,200, uni on rice ¥2,000.
      ${ph('Morning light through the market arcade · Fresh tuna cuts · Tamagoyaki being pressed at the stall')}` },
    { time: '09:00', body: `<strong>Ueno Park (上野公園)</strong> ${tr('Metro → Ueno 10min')} Tokyo's largest cherry blossom park — ~1,000 trees. By April 6: full bloom or late-bloom hanafubuki (petal blizzard). Festival atmosphere with food stalls.
      ${ph('Ueno hanafubuki under the canopy · Shinobazu Pond with sakura reflection')}` },
    { time: '10:30', body: `<strong>Tokyo National Museum (東京国立博物館)</strong> ¥1,000 ($6.80). World's largest collection of Japanese art — samurai swords, Buddhist sculpture, Edo-period screens, kabuki costumes. Allow 1.5hrs.
      ${tip('The museum garden occasionally opens during cherry blossom season — free with museum entry. Ask at the ticket desk.')}` },
    { time: '12:30', body: `<strong>Yanaka (谷中) — Old Tokyo</strong> 10min walk from Ueno. Survived both the 1923 earthquake and WWII bombing. Yanaka Ginza shotengai, old cemetery with cats. The most "old Tokyo" feeling neighbourhood left in the city. Lunch: <strong>yanaka menchi</strong> (fried minced pork cutlet ¥250) — the famous Yanaka street snack.
      ${ph('Yanaka Ginza with traditional shop signs · Old wooden houses · Cats on stone walls')}` },
    { time: '14:30', body: `<strong>Akihabara — final run</strong> ${tr('Yamanote Line → Akihabara 10min')} Last chance for electronics. Super Potato (retro games, 5 floors), Yodobashi Camera (memory cards at best prices).` },
    { time: '17:00', body: `Return hotel + pack. Serious packing time — 12:30PM NRT flight means leaving hotel by 09:00 tomorrow. Lay out everything tonight.` },
    { time: '19:00', alert: true, body: `<strong>Last dinner in Tokyo</strong> Make it count:<br>
      • <strong>Gonpachi Nishi-Azabu</strong> (the "Kill Bill restaurant") — festive last night ¥4,000–6,000/$27–$40<br>
      • <strong>Shinjuku Kabukicho Ichiran</strong> — solo ramen booth, the classic solo Tokyo dinner ¥1,000 ($6.80)<br>
      • <strong>Uobei Shibuya</strong> — conveyor belt sushi, fun energy ¥2,000/$13.60<br>
      • Counter sushi near Ginza — walk-in omakase if you want one final splurge` },
    { time: '21:00', alert: true, body: `<strong>Tokyo Skytree — final view</strong> ¥2,100 ($14.28). See the city from 450m one last time. OR walk Rainbow Bridge in Odaiba (free, bayside Tokyo skyline). OR wander Shibuya/Shinjuku at ground level one last time.` },
    { time: '23:00', body: `Sleep. Airport by 09:00 tomorrow.` },
  ]
},

// ─────────────────────────────────────── KANAZAWA ────────────────────────────────────────
{
  num: '★', section: 'kanazawa', region: 'kanazawa',
  title: 'Kanazawa · Kenroku-en · Higashi Chaya · Omicho Market (Do on Apr 4, 5, or 6)',
  date: 'Saturday/Sunday/Monday — choose Apr 4, 5, or 6',
  accom: `🏨 <strong>Tokyo hotel</strong> <span class="accom-dist">· Day trip to Kanazawa — return same evening · Tokyo → Kanazawa 2h28min by Shinkansen</span>`,
  items: [
    { time: '07:00', alert: true, body: `Tokyo → Kanazawa. ${tr('Hokuriku Shinkansen Kagayaki Tokyo → Kanazawa 2h28min ¥14,320 ($97.41) — JR Pass ✓')} Arrive Kanazawa ~09:30. Former castle town that escaped WWII bombing, preserved geisha districts, world-class garden, incredible seafood market.
      ${tip('Kanazawa is often called "Little Kyoto" but it\'s more real than Kyoto — fewer tourists, locals actually live the traditional culture. Compact and walkable from the station.')}` },
    { time: '09:45', alert: true, body: `<strong>Kenroku-en Garden (兼六園)</strong> ${bus('City loop bus from station → Kenroku-en 20min ¥210 ($1.43)')} ¥320 ($2.18). One of Japan's three most celebrated traditional gardens. In early April: cherry blossoms throughout, extraordinary.
      ${ph('Kotoji stone lantern + pond reflection — the iconic Kenroku-en image · Weeping cherry by the stream · Garden overview from the upper terrace')}` },
    { time: '11:00', body: `<strong>Kanazawa Castle Park</strong> Free. Adjacent to Kenroku-en. The Ishikawa-mon gate is original and spectacular. Moat walk with sakura.` },
    { time: '12:00', alert: true, body: `<strong>Omicho Market (近江町市場)</strong> ${bus('City loop bus or 15min walk')} "Kanazawa's kitchen" — freshest seafood market in Japan outside Tsukiji. Try: <strong>kaisen-don (seafood rice bowl) ¥2,000–4,000</strong> — crab, uni, salmon, ikura on rice.
      ${tip('Kanazawa specialty: <strong>nodoguro</strong> (blackthroat sea perch) — a fatty white fish prized across Japan. Order it if on the menu.')}` },
    { time: '14:00', alert: true, body: `<strong>Higashi Chaya District (東茶屋街)</strong> 15min walk from Omicho. The best-preserved geisha district in Japan. Two-story ochaya teahouses with wooden lattice facades. Shima teahouse ¥750 ($5.10) open as a museum. Gold leaf crafts shops — <strong>gold leaf ice cream ¥750</strong> for the photo.
      ${ph('Higashi Chaya wooden lattice row · Gold leaf ice cream · Shima teahouse interior tatami rooms')}` },
    { time: '15:30', body: `<strong>21st Century Museum of Contemporary Art</strong> ¥1,100 ($7.48) — famous for the swimming pool installation (Leandro Erlich) where people stand inside a room under water while others walk on top. Free zones open without ticket.` },
    { time: '17:00', body: `Depart Kanazawa → Tokyo. ${tr('Hokuriku Shinkansen Kagayaki Kanazawa → Tokyo 2h28min — JR Pass ✓')} Arrive Tokyo ~19:30. Dinner near hotel.` },
  ]
},

// ─────────────────────────────────────── DAY 14 ────────────────────────────────
{
  num: 14, section: 'departure', region: 'departure',
  title: 'Hotel Checkout · N\'EX to NRT · Asiana Airlines 12:30PM → SF',
  date: 'Tuesday, April 7',
  accom: `🏨 Check out: <strong>Tokyo hotel</strong> <span class="accom-dist">· Leave hotel by 09:00 for 12:30 NRT departure · N'EX 80min from Shinjuku</span>`,
  items: [
    { time: '08:00', body: `Final morning. Convenience store breakfast (onigiri + coffee — the last one).` },
    { time: '09:00', alert: true, body: `Depart hotel → NRT (Narita Airport). ${tr('Narita Express (N\'EX) Shinjuku → NRT Terminal 1 80min ¥3,070 ($20.88) — JR Pass ✓')} Arrive NRT by ~10:20.
      ${wrn('<strong>Asiana Airlines</strong> departs NRT <strong>12:30PM → San Francisco (SFO)</strong>. Asiana operates from NRT <strong>Terminal 1</strong>. International check-in closes ~75min before departure = by 10:45AM. Do not be late leaving the hotel. Your JR Pass covers the N\'EX.')}` },
    { time: '10:30', body: `Duty Free at NRT T1. Use remaining yen on tax-free shopping. Wagyu snacks, sake, matcha chocolates (Kyoto Nama Chocolat is the best airport chocolate), Royce chocolate from Hokkaido.` },
    { time: '12:30', alert: true, body: `<strong>Departure ✈️</strong> Asiana Airlines to San Francisco. End of 14 days in Japan.` },
  ]
},

], // end days

// ── reference tables ─────────────────────────────────────────────────────────
refTables: `
<section class="ref-section">
  <h2 id="trains">Transport Costs Summary</h2>
  <div class="table-wrap">
    <table>
      <tr><th>Route</th><th>Mode</th><th>Time</th><th>Cost</th><th>JR Pass</th></tr>
      <tr><td>KIX → Shin-Osaka (Haruka)</td><td>Train</td><td>50min</td><td><span class="yen">¥3,060</span> <span class="usd">$20.82</span></td><td>✓ Covered</td></tr>
      <tr><td>Shin-Osaka → Himeji (Shinkansen)</td><td>Shinkansen</td><td>30min</td><td><span class="yen">¥2,730</span> <span class="usd">$18.55</span></td><td>✓ Covered</td></tr>
      <tr><td>Himeji → Kyoto (Shinkansen)</td><td>Shinkansen</td><td>35min</td><td><span class="yen">¥2,730</span> <span class="usd">$18.55</span></td><td>✓ Covered</td></tr>
      <tr><td>Sagano Romantic Railway (Rich Car)</td><td>Scenic train</td><td>25min</td><td><span class="yen">¥880</span> <span class="usd">$5.99</span></td><td>✗ Book separately</td></tr>
      <tr><td>Hozugawa River Boat (optional return)</td><td>Boat</td><td>~2hrs</td><td><span class="yen">¥4,100</span> <span class="usd">$27.89</span></td><td>✗ Book ahead</td></tr>
      <tr><td>Kyoto → Osaka (JR Shinkaisoku)</td><td>Train</td><td>15min</td><td><span class="yen">¥580</span> <span class="usd">$3.95</span></td><td>✓ Covered</td></tr>
      <tr><td>Kintetsu Kyoto → Nara</td><td>Train</td><td>35min</td><td><span class="yen">¥760</span> <span class="usd">$5.15</span></td><td>✗ Pay separately</td></tr>
      <tr><td>JR Nara Line → Kamo (for Wazuka)</td><td>Train</td><td>55min</td><td><span class="yen">¥590</span> <span class="usd">$4.01</span></td><td>✓ Covered</td></tr>
      <tr><td>Kamo → Wazuka (taxi)</td><td>Taxi</td><td>20min</td><td><span class="yen">¥2,500–3,500</span> <span class="usd">$17–24</span></td><td>✗</td></tr>
      <tr><td>Kintetsu Yoshino Line → Osaka Namba</td><td>Train</td><td>1h25min</td><td><span class="yen">¥1,130</span> <span class="usd">$7.69</span></td><td>✗ Pay separately</td></tr>
      <tr><td>Eizan Railway → Kibuneguchi (Kifune)</td><td>Train</td><td>28min</td><td><span class="yen">¥420</span> <span class="usd">$2.86</span></td><td>✗ Pay separately</td></tr>
      <tr><td>Shin-Osaka → Tokyo (Shinkansen Nozomi)</td><td>Shinkansen</td><td>2h15min</td><td><span class="yen">¥14,720</span> <span class="usd">$100.14</span></td><td>✓ Covered</td></tr>
      <tr><td>Tokyo → Kanazawa (Kagayaki)</td><td>Shinkansen</td><td>2h28min</td><td><span class="yen">¥14,320</span> <span class="usd">$97.41</span></td><td>✓ Covered</td></tr>
      <tr><td>Shinjuku → Kawaguchiko (bus)</td><td>Highway bus</td><td>1h50min</td><td><span class="yen">¥1,800</span> <span class="usd">$12.24</span></td><td>✗ Book ahead</td></tr>
      <tr><td>Shinjuku → Kamakura (JR)</td><td>Train</td><td>55min</td><td><span class="yen">¥940</span> <span class="usd">$6.39</span></td><td>✓ Covered</td></tr>
      <tr><td>Shinjuku → Hakone-Yumoto (Romancecar)</td><td>Train</td><td>1h25min</td><td><span class="yen">¥2,470</span> <span class="usd">$16.80</span></td><td>✗ Odakyu line</td></tr>
      <tr><td>Narita Express → NRT</td><td>Train</td><td>80min</td><td><span class="yen">¥3,070</span> <span class="usd">$20.88</span></td><td>✓ Covered</td></tr>
      <tr><td><strong>JR Pass 14-day</strong></td><td>—</td><td>—</td><td><span class="yen">¥50,000</span> <span class="usd">$340</span></td><td>Buy before departure</td></tr>
    </table>
  </div>

  <h2 id="sakura" style="margin-top:40px">Sakura Forecast by Location</h2>
  <div class="table-wrap">
    <table>
      <tr><th>Location</th><th>Typical Peak</th><th>Your Dates</th><th>Conditions</th></tr>
      <tr><td>Himeji Castle</td><td>Mar 28 – Apr 5</td><td>Mar 25–26 ✓</td><td>Early–Full bloom. 1,000+ trees in grounds.</td></tr>
      <tr><td>Kyoto (general)</td><td>Mar 27 – Apr 4</td><td>Mar 26–28 ✓✓</td><td>Full peak. Higashiyama, Philosopher's Path.</td></tr>
      <tr><td>Arashiyama</td><td>Mar 28 – Apr 5</td><td>Mar 28 ✓✓</td><td>Riverside cherry trees at peak.</td></tr>
      <tr><td>Keage Incline</td><td>Mar 26 – Apr 2</td><td>Mar 27 ✓✓</td><td>90 trees, very photogenic at peak.</td></tr>
      <tr><td>Fushimi Inari area</td><td>Mar 26 – Apr 3</td><td>Mar 27 ✓✓</td><td>Cherry trees at entrance gates.</td></tr>
      <tr><td>Kifune Valley</td><td>Apr 1–10</td><td>Mar 27 (optional) 🔜</td><td>Early/start of bloom. Lantern path beautiful regardless.</td></tr>
      <tr><td>Nara Park</td><td>Mar 28 – Apr 5</td><td>Mar 29 ✓✓</td><td>Deer + sakura at peak. Todai-ji grounds stunning.</td></tr>
      <tr><td>Yoshino Mountain</td><td>Mar 28 – Apr 10</td><td>Mar 30 ✓</td><td>Lower/middle zones in bloom late March. Upper zones opening.</td></tr>
      <tr><td>Wazuka</td><td>Apr 1–10</td><td>Mar 29–30 🔜</td><td>Mountain village — slightly later than Kyoto. Tea fields are the main draw.</td></tr>
      <tr><td>Osaka (Osaka Castle)</td><td>Mar 27 – Apr 4</td><td>Mar 31 ✓✓</td><td>Moat lined with cherry trees, full bloom.</td></tr>
      <tr><td>Tokyo (Shinjuku Gyoen)</td><td>Mar 28 – Apr 7</td><td>Apr 1–3 ✓✓</td><td>Multiple varieties inc. late bloomers. Spectacular.</td></tr>
      <tr><td>Nakameguro Canal</td><td>Mar 28 – Apr 6</td><td>Apr 4–5 ✓</td><td>Petals possibly falling (petal carpet on water). Still beautiful.</td></tr>
      <tr><td>Chidorigafuchi Moat</td><td>Mar 28 – Apr 6</td><td>Apr 5 ✓</td><td>Rowboats under weeping cherry — peak or late bloom.</td></tr>
      <tr><td>Kawaguchiko (Fuji)</td><td>Apr 5–15</td><td>Apr 2 🔜</td><td>May be early — check ahead. Chureito peaks Apr 5–12.</td></tr>
      <tr><td>Kamakura</td><td>Mar 28 – Apr 5</td><td>Apr 2 or 5 ✓</td><td>Full bloom or late. Great Buddha framed by blossoms.</td></tr>
      <tr><td>Kanazawa Kenroku-en</td><td>Apr 1–10</td><td>Apr 4/5/6 ✓✓</td><td>Full peak. One of the best sakura gardens in Japan.</td></tr>
      <tr><td>Ueno Park, Tokyo</td><td>Mar 26 – Apr 6</td><td>Apr 6 ✓/falling</td><td>Late blooms + hanafubuki (petal blizzard) — beautiful in its own way.</td></tr>
    </table>
  </div>

  <h2 style="margin-top:40px">Accommodation Bookings Needed</h2>
  <div class="table-wrap">
    <table>
      <tr><th>Night</th><th>Location</th><th>Recommendation</th><th>Est. Cost/Night</th><th>Priority</th></tr>
      <tr><td>Mar 25</td><td>Himeji</td><td>Dormy Inn Himeji (onsite onsen)</td><td><span class="yen">¥8,000–12,000</span> <span class="usd">$54–82</span></td><td>Book soon</td></tr>
      <tr><td>Mar 26–28</td><td>Kyoto</td><td>R Star Hostel Kyoto ✓ booked</td><td>Confirmed</td><td>✓ Done</td></tr>
      <tr><td>Mar 29</td><td>Wazuka (tea farm stay)</td><td>別所中山19, Wazuka</td><td>Confirm with host</td><td>🚨 BOOK NOW</td></tr>
      <tr><td>Mar 30–31</td><td>Osaka (near Dotonbori)</td><td>Hotel close to Dotonbori canal</td><td><span class="yen">¥8,000–15,000</span> <span class="usd">$54–102</span></td><td>Book ahead</td></tr>
      <tr><td>Apr 1–6</td><td>Tokyo</td><td>Shinjuku or Shibuya area</td><td><span class="yen">¥12,000–20,000</span> <span class="usd">$82–136</span></td><td>Book ahead</td></tr>
    </table>
  </div>

  <h2 style="margin-top:40px">Entrance Fees Quick Reference</h2>
  <div class="table-wrap">
    <table>
      <tr><th>Spot</th><th>Fee</th><th>USD</th><th>Crowd Level Late March/Early April</th></tr>
      <tr><td>Himeji Castle + Nishi-no-Maru</td><td>¥1,000</td><td>$6.80</td><td>⚠️ High from 10AM, manageable at opening</td></tr>
      <tr><td>Koko-en Garden (Himeji)</td><td>¥310</td><td>$2.10</td><td>🟢 Low</td></tr>
      <tr><td>Sagano Bamboo Grove</td><td>Free</td><td>—</td><td>🔴 Very high 9AM–5PM, empty at 7AM</td></tr>
      <tr><td>Tenryu-ji Garden</td><td>¥500–800</td><td>$3.40–5.44</td><td>⚠️ Moderate</td></tr>
      <tr><td>Kinkaku-ji</td><td>¥500</td><td>$3.40</td><td>🔴 Very crowded, arrive by 14:00</td></tr>
      <tr><td>Ryoan-ji Rock Garden</td><td>¥600</td><td>$4.10</td><td>⚠️ Moderate</td></tr>
      <tr><td>Fushimi Inari</td><td>Free</td><td>—</td><td>🔴 Very crowded 8AM–6PM, empty before 7AM</td></tr>
      <tr><td>Keage Incline</td><td>Free</td><td>—</td><td>🟢 Light</td></tr>
      <tr><td>Nanzen-ji grounds</td><td>Free (garden ¥500)</td><td>$3.40</td><td>🟡 Moderate</td></tr>
      <tr><td>Heian Shrine garden</td><td>¥600</td><td>$4.10</td><td>🟢 Low</td></tr>
      <tr><td>Nijo Castle (day)</td><td>¥1,300</td><td>$8.84</td><td>⚠️ Moderate</td></tr>
      <tr><td>Tsubosaka-dera</td><td>¥600</td><td>$4.10</td><td>🟢 Very few tourists</td></tr>
      <tr><td>Yoshino Mountain (walk)</td><td>Free</td><td>—</td><td>⚠️ Weekend crowds; Mon/weekday much quieter</td></tr>
      <tr><td>Todai-ji Great Buddha</td><td>¥600</td><td>$4.10</td><td>⚠️ Crowded 10AM–4PM, go early</td></tr>
      <tr><td>Kenroku-en (Kanazawa)</td><td>¥320</td><td>$2.18</td><td>🟡 Moderate (most tourists skip Kanazawa)</td></tr>
      <tr><td>teamLab Borderless</td><td>¥3,200</td><td>$21.77</td><td>⚠️ Pre-book timed entry ✓ done</td></tr>
      <tr><td>Shibuya Sky</td><td>¥2,000</td><td>$13.61</td><td>⚠️ Pre-book timed entry ✓ done</td></tr>
      <tr><td>Tenzan Onsen (Arashiyama)</td><td>¥1,000</td><td>$6.80</td><td>🟢 Local crowd only</td></tr>
    </table>
  </div>
</section>`

}; // end TRIP
