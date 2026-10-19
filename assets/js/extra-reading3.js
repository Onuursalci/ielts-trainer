/* ============================================================
   IELTS Trainer — ek okuma pasajları (R7 + R8 + R9)
   data.js'ten SONRA yüklenir: SECTIONS kayıt defterine üç yeni
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
  if (!D) throw new Error("extra-reading3.js: window.APP_DATA bulunamadi (data.js once yuklenmeli)");

  /* ------------------------------------------------------------
     READING — Passage 7, 13 soru (TFNG + sentence completion + MCQ)
     ------------------------------------------------------------ */
  var R7 = {
    kind: "reading",
    id: "R7",
    label: "Reading",
    emoji: "📖",
    title: "Passage 7 — How Octopuses Think",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "How Octopuses Think",
    paras: [
      { tag: "A", text: "Among animals without a backbone, the octopus is an awkward exception. It has around 500 million nerve cells, roughly as many as a dog, and a brain-to-body ratio that is the largest of any invertebrate; yet the machinery is arranged in a way that no vertebrate uses. The brain itself is a doughnut of tissue wrapped around the oesophagus, and about two thirds of its neurons are not in the brain at all but in the eight arms. The animal is solitary, most species live for only one or two years, and both males and females die after a single breeding season, so no young octopus is ever taught by an older one. For a long time, researchers assumed that intelligence on this scale required a long life and an active social world, as it does in crows and chimpanzees. The octopus suggests that a mind can also be built along a different road altogether: a second experiment in complex behaviour, evolved quite separately from our own." },
      { tag: "B", text: "The most striking feature of the octopus nervous system is how little of it depends on the centre. Each arm carries a thick nerve cord that swells at every sucker, so that a single arm holds more processing power than many small animals possess in total; the suckers can identify what they touch without asking the brain, since they carry chemical senses, a kind of taste that works at the distance of a millimetre. When an arm grasps a piece of food, much of the movement is organised locally, and the arms exchange information with each other through a ring of nerves that lies outside the brain. The result is a system in which decisions can begin in the periphery: researchers describe an arm-up arrangement, rather than the brain-down arrangement familiar from our own bodies. This does not mean that the brain is a passenger. Octopuses can find food with a single arm guided purely by what they can see, which shows that the central brain does keep some kind of map of the body it controls." },
      { tag: "C", text: "In the laboratory, the octopus learns quickly for an animal of its size. A common octopus can be taught to open a jar or a screw-top container to reach the food inside, and it remembers the method for weeks; it can learn to pull a lever, to choose one texture over another, and to find its way through a simple maze. What has interested biologists is not so much the average performance as the variation around it. In the early 1990s, Jennifer Mather and Roland Anderson placed octopuses in front of an unfamiliar object and recorded how they responded, and found that individuals behaved consistently: a bold octopus stayed bold, while a shy one retreated again and again. This was one of the first demonstrations that an animal without a backbone could have what later researchers cautiously called temperament, and it matters because variation of this kind lets a species cope with an unpredictable world, in which no single strategy always works." },
      { tag: "D", text: "Tool use, once considered a hallmark of human beings alone, appears in the octopus as well. The best evidence comes from the veined octopus, a small species living on the muddy seafloor off Indonesia. Over eight years of diving, a research team watched more than twenty individuals collect the halves of coconut shells discarded by people, stack two of them together and carry them for distances of up to twenty metres. The behaviour is deliberately awkward. To move the shells at all, the octopus has to spread its arms around them and walk on the tips of its limbs, an ungainly method that the researchers named stilt walking, and it gains no protection while carrying its load, because its soft body is exposed the whole time. The shells are assembled into a shelter only later, when they are needed. An animal that lugs a future home around with it, and gives up speed and safety to do so, is planning for something that has not yet happened." },
      { tag: "E", text: "That impression of a complicated inner life is strengthened by two further discoveries. In 2023, a team that filmed sleeping octopuses in the laboratory described two distinct states: a quiet phase of shallow breathing, and an active phase in which the skin flickers through rapid changes of colour and pattern resembling those that appear when the animal is awake, a rhythm that looks, at least superficially, like our own sleeping and dreaming. Earlier, researchers who spent long hours watching octopuses in aquaria reported behaviour that looked very much like play: animals that released plastic bottles into a current, watched them drift and then caught them again, repeating the game for minutes on end. The same laboratories found that when pieces of skin were removed from an octopus and kept alive, the colour cells in them still expanded when light fell on them, because the skin of a cephalopod contains light-sensitive proteins of its own. In some sense the octopus senses the world with its whole body." },
      { tag: "F", text: "Why such expensive machinery should be built into an animal that lives so briefly is still argued over. One influential suggestion is that the octopus's environment is the demanding part: an existence spent moving across a complex seafloor, with many kinds of prey that must be handled in different ways and many predators that must be avoided, rewards a flexible brain that can learn what a single instinct cannot specify. Another point of view emphasises the body itself, arguing that eight arms with hundreds of suckers each, and no bones to fix their movement, would be unmanageable without a great deal of nervous tissue. What is not in dispute is that this intelligence evolved separately from ours, and that it has changed how scientists think about minds in general. The change is visible in law as well: in 2022, a British act on animal sentience was amended to include cephalopods and decapod crustaceans alongside vertebrates, a recognition that scientific evidence, and not only anatomy, should decide which animals are protected." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "An octopus has roughly the same number of nerve cells as a dog.", answer: ["TRUE"], explain: "Paragraph A: it has \"around 500 million nerve cells, roughly as many as a dog\"." },
          { n: 2, text: "Most of an octopus's nerve cells are located inside its brain.", answer: ["FALSE"], explain: "Paragraph A: \"about two thirds of its neurons are not in the brain at all but in the eight arms\", so the majority lie outside the brain." },
          { n: 3, text: "Different octopuses react to the same object in consistent, individual ways.", answer: ["TRUE"], explain: "Paragraph C: the researchers \"found that individuals behaved consistently: a bold octopus stayed bold, while a shy one retreated again and again\"." },
          { n: 4, text: "The veined octopus is protected by the coconut shells while it is carrying them.", answer: ["FALSE"], explain: "Paragraph D: \"it gains no protection while carrying its load, because its soft body is exposed the whole time\"." },
          { n: 5, text: "Veined octopuses have been seen collecting coconut shells that people had thrown away.", answer: ["TRUE"], explain: "Paragraph D: the team watched the octopuses \"collect the halves of coconut shells discarded by people\"." },
          { n: 6, text: "Octopuses kept in aquaria generally live longer than octopuses in the wild.", answer: ["NOT GIVEN"], explain: "Paragraph A gives the lifespan of the species — \"most species live for only one or two years\" — and aquaria are mentioned in paragraph E, but the passage gives no information about whether captive animals live longer than wild ones." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 7, text: "About two thirds of the octopus's nerve cells are found in its eight {{7}}.", answer: ["arms"], explain: "Paragraph A: \"about two thirds of its neurons are not in the brain at all but in the eight arms\"." },
          { n: 8, text: "The suckers on an octopus's arms can {{8}} what they touch, without any instruction from the brain.", answer: ["taste"], explain: "Paragraph B: the suckers \"carry chemical senses, a kind of taste that works at the distance of a millimetre\"." },
          { n: 9, text: "While a veined octopus walks with two coconut shells, its soft body is {{9}} to predators.", answer: ["exposed"], explain: "Paragraph D: \"its soft body is exposed the whole time\" — the shells give no protection while they are being carried." },
          { n: 10, text: "During the active phase of sleep, an octopus makes rapid changes to the colour and pattern of its {{10}}.", answer: ["skin"], explain: "Paragraph E: in the active sleep phase \"the skin flickers through rapid changes of colour and pattern\". Note: the answer word appears in the passage as \"skin\"." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "Why is the arrangement of the octopus nervous system described as unusual?", options: { A: "The brain is divided into two separate halves inside the head.", B: "Most of its neurons are placed in the body rather than in the brain.", C: "It contains fewer nerve cells than that of any other intelligent animal." }, answer: ["B"], explain: "Paragraph A: \"about two thirds of its neurons are not in the brain at all but in the eight arms\". Option C is contradicted — the count is \"roughly as many as a dog\" — and option A is not mentioned in the passage." },
          { n: 12, text: "What point does the writer make about the coconut-shell behaviour of the veined octopus?", options: { A: "It suggests that the animal can prepare for a need that has not yet arisen.", B: "It shows that octopuses prefer natural objects to objects made by people.", C: "It proves that octopuses are physically stronger than they appear to be." }, answer: ["A"], explain: "Paragraph D: \"An animal that lugs a future home around with it, and gives up speed and safety to do so, is planning for something that has not yet happened\". Option B is the opposite of the evidence — the shells were \"discarded by people\" — and option C is not claimed." },
          { n: 13, text: "According to the final paragraph, which question about octopus intelligence remains unanswered?", options: { A: "Whether octopuses can recognise individual human beings.", B: "Whether octopuses are capable of any form of long-term memory.", C: "Which pressures produced such a complex brain in such a short-lived animal." }, answer: ["C"], explain: "Paragraph F: \"Why such expensive machinery should be built into an animal that lives so briefly is still argued over\". Option B is rejected because paragraph C says the octopus \"remembers the method for weeks\", and option A is not discussed at all." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 8, 13 soru (TFNG + MCQ + sentence completion)
     ------------------------------------------------------------ */
  var R8 = {
    kind: "reading",
    id: "R8",
    label: "Reading",
    emoji: "📖",
    title: "Passage 8 — The Four-Day Week Experiment",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Four-Day Week Experiment",
    paras: [
      { tag: "A", text: "For most of the nineteenth century, a working week meant six days. It was Henry Ford, more interested in selling cars than in kindness, who moved his factories onto a five-day week in 1926, and the idea spread; the International Labour Organization, founded in 1919, made the eight-hour day the first international labour standard in the same decade, and put a forty-hour week on paper in 1935. By the middle of the twentieth century, two days of rest for every five of work seemed permanent and natural to millions of people. A hundred years later, that assumption is being tested again. Campaigners now argue for a four-day week, and the model they most often describe is usually shortened to figures: one hundred per cent of the pay, eighty per cent of the time, and the same output as before. The moral argument is easy to state; the practical question is harder. Can the same work actually be done in four days, or does the shorter week merely move work somewhere else?" },
      { tag: "B", text: "The first large-scale answer came from Iceland, where trials of a shorter week ran between 2015 and 2019. The capital, Reykjavík, and then the national government shortened the week of more than 2,500 employees from forty hours to thirty-five or thirty-six, with no reduction in pay, and deliberately included workplaces where the work is not easily reshaped: playschools, hospitals, social service offices and maintenance depots. Such settings matter because their opening hours cannot simply be shortened whenever the staff go home. When researchers from the British think tank Autonomy and the Icelandic association Alda analysed the results, they reported that productivity and service provision had stayed the same or improved in the majority of workplaces, while measures of stress and burnout fell. The trials did not, by themselves, change the law. But unions used the results in the negotiations that followed, and by 2021 about 86 per cent of the working population had contracts that either shortened their hours or gave them the right to ask for shorter hours." },
      { tag: "C", text: "The best-known trial of all took place in Britain in 2022: 61 companies and about 2,900 workers moved to a four-day week for six months, in a study designed by the campaign group 4 Day Week Global with researchers at the University of Cambridge and Boston College. The findings, published in February 2023, were widely reported. Of the 61 companies, 56 decided to keep the new pattern, 18 of them permanently. Average revenue across the companies barely changed, rising by about 1.4 per cent, while the number of staff who left fell by more than half and sick days dropped sharply. In surveys, most employees said they felt less exhausted and slept better. Smaller experiments had pointed the same way: in New Zealand, an insurance company with about 240 staff made a four-day week permanent in 2018 after reporting that output had held steady, and in Japan, the local offices of Microsoft gave 2,300 employees five Fridays off in the summer of 2019 and reported a rise in sales per worker of almost forty per cent." },
      { tag: "D", text: "Since then the experiments have multiplied, in different countries and in different shapes. The Portuguese pilot of 2023 involved more than forty companies; the German trial of 2024, organised with the consultancy Intraprenör and monitored by researchers at the University of Münster, enrolled 45 organisations, from care homes to IT firms, for six months, and found that most wanted to continue. Not every experiment reduces hours by the same amount, and not every shorter week means the same thing. Some companies close on Fridays and pay their staff for five days; others spread the same total hours across four longer days, an arrangement known as a compressed week, which changes the shape of the day rather than the length of the week; still others use a nine-day fortnight, a scheme in which employees work four and a half days on average. Researchers therefore try to measure what was actually given up, in hours, rather than trusting the label, because a week described as a four-day week may represent a cut of some fifteen per cent in working time, or a much smaller change spread across the year." },
      { tag: "E", text: "The doubts begin with the design of the trials themselves. Companies volunteer for them; they are not selected at random, and the firms that sign up are likely already to be flexible, well managed and curious about the subject, which is exactly the sort of workplace where almost any change might work. A review published by the European Commission's Joint Research Centre in 2023 made this point sharply, noting that most private-sector pilots rely on comparing a company with itself before and after the change, and concluded that their numbers should be treated as encouraging indications rather than proof. There is also the problem of measuring the output of work that is not sold by the hour. A factory that produces 900 items a week will still be expected to produce 900; a hospital ward, a supermarket or a bus route cannot simply close on the fifth day, so there the shorter week usually means hiring more staff, which costs money that productivity gains must somehow repay." },
      { tag: "F", text: "The wider picture, though, is that hours have come down before. A worker in 1870 worked sixty or more hours a week; by the 1970s, forty was the norm in industrialised countries, and rising productivity was shared out partly as higher pay and partly as more free time. Whether that pattern will continue, with remote work, better scheduling and, increasingly, automation and artificial intelligence taking over routine tasks, is the real question behind the pilots. What emerges from the evidence so far is narrower than the headlines suggest: shorter working weeks can improve wellbeing, health and the retention of staff, and in some firms they do so without visible damage to output; but nobody has yet shown that a four-day week can be made to work at the scale of an entire economy, or measured what it would cost in sectors where the clock is tied to the customer rather than to the task. The experiment, in other words, is only beginning." }
    ],
    groups: [
      {
        title: "Questions 1–5",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "The five-day working week was introduced by a car manufacturer.", answer: ["TRUE"], explain: "Paragraph A: \"It was Henry Ford, more interested in selling cars than in kindness, who moved his factories onto a five-day week in 1926\"." },
          { n: 2, text: "The International Labour Organization agreed on a forty-hour week in 1919.", answer: ["FALSE"], explain: "Paragraph A: the organization, \"founded in 1919, made the eight-hour day the first international labour standard in the same decade, and put a forty-hour week on paper in 1935\" — the forty-hour week came in 1935, not 1919." },
          { n: 3, text: "The organisers of the Icelandic trials made a point of including workplaces whose hours are hard to change.", answer: ["TRUE"], explain: "Paragraph B: the trials \"deliberately included workplaces where the work is not easily reshaped: playschools, hospitals, social service offices and maintenance depots\"." },
          { n: 4, text: "During the British pilot, the revenue of the companies taking part fell.", answer: ["FALSE"], explain: "Paragraph C: \"Average revenue across the companies barely changed, rising by about 1.4 per cent\"." },
          { n: 5, text: "Employees in the British pilot were allowed to choose which weekday they took off.", answer: ["NOT GIVEN"], explain: "Paragraph C says the companies \"decided to keep the new pattern\", and paragraph D notes that \"Some companies close on Fridays\", but the passage gives no information about whether individual employees could choose their day off." }
        ]
      },
      {
        title: "Questions 6–9",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 6, text: "What was the most important lasting effect of the Icelandic trials?", options: { A: "The national government immediately passed a law shortening the working week.", B: "Trade unions used the results to win shorter hours in later negotiations.", C: "Most workplaces in the capital began to close on Fridays." }, answer: ["B"], explain: "Paragraph B: \"unions used the results in the negotiations that followed\"; option A is rejected because \"The trials did not, by themselves, change the law\", and option C is not claimed anywhere in the passage." },
          { n: 7, text: "Why does the writer mention a New Zealand insurance company and Microsoft's Japanese offices?", options: { A: "To show that trials outside Europe produced similar findings.", B: "To demonstrate that technology companies are the best places to test shorter weeks.", C: "To explain why the British pilot was larger than the earlier ones." }, answer: ["A"], explain: "Paragraph C: \"Smaller experiments had pointed the same way\", listing the New Zealand company and the Japanese offices of Microsoft, which \"gave 2,300 employees five Fridays off in the summer of 2019\". Option B is not supported, and option C is not a claim the passage makes." },
          { n: 8, text: "According to the passage, what is meant by a compressed week?", options: { A: "Employees work four days but continue to be paid for five.", B: "Staff work nine days out of every ten.", C: "The same number of hours is worked across four longer days." }, answer: ["C"], explain: "Paragraph D: some firms \"spread the same total hours across four longer days, an arrangement known as a compressed week, which changes the shape of the day rather than the length of the week\". Option A describes the Friday-closure model, and option B describes the nine-day fortnight." },
          { n: 9, text: "What difficulty does the writer raise about shorter weeks in hospitals, supermarkets and bus services?", options: { A: "Their staff are less interested in shorter hours than office workers are.", B: "Shortening the week there would normally mean employing more people.", C: "Their productivity cannot be measured in any way at all." }, answer: ["B"], explain: "Paragraph E: \"a hospital ward, a supermarket or a bus route cannot simply close on the fifth day, so there the shorter week usually means hiring more staff\". Option A is not claimed, and option C is too absolute." }
        ]
      },
      {
        title: "Questions 10–13",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 10, text: "In 1926, Henry Ford moved his factories onto a five-day {{10}}.", answer: ["week"], explain: "Paragraph A: Ford \"moved his factories onto a five-day week in 1926\"." },
          { n: 11, text: "The 2022 British pilot was designed with help from researchers at the University of {{11}} and Boston College.", answer: ["Cambridge"], explain: "Paragraph C: the study was designed \"with researchers at the University of Cambridge and Boston College\"." },
          { n: 12, text: "Companies are not selected at random for four-day week pilots: they {{12}} for them.", answer: ["volunteer"], explain: "Paragraph E: \"Companies volunteer for them; they are not selected at random\"." },
          { n: 13, text: "In the British trial, average {{13}} stayed almost the same across the companies.", answer: ["revenue"], explain: "Paragraph C: \"Average revenue across the companies barely changed, rising by about 1.4 per cent\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 9, 13 soru (sentence completion + TFNG + MCQ)
     ------------------------------------------------------------ */
  var R9 = {
    kind: "reading",
    id: "R9",
    label: "Reading",
    emoji: "📖",
    title: "Passage 9 — Ice Cores: Archives of Ancient Air",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "Ice Cores: Archives of Ancient Air",
    paras: [
      { tag: "A", text: "At a place called Little Dome C, on the high plateau of East Antarctica, the temperature rarely rises above minus forty degrees, and snow that falls there is not going to melt. Each year adds a thin layer of new snow that is buried by the next, and the layers of old snow are gradually squeezed into ice, preserving between them almost everything that was in the air when they formed: dust from distant deserts, ash from volcanoes, salt from the sea, and small samples of the ancient atmosphere itself. To read that record, scientists do not dig downwards with a spade. They drill a cylinder of ice, a core, from the surface towards the bedrock, and bring it up in sections a few metres long, which are logged, wrapped and shipped to freezers in Europe. The deepest core yet recovered, announced in January 2025, is 2,800 metres long and contains ice that formed more than 1.2 million years ago. It is, in effect, a library in which the pages were stacked in the wrong order — the newest at the top, the oldest buried far below — but every page is still there." },
      { tag: "B", text: "Each page is written in several languages at once. The ice itself is a thermometer. Water molecules containing the heavier isotopes of hydrogen and oxygen evaporate less readily and are more likely to fall as snow when the air is cold, so the ratio of heavy to light water in a layer records the temperature at the moment the snow fell. Other chemicals record other things: sea salt carried by wind documents the extent of sea ice, while dust and volcanic ash can be matched to known eruptions and used as a clock. The most famous evidence, however, is in the bubbles. As snow is buried, it is first compressed into a porous material called firn, and only when it lies beneath tens of metres of later snow do the last channels close and the air is sealed into separate bubbles. From that moment the sample is isolated: a small specimen of atmosphere that has not changed since the age in which it was formed. No other climate record preserves direct samples of old air; every other archive, from tree rings to ocean sediment, can offer only indirect hints." },
      { tag: "C", text: "The first long records transformed our picture of the planet's recent history. The core drilled at the Russian station of Vostok, analysed in the 1990s, reached back 420,000 years, through four ice ages and the warm periods between them, and showed that carbon dioxide and temperature had risen and fallen together in a slow rhythm. A European programme based at another site, Dome C, later extended the record to 800,000 years. Across that entire span, carbon dioxide in the bubbles never rose above about 300 parts per million, and during the coldest periods it fell to around 170. The concentration measured in the atmosphere today is above 420 parts per million, a level that the ice record says has not been seen for at least 800,000 years, and the change has happened in decades rather than in the thousands of years that earlier shifts required." },
      { tag: "D", text: "Ice cores also preserve the history of human beings, which is sometimes an uncomfortable discovery. Lead particles released by the mining and smelting of silver-bearing ores travel far in the atmosphere and are deposited with snow, and a continuous record recovered from Greenland ice has tracked the fortunes of the Roman economy almost year by year. Emissions of lead rose when the mines of Spain were busy, reached their ancient maximum during the Pax Romana, the long period of stability in the first and second centuries AD, and plunged during the great plagues that followed; they fell again across the centuries after the empire declined. Much later, the same kind of measurement showed a steep rise after the Industrial Revolution and a peak in the 1970s, followed by an equally steep fall once lead was removed from petrol in Europe and North America — an early demonstration that air pollution travels, and that laws can end it." },
      { tag: "E", text: "Getting such records is slow and difficult. Drilling a hole several kilometres deep occupies teams of technicians for years, and the hole must be filled with a dense fluid to stop the ice from closing around the drill; the fluid itself must then be removed from the core, together with the outer layers, which are contaminated by the drilling. A core that has travelled halfway round the world is stored at about minus twenty degrees in special archives, and even a few hours of careless handling can ruin a section that took a season to recover. The record is also distorted by the ice itself. Under pressure, deep layers become extremely thin, and near the bedrock they are folded, mixed and sometimes melted; the lowest metres of a core, the ones that ought to be the most interesting, are often impossible to date with confidence. There is one more subtlety. The air in a bubble is younger than the ice around it, because the bubble only closes after decades or centuries of burial, and this gap of hundreds or even thousands of years must be calculated before the gases can be compared with other records." },
      { tag: "F", text: "That is why the newest project, Beyond EPICA, has chosen its site with such care. The target is not simply the oldest possible ice but the most reliably dated, since the aim is to reach beyond 1.5 million years, into a period known as the Mid-Pleistocene Transition, when the rhythm of the ice ages changed: the cycles that had repeated every 41,000 years became slower, deeper and roughly 100,000 years long, and nobody can yet explain why. Was carbon dioxide the cause, the consequence, or merely a passenger? A core has to answer questions like that by putting numbers next to one another, and the numbers must come from ice whose layers have not been disturbed. In January 2025 the drill passed 2,800 metres, and the team announced that the ice already recovered was older than any analysed before. The library of ancient air is open, in other words, but the pages that matter most are still below the drill." }
    ],
    groups: [
      {
        title: "Questions 1–4",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 1, text: "On the Antarctic plateau, layers of old snow are gradually squeezed into {{1}}.", answer: ["ice"], explain: "Paragraph A: the layers of old snow \"are gradually squeezed into ice\"." },
          { n: 2, text: "The core announced in January 2025 is {{2}} metres long.", answer: ["2,800", "2800"], explain: "Paragraph A: \"The deepest core yet recovered, announced in January 2025, is 2,800 metres long\"." },
          { n: 3, text: "The heavier water molecules are more likely to fall as snow when the air is {{3}}.", answer: ["cold"], explain: "Paragraph B: heavy water molecules \"are more likely to fall as snow when the air is cold\"." },
          { n: 4, text: "The air becomes sealed into bubbles only when it lies beneath tens of metres of later {{4}}.", answer: ["snow"], explain: "Paragraph B: \"only when it lies beneath tens of metres of later snow do the last channels close\"." }
        ]
      },
      {
        title: "Questions 5–10",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 5, text: "Volcanic ash found in an ice core can help scientists work out the age of the ice around it.", answer: ["TRUE"], explain: "Paragraph B: \"dust and volcanic ash can be matched to known eruptions and used as a clock\"." },
          { n: 6, text: "The Vostok core covered a longer period of time than the core drilled at Dome C.", answer: ["FALSE"], explain: "Paragraph C: Vostok \"reached back 420,000 years\", while the Dome C programme \"later extended the record to 800,000 years\"." },
          { n: 7, text: "The concentration of carbon dioxide in the atmosphere today is higher than at any point in the last 800,000 years.", answer: ["TRUE"], explain: "Paragraph C: today's level is \"a level that the ice record says has not been seen for at least 800,000 years\"." },
          { n: 8, text: "During the Roman empire, lead emissions recorded in the ice reached their highest level of the ancient period.", answer: ["TRUE"], explain: "Paragraph D: emissions \"reached their ancient maximum during the Pax Romana, the long period of stability in the first and second centuries AD\"." },
          { n: 9, text: "The lowest layers of an ice core provide the most accurate records.", answer: ["FALSE"], explain: "Paragraph E: near the bedrock, layers \"are folded, mixed and sometimes melted\", and the lowest metres are \"often impossible to date with confidence\"." },
          { n: 10, text: "The core at Vostok was drilled by an international team of researchers.", answer: ["NOT GIVEN"], explain: "Paragraph C mentions \"The core drilled at the Russian station of Vostok\", but the passage gives no information about who took part in drilling it." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "Why is the air trapped in a bubble younger than the ice that surrounds it?", options: { A: "Warm air from above replaces the oldest air as the ice moves.", B: "The bubble only closes some time after the snow has been buried.", C: "Gases escape more slowly from ice that lies close to the bedrock." }, answer: ["B"], explain: "Paragraph E: \"The air in a bubble is younger than the ice around it, because the bubble only closes after decades or centuries of burial\". Options A and C are not described in the passage." },
          { n: 12, text: "What does the ice record show about lead pollution after the 1970s?", options: { A: "It fell sharply once lead was removed from petrol.", B: "It disappeared completely within a few years.", C: "It returned to the levels of the Roman period." }, answer: ["A"], explain: "Paragraph D: a \"peak in the 1970s, followed by an equally steep fall once lead was removed from petrol in Europe and North America\". Option B is too absolute — the passage describes a steep fall, not complete disappearance — and option C is not claimed." },
          { n: 13, text: "What is the main purpose of the Beyond EPICA project described in the final paragraph?", options: { A: "To measure how quickly the Antarctic ice sheet is melting.", B: "To find the oldest ice that exists anywhere on Earth.", C: "To discover what caused the ice-age cycles to change." }, answer: ["C"], explain: "Paragraph F: the aim is to reach ice from \"the Mid-Pleistocene Transition, when the rhythm of the ice ages changed\", and to explain why this happened — \"nobody can yet explain why\". Option B is rejected because \"The target is not simply the oldest possible ice but the most reliably dated\", and option A is not mentioned." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     Kayıt: SECTIONS'a ekle, PRACTICE.reading'i genişlet
     ------------------------------------------------------------ */
  D.SECTIONS.R7 = R7;
  D.SECTIONS.R8 = R8;
  D.SECTIONS.R9 = R9;

  D.PRACTICE.reading.push(
    { title: "Passage 7 — How Octopuses Think", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Sentence completion", "Multiple choice"], link: "test.html?id=R7", ready: true },
    { title: "Passage 8 — The Four-Day Week Experiment", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Multiple choice", "Sentence completion"], link: "test.html?id=R8", ready: true },
    { title: "Passage 9 — Ice Cores: Archives of Ancient Air", sub: "13 questions · 3 question types", types: ["Sentence completion", "True/False/Not Given", "Multiple choice"], link: "test.html?id=R9", ready: true }
  );
})();
