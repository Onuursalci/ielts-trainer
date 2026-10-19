/* ============================================================
   IELTS Trainer — ek dinleme bölümleri (L3 + L4)
   SECTIONS'a L3/L4 kaydı, PRACTICE.listening'e iki kayıt ekler.
   data.js'ten SONRA yüklenmelidir.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  /* ------------------------------------------------------------
     LISTENING — Section 3 (10 soru, not tamamlama, iki sesli)
     ------------------------------------------------------------ */
  D.SECTIONS.L3 = {
    kind: "listening",
    id: "L3",
    label: "Listening",
    emoji: "🎧",
    title: "Section 3 — Planning a Group Presentation",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s3.mp3",
    intro: "You will hear two university students, Ella and Marcus, planning their group presentation for an environmental science module. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Hi Ella, sorry I'm late. Have you already started?\n\nNo, don't worry — I only got here a few minutes ago. I've been looking at different ideas all week. Have you decided what topic we're doing for the environmental science presentation?\n\nWell, we talked about plastic in the oceans, but everyone seems to be doing that. I thought maybe food waste — there's plenty of material on it, and it links nicely to the lecture on consumption. I found a couple of really useful reports last week, actually.\n\nYes, I like that. Food waste it is. Let's put that at the top of the notes.\n\nGood. Now, the big issue — when is it actually due? I had the fourteenth of March in my diary.\n\nThat's what I thought too, but I checked the course page this morning, and they've moved it. The deadline is now the twenty-first of March, because the tutor will be away at a conference that week. They've put the new date at the top of the module page.\n\nThe twenty-first — right, I'll fix that now.\n\nAnd how long is the presentation? I'm sure the brief said fifteen minutes.\n\nIt used to be fifteen, but Doctor Whitfield changed it. Her email says twelve minutes, including questions, so we'll need to cut some of our material. I think we can lose the video clip.\n\nTwelve minutes. OK. Now — how are we going to collect our data? Originally we said questionnaires, didn't we?\n\nWe did, but after the last seminar I'm not so sure. Doctor Whitfield said questionnaires take weeks to organise properly. She suggested interviews instead — she's even given us a list of people from the canteen who'd be happy to talk to us. She says we can quote them anonymously if they prefer.\n\nInterviews. That's more work, but I agree — it fits a small-scale study better.\n\nAnd she said we must refer to at least eight academic sources, so we should start collecting articles soon. I've already got a shortlist from the reading list.\n\nEight sources — right. And what about equipment? Do we need to book anything?\n\nThe presentation rooms all have projectors now, so we don't need to book one. But we should borrow a lapel microphone from the media desk, because the room is quite large. The desk has several, but they go quickly at this time of term.\n\nI'll write that down. Lapel microphone. I might look in at the media desk on my way home. And when shall we meet each week? Tuesdays?\n\nTuesdays don't work for me this term — I have a lab until five. What about Wednesday? Same time as usual, four o'clock.\n\nWednesday's fine. And where shall we meet? The main library?\n\nThe library's closed for renovation until May, remember? Let's use the student hub — it has those big group tables upstairs, and we can talk without disturbing anyone. I'll book one of the rooms there for the whole term.\n\nThe student hub, perfect. And we should divide the tasks. You're good with design — could you edit the slides?\n\nSure, I can do the slides. And you — the tricky part — you could collect the data? You already know the canteen manager.\n\nOK, I'll collect the data and write up the findings. You do the slides, and we'll both rehearse the talk.\n\nDeal. So let's meet on Wednesday at four, then.",
    groups: [
      {
        title: "GROUP PRESENTATION — PLANNING MEETING",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Topic chosen: {{1}}",
          "• Hand-in deadline: {{2}}",
          "• Presentation length: {{3}} minutes",
          "",
          "RESEARCH",
          "• Research method: {{4}}",
          "• Refer to at least {{5}} academic sources",
          "",
          "EQUIPMENT & ROOMS",
          "• Projectors already fitted — no booking needed",
          "• Borrow a {{6}} from the media desk",
          "",
          "WEEKLY MEETINGS",
          "• Day: {{7}}, 4 p.m.",
          "• Place: the {{8}}",
          "",
          "TASKS",
          "• Marcus: edit the {{9}}",
          "• Ella: {{10}} and write up the findings"
        ],
        qs: [
          { n: 1, answer: ["food waste", "the food waste"], explain: "Marcus suggests the topic ('maybe food waste'), and Ella agrees: 'Food waste it is.'" },
          { n: 2, answer: ["21 March", "21st March", "March 21", "March 21st", "the twenty-first of March", "twenty-first of March"], explain: "Ella checked the course page: 'The deadline is now the twenty-first of March.' The fourteenth of March was the old date — that is the trap." },
          { n: 3, answer: ["12", "twelve"], explain: "'Her email says twelve minutes, including questions.' It used to be fifteen — that is the trap." },
          { n: 4, answer: ["interviews", "interview"], explain: "'She suggested interviews instead.' They had originally said questionnaires — that is the trap." },
          { n: 5, answer: ["8", "eight"], explain: "'We must refer to at least eight academic sources.'" },
          { n: 6, answer: ["lapel microphone", "the lapel microphone", "lapel mic"], explain: "'We should borrow a lapel microphone from the media desk.' The rooms already have projectors, so no booking is needed." },
          { n: 7, answer: ["Wednesday", "on Wednesday"], explain: "'What about Wednesday? Same time as usual, four o'clock.' Tuesdays do not work for Marcus — that is the trap." },
          { n: 8, answer: ["student hub", "the student hub"], explain: "'Let's use the student hub.' The library is closed for renovation — that is the trap." },
          { n: 9, answer: ["slides", "the slides"], explain: "'Could you edit the slides?' — 'Sure, I can do the slides.'" },
          { n: 10, answer: ["collect data", "collect the data"], explain: "'You could collect the data? You already know the canteen manager.'" }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     LISTENING — Section 4 (10 soru, not tamamlama, tek konuşmacı)
     ------------------------------------------------------------ */
  D.SECTIONS.L4 = {
    kind: "listening",
    id: "L4",
    label: "Listening",
    emoji: "🎧",
    title: "Section 4 — The Northern Lights",
    subtitle: "Questions 1–10 · Note completion",
    minutes: 12,
    audio: "assets/audio/listening-s4.mp3",
    intro: "You will hear part of a lecture about the aurora, or the northern lights. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    transcript: "Good afternoon, everyone, and welcome to this session on the aurora — the phenomenon most of us know as the northern lights. In this talk I'll cover what causes the lights, where and when you should go to see them, and why a small field station in northern Sweden has become so important for their study.\n\nLet's begin with the science. The aurora begins at the sun. Our star is constantly throwing off a stream of electrically charged particles, and this stream is what we call the solar wind. When it reaches the Earth, most of the particles are deflected around the planet, but some are guided towards the two poles, and there, about a hundred kilometres above our heads, they crash into the gases of the upper atmosphere and make them glow. The colours depend on which gas is involved. Most people know the familiar green, which comes from oxygen at low altitude. But oxygen can also give a deep red at very high altitude, and the purple and blue tones you see in photographs come from nitrogen.\n\nSo where should you travel to see the lights? They appear inside a ring-shaped zone around each magnetic pole, and the best-studied region is northern Scandinavia. Our own field station was originally planned for a site outside Alta, in Norway, but the team eventually settled on Abisko, in Swedish Lapland, because the skies there are clear on far more nights than anywhere else in the region. The station stands about ninety kilometres from the town of Kiruna, and in winter it can only be reached by rail.\n\nAnd when is the best time to visit? Here I have to correct a common belief. Tourist guides will tell you that March is the best month, and it is certainly a good one. But when we analysed the station's records over thirty years, October came out on top, with more clear nights than any other month. So if you plan a trip, October is your best bet.\n\nThere is a related point about timing within the night. People assume that you have to stay up until midnight to see anything, but the data tell a different story: the lights are usually strongest around ten o'clock in the evening, and then they slowly fade. So set your alarm for the early evening rather than the middle of the night.\n\nIf you want to photograph the aurora, do not worry about expensive equipment. A basic camera on a tripod, with an exposure of about fifteen seconds, will give you surprisingly good results. What matters far more than the camera is the weather — and, above all, the darkness.\n\nWhich brings me to the biggest problem facing observers, and it may not be the one you expect. You might think that the cold is the main difficulty, and yes, minus thirty is uncomfortable. But the real enemy of aurora watching is light pollution. The glow of a village, a road, or a ski resort can wash out the whole display for kilometres around.\n\nLet me finish with two smaller points. In Finnish, the lights are called revontulet, and the name means 'fox fires', from an old story about a fox running across the fells and sweeping sparks into the sky. Finally, the station's measurements are not only of academic interest. Satellite operators rely on our data, because charged particles can damage the electronics of spacecraft, and our forecasts help them decide when to switch their systems off. That practical demand is the main reason the station's budget keeps growing. In the next session, we will look at some of those data sets in more detail. Thank you.",
    groups: [
      {
        title: "LECTURE NOTES — THE NORTHERN LIGHTS",
        instr: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        lines: [
          "• Particles from the sun arrive in a stream called the {{1}}",
          "• The green light comes from oxygen; purple and blue come from {{2}}",
          "",
          "WHEN TO WATCH",
          "• Best month for clear skies: {{3}}",
          "• Strongest activity: around {{4}} in the evening",
          "",
          "WHERE TO WATCH",
          "• Field station: built at {{5}}, Swedish Lapland",
          "• About {{6}} kilometres from Kiruna",
          "",
          "PHOTOGRAPHY",
          "• Use a tripod and an exposure of about {{7}} seconds",
          "",
          "CULTURE & SCIENCE",
          "• The Finnish name means '{{8}}'",
          "• Biggest problem for observers: {{9}}",
          "• The station's data help {{10}} operators"
        ],
        qs: [
          { n: 1, answer: ["solar wind", "the solar wind"], explain: "'This stream is what we call the solar wind.'" },
          { n: 2, answer: ["nitrogen"], explain: "'The purple and blue tones you see in photographs come from nitrogen.' The green comes from oxygen — a distractor." },
          { n: 3, answer: ["October", "in October"], explain: "'October came out on top.' Guides usually recommend March — that is the trap." },
          { n: 4, answer: ["10", "ten", "ten o'clock"], explain: "'The lights are usually strongest around ten o'clock in the evening.' Staying up until midnight is the assumption in the trap." },
          { n: 5, answer: ["Abisko", "in Abisko"], explain: "'The team eventually settled on Abisko.' The original plan was a site outside Alta — that is the trap." },
          { n: 6, answer: ["90", "ninety"], explain: "'The station stands about ninety kilometres from the town of Kiruna.'" },
          { n: 7, answer: ["15", "fifteen", "15 seconds", "fifteen seconds"], explain: "'An exposure of about fifteen seconds.'" },
          { n: 8, answer: ["fox fires", "foxfires"], explain: "'The name means 'fox fires'.'" },
          { n: 9, answer: ["light pollution", "the light pollution"], explain: "'The real enemy of aurora watching is light pollution.' The cold is the expected answer — that is the trap." },
          { n: 10, answer: ["satellite", "satellites", "satellite operators"], explain: "'Satellite operators rely on our data.'" }
        ]
      }
    ]
  };

  D.PRACTICE.listening.push(
    { title: "Section 3 — Planning a Group Presentation", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L3", ready: true },
    { title: "Section 4 — The Northern Lights", sub: "Note completion · 10 questions", types: ["Note completion"], link: "test.html?id=L4", ready: true }
  );
})();
