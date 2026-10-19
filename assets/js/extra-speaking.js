/* ============================================================
   IELTS Trainer — Speaking Pack 2 (S2) + band 6 vs band 7 samples
   data.js'ten SONRA yüklenmeli; window.APP_DATA'yı genişletir.
     D.SECTIONS.S2       : Parts 1–3 (yeni temalar) + 6 yeni cue card
     D.PRACTICE.speaking : S2 kaydı eklenir (push)
     D.EXTRA_SPEAKING    : 4 soru için band6 / band7 / why + 6 maddelik checklist
   MOCKS ve i18n.js'e DOKUNMAZ.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D) throw new Error('APP_DATA yok');

  var S2 = {
    kind: "speaking",
    id: "S2",
    label: "Speaking",
    emoji: "🗣️",
    title: "Speaking Pack 2 — Parts 1–3",
    subtitle: "New topics · 6 extra cue cards · band 6 vs 7 answers",
    minutes: 14,
    parts: [
      {
        part: 1,
        name: "Part 1 — Introduction & interview",
        intro: "The examiner asks you about yourself and familiar topics — this pack is about work and study habits, technology, food and free time. Answer in 2–3 sentences each: a direct answer, one reason or example, then stop.",
        qs: [
          "What does a typical working or studying day look like for you?",
          "Are you more productive in the morning or in the evening?",
          "How much time do you spend on your phone on an average day?",
          "Which app or website do you open most often, and why?",
          "Do you prefer cooking at home or eating out? Why?",
          "What is your favourite meal of the day?",
          "What do you like to do when you have a couple of hours free?",
          "Have you taken up any new hobbies recently?"
        ]
      },
      {
        part: 2,
        name: "Part 2 — Individual long turn",
        intro: "You have one minute to prepare, then you speak for up to two minutes. Cover the bullet points in order and keep one concrete example ready — a well-organised talk sounds far more fluent than a pile of random ideas.",
        cue: "Describe a long-term goal you would like to achieve.",
        bullets: [
          "what the goal is",
          "when you first started thinking about it",
          "what you are doing to achieve it",
          "and explain why this goal is important to you"
        ],
        sampleStructure: "A clear structure: (1) open with the goal itself — 'One goal I've had for a while is to become fluent in English…'; (2) take the next bullets one by one, each with a real detail — 'I started thinking about it seriously about two years ago, when…'; (3) save your 'why' for the final 30 seconds — 'It matters to me because it would open doors to study and work abroad…'. If you run out of ideas, add a small example or contrast the goal with your situation in the past.",
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        part: 3,
        name: "Part 3 — Discussion",
        intro: "The examiner asks more abstract questions connected to your Part 2 topic, so your answers should sound more analytical here than in Part 1. State your view first, then support it with reasons, contrasts and examples.",
        qs: [
          "Why do some people give up on their goals after a short time?",
          "Do you think schools should teach students how to set and reach goals?",
          "In your opinion, is success today measured too much by money?",
          "How might people's goals change as they get older?",
          "Some people say that luck matters more than planning. What is your view?"
        ]
      }
    ],
    extraCueCards: [
      "Describe a meal you often cook for yourself. (what you cook · how you learned to make it · when you usually cook it · why you enjoy it)",
      "Describe a hobby you have taken up recently. (what the hobby is · when you started · what you need for it · why you have kept it up)",
      "Describe a photo you took that you really like. (what is in the photo · when and where you took it · who was with you · why you like it)",
      "Describe a time when you were very busy and had to organise your day carefully. (when it was · why you were so busy · how you organised your time · how you felt at the end of the day)",
      "Describe a game you enjoyed playing when you were a child. (what the game was · who you played it with · how often you played · why you enjoyed it)",
      "Describe a piece of advice that changed the way you do something. (what the advice was · who gave it to you · when you received it · what changed afterwards)"
    ]
  };

  D.SECTIONS.S2 = S2;

  D.PRACTICE.speaking.push({
    title: "Parts 1–3 + Cue Card Bank — Pack 2",
    sub: "3 parts + 6 extra cue cards",
    types: ["Part 1", "Part 2", "Part 3"],
    link: "test.html?id=S2",
    ready: true
  });

  D.EXTRA_SPEAKING = {
    samples: [
      {
        q: "What does a typical working or studying day look like for you?",
        band6: "On a normal day, I usually get up at about seven and I have breakfast at home. Then I go to my classes in the morning, because at the moment I'm studying. In the afternoon I usually do my homework or review my notes. In the evening I relax a little, maybe watch some videos or talk to my family. After dinner I sometimes go for a short walk. I try to go to bed before eleven, because I need to sleep well. It is a simple routine, but I like it, because I can plan my time and I don't feel stressed.",
        band7: "To be honest, my days follow a fairly fixed pattern. I normally wake up around seven, have a quick breakfast, and then head straight to my classes — I'm studying at the moment, so most mornings are quite full. The afternoons are when I get most done: I review my notes, work on assignments, and if I still have energy, I squeeze in some reading. Evenings are for winding down — I might watch something or catch up with my family over dinner. The thing is, having a routine helps me stay on top of everything; without it, I'd probably waste a lot of time. I make sure I'm in bed before eleven, otherwise the next morning is a real struggle.",
        why: "Both answers describe the same routine, but the Band 7 version uses a wider range of connectives — 'the thing is', 'without it', 'otherwise' — instead of 'then / because / but'. It also replaces basic word choices ('relax a little', 'sleep well') with more natural phrases ('winding down', 'squeeze in', 'stay on top of everything') and adds a hypothetical structure ('I'd probably waste a lot of time'), which shows real grammatical range."
      },
      {
        q: "Do you prefer cooking at home or eating out? Why?",
        band6: "To be honest, I prefer eating out, but I don't do it very often. I like it because I can try different dishes and I don't need to clean anything after the meal. But it is more expensive, so on a normal week I cook at home most days. I can make some simple things, like pasta and soup, and I think cooking at home is healthier too, because I know what is in the food. I also save money this way. So I enjoy eating out, but cooking at home is better for me in general.",
        band7: "I'd say eating out is what I enjoy most, though it's more of a treat than a habit — maybe just once or twice a month. The main attraction for me is being able to try dishes I'd never get right at home, and obviously not having to wash up afterwards. That said, it adds up quickly, so the rest of the time I cook for myself; over the years I've built up a small set of recipes like pasta, soups and rice bowls. Home cooking is cheaper, and I also feel better knowing exactly what's gone into the meal. So ideally, I treat going out as something special and keep cooking as my everyday option.",
        why: "The Band 6 answer is easy to follow but repetitive: it leans on 'because', 'but' and 'so', and its sentences are strung together in one long chain. The Band 7 version sounds far more natural, with discourse markers ('though', 'that said', 'so ideally') and precise phrases ('more of a treat than a habit', 'adds up quickly', 'dishes I'd never get right at home'). It also shows a wider verb range ('built up', 'treat', 'keep') instead of repeating 'prefer / like / enjoy'."
      },
      {
        q: "Do you think schools should teach students how to set and reach goals?",
        band6: "I think yes, this is a useful idea. Many students study hard, but they don't know what they want, so they just follow other people. If schools teach goal setting, students can learn to plan their time and work step by step. For example, a student can decide to improve one subject every month, and then check if it worked. I also think it helps confidence, because when you finish a small goal, you feel good and you want to continue. So I believe schools should do this, in a simple way, not as a difficult extra subject.",
        band7: "On the whole, yes — I think it's genuinely valuable, as long as it's taught in a practical way rather than as extra theory. A lot of students work hard but lack direction; they simply follow whatever everyone else is doing. If schools taught the basics of planning and goal setting, students would learn to break big tasks into smaller steps — for instance, deciding to improve one weak subject each month and reviewing progress honestly at the end of it. It also builds confidence: ticking off small targets gives you a sense of momentum, which is what keeps people going when things get hard. So in my view, schools should treat this as a life skill, not just another subject.",
        why: "Band 7 lifts the same argument in three ways: richer vocabulary ('lack direction', 'momentum', 'life skill'), a second conditional ('If schools taught… students would learn…') where Band 6 only manages first conditionals, and smoother linking ('on the whole', 'as long as', 'which is what'). The Band 6 answer is clear, but it chains short clauses with 'so' and 'because' and repeats simple words like 'good', 'useful' and 'important'."
      },
      {
        q: "Some people say that luck matters more than planning. What is your view?",
        band6: "I don't really agree with this idea. I think planning is more important than luck, because luck is not in your hands, but planning is. Of course, luck can help sometimes. For example, maybe you meet the right person at the right time, and you get a good job. But if you don't prepare well, this chance will be lost. I know some people who wait for luck all the time, and nothing happens to them. Other people plan their work and do small steps every day, and they usually succeed. So I believe success is mostly planning, and luck is only a small part.",
        band7: "That's an interesting question, and I'd say the two aren't really rivals — planning is what turns luck into something you can actually use. Realistically, opportunities do appear by chance: you bump into the right person, or a vacancy opens up at the right moment. But unless you've put in the groundwork, you simply won't be in a position to take advantage of them — you can't pass an interview you never prepared for. I've seen this with people around me: those who rely on luck tend to sit around hoping, whereas people who plan ahead create their own good fortune. So my view is that luck might open a door, but planning decides whether you can walk through it.",
        why: "Band 6 gives a clear position, but it develops the idea with basic patterns ('I think… because…', 'For example…', 'But if…') and repetitive vocabulary around 'plan', 'luck' and 'important'. Band 7 uses a more sophisticated contrast ('the two aren't really rivals', 'whereas'), idiomatic collocations ('bump into', 'put in the groundwork', 'take advantage of') and a memorable closing image — while still sounding like natural speech rather than an essay."
      }
    ],
    checklist: [
      "Did you answer in full sentences and stop after 2–3 sentences in Part 1, instead of rambling on?",
      "Did you use a range of connectives (although, whereas, 'the thing is', 'that's why') instead of only 'and / but / because'?",
      "In Part 2, did you cover all four bullet points and keep talking for close to two minutes?",
      "Did you include at least one specific example, number or personal detail rather than staying general?",
      "Did you avoid long silences, replacing 'ummm…' with a natural filler like 'That's a good question'?",
      "Did you match the tense of the examiner's question — a 'when did you…' question needs past-tense answers?"
    ]
  };
})();
