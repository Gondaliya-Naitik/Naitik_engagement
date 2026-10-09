// ============================================================
//  GUJARATI TRANSLATION — text overrides
//  ------------------------------------------------------------
//  Only the TEXT fields need translating here. Anything not
//  listed (images, URLs, phone numbers, the ISO countdown
//  date…) is inherited from the English config automatically.
//  Arrays (roles, events, story lines…) replace the English
//  version wholesale, so keep them complete.
// ============================================================

/** Gujarati overrides — same shape as `wedding` in config.js. */
export const gu = {
  envelope: {
    seal: "ન & સ",
    hint: "ટૅપ કરીને શુભ આરંભ કરો",
    sheetTitle: "બે આરેખા, એક સદાય",
    stampText: "પ્રેમથી મંજૂર",
    roles: [
      { name: "નૈતિક", role: "વેબ ડેવલપર", glyph: "</>" },
      { name: "સુમન", role: "આર્કિટેક્ટ", glyph: "◇" },
    ],
  },

  hero: {
    mantra: "ૐ ગં ગણપતયે નમો નમઃ",
    kicker: "સગાઈની ઉજવણી",
    dateLabel: "18 ઓક્ટોબર 2026",
  },

  countdown: {
    heading: "ઉજવણી સુધીનો સમય",
    labels: { days: "દિવસ", hours: "કલાક", minutes: "મિનિટ", seconds: "સેકન્ડ" },
  },

  story: {
    heading: "બે હૃદય, એક વચન",
    lines: [
      "બે અલગ દુનિયાના બે હૃદય,",
      "હંમેશા સાથે ચાલવાનું એક વચન.",
      "અને આમ, જીવનભર સાથે રહેવાની સફરની શરૂઆત થાય છે.",
    ],
  },

  couple: {
    withText: "સાથે",
    bride: {
      name: "સુમન",
      parents:
        "(પુત્રી: શ્રી અશોક કુમાર અને શ્રીમતી ટીના નોલખા)",
    },
    groom: {
      name: "નૈતિક",
      parents:
        "(પુત્ર: શ્રી કાંતીભાઈ અને શ્રીમતી શારદાબેન ગોંડલિયા)",
    },
  },

  events: {
    items: [
      {
        name: "સગાઈ અને વીંટી વિધિ",
        img: "/images/event-engagement.png",
        date: "રવિવાર, 18 ઓક્ટોબર 2026",
        time: "સવારે ૯:૩૦ થી ૧૧:૩૦ સુધી",
        venue: "હોટેલ તુલસી આઈકોન, સુરત",
        dress: "",
        theme: "",
      },
      {
        name: "ભોજન",
        img: "/images/event-lunch.png",
        date: "રવિવાર, 18 ઓક્ટોબર 2026",
        time: "સવારે ૧૧:૩૦ થી બપોરે ૧૨:૩૦ સુધી",
        venue: "હોટેલ તુલસી આઈકોન, સુરત",
        dress: "",
        theme: "",
      },
    ],
  },

  venue: {
    name: "હોટેલ તુલસી આઈકોન, સુરત",
    address: "લાલ દરવાજા, રેલવે સ્ટેશન રોડ, સુરત, ગુજરાત 395003",
  },

  hearts: {
    heading: "હૃદયોની સફર અને નવી ક્ષિતિજો",
    text: "નૈતિક, જે દરેક નવી સફરની શરૂઆત સ્મિત સાથે કરે છે, અને સુમન, જે રોજિંદી પળોને યાદોમાં ફેરવી દે છે, હવે જીવનની સફર સાથે ચાલવામાં પોતાનો સૌથી મોટો આનંદ શોધે છે. આશીર્વાદ અને ખુશ હૃદયો સાથે, તેઓ પોતાના જીવનના સુંદર નવા અધ્યાયની શરૂઆત કરે છે.",
  },

  blessings: {
    text: "અમારા વડીલોના આશીર્વાદ અને પરિવારના પ્રેમ સાથે, અમે જીવનના આ સુંદર નવા અધ્યાયમાં પ્રવેશી રહ્યા છીએ. આ ખાસ પ્રસંગે આપની હાજરી અમારી ખુશીઓને પૂર્ણ કરશે.",
    calendarLabel: "કૅલેન્ડરમાં ઉમેરો",
    calendarTitle: "નૈતિક અને સુમન — સગાઈ સમારોધ",
  },

  joy: {
    heading: "આનંદની વહેંચણી",
    host: ["શ્રી ક્રિયાંશ ગોંડલિયા", "શ્રી નિર્વાણ ગોંડલિયા","શ્રી દેવાંશ માંગરોલિયા", "કુ. ગ્રીવા ગોંડલિયા", "કુ. વેદિકા ગોંડલિયા"],
    hostNote: "શુભેચ્છાઓ સાથે",
    compliments: ["ગોંડલિયા પરિવાર"],
  },

  contacts: {
    heading: "સહાય અને સંકલન",
    note: "ફક્ત આશીર્વાદ સ્વરૂપે આપની હાજરી અમારે માટે અમૂલ્ય છે.",
    people: [
      { name: "કાંતીભાઈ ગોંડલિયા", phone: "+91 99257 07157" },
      { name: "જિગ્નેશભાઈ ગોંડલિયા", phone: "+91 99098 94605" },
      { name: "ચિરાગભાઈ ગોંડલિયા", phone: "+91 96872 51305" },
    ],
  },

  footer: {
    names: "નૈતિક અને સુમન",
    dateLine: "18-10-2026",
    craftedBy: "બે હૃદય, એક સુંદર કહાની",
  },
};

// ------------------------------------------------------------
//  Strings written inside the components themselves (not config)
// ------------------------------------------------------------

export const uiEn = {
  openInvitation: "Open the invitation",
  drawnLine: "// sheet 01 · drawn by Suman, deployed by Naitik",
  siteLine: (venue) => `site · ${venue}`,
  project: "project",
  scale: "scale",
  site: "site",
  date: "date",
  forever: "1 : forever",
  sanctioned: "// sanctioned by family & friends, built to last",
  venueHeading: "The Venue",
  getDirection: "Get Direction",
  langButton: "ગુજરાતી",
};

export const uiGu = {
  openInvitation: "આમંત્રણ ખોલો",
  drawnLine: "// શીટ 01 · સુમને દોરી, નૈતિકે વસાવી",
  siteLine: (venue) => `સ્થળ · ${venue}`,
  project: "પ્રોજેક્ટ",
  scale: "સ્કેલ",
  site: "સ્થળ",
  date: "તારીખ",
  forever: "1 : સદાય",
  sanctioned: "// પરિવાર અને મિત્રોની મંજૂરીથી, સદાય માટે બનેલું",
  venueHeading: "સ્થળ",
  getDirection: "દિશા મેળવો",
  langButton: "English",
};
