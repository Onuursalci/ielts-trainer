/* ============================================================
   IELTS Trainer — Speaking Packs 3–7 (S3–S7)
   data.js'ten SONRA yüklenmeli; window.APP_DATA'yı genişletir.
     D.SECTIONS.S3..S7    : Parts 1–3 (yeni temalar) + 5 yeni cue card (her paket)
     D.PRACTICE.speaking  : S3..S7 kayıtları eklenir (push)
   MOCKS, EXTRA_SPEAKING ve i18n.js'e DOKUNMAZ.
   Temalar: S3 teknoloji · S4 yemek · S5 seyahat · S6 iş/ders · S7 aile/kutlama
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  /* ---------------------------------------------------------
     S3 — Technology / devices in everyday life
     --------------------------------------------------------- */
  var S3 = {
    kind: "speaking",
    id: "S3",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 3 — Technology & Devices",
    subtitle: "Everyday tech · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: technology and the devices you use every day. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "What kind of phone do you use at the moment?",
          "How many hours a day would you say you spend looking at a screen?",
          "Do you use a laptop or a tablet more often, and why?",
          "Have you ever bought a device and then hardly used it?",
          "Which piece of technology could you not live without?",
          "Do you prefer reading the news on a screen or on paper?",
          "How do you usually charge your devices — at home, at work or on the move?",
          "Is there any gadget you would like to buy in the near future?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a piece of technology that has made a real difference to your daily routine.",
        bullets: [
          "what the device is",
          "when and why you started using it",
          "how it has changed the way you do things",
          "and explain how you would feel if you had to give it up"
        ],
        sampleStructure: "A clear structure: (1) open with the device itself — 'The piece of technology I'd like to talk about is a smartwatch I bought a couple of years ago…'; (2) take the next bullets one by one, each with a real detail — 'I got it mainly because I wanted to track my sleep and my step count…'; (3) save the last bullet for the final 30 seconds — 'Honestly, if I had to give it up now, I think I'd feel a bit lost, because…'. If you run out of ideas, add a small comparison with how you managed before you owned it.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic, so your answers should sound more analytical here than in Part 1. State your view first, then support it with reasons, contrasts and examples.",
        qs: [
          "Why do you think people upgrade their phones so often, even when the old one still works?",
          "Do you agree that technology has made family life better, or has it created distance between people?",
          "Some people say that we remember far less now because everything is stored on our devices. What is your view?",
          "How might the devices we use today look different in twenty years' time?",
          "Should schools limit the amount of technology children use in the classroom? Why or why not?"
        ]
      }
    ],
    extraCueCards: [
      "Describe an app or website you use almost every day. (what it is · how you found out about it · what you use it for · why it is useful to you)",
      "Describe a time when a device stopped working and caused you a problem. (what the device was · what went wrong · what you did about it · how the situation was resolved)",
      "Describe a shop or website where you like to buy gadgets. (where or what it is · how often you go there · what you usually look at · why you prefer it)",
      "Describe how you organise the files, photos or notes on your devices. (what you store · how you arrange it · when you do it · why you keep it that way)",
      "Describe a technology that older people in your family find difficult to use. (what it is · who struggles with it · why it is hard for them · how they manage in the end)"
    ]
  };

  /* ---------------------------------------------------------
     S4 — Food & cooking habits
     --------------------------------------------------------- */
  var S4 = {
    kind: "speaking",
    id: "S4",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 4 — Food & Cooking Habits",
    subtitle: "Everyday cooking · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: food and the way you cook and eat. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "Who usually does the cooking in your home?",
          "How often do you cook a meal from scratch rather than heating something up?",
          "What is the first dish you learned to make?",
          "Do you ever follow recipes from the internet while you cook?",
          "Which meal of the day do you enjoy most, and why?",
          "Is there any food you really dislike? Why?",
          "How often do you eat with other people rather than alone?",
          "Would you like to take a proper cooking course one day?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a dish you have learned to cook that you are proud of.",
        bullets: [
          "what the dish is",
          "how you learned to make it",
          "how often you cook it now",
          "and explain why you are pleased with it"
        ],
        sampleStructure: "A clear structure: (1) open with the dish itself — 'The dish I'm most proud of cooking is a simple tomato and lentil soup…'; (2) move through 'how you learned it' and 'how often you make it' with concrete details — 'My grandmother used to make it, so I watched her and wrote the steps down…'; (3) finish with your 'why' in the last 30 seconds — 'I'm pleased with it because it's the first thing I can cook without looking at the recipe at all…'. If you stall, add how you changed the recipe to suit your own taste.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing what you personally ate.",
        qs: [
          "Why do you think fewer people cook at home than in the past?",
          "Do you believe governments should do more to encourage healthy eating? How could they?",
          "How has the food we buy and eat changed over the last thirty years?",
          "Some people say family meals are important for relationships. To what extent do you agree?",
          "Do you think traditional dishes from a country are worth protecting, or should tastes simply change?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a meal that someone cooked for you as a special treat. (what the meal was · who cooked it · what the occasion was · why you remember it)",
      "Describe a market or food shop you like to visit. (where it is · what it sells · how often you go · why you like it)",
      "Describe a food that is popular in your country. (what it is · how it is made · when people eat it · why it is so popular)",
      "Describe a time when a meal you cooked did not go to plan. (what you were making · what went wrong · how you handled it · what you learned)",
      "Describe the kind of food you would serve to a visitor from another country. (what you would choose · why that dish · how you would prepare it · how you think they would react)"
    ]
  };

  /* ---------------------------------------------------------
     S5 — Travel & transport
     --------------------------------------------------------- */
  var S5 = {
    kind: "speaking",
    id: "S5",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 5 — Travel & Transport",
    subtitle: "Getting around · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: travel and the way you get around. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "How do you usually get to work, school or university?",
          "How long does that journey take you on a normal day?",
          "Do you ever walk or cycle instead of taking a vehicle?",
          "What is the public transport like where you live?",
          "Have you travelled abroad in the last few years?",
          "Do you prefer to travel alone or with other people?",
          "Would you rather take the train or fly, if both were possible?",
          "What do you normally do during a long journey?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a journey you have taken that you will always remember.",
        bullets: [
          "where you were travelling to",
          "who you travelled with",
          "what happened during the journey",
          "and explain why you still remember it"
        ],
        sampleStructure: "A clear structure: (1) open with the trip itself — 'The journey I'll never forget was a long train ride from the east of the country to the coast…'; (2) cover who you were with and what happened using one or two concrete moments — 'We missed our connection, so we ended up…'; (3) keep your 'why' for the last 30 seconds — 'It stays with me because it turned into a completely different trip from the one we planned…'. If you need more to say, add how you would do it differently if you went again.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than simply describing a trip.",
        qs: [
          "Why do you think so many people want to travel to other countries?",
          "Do you think tourism does more good than harm to local communities?",
          "Should governments spend more money on public transport than on new roads?",
          "How might the way people travel change in the next few decades?",
          "Some people say that airports and trains are too expensive for ordinary families. What is your view?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a place you would love to visit one day. (where it is · how you heard about it · what you would do there · why you want to go)",
      "Describe a form of transport you would like to use more often. (what it is · how often you use it now · what stops you using it · why you would like to)",
      "Describe a trip you took that did not go as planned. (where you were going · what went wrong · what you did instead · how you felt about it)",
      "Describe something you always take with you when you travel. (what it is · why you take it · when you started taking it · how it helps you)",
      "Describe a holiday that you would recommend to a friend. (where it was · who you went with · what made it special · why you would recommend it)"
    ]
  };

  /* ---------------------------------------------------------
     S6 — Work, study & daily routines
     --------------------------------------------------------- */
  var S6 = {
    kind: "speaking",
    id: "S6",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 6 — Work & Study Routines",
    subtitle: "Work and study · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: work, study and the routine that holds your week together. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "Are you working at the moment, or are you studying full-time?",
          "At what time of day do you usually start your work or study?",
          "Do you like to make a to-do list before you begin?",
          "How do you take a break when you have been concentrating for a long time?",
          "Is there one task in your week that you always put off?",
          "Would you rather work in a team or on your own?",
          "How do you keep track of meetings and deadlines?",
          "Do you think you will still be doing the same kind of work in ten years?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a daily routine for work or study that you are happy with.",
        bullets: [
          "what you do from morning until evening",
          "which part of the day you enjoy most",
          "how you keep yourself organised",
          "and explain why this routine suits you"
        ],
        sampleStructure: "A clear structure: (1) open with the shape of the day — 'A good working day for me starts around eight, when I…'; (2) walk through the day in order, then pick out the part you enjoy most — 'The part I like best is the quiet hour before everyone else arrives…'; (3) save your 'why' for the last 30 seconds — 'This routine suits me because it gives me an early push and still leaves my evenings free…'. If you run dry, compare it with a day when everything goes wrong.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing only your own day.",
        qs: [
          "Why do you think some people manage their time far better than others?",
          "Should employers give staff more freedom to choose when they work?",
          "Do you think students are given too much homework these days?",
          "How has the balance between work and personal life changed in recent years?",
          "Some people say that a strict daily routine kills creativity. Do you agree?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a job that you would find interesting to do. (what the job is · what it involves · what skills it needs · why it appeals to you)",
      "Describe a subject or skill you are trying to get better at. (what it is · why you chose it · how you practise · what progress you have made)",
      "Describe a time when you had too much to do in one day. (when it was · why it was so busy · how you got through it · what you would change)",
      "Describe a teacher or colleague who helped you work better. (who they are · how you know them · what they did · how it helped you)",
      "Describe the way you like to organise a place to work or study. (where it is · what is in it · how you keep it tidy · why it helps you concentrate)"
    ]
  };

  /* ---------------------------------------------------------
     S7 — Family & celebrations
     --------------------------------------------------------- */
  var S7 = {
    kind: "speaking",
    id: "S7",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 7 — Family & Celebrations",
    subtitle: "Family occasions · 5 extra cue cards · parts 1–3",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and a familiar topic: your family and the celebrations you share with them. Answer in 2–3 sentences each — a direct answer, one reason or example, then stop.",
        qs: [
          "Do you come from a large family or a small one?",
          "How often do you see your relatives?",
          "Who in your family do you spend the most time with?",
          "What do you usually do together when you meet up?",
          "Is there a celebration your family never misses?",
          "Do you prefer family gatherings at home or somewhere else?",
          "How do you normally keep in touch with relatives who live far away?",
          "Do you enjoy being the one who organises family events?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a celebration or family event that you enjoyed taking part in.",
        bullets: [
          "what the occasion was",
          "who was there",
          "what you did to help or take part",
          "and explain why you enjoyed it so much"
        ],
        sampleStructure: "A clear structure: (1) open with the occasion — 'The family event I remember most fondly is my sister's wedding a few years ago…'; (2) cover who was there and what you did with one or two vivid details — 'I was asked to give a short speech, which I practised for a week…'; (3) keep your 'why' for the last 30 seconds — 'I enjoyed it because the whole family was in the same room for the first time in years…'. If you need to fill time, describe one small moment that everybody still laughs about.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic. State your view first, then support it with reasons, contrasts and examples rather than describing only your own family.",
        qs: [
          "Why do you think family celebrations are still important in modern life?",
          "Do you agree that traditional festivals are losing their meaning as they become more commercial?",
          "How has the role of grandparents in a family changed over recent decades?",
          "Should families make more effort to eat meals together on a regular basis?",
          "Some people say that friends can be as important as family. What do you think?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a member of your family who you admire. (who they are · what they are like · what they have done · why you admire them)",
      "Describe a festival or national day that you enjoy. (what it is · when it happens · how people celebrate it · why you enjoy it)",
      "Describe a gift you once gave to someone in your family. (what it was · who it was for · why you chose it · how they reacted)",
      "Describe a family tradition that you would like to keep. (what the tradition is · when it happens · who takes part · why it matters to you)",
      "Describe a time when your whole family got together. (what the occasion was · where it was · what you did · how the day felt)"
    ]
  };

  D.SECTIONS.S3 = S3;
  D.SECTIONS.S4 = S4;
  D.SECTIONS.S5 = S5;
  D.SECTIONS.S6 = S6;
  D.SECTIONS.S7 = S7;

  D.PRACTICE.speaking.push(
    { title: "Parts 1–3 + Cue Card Bank — Pack 3", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S3", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 4", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S4", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 5", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S5", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 6", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S6", ready: true },
    { title: "Parts 1–3 + Cue Card Bank — Pack 7", sub: "3 parts + 5 extra cue cards", types: ["Part 1", "Part 2", "Part 3"], link: "test.html?id=S7", ready: true }
  );
})();
