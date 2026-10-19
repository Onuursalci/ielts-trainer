/* ============================================================
   IELTS Trainer — ek okuma pasajları (R4 + R5 + R6)
   data.js ve extra-reading.js'ten SONRA yüklenir: SECTIONS
   kayıt defterine üç yeni reading bölümü ekler ve
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
  if (!D) throw new Error("extra-reading2.js: window.APP_DATA bulunamadi (data.js once yuklenmeli)");

  /* ------------------------------------------------------------
     READING — Passage 4, 13 soru (TFNG + sentence completion + MCQ)
     ------------------------------------------------------------ */
  var R4 = {
    kind: "reading",
    id: "R4",
    label: "Reading",
    emoji: "📖",
    title: "Passage 4 — The Chalk Giants",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Chalk Giants",
    paras: [
      { tag: "A", text: "On a steep slope above the village of Uffington in southern England, a white horse some 110 metres long lies stretched across the turf. It is not drawn with paint or pigment; the figure is a trench cut into the hillside and packed with chalk, the soft white rock that lies beneath the thin soil of the downs. The horse is only fully visible from the air, or from a distance of several miles away, and this has puzzled observers for centuries. Nobody knows who cut it, or why. Estimates of its age have ranged from the Bronze Age to the medieval period, and arguments about it have been running for more than three hundred years. What is certain is that it is old, that it has been looked after continuously by the people of the surrounding villages, and that it is the largest of a family of chalk figures scattered across the English countryside." },
      { tag: "B", text: "The Uffington White Horse was once thought to be the oldest of them all, but dating it proved difficult for a long time. In the 1990s, archaeologists applied a technique called optically stimulated luminescence to the lowest layers of the figure, a method that measures how long grains of quartz have been buried away from sunlight. The results suggested that the horse was first cut between roughly 1400 and 600 BC, in the late Bronze Age or the Iron Age — far older than the Roman or medieval dates that some historians had proposed, and much older than the Tudor horse that many textbooks used to describe. The finding fitted the figure's stylised shape, which resembles the horses on Iron Age coins far more closely than it resembles a real animal." },
      { tag: "C", text: "Other chalk figures have a very different history, and most of them are far younger. The Cerne Abbas Giant, a club-wielding man cut into a hillside in Dorset, was long assumed to be an ancient monument, perhaps a Roman image of a god. Research published in 2021 changed that picture. By studying the microscopic snails preserved in the figure's lowest chalk layers, and by analysing samples with the same luminescence method used at Uffington, a team concluded that the giant was most likely cut in the seventeenth century, in the period of the English Civil War. The chalk in the trenches contained snail species that only became common in enclosed farmland, and the samples were too fresh to be prehistoric. A landscape that people had assumed was ancient turned out to be early modern." },
      { tag: "D", text: "Nor are all the figures ancient survivals. Many were made deliberately in the eighteenth and nineteenth centuries, when wealthy landowners and military men carved horses, giants and badges into the hills as statements of loyalty, fashion or local pride. One of the largest was cut in 1838 to celebrate a royal coronation, and dozens of smaller figures appeared on hillsides where no ancient tradition existed. The fashion died out in the twentieth century, but not the habit of cutting. New figures are still occasionally made, and some of them have been controversial: a modern white horse in Kent, cut in the 1990s, was designed to attract visitors to a stretch of countryside that had no chalk figure of its own, which is exactly the purpose that the older figures now serve for the villages below them." },
      { tag: "E", text: "Looking after a chalk figure is a permanent commitment rather than a single act of construction. The chalk is soft, and within a few years rain, frost and the roots of grass begin to close the trenches and darken the surface; a figure that is not scoured — cleaned back to the bright white chalk — slowly disappears into the hillside. The work is done by hand, with small tools and brushes, and it has been carried on by local communities for as long as anyone can remember; at Uffington the scouring was traditionally accompanied by a fair on the hill, and one account describes the figures at a nearby site being cleaned by a group of volunteers who had inherited the job from their parents. Chalk figures are therefore as much a social institution as a piece of sculpture: they survive because people keep choosing to look after them, generation after generation." },
      { tag: "F", text: "Managing the figures today involves a difficult balance between two different kinds of value. Visitors who come to see a chalk figure walk on fragile grassland, and the erosion they cause can be seen from one season to the next; at the same time, a figure that nobody visits loses the income, volunteers and public attention that keep the conservation going. Ecologists point out that the chalk grassland around these figures supports rare plants and insects, and that repeated scouring can disturb them, while tourism brings cars, litter and footpaths. Most sites now try to steer visitors onto defined routes and to keep the scouring seasonal, so that the figure stays visible without the hillside being worn away — a compromise that satisfies nobody completely, and which has to be renegotiated every few years. Whatever happens, the figure will need cleaning again next spring, and the argument over who should pay for the work will last at least as long." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "The Uffington White Horse was created by applying white paint to the hillside.", answer: ["FALSE"], explain: "Paragraph A: \"It is not drawn with paint or pigment; the figure is a trench cut into the hillside and packed with chalk\". It is a cut trench filled with chalk, not a painted image." },
          { n: 2, text: "The Uffington horse is best seen from a distance or from the air.", answer: ["TRUE"], explain: "Paragraph A: \"The horse is only fully visible from the air, or from a distance of several miles away\"." },
          { n: 3, text: "The author of the Uffington White Horse is known from historical records.", answer: ["NOT GIVEN"], explain: "Paragraph A says only that \"Nobody knows who cut it, or why\"; the passage gives no information about any historical record naming the person or people responsible." },
          { n: 4, text: "Tests carried out in the 1990s indicated that the Uffington horse is older than some historians had believed.", answer: ["TRUE"], explain: "Paragraph B: the results \"suggested that the horse was first cut between roughly 1400 and 600 BC\", and the date is \"far older than the Roman or medieval dates that some historians had proposed\"." },
          { n: 5, text: "The Cerne Abbas Giant was created in Roman times as an image of a god.", answer: ["FALSE"], explain: "Paragraph C: it \"was long assumed to be an ancient monument, perhaps a Roman image of a god\", but research \"concluded that the giant was most likely cut in the seventeenth century\". The assumption, not the fact, is stated." },
          { n: 6, text: "A white horse cut in Kent in the 1990s was designed to bring visitors to the area.", answer: ["TRUE"], explain: "Paragraph D: it \"was designed to attract visitors to a stretch of countryside that had no chalk figure of its own\"." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 7, text: "The dating method used on the Uffington horse measures how long grains of {{7}} have been buried away from sunlight.", answer: ["quartz"], explain: "Paragraph B: a method \"that measures how long grains of quartz have been buried away from sunlight\"." },
          { n: 8, text: "The shape of the Uffington horse resembles the horses shown on Iron Age {{8}}.", answer: ["coins"], explain: "Paragraph B: its shape \"resembles the horses on Iron Age coins far more closely than it resembles a real animal\"." },
          { n: 9, text: "In 2021, scientists studied the microscopic {{9}} preserved in the lowest chalk layers of the Cerne Abbas Giant.", answer: ["snails"], explain: "Paragraph C: researchers studied \"the microscopic snails preserved in the figure's lowest chalk layers\"." },
          { n: 10, text: "Cleaning a chalk figure back to the bright white chalk is known as {{10}}.", answer: ["scouring"], explain: "Paragraph E: \"a figure that is not scoured — cleaned back to the bright white chalk — slowly disappears into the hillside\"." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 11, text: "What does the passage say about how the age of the Uffington White Horse was finally established?", options: { A: "Written records from the Bronze Age confirmed it.", B: "A laboratory technique was used on the figure itself.", C: "Its shape was compared with that of modern horses." }, answer: ["B"], explain: "Paragraph B: \"archaeologists applied a technique called optically stimulated luminescence to the lowest layers of the figure\" — a laboratory technique applied to the figure, not to documents or modern animals." },
          { n: 12, text: "Why does the writer mention the figures cut in the eighteenth and nineteenth centuries?", options: { A: "To show that not all chalk figures are ancient.", B: "To argue that older figures are of greater value.", C: "To explain how ancient figures were repaired." }, answer: ["A"], explain: "Paragraph D: \"Nor are all the figures ancient survivals. Many were made deliberately in the eighteenth and nineteenth centuries\" — the point is that chalk figures are not all ancient." },
          { n: 13, text: "What difficulty does the final paragraph describe?", options: { A: "Visitors are unwilling to pay to see chalk figures.", B: "Protecting the hillside conflicts with attracting visitors.", C: "Local volunteers have stopped maintaining the figures." }, answer: ["B"], explain: "Paragraph F: \"Visitors who come to see a chalk figure walk on fragile grassland\" while \"a figure that nobody visits loses the income, volunteers and public attention that keep the conservation going\" — a balance between conservation and tourism. Option C is rejected, since paragraph E says scouring is \"carried on by local communities\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 5, 13 soru (TFNG + MCQ + sentence completion)
     ------------------------------------------------------------ */
  var R5 = {
    kind: "reading",
    id: "R5",
    label: "Reading",
    emoji: "📖",
    title: "Passage 5 — Rewilding the Highlands",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "Rewilding the Highlands",
    paras: [
      { tag: "A", text: "The Scottish Highlands are often pictured as empty, wild country: bare hills, wide glens and a few lonely sheep. That picture is recent. Before the arrival of large-scale sheep farming in the eighteenth and nineteenth centuries, and before the sporting estates that followed, much of the region carried woodland in which pine, birch and rowan grew beside long grasses and shrubs. Deforestation began long before the modern era, and it was completed within a couple of centuries once sheep and deer replaced the people who had lived there. What looks like untouched nature is, in most places, the result of deliberate management, and the word 'wilderness' has been described by ecologists as the most misleading term in British conservation." },
      { tag: "B", text: "The argument for bringing back a richer landscape rests on the idea that the hills are now limited not by their soil or their climate but by the absence of animals. Without large grazing animals, woodland tends to grow back on its own, but where deer are kept at high densities for shooting, tree seedlings never survive long enough to become trees. On the open hill, the herbivore that shapes the vegetation above all others is the red deer. Estimates of the national herd have varied, but they are usually placed above 300,000, and in some areas the animals are more numerous than the land can support. Where their numbers are controlled, studies have recorded that heather recovers and young trees reappear within a decade. Rewilding projects therefore begin not with planting but with counting — working out how many deer the land can carry, and removing the rest." },
      { tag: "C", text: "The best-known proposal is more ambitious than planting trees: reintroducing the large predators that once lived there. The argument from ecology is that a landscape without its top predators is unbalanced. If deer are never hunted, they lose their wariness, spend longer in one place feeding, and stop the woodland from returning. Ecologists have suggested that a restored population of wolves, or the possibility of one, could keep grazing animals moving and allow trees to regenerate. The idea is popular with some conservationists and strongly opposed by others. Farmers' organisations point out that wolves killed livestock and, occasionally, people, and that livestock losses would be paid for by someone; tourism bodies worry about the effect on visitors; and no serious plan for a wolf reintroduction in Scotland has yet been funded or approved by any government." },
      { tag: "D", text: "Alongside the predators, a small group of large animals can act as engineers, changing vegetation simply by being what they are and doing what they do. The Eurasian beaver, which was hunted to extinction in Britain and has since been returned to the landscape, builds dams that slow the flow of water, create ponds, trap sediment and reduce flooding downstream. In rivers where beavers have settled, wetlands have become richer, with more frogs, insects and water birds, and beaver dams can reduce the peak flows that flood lower farmland; several studies have also found that their dams raised levels of nitrogen in the water, a change that was not predicted but has been measured repeatedly. Elsewhere in Europe, the wild boar turns over the soil with its snout, and where the animals feed they supply bare ground in which seeds of trees and flowers can establish, which is a form of disturbance that richer habitats seem to require." },
      { tag: "E", text: "Rewilding is also an economic argument, and here the land is treated as a business. A sheep or deer farm in the hills can be described as a public subsidy turned into a private landscape, and the money arrives slowly: many estates provide few jobs, and the price of wool and lamb has fallen for decades. Newer projects earn their income in different ways — from visitor centres, guided walks, birdwatching holidays, satellite photography of conservation work, carbon and biodiversity credits offered to companies, and long-term payments from overseas donors who wish to see the landscape restored. One project that bought a large Highland estate announced in the 2000s that it would work with the local community and publish its plans, rather than closing the land in the way that private owners had often done. Not every scheme is popular. When the owners of a large estate were reported to have cleared both sheep and deer in the 1990s, in order to let woodland regenerate, neighbouring farmers and crofters objected angrily, and the dispute lasted for years." },
      { tag: "F", text: "Critics of rewilding are not only farmers. Some worry that a vision of an empty, animal-populated landscape has no room for the people who live and work in the glens, and that a word meaning 'wild' may be used to make places look uninhabited. Others, including ecologists and historians, ask which past is the right one to restore: Britain has been a managed landscape for thousands of years, and earlier rewilding proposals have concentrated on the period before human influence. Realistically, woodland cover in Scotland has recovered from about 5 per cent a century ago to more than 18 per cent today, mostly through ordinary forestry and planting, though some of the new woodland is made up of non-native conifers, which is not what rewilders have in mind. The most honest description of what is happening, several practitioners have argued, is not the return of an ancient wilderness but the negotiation of a new one, with definitions that will be argued over for decades." }
    ],
    groups: [
      {
        title: "Questions 1–6",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 1, text: "The Highlands have always been a treeless landscape.", answer: ["FALSE"], explain: "Paragraph A: \"much of the region carried woodland in which pine, birch and rowan grew\", and deforestation \"began long before the modern era\". The empty appearance is recent." },
          { n: 2, text: "Sheep farming played a part in removing woodland from the Highlands.", answer: ["TRUE"], explain: "Paragraph A: deforestation \"was completed within a couple of centuries once sheep and deer replaced the people who had lived there\", and large-scale sheep farming arrived in the eighteenth and nineteenth centuries." },
          { n: 3, text: "The author of a book on Highland ecology has received an award.", answer: ["NOT GIVEN"], explain: "Paragraph A quotes an opinion that \"the word 'wilderness' has been described by ecologists as the most misleading term in British conservation\", but the passage says nothing about any award or about any book." },
          { n: 4, text: "Red deer in the Highlands have reached a total of about 300,000 animals.", answer: ["NOT GIVEN"], explain: "Paragraph B says that estimates of the national herd \"have varied, but they are usually placed above 300,000\". The passage reports estimates rather than a confirmed total, and does not state that the herd has reached that figure." },
          { n: 5, text: "Where the number of deer is controlled, young trees can begin to grow again.", answer: ["TRUE"], explain: "Paragraph B: \"Where their numbers are controlled, studies have recorded that heather recovers and young trees reappear within a decade\"." },
          { n: 6, text: "Rewilding projects usually begin by planting large numbers of young trees.", answer: ["FALSE"], explain: "Paragraph B: \"Rewilding projects therefore begin not with planting but with counting\"." }
        ]
      },
      {
        title: "Questions 7–10",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 7, text: "What do farmers' organisations say about reintroducing wolves?", options: { A: "Wolves would be unable to survive in the Scottish climate.", B: "Wolves killed farm animals in the past.", C: "There is not enough wild prey for wolves to eat." }, answer: ["B"], explain: "Paragraph C: \"Farmers' organisations point out that wolves killed livestock and, occasionally, people\". Option A is not discussed, and option C is not claimed." },
          { n: 8, text: "What effect of beaver dams does the passage describe?", options: { A: "They raise the temperature of the water.", B: "They increase the risk of flooding downstream.", C: "They can reduce the highest river flows." }, answer: ["C"], explain: "Paragraph D: \"beaver dams can reduce the peak flows that flood lower farmland\". Option B is the opposite of what is claimed, and option A is not mentioned." },
          { n: 9, text: "What do visitors who come to see rewilding projects provide, according to the passage?", options: { A: "Most of the income for the projects' conservation work.", B: "A large proportion of Scotland's rural employment.", C: "A replacement for funding from the national government." }, answer: ["A"], explain: "Paragraph E: \"Newer projects earn their income in different ways — from visitor centres, guided walks, birdwatching holidays\", and the paragraph contrasts this income with the slow money of traditional hill farming. The passage does not claim most rural employment comes from visitors, nor that visitor income replaces government funding." },
          { n: 10, text: "What do ecologists and historians disagree about, according to the final paragraph?", options: { A: "Whether woodland in Scotland is increasing.", B: "Which period of the past should be recreated.", C: "Whether beavers should ever have been reintroduced." }, answer: ["B"], explain: "Paragraph F: they \"ask which past is the right one to restore\". Option A is settled in the same paragraph — cover has risen \"from about 5 per cent a century ago to more than 18 per cent today\" — and option C is not part of that disagreement." }
        ]
      },
      {
        title: "Questions 11–13",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 11, text: "An ecologist has called 'wilderness' the most misleading word in British {{11}}.", answer: ["conservation"], explain: "Paragraph A: the word \"has been described by ecologists as the most misleading term in British conservation\"." },
          { n: 12, text: "In the eighteenth and nineteenth centuries, sheep farming in the Highlands developed on a large {{12}}.", answer: ["scale"], explain: "Paragraph A: \"Before the arrival of large-scale sheep farming in the eighteenth and nineteenth centuries\"." },
          { n: 13, text: "The Eurasian beaver builds dams that slow the flow of {{13}}, create ponds and trap sediment.", answer: ["water"], explain: "Paragraph D: the beaver \"builds dams that slow the flow of water, create ponds, trap sediment and reduce flooding downstream\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     READING — Passage 6, 13 soru (sentence completion + MCQ + TFNG)
     ------------------------------------------------------------ */
  var R6 = {
    kind: "reading",
    id: "R6",
    label: "Reading",
    emoji: "📖",
    title: "Passage 6 — The Right to Repair",
    subtitle: "Questions 1–13 · 20 minutes",
    minutes: 20,
    intro: "Read the passage and answer questions 1–13.",
    passageTitle: "The Right to Repair",
    paras: [
      { tag: "A", text: "For most of the twentieth century, an owner who bought a machine could also expect to open it, adjust it and repair it, or to pay a local workshop to do so. The manual for a new tractor or a washing machine explained how the parts fitted together, and spare parts were sold on the open market. Over the past thirty years that assumption has quietly changed. A recent model of a smartphone or a farm machine arrives sealed, held together with adhesives and special screws, and the official instructions say that opening the product will void your warranty. A gadget may itself be cheap, but a single broken component can turn a reasonable purchase into an object that is thrown away, with only a battery or a small chip to blame." },
      { tag: "B", text: "Consumers have reacted slowly, then all at once. In the United States, about twenty states have considered 'right to repair' bills since the idea was first drafted in Massachusetts, and campaigns have collected signatures to put repair questions to a public vote. The argument has also been made in economic terms. Small businesses complain that they cannot compete with manufacturers who keep a monopoly over spare parts and diagnostic tools; farmers point out that a modern tractor is full of software, and that an error code can stop a machine in a field until an authorised technician arrives; charities that refurbish computers want access to replacement parts so that a working device is not treated as waste after one failure. A study of the matter usually reaches the same conclusion: repair benefits are uneven, but the direction of travel is clear." },
      { tag: "C", text: "In Europe, the change has come mainly through law rather than through campaigns. In 2019, the European Union adopted rules requiring manufacturers of certain appliances — lighting, and the larger domestic washing machines, dishwashers and refrigerators among them — to supply spare parts to professional repairers for a number of years after the model is withdrawn from sale, and to make parts available for a defined period. Two years later, rules extended the duty to televisions and to some other electronic goods, and set a limit on how long a repair could take. A proposal in 2023 went further and addressed the repair itself: a 'right to repair' directive, which would oblige producers to repair a product at a reasonable price and to publish the information that an independent workshop needs. Regulators have also begun to ask about the software locks and serialisation practices that make an otherwise repairable part refuse to work in a machine." },
      { tag: "D", text: "Manufacturers reply that the picture is not so simple. A phone or a car contains safety-critical parts, and an unsuitable repair can harm the user — a point that regulators accept, since certain products must still be repaired by qualified technicians. Designers argue that sealing a product allows it to be thinner, lighter and more water-resistant, and that a device which cannot be opened is also harder to break into. Some firms insist that their controls protect intellectual property and prevent counterfeits that could injure customers. Others are more open about the commercial motive: manufacturers earn money from the parts, the service contracts and the replacement machines that sales alone do not cover, and repairable products undermine that model. The fairest answer, most observers conclude, is that both explanations carry some weight, and that the ratio between them varies from one industry to another." },
      { tag: "E", text: "The practical effect of the new rules is harder to judge than the argument. Independent repairers say that a spare part is only useful if the software allows it to work, and that the latest obstacle is not the physical part but the code that checks it. Buyers, for their part, are difficult to move: surveys repeatedly find that people say they support repair while choosing the cheapest device, and many will replace a cracked screen rather than look for a workshop. On the other side, several manufacturers have begun to sell parts directly and to publish repair guides, a shift that may owe as much to public criticism and to the reputation of a brand as to any law. Campaigners claim the movement has changed the terms of the debate even where nothing has yet been enforced, and official assessments of the newer rules will not begin until those rules have been in force for some years." },
      { tag: "F", text: "What is at stake is larger than a single broken appliance. Electronic waste is the fastest-growing category of waste in the world, and a device that is thrown away is also a device whose metals, plastics and rare earth elements must be mined again. Repair keeps a product, and everything inside it, in use for longer, and it shifts control of the object from the manufacturer back to the person who paid for it. That, in the end, is the political claim behind the phrase: not that every consumer wants to wield a screwdriver, but that the choice to do so should exist — a point that both the campaigners and the manufacturers now accept, though they continue to disagree about how far the right should extend." }
    ],
    groups: [
      {
        title: "Questions 1–4",
        instr: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER from the passage for each answer.",
        type: "gap",
        qs: [
          { n: 1, text: "Opening a modern product can make the buyer's {{1}} no longer valid.", answer: ["warranty"], explain: "Paragraph A: \"the official instructions say that opening the product will void your warranty\"." },
          { n: 2, text: "About twenty states have considered 'right to repair' bills since the idea was first drafted in {{2}}.", answer: ["Massachusetts"], explain: "Paragraph B: bills have been considered \"since the idea was first drafted in Massachusetts\"." },
          { n: 3, text: "European rules oblige manufacturers to supply spare parts to professional {{3}}.", answer: ["repairers"], explain: "Paragraph C: manufacturers of certain appliances must \"supply spare parts to professional repairers for a number of years after the model is withdrawn from sale\"." },
          { n: 4, text: "A European proposal in 2023 would require producers to repair a product at a reasonable {{4}}.", answer: ["price"], explain: "Paragraph C: the directive \"would oblige producers to repair a product at a reasonable price\"." }
        ]
      },
      {
        title: "Questions 5–7",
        instr: "Choose the correct letter, A, B or C.",
        type: "mcq",
        qs: [
          { n: 5, text: "Why does the passage mention farmers?", options: { A: "Modern farm machinery is particularly expensive to buy.", B: "Software can prevent farmers from repairing their own machines.", C: "Farming organisations oppose all repair legislation." }, answer: ["B"], explain: "Paragraph B: \"farmers point out that a modern tractor is full of software, and that an error code can stop a machine in a field until an authorised technician arrives\". Option C is not claimed anywhere in the passage." },
          { n: 6, text: "Which argument made by manufacturers does the writer accept as partly reasonable?", options: { A: "Repairs by unqualified people can put users at risk.", B: "Independent workshops charge too much for their work.", C: "Repairing products is bad for the environment." }, answer: ["A"], explain: "Paragraph D: \"an unsuitable repair can harm the user — a point that regulators accept, since certain products must still be repaired by qualified technicians\". Options B and C are not arguments the passage attributes to manufacturers." },
          { n: 7, text: "What is the writer's conclusion about repair laws?", options: { A: "They have failed to change manufacturers' behaviour in any way.", B: "They have already improved the situation beyond dispute.", C: "They have shifted the debate even where their effect is not yet proven." }, answer: ["C"], explain: "Paragraph E: \"Campaigners claim the movement has changed the terms of the debate even where nothing has yet been enforced\", and official assessments \"will not begin until those rules have been in force for some years\". Options A and B are both stronger than the evidence allows." }
        ]
      },
      {
        title: "Questions 8–13",
        instr: "Do the following statements agree with the information given in the passage? Write TRUE, FALSE or NOT GIVEN.",
        type: "tfng",
        qs: [
          { n: 8, text: "In the twentieth century, instruction manuals explained how machines were put together.", answer: ["TRUE"], explain: "Paragraph A: \"The manual for a new tractor or a washing machine explained how the parts fitted together\"." },
          { n: 9, text: "The first European rules on spare parts covered every kind of electrical appliance.", answer: ["FALSE"], explain: "Paragraph C: they required manufacturers \"of certain appliances — lighting, and the larger domestic washing machines, dishwashers and refrigerators among them\" to supply parts, so the coverage was partial rather than universal." },
          { n: 10, text: "Right to repair legislation has been passed in more than twenty states of the United States.", answer: ["NOT GIVEN"], explain: "Paragraph B says that about twenty states \"have considered\" such bills, but the passage gives no information about which, if any, have passed them." },
          { n: 11, text: "Independent repairers say that software, rather than the availability of parts, is now the main obstacle.", answer: ["TRUE"], explain: "Paragraph E: they say \"the latest obstacle is not the physical part but the code that checks it\"." },
          { n: 12, text: "Most consumers check whether a device can be repaired before they buy it.", answer: ["FALSE"], explain: "Paragraph E: \"surveys repeatedly find that people say they support repair while choosing the cheapest device\". Buyers prioritise price rather than repairability." },
          { n: 13, text: "Electronic waste is growing more quickly than any other kind of waste.", answer: ["TRUE"], explain: "Paragraph F: \"Electronic waste is the fastest-growing category of waste in the world\"." }
        ]
      }
    ]
  };

  /* ------------------------------------------------------------
     Kayıt: SECTIONS'a ekle, PRACTICE.reading'i genişlet
     ------------------------------------------------------------ */
  D.SECTIONS.R4 = R4;
  D.SECTIONS.R5 = R5;
  D.SECTIONS.R6 = R6;

  D.PRACTICE.reading.push(
    { title: "Passage 4 — The Chalk Giants", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Sentence completion", "Multiple choice"], link: "test.html?id=R4", ready: true },
    { title: "Passage 5 — Rewilding the Highlands", sub: "13 questions · 3 question types", types: ["True/False/Not Given", "Multiple choice", "Sentence completion"], link: "test.html?id=R5", ready: true },
    { title: "Passage 6 — The Right to Repair", sub: "13 questions · 3 question types", types: ["Sentence completion", "Multiple choice", "True/False/Not Given"], link: "test.html?id=R6", ready: true }
  );
})();
