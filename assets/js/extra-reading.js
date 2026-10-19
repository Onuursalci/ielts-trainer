/* ============================================================
   IELTS Trainer — ek okuma pasajları (R2 + R3)
   data.js'ten SONRA yüklenir: SECTIONS kayıt defterine iki yeni
   reading bölümü ekler ve PRACTICE.reading listesini genişletir.
   Şema, data.js içindeki R1 ile birebir aynıdır:
     kind/id/label/emoji/title/subtitle/minutes/intro/
     passageTitle/paras[{tag,text}]/groups[{title,instr,type,qs}]
     type: "tfng" | "gap" (metinde {{n}} yer tutucu) | "mcq"
   MOCKS ve SECTIONALS'a dokunulmaz.
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  if (!D) throw new Error("extra-reading.js: window.APP_DATA bulunamadi (data.js once yuklenmeli)");

  /* ------------------------------------------------------------
     READING — Passage 2, 13 soru (TFNG + sentence completion + MCQ)
     ------------------------------------------------------------ */
  var R2 = {
    kind: "reading",
    id: "R2",
    label: "Reading",
    emoji: "📖",
    title: "Passage 2 — The Return of the Night Train",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Return of the Night Train",
    paras: [
      { tag: "A", text: "For much of the twentieth century, the sleeping car was a standard feature of long-distance travel in Europe. A passenger could board in the evening, sleep in a narrow berth and step onto a platform in another country the following morning; the folded ladder, the paper cup of coffee at dawn and the frontier official knocking on the door were part of a shared travel culture. Then, over roughly two decades, most of those services disappeared. The reasons were commercial rather than technical. The arrival of low-cost airlines in the 1990s made it far cheaper to fly the same routes, and the sleeper fleet itself was growing old and expensive to maintain. A sleeping carriage accommodates far fewer travellers than an ordinary seated one, and every berth has to be cleaned, prepared and supervised, so a night train requires far more staff per passenger than a daytime service. Faced with those figures, several state railways concluded that overnight travel belonged to the past." },
      { tag: "B", text: "The judgement proved premature. In the late 2010s, concern about aviation's contribution to climate change created a fresh market for travelling without flying. Sweden, where the phrase 'flight shame' first became visible, recorded growing demand for long-distance rail journeys, and overnight services sold out weeks in advance during the summer. When Germany's national operator decided to withdraw from the sleeper business, Austria's state railway bought its carriages and kept the network running, later extending it with new routes from Vienna to Berlin and Paris. Others followed: private companies in Sweden and the Czech Republic launched their own overnight services, and a Spanish start-up began competing on domestic routes. None of this was planned by a single authority. It grew out of a change in public mood, encouraged by a small number of determined operators who believed that the sleeper could still be saved." },
      { tag: "C", text: "Economics has not become any kinder, however. A night train crosses borders, so it must pay track access fees in every country it passes through — fees that were designed for domestic operators, not for trains that are somewhere else by breakfast. Because passengers sleep, departures cannot be shifted to the cheapest hours; a service must leave late enough to be useful and arrive early enough to be practical, which leaves a narrow window. Schedules are further shaped by freight, because on several corridors goods trains take priority over passenger services that run only a few times a week. Demand is strongest in summer and at Christmas, and the same carriages stand empty in November. Labour costs remain high: sleeper services are expensive to operate, since one attendant can look after only a few dozen passengers. A berth also occupies the space of several seated travellers, so income per carriage stays low even when every bed on board is sold." },
      { tag: "D", text: "Operators nevertheless insist that the passengers exist, and the profiles are varied. Business travellers use a night train to replace a hotel night and arrive ready for a morning meeting; families book whole compartments rather than seats; students with rail passes fill the couchettes during the school holidays. These groups want different things: a family watches the price of a compartment, while a business traveller judges the shower and the arrival time. Research carried out for a Scandinavian operator found that travellers valued arriving rested, the privacy of a compartment and the absence of airport queues. Government attitudes, meanwhile, differ sharply. France has banned short domestic flights where a rail alternative exists, Sweden has introduced a tax on air tickets, and several countries now pay subsidies to keep overnight services running. Not every government has been so supportive: some regions have withdrawn funding from routes they once financed, and one or two operators have abandoned international services altogether." },
      { tag: "E", text: "Supply, not demand, is the real constraint today. Older carriages are repaired rather than replaced, and only a handful of factories still build sleeping cars; the new generation of carriages ordered by the Austrian operator will not enter service before the middle of the 2020s, several years after the order was placed. Production lines are small and slow, so operators cannot expand quickly when demand rises, and more than one announced route has been quietly dropped for lack of vehicles. Prices then reflect scarcity. A berth on a popular route can cost more than a flight, which has led critics to argue that the revived night train is a niche product for comfortable travellers rather than a mass form of transport. For passengers, that means booking months ahead, or paying for a private cabin as much as for a decent hotel room." },
      { tag: "F", text: "Even so, the direction of travel is clearer than it was a decade ago. Booking systems are slowly being linked so that a journey across three countries may eventually be bought in a single transaction, although at present such a trip can still mean three tickets, bought on three websites, with no help if the first train runs late. The most realistic prediction is that night trains will remain a small but valuable part of the network, complementing fast daytime services rather than replacing them. Whether that share grows depends less on engineering than on policy: on how heavily carbon travel is taxed, and on whether governments are willing to pay for a service that is not, in the end, especially profitable." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "For much of the twentieth century, sleeping cars were a normal part of long-distance travel in Europe.", answer: ["TRUE"], explain: "Paragraph A: \"the sleeping car was a standard feature of long-distance travel in Europe\"." },
          { n: 2, text: "The rise of budget airlines helped to push overnight services out of the market in the 1990s.", answer: ["TRUE"], explain: "Paragraph A: \"The arrival of low-cost airlines in the 1990s made it far cheaper to fly the same routes\" — one of the commercial reasons given for the closures." },
          { n: 3, text: "Sweden has banned domestic flights on routes that can also be travelled by train.", answer: ["FALSE"], explain: "Paragraph D: Sweden \"has introduced a tax on air tickets\"; the ban on short domestic flights \"where a rail alternative exists\" applies to France, not Sweden." },
          { n: 4, text: "An Austrian operator took over sleeping carriages that a German operator had decided to give up.", answer: ["TRUE"], explain: "Paragraph B: \"When Germany's national operator decided to withdraw from the sleeper business, Austria's state railway bought its carriages\"." },
          { n: 5, text: "A new sleeping car can be ordered today and delivered within about a year.", answer: ["FALSE"], explain: "Paragraph E: the new carriages \"will not enter service before the middle of the 2020s, several years after the order was placed\", because production lines are \"small and slow\"." },
          { n: 6, text: "On the Vienna–Paris night service, business travellers outnumber tourists.", answer: ["NOT GIVEN"], explain: "Paragraph D mentions groups such as \"Business travellers\", families and students, but gives no information about their relative numbers on any route; tourists on that service are not described in the passage at all." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 7, text: "Sleeper services are expensive to {{7}} because one attendant can look after only a few dozen passengers.", answer: ["operate"], explain: "Paragraph C: \"sleeper services are expensive to operate, since one attendant can look after only a few dozen passengers\"." },
          { n: 8, text: "A night train must pay track access fees in every {{8}} it passes through.", answer: ["country"], explain: "Paragraph C: \"it must pay track access fees in every country it passes through\"." },
          { n: 9, text: "Only a handful of {{9}} still build sleeping cars.", answer: ["factories"], explain: "Paragraph E: \"only a handful of factories still build sleeping cars\"." },
          { n: 10, text: "The carriages ordered by the Austrian operator will not enter service before the middle of the {{10}}.", answer: ["2020s", "2020's"], explain: "Paragraph E: \"will not enter service before the middle of the 2020s\"." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "Why does a night train earn relatively little income per carriage?", options: { A: "A berth occupies space that could carry several seated passengers.", B: "Fares on night trains are lower than on daytime services.", C: "Most of the revenue is spent on fuel for the locomotive." }, answer: ["A"], explain: "Paragraph C: \"A berth also occupies the space of several seated travellers, so income per carriage stays low\". Option B is not claimed — the passage says a berth can cost more than a flight — and nothing in the passage supports option C." },
          { n: 12, text: "What does the passage say about government action on night trains?", options: { A: "Support has been limited to a single country.", B: "Governments have refused to fund international services.", C: "Measures such as flight taxes and subsidies have helped some services survive." }, answer: ["C"], explain: "Paragraph D: France \"has banned short domestic flights where a rail alternative exists\", Sweden \"has introduced a tax on air tickets\", and \"several countries now pay subsidies to keep overnight services running\". Option A is therefore wrong, and option B is too absolute — only \"some regions\" withdrew funding." },
          { n: 13, text: "What is the writer's overall expectation for night trains?", options: { A: "They will replace fast daytime services on long routes.", B: "They will remain a minor but worthwhile part of the rail network.", C: "They will disappear once the new carriages wear out." }, answer: ["B"], explain: "Paragraph F: \"night trains will remain a small but valuable part of the network, complementing fast daytime services rather than replacing them\" — option A reverses this, and option C contradicts the investment described in paragraph E." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 3, 13 soru (summary completion + MCQ + TFNG)
     ------------------------------------------------------------ */
  var R3 = {
    kind: "reading",
    id: "R3",
    label: "Reading",
    emoji: "📖",
    title: "Passage 3 — The Uses of Forgetting",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Uses of Forgetting",
    paras: [
      { tag: "A", text: "Most people treat memory as a kind of recording device: a camera that captures events accurately and stores them somewhere in the head, with forgetting dismissed as a fault in the machinery. Research over the past fifty years has undermined every part of that picture. Memory, neuroscientists now argue, is not a faithful record but a reconstructive process: what feels like a replay is closer to a performance, assembled from fragments each time it is produced. Forgetting, meanwhile, is not simply the opposite of remembering. Brains that kept every detail would be slower and less able to generalise, and animals that forget where a food source used to be are more likely to discover where it is now. In this view, forgetting is less a failure of the system than one of its functions." },
      { tag: "B", text: "Forming a durable memory involves at least three steps. Information must first be encoded — noticed, linked to what is already known and given some meaning. It must then be consolidated, a process in which the hippocampus, a structure deep in the temporal lobe, repeatedly reactivates the new experience, and which takes place largely during sleep; a night of poor sleep is followed by weaker recall of what was learned the day before. Finally the memory must be retrievable, and retrieval depends on the cues available at the moment of recall. Memories are not filed in one place. A single episode — a conversation in a café, say — is represented by a pattern of connections spread across many regions of the brain, and the same event may be stored partly as what was seen, partly as what was felt, and partly as what was said about it afterwards." },
      { tag: "C", text: "Why do memories fade? The oldest explanation is decay: unused traces simply weaken, like a path through grass that is no longer walked on. A second explanation is interference. New learning does not quietly take its place beside older material; it competes with it, and the competition runs in both directions, so that a new language can blur an older one and the older one can slow the new. A third explanation is that recall fails rather than memory itself: the tip-of-the-tongue experience, in which a word or a name is known to be known but will not surface, suggests that information may still be present but temporarily unreachable. Some forgetting, though, is not a fault at all. The brain prunes connections that are rarely used, and a growing body of evidence suggests that this pruning improves the ability to generalise, because decisions made from a summary of many experiences tend to be better than decisions made from a single vivid one. The idea that the brain simply runs out of storage does not fit the evidence; even in later life, the capacity to form new connections remains considerable." },
      { tag: "D", text: "The scientific study of forgetting began in the 1880s, when Hermann Ebbinghaus taught himself strings of nonsense syllables — combinations of letters with no meaning at all — and tested his own recall at intervals of minutes, hours and days. The results produced the famous forgetting curve: a steep loss within the first hours, followed by a much gentler decline that never quite reaches zero. Ebbinghaus also found something more surprising. Material that he could no longer recall at all could be relearned faster than material he had never learned, a phenomenon known as savings. Even a memory that cannot be brought back, in other words, leaves a trace. Later researchers found that meaningful material is forgotten differently: a story or an argument fades far more slowly than a list of syllables, which is one reason that classroom demonstrations of the curve can be misleading." },
      { tag: "E", text: "Recalling a memory is not like replaying a recording. It makes the memory briefly unstable before it is stored again, a process known as reconsolidation, and every retrieval is therefore an opportunity for the memory to change — to pick up details from the present conversation, from another person's account, or from the wording of the question being asked. The most confident memories are not the safest. Flashbulb memories, the detailed pictures people claim to hold of where they were when they heard shocking news, feel permanent and photographic, yet studies that followed witnesses over several years found that they drifted as much as ordinary memories, while the witnesses' certainty in them grew. This is one reason courts treat eyewitness testimony with caution: jurors tend to trust a witness who sounds certain, but confidence and accuracy are only loosely connected." },
      { tag: "F", text: "The practical lessons are still being argued over. Games and apps that promise to train memory usually improve performance at the game itself and little else, since the skills they practise rarely transfer to the tasks people actually care about. Whether search engines and smartphones are weakening memory is disputed: some studies suggest that people remember where to find information better than the information itself, which may be efficient rather than damaging. In education, however, one finding has proved robust — that retrieval practice, testing oneself on material rather than rereading it, produces notably better long-term retention. The uncomfortable conclusion of all this work is that an accurate memory is not a perfect one, and that choosing what to keep, and accepting what is lost, is what remembering turns out to be." }
    ],
    groups: [
      {
        title: "Questions 1–4",
        instr: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 1, text: "Memory is not a faithful record; it is a {{1}} process, assembling an event from fragments each time it is produced.", answer: ["reconstructive"], explain: "Paragraph A: \"not a faithful record but a reconstructive process\"." },
          { n: 2, text: "A new memory is consolidated, mainly while we {{2}}, when the hippocampus reactivates the experience.", answer: ["sleep"], explain: "Paragraph B: \"which takes place largely during sleep\" — a night of poor sleep is followed by weaker recall." },
          { n: 3, text: "Even a memory that can no longer be brought back may leave a {{3}} that makes relearning faster.", answer: ["trace"], explain: "Paragraph D: \"Even a memory that cannot be brought back, in other words, leaves a trace\" — the effect Ebbinghaus called savings." },
          { n: 4, text: "When a memory is recalled it becomes briefly {{4}} before it is stored again, so recalling it can change it.", answer: ["unstable"], explain: "Paragraph E: \"It makes the memory briefly unstable before it is stored again\" — the process is known as reconsolidation." }
        ]
      },
      {
        title: "Questions 5–7",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 5, text: "What may be the benefit of the brain removing rarely used connections?", options: { A: "It creates permanent storage space for important memories.", B: "It allows people to judge from summaries rather than single events.", C: "It stops strong memories from becoming too powerful." }, answer: ["B"], explain: "Paragraph C: pruning \"improves the ability to generalise, because decisions made from a summary of many experiences tend to be better than decisions made from a single vivid one\". Option A is rejected in the same paragraph: \"The idea that the brain simply runs out of storage does not fit the evidence\"; option C is not mentioned at all." },
          { n: 6, text: "What does the passage say about the experiments of Ebbinghaus?", options: { A: "He tested one person — himself — rather than a group.", B: "They were carried out on groups of university students.", C: "They showed that meaningless material is remembered best." }, answer: ["A"], explain: "Paragraph D: he \"taught himself strings of nonsense syllables\" and \"tested his own recall\"; option B is not supported, and option C is contradicted, because \"a story or an argument fades far more slowly than a list of syllables\"." },
          { n: 7, text: "Why does the passage mention courts and eyewitness testimony?", options: { A: "To explain why memories of violent events are stronger than others.", B: "To suggest that memory research should be kept out of legal settings.", C: "To show that a witness's confidence is not proof of accuracy." }, answer: ["C"], explain: "Paragraph E: \"jurors tend to trust a witness who sounds certain, but confidence and accuracy are only loosely connected\". Option A is not discussed in the passage; option B is the opposite of the writer's point." }
        ]
      },
      {
        title: "Questions 8–13",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 8, text: "The passage argues that being able to forget has value.", answer: ["TRUE"], explain: "Paragraph A: forgetting is presented as \"one of its functions\", and \"animals that forget where a food source used to be are more likely to discover where it is now\"." },
          { n: 9, text: "According to the passage, each memory is stored in one particular region of the brain.", answer: ["FALSE"], explain: "Paragraph B: \"Memories are not filed in one place\" — one episode is \"represented by a pattern of connections spread across many regions of the brain\"." },
          { n: 10, text: "Ebbinghaus's forgetting curve has been reproduced in experiments with professional musicians.", answer: ["NOT GIVEN"], explain: "The passage describes Ebbinghaus's own work on \"nonsense syllables\" and says that later researchers studied meaningful material, but it gives no information about experiments with professional musicians." },
          { n: 11, text: "People can feel completely certain about a memory and still be mistaken.", answer: ["TRUE"], explain: "Paragraph E: flashbulb memories \"drifted as much as ordinary memories, while the witnesses' certainty in them grew\"." },
          { n: 12, text: "Brain-training games have been shown to improve how well people perform on tasks unrelated to the games.", answer: ["FALSE"], explain: "Paragraph F: the games \"usually improve performance at the game itself and little else, since the skills they practise rarely transfer to the tasks people actually care about\"." },
          { n: 13, text: "Testing yourself on material is a better way of remembering it than reading it again.", answer: ["TRUE"], explain: "Paragraph F: \"testing oneself on material rather than rereading it, produces notably better long-term retention\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     Kayıt: SECTIONS'a ekle, PRACTICE.reading'i genişlet
     ------------------------------------------------------------ */
  D.SECTIONS.R2 = R2;
  D.SECTIONS.R3 = R3;

  D.PRACTICE.reading.push(
    { title: "Passage 2 — The Return of the Night Train", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Sentence completion", "Multiple choice"], link: "test.html?id=R2", ready: true },
    { title: "Passage 3 — The Uses of Forgetting", sub: "13 questions · 3 question types", types: ["Summary completion", "Multiple choice", "True/False/Not Given"], link: "test.html?id=R3", ready: true }
  );
})();
