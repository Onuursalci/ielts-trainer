/* ============================================================
   IELTS Trainer — içerik verisi (TÜM sınav içeriği İNGİLİZCE)
   Yapı:
     SECTIONS  : bölüm tanımları (listening / reading / writing / speaking)
     MOCKS     : mock test kartları
     SECTIONALS: tek bölüm testleri
     PRACTICE  : soru bankası listeleri
     PLAN      : 8 haftalık çalışma planı + sınav formatı künyesi
   ============================================================ */
window.APP_DATA = (function () {

  /* ------------------------------------------------------------
     LISTENING — Section 2 (10 soru, not tamamlama)
     ------------------------------------------------------------ */
  var L2 = {
    kind: "listening",
    id: "L2",
    label: "Listening",
    emoji: "🎧",
    title: "Section 2 — Community Centre Open Day",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s2.mp3",
    intro: "You will hear a woman giving information about a community centre open day. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good morning everyone, and a very warm welcome to the Greenfield Community Centre. My name is Sarah Whitfield, and I'm the centre's events coordinator. I'm delighted to see so many of you here for our annual Open Day. This year, it's taking place on Saturday, the twelfth of April, and we have a full programme of activities for you.\n\nFirst, a quick word about today itself. We're open from ten in the morning — please note that's ten, not half past nine as some of you may have seen on last year's posters. The first event of the day is a short welcome talk, and that will take place in the main hall at half past ten. After the talk, our volunteers will be running guided tours of the building. The tours leave from the reception desk, and they go every thirty minutes, starting at eleven. Each tour can take a maximum of twelve people, so if you'd like to join one, please put your name down at reception as soon as possible.\n\nNow, let me tell you about our new season of evening workshops, which start next month. The photography workshop is always popular, and this year it will run on Monday evenings, from half past six until half past eight. That's a change — last year it was on Tuesdays. Our yoga class continues on Tuesdays, from seven to eight, as before. And we have something completely new: a cooking workshop for beginners, which will be held on Wednesdays, from six until eight in the evening. The teacher is a professional chef, so I'm sure those places will fill up quickly.\n\nFor our younger visitors, the children's art club takes place every Thursday after school, and there are still a few places left. And today only, as part of the Open Day, children can enjoy free face painting in the small hall, between eleven and one o'clock.\n\nMany of you have asked about membership, so let me explain how it works. Adult membership costs twenty-five pounds per year. Students pay fifteen pounds. And if you're over sixty-five, we're offering a twenty per cent discount. You can sign up today at reception, or online through our website. If you join today, you'll also receive a free ticket for the summer concert.\n\nA few practical points. Parking is free for visitors, and the car park is behind the sports hall — just follow the signs. The number twenty-four bus stops right outside the main entrance, and the number sixty-two stops on the corner of Greenfield Road. If you have any questions at all, please call us on oh-one-four-three-two, five-five-oh, seven-eight-six. That's oh-one-four-three-two, five-five-oh, seven-eight-six. You can also find all this information on our website.\n\nFinally, do help yourself to tea and coffee in the café, which is open until four o'clock. Enjoy your visit, and thank you for coming!",
    groups: [
      {
        title: "GREENFIELD COMMUNITY CENTRE — OPEN DAY",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Date: Saturday {{1}}",
          "• Doors open at {{2}} a.m.",
          "• First event: welcome talk in the {{3}} at 10.30",
          "• Guided tours leave from the {{4}} every 30 minutes from 11 a.m.",
          "• Maximum {{5}} people per tour",
          "",
          "EVENING WORKSHOPS",
          "• Photography: {{6}} evenings, 6.30–8.30",
          "• Cooking for beginners: Wednesdays, 6 p.m. to {{7}} p.m.",
          "",
          "FOR FAMILIES",
          "• Free {{8}} for children today, 11 a.m.–1 p.m.",
          "• Children's art club: Thursdays after school",
          "",
          "MEMBERSHIP",
          "• Adults: £{{9}} per year (students £15)",
          "• Sign up at reception or online",
          "",
          "PARKING & GETTING HERE",
          "• Free car park behind the {{10}}",
          "• Buses 24 and 62 stop nearby"
        ],
        qs: [
          { n: 1, answer: ["12 April", "12th April", "April 12", "April 12th", "the twelfth of April"], explain: "She says the Open Day is 'taking place on Saturday, the twelfth of April'." },
          { n: 2, answer: ["10", "10 am", "ten"], explain: "'We're open from ten in the morning' — and she stresses it is not 9.30." },
          { n: 3, answer: ["main hall", "the main hall"], explain: "The welcome talk 'will take place in the main hall at half past ten'." },
          { n: 4, answer: ["reception desk", "reception", "the reception desk"], explain: "'The tours leave from the reception desk.'" },
          { n: 5, answer: ["12", "twelve"], explain: "Each tour can take 'a maximum of twelve people'." },
          { n: 6, answer: ["Monday", "Mondays"], explain: "Photography runs 'on Monday evenings'. Last year it was Tuesday — that is the trap." },
          { n: 7, answer: ["8", "8 pm", "eight"], explain: "Cooking is 'on Wednesdays, from six until eight in the evening'." },
          { n: 8, answer: ["face painting", "face-painting"], explain: "'Children can enjoy free face painting in the small hall.'" },
          { n: 9, answer: ["25", "£25", "twenty-five"], explain: "'Adult membership costs twenty-five pounds per year.'" },
          { n: 10, answer: ["sports hall", "the sports hall"], explain: "'The car park is behind the sports hall.'" }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 1, 13 soru (TFNG + completion + MCQ)
     ------------------------------------------------------------ */
  var R1 = {
    kind: "reading",
    id: "R1",
    label: "Reading",
    emoji: "📖",
    title: "Passage 1 — The City That Cycles",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The City That Cycles",
    paras: [
      { tag: "A", text: "In the 1950s, city planners across the Netherlands were convinced that the future belonged to the car. Streets were widened, tram lines were removed, and new neighbourhoods were designed around parking rather than people. Cycling, which had once been a normal way of getting to work, was increasingly treated as a pastime for children, or as a sport for enthusiasts, rather than as serious transport." },
      { tag: "B", text: "By the late 1960s, however, public opinion began to shift. The oil crisis of 1973 made driving suddenly expensive, and a growing number of parents were alarmed by the number of children killed on the roads. Campaign groups such as Stop de Kindermoord — 'Stop Child Murder' — organised protests that attracted widespread media attention. The pressure worked. From the mid-1970s, national and local governments began to spend serious money on a new kind of infrastructure: cycle paths that were physically separated from motor traffic." },
      { tag: "C", text: "That network has been extended street by street ever since — it was never completed in a single decade. The city of Utrecht is often held up as the model. Its central station now has the largest bicycle parking facility in the world, with space for more than 12,500 bicycles, and cyclists have their own bridges, tunnels and traffic lights." },
      { tag: "D", text: "The benefits are measurable. Regular cycling is linked to lower rates of heart disease, and because a bicycle produces no exhaust fumes, the air in city centres is cleaner than it would otherwise be. Independent studies also suggest that cyclists spend more money in local shops than drivers do, because they stop more often and buy smaller amounts." },
      { tag: "E", text: "Not everything runs smoothly, though. Winter conditions reduce the number of people cycling, and some researchers point out that cycling is not equally common across all communities: in several Dutch cities, residents with a migration background cycle significantly less than the population as a whole. Cycle parking, meanwhile, takes up public space that some residents would rather see used for trees and seating." },
      { tag: "F", text: "For cities elsewhere, the Dutch experience offers a clear lesson: paint on the road is not enough. What matters is a continuous network of protected routes, backed by political patience and money over several decades. Cities that build a short, disconnected path and then wait for cyclists to appear usually wait a very long time." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "In the 1950s, Dutch planners believed that the car represented the future of urban transport.", answer: ["TRUE"], explain: "Paragraph A: planners 'were convinced that the future belonged to the car'." },
          { n: 2, text: "Cycling in the Netherlands became more popular during the 1960s.", answer: ["FALSE"], explain: "Paragraph A says cycling was increasingly treated as a pastime; the shift in opinion only began in the late 1960s (paragraph B)." },
          { n: 3, text: "The oil crisis of 1973 was one of the factors that changed attitudes towards cycling.", answer: ["TRUE"], explain: "Paragraph B: 'The oil crisis of 1973 made driving suddenly expensive' — one factor among others." },
          { n: 4, text: "The campaign group Stop de Kindermoord was funded by the Dutch government.", answer: ["NOT GIVEN"], explain: "The passage says the group organised protests, but says nothing about who funded it." },
          { n: 5, text: "The Netherlands' cycle network was essentially finished by the early 1980s.", answer: ["FALSE"], explain: "Paragraph C: the network 'has been extended street by street ever since — it was never completed in a single decade'." },
          { n: 6, text: "According to the passage, cyclists spend more money in local shops than car drivers do.", answer: ["TRUE"], explain: "Paragraph D: 'Independent studies also suggest that cyclists spend more money in local shops than drivers do'." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 7, text: "Utrecht's central station has the largest bicycle {{7}} facility in the world.", answer: ["parking"], explain: "Paragraph C: 'the largest bicycle parking facility in the world'." },
          { n: 8, text: "Cycle paths separated from motor traffic began to be built in the mid-{{8}}.", answer: ["1970s", "1970's"], explain: "Paragraph B: 'From the mid-1970s… cycle paths that were physically separated from motor traffic'." },
          { n: 9, text: "Cycling regularly is associated with lower rates of heart {{9}}.", answer: ["disease"], explain: "Paragraph D: 'Regular cycling is linked to lower rates of heart disease'." },
          { n: 10, text: "Some researchers note that cycling is less common among residents with a {{10}} background.", answer: ["migration", "migrant"], explain: "Paragraph E: 'residents with a migration background cycle significantly less'." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "What does the writer say about the protests organised by campaign groups?", options: { A: "They took place in many different countries.", B: "They helped persuade politicians to act.", C: "They focused mainly on the cost of driving." }, answer: ["B"], explain: "Paragraph B: 'The pressure worked. From the mid-1970s, national and local governments began to spend serious money…'" },
          { n: 12, text: "What is the most important lesson for other cities, according to the passage?", options: { A: "Copying Dutch street design exactly.", B: "Building a continuous network over many years.", C: "Banning cars from city centres." }, answer: ["B"], explain: "Paragraph F: 'a continuous network of protected routes, backed by political patience and money over several decades'." },
          { n: 13, text: "Which criticism of cycling in the Netherlands is mentioned in the passage?", options: { A: "Cycling is less common in some communities.", B: "Cycling causes more accidents than driving.", C: "Cycle parking takes space away from shops." }, answer: ["A"], explain: "Paragraph E mentions that cycling 'is not equally common across all communities' — option B is not claimed, and C twists 'trees and seating' into 'shops'." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     WRITING — Task 1 + Task 2 (model cevaplı paket)
     ------------------------------------------------------------ */
  var W1 = {
    kind: "writing",
    id: "W1",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack — Task 1 & Task 2",
    subtitle: "2 tasks · model answers · 8 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the percentage of commuters in a European city who used four different types of transport to travel to work in 2000 and 2020.",
        chart: {
          caption: "How commuters travelled to work, 2000 vs 2020 (%)",
          bars: [
            { label: "Car", a: 57, b: 42 },
            { label: "Public transport", a: 26, b: 31 },
            { label: "Bicycle", a: 9, b: 18 },
            { label: "On foot", a: 8, b: 9 }
          ],
          years: ["2000", "2020"]
        },
        tips: [
          "Paraphrase the question in one sentence, then give an overview of the biggest change — no numbers in the overview.",
          "Group the data: rises (bicycle, public transport) in one paragraph, falls and stable figures (car, on foot) in another.",
          "Use comparison language: 'nearly doubled', 'fell by 15 percentage points', 'remained the most common'.",
          "Do not give opinions or explanations — only describe what the chart shows.",
          "Aim for 160–190 words in 20 minutes."
        ],
        model: "The bar chart compares the percentage of commuters using four modes of transport to travel to work in a European city in 2000 and 2020.\n\nOverall, the car remained the most common way of commuting in both years, although its share fell considerably. By contrast, cycling nearly doubled, and public transport also grew, while walking stayed almost unchanged.\n\nIn 2000, well over half of commuters (57%) travelled to work by car. By 2020, this figure had dropped to 42%, a decline of 15 percentage points. Public transport remained important as well: its share rose modestly from 26% to 31%.\n\nThe most striking change was in cycling, which increased from 9% in 2000 to 18% in 2020 — twice its original level. Finally, the proportion of people walking to work stayed almost the same, rising only marginally from 8% to 9%.\n\nTaken together, the figures suggest a gradual shift away from the private car towards public transport and cycling, although cars were still used by the largest group of commuters in 2020."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Some people believe that university students should pay the full cost of their studies because higher education benefits the individual more than society. To what extent do you agree or disagree?",
        tips: [
          "Introduction: paraphrase the statement, then state your position clearly in one sentence.",
          "Body 1: accept the individual benefit (better salaries, job security) — show you understand both sides.",
          "Body 2: argue for the social benefit (doctors, teachers, higher taxes, innovation).",
          "Conclusion: restate your position and suggest a balanced system.",
          "Aim for 270–300 words in 40 minutes. Spend 5 minutes planning before you write."
        ],
        model: "It is sometimes argued that students should bear the full cost of university education, since the main benefit of a degree is the higher salary that graduates earn personally. While I accept that graduates gain a great deal, I believe that society benefits too much from higher education for students to pay the entire cost alone.\n\nOn one hand, the individual benefit is obvious. Graduates typically enjoy better-paid and more secure jobs, and these advantages last for decades. It therefore seems fair that they contribute significantly towards the cost of their education. However, requiring full fees may discourage capable young people from poorer families from attending university at all, which would mean that education becomes available mainly to the wealthy — a result that harms not only those individuals but the whole economy.\n\nOn the other hand, higher education produces benefits that no individual could provide alone. Universities train the doctors, teachers, engineers and researchers that every community depends on, and the work they do is valued far beyond their own income. In addition, graduates pay higher taxes throughout their working lives, which means that governments recover much of the money they invest. Countries that fail to invest in universities risk falling behind in innovation and productivity.\n\nIn conclusion, graduates should certainly contribute towards their education, but a balanced system — realistic tuition fees combined with loans and scholarships — is fairer than forcing students to pay the full cost. Society should pay its share because it also receives a large share of the benefits."
      }
    ],
    extraPrompts: {
      t1: [
        "The table below shows the number of international students at a UK university in five different years (2005, 2010, 2015, 2020, 2023).",
        "The chart below shows how a typical household in one country spent its income in four categories (housing, food, transport, leisure) in 2000 and 2020.",
        "The line graph shows the number of visitors to three museums in London between 2015 and 2023."
      ],
      t2: [
        "Some people think that governments should invest more in public transport than in building new roads. To what extent do you agree or disagree?",
        "In many countries, people are moving away from rural areas to cities. Is this a positive or negative development?",
        "Some people believe that professionals such as doctors and engineers should be required to work in the country where they trained. To what extent do you agree or disagree?",
        "Advertising aimed at children should be banned. To what extent do you agree or disagree?",
        "Nowadays many people choose to be self-employed rather than work for a company. Why might this be the case? What are the drawbacks?"
      ]
    }
  };

  /* ------------------------------------------------------------
     SPEAKING — Part 1–3 + cue card bankası
     ------------------------------------------------------------ */
  var S1 = {
    kind: "speaking",
    id: "S1",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack — Parts 1–3",
    subtitle: "Full speaking flow + cue card bank",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you some questions about yourself and familiar topics. Answer in 2–3 sentences each — give a small reason or example, then stop.",
        qs: [
          "Where are you from?",
          "Do you work or are you a student?",
          "What do you like most about your hometown?",
          "What do you usually do at weekends?",
          "Do you enjoy travelling? Why?",
          "How often do you use public transport?",
          "What kind of food do you like?",
          "Are you good at managing your time?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you must speak for one to two minutes. Use the bullet points in order — a clear structure is what examiners notice.",
        cue: "Describe a place you like to spend time in.",
        bullets: ["where it is", "how often you go there", "what you do there", "and explain why you like this place"],
        sampleStructure: "A clear structure: (1) open with what/where — 'The place I want to talk about is a small park near my home…'; (2) answer each bullet with one detail — 'I go there about twice a week, usually after work…'; (3) give your 'why' in the last 30 seconds — 'I like it because it feels far from the noise of the city…'.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions related to the Part 2 topic. Give an opinion, then justify it with reasons and examples.",
        qs: [
          "Why do some people prefer to spend time indoors rather than outdoors?",
          "How have public spaces in cities changed in recent years?",
          "Do you think cities should provide more free leisure facilities?",
          "Why do people sometimes travel long distances to visit quiet places?",
          "Should governments protect old public buildings even if they are expensive to maintain?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a person who has influenced you. (who they are · how you know them · what they did · why they influenced you)",
      "Describe a book you enjoyed reading. (what it was about · when you read it · why you enjoyed it)",
      "Describe a memorable journey. (where you went · who with · what happened · why it was memorable)",
      "Describe a skill you would like to learn. (what it is · why you want it · how you would learn it)",
      "Describe an important decision you made. (what it was · why you made it · what happened after)",
      "Describe a piece of technology you find useful. (what it is · how you use it · why it is useful)",
      "Describe a time when you helped someone. (who you helped · what happened · how you felt)",
      "Describe your favourite season of the year. (which season · what happens then · why you like it)"
    ]
  };

  /* ------------------------------------------------------------
     SECTIONS kayıt defteri
     ------------------------------------------------------------ */
  var SECTIONS = { L2: L2, R1: R1, W1: W1, S1: S1 };

  /* ------------------------------------------------------------
     MOCK TESTLER — kare pastel kartlar (11 slot)
     ------------------------------------------------------------ */
  var MOCKS = [
    { id: "mock1", name: "Tomato", emoji: "🍅", color: "#FFCECB", status: "ready", sections: ["L2", "R1", "W1", "S1"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock2", name: "Carrot", emoji: "🥕", color: "#FFD7BA", status: "ready", sections: ["L3", "R2", "W2", "S2"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock3", name: "Corn", emoji: "🌽", color: "#FFE49B", status: "ready", sections: ["L4", "R3", "W3", "S3"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock4", name: "Broccoli", emoji: "🥦", color: "#D9F3CE", status: "ready", sections: ["L5", "R4", "W4", "S4"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock5", name: "Blueberry", emoji: "🫐", color: "#E4EDFE", status: "ready", sections: ["L6", "R5", "W5", "S5"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock6", name: "Grape", emoji: "🍇", color: "#EEE9FF", status: "ready", sections: ["L7", "R6", "W6", "S6"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock7", name: "Lemon", emoji: "🍋", color: "#FDF7C3", status: "ready", sections: ["L8", "R7", "W7", "S7"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock8", name: "Strawberry", emoji: "🍓", color: "#FFDFF3", status: "ready", sections: ["L9", "R8", "W8", "S8"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock9", name: "Avocado", emoji: "🥑", color: "#DFF0C8", status: "ready", sections: ["L10", "R9", "W9", "S9"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock10", name: "Peach", emoji: "🍑", color: "#F5E1C8", status: "ready", sections: ["L11", "R10", "W10", "S10"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" },
    { id: "mock11", name: "Watermelon", emoji: "🍉", color: "#FFE3EA", status: "ready", sections: ["L12", "R11", "W11", "S11"], desc: "Listening · Reading · Writing · Speaking", meta: "4 sections · full simulation" }
  ];

  /* ------------------------------------------------------------
     MOCKS bütünlüğü — çalışma zamanı doğrulaması:
     her mock'un her bölüm id'si SECTIONS'ta tanımlı olmalı ve bir
     bölüm en fazla bir mock'ta kullanılabilir (S12 hariç tüm bölümler
     mock 1–11 arasında benzersiz dağıtılmıştır). extra-*.js dosyaları
     SECTIONS'ı genişlettiği için kontrol DOMContentLoaded anında,
     tüm script'ler yüklendikten sonra çalışır.
     ------------------------------------------------------------ */
  function assertMocksValid() {
    var seen = {};
    MOCKS.forEach(function (m) {
      (m.sections || []).forEach(function (sid) {
        if (!SECTIONS[sid]) throw new Error("MOCK " + m.id + ": SECTIONS'ta tanımsız bölüm id'si: " + sid);
        if (seen[sid]) throw new Error("Bölüm id'si birden fazla mock'ta: " + sid + " (" + seen[sid] + ", " + m.id + ")");
        seen[sid] = m.id;
      });
    });
    return true;
  }
  if (typeof document !== "undefined" && document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
      try {
        assertMocksValid();
      } catch (e) {
        // Ağ/asset hatası bölüm eksik bırakmış olabilir: sayfayı çökertme, bildir.
        console.error("[ielts] Veri bütünlüğü uyarısı:", e.message);
      }
    });
  }

  /* ------------------------------------------------------------
     BÖLÜM TESTLERİ
     ------------------------------------------------------------ */
  var SECTIONALS = [
    { id: "sec-listening", section: "L2", emoji: "🎧", title: "Listening Section 2", sub: "10 questions · note completion · 12 min" },
    { id: "sec-reading", section: "R1", emoji: "📖", title: "Reading Passage 1", sub: "13 questions · TFNG + completion + MCQ · 20 min" },
    { id: "sec-writing", section: "W1", emoji: "✍️", title: "Writing Task 1 & 2", sub: "2 tasks + model answers · 60 min" },
    { id: "sec-speaking", section: "S1", emoji: "🗣️", title: "Speaking Parts 1–3", sub: "full flow + cue card bank · 14 min" },
    { id: "sec-listening3", section: "L3", emoji: "🎧", title: "Listening Section 3", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening4", section: "L4", emoji: "🎧", title: "Listening Section 4", sub: "10 questions · note completion · 12 min" },
    { id: "sec-reading2", section: "R2", emoji: "📖", title: "Reading Passage 2", sub: "13 questions · TFNG + completion + MCQ · 20 min" },
    { id: "sec-reading3", section: "R3", emoji: "📖", title: "Reading Passage 3", sub: "13 questions · summary completion + MCQ + TFNG · 20 min" },
    { id: "sec-listening5", section: "L5", emoji: "🎧", title: "Listening — Newtown Fen: Volunteer Induction", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening6", section: "L6", emoji: "🎧", title: "Listening — Reviewing a Travel Survey", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening7", section: "L7", emoji: "🎧", title: "Listening — The Domestication of the Horse", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening8", section: "L8", emoji: "🎧", title: "Listening — Meadowbank Science Museum: Booking a School Visit", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening9", section: "L9", emoji: "🎧", title: "Listening — Feedback on a Draft Essay", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening10", section: "L10", emoji: "🎧", title: "Listening — Predicting Volcanic Eruptions", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening11", section: "L11", emoji: "🎧", title: "Listening — Riverbank Allotment: Applying for a Plot", sub: "10 questions · note completion · 12 min" },
    { id: "sec-listening12", section: "L12", emoji: "🎧", title: "Listening — Coral Reef Restoration", sub: "10 questions · note completion · 12 min" },
    { id: "sec-reading4", section: "R4", emoji: "📖", title: "Reading Passage 4 — The Chalk Giants", sub: "13 questions · TFNG + completion + MCQ · 20 min" },
    { id: "sec-reading5", section: "R5", emoji: "📖", title: "Reading Passage 5 — Rewilding the Highlands", sub: "13 questions · TFNG + MCQ + completion · 20 min" },
    { id: "sec-reading6", section: "R6", emoji: "📖", title: "Reading Passage 6 — The Right to Repair", sub: "13 questions · completion + MCQ + TFNG · 20 min" },
    { id: "sec-reading7", section: "R7", emoji: "📖", title: "Reading Passage 7 — How Octopuses Think", sub: "13 questions · TFNG + completion + MCQ · 20 min" },
    { id: "sec-reading8", section: "R8", emoji: "📖", title: "Reading Passage 8 — The Four-Day Week Experiment", sub: "13 questions · TFNG + MCQ + completion · 20 min" },
    { id: "sec-reading9", section: "R9", emoji: "📖", title: "Reading Passage 9 — Ice Cores: Archives of Ancient Air", sub: "13 questions · completion + TFNG + MCQ · 20 min" },
    { id: "sec-reading10", section: "R10", emoji: "📖", title: "Reading Passage 10 — Saving Vanishing Languages", sub: "13 questions · TFNG + completion + MCQ · 20 min" },
    { id: "sec-reading11", section: "R11", emoji: "📖", title: "Reading Passage 11 — The Placebo Puzzle", sub: "13 questions · completion + MCQ + TFNG · 20 min" }
  ];

  /* ------------------------------------------------------------
     SORU BANKASI
     ------------------------------------------------------------ */
  var PRACTICE = {
    listening: [
      { title: "Section 2 — Community Centre Open Day", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L2", ready: true }
    ],
    reading: [
      { title: "Passage 1 — The City That Cycles", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Sentence completion", "Multiple choice"], link: "test.html?id=R1", ready: true }
    ],
    writing: [
      { title: "Task 1 & Task 2 Pack", sub: "2 full tasks + 8 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W1", ready: true }
    ],
    speaking: [
      { title: "Parts 1–3 + Cue Card Bank", sub: "3 parts + 8 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S1", ready: true }
    ]
  };

  /* ------------------------------------------------------------
     8 HAFTALIK PLAN — her gün: [görev metni, bağlantı veya null]
     ------------------------------------------------------------ */
  var PLAN = {
    examFacts: [
      { k: "Listening", v: "30 min · 40 questions · 4 recordings, played once" },
      { k: "Reading", v: "60 min · 40 questions · 3 long passages" },
      { k: "Writing", v: "60 min · 2 tasks (150 + 250 words)" },
      { k: "Speaking", v: "11–14 min · 3 parts, face-to-face" },
      { k: "Band scale", v: "0–9 in 0.5 steps · overall = average of the four sections" }
    ],
    weeks: [
      {
        n: 1, theme: "Foundations & diagnostic", desc: "Learn the exam format and set your baseline.",
        days: [
          [["Set your test date and read the exam format", "study-center.html#format"], ["Practice: Listening Section 2 — full attempt, no pausing", "test.html?id=L2"], ["Note 5 new words or phrases you heard", null]],
          [["Practice: Reading Passage 1 under 20 minutes", "test.html?id=R1"], ["Check answers and write why each mistake happened", null]],
          [["Re-listen to the recording with the transcript; mark missed answers", "test.html?id=L2"], ["Review Reading questions 1–6 (True/False/Not Given logic)", "test.html?id=R1"]],
          [["Study the Task 1 model answer: intro → overview → detail paragraphs", "test.html?id=W1"], ["Write your own 150+ word answer to the Task 1 prompt", "test.html?id=W1"]],
          [["Speaking Part 2: record yourself for 2 minutes on the cue card", "test.html?id=S1"], ["Listen back once; note two things to improve", null]],
          [["Mixed review: listening transcript + writing checklist + error notes", null], ["Learn 10 trend phrases (increase, decline, remain stable…)", null]],
          [["Full mock test 1 — take the whole simulation", "test.html?id=mock1"], ["Review every wrong answer; save your notes", "records.html"]]
        ]
      },
      {
        n: 2, theme: "Completion questions", desc: "Notes, forms and sentence completion — accuracy first.",
        days: [
          [["Repeat Listening Section 2; focus on spelling of answers", "test.html?id=L2"], ["Copy each answer word three times — spelling counts", null]],
          [["Reading: questions 7–10 (sentence completion) again", "test.html?id=R1"], ["Read the instructions on word limits carefully", null]],
          [["Listening: answer while hearing, then check — no rewinding", "test.html?id=L2"]],
          [["Writing: rewrite your Task 1 using the model structure", "test.html?id=W1"]],
          [["Speaking Part 1: all 8 questions, 20–30 seconds each", "test.html?id=S1"]],
          [["Vocabulary: 10 words from this week's texts, with example sentences", null]],
          [["Timed Listening + Reading block (no breaks)", "mock-tests.html"], ["Score it in Test Records", "records.html"]]
        ]
      },
      {
        n: 3, theme: "TFNG & multiple choice", desc: "Statement logic, paraphrase hunting, option elimination.",
        days: [
          [["Redo Reading Q1–6; justify each answer with a quote from the passage", "test.html?id=R1"]],
          [["Paraphrase hunt: match 10 phrases from the questions to the passage", "test.html?id=R1"]],
          [["Q11–13: practise eliminating wrong options before choosing", "test.html?id=R1"]],
          [["Writing Task 2: read the model; label the job of each paragraph", "test.html?id=W1"]],
          [["Speaking Part 3: answer 5 discussion questions aloud", "test.html?id=S1"]],
          [["Error log review; retry any set below 60% correct", null]],
          [["Full mock test 1 — attempt #2; beat your first score", "test.html?id=mock1"]]
        ]
      },
      {
        n: 4, theme: "Writing Task 1 mastery", desc: "Charts, comparisons and a clean overview sentence.",
        days: [
          [["Study the bar-chart model: overview sentence and comparisons", "test.html?id=W1"]],
          [["Write Task 1 again from memory structure — 18 minutes", "test.html?id=W1"]],
          [["Trend vocabulary: 15 phrases + 5 of your own sentences", null]],
          [["Reading: full passage under strict 20 minutes", "test.html?id=R1"]],
          [["Listening transcript study: underline where each answer came from", "test.html?id=L2"]],
          [["Speaking: second cue card, record and review", "test.html?id=S1"]],
          [["Timed writing block: Task 1 + Task 2 in 60 minutes", "test.html?id=W1"]]
        ]
      },
      {
        n: 5, theme: "Writing Task 2 & Speaking Part 2", desc: "Essays with a clear position; fluent two-minute talks.",
        days: [
          [["Essay structure: paraphrase the question, state your position", "test.html?id=W1"]],
          [["Write a full Task 2 essay — 40 minutes, 270+ words", "test.html?id=W1"]],
          [["Compare with the model: what did it do better?", "test.html?id=W1"]],
          [["Speaking Part 2: two cue cards back-to-back with 1-minute prep", "test.html?id=S1"]],
          [["Listening practice: same section, aim for instant recall", "test.html?id=L2"]],
          [["Grammar clinic: articles and plurals in your own writing", null]],
          [["Sectional day: Writing + Speaking", "test.html?id=W1"]]
        ]
      },
      {
        n: 6, theme: "Full mock #2 & targeted fixes", desc: "Measure again, then repair the weakest question types.",
        days: [
          [["Full mock test 1 again — new strategy: flag hard questions", "test.html?id=mock1"]],
          [["Error analysis: categorise each mistake (vocab / logic / timing)", "records.html"]],
          [["Redo the question types you missed most often", "practice.html"]],
          [["Writing: fix your two weakest criteria (linking / range)", "test.html?id=W1"]],
          [["Speaking: full Parts 1–3 flow, record everything", "test.html?id=S1"]],
          [["Light day: 20 min listening + 20 min reading", "practice.html"]],
          [["Full mock — target +0.5 band over your last attempt", "test.html?id=mock1"]]
        ]
      },
      {
        n: 7, theme: "Timing & stamina", desc: "Same skills, real clock. Build exam endurance.",
        days: [
          [["Reading: 13 questions in 17 minutes (timing buffer)", "test.html?id=R1"]],
          [["Listening: answer while listening, no pauses", "test.html?id=L2"]],
          [["Writing: Task 1 in 18 min, Task 2 in 38 min", "test.html?id=W1"]],
          [["Speaking: 15-minute mock with a friend or a recording", "test.html?id=S1"]],
          [["Review records: your band trend — note the plateau", "records.html"]],
          [["Rest + light vocabulary review", null]],
          [["Full timed simulation under strict exam conditions", "test.html?id=mock1"]]
        ]
      },
      {
        n: 8, theme: "Final review & exam simulation", desc: "Sharpen, taper, arrive ready.",
        days: [
          [["Redo every answer you got wrong across the plan", "records.html"]],
          [["Final full mock — your last measure before exam day", "test.html?id=mock1"]],
          [["Writing: one polished Task 2, no time limit", "test.html?id=W1"]],
          [["Speaking: record the remaining cue cards", "test.html?id=S1"]],
          [["Light day: skim notes, spelling list, band criteria", null]],
          [["Rest. Sleep early.", null]],
          [["Exam-day checklist: ID, confirmation, arrival time, water", null]]
        ]
      }
    ]
  };

  return { SECTIONS: SECTIONS, MOCKS: MOCKS, SECTIONALS: SECTIONALS, PRACTICE: PRACTICE, PLAN: PLAN, assertMocksValid: assertMocksValid };
})();
