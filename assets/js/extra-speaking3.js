/* ============================================================
   IELTS Trainer — Speaking Packs 8–12 (S8–S12)
   data.js'ten SONRA yüklenmeli; window.APP_DATA'yı genişletir.
     D.SECTIONS.S8..S12 : Parts 1–3 (yeni temalar) + 5 yeni cue card (her paket)
     D.PRACTICE.speaking: S8..S12 kayıtları eklenir (push)
   MOCKS, EXTRA_SPEAKING ve i18n.js'e DOKUNMAZ.
   Temalar: S8 sağlık/spor · S9 doğa/hava · S10 müzik/sinema/sanat
            S11 alışveriş/para · S12 mahalle/şehir yaşamı
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  /* ---------------------------------------------------------
     S8 — Health, fitness & wellbeing
     --------------------------------------------------------- */
  var S8 = {
    kind: "speaking",
    id: "S8",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 8 — Health & Wellbeing",
    subtitle: "Healthy routines · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: health, exercise and the way you look after yourself. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "Do you do any exercise at the moment? If so, what kind?",
          "How many hours of sleep do you usually get on a weekday?",
          "Do you prefer exercising indoors or outdoors? Why?",
          "Is there a sport you like watching, even if you don't play it?",
          "How do you usually relax after a stressful day?",
          "Have you ever tried to change a habit for the sake of your health?",
          "Do you think you get enough fresh air and daylight?",
          "Would you like to take up a new sport this year?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a healthy habit you have tried to build into your routine.",
        bullets: [
          "what the habit is",
          "when and why you started it",
          "how you keep yourself motivated",
          "and explain how it has affected you"
        ],
        sampleStructure: "A clear structure: (1) name the habit and keep it concrete — 'The habit I've been trying to build is a twenty-minute walk before breakfast…'; (2) explain when and why you started — 'I began last spring, after a check-up showed that my blood pressure was a little high…'; (3) say how you keep going — 'I pair it with something I already do, and I mark each day on a calendar…'; (4) save the effect for the final 30 seconds — 'It has made me feel more awake in the mornings and less stressed at work…'. If you run out of ideas, mention a week when you broke the habit and how you got back on track.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing only your own routine.",
        qs: [
          "Why do you think many people find it difficult to keep New Year's resolutions about health?",
          "Should governments do more to encourage people to exercise? What could they do?",
          "Some people say that mental health is discussed more openly today than in the past. Do you agree?",
          "Is it better to exercise at a gym or simply to walk and cycle as part of daily life?",
          "To what extent is a person's health a private matter rather than something society should pay for?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a sport or physical activity you enjoy. (what it is · how you learned it · how often you do it · why you enjoy it)",
      "Describe a time when you felt especially healthy and full of energy. (when it was · what you were doing · what had changed · why you felt that way)",
      "Describe a place near your home where you like to exercise. (where it is · what it is like · when you go there · why it suits you)",
      "Describe something you do to look after your mental health. (what it is · when you started · how often you do it · why it helps)",
      "Describe a time when you were ill or injured and had to slow down. (what happened · how long it lasted · what you could not do · what you learned from it)"
    ]
  };

  /* ---------------------------------------------------------
     S9 — Nature, weather & the environment
     --------------------------------------------------------- */
  var S9 = {
    kind: "speaking",
    id: "S9",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 9 — Nature & Weather",
    subtitle: "The natural world · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: weather, nature and the environment around you. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "What is the weather like where you live at this time of year?",
          "Do you spend much time outdoors at weekends?",
          "Is there a park or green space close to your home?",
          "Do you prefer warm weather or cold weather? Why?",
          "How often do you check the weather forecast?",
          "Are there many trees and plants in your neighbourhood?",
          "Do you do anything at home to reduce waste?",
          "Would you like to live closer to nature one day?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a natural place you have visited that made a strong impression on you.",
        bullets: [
          "where it is",
          "when you went there and who was with you",
          "what you did while you were there",
          "and explain why it impressed you"
        ],
        sampleStructure: "A clear structure: (1) locate the place straight away — 'The place I'd like to describe is a stretch of coastline about an hour south of my city…'; (2) cover the trip itself with one or two concrete details — 'I went there last summer with two friends, and we arrived just before sunset…'; (3) describe what you actually did — walking, swimming, watching birds — rather than listing facts; (4) keep your 'why' for the last 30 seconds — 'What struck me was the silence; there was no traffic, only the sound of the sea…'. If you need more to say, compare it with a familiar city park.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than simply describing a place you know.",
        qs: [
          "Why do you think people living in cities need access to green spaces?",
          "Should national parks limit the number of visitors in order to protect them?",
          "Who should take more responsibility for the environment — governments or individuals?",
          "How does the weather affect the way people behave and feel?",
          "Some people say that children today spend too little time outdoors. Do you agree?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a park or green space in your area that you like. (where it is · what it looks like · who you go there with · why you like it)",
      "Describe a time when the weather changed your plans. (what you had planned · what the weather did · what you did instead · how you felt about it)",
      "Describe an animal you have seen in the wild. (what it was · where you saw it · what it was doing · how you felt)",
      "Describe something you do to reduce the amount of waste you produce. (what you do · when you started · how easy it is · why you do it)",
      "Describe a natural sound that you find pleasant. (what the sound is · where you hear it · when you hear it · why you like it)"
    ]
  };

  /* ---------------------------------------------------------
     S10 — Music, films & the arts
     --------------------------------------------------------- */
  var S10 = {
    kind: "speaking",
    id: "S10",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 10 — Music, Films & the Arts",
    subtitle: "Culture and entertainment · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: music, films and the arts in your everyday life. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "What kind of music do you listen to most often?",
          "Do you listen to music while you work or study?",
          "Have you ever been to a live concert?",
          "Do you prefer watching films at the cinema or at home?",
          "Can you play a musical instrument?",
          "Is there a film you have watched more than once?",
          "Do you enjoy drawing, painting or making things by hand?",
          "How do you find out about new music or films?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a song or piece of music that is important to you.",
        bullets: [
          "what it is",
          "when you first heard it",
          "when you usually listen to it now",
          "and explain why it is important to you"
        ],
        sampleStructure: "A clear structure: (1) identify the song and its style immediately — 'The song I want to talk about is a slow piano piece by a singer-songwriter I discovered at university…'; (2) tell the story of hearing it for the first time — where you were, who played it, what caught your attention; (3) explain when you listen to it now — on long journeys, while cooking, before an exam; (4) save the reason for the last 30 seconds — 'It matters to me because it was playing during a difficult week, and it still calms me down…'. If you run dry, mention how your interpretation of the song has changed over time.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than talking only about your own taste.",
        qs: [
          "Why do you think music is important in almost every culture?",
          "Should governments spend public money on museums and theatres?",
          "Do you think films and television programmes today are too focused on making money?",
          "How has streaming changed the way people listen to music and watch films?",
          "Some people believe that artistic talent cannot be taught. What is your view?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a film you would recommend to a friend. (what it is about · where you watched it · what you liked about it · why you would recommend it)",
      "Describe a live performance you have attended. (what it was · where and when it took place · who you went with · what made it memorable)",
      "Describe a museum or gallery you have visited. (where it is · what you saw there · who you went with · why you remember it)",
      "Describe a type of music that is popular in your country. (what it sounds like · who listens to it · when people hear it · why it is popular)",
      "Describe something you made by hand and were proud of. (what it was · how you made it · how long it took · why you were pleased with it)"
    ]
  };

  /* ---------------------------------------------------------
     S11 — Shopping, money & consumer habits
     --------------------------------------------------------- */
  var S11 = {
    kind: "speaking",
    id: "S11",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 11 — Shopping & Money",
    subtitle: "Spending and saving · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: shopping, money and the way you spend and save. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "Do you prefer shopping in shops or online? Why?",
          "Do you usually make a shopping list before you go out?",
          "Are you good at saving money, or do you prefer to spend it?",
          "Have you bought anything recently that you were very happy with?",
          "Do you ever compare prices before you buy something?",
          "Do you prefer paying by card or in cash?",
          "Are there many shops close to where you live?",
          "Have you ever sold something you no longer needed?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe something you bought that you were especially pleased with.",
        bullets: [
          "what it was",
          "why you decided to buy it",
          "how long you had wanted it before you bought it",
          "and explain why you were so pleased with it"
        ],
        sampleStructure: "A clear structure: (1) name the item and what it is for — 'The purchase I'm most pleased with is a pair of walking boots I bought about a year ago…'; (2) explain the decision — what problem it solved and why you chose that one rather than a cheaper option; (3) say how long you had been thinking about it, which naturally shows the planning behind the purchase; (4) keep your 'why' for the final 30 seconds — 'I'm pleased with it because I've worn them almost every weekend since, and they still look new…'. If you stall, contrast it with a purchase you regretted.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing only your own shopping.",
        qs: [
          "Why do you think people often buy things they do not really need?",
          "How much influence does advertising have on what people choose to buy?",
          "Is there too much advertising directed at young people?",
          "Is it better for a country's economy if people spend more or save more?",
          "How have people's shopping habits changed in the last twenty years?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a shop where you have received particularly good service. (where it is · what it sells · what happened · why the service was good)",
      "Describe a time when you saved up for something you wanted. (what it was · how long it took · how you saved · how you felt when you finally bought it)",
      "Describe something you bought and later regretted. (what it was · why you bought it · what went wrong · what you learned)",
      "Describe something you own that you bought second-hand. (what it is · where you got it · why you chose it · how it has lasted)",
      "Describe a time when you changed your mind about buying something. (what you were considering · what made you hesitate · what you decided · whether you were glad)"
    ]
  };

  /* ---------------------------------------------------------
     S12 — Neighbourhood, community & city life
     --------------------------------------------------------- */
  var S12 = {
    kind: "speaking",
    id: "S12",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 12 — Neighbourhood & City Life",
    subtitle: "Local community · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: your neighbourhood, your neighbours and life in your local area. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "How long have you lived in your neighbourhood?",
          "What do you like most about the area where you live?",
          "Do you know many of your neighbours?",
          "What facilities are there near your home?",
          "Is your neighbourhood quiet or busy?",
          "Do you feel safe walking around your area at night?",
          "How do you usually get around your local area?",
          "Would you like to move to a different area in the future?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a change that has taken place in your local area.",
        bullets: [
          "what changed",
          "when it happened",
          "how people living there reacted",
          "and explain whether you think it was a good change"
        ],
        sampleStructure: "A clear structure: (1) state the change plainly — 'A change that has affected my neighbourhood is the opening of a new tram line…'; (2) give the timing and a little background — 'It was built over about two years, and the road was closed for most of that time…'; (3) describe the reaction honestly — some shopkeepers were worried about the loss of parking, while commuters were delighted; (4) use 'whether' to give a balanced judgement in the last 30 seconds — 'On balance, I think it was a good change, although…'. If you need more material, compare the area before and after.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing only your own street.",
        qs: [
          "Why do you think some people never get to know their neighbours?",
          "Why do some people prefer to live in the centre of a city while others choose the suburbs?",
          "What can local governments do to create a stronger sense of community?",
          "How does life in a large city differ from life in a small town?",
          "Some people say that local shops are disappearing because of large supermarkets. Is this a problem?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a neighbour you know well. (who they are · how long you have known them · what you talk about · why you get on well)",
      "Describe a local event that you have attended. (what the event was · where it took place · who was there · what you enjoyed about it)",
      "Describe a public building in your town that you use often. (what it is · where it is · what you do there · why it is useful)",
      "Describe a problem in your local area that you would like to see solved. (what the problem is · who it affects · what has been done so far · what you think should happen)",
      "Describe a city you have visited that was well planned. (which city · what it was like · what impressed you · what other cities could learn from it)"
    ]
  };

  D.SECTIONS.S8 = S8;
  D.SECTIONS.S9 = S9;
  D.SECTIONS.S10 = S10;
  D.SECTIONS.S11 = S11;
  D.SECTIONS.S12 = S12;

  D.PRACTICE.speaking.push(
    { title: "Parts 1–3 + Cue Card Bank — Pack 8", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S8", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 9", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S9", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 10", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S10", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 11", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S11", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 12", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S12", ready: true }
  );
})();
