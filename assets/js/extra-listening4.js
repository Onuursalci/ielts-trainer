/* ============================================================
   IELTS Trainer — ek dinleme bölümleri (L11 + L12)
   SECTIONS'a L11/L12 kaydı, PRACTICE.listening'e iki kayıt ekler.
   data.js'ten SONRA yüklenmelidir.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  /* ------------------------------------------------------------
     LISTENING — Section 2 (10 soru, not tamamlama, tek konuşmacı)
     ------------------------------------------------------------ */
  D.SECTIONS.L11 = {
    kind: "listening",
    id: "L11",
    label: "Listening",
    emoji: "🎧",
    title: "Section 2 — Riverbank Allotment: Applying for a Plot",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s11.mp3",
    intro: "You will hear the site secretary at the Riverbank allotment site explaining how to apply for a plot, what it costs, and the rules that tenants must follow. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good evening, everyone, and welcome to the Riverbank allotment site. I'm Margaret Holt, and as the site secretary I look after applications and the waiting list. Tonight I'd like to take you through how to apply for a plot, what it costs, and the rules you'll need to follow once you have one. If anything isn't clear, please ask me at the end.\n\nLet's start with the application. You'll find a form on the council website, but if you'd rather have a paper copy, they're kept in the site office, next to the main gate. Please don't go to the library for one any more. That's where the old forms used to be kept, but everything moved across to the site office last summer, and the library staff can't help you now.\n\nOnce your form is in, your name goes on the waiting list. There's no way to skip this, I'm afraid — it's a fair system. At the moment the list is running at about nine months for a full plot. I know some of you heard it was fourteen months, but that was last year's figure, before we opened the new section at the back of the site, so things have improved quite a bit.\n\nNow, the cost. A full plot — that's the traditional ten poles, roughly two hundred and fifty square metres — costs sixty pounds a year. You may have seen the signs at the Marsh Lane site across the river, where the rent is seventy-five pounds, but ours is still sixty, and the committee has frozen it for next year as well. Students and pensioners don't pay the full amount, of course. For them, the rent is half price, and they only need to show a valid card when they sign the agreement.\n\nWhat do you get for that? Every plot has access to a water tap, and everyone who signs an agreement receives a key to the tool store, so you don't need to bring your own wheelbarrow or spade unless you'd rather. You will, however, need to bring one document with you when you come to sign: a utility bill, showing your current address. A passport alone isn't enough, because it doesn't show where you live. This is the rule that causes the most confusion, so please remember it.\n\nNow, the rules, which really matter if you want to keep your plot. Bonfires are permitted, but only between October and March, and you must check the notice board first, because on some days the wind makes them unsafe and they're banned. The notice board is by the entrance, and it's always up to date. Don't rely on the website for this particular information, as it's only updated at the start of each month.\n\nIf you decide to give up your plot, that's absolutely fine, but you must give four weeks' notice in writing. Some people assume six weeks is the rule. It isn't — four is all we need — and this gives us time to offer the plot to the next person on the list.\n\nOne more thing to mention is insurance. The association insures all the sheds on the site, and we do recommend that you add your own contents cover for tools. But please note that greenhouses aren't covered at all by our policy. Several of them blew over in the winter storms a few years ago, and we had to change the terms.\n\nFinally, payment. The rent is paid in advance. It's one payment a year, in January, not monthly, and you can pay by card in the office or by bank transfer. You'll get a reminder by email, so please keep your contact details up to date.\n\nThat's everything from me for now. The map of the site is on the back of your welcome pack, and I'm very happy to answer any questions.",
    groups: [
      {
        title: "RIVERBANK ALLOTMENT SITE — APPLYING FOR A PLOT",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Application forms: from the {{1}} or online",
          "• Waiting list: currently about {{2}} months",
          "• Rent for a full plot: £{{3}} a year",
          "• Students and pensioners pay {{4}}",
          "",
          "WHAT YOU GET",
          "• Water tap and a key to the {{5}}",
          "• Bring a {{6}} as proof of address",
          "",
          "RULES",
          "• Check the {{7}} before lighting a bonfire",
          "• Giving up a plot: give {{8}} weeks' notice in writing",
          "",
          "INSURANCE & PAYMENT",
          "• Insurance covers sheds but not {{9}}",
          "• Rent is paid in {{10}}"
        ],
        qs: [
          { n: 1, answer: ["site office", "the site office"], explain: "She says the forms are 'kept in the site office, next to the main gate'. The library is the trap — it is where 'the old forms used to be kept'." },
          { n: 2, answer: ["9", "nine"], explain: "'At the moment the list is running at about nine months for a full plot.' The fourteen months she repeats is 'last year's figure' — that is the trap." },
          { n: 3, answer: ["60", "£60", "sixty"], explain: "A full plot 'costs sixty pounds a year'. The Marsh Lane site 'across the river' charges seventy-five pounds — that is the trap." },
          { n: 4, answer: ["half price"], explain: "'For them, the rent is half price' — students and pensioners do not pay the full sixty pounds." },
          { n: 5, answer: ["tool store", "the tool store"], explain: "Everyone who signs 'receives a key to the tool store'. A water tap is provided too, but the blank asks about the key." },
          { n: 6, answer: ["utility bill", "a utility bill"], explain: "You must bring 'a utility bill, showing your current address'. She warns that 'a passport alone isn't enough' — that is the trap." },
          { n: 7, answer: ["notice board", "the notice board"], explain: "'You must check the notice board first' before a bonfire. The website is the trap — 'Don't rely on the website for this particular information'." },
          { n: 8, answer: ["4", "four"], explain: "'You must give four weeks' notice in writing.' Some people assume six weeks is the rule — she says 'It isn't'." },
          { n: 9, answer: ["greenhouses"], explain: "'Greenhouses aren't covered at all by our policy.' Sheds are insured instead — that is the trap." },
          { n: 10, answer: ["advance", "in advance"], explain: "'The rent is paid in advance. It's one payment a year, in January, not monthly.'" }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     LISTENING — Section 4 (10 soru, not tamamlama, tek konuşmacı)
     ------------------------------------------------------------ */
  D.SECTIONS.L12 = {
    kind: "listening",
    id: "L12",
    label: "Listening",
    emoji: "🎧",
    title: "Section 4 — Coral Reef Restoration",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s12.mp3",
    intro: "You will hear part of a lecture about coral reef restoration. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good morning, everyone. In today's lecture I want to look at coral reef restoration: what it involves, where the most successful projects are, and what the results tell us so far. This is one of the fastest-moving areas in marine conservation, and it's worth understanding why.\n\nLet's begin with why reefs matter in the first place. Coral reefs occupy less than one per cent of the ocean floor — one per cent, not the ten per cent that some tourist displays still claim — yet they support roughly a quarter of all known marine species. That makes them the most biologically rich habitats in the sea, and it's why the loss of even a single reef is such a serious event.\n\nNow, a little biology before we go further. Corals look like rocks, or perhaps like plants, but they are in fact built by tiny animals known as polyps. Each polyp secretes a hard skeleton of calcium carbonate, and these skeletons join together to form the great structures we call reefs. When the water becomes too warm, the polyps expel the algae that live inside their tissues and feed them, and the coral turns white — a process we call bleaching, which I'll come back to.\n\nThe best-known restoration programme is run on the Great Barrier Reef, in Australia, and its fieldwork is based on Lizard Island, where the team has now been working for more than twenty years. Originally, the research station was planned for Heron Island, much further south, but the move to Lizard gave the scientists a larger protected area to work in, and that decision is one of the reasons the project has lasted so long.\n\nSo how does restoration actually work? Everything begins in underwater nurseries. Small fragments of healthy coral are collected after storms, and they are suspended in these nurseries — you can picture them as simple frames floating a few metres below the surface — where they grow much faster than they would on the reef itself. Once a fragment is large enough, it is attached to the damaged reef using cable ties. That may sound surprisingly low-tech — many people assume the team uses cement — but ties are quick to apply and, crucially, they allow the coral to be removed and repositioned if a cyclone is on its way.\n\nThe overall method has a name: coral gardening. In a single season, a trained team can plant several thousand fragments at one site. After planting, the divers record survival, which the project measures after the first eighteen months. By that point, well over eighty per cent of the fragments have survived, and the new coral is already providing shelter for fish.\n\nThe biggest threat to all of this work, though, is not the storms. It is bleaching. When marine heatwaves strike, even restored reefs can turn white within weeks, and the corals may die. So the honest message from the project is that restoration buys time; on its own, it cannot protect reefs from bleaching. Reducing emissions remains the only long-term solution.\n\nFinally, a word about the people involved. The divers who do the planting are usually paid staff, but much of the routine work is done by volunteers, and the volunteers are mainly university students of marine biology, many of them on research placements. They are trained on site, and in recent years the programme has also started training local tour guides to spot damage and report it.\n\nNext week we will look at how these techniques are being adapted for colder waters. For now, let me recommend the project's annual report, which is freely available online — the figures in it are the ones I have used today.",
    groups: [
      {
        title: "LECTURE NOTES — CORAL REEF RESTORATION",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Coral reefs cover less than {{1}} per cent of the ocean floor",
          "• They support about {{2}} of all known marine species",
          "",
          "THE BUILDERS OF THE REEF",
          "• Reefs are built by tiny animals called {{3}}",
          "",
          "THE LIZARD ISLAND PROJECT",
          "• Fieldwork is based on {{4}}",
          "• Fragments are grown in underwater {{5}}",
          "• Fragments are fixed to the reef with {{6}}",
          "• The method is known as coral {{7}}",
          "",
          "RESULTS AND RISKS",
          "• Survival is measured after the first {{8}} months",
          "• Main threat: {{9}}, caused by marine heatwaves",
          "",
          "THE TEAM",
          "• Volunteers are mainly students of {{10}}"
        ],
        qs: [
          { n: 1, answer: ["1", "one"], explain: "'Coral reefs occupy less than one per cent of the ocean floor.' She warns it is not 'the ten per cent' that some displays claim — that is the trap." },
          { n: 2, answer: ["a quarter"], explain: "Reefs 'support roughly a quarter of all known marine species'." },
          { n: 3, answer: ["polyps"], explain: "Corals 'are in fact built by tiny animals known as polyps'. They only look like rocks or plants — that is the trap." },
          { n: 4, answer: ["Lizard Island"], explain: "The fieldwork 'is based on Lizard Island'. The station was originally planned for Heron Island — that is the trap." },
          { n: 5, answer: ["nurseries"], explain: "'Everything begins in underwater nurseries.' The floating frames are mentioned, but the notes ask for the nurseries." },
          { n: 6, answer: ["cable ties"], explain: "Fragments are 'attached to the damaged reef using cable ties'. Many people 'assume the team uses cement' — that is the trap." },
          { n: 7, answer: ["gardening"], explain: "'The overall method has a name: coral gardening.'" },
          { n: 8, answer: ["18", "eighteen"], explain: "'The project measures after the first eighteen months' — survival is not recorded after one year, which is the trap." },
          { n: 9, answer: ["bleaching"], explain: "'The biggest threat to all of this work, though, is not the storms. It is bleaching.' Storms are the expected answer — that is the trap." },
          { n: 10, answer: ["marine biology"], explain: "The volunteers 'are mainly university students of marine biology'." }
        ]
      }
    ]
  };

  D.PRACTICE.listening.push(
    { title: "Section 2 — Riverbank Allotment: Applying for a Plot", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L11", ready: true },
    { title: "Section 4 — Coral Reef Restoration", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L12", ready: true }
  );
})();
