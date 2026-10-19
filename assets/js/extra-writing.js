/* ============================================================
   IELTS Trainer — Writing Pack 2 (W2) + öz-değerlendirme rubriği
   Bu dosya data.js'ten SONRA yüklenmelidir:
     D.SECTIONS.W2  → yeni yazma paketi (Task 1 + Task 2, model cevaplı)
     D.PRACTICE.writing → W2 kartı eklenir
     D.EXTRA_WRITING.rubric → öğrencinin kendi cevabını puanladığı rubrik
   ============================================================ */
(function () {
  "use strict";

  var D = window.APP_DATA;
  if (!D) throw new Error("APP_DATA yok");
  if (!D.SECTIONS || !D.PRACTICE || !D.PRACTICE.writing) throw new Error("APP_DATA yapısı eksik");

  /* ------------------------------------------------------------
     W2 — Writing Pack 2 (Task 1: müze ziyaretçileri çubuk grafik,
     Task 2: uzaktan çalışma essay) — TÜM METİN İNGİLİZCE
     ------------------------------------------------------------ */
  var W2 = {
    kind: "writing",
    id: "W2",
    label: "Writing",
    emoji: "✍️",
    title: "Writing Pack 2 — Task 1 & Task 2",
    subtitle: "2 tasks · model answers · 10 extra prompts",
    minutes: 60,
    tasks: [
      {
        id: "t1",
        label: "Task 1",
        minutes: 20,
        minWords: 150,
        prompt: "The bar chart below shows the number of visitors to four museums in a European city in 2010 and 2020, measured in thousands.",
        chart: {
          caption: "Visitors to four museums in a European city, 2010 vs 2020 (thousands)",
          bars: [
            { label: "Science Museum", a: 420, b: 510 },
            { label: "Art Gallery", a: 380, b: 300 },
            { label: "Natural History Museum", a: 260, b: 340 },
            { label: "Maritime Museum", a: 140, b: 120 }
          ],
          years: ["2010", "2020"]
        },
        tips: [
          "Paraphrase the question in one sentence: what the chart shows, where, and which two years are compared.",
          "Write an overview with no figures — name the most visited museum and the general direction of change.",
          "Organise by trend: first the museums that gained visitors, then the ones that lost them.",
          "Include a difference or a total from the data (e.g. 'an increase of 90 thousand') to show you have processed the numbers.",
          "Aim for 165–185 words in 20 minutes, and use one unit (thousands) throughout."
        ],
        model: "The bar chart compares the number of visits made to four museums in a European city in 2010 and 2020, with the data given in thousands.\n\nOverall, the Science Museum was the most popular attraction in both years, and overall attendance rose slightly. Only the Art Gallery lost visitors; the other three museums either grew or changed very little.\n\nIn 2010, the Science Museum received 420 thousand visitors, more than any other site. This figure rose to 510 thousand by 2020, an increase of 90 thousand. The Natural History Museum followed a similar upward trend, climbing from 260 thousand visits in 2010 to 340 thousand a decade later, a gain of 80 thousand.\n\nThe Art Gallery, in contrast, saw its visitor numbers fall from 380 thousand to 300 thousand, a drop of 80 thousand that pushed it from second to third place. The Maritime Museum, the least popular site in both years, declined only slightly, from 140 thousand to 120 thousand visitors.\n\nIn total, the four museums attracted 1.2 million visitors in 2010, rising to 1.27 million in 2020."
      },
      {
        id: "t2",
        label: "Task 2",
        minutes: 40,
        minWords: 250,
        prompt: "In many companies, employees are now allowed to work from home for most of the week. Do the advantages of this way of working outweigh its disadvantages?",
        tips: [
          "State your verdict in the introduction — 'advantages outweigh disadvantages' — and keep it visible in the conclusion.",
          "Body 1: develop two or three advantages with concrete effects (time saved, wider recruitment, deeper concentration).",
          "Body 2: accept real drawbacks such as weaker teamwork and burnout risk, but explain how they can be managed.",
          "Use topic vocabulary precisely: flexible working, commute, collaboration, work-life balance, burnout.",
          "Aim for 270–290 words in 40 minutes; spend five minutes planning both body paragraphs first."
        ],
        model: "Working from home, once a rare privilege, has become routine in many companies, with staff spending most of the week away from the office. In my view, this shift brings clear advantages that outweigh the drawbacks, although careful management is needed.\n\nThe most obvious benefit is flexibility. Without a daily commute, employees save both time and money, and they can organise their day around periods of peak concentration instead of office noise and constant interruptions. Deep-thinking tasks such as writing or planning are often finished faster and to a higher standard at home, which benefits employers as much as workers. Companies also gain: they can cut spending on office space and recruit talented people regardless of where they live, which widens the pool of candidates. In addition, home working opens opportunities for parents or people with disabilities who find a fixed office schedule difficult.\n\nHowever, the drawbacks cannot be ignored. Teamwork often suffers when colleagues rarely meet face to face, because spontaneous conversations that spark ideas or solve small problems disappear. New employees in particular may struggle to learn from experienced staff or to feel part of the culture of the company. There is also a risk that the boundary between work and private life becomes blurred: without a commute to mark the end of the working day, some people find it hard to switch off, and over time this can lead to stress and burnout.\n\nIn conclusion, although remote work can weaken collaboration and make a healthy balance harder to maintain, these problems are manageable through regular office days and clear expectations. Since the gains in productivity, recruitment, freedom and cost are substantial, the advantages clearly outweigh the disadvantages."
      }
    ],
    extraPrompts: {
      t1: [
        "The bar chart below shows the number of tickets sold by four cinemas in one town in 2015 and 2023 (in thousands).",
        "The chart compares the average number of daily hours spent on four leisure activities by men and women in 2022.",
        "The bar chart shows the percentage of households with internet access in four countries in 2010 and 2022.",
        "The chart below shows how much electricity one country generated from four different sources in 2010 and 2022 (in terawatt hours)."
      ],
      t2: [
        "Some people believe that governments should spend more on public services such as healthcare and education than on the arts. To what extent do you agree or disagree?",
        "In many cities, life is becoming more expensive and more crowded. What problems does this cause, and what solutions could governments introduce?",
        "Some people think that traditional shops in city centres will soon disappear because of online shopping. Is this a positive or negative development?",
        "Many companies are considering a four-day working week for the same salary. What are the advantages and disadvantages of a shorter working week?",
        "Some people believe that employees should be required to retire at a fixed age, while others think people should be free to work for as long as they wish. Discuss both views and give your own opinion.",
        "In some countries, an increasing number of people are choosing to live alone. Why is this happening, and what effects does it have on society?"
      ]
    }
  };

  D.SECTIONS.W2 = W2;

  /* ------------------------------------------------------------
     PRACTICE — Writing sekmesine W2 kartını ekle
     ------------------------------------------------------------ */
  D.PRACTICE.writing.push({
    title: "Writing Pack 2 — Task 1 & Task 2",
    sub: "2 full tasks + model answers",
    types: ["Task 1 report", "Task 2 essay"],
    link: "test.html?id=W2",
    ready: true
  });

  /* ------------------------------------------------------------
     EXTRA_WRITING — öz-değerlendirme rubriği (render edilecek)
     ------------------------------------------------------------ */
  D.EXTRA_WRITING = {
    rubric: {
      title: "Writing self-check rubric",
      intro: "Score your own writing against the four official IELTS criteria below. Read your answer twice — once for the task and organisation, once for language — and tick each box only when you can point to a real example in your own text.",
      criteria: [
        {
          name: "Task Achievement",
          what: "How fully and accurately you answer the question — a clear overview of the data in Task 1, or a clear position with developed ideas in Task 2.",
          band6: "The task is covered, but the overview or position is unclear and some ideas are undeveloped.",
          band7: "All parts are covered; the overview or position is clear and main ideas are extended with reasons, examples or data.",
          checks: [
            "My overview (Task 1) or my opinion (Task 2) appears in the first and last paragraph and does not change.",
            "Every body paragraph supports the task with explanation, not just a statement.",
            "I did not add opinions or outside information to a Task 1 report."
          ]
        },
        {
          name: "Coherence & Cohesion",
          what: "How logically the answer is arranged and how smoothly sentences, paragraphs and ideas are connected.",
          band6: "Paragraphs and linkers are used, but some connections are faulty or mechanical, and referencing is sometimes unclear.",
          band7: "Clear overall progression; each paragraph has one central idea, and linking and referencing work naturally.",
          checks: [
            "Each paragraph has one topic, announced in its first sentence.",
            "I use a variety of linkers (however, therefore, by contrast) rather than repeating 'and' and 'but'.",
            "Every 'this', 'they' or 'it' clearly points back to a noun the reader has already met."
          ]
        },
        {
          name: "Lexical Resource",
          what: "The range, precision and naturalness of your vocabulary, including topic words and collocations.",
          band6: "Adequate vocabulary; meaning is clear but repetition is noticeable and some word choices are imprecise.",
          band7: "Flexible, appropriate choices with some less common vocabulary; occasional errors in word form or collocation.",
          checks: [
            "No key word is repeated more than three times — I used paraphrases instead.",
            "Task-specific terms are used correctly (e.g. 'rose steadily', 'overview', 'work-life balance').",
            "The spelling of every common word has been checked once."
          ]
        },
        {
          name: "Grammatical Range & Accuracy",
          what: "The variety of sentence structures you use and how often your sentences are error-free.",
          band6: "A mix of simple and complex sentences; errors in grammar and punctuation occur but rarely confuse the reader.",
          band7: "A range of complex structures with frequent error-free sentences; mistakes are minor and rare.",
          checks: [
            "My text includes relative clauses, conditionals or passives, not only simple sentences.",
            "Tenses match the time frame of the data (Task 1) or the question (Task 2).",
            "Subject–verb agreement, articles and plurals have been proofread before counting words."
          ]
        }
      ],
      quick: [
        "I answered the exact question asked, not a similar one I have practised before.",
        "A clear overview (Task 1) or a clear position (Task 2) is visible in the first paragraph.",
        "Every paragraph has one central idea with at least one developed example, reason or figure.",
        "I used precise data (Task 1) or concrete examples (Task 2), not only general statements.",
        "I checked the word count: at least 150 (Task 1) or 250 (Task 2) real words, within the time limit."
      ]
    }
  };
})();
