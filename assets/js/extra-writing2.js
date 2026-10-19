/* ============================================================
   IELTS Trainer — Writing Pack 3–6 (W3, W4, W5, W6)
   Bu dosya data.js ve extra-writing.js'ten SONRA yüklenmelidir:
     D.SECTIONS.W3 / W4 / W5 / W6 → yazma paketleri (Task 1 + Task 2, model cevaplı)
     D.PRACTICE.writing → W3, W4, W5, W6 kartları eklenir
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  if (!D) throw new Error("APP_DATA yok");
  if (!D.SECTIONS || !D.PRACTICE || !D.PRACTICE.writing) throw new Error("APP_DATA yapısı eksik");

  /* ------------------------------------------------------------
     W3 — Task 1: iki tren hattının yolcu sayıları (çubuk grafik)
          Task 2: toplu taşıma vs yeni yollar essay — TÜM METİN İNGİLİZCE
     ------------------------------------------------------------ */
  var W3 = {
    kind: "writing",
    id: "W3",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 3 — Task 1 & Task 2",
    subtitle: "Pack 3 · 2 tasks · model answers · 8 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the number of passengers carried by two train lines in a European region in 2005 and 2020, measured in millions.",
        chart: {
          caption: "Passengers carried by two train lines, 2005 vs 2020 (millions)",
          bars: [
            { label: "Northline Express", a: 30, b: 20 },
            { label: "Riverside Local", a: 40, b: 65 }
          ],
          years: ["2005", "2020"]
        },
        tips: [
          "Paraphrase the task in one sentence — name the region, the two years and what is being counted.",
          "Write an overview of the two opposite trends without quoting figures.",
          "Describe each line in its own paragraph and finish with the gap between them, which widened in Riverside's favour.",
          "Compare, do not list: 'fell by a third', 'grew by half', 'roughly twice as busy as the other line'.",
          "Aim for 165–185 words in 20 minutes and keep one unit (millions) throughout."
        ],
        model: "The bar chart compares the number of passengers carried by two train lines in a European region in 2005 and 2020, with the figures given in millions.\n\nThe two lines followed opposite trajectories. Northline Express lost a substantial share of its passengers, whereas Riverside Local almost doubled its figure, becoming by far the busier service by 2020.\n\nIn 2005, Riverside Local carried 40 million passengers, slightly more than the 30 million who travelled with Northline Express. Over the following fifteen years the local line grew rapidly, climbing to 65 million passengers in 2020. That represents an increase of 25 million, or about 60 per cent, on its 2005 figure.\n\nNorthline Express, in contrast, saw its passenger numbers fall from 30 million in 2005 to 20 million in 2020, a decline of a third. As a result, the gap between the two lines widened sharply: in 2005 they were separated by 10 million passengers, but by 2020 Riverside carried 45 million more people than its rival.\n\nTaken together, the two lines carried 70 million passengers in 2005 and 85 million in 2020."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Governments should spend more of their transport budgets on public transport instead of expanding the road network. To what extent do you agree or disagree?",
        tips: [
          "Take a clear position in the introduction and keep it unchanged to the end.",
          "Concede one real advantage of new roads (freight, remote areas) so your argument looks balanced.",
          "Develop public transport with concrete effects: fewer cars, cleaner air, cheaper commuting, less congestion.",
          "Conclude by stating the conditions under which roads would still deserve money.",
          "Aim for 265–290 words in 40 minutes; plan two body paragraphs before writing."
        ],
        model: "It is often argued that governments should spend more on public transport than on new roads. I largely agree with this view, although I believe road building cannot be abandoned completely.\n\nThe strongest argument for prioritising public transport is that it moves far more people for every pound invested. A single train or bus can replace dozens of cars, which reduces congestion in city centres where space is limited. Frequent, comfortable services also persuade some drivers to leave their cars at home, which reduces demand for new road capacity in the first place. Cleaner air is a further benefit: electric buses and trains produce no exhaust fumes where most people live and work, so money spent on them improves public health. A reliable network also makes commuting cheaper, which matters most to low-income households that cannot afford a car. Finally, frequent services keep carriages and buses full, which strengthens the case for further investment.\n\nNew roads still have a role, but a limited one. They genuinely help freight transport and connect remote regions where a bus or rail service is not practical, so some road spending is justified. In cities, however, wider roads tend to attract more traffic and simply reproduce the congestion they were meant to cure. Public money is therefore better used on expanding rail and bus networks.\n\nIn conclusion, I agree that public transport deserves priority in most budgets, because it carries more passengers and delivers cleaner air and fairer access to jobs. It also saves money in the long run, since maintaining a railway is cheaper than widening motorways every few years. Road projects should receive funding only where they serve areas that public transport cannot reach efficiently."
      }
    ],
    extraPrompts: {
      t1: [
        "The chart below shows how many passengers used a city metro system in 2010 and 2022, measured in millions.",
        "The chart compares the number of journeys made by train and by coach in one country in 2005, 2015 and 2025.",
        "The bar chart shows average commuting times to work by four means of transport in two different cities in 2023."
      ],
      t2: [
        "Some people believe that cycling should be made the main form of transport in cities. To what extent do you agree or disagree?",
        "In some countries, cars are banned from city centres during peak hours. Is this a positive or negative development?",
        "Some people think that using public money to preserve historic buildings is a waste. To what extent do you agree or disagree?",
        "Many cities are introducing congestion charges for drivers entering the centre. What are the advantages and disadvantages of such charges?",
        "Some people believe that governments should subsidise electric cars so that everyone can afford one. To what extent do you agree or disagree?"
      ]
    }
  };

  /* ------------------------------------------------------------
     W4 — Task 1: elektrik üretimi kaynakları (4 kaynak, iki yıl)
          Task 2: çocuklara yönelik reklam yasağı essay'i
     ------------------------------------------------------------ */
  var W4 = {
    kind: "writing",
    id: "W4",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 4 — Task 1 & Task 2",
    subtitle: "Pack 4 · 2 tasks · model answers · 8 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows how one country generated its electricity in 2010 and 2022, using four different fuel sources. The figures are measured in terawatt hours (TWh).",
        chart: {
          caption: "Electricity generated by source in one country, 2010 vs 2022 (TWh)",
          bars: [
            { label: "Coal", a: 240, b: 140 },
            { label: "Natural gas", a: 180, b: 160 },
            { label: "Wind", a: 40, b: 130 },
            { label: "Solar", a: 10, b: 60 }
          ],
          years: ["2010", "2022"]
        },
        tips: [
          "Paraphrase the task in one sentence and state the unit (terawatt hours) once.",
          "Overview: coal declined while wind and solar expanded rapidly; fossil fuels still dominated in 2022.",
          "Group the sources in the body: falling fossil fuels in one paragraph, rising renewables in the other, largest change first.",
          "Use trend vocabulary precisely: fell by about 40 per cent, more than tripled, rose sharply.",
          "Aim for 165–185 words; finish with a comparison or total rather than an opinion."
        ],
        model: "The bar chart compares the amount of electricity generated from four sources in one country in 2010 and 2022, with the data measured in terawatt hours.\n\nOverall, coal remained the largest single source, but its output declined noticeably, while wind and solar expanded from a very low base. The two fossil fuels still produced well over half of the electricity shown in 2022.\n\nIn 2010, coal accounted for 240 TWh, by far the highest figure, but this fell to 140 TWh by 2022, a drop of around 40 per cent. Natural gas declined less sharply, from 180 TWh to 160 TWh. Together, the two fossil fuels dropped from 420 TWh to 300 TWh over the period.\n\nRenewable sources moved in the opposite direction. Wind power rose dramatically, from 40 TWh in 2010 to 130 TWh in 2022, more than tripling its output. Solar grew even faster in relative terms, from 10 TWh to 60 TWh, a sixfold increase, although its total remained the smallest of the four."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "In many countries there are limits on how companies may advertise to children. Some people say that advertising aimed at children should be banned altogether. To what extent do you agree or disagree?",
        tips: [
          "Define the scope in your introduction (for example, under-12s and unhealthy food) so your answer stays precise.",
          "Explain the two strongest arguments for a ban: children cannot recognise persuasive intent, and pester power works.",
          "Concede a limited role for advertising with safeguards (age limits, clear labels) so the essay reads as a judgement.",
          "Use precise terms: consumerism, pester power, persuasive intent, targeted marketing.",
          "Aim for 265–290 words; keep one clear position visible in the first and last paragraphs."
        ],
        model: "Most children now spend hours every week watching programmes, videos and games created for them, and a large share of the advertising they see is designed to sell toys, snacks and games. In my view, advertising aimed at young children should indeed be banned, at least below a certain age.\n\nThe clearest argument for a ban is that children cannot yet recognise persuasive intent. Until roughly the age of twelve, most of them accept what they see on a screen as information rather than as a sales pitch. As a result, they are persuaded before they are able to question the message. A second concern is the influence children have at home. Advertisers exploit this 'pester power': parents report that constant requests for branded food and toys create daily conflict, and saying no is difficult when the whole class owns the same product. Health matters as well, because a large proportion of the advertising directed at children promotes sugary drinks and fast food, which contributes to poor diets.\n\nOpponents argue that a ban would be unfair to businesses and that parents, not governments, should decide what children watch. There is some truth in this, and a total ban would be hard to enforce on international streaming platforms. However, restrictions could be introduced gradually: no advertising of unhealthy food before nine in the evening, clear labels when content is sponsored, and stricter age verification on games and apps.\n\nIn conclusion, I agree that advertising aimed at young children should be banned because it exploits their limited understanding and puts pressure on family life. With careful enforcement, such a ban is both fair and practical."
      }
    ],
    extraPrompts: {
      t1: [
        "The chart below shows how much energy a typical home in one country used for four purposes in 2005 and 2020, measured in kilowatt hours.",
        "The bar chart compares the amount of household waste recycled, incinerated and sent to landfill in one city in 2012 and 2024 (in thousands of tonnes).",
        "The chart shows the sources of carbon dioxide emissions in one country in 1990 and 2020, measured in millions of tonnes."
      ],
      t2: [
        "Some people think that governments should tax unhealthy food to improve public health. To what extent do you agree or disagree?",
        "Many young people spend several hours a day on social media. What problems does this cause, and what solutions can you suggest?",
        "Some people believe that children should be given homework every day, while others disagree. Discuss both views and give your own opinion.",
        "In many countries, the age at which people can legally buy alcohol or vote is debated. Should these ages be lowered or raised?",
        "Some people think that companies should be required by law to reduce the packaging of their products. To what extent do you agree or disagree?"
      ]
    }
  };

  /* ------------------------------------------------------------
     W5 — Task 1: evlerde su tüketimi (faaliyetlere göre çubuk grafik)
          Task 2: ücretsiz üniversite eğitimi essay'i
     ------------------------------------------------------------ */
  var W5 = {
    kind: "writing",
    id: "W5",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 5 — Task 1 & Task 2",
    subtitle: "Pack 5 · 2 tasks · model answers · 8 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the average amount of water used per household per day for four different purposes in one country in 2000 and 2020, measured in litres.",
        chart: {
          caption: "Average daily water use per household by purpose, 2000 vs 2020 (litres)",
          bars: [
            { label: "Showers & baths", a: 150, b: 120 },
            { label: "Toilets", a: 50, b: 40 },
            { label: "Gardens", a: 100, b: 90 },
            { label: "Kitchen", a: 40, b: 55 }
          ],
          years: ["2000", "2020"]
        },
        tips: [
          "Paraphrase the task in one sentence — what the chart measures, in which country, and when.",
          "Overview: total use fell because showers and toilets used less, while the kitchen was the only area using more.",
          "Give the figures purpose by purpose; mention totals or differences (for example, a drop of 30 litres) to show processing.",
          "Avoid opinions about saving water — Task 1 describes data only.",
          "Aim for 165–185 words and check that every figure you quote appears in the chart."
        ],
        model: "The bar chart shows the average daily water consumption of households in one country for four purposes in 2000 and 2020, measured in litres.\n\nOverall, households used less water in 2020 than in 2000, mainly because showers and baths became more economical. Kitchen use was the only category that increased. Bathing remained the largest use in both years.\n\nIn 2000, showers and baths consumed 150 litres per household per day, while gardens accounted for 100 litres. Toilets used 50 litres and the kitchen only 40 litres, bringing total consumption to 340 litres. By 2020, water for showers and baths had fallen to 120 litres and toilet use had dropped to 40 litres, a decline of 30 and 10 litres respectively.\n\nGarden watering stayed relatively stable, easing from 100 litres to 90 litres. Kitchen use, by contrast, rose from 40 litres to 55 litres, an increase of more than a third. As a result, the gap between the kitchen and toilets narrowed from 10 litres to just 15 litres, while the overall total fell by 45 litres to 305 litres per household per day."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "University education should be free for all students, regardless of their background. To what extent do you agree or disagree?",
        tips: [
          "State your position clearly and keep it consistent — agree, disagree or agree in part.",
          "Argue for free access with equality and public-benefit reasons, not only personal gain.",
          "Address the obvious objection: the cost of a fully funded system and its effects on quality.",
          "Propose a workable middle path (grants, loans repaid through income tax) if your position is 'partly agree'.",
          "Aim for 265–290 words; use precise vocabulary: tuition fees, means-tested grants, social mobility."
        ],
        model: "In many countries, students and their families carry a large share of the cost of a degree, and some argue that university education should instead be free for everyone. I agree that access to university should never depend on family income, although I would not make the system entirely free for the wealthiest households.\n\nThe main reason for supporting free education is fairness. When tuition fees are high, talented young people from low-income families are discouraged from applying, while those from richer homes enroll almost automatically. That wastes human potential and deepens social inequality. Society also benefits from well-educated graduates: nurses, teachers and engineers pay higher taxes and sustain the services everyone relies on, so the public gains a return on its investment. Removing fees altogether would strengthen social mobility and make admissions decisions less dependent on money.\n\nCritics point out that providing free university education is expensive, and the money has to come from higher taxes or cuts elsewhere. They add that a degree raises graduates' earnings substantially, so it is reasonable to ask them to contribute. This argument has some force, but it ignores short-term effects: with no fees, enrollment grows and more graduates enter the workforce, expanding the future tax base. The fairest approach would be generous means-tested grants for poorer students, with moderate loan repayments linked to income.\n\nIn conclusion, I agree that university should be affordable for all, since charging full fees excludes capable students and harms the economy as well as the individuals affected. A system of public funding supported by income-linked contributions offers the best balance of fairness and sustainability."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows domestic water consumption per person in four regions in 2015 and 2023, measured in litres per day.",
        "The chart compares the amount of household water used for washing, cooking and gardening in two towns in 2018, measured in cubic metres.",
        "The bar chart shows the average daily electricity use of households in four countries in 2005 and 2020, measured in kilowatt hours."
      ],
      t2: [
        "Some people think that governments should provide free healthcare for everyone. To what extent do you agree or disagree?",
        "Some people believe that everyone should be required to do unpaid work in their community. To what extent do you agree or disagree?",
        "In some countries, students leave school at 16, while others stay until 18. Which system do you think is better and why?",
        "Some people think that the best way to reduce poverty is to provide free education at all levels. What other measures could be effective?",
        "Some people believe that schools should focus on practical skills such as budgeting and cooking rather than academic subjects. To what extent do you agree or disagree?"
      ]
    }
  };

  /* ------------------------------------------------------------
     W6 — Task 1: akıllı telefon sahipliği oranları (çubuk grafik)
          Task 2: yaşlıların dijital hizmet öğrenimi için devlet desteği
     ------------------------------------------------------------ */
  var W6 = {
    kind: "writing",
    id: "W6",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 6 — Task 1 & Task 2",
    subtitle: "Pack 6 · 2 tasks · model answers · 8 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the percentage of adults who owned a smartphone in one country in 2010 and 2024, divided into four age groups.",
        chart: {
          caption: "Smartphone ownership among adults by age group, 2010 vs 2024 (%)",
          bars: [
            { label: "18–34", a: 45, b: 96 },
            { label: "35–54", a: 30, b: 92 },
            { label: "55–64", a: 15, b: 74 },
            { label: "65+", a: 5, b: 45 }
          ],
          years: ["2010", "2024"]
        },
        tips: [
          "Paraphrase the task in one sentence: what, where, which years and that the data are percentages.",
          "Overview: ownership rose in every group, and the older the group, the lower the figure in both years.",
          "Organise by age group, combining figures from the two years in each sentence; compare the youngest with the oldest.",
          "Use precise upward-trend phrases: more than doubled, rose steadily, increased ninefold.",
          "Aim for 165–185 words; do not add reasons such as prices or habits — describe only."
        ],
        model: "The bar chart compares smartphone ownership among adults in one country in 2010 and 2024 across four age groups, with the figures expressed as percentages.\n\nOverall, ownership increased in every age group over the fourteen-year period, and the younger the adults, the higher the proportion. In both years, the 18–34 group had the highest figure, while the 65+ group had the lowest, although the gaps between the groups narrowed by 2024.\n\nIn 2010, ownership was relatively low in all groups: 45% of 18–34s owned a smartphone, compared with 30% of 35–54s. In the two oldest groups, the figures were much smaller, at 15% and 5% respectively. By 2024, ownership had risen sharply across the board. Nearly all adults aged 18–34 (96%) and 35–54 (92%) had a smartphone, while the figure for 55–64s more than quadrupled, reaching 74%.\n\nThe most striking change occurred among people aged 65 and over. Their ownership rate jumped from just 5% in 2010 to 45% in 2024, a ninefold increase. Even so, fewer than half of this group owned a smartphone, leaving the oldest adults far behind the rest."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Some people believe that governments should provide funding and training to help older people learn to use digital services. To what extent do you agree or disagree?",
        tips: [
          "State your position clearly and explain why the issue is urgent (services moving online).",
          "Develop two or three concrete benefits: independence, mental stimulation, staying in contact with family.",
          "Address the cost objection honestly — targeted programmes are cheaper than the consequences of exclusion.",
          "Use precise vocabulary: digital literacy, digital exclusion, accessibility, training programmes.",
          "Aim for 265–290 words; keep the conclusion short and line it up with the introduction."
        ],
        model: "Banks, hospitals, transport systems and government offices increasingly deliver their services online, which leaves people who lack digital skills at a serious disadvantage. In my view, governments should indeed fund training so that older citizens can use these services, because digital access has become a basic requirement of modern life.\n\nThe first reason is independence. If an older person can book a medical appointment, manage a bank account or renew a document online, they do not need to ask relatives for help with routine tasks, which protects their dignity and reduces the burden on working families. For people with limited mobility, everyday tasks that once required a trip outside become possible without leaving home. A second benefit concerns social contact. Many grandparents live far from their children, and video calls or messaging apps allow them to stay in touch daily, which helps prevent loneliness and its effects on health. Learning new skills also keeps the mind active, and studies suggest that this can slow cognitive decline.\n\nCritics object that training programmes are expensive and that few participants retain what they learn. This concern is fair, but digital exclusion also has costs: older people who cannot use online services may miss medical appointments or fall victim to fraud. Targeted courses, run in libraries and community centres and supported by younger volunteers, would be far cheaper than residential care or social isolation, and they enable families to step back.\n\nIn conclusion, I fully agree that governments should fund training and support for older people, since digital services are now essential and exclusion harms both individuals and the wider economy. Public investment in digital literacy is therefore money well spent."
      }
    ],
    extraPrompts: {
      t1: [
        "The chart below shows how many minutes a day young adults in one country spent on four types of digital media in 2012 and 2022.",
        "The chart compares the percentage of people using online banking in four age groups in one country in 2015 and 2024.",
        "The bar chart shows the average number of hours per week spent using digital devices by four age groups in 2015 and 2023."
      ],
      t2: [
        "Some people believe that the internet has made people less social in their daily lives. To what extent do you agree or disagree?",
        "In many workplaces, most communication now takes place online. What are the advantages and disadvantages of this change?",
        "Some people think that schools should teach children how to use artificial intelligence tools responsibly. To what extent do you agree or disagree?",
        "Some people believe that older employees bring valuable experience to companies, while others think youth and new skills matter more. Discuss both views and give your opinion.",
        "Some people think that governments should provide free mobile internet for everyone to reduce social inequality. To what extent do you agree or disagree?"
      ]
    }
  };

  D.SECTIONS.W3 = W3;
  D.SECTIONS.W4 = W4;
  D.SECTIONS.W5 = W5;
  D.SECTIONS.W6 = W6;

  /* ------------------------------------------------------------
     PRACTICE — Writing sekmesine W3–W6 kartlarını ekle
     ------------------------------------------------------------ */
  D.PRACTICE.writing.push({
    title: "Writing Pack 3 — Task 1 & Task 2",
    sub: "2 full tasks + model answers",
    types: ["Task 1 report", "Task 2 essay"],
    link: "test.html?id=W3",
    ready: true
  });
  D.PRACTICE.writing.push({
    title: "Writing Pack 4 — Task 1 & Task 2",
    sub: "2 full tasks + model answers",
    types: ["Task 1 report", "Task 2 essay"],
    link: "test.html?id=W4",
    ready: true
  });
  D.PRACTICE.writing.push({
    title: "Writing Pack 5 — Task 1 & Task 2",
    sub: "2 full tasks + model answers",
    types: ["Task 1 report", "Task 2 essay"],
    link: "test.html?id=W5",
    ready: true
  });
  D.PRACTICE.writing.push({
    title: "Writing Pack 6 — Task 1 & Task 2",
    sub: "2 full tasks + model answers",
    types: ["Task 1 report", "Task 2 essay"],
    link: "test.html?id=W6",
    ready: true
  });
})();
