/* ============================================================
   IELTS Trainer — Writing Packs 7–11 (W7, W8, W9, W10, W11)
   Bu dosya data.js ve extra-writing.js'ten SONRA yüklenmelidir:
     D.SECTIONS.W7 … D.SECTIONS.W11 → beş yeni yazma paketi
     D.PRACTICE.writing            → beş yeni kart (W7–W11)
   Şema W1/W2 ile birebir aynıdır: her pakette kind/id/label/emoji/
   title/subtitle/minutes + tasks[t1,t2] (chart, tips, model) +
   extraPrompts{t1,t2}. Grafiklerdeki tüm sayılar ve model
   cevaplardaki tüm figürler script ile çapraz doğrulanmıştır.
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  if (!D) throw new Error("APP_DATA yok");
  if (!D.SECTIONS || !D.PRACTICE || !D.PRACTICE.writing) throw new Error("APP_DATA yapısı eksik");

  /* ------------------------------------------------------------
     W7 — Pack 7
     Task 1: hane başına otomobil sahipliği (2 ülke × 2 yıl)
     Task 2: tek kullanımlık plastik yasağı
     ------------------------------------------------------------ */
  var W7 = {
    kind: "writing",
    id: "W7",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 7 — Task 1 & Task 2",
    subtitle: "Pack 7 · 2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the number of cars per 100 households in Germany and Japan in 2005 and 2020.",
        chart: {
          caption: "Cars per 100 households in Germany and Japan, 2005 vs 2020",
          bars: [
            { label: "Germany", a: 90, b: 110 },
            { label: "Japan", a: 130, b: 120 }
          ],
          years: ["2005", "2020"]
        },
        tips: [
          "State the unit clearly at the start: the chart counts cars for every 100 households, not the share of households that own a car.",
          "Compare the two countries year by year: Japan led in 2005, but German ownership had almost caught up by 2020.",
          "Use precise trend language: 'climbed to', 'recorded a small decline', 'the gap narrowed from … to …'.",
          "Do not speculate about why ownership changed; a Task 1 report describes the data only.",
          "Aim for 165–185 words in 20 minutes and keep 'per 100 households' as your unit throughout."
        ],
        model: "The bar chart compares the number of cars per 100 households in Germany and Japan in 2005 and 2020.\n\nOverall, Japanese households owned more cars than German households in the first year shown, but the difference between the two countries had almost disappeared by 2020. Ownership increased in Germany over the fifteen-year period, whereas it declined slightly in Japan.\n\nIn 2005, there were 130 cars for every 100 Japanese households, compared with 90 in Germany, a gap of 40 vehicles. By 2020, the German figure had climbed to 110 cars per 100 households, an increase of 20.\n\nJapan, in contrast, recorded a small decline, from 130 to 120 cars per 100 households, a drop of 10. As a result, the gap between the two countries narrowed from 40 vehicles to only 10, so the two markets had become almost identical in size.\n\nIn neither country did the figure fall below 90 cars per 100 households during the period, and in Japan it remained above one car for every household throughout."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Many shops and food outlets still supply single-use plastic items such as bags, straws and cups, and some people believe that these products should be banned completely. To what extent do you agree or disagree?",
        tips: [
          "Answer the 'to what extent' wording: a full ban or a qualified ban, stated in the introduction and repeated in the conclusion.",
          "Body 1: give the environmental case for banning, with the persistence of plastic waste as your main reason.",
          "Body 2: concede the practical problems — medical plastics and food packaging — before explaining how a ban should be designed.",
          "Use topic vocabulary accurately: single-use, microplastics, disposable, alternatives, phase in, exemption.",
          "Aim for 270–290 words in 40 minutes and plan the two body paragraphs before you start writing."
        ],
        model: "Single-use plastics — the bags, straws, cups and wrappers that are thrown away after a few minutes of use — have become one of the most visible environmental problems of modern life. I largely agree that they should be banned, although any ban needs careful planning so that it does not create new difficulties.\n\nThe case for a ban is powerful. Such items are used briefly but persist in the environment for centuries, breaking down into microplastics that end up in soil, rivers and the food chain. Because they are cheap, they are handed out in enormous quantities, and only a small proportion is ever recycled. A ban attacks the problem at its source, and experience suggests that it works: when Ireland introduced a charge on plastic bags, their use fell sharply within months, and a legal prohibition is simply a stronger version of the same measure.\n\nHowever, a complete ban must be practical as well as principled. Some disposable plastics are essential: hospitals depend on sterile single-use items, and plastic packaging keeps food fresh and prevents waste. Banning these would cause more harm than good. Replacements also have to be affordable, otherwise poorer families carry the cost and small businesses lose customers. Governments should therefore target the most unnecessary products first, invest in reusable alternatives and recycling facilities, and give manufacturers clear deadlines to adapt.\n\nIn conclusion, I strongly support banning the plastic items that consumers use once and discard, because the damage they cause is out of all proportion to their convenience. A ban that is phased in, supported by cheap alternatives and limited medical exemptions, is the most effective way to cut plastic pollution."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows the average number of cars per household in four regions of one country in 2005 and 2020.",
        "The chart compares the distance travelled per person by car and by train in one country in 2000 and 2020 (in kilometres).",
        "The chart below shows the percentage of new cars sold that were electric in three European countries in 2015 and 2023.",
        "The line graph shows the number of road accidents recorded in one city between 2010 and 2022."
      ],
      t2: [
        "Some people believe that private cars should be banned from city centres and that only public transport should be allowed there. To what extent do you agree or disagree?",
        "In many cities, traffic congestion is becoming worse every year. What are the main causes of this problem, and what measures could reduce it?",
        "Some people think that the most effective way to cut pollution is to make public transport free of charge. Do you agree or disagree?",
        "Many young adults today delay buying a car, or never buy one at all. Why might this be the case, and is it a positive or negative development?",
        "Some governments are considering charging drivers for every kilometre they travel. What are the advantages and disadvantages of such a scheme?",
        "Some people argue that money spent on cycle lanes and pedestrian areas improves city life, while others say it should be spent on new roads. Discuss both views and give your own opinion."
      ]
    }
  };

  /* ------------------------------------------------------------
     W8 — Pack 8
     Task 1: çevrimiçi vs mağazada alışveriş harcaması
     Task 2: sosyal medya ve yalnızlık
     ------------------------------------------------------------ */
  var W8 = {
    kind: "writing",
    id: "W8",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 8 — Task 1 & Task 2",
    subtitle: "Pack 8 · 2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below compares the average amount of money that households in one country spent each month in shops and online in 2010 and 2023, measured in euros.",
        chart: {
          caption: "Average monthly household spending on shopping, 2010 vs 2023 (€)",
          bars: [
            { label: "In shops", a: 620, b: 480 },
            { label: "Online", a: 90, b: 410 }
          ],
          years: ["2010", "2023"]
        },
        tips: [
          "Two channels that move in opposite directions are best described one after the other, not mixed together.",
          "Include the totals in the last paragraph: €710 a month in 2010 and €890 in 2023.",
          "Use ratio language correctly — online spending was 'more than four times higher' in 2023, not 'double'.",
          "Mention the shrinking gap between the two channels (€530 in 2010, only €70 in 2023).",
          "Aim for 165–185 words in 20 minutes, and write the currency symbol once for each figure."
        ],
        model: "The bar chart compares the average amount of money that households in one country spent each month on shopping in physical shops and online in 2010 and 2023, in euros.\n\nOverall, monthly spending on shopping rose over the period, and there was a striking shift from shops to the internet. In-store spending fell, while online spending increased more than fourfold and almost matched it by the end of the period.\n\nIn 2010, households spent €620 a month in shops, compared with only €90 online, so shops took almost seven times as much money as websites. Thirteen years later, the figure for in-store shopping had fallen to €480, a decline of €140.\n\nOnline spending, by contrast, climbed from €90 to €410, an increase of €320, which narrowed the gap between the two channels from €530 to just €70. Monthly outlay on shopping as a whole rose from €710 to €890.\n\nBy 2023, then, the internet had become almost as important as traditional shops as a place to spend money, although physical stores still attracted slightly more of it."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Some people say that social media has made users feel more lonely and isolated rather than more connected. To what extent do you agree or disagree?",
        tips: [
          "A 'to what extent' question invites a qualified position: agree in part, then define the condition that decides the effect.",
          "Body 1: explain the mechanisms of loneliness — passive scrolling, comparison, replacing face-to-face contact.",
          "Body 2: show the opposite case with real groups: isolated people, carers, people with disabilities, practical coordination.",
          "Keep your vocabulary precise: passive use, curated content, comparison, social ties, screen time.",
          "Aim for 270–290 words in 40 minutes and keep your position visible in the conclusion."
        ],
        model: "Social media promised to connect the world, yet many users report feeling lonelier than ever. I partly agree that these platforms increase loneliness, although the effect depends far more on how they are used than on the technology itself.\n\nThere are good reasons to see social media as a source of isolation. Online contact often replaces the face-to-face meetings that build genuine friendship: seeing a friend for coffee demands time and effort, while liking a photograph takes a second. Studies have repeatedly found that heavy users report higher levels of anxiety and lower satisfaction with their lives, especially teenagers who compare their own circumstances with the carefully edited versions that others present. In addition, the endless stream of updates can create the impression that everybody else is enjoying company and success, leaving the viewer feeling excluded even when surrounded by people.\n\nHowever, blaming the technology alone oversimplifies the issue. For those who are physically isolated — people in remote areas, people with disabilities or parents caring for small children — messaging apps and online communities are often the only available form of contact, and removing them would deepen loneliness rather than relieve it. Many users also rely on these platforms to arrange real meetings, share practical help with neighbours or organise local events. The decisive factor appears to be active use, in which someone writes to a particular person, as opposed to passive scrolling through the lives of strangers.\n\nIn conclusion, I agree that social media can intensify loneliness, particularly when it substitutes comparison for conversation, but it is not isolating by nature. Used with limits and combined with offline relationships, it can support human connection instead of eroding it."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below compares the amount of money spent in supermarkets and in corner shops in one country in 2010 and 2023 (in billions of euros).",
        "The chart shows the percentage of people in four age groups who bought clothes online in 2015 and 2023.",
        "The line graph shows the number of visits to shopping centres in one city between 2010 and 2023 (in millions).",
        "The chart below compares how four age groups in one country paid for their purchases in 2023 (cash, card or phone)."
      ],
      t2: [
        "Some people say that social media companies should be required to remove fake news and harmful content from their platforms. To what extent do you agree or disagree?",
        "In many countries, children spend several hours a day on social media. What problems does this cause, and what solutions could parents and schools introduce?",
        "Some people believe that friendships formed online are less valuable than friendships formed face to face. To what extent do you agree or disagree?",
        "Advertising on social media is now more widespread than advertising on television. Is this a positive or negative development?",
        "Many people find it hard to concentrate on work or study because they check their phones constantly. Why is this happening, and what could be done about it?",
        "Some employees think they should have the right to ignore work messages outside working hours. Discuss this view and give your own opinion."
      ]
    }
  };

  /* ------------------------------------------------------------
     W9 — Pack 9
     Task 1: uluslararası turist sayıları (4 ülke × 2 yıl)
     Task 2: aşırı turizmi sınırlama önlemleri
     ------------------------------------------------------------ */
  var W9 = {
    kind: "writing",
    id: "W9",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 9 — Task 1 & Task 2",
    subtitle: "Pack 9 · 2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the number of international tourist arrivals in four countries in 2010 and 2023, measured in millions.",
        chart: {
          caption: "International tourist arrivals in four countries, 2010 vs 2023 (millions)",
          bars: [
            { label: "Spain", a: 53, b: 84 },
            { label: "Thailand", a: 16, b: 28 },
            { label: "Japan", a: 9, b: 25 },
            { label: "Egypt", a: 14, b: 15 }
          ],
          years: ["2010", "2023"]
        },
        tips: [
          "Group by size first: the leading destination, then the rest in order of arrivals.",
          "Note the one country that barely changed (Egypt) — a stable figure is as worth reporting as a rise.",
          "Express growth as multiples where it is striking: Japan's arrivals almost tripled.",
          "Finish with the combined total for the four countries (92 million, then 152 million).",
          "Aim for 165–185 words in 20 minutes, and use 'million' consistently rather than mixing units."
        ],
        model: "The bar chart compares the number of international tourist arrivals in four countries — Spain, Thailand, Japan and Egypt — in 2010 and 2023, with the data given in millions.\n\nOverall, every country welcomed more foreign visitors in 2023 than in 2010, and Spain remained the most popular destination by a clear margin. Growth was fastest in Japan, whereas Egyptian tourism barely changed.\n\nSpain received 53 million international tourists in 2010 and 84 million in 2023, a rise of 31 million and easily the largest figure in the chart. Thailand followed a similar pattern, its arrivals increasing from 16 million to 28 million, a gain of 12 million.\n\nJapan, by contrast, started from a low base of 9 million visitors but reached 25 million by 2023, which represents almost a threefold increase. Egypt was the least dynamic market: its arrivals moved only marginally, from 14 million to 15 million.\n\nTaken together, the four destinations attracted 92 million visitors in 2010 and 152 million in 2023, an overall increase of 60 million."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "In some popular destinations, tourism has grown so quickly that residents can no longer enjoy their own towns and the environment is being damaged. Some people therefore believe that governments should limit the number of tourists in such places. To what extent do you agree or disagree?",
        tips: [
          "Define the problem in your own words before arguing: overtourism, crowded public space, pressure on housing.",
          "Body 1: the damage caused by unlimited visitor numbers — rents, congestion, fragile sites, seasonal low-paid work.",
          "Body 2: concrete measures that have worked (entry fees, timed tickets, tourist taxes, caps) and why they help.",
          "Concede one limit to your position: a total ban would destroy local livelihoods and make cities exclusive.",
          "Aim for 270–290 words in 40 minutes and finish by restating your position with its condition attached."
        ],
        model: "Tourism supports millions of jobs, yet in destinations such as Venice and Barcelona it has grown until it crowds out the very people who live there. I agree that governments should intervene, although limiting visitor numbers should be one tool among several rather than the only answer.\n\nThe problems created by uncontrolled tourism are well documented. When millions of visitors arrive each year, housing is converted into short-term holiday lets, and rents rise so steeply that young local people can no longer afford to stay in the area where they grew up. Public space becomes congested, water and waste systems struggle in the busiest months, and historic sites suffer damage from sheer numbers of visitors. In resort towns, seasonal, low-paid work can also replace more stable industries, weakening the local economy.\n\nGovernments therefore have a strong case for acting. Measures that have proved effective elsewhere include entry fees or timed tickets for the most fragile attractions, taxes on cruise passengers and hotel stays, and daily caps on visitor numbers at famous landmarks. Planning rules that restrict new hotels and public investment in local transport and housing discourage growth that residents cannot absorb. Such policies generate revenue to repair the damage visitors cause, and they protect the attractions on which the industry itself depends.\n\nRestrictions must nevertheless be applied fairly. Banning tourists outright would destroy livelihoods in countries where hospitality provides a large share of employment, and very high fees risk turning famous cities into destinations for the wealthy alone.\n\nIn conclusion, governments should limit tourist numbers at the most overstretched sites while investing the money raised in local services. Without such action, the places that attract visitors will gradually lose the character that made them worth seeing."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows the number of international tourists visiting three coastal regions of one country in 2010 and 2023 (in millions).",
        "The chart compares the average amount spent per day by tourists from four countries in 2023 (in US dollars).",
        "The line graph shows the number of visitors to a national park between 2010 and 2023, together with the proportion who arrived by car.",
        "The table below gives the number of hotel rooms and the average room occupancy rate in one city in 2010 and 2023."
      ],
      t2: [
        "Some people believe that low-cost flights have made travel affordable for ordinary families and should therefore be encouraged. To what extent do you agree or disagree?",
        "Many tourist destinations receive most of their visitors in only two or three months of the year. What problems does this create, and how could it be solved?",
        "Some people think that international tourism does more harm than good to local cultures. To what extent do you agree or disagree?",
        "In some countries, tourism now provides a larger share of national income than farming or manufacturing. Is this a positive or negative development?",
        "Some people say that visiting a country is the best way to learn about it, while others believe that books and documentaries are just as useful. Discuss both views and give your own opinion.",
        "Governments often spend public money on campaigns to attract tourists to their regions. Why do they do this, and can such spending be justified?"
      ]
    }
  };

  /* ------------------------------------------------------------
     W10 — Pack 10
     Task 1: evlerde geri dönüşüm oranları (4 ülke × 2 yıl)
     Task 2: kültürel mirasa devlet bütçesi
     ------------------------------------------------------------ */
  var W10 = {
    kind: "writing",
    id: "W10",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 10 — Task 1 & Task 2",
    subtitle: "Pack 10 · 2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the percentage of household waste that was recycled in four countries in 2005 and 2020.",
        chart: {
          caption: "Household waste recycled in four countries, 2005 vs 2020 (%)",
          bars: [
            { label: "Germany", a: 46, b: 62 },
            { label: "South Korea", a: 49, b: 57 },
            { label: "United Kingdom", a: 26, b: 44 },
            { label: "Spain", a: 32, b: 29 }
          ],
          years: ["2005", "2020"]
        },
        tips: [
          "Percentages are compared in points, not in units: write 'a rise of 16 percentage points', never '16% higher'.",
          "Name the two countries that swapped places at the top (South Korea led in 2005, Germany in 2020).",
          "Report the single fall (Spain) in its own paragraph or sentence so that it stands out.",
          "Use the average of the four figures as your final sentence to show you have processed the data.",
          "Aim for 165–185 words in 20 minutes and check every point difference against the chart."
        ],
        model: "The bar chart compares the proportion of household waste that was recycled in four countries — Germany, South Korea, the United Kingdom and Spain — in 2005 and 2020.\n\nOverall, recycling rates improved in three of the four countries, and Germany recorded the highest figure in both years. Spain was the only nation where the percentage of waste recycled fell.\n\nIn 2005, South Korea recycled 49% of its household waste, slightly ahead of Germany on 46%, while the United Kingdom managed just 26% and Spain 32%. By 2020, Germany had moved into first place, recycling 62% of household waste, an increase of 16 percentage points.\n\nThe United Kingdom showed the steepest improvement across the whole period, climbing from 26% to 44%, a rise of 18 percentage points. South Korea also progressed, though more modestly, from 49% to 57%.\n\nSpain, by contrast, saw its rate decline from 32% to 29%, a fall of three percentage points. On average, the four countries recycled 38% of household waste in 2005 and 48% of it in 2020."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "Some people believe that governments should spend a large part of their budget on preserving cultural heritage, such as museums and historic buildings, even when that money could be spent on hospitals and schools. To what extent do you agree or disagree?",
        tips: [
          "Show that you understand the opportunity cost: state clearly that healthcare and education come first.",
          "Body 1: justify heritage spending — irreplaceable buildings, visitor income, local jobs, shared identity.",
          "Body 2: accept the critics' point and offer funding solutions (tickets, sponsorship, partnerships) rather than a flat refusal.",
          "Avoid vague praise of culture: use concrete terms such as maintenance, restoration, revenue and at risk.",
          "Aim for 270–290 words in 40 minutes and end with a balanced formula that keeps your position clear."
        ],
        model: "Few public spending debates divide opinion as sharply as culture. Some argue that money spent on museums and historic buildings is taken from hospitals and schools. While I accept that health and education must come first, I believe governments should continue to fund cultural heritage generously rather than treat it as a luxury.\n\nThe strongest argument for such spending is that it preserves what cannot be replaced. A medieval cathedral, once lost, can never be rebuilt, and the cost of neglect usually proves far higher than the cost of maintenance. Heritage also has economic value: museums and historic sites draw visitors, support hotels and guides, and provide jobs in regions with little other industry. These places also give communities a sense of identity, and they are often free to enter, which makes them available to citizens who cannot afford commercial entertainment.\n\nNevertheless, the critics have a point. Governments with limited budgets must prioritise, and no restored palace can justify a hospital with too few beds; heritage funding should therefore be a modest, stable share of the budget rather than a competitor to essential services. There are also more efficient ways to pay for culture. Entrance fees for foreign visitors, private sponsorship and partnerships with companies can cover part of the cost, letting the state concentrate on the buildings most at risk. Restoration with no plan for how a site will be used is simply waste.\n\nIn conclusion, I do not accept that cultural heritage should be funded at any price, but neither should it be treated as optional. A balance between guaranteed public funds for the most important sites and tickets or sponsorship for the rest protects both public health and culture."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows the amount of household waste produced per person in four countries in 2005 and 2020 (in kilograms per year).",
        "The chart compares the percentage of plastic, paper and glass waste that was recycled in one country in 2020.",
        "The line graph shows the amount of waste sent to landfill and the amount recycled in one city between 2005 and 2022 (in thousands of tonnes).",
        "The table below shows how households in one country disposed of four different types of waste in 2020 (in percentages)."
      ],
      t2: [
        "Some people believe that individuals can do very little to protect the environment and that only governments and large companies can make a real difference. To what extent do you agree or disagree?",
        "In some countries museums charge no entrance fee, while in others they depend on ticket sales. What are the advantages and disadvantages of free entry to museums?",
        "Some people think that old buildings should be replaced by modern ones because they are expensive to repair. To what extent do you agree or disagree?",
        "Recycling is now common in many households. Why is it still difficult to increase recycling rates, and what could be done to improve them?",
        "Some people argue that money spent on space exploration would be better used to protect the environment and cultural sites on Earth. Do you agree or disagree?",
        "Should governments require households to separate their rubbish, with fines for those who do not? Discuss both views and give your own opinion."
      ]
    }
  };

  /* ------------------------------------------------------------
     W11 — Pack 11
     Task 1: halk kütüphanesi ziyaretçi sayıları (4 şube × 2 yıl)
     Task 2: emeklilik yaşının yükseltilmesi
     ------------------------------------------------------------ */
  var W11 = {
    kind: "writing",
    id: "W11",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 11 — Task 1 & Task 2",
    subtitle: "Pack 11 · 2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the number of visits made to four public libraries in one city in 2012 and 2022, measured in thousands.",
        chart: {
          caption: "Visits to four public libraries in one city, 2012 vs 2022 (thousands)",
          bars: [
            { label: "Central Library", a: 620, b: 480 },
            { label: "Riverside", a: 240, b: 310 },
            { label: "Eastgate", a: 180, b: 260 },
            { label: "Northfield", a: 150, b: 96 }
          ],
          years: ["2012", "2022"]
        },
        tips: [
          "Group the branches by direction of change: the two that lost visits first, then the two that gained.",
          "Describe the Central Library as dominant — in 2012 it received more visits than the other three combined.",
          "Convert large totals in the final paragraph: 1.19 million visits in 2012, 1.15 million in 2022.",
          "Compare branch sizes as well as totals: Eastgate overtook Riverside's earlier figure.",
          "Aim for 165–185 words in 20 minutes and use the same unit (thousands) for every branch."
        ],
        model: "The bar chart compares the number of visits made to four public libraries in one city in 2012 and 2022, with the figures given in thousands.\n\nOverall, the city's libraries attracted slightly fewer visits at the end of the period than at the start, and the Central Library remained by far the busiest branch. Only the two smaller branches gained users.\n\nIn 2012, the Central Library recorded 620 thousand visits, more than the other three branches combined. By 2022, however, its figure had fallen to 480 thousand, a drop of 140 thousand. Northfield, the smallest branch, followed the same downward path, its visits declining from 150 thousand to 96 thousand.\n\nThe two remaining libraries moved in the opposite direction. Riverside rose steadily from 240 thousand to 310 thousand visits, while Eastgate grew faster still, from 180 thousand to 260 thousand, an increase of 80 thousand that took it past Riverside's 2012 figure.\n\nIn total, the four libraries were visited 1.19 million times in 2012 and 1.15 million times in 2022."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "In many countries people are living longer and healthier lives, and some governments are therefore considering raising the retirement age. Do the advantages of raising the retirement age outweigh its disadvantages?",
        tips: [
          "This is an outweigh question, so give a verdict in the introduction and defend it in the conclusion.",
          "Body 1: the financial logic — longer retirements, fewer contributors, pension sustainability.",
          "Body 2: the human costs — physically demanding jobs, blocked promotion for younger staff, poverty for early leavers.",
          "Use precise terms: pension system, contribution, workforce, statutory age, exemption, phased increase.",
          "Aim for 270–290 words in 40 minutes, and let your final paragraph set the condition for your verdict."
        ],
        model: "As populations age, governments in many countries are debating whether people should remain in work for longer. In my view, raising the retirement age brings substantial advantages, but only if it is introduced gradually and fairly; otherwise the drawbacks outweigh the gains.\n\nThe main argument in favour is financial. If the average person retires earlier and lives longer, pension systems must support a growing number of people with contributions from a shrinking workforce. Raising the retirement age spreads that burden more fairly, keeps the system solvent and reduces the need for steep tax increases or cuts to benefits. There are practical benefits as well: many employees in their sixties remain highly skilled, so keeping them in work preserves experience that would otherwise be lost, while allowing older people to stay socially active, which is linked to better physical and mental health.\n\nAgainst these benefits stand real costs. People in physically demanding jobs — builders, nurses, farmers — may simply be unable to continue until sixty-seven or seventy, and raising the age for everyone would penalise them unfairly. Older employees can also block promotion for younger staff where jobs are scarce, which may push youth unemployment higher. Those who leave work early for health or family reasons could end up with smaller pensions and poverty in old age.\n\nIn conclusion, a gradual rise in the retirement age is justified and, given demographic change, largely unavoidable; however, it must be combined with flexible exemptions for heavy manual work and better support for those who cannot continue. Older workers who wish to stay on should also be offered part-time hours. Handled in this way, the advantages clearly outweigh the disadvantages."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows the number of books borrowed from four libraries in one region in 2012 and 2022 (in thousands).",
        "The chart compares library membership among three age groups in one country in 2012 and 2022 (as a percentage of each group).",
        "The line graph shows the number of visits to public libraries and to cinemas in one country between 2010 and 2022 (in millions).",
        "The table below gives the opening hours and the number of staff employed in four libraries in 2022."
      ],
      t2: [
        "Some people believe that public libraries are no longer necessary now that most information can be found online. To what extent do you agree or disagree?",
        "In many countries, older workers who leave their jobs find it difficult to find new employment. What problems does this cause for individuals and for the economy, and what could be done about it?",
        "Some people think that younger and older employees should have the same opportunities for training and promotion. Discuss both views and give your own opinion.",
        "Public money is sometimes spent on sports centres, swimming pools and libraries rather than on cutting taxes. What are the advantages and disadvantages of spending public money on such facilities?",
        "In some countries a growing number of people continue working after the age of sixty-five. Why is this happening, and what effects does it have on society?",
        "Some people say that retired people should be encouraged to do voluntary work in their communities. To what extent do you agree or disagree?"
      ]
    }
  };

  /* ------------------------------------------------------------
     SECTIONS kayıt defterine ekleme
     ------------------------------------------------------------ */
  D.SECTIONS.W7 = W7;
  D.SECTIONS.W8 = W8;
  D.SECTIONS.W9 = W9;
  D.SECTIONS.W10 = W10;
  D.SECTIONS.W11 = W11;

  /* ------------------------------------------------------------
     PRACTICE — Writing sekmesine 5 kart
     ------------------------------------------------------------ */
  [
    { title: "Writing Pack 7 — Task 1 & Task 2", sub: "2 full tasks + 10 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W7", ready: true },
    { title: "Writing Pack 8 — Task 1 & Task 2", sub: "2 full tasks + 10 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W8", ready: true },
    { title: "Writing Pack 9 — Task 1 & Task 2", sub: "2 full tasks + 10 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W9", ready: true },
    { title: "Writing Pack 10 — Task 1 & Task 2", sub: "2 full tasks + 10 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W10", ready: true },
    { title: "Writing Pack 11 — Task 1 & Task 2", sub: "2 full tasks + 10 extra prompts + model answers", types: ["Task 1 report", "Task 2 essay"], link: "test.html?id=W11", ready: true }
  ].forEach(function (card) { D.PRACTICE.writing.push(card); });
})();
