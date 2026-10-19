/* ============================================================
   IELTS Trainer — CALISMA PLANI, 2. FAZ (ek katman)
   fase 2: 9. haftadan sinav gunune kadar surdurulebilir ritim,
   kilometre taslari ve altin kurallar.
   data.js'den SONRA yuklenir. PLAN.weeks'e DOKUNMAZ; sadece
   D.PLAN.phase2 ekler. Icindeki tum metinler Ingilizce.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if(!D) throw new Error('APP_DATA yok');
  if (!D.PLAN) throw new Error("APP_DATA.PLAN yok");

  D.PLAN.phase2 = {
    title: "Phase 2 — From week 9 to exam day",
    desc: "Phase 2 keeps the same 8-week cycle, but every round starts from a higher level and uses the new mock sets as measures. The rhythm stays sustainable — about 60–90 minutes a day and one full mock every two weeks — so you can hold it for the months between week 9 and exam day. The final weeks are about freshness and taper, not new material.",
    rhythm: [
      { day: "Mon", focus: "Listening", detail: "One full section under the clock, no pausing; check every miss against the transcript and log it." },
      { day: "Tue", focus: "Reading", detail: "One passage in 20 minutes, then review only the questions you got wrong — quote the passage line for each." },
      { day: "Wed", focus: "Writing", detail: "One task, alternating Task 1 and Task 2 weekly; compare with the model answer and note two phrases worth reusing." },
      { day: "Thu", focus: "Speaking", detail: "One full part out loud, recorded; listen back once and write down two things to fix next week." },
      { day: "Fri", focus: "Weak area", detail: "Only your lowest-scoring section from the last mock; rotate to the next weakest once scores even out." },
      { day: "Sat", focus: "Vocabulary & error log", detail: "20 words from this week's texts plus a full read of the error log (~45 minutes)." },
      { day: "Sun", focus: "Review or mock", detail: "Alternate Sundays: full mock in exam conditions; the other Sundays: review Test Records and preview the week." }
    ],
    milestones: [
      { label: "Weeks 9–12", body: "Repeat the cycle with the new sets: sit mock2 (L3 + R2 + W2 + S2) around week 10 and mock3 (L4 + R3 + W1 + S1) around week 12. Goal: about +0.5 band over your week-8 result. Check: compare each attempt in Test Records." },
      { label: "Weeks 13–16", body: "Second pass at a calmer pace, one full mock every two weeks. Goal: at least 60% correct in every section on two mocks in a row. Check: your error log should get shorter each week." },
      { label: "Weeks 17–20", body: "Work on your two weakest question types, not whole sections. Goal: no section below 60% and one section at 70%+. Check: Sunday record review against your weeks 13–16 numbers." },
      { label: "Weeks 21–24", body: "Exam-condition phase: every mock starts at the same hour as your real test. Goal: 65%+ in Listening and Reading, and Writing finished inside 60 minutes. Check: the band trend in Test Records — a flat week here is normal." },
      { label: "Weeks 25–28", body: "Maintenance: no new strategies. Redo old mistakes and cue cards, keep one mock every two weeks, and stay on mock2 / mock3 plus your error log. Goal: hold your scores steady even on tired days." },
      { label: "Final weeks", body: "The goal is freshness, not new knowledge. Volume drops to about half, one short full mock 5–7 days out is the last check, and the final 48 hours are rest and sleep. Exam-day logistics (ID, confirmation, arrival time, water) are sorted a week early." }
    ],
    rules: [
      "Mock cadence: after the 8-week plan (which used full mocks in weeks 1, 3 and 6 as checkpoints), sit one full mock every two weeks — alternate Sundays — with a one-section retest on the Sunday in between.",
      "Error log discipline: write the reason for every wrong answer on the same day, and only mark an item as learned after you redo it correctly twice without help.",
      "Weak-area rotation: give every Friday to your lowest-scoring section, and rotate to the next weakest once it catches up. Never grind one skill for more than three Fridays in a row.",
      "Always practise with a clock: aim to finish Listening and Reading two or three minutes early, and keep Writing at 20 + 40 minutes, so you build a safety buffer for exam day.",
      "Balance fresh material and repetition: at least half of each week's practice should be tests or texts you have never seen; repeating familiar material feels good but it does not measure progress.",
      "Volume over ambition: cap daily practice at about 60–90 minutes and take one light day per week. You are training for roughly seven months — a steady routine beats weekend marathons.",
      "Taper: in the final two weeks cut volume roughly in half, stop new material about a week before the exam, keep one light full mock 5–7 days out, and prepare the exam-day checklist in advance."
    ]
  };
})();
