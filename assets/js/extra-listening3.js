/* ============================================================
   IELTS Trainer — ek dinleme bölümleri (L8 + L9 + L10)
   SECTIONS'a L8/L9/L10 kaydı, PRACTICE.listening'e üç kayıt ekler.
   data.js'ten SONRA yüklenmelidir.
   ============================================================ */
(function () {
  var D = window.APP_DATA;
  if (!D || !D.SECTIONS || !D.PRACTICE || !D.PRACTICE.listening) throw new Error('APP_DATA yapısı eksik');

  D.SECTIONS.L8 = {
    "kind": "listening",
    "id": "L8",
    "label": "Listening",
    "emoji": "🎧",
    "title": "Section 2 — Meadowbank Science Museum: Booking a School Visit",
    "subtitle": "Questions 1–10 · Note completion",
    "minutes": 12,
    "audio": "assets/audio/listening-s8.mp3",
    "intro": "You will hear a woman giving information to teachers about arranging school visits to the Meadowbank Science Museum. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    "transcript": "Good afternoon, everyone, and thank you for coming to Meadowbank Science Museum. My name is Claire Dawson, and I'm the education officer here. Several of you have asked me for an update on arranging school visits this year, so over the next few minutes I'll explain the booking process, the costs, and a few practical points. Everything I say is also printed in the leaflet in your pack, so please don't worry about writing it all down.\n\nLet's begin with booking. All school visits must be booked at least one month in advance. I know our old leaflet said two weeks, and some of you may remember that, but the system changed last year, and I'm afraid we simply can't accept bookings made later than that, because the popular weeks in June are usually full by early May. You no longer book by phone or by email. Every booking is made through the booking form on our website, and you'll get a confirmation within one working day.\n\nNow, group sizes. The maximum number of students in a single visit is forty-five. We used to accept groups of sixty, but larger groups made lunchtimes and workshops very difficult, so the limit was lowered two years ago. If your year group is bigger than that, please arrange two visits on separate days, as we can't take extra students on a single booking.\n\nNext, money. Entry, including one workshop of your choice, costs seven pounds per student. That's an increase of one pound on last year, when the price was six pounds, but I hope you'll agree it's still excellent value for a full day out. Teachers always go free, and this year there's something new: for every six students you bring, one adult comes free of charge. A group of thirty students, for example, can be accompanied by five adults at no cost at all. Any additional adults pay the full adult price, which is twelve pounds.\n\nLet me say a word about lunch, because this is where school visits often go wrong. Our café is lovely, but it's designed for families and simply can't cope with a hundred students at once. School groups eat in the Discovery Room, the large space just past the entrance hall. Lunch slots are free of charge, but they must be requested on the booking form.\n\nA guided tour of the museum's highlights is included in every visit, and it lasts about thirty minutes. New this year is the planetarium, which has been a great success with schools. Adding a planetarium show costs two pounds per student, and because the shows sell out very quickly, please choose this option when you book — don't leave the decision until the day of your visit. Each show can take up to ninety people in total.\n\nFinally, a few practical points for your students. Comfortable shoes are essential, because the galleries are enormous. Everyone should bring a pencil and a water bottle, and water bottles can be refilled at the fountains near reception, as we can't allow drinks in the exhibition spaces themselves. Teachers, don't forget to ask for your free information pack when you book; it's full of worksheets and maps, and it saves you hours of preparation. And if you'd like to see everything for yourself before bringing a class, just ask us to arrange a planning visit: a free visit for teachers, without students, on any weekday afternoon.\n\nThat's all I wanted to cover this afternoon. If you have any questions, my colleague at the front desk will be glad to help. Thank you.",
    "groups": [
      {
        "title": "MEADOWBANK SCIENCE MUSEUM — SCHOOL VISIT BOOKING",
        "instr": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "lines": [
          "• Bookings must be made at least {{1}} in advance",
          "• Bookings are made using the online {{2}}",
          "• Maximum number of students per visit: {{3}}",
          "• Cost: £{{4}} per student, including one workshop",
          "• Free adult places: one for every {{5}} students",
          "",
          "LUNCH & EXTRAS",
          "• School groups eat lunch in the {{6}}",
          "• Planetarium show: add £{{7}} per student to your booking",
          "",
          "WHAT TO BRING",
          "• Students should each bring a pencil and a {{8}}",
          "• Teachers should ask for their free {{9}} when booking",
          "• Teachers may arrange a free {{10}} on a weekday afternoon"
        ],
        "qs": [
          {
            "n": 1,
            "answer": [
              "one month",
              "1 month"
            ],
            "explain": "She says visits 'must be booked at least one month in advance'. The old leaflet said two weeks — that is the trap."
          },
          {
            "n": 2,
            "answer": [
              "booking form",
              "the booking form"
            ],
            "explain": "'Every booking is made through the booking form on our website.' Phone calls and emails are no longer accepted — that is the trap."
          },
          {
            "n": 3,
            "answer": [
              "45",
              "forty-five",
              "forty five"
            ],
            "explain": "'The maximum number of students in a single visit is forty-five.' Groups of sixty were accepted in the past — that is the trap."
          },
          {
            "n": 4,
            "answer": [
              "7",
              "seven",
              "£7"
            ],
            "explain": "'Entry, including one workshop of your choice, costs seven pounds per student.' Last year the price was six pounds — that is the trap."
          },
          {
            "n": 5,
            "answer": [
              "6",
              "six"
            ],
            "explain": "'For every six students you bring, one adult comes free of charge.' The example of five adults is where the trap lies — the ratio itself is one adult for six students."
          },
          {
            "n": 6,
            "answer": [
              "Discovery Room",
              "the Discovery Room"
            ],
            "explain": "'School groups eat in the Discovery Room.' The café cannot cope with school groups — that is the trap."
          },
          {
            "n": 7,
            "answer": [
              "2",
              "two",
              "£2"
            ],
            "explain": "'Adding a planetarium show costs two pounds per student.' The guided tour is already included in the price; the show is the paid extra."
          },
          {
            "n": 8,
            "answer": [
              "water bottle",
              "a water bottle",
              "water bottles"
            ],
            "explain": "'Everyone should bring a pencil and a water bottle.' Drinks are not allowed in the exhibition spaces themselves."
          },
          {
            "n": 9,
            "answer": [
              "information pack",
              "free information pack"
            ],
            "explain": "She tells teachers to 'ask for your free information pack when you book' — it contains worksheets and maps."
          },
          {
            "n": 10,
            "answer": [
              "planning visit",
              "a planning visit"
            ],
            "explain": "'Just ask us to arrange a planning visit' — a free visit for teachers, without students, on a weekday afternoon."
          }
        ]
      }
    ]
  };

  D.SECTIONS.L9 = {
    "kind": "listening",
    "id": "L9",
    "label": "Listening",
    "emoji": "🎧",
    "title": "Section 3 — Feedback on a Draft Essay",
    "subtitle": "Questions 1–10 · Note completion",
    "minutes": 12,
    "audio": "assets/audio/listening-s9.mp3",
    "intro": "You will hear a university tutor, Doctor Bennett, giving feedback to her student, Tom, on the draft of an essay. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    "transcript": "Come in, Tom, and take a seat. Thanks for sending your essay draft over so early — I've read it twice, actually.\n\nOh, right. I wasn't sure whether you'd had time to look at it yet.\n\nI always start with the good news, so here it is: your structure is very clear. I could follow your argument from the first page to the last, and that's exactly what this module is asking for.\n\nThat's a relief. I spent a long time planning it before I wrote anything.\n\nIt shows. Now, the topic itself. At the moment you're writing about class size in general, and that's far too broad for a short essay. I'd narrow it down: look at the effect of class size on classroom behaviour, rather than on test scores, which is what most students choose.\n\nSo instead of exam results, I'd be looking at behaviour?\n\nClassroom behaviour, that's right. The research is more interesting, and the data are much easier to interpret.\n\nOK. And was there anything in the draft that simply didn't work?\n\nOne thing, yes. You quote the main theories very well, but you never describe a real classroom. I'd like you to add two case studies — schools where the class size changed and somebody studied what happened. Two is enough; please don't collect dozens.\n\nCase studies, in the main body, next to the theories?\n\nIn the main body, yes. The other problem is the introduction: it runs to nearly two pages, which is far too long, so cut it down to half a page. And while you're editing, fix the referencing — you've used footnotes, but this department uses the Harvard system, so that will need to change throughout.\n\nI'll sort out the footnotes tonight.\n\nGood. Now, before you collect any data of your own, I'd like you to run a pilot first. It doesn't have to be large — the idea is to find the weaknesses in your method while they are still cheap to fix.\n\nA pilot with, say, five pupils?\n\nFive is plenty for a pilot. For the main study, aim for thirty pupils — but not all from one school. I want your data to come from three schools, otherwise the results will tell us more about a single school than about class size.\n\nI was thinking of using my placement school, to be honest.\n\nI know, and it's tempting, but three schools. It's more work, and it means starting early.\n\nAlright. Is there anything I should read before I redraft the essay?\n\nYes — read the review by Chen. It summarises the whole field, and it's exactly the kind of overview you need.\n\nChen. Is that the one about behaviour?\n\nThat's the one. Two more things, and then I'll let you go. The deadline: the module page still says the fifth of May, but that's the old date. The submission date has been moved to the twelfth of May, so you've gained a week.\n\nThe twelfth — that's a big help.\n\nAnd the word limit. The handbook says two thousand five hundred words for most written work, but for this assignment the limit is two thousand. Don't go over it.\n\nTwo thousand. Understood. When shall we meet again?\n\nLet's say Thursday morning — same room, ten o'clock. Before we meet, I'll email the marking criteria, so bring them along and we'll check your outline against them together.\n\nPerfect. Thank you, Doctor Bennett.\n\nYou're welcome, Tom. Good luck with the redraft.",
    "groups": [
      {
        "title": "TUTORIAL NOTES — FEEDBACK ON AN ESSAY DRAFT",
        "instr": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "lines": [
          "• Narrow the topic: focus on the effect of class size on {{1}}",
          "• Add two {{2}} to the main body",
          "• Run a {{3}} before collecting your own data",
          "• Main study: collect data from {{4}}",
          "",
          "STRUCTURE & STYLE",
          "• Cut the {{5}} — it is nearly two pages long",
          "• Change the referencing to the {{6}} system",
          "• Read the review by {{7}} first",
          "",
          "ADMINISTRATION",
          "• New submission date: {{8}} May",
          "• Word limit for this assignment: {{9}}",
          "• Tutor will email the {{10}} before the next meeting"
        ],
        "qs": [
          {
            "n": 1,
            "answer": [
              "classroom behaviour",
              "behaviour"
            ],
            "explain": "'Look at the effect of class size on classroom behaviour, rather than on test scores.' Test scores are the obvious choice — that is the trap."
          },
          {
            "n": 2,
            "answer": [
              "case studies"
            ],
            "explain": "'I'd like you to add two case studies.' Quoting theories alone is not enough — the draft never describes a real classroom."
          },
          {
            "n": 3,
            "answer": [
              "pilot",
              "a pilot"
            ],
            "explain": "'I'd like you to run a pilot first.' It finds the weaknesses in the method while they are still cheap to fix."
          },
          {
            "n": 4,
            "answer": [
              "three schools",
              "3 schools"
            ],
            "explain": "'I want your data to come from three schools.' Relying on the placement school alone is the trap."
          },
          {
            "n": 5,
            "answer": [
              "introduction",
              "the introduction"
            ],
            "explain": "'The other problem is the introduction: it runs to nearly two pages.' It must be cut to half a page."
          },
          {
            "n": 6,
            "answer": [
              "Harvard",
              "Harvard system"
            ],
            "explain": "'This department uses the Harvard system.' The draft used footnotes — that is the trap."
          },
          {
            "n": 7,
            "answer": [
              "Chen",
              "review by Chen"
            ],
            "explain": "'Read the review by Chen.' It summarises the whole field and is the right starting point."
          },
          {
            "n": 8,
            "answer": [
              "twelfth",
              "the twelfth",
              "12th",
              "12"
            ],
            "explain": "'The submission date has been moved to the twelfth of May.' The module page still shows the old date, the fifth of May — that is the trap."
          },
          {
            "n": 9,
            "answer": [
              "two thousand",
              "2000"
            ],
            "explain": "'For this assignment the limit is two thousand.' The handbook mentions two thousand five hundred words for most written work — that is the trap."
          },
          {
            "n": 10,
            "answer": [
              "marking criteria",
              "the marking criteria"
            ],
            "explain": "'I'll email the marking criteria, so bring them along and we'll check your outline against them together.'"
          }
        ]
      }
    ]
  };

  D.SECTIONS.L10 = {
    "kind": "listening",
    "id": "L10",
    "label": "Listening",
    "emoji": "🎧",
    "title": "Section 4 — Predicting Volcanic Eruptions",
    "subtitle": "Questions 1–10 · Note completion",
    "minutes": 12,
    "audio": "assets/audio/listening-s10.mp3",
    "intro": "You will hear part of a lecture about the science of forecasting volcanic eruptions. Listen and complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
    "transcript": "Good afternoon, and welcome to this week's lecture in our series on natural hazards. Today I want to talk about one of the great practical achievements of modern geology: our growing ability to forecast volcanic eruptions, and to get people out of the way before they happen.\n\nLet me begin with what happens beneath a volcano as it wakes up. Deep underground, fresh magma begins to rise, and the first sign at the surface is almost always a burst of small earthquakes. Hundreds of tiny quakes shake the mountain, and monitoring teams call this an earthquake swarm. What matters is not just the total number of quakes, but their pattern: during a swarm, the daily count can climb from a handful of events to more than a hundred a day, and the quakes become shallower as the magma moves upwards. Networks of seismometers around the volcano record every one of them, and computers fix their positions within seconds.\n\nThe second signal is that the mountain begins to swell. As magma pushes into the chambers below, the ground above it inflates — a change of only a few centimetres, but a hugely important one. Swelling is measured by GPS stations on the slopes and by instruments called tiltmeters, which can sense movements of less than a thousandth of a degree.\n\nThe third and perhaps most reliable signal comes from gas. As magma approaches the surface, the pressure falls, and the gases that were dissolved in it escape through the crater. Carbon dioxide does increase, but the clearest warning comes from a sharp rise in sulphur dioxide, which can be measured both from the ground and from space.\n\nSpeaking of space — satellites play an increasingly important part. They scan the summit for so-called hot spots: sudden local changes in temperature where new magma has reached the surface. Put these signals together — earthquakes, swelling and gas — and a picture of the volcano's future begins to build.\n\nSo how good is the record? Let me give you two well-known examples. The first is Mount St Helens, in the United States, which erupted violently in 1980 after two months of earthquakes and visible swelling; scientists had warned that an eruption was likely, although the exact timing remained uncertain. The second example is Mount Pinatubo, in the Philippines, in 1991. There, the monitoring data were so clear that volcanologists were able to forecast the eruption in time, and tens of thousands of people were moved to safety before the explosion came. It is often described as one of the most successful predictions in the history of volcanology.\n\nHowever, forecasting is never a simple matter. Even when the science is good, somebody has to make a decision, and the genuinely hard part is knowing when to order an evacuation. Act too early and nothing happens, and people lose trust in the next warning; wait too long and lives are lost. That is why, in Iceland in 2021, some visitors complained that the wait was too long: the earthquake swarm there lasted about three weeks before the eruption finally began, and for most of that time nobody could say exactly when it would start. Many tourists had booked flights for a few days and went home before anything happened.\n\nA final point about death and damage. Films always show people running away from lava, but lava is slow and rarely kills anyone. Most deaths in historic eruptions have been caused by pyroclastic flows — fast clouds of hot gas and rock, like the ones that buried Pompeii.\n\nSo where is the field going next? Increasingly, computers are being trained to recognise the patterns that come before an eruption, an approach that researchers call machine learning. Human experts and algorithms working together may soon give us warnings that are both earlier and more reliable.\n\nThank you for listening. Next week, we move on to earthquakes.",
    "groups": [
      {
        "title": "LECTURE NOTES — PREDICTING VOLCANIC ERUPTIONS",
        "instr": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "lines": [
          "• The first warning sign: a burst of small quakes — an {{1}}",
          "• The daily count of quakes can rise to more than {{2}}",
          "• Ground swelling is detected by GPS and by instruments called {{3}}",
          "• The clearest gas warning: a sharp rise in {{4}}",
          "• Satellites detect 'hot spots' — sudden local changes in {{5}}",
          "",
          "FAMOUS CASES",
          "• Most successful prediction: Mount Pinatubo, Philippines, {{6}}",
          "• Iceland, 2021: the swarm lasted about {{7}} before the eruption",
          "",
          "CHALLENGES & THE FUTURE",
          "• The hardest decision: when to order an {{8}}",
          "• Most deaths are caused by {{9}}, not by lava",
          "• New tool: computers use {{10}} to recognise patterns"
        ],
        "qs": [
          {
            "n": 1,
            "answer": [
              "earthquake swarm",
              "an earthquake swarm"
            ],
            "explain": "'Monitoring teams call this an earthquake swarm.' It is the first sign that the volcano is waking up."
          },
          {
            "n": 2,
            "answer": [
              "a hundred",
              "100",
              "one hundred"
            ],
            "explain": "'The daily count can climb from a handful of events to more than a hundred a day.'"
          },
          {
            "n": 3,
            "answer": [
              "tiltmeters"
            ],
            "explain": "'Swelling is measured by GPS stations on the slopes and by instruments called tiltmeters.' GPS alone is only half of the answer."
          },
          {
            "n": 4,
            "answer": [
              "sulphur dioxide"
            ],
            "explain": "'The clearest warning comes from a sharp rise in sulphur dioxide.' Carbon dioxide also increases, but it is less reliable — that is the trap."
          },
          {
            "n": 5,
            "answer": [
              "temperature"
            ],
            "explain": "'Sudden local changes in temperature where new magma has reached the surface.'"
          },
          {
            "n": 6,
            "answer": [
              "1991"
            ],
            "explain": "'Mount Pinatubo, in the Philippines, in 1991.' Mount St Helens erupted in 1980 — that is the trap."
          },
          {
            "n": 7,
            "answer": [
              "three weeks",
              "3 weeks"
            ],
            "explain": "'The earthquake swarm there lasted about three weeks before the eruption finally began.' Tourists who had booked flights for only a few days left too early — that is the trap."
          },
          {
            "n": 8,
            "answer": [
              "evacuation",
              "an evacuation"
            ],
            "explain": "'The genuinely hard part is knowing when to order an evacuation.'"
          },
          {
            "n": 9,
            "answer": [
              "pyroclastic flows"
            ],
            "explain": "'Most deaths in historic eruptions have been caused by pyroclastic flows.' Lava is slow and rarely kills anyone — that is the trap."
          },
          {
            "n": 10,
            "answer": [
              "machine learning"
            ],
            "explain": "'An approach that researchers call machine learning.'"
          }
        ]
      }
    ]
  };

  D.PRACTICE.listening.push(
    {"title":"Section 2 — Meadowbank Science Museum: Booking a School Visit","sub":"Note completion · 10 questions","types":["Note completion"],"link":"test.html?id=L8","ready":true},
    {"title":"Section 3 — Feedback on a Draft Essay","sub":"Note completion · 10 questions","types":["Note completion"],"link":"test.html?id=L9","ready":true},
    {"title":"Section 4 — Predicting Volcanic Eruptions","sub":"Note completion · 10 questions","types":["Note completion"],"link":"test.html?id=L10","ready":true}
  );
})();
