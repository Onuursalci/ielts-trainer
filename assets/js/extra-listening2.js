/* ============================================================
   IELTS Trainer — ek dinleme bölümleri (L5 + L6 + L7)
   SECTIONS'a L5/L6/L7 kaydı, PRACTICE.listening'e üç kayıt ekler.
   data.js'ten SONRA yüklenmelidir.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  /* ------------------------------------------------------------
     LISTENING — Section 2 (10 soru, not tamamlama, tek konuşmacı)
     ------------------------------------------------------------ */
  D.SECTIONS.L5 = {
    kind: "listening",
    id: "L5",
    label: "Listening",
    emoji: "🎧",
    title: "Section 2 — Newtown Fen: Volunteer Induction",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s5.mp3",
    intro: "You will hear a talk given to a group of new volunteers at a nature reserve. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good morning, everyone, and a very warm welcome to Newtown Fen. I'm Claire Bennett, one of the two volunteer coordinators here, and in the next few minutes I want to give you everything you need to know before your first session on the reserve. Please keep the sheet I'm handing round, as it has all of the key information on it, including my phone number.\n\nLet's start with where to come. The reserve is off Mill Lane, and most of you will have driven past the big wooden gate on your way in. Please don't wait for us there — that gate is locked outside opening hours now, and we simply can't let anyone in. All volunteers, and that includes school groups, meet at the visitor centre, the low building just inside the main entrance. I'll be standing by the door from nine o'clock, and the induction session itself starts at half past nine, so there's plenty of time for a coffee first.\n\nNow, a quick word about dates. We used to hold inductions on Wednesdays, but since January we've moved them to the first Saturday of each month, which seems to suit far more people. The next session will be on the fifth of April — it was going to be the twenty-ninth of March, but the recent flooding left the main path in need of repair, so we put it back a week. If you can't make that one, there's another session on the third of May.\n\nWhat should you bring? Wellington boots, above everything else. The paths here flood easily in winter — we had to send two volunteers home last month because their trainers simply weren't up to the conditions. A warm jacket is a good idea as well, and some of you have asked me about waterproof trousers. They're useful, certainly, but honestly, a pair of wellington boots is the one thing I would insist on.\n\nLet me say a little about the working day. Our bird counts start at half past seven in the morning, while the reserve is still quiet. The café doesn't open until eight, I'm afraid, so bring a flask if you need one before then. Some of you will also be helping with the moths. We record those using a light trap, which is left out overnight and checked before breakfast, and all the records go straight into the sightings book at the visitor centre — the big green folder on the desk. Not the blue one — the blue folder is for the school groups.\n\nThis year we have an exciting project running. We're building a second bird hide, on the west shore this time, and volunteers are doing a great deal of the work themselves. The older hide, on the east shore, is still open, of course, but it's simply too small for the numbers we're getting now. And before anyone asks — yes, hot drinks are free for volunteers on survey days. The cake, sadly, is not.\n\nFinally, a few words on safety. We use radios whenever we're out on the reserve, and volunteers are on channel two. Channel one is only for the rangers. If you hear anything worrying on the radio, stop what you're doing and wait for instructions. And if you spot anything that needs fixing — a broken boardwalk, a fallen branch — write it in the sightings book as well, and we'll deal with it during the week.\n\nRight, that's everything for now. Let's head outside, and I'll show you the ropes.",
    groups: [
      {
        title: "NEWTOWN FEN — VOLUNTEER INDUCTION",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• All volunteers meet at the {{1}} — the main gate stays locked",
          "• Induction day: the {{2}} of each month",
          "• Next session: {{3}} (moved because of the flooding)",
          "",
          "WHAT TO BRING",
          "• A warm jacket and a pair of {{4}}",
          "",
          "THE WORKING DAY",
          "• Bird counts begin at {{5}}",
          "• Moths are recorded using a {{6}} left out overnight",
          "• All records go into the {{7}} at the visitor centre",
          "",
          "NEW PROJECT",
          "• This year the team is building a second {{8}}",
          "",
          "PRACTICAL MATTERS",
          "• Volunteers get free {{9}} on survey days",
          "• Report problems on radio channel {{10}}"
        ],
        qs: [
          { n: 1, answer: ["visitor centre", "the visitor centre"], explain: "All volunteers 'meet at the visitor centre'. The wooden gate is the trap — it 'is locked outside opening hours now'." },
          { n: 2, answer: ["first Saturday", "the first Saturday"], explain: "Inductions moved from Wednesdays to 'the first Saturday of each month'. Wednesday is the old day — that is the trap." },
          { n: 3, answer: ["5 April", "5th April", "April 5", "April 5th", "fifth of April", "the fifth of April"], explain: "'The next session will be on the fifth of April.' It was moved from the twenty-ninth of March because of the flooding — that is the trap." },
          { n: 4, answer: ["wellington boots", "wellingtons"], explain: "'A pair of wellington boots is the one thing I would insist on.' Waterproof trousers are mentioned, but they are not essential — that is the trap." },
          { n: 5, answer: ["7.30", "7:30", "half past seven", "seven thirty"], explain: "'Our bird counts start at half past seven in the morning.' The café opens at eight — that is the trap." },
          { n: 6, answer: ["light trap", "a light trap"], explain: "'We record those using a light trap, which is left out overnight.'" },
          { n: 7, answer: ["sightings book", "the sightings book"], explain: "All the records go 'into the sightings book at the visitor centre'. The blue folder is for school groups — that is the trap." },
          { n: 8, answer: ["bird hide", "hide"], explain: "They are 'building a second bird hide, on the west shore this time'. The older hide on the east shore is the trap." },
          { n: 9, answer: ["hot drinks", "drinks"], explain: "'Hot drinks are free for volunteers on survey days.' The cake is not free — that is the trap." },
          { n: 10, answer: ["2", "two", "channel 2", "channel two"], explain: "Volunteers are on 'channel two'. Channel one 'is only for the rangers' — that is the trap." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     LISTENING — Section 3 (10 soru, not tamamlama, iki sesli)
     ------------------------------------------------------------ */
  D.SECTIONS.L6 = {
    kind: "listening",
    id: "L6",
    label: "Listening",
    emoji: "🎧",
    title: "Section 3 — Reviewing a Travel Survey",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s6.mp3",
    intro: "You will hear a student called Nadia discussing her survey with her tutor, Dr Hale. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Thanks for making time to see me, Dr Hale. I've finally finished analysing the travel survey — the one on how students get to campus.\n\nOf course. I've been looking forward to seeing what you found. How many responses did you manage to get in the end?\n\nTwo hundred and forty. We'd hoped for two hundred, so that was a nice surprise. I checked the data over the weekend, and only a handful of forms had to be thrown out.\n\nThat's a strong response rate for a student project. And what did the results actually show?\n\nWell, the largest group were bus users — forty-five per cent. I honestly expected cycling to come second, but it turns out that walking is still more common, especially among first-year students living in halls.\n\nInteresting. And what did people complain about most? Cost, I imagine — it's certainly the complaint I hear most often from staff.\n\nThat's what I assumed, too, and it does come up — but by far the biggest issue is reliability. Buses that simply don't turn up, or three arriving at once. The average journey takes thirty-five minutes, and the waiting around is what students mind about most.\n\nReliability — yes, that matches what I keep hearing. Was there anything that surprised you in the numbers?\n\nOne thing: students who walk are the least likely to say they would switch to the bus, even in bad weather. I think that deserves a paragraph of its own.\n\nAgreed. Now, how are you planning to present the figures?\n\nI was going to put everything into one large table, with a pie chart for the main methods of travel.\n\nThe table can go in an appendix, but for the main body I'd use a bar chart — with five categories, a pie chart gets far too crowded. And don't forget to cite the council's transport report. The panel will expect it, and it's the obvious source for comparison.\n\nI'll add it to the references tonight. Is there anything else you'd change?\n\nOne thing — think about who you didn't reach. Your survey went out by email, which works well enough, but it means part-time students are almost certainly missing, because they're rarely on campus in the daytime. Say so openly, and you'll come across as more credible, not less.\n\nThat's a really good point. I'll add a short section on it.\n\nAnd an important lesson for next term: before you send anything out at all, run a pilot study with a small group. Even ten students would catch the confusing questions. Last year, one project lost almost a fortnight because half the respondents misread a single item.\n\nNoted. Actually, while I'm here — when exactly is the final version due? I have the second of December written down, but that's the date of the presentation, isn't it?\n\nIt is, yes. The written report is due a week later, on the ninth of December — and please send the draft to the course office rather than to me directly. They log everything before it reaches the marking team.\n\nThe course office — got it. I'll get the draft to them by Friday. Thanks, Dr Hale.",
    groups: [
      {
        title: "SURVEY REPORT — STUDENT TRAVEL",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Responses received: {{1}} — the target was 200",
          "• Largest group: {{2}} (45 per cent)",
          "• Main complaint: {{3}}",
          "• Average journey time: {{4}}",
          "",
          "PRESENTING THE DATA",
          "• Use a {{5}} for the main body of the report",
          "• Source to cite: the {{6}}",
          "• Say openly that {{7}} were not reached",
          "",
          "NEXT TERM",
          "• Carry out a {{8}} before the next survey",
          "• Written report due: {{9}}",
          "• Send the draft to the {{10}}"
        ],
        qs: [
          { n: 1, answer: ["240", "two hundred and forty"], explain: "'Two hundred and forty' replies came back. The target was two hundred — that is the trap." },
          { n: 2, answer: ["bus users", "the bus users", "bus"], explain: "'The largest group were bus users — forty-five per cent.' Nadia expected cycling to come second — that is the trap." },
          { n: 3, answer: ["reliability"], explain: "'By far the biggest issue is reliability.' Cost is what the tutor expects — that is the trap." },
          { n: 4, answer: ["35 minutes", "thirty-five minutes", "thirty five minutes"], explain: "'The average journey takes thirty-five minutes.'" },
          { n: 5, answer: ["bar chart", "a bar chart"], explain: "'For the main body I'd use a bar chart.' Nadia suggests a pie chart first — that is the trap." },
          { n: 6, answer: ["transport report", "council's transport report", "the council's transport report"], explain: "'Don't forget to cite the council's transport report. The panel will expect it.'" },
          { n: 7, answer: ["part-time students", "part time students"], explain: "'Part-time students are almost certainly missing', because the survey went out by email and they are rarely on campus in the daytime." },
          { n: 8, answer: ["pilot study", "a pilot study"], explain: "'Run a pilot study with a small group' before the next survey goes out." },
          { n: 9, answer: ["9 December", "9th December", "December 9", "December 9th", "ninth of December", "the ninth of December"], explain: "'The written report is due a week later, on the ninth of December.' The second of December is the presentation — that is the trap." },
          { n: 10, answer: ["course office", "the course office"], explain: "'Send the draft to the course office rather than to me directly.'" }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     LISTENING — Section 4 (10 soru, not tamamlama, tek konuşmacı)
     ------------------------------------------------------------ */
  D.SECTIONS.L7 = {
    kind: "listening",
    id: "L7",
    label: "Listening",
    emoji: "🎧",
    title: "Section 4 — The Domestication of the Horse",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s7.mp3",
    intro: "You will hear part of a lecture about the domestication of the horse. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good morning. Today's lecture is about one of the most consequential animals in human history — the horse — and, in particular, about the long-running debate over where and when it was domesticated. We'll look at the evidence, and I think you'll see that this is a field in which the story has changed dramatically over the last few years.\n\nLet me begin with why the question matters at all. A domestic horse can carry a rider and goods over great distances, it can pull a plough or a chariot, and it transformed both farming and warfare wherever it appeared. So identifying where horses were first controlled by people is really a question about how ideas, languages and technologies moved across continents.\n\nFor a long time, popular accounts put the first domestication in Egypt, or in Mongolia, largely because both places are famous for horses today. The archaeological evidence, however, points firmly to the grassland — the steppe — of what is now Kazakhstan. The key site is called Botai, in the north of the country, and it gives its name to the people who lived there: the Botai culture.\n\nWhat makes the Botai evidence so convincing? Two things in particular. First, the teeth of the horses found at the site show microscopic wear marks, and this wear was caused not by eating, but by a rope bit — a simple loop of cord that sat in the animal's mouth and gave the rider control. Interestingly, many of the animals were young males, exactly the mix you would expect if people were selecting horses to ride rather than to eat.\n\nSecond — and this is my favourite piece of evidence — traces of mare's milk have been found inside the pottery at Botai. Chemical analysis of the cooking pots left no doubt that people were processing and drinking horse milk, which only makes sense once horses are kept close to the settlement.\n\nSo when did all of this happen? The dates from Botai take us back to about 3500 BC. But here is the puzzle: for well over a thousand years, those early horses did not spread. Their skeletons did slowly change — we see, for example, that later animals had a much stronger back, one capable of carrying a rider comfortably — but genetically, the wider world remained untouched.\n\nThen, in 2018, a large genetic study helped to clear up the mystery. It showed that the horses we see across the world today all descend from a single lineage, which began to expand from about 2000 BC — and the expansion travelled westwards with a new technology: the spoke-wheeled chariot. Within a few centuries, horses were pulling chariots in Egypt and Mesopotamia, and the animals that people had once imagined to be Egyptian were spreading into Europe as well.\n\nFrom there, the consequences ripple outwards. In farming, horses gradually replaced oxen for pulling the plough, and because a horse works faster than an ox, fields could be prepared far more quickly. In transport and in war, nothing was ever the same again: a mounted messenger could cover forty kilometres a day, and armies could move at speeds that had previously been unimaginable.\n\nAnd the effects run deeper still. Many historians now connect the spread of the horse to the spread of languages — the great Indo-European family that stretches from India to Ireland. Fast travel made migration, trade and, inevitably, conquest far easier, and those movements carried words and languages with them.\n\nTo sum up, then: the horse was most likely first controlled by the Botai people on the steppe of Kazakhstan around 3500 BC; the modern riding horse did not begin to spread until about 2000 BC, carried by chariot technology; and the results transformed farming, transport, warfare and the map of languages we still live with today. Next week, we'll ask what happened to the horse after the railway arrived — but that's another lecture. Thank you.",
    groups: [
      {
        title: "LECTURE NOTES — THE DOMESTICATION OF THE HORSE",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• The horse was first controlled on the steppe of what is now {{1}}",
          "• The evidence comes from a site called Botai, which dates from about {{2}}",
          "",
          "THE EVIDENCE",
          "• Wear marks on the horses' teeth were caused by a {{3}}",
          "• Chemical traces found in the cooking pots: {{4}}",
          "• Many of the animals were young males, chosen for {{5}}",
          "",
          "THE MODERN HORSE",
          "• Later animals had a much stronger {{6}}",
          "• The modern lineage began to spread from about {{7}}",
          "",
          "IMPACT",
          "• In farming, horses replaced {{8}} for pulling the plough",
          "• A mounted messenger could cover {{9}} kilometres a day",
          "• The horse is also linked to the spread of {{10}}"
        ],
        qs: [
          { n: 1, answer: ["Kazakhstan"], explain: "The evidence 'points firmly to... what is now Kazakhstan'. Egypt and Mongolia are popular misconceptions — that is the trap." },
          { n: 2, answer: ["3500 BC", "3,500 BC"], explain: "'The dates from Botai take us back to about 3500 BC.'" },
          { n: 3, answer: ["rope bit", "a rope bit"], explain: "The wear was caused 'by a rope bit — a simple loop of cord'. The chariot appears much later — that is the trap." },
          { n: 4, answer: ["mare's milk", "mares milk"], explain: "'Traces of mare's milk have been found inside the pottery at Botai.'" },
          { n: 5, answer: ["riding", "to ride", "ride"], explain: "Many of the animals were young males — 'exactly the mix you would expect if people were selecting horses to ride rather than to eat'." },
          { n: 6, answer: ["back"], explain: "Later animals 'had a much stronger back, one capable of carrying a rider comfortably'." },
          { n: 7, answer: ["2000 BC", "2,000 BC", "two thousand BC"], explain: "'Began to expand from about 2000 BC.' The earlier date, 3500 BC, belongs to Botai — that is the trap." },
          { n: 8, answer: ["oxen", "the oxen"], explain: "'Horses gradually replaced oxen for pulling the plough.'" },
          { n: 9, answer: ["40", "forty"], explain: "'A mounted messenger could cover forty kilometres a day.'" },
          { n: 10, answer: ["languages", "language"], explain: "The spread of the horse is linked to 'the spread of languages' — the Indo-European family." }
        ]
      }
    ]
  };

  D.PRACTICE.listening.push(
    { title: "Section 2 — Newtown Fen: Volunteer Induction", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L5", ready: true },
    { title: "Section 3 — Reviewing a Travel Survey", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L6", ready: true },
    { title: "Section 4 — The Domestication of the Horse", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L7", ready: true }
  );
})();
