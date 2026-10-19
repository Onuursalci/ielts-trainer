/* ============================================================
   IELTS Trainer — ek okuma pasajları (R10 + R11)
   data.js ve extra-reading.js'ten SONRA yüklenir: SECTIONS
   kayıt defterine iki yeni reading bölümü ekler ve
   PRACTICE.reading listesini genişletir.
   Şema, data.js içindeki R1 ile birebir aynıdır:
     kind/id/label/emoji/title/subtitle/minutes/intro/
     passageTitle/paras[{tag,text}]/groups[{title,instr,type,qs}]
     type: "tfng" | "gap" (metinde {{n}} yer tutucu) | "mcq"
   MOCKS ve SECTIONALS'a dokunulmaz.
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  if (!D) throw new Error("extra-reading4.js: window.APP_DATA bulunamadi (data.js once yuklenmeli)");

  /* ------------------------------------------------------------
     READING — Passage 10, 13 soru (TFNG + sentence completion + MCQ)
     ------------------------------------------------------------ */
  var R10 = {
    kind: "reading",
    id: "R10",
    label: "Reading",
    emoji: "📖",
    title: "Passage 10 — Saving Vanishing Languages",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "Saving Vanishing Languages",
    paras: [
      { tag: "A", text: "In most summaries of the threats facing the planet, the loss of a language rarely qualifies as news. Yet the pace is startling. Of the roughly 7,000 languages spoken in the world today, linguists class nearly half as endangered, and a small number vanish from use each year. The mechanism of loss is simple to state and hard to watch. A language is safe while children learn it at home without effort; it becomes endangered once parents begin speaking to their children in another, more powerful tongue. What disappears at that moment is not only a set of words but a way of dividing up experience that no translation fully carries over, since every language sorts the world a little differently." },
      { tag: "B", text: "Contrary to a widespread assumption, languages are rarely killed by outright prohibition. It is far more often a matter of habit, and the shift unfolds over two or three generations rather than in a single decision. A family moves to a city where the school, the clinic and the television speak the majority language; the parents conclude, reasonably enough, that their children's prospects depend on mastering it; the grandparents, who speak the old language fluently, are the last people the children hear it from. By the time anyone thinks of the loss as a loss, the youngest speakers are middle-aged. Economists describe this as a rational response to incentives, and historians point to similar shifts in earlier centuries; the result, all the same, is a narrowing of the world's linguistic variety." },
      { tag: "C", text: "What is actually lost when a language goes out of use? Part of the answer lies in structures that other languages lack. Some languages mark the source of every statement — whether the speaker saw an event, heard about it, or merely inferred it; others divide space by the points of the compass rather than by left and right, so that speakers of Guugu Yimithirr, an Australian language, keep an accurate sense of direction that visitors find uncanny. Grammar of this kind is not decoration: it obliges speakers to notice details that English allows them to ignore. Alongside grammar go vocabularies built up over centuries — names for plants, weather patterns and local animals — and bodies of oral literature that exist in no written form. Linguists value such material because it tests theories of how the mind works; the communities who speak these languages value it for reasons they rarely have to explain." },
      { tag: "D", text: "Efforts to save what is vanishing fall into two broad traditions, and the difference between them matters. The first, documentation, is the older and better funded: trained fieldworkers record speakers, publish grammars and deposit their recordings in archives. The work is valuable — without it, most of these languages would leave no trace at all — yet a well-kept archive is not the same as a living language, and some linguists now argue that the salvage tradition treats communities as sources of data rather than as partners. Communities increasingly agree, insisting that recordings remain under the control of the community and that consent be asked again each time material is reused. The second tradition, revitalisation, tries to put a language back into daily circulation. Its most celebrated success is Hebrew, which was converted from a language of prayer and study into the everyday speech of a new society during the twentieth century — the best-known case, though not the only one: Manx, on the Isle of Man, lost its last traditional native speaker in 1974 yet survives today in schools. In New Zealand, 'language nests' — preschools in which young children were taught by fluent grandparents — began with Māori communities in the 1980s and were copied by Hawaiians shortly afterwards." },
      { tag: "E", text: "Revival, however, faces obstacles that enthusiasm cannot remove. Money is the most obvious: funding for minority languages is scarce, and the question of which languages deserve support has no comfortable answer. Nor do all speakers want what campaigners want. In many communities, parents who choose the majority language for their children are not acting out of indifference but out of calculation, and their judgement deserves respect; a revival that ignores it becomes a project of outsiders. Even the vocabulary carries a warning: linguists increasingly call a language without speakers dormant rather than extinct, because Hebrew and Manx both returned from apparent death — yet the same term can mislead, since a language with a dozen elderly speakers is not on the same footing as one with thousands of young families using it every day." },
      { tag: "F", text: "If there is a lesson in the record of the past fifty years, it is that languages do not survive where they are studied; they survive where they are used, by children, at home, and across the ordinary business of a community's day. Official status helps — Ireland's schools have taught Irish for a century — but teaching alone has never been enough to reverse decline. The more hopeful development is that the internet, once feared as the instrument of English, has become an unexpected ally: speakers of small languages write to one another, subtitle films, and build dictionaries in public, all at almost no cost. Whether such activity can rebuild what migration and schooling dissolved is not yet clear. What is clear is the price of looking away: each of these languages maps a way of knowing the world, and the map, once gone, cannot be redrawn from memory." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "Linguists classify about half of the languages spoken today as endangered.", answer: ["TRUE"], explain: "Paragraph A: \"Of the roughly 7,000 languages spoken in the world today, linguists class nearly half as endangered\" — about half are described as threatened." },
          { n: 2, text: "The passage says that most languages disappear because governments prohibit them.", answer: ["FALSE"], explain: "Paragraph B: \"languages are rarely killed by outright prohibition\" — the passage stresses instead that the change \"is far more often a matter of habit\"." },
          { n: 3, text: "Language loss normally happens gradually, over more than one generation.", answer: ["TRUE"], explain: "Paragraph B: \"the shift unfolds over two or three generations rather than in a single decision\"." },
          { n: 4, text: "Revitalisation projects receive more money than documentation work does.", answer: ["FALSE"], explain: "Paragraph D says the opposite: the first tradition, \"documentation, is the older and better funded\" — so documentation receives the greater share of funding." },
          { n: 5, text: "Hebrew is the only language that has ever been restored to everyday use.", answer: ["FALSE"], explain: "Paragraph D calls Hebrew \"the best-known case, though not the only one\", and adds that \"Manx, on the Isle of Man, lost its last traditional native speaker in 1974 yet survives today in schools\"." },
          { n: 6, text: "Linguists agree on how many languages will have died out by the end of this century.", answer: ["NOT GIVEN"], explain: "Paragraph A reports that \"linguists class nearly half as endangered\", but the passage gives no information about any agreed prediction for future loss." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Complete the sentences below. Write ONE WORD ONLY from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 7, text: "Before its revival, Hebrew was mainly a language of prayer and {{7}}.", answer: ["study"], explain: "Paragraph D: Hebrew was \"converted from a language of prayer and study into the everyday speech\" of a new society." },
          { n: 8, text: "In New Zealand, young children in 'language nests' were taught by fluent {{8}}.", answer: ["grandparents"], explain: "Paragraph D: language nests were preschools in which young children \"were taught by fluent grandparents\"." },
          { n: 9, text: "Speakers of Guugu Yimithirr find their way using the points of the {{9}} rather than left and right.", answer: ["compass"], explain: "Paragraph C: \"others divide space by the points of the compass rather than by left and right\"." },
          { n: 10, text: "Recordings of endangered languages are increasingly expected to remain under the control of the {{10}}.", answer: ["community"], explain: "Paragraph D: communities insist \"that recordings remain under the control of the community\"." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "What does the writer say about storing recordings in archives?", options: { A: "It is unnecessary for languages with few speakers.", B: "It preserves a record but does not keep a language in use.", C: "It is more important than teaching children the language." }, answer: ["B"], explain: "Paragraph D: \"without it, most of these languages would leave no trace at all — yet a well-kept archive is not the same as a living language\"." },
          { n: 12, text: "According to the passage, a language is most likely to survive when", options: { A: "it is recognised as an official language.", B: "it is taught in schools for many years.", C: "children use it at home in their daily lives." }, answer: ["C"], explain: "Paragraph F: \"languages do not survive where they are studied; they survive where they are used, by children, at home\". Option A is not enough on its own — \"Official status helps\" — and option B is called insufficient: \"teaching alone has never been enough to reverse decline\"." },
          { n: 13, text: "Why does the writer mention Ireland's schools?", options: { A: "To show that a century of teaching has not been enough to stop a decline.", B: "To argue that Irish is beyond saving.", C: "To prove that official status has no value." }, answer: ["A"], explain: "Paragraph F: \"Ireland's schools have taught Irish for a century — but teaching alone has never been enough to reverse decline\". The example warns against relying on classrooms; it does not say that official status is worthless." }
        ]
      }
    ]
  };
  /* ------------------------------------------------------------
     READING — Passage 11, 13 soru (sentence completion + MCQ + TFNG)
     ------------------------------------------------------------ */
  var R11 = {
    kind: "reading",
    id: "R11",
    label: "Reading",
    emoji: "📖",
    title: "Passage 11 — The Placebo Puzzle",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Placebo Puzzle",
    paras: [
      { tag: "A", text: "A patient swallows a tablet that contains nothing but sugar, and the pain fades. The result is so counter-intuitive that medicine has argued about it for seventy years. The modern debate begins with Henry Beecher, an American anaesthetist who reviewed a series of drug trials in 1955 and concluded that a surprisingly large proportion of patients — a figure often quoted as around a third — improved after receiving a treatment with no active ingredient. The paper gave the phenomenon its name. The 'placebo effect' is not a property of the pill, which has none; it is shorthand for the changes that follow from the whole ritual of treatment: the white coat, the careful explanation, the act of being taken seriously, the expectation of relief. Twenty years later, a reanalysis of Beecher's own studies concluded that much of the improvement he credited to placebos was better explained by ordinary causes — the natural course of an illness, the tendency of symptoms to fluctuate, and the drift of extreme cases back towards average values. The size of the effect, in other words, was probably exaggerated; the existence of the effect was not." },
      { tag: "B", text: "Laboratory work has since shown that the response is physiological rather than merely polite. Placebo pain relief is partly produced by the body's own opioid system: give a patient in pain a saline injection, then administer naloxone, a drug that blocks those natural opioids, and much of the relief disappears. Patients with Parkinson's disease who believe an injection will help them release measurably more dopamine, the chemical their brains lack; the expectation itself moves the chemistry. Conditioning plays a part as well. If a patient takes a pill several times and feels better, the ritual — the glass of water, the shape of the tablet — can become a trigger in its own right, much as a dog can learn to salivate at the sound of a bell. The reverse process is equally real: warn volunteers about a list of possible side effects, and more of them will report headaches and nausea, even though their tablets contain nothing. Researchers call this the nocebo effect." },
      { tag: "C", text: "How large is the effect, and for whom? One line of research has an elegant way of asking. In a series of studies, painkillers were given to patients in two ways: openly, by a doctor who told them what was being injected, or secretly, through a computer-controlled pump that the patient could neither see nor hear. The same dose, delivered secretly, produced a weaker effect. The gap between the two conditions is the ritual at work — or, more precisely, the expectation of improvement. The point is not that placebos can replace real drugs: in these experiments the drug was still doing most of the work. A more surprising suggestion is that deception is not always necessary. In several trials, patients with irritable bowel syndrome were given an obviously labelled placebo and told exactly what it was — an inert pill containing no medicine — and a number of them still reported a reduction in symptoms, more than those who received no treatment at all. Such open-label results remain contested, and the effects are modest, but they hint that the body responds to the act of treatment, not only to the substance." },
      { tag: "D", text: "Why does this matter beyond the laboratory? Two practical contexts absorb most of the interest. The first is the clinical trial. Because expectation can produce improvement, a new drug must be tested against a placebo and not merely against nothing; otherwise an ineffective medicine would seem to work whenever patients believed in it. For the same reason, the phrase 'placebo effect' is routinely misused: much of what is measured in a placebo group — recovery that would have happened anyway, symptoms that ebb and flow on their own, patients who joined a trial at their worst moment — has nothing to do with expectation at all. The second context is surgery, where the logic reaches its outer limit. In a well-known trial of an operation for arthritic knee pain, patients were assigned at random either to the real procedure or to a sham one, in which surgeons made the incisions and closed them again without repairing anything. The sham group improved by about as much as the treated group, a result that prompted both admiration for the method and unease about what it revealed." },
      { tag: "E", text: "The ethical question will not go away. A doctor who hands out a sugar pill while implying that it is a medicine is deceiving a patient, and modern practice places informed consent at the centre of care. The more promising route is to treat the placebo not as a substance but as a finding about context. Trials of consultation style point the same way, showing that the warmth, attention and unhurried explanation a patient receives can change outcomes — pain scores, satisfaction, even recovery after surgery — without any deception at all. If those elements are genuinely therapeutic, the argument runs, they belong in ordinary medicine: an extra five minutes, an honest account of what to expect, a follow-up call." },
      { tag: "F", text: "The puzzle, then, has not produced a wonder cure. It has produced something less dramatic and more useful: a picture of treatment as an encounter rather than a transaction, in which what a patient believes, and how a clinician behaves, feed directly into the chemistry of recovery. Sugar pills are neither a panacea nor a myth. They are a measuring instrument, and what they measure — the contribution of expectation, ritual and attention — is part of every medical encounter, whether or not anyone calls it by name." }
    ],
    groups: [
      {
        title: "Questions 1–4",
        instr: "Complete the sentences below. Write ONE WORD ONLY from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 1, text: "In 1955, Beecher concluded that a surprisingly large {{1}} of patients improved after receiving a treatment with no active ingredient.", answer: ["proportion"], explain: "Paragraph A: Beecher \"concluded that a surprisingly large proportion of patients — a figure often quoted as around a third — improved after receiving a treatment with no active ingredient\"." },
          { n: 2, text: "The relief produced by a placebo can be largely removed by a drug that blocks the body's natural {{2}}.", answer: ["opioids"], explain: "Paragraph B: naloxone \"blocks those natural opioids, and much of the relief disappears\"." },
          { n: 3, text: "Patients with Parkinson's disease who expected an injection to help them released measurably more {{3}}.", answer: ["dopamine"], explain: "Paragraph B: such patients \"release measurably more dopamine, the chemical their brains lack\"." },
          { n: 4, text: "When the same painkiller was given secretly rather than openly, it produced a {{4}} effect.", answer: ["weaker"], explain: "Paragraph C: \"The same dose, delivered secretly, produced a weaker effect\"." }
        ]
      },
      {
        title: "Questions 5–7",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 5, text: "Why does the passage mention the reanalysis of Beecher's studies?", options: { A: "It shows that Beecher invented the idea of the placebo.", B: "It suggests that his estimate of the size of the effect was too large.", C: "It proves that placebo treatments never help anyone." }, answer: ["B"], explain: "Paragraph A: \"a reanalysis of Beecher's own studies concluded that much of the improvement he credited to placebos was better explained by ordinary causes\" and \"The size of the effect, in other words, was probably exaggerated\"." },
          { n: 6, text: "What do the open-label studies described in the passage suggest?", options: { A: "Patients must believe they are receiving a real medicine for any improvement to occur.", B: "Inert pills work as well as standard drugs for bowel disorders.", C: "Some patients improve even when they know their treatment is an inert pill." }, answer: ["C"], explain: "Paragraph C: patients \"were given an obviously labelled placebo and told exactly what it was\" and yet \"a number of them still reported a reduction in symptoms\" — though the effects were modest, and the comparison was with no treatment, not with standard drugs." },
          { n: 7, text: "What does the writer say about the way doctors treat their patients?", options: { A: "Warmth and unhurried explanation can influence how patients recover.", B: "Deceiving a patient is acceptable if it reduces pain.", C: "Talking to patients is unimportant because drugs do the real work." }, answer: ["A"], explain: "Paragraph E: \"the warmth, attention and unhurried explanation a patient receives can change outcomes\" — and the writer rejects deception, so option B is wrong." }
        ]
      },
      {
        title: "Questions 8–13",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 8, text: "Naloxone increases the pain relief that a placebo produces.", answer: ["FALSE"], explain: "Paragraph B: naloxone \"blocks those natural opioids, and much of the relief disappears\" — the drug reduces the relief rather than increasing it." },
          { n: 9, text: "In the secret-infusion studies, the drug was still responsible for most of the relief.", answer: ["TRUE"], explain: "Paragraph C: \"the drug was still doing most of the work\" — expectation added something on top, but the drug did most." },
          { n: 10, text: "In the knee-surgery trial, the sham operation relieved pain far less successfully than the real one.", answer: ["FALSE"], explain: "Paragraph D: \"The sham group improved by about as much as the treated group\" — the two groups improved to a similar extent." },
          { n: 11, text: "Including a placebo makes a clinical trial more expensive to run.", answer: ["NOT GIVEN"], explain: "Paragraph D explains why trials need placebo controls — a drug \"must be tested against a placebo and not merely against nothing\" — but the passage gives no information about the cost of including one." },
          { n: 12, text: "The writer accepts that deceiving patients is justified when a placebo may help them.", answer: ["FALSE"], explain: "Paragraph E: a doctor who implies that a sugar pill is a medicine \"is deceiving a patient, and modern practice places informed consent at the centre of care\"; the writer prefers honest ways of using context, \"without any deception at all\"." },
          { n: 13, text: "The writer argues that patients' expectations and doctors' behaviour are part of treatment rather than separate from it.", answer: ["TRUE"], explain: "Paragraph F: what a patient believes and how a clinician behaves \"feed directly into the chemistry of recovery\", and what placebos measure is \"part of every medical encounter\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     Kayıt: SECTIONS'a ekle, PRACTICE.reading'i genişlet
     ------------------------------------------------------------ */
  D.SECTIONS.R10 = R10;
  D.SECTIONS.R11 = R11;

  D.PRACTICE.reading.push(
    { title: "Passage 10 — Saving Vanishing Languages", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Sentence completion", "Multiple choice"], link: "test.html?id=R10", ready: true },
    { title: "Passage 11 — The Placebo Puzzle", sub: "13 questions · 3 question types", types: ["Sentence completion", "Multiple choice", "True/False/Not Given"], link: "test.html?id=R11", ready: true }
  );
})();
