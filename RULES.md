# How Training Block Builder builds plans

These rules drive the generated plans and the checks on uploaded plans. They come from widely used training plans and coaching books, plus published research where we use specific numbers. References are at the end, and unfamiliar terms are in the [Glossary](#glossary).

The guiding principle: **flag, don't forbid.** When something looks risky or ambitious, the app explains why and suggests fixes, and you always get the plan you choose. Expert mode turns the safety caps off entirely.

The rules follow the order a plan is built in:

1. [What does it ask you?](#1-what-does-it-ask-you)
2. [Where are you starting?](#2-where-are-you-starting)
3. [What are you training for?](#3-what-are-you-training-for)
4. [How much time do you have?](#4-how-much-time-do-you-have)
5. [What fills each week?](#5-what-fills-each-week)
6. [What happens when life gets in the way?](#6-what-happens-when-life-gets-in-the-way)
7. [What about uploaded and multisport plans?](#7-what-about-uploaded-and-multisport-plans)
8. [Glossary](#glossary)
9. [References](#references)

---

## 1. What does it ask you?

- **Goal:** race distance (5K, 10K, half, marathon) and an optional goal time.
- **Experience:** new to running, trained before, or train regularly. For new runners and anyone below the plan's starting floor: how long you can run right now without stopping.
- **Recent volume:** weekly miles or kilometers.
- **Timeline:** a race date or a plan length, and a start date. Race-date plans also ask about race-day weather.
- **Current fitness:** a recent race or time trial, or a best guess (labeled as such). Optional threshold heart rate, tested or a watch estimate.
- **Your week:** run days (3–6; 3 is flagged), long run day and hard workout day.
- **Strength:** days per week and equipment.
- **Units:** miles or kilometers.

## 2. Where are you starting?

Experience sets how plans start, how fast they build, and how many options you see.

| | New to running | Trained before | Train regularly |
| --- | --- | --- | --- |
| Run-walk start if you can't run 30 minutes yet | Yes | Yes, if below the starting floor | Yes, if below the starting floor |
| Workout wording | Plain language, effort out of 10, minutes shown | Standard | Standard |
| Strength start | 1 light session a week for the first month | As chosen | As chosen |
| Weekday run limit | 70 minutes | 70, 80 or 90 minutes | 70, 80 or 90 minutes |
| Build style | Steady | Steady | Steady, Daniels or Aggressive |
| Goal-check improvement range (12 weeks) | 5–10% | 3–6% | 1–3% |

### New runners: the run-walk start

- New runners, and anyone whose weekly volume is below the plan's starting floor, are asked how long they can run without stopping. A best guess is enough; an optional quick check is offered (5 minutes of brisk walking, then run at a talking pace until you need to walk).
- Under 30 minutes gets a run-walk phase first, in the style of Couch to 5K: three sessions a week with a rest day between each, run and walk intervals that lengthen each week (1 min run / 1.5 min walk up to 30 minutes continuous), a 5-minute walk to warm up and cool down, and an optional easy walk on a 4th day.
- Where you start depends on your answer: "not yet" and "under 5 minutes" start at the beginning, 5–15 minutes skips a few weeks, 15–25 minutes skips more. Any week can be repeated with one tap if it felt hard.
- If enough weeks remain after reaching 30 minutes, the regular plan takes over from about 3 × 30 minutes a week. If not, the whole plan is run-walk and ends with the race (walk breaks welcome) or, without a race date, a finish run (your first 5K, or 30 minutes non-stop). A race date that's too close compresses the progression and says so.
- Running words (easy, effort scale, strides, tempo, intervals, float, long run, cutback, taper, run-walk) are explained in the plan. Reading them is required before the plan is built only when it continues past run-walk.
- New runners get plain-language workouts (effort out of 10 instead of RPE, "pickups" instead of strides, minutes alongside distance) and lighter strength: one session a week for the first month, starting around 6 out of 10, technique first.

## 3. What are you training for?

### Distance changes the workouts, not the volume

- Volume is set by the runner, not the race distance. A 5K plan for an experienced runner can have as much running as a half marathon plan.
- 5K: VO2 intervals and fast reps, with threshold supporting. 10K: threshold-led, with VO2 supporting. Half and marathon: threshold and tempo work, then race-pace work in the peak phase.

### Paces and heart rate

- A recent race or time trial is converted to a 5K equivalent (Riegel's formula), and training paces are set from it in the style of Daniels' VDOT tables.
- Heart-rate targets are percentages of threshold heart rate. Short, fast reps use pace or effort instead, because heart rate lags on short intervals.

### Goal check

1. Project the benchmark to the goal distance: projected = benchmark time × (goal distance ÷ benchmark distance)^1.06 (Riegel).
2. Expected improvement by race day comes from your experience level (see the table above) for a 12-week plan. Shorter plans scale down in proportion; longer plans scale up to 1.5× at 24 weeks, flagged as less certain.
3. Projected range: fast end = projected × (1 − high %), slow end = projected × (1 − low %).
4. Rating: at or slower than the fast end is on track; up to 5% faster is ambitious; faster than that is a big stretch.

The check shows live on the benchmark screen and again on the plan. Big-stretch goals use projected pace for race-pace workouts, so nobody does reps at a pace they can't hold.

## 4. How much time do you have?

### Phases

- Base → build → peak → taper.
- Base is about a third to half of a half or full marathon plan, longer when your current volume is far below what the plan needs, shorter when you're already there.
- Taper: 5K about a week, 10K 7–10 days, half 1–2 weeks, marathon 2–3 weeks.
- Intensity by phase: base is strides and hills with at most one light session; build adds real quality work; peak is race-specific (half-marathon pace, or goal-pace miles inside marathon long runs); taper keeps short touches of race pace.

### Weekly volume

- Starts at your recent volume, with a small floor for new runners.
- **Steady build (default):** hold a level for about 3 weeks, cut back the 4th, then step up as much as about 20% (after Daniels' approach: hold volume 3–4 weeks, then add about a mile per run). Low starting volumes use the bigger steps; most plans step 10–15%.
- Timelines too short for that hold for 2 weeks with no cutbacks, still stepping at most about 20%. If the plan's usual peak still can't be reached, the plan peaks lower and says so.
- **Daniels build** (train regularly only): hold 3 weeks, then add about a mile per run day, up to 10 a week. No planned cutbacks.
- **Aggressive build** (train regularly only, asks for confirmation): step every 2 weeks by up to 30%, no cutbacks.

### When the usual peak won't fit

- Peak volume is time-aware: if your run days can't fit the usual peak within the long-run and weekday run limits at your easy pace, the plan peaks at what fits and suggests adding a run day.
- Runners who have trained before can raise the weekday run limit to 80 or 90 minutes. The extra is spread across easy runs (and the easy parts of workout days) rather than added to one run; recovery runs and the long run don't change.
- If you already run more than your days and limits can hold, weekday runs go up to 90 minutes so the plan doesn't cut your volume.
- Marathon plans stop for a "know what you're signing up for" page only when the peak lands more than about 15% under the usual peak **and** a different choice of days, weeks or weekday limit would fix it. When pace is the limit (even 6 days can't fit the usual mileage), the plan is built around time on your feet and says so in a note instead.

## 5. What fills each week?

### Two rules at every level

These can't be changed outside expert mode:

- No long run more than about 10% past the longest run of the past 4 weeks.
- No weekday run as long as the long run.

A 2025 study of about 5,200 runners found single-run jumps past the longest run of the past 30 days were the clearest injury predictor, more than week-to-week increases.

### Day layouts (half and marathon)

| Days | Layout |
| --- | --- |
| 3 (flagged) | Quality · tempo · long run |
| 4 | Quality · easy · tempo · long run |
| 5 | Quality · easy · tempo · long run · recovery |
| 6 | Easy · quality · easy (medium-long for marathon) · tempo · long run · recovery |

New runners get easier versions of the quality days. When marathon long runs carry goal-pace work in the peak phase, one of the other hard days is dialed down.

### Long runs

- Built toward a distance-specific peak, then capped: the lesser of about 25–30% of the week and 150 minutes, with a 20-mile ceiling (after Daniels). 5K and 10K long runs are shorter (60–90 minutes by experience) and stretch with a longer weekday run limit.
- Slower marathoners with 16+ weeks and a starting long run of about 6 miles take two dress-rehearsal long runs to 3 hours or 16 miles; every other long run stays under about 2.5 hours (informed by the Hansons approach of capping the long run and leaning on weekly volume).
- A long run over about 40% of the week is flagged, with fixes: add a short run, add a midweek medium-long run, run-walk, or a longer plan.
- Long runs are hard because of the distance, not the pace. Dress rehearsals practice race fueling, kit and goal-pace segments.

### Other runs

- No run under about 20–30 minutes; floors are set in time, not distance.
- Weekday runs are capped at the weekday run limit (70 minutes by default; 45 for recovery runs). On 5–6 day plans, extra volume goes into one midweek medium-long run (up to 70% of the long run or 90 minutes).
- Main sets are kept to about 60% of the day's distance so warm-up and cool-down fit.

### Workouts

- Hard days are very hard with very easy recoveries; easy days are truly easy, with strides for leg speed without fatigue.
- Tempo days default to float sets: threshold reps with a short float at steady pace instead of a full stop. Cruise intervals (Daniels) are used for 5K/10K threshold work.
- Race-pace work in long, continuous blocks is costly, so total race-pace volume is capped and broken into reps first.

### Strength

- Heavy, low-rep lifting plus jumps. Research on distance runners supports this: heavy resistance training and plyometrics improve running economy, with heavy loads and longer programs (10+ weeks) showing the larger effects.
- Templates by equipment: bodyweight, dumbbells/kettlebells, or barbell. A heavy day, a moderate day, and on 3-day plans a power day. Peak and taper drop to one maintenance session; no jumps in the last 10 days.
- Placed on hard run days, at least 48 hours apart, never the day before the long run. Strength backs off in the run plan's cutback weeks.
- Progression is by effort (RPE): when every set feels easier than its target, add load.
- Choosing no strength or bodyweight only shows a short note on why lifting matters. Any lifting is better than none.

### Race-day heat

- Warm or hot races get heat-adaptation work (easy runs in the warmest part of the day, or a post-run sauna or hot bath) in the two weeks before race week, warm-race practice on the last long runs, and a race-day pace adjustment.
- Expected slowdown is estimated at roughly 4–4.5 seconds per mile for each °C above about 15°C (59°F) for mid-pack marathoners, scaled down for shorter races. Most heat adaptation happens within 7–14 days.
- Overdressing to simulate heat isn't recommended.

## 6. What happens when life gets in the way?

### Moving or easing a day

- Any day's session can move to another day in the same week (it swaps with what's there, and strength moves with it).
- A hard workout can be swapped for an easy run of the same distance. It isn't made up later.
- After a move, back-to-back hard days and strength the day before the long run are flagged.
- Changes are saved by date and carry into calendar, Excel, watch files and Intervals.icu.

### Missed training

- A few days: carry on. About a week: carry on, swap in the missed week's most important session (long run > quality > tempo), and don't add the missed miles. Sick, hurt or 2+ weeks: step back before stepping up.
- Push back: plan-length plans shift later; race-date plans rebuild from next week at a lower volume, keeping the full taper.

## 7. What about uploaded and multisport plans?

- Two sessions a day at most; a brick counts as one.
- Two hard endurance sessions on one day are flagged unless it's a brick.
- Heavy legs pair with the easiest, lowest-impact session. Strength the day before a long or quality run is flagged; the day before a long ride or brick is fine.
- Weekend stacking (long ride or brick, then long run) is expected.
- A week with no rest day or easy-swim day is flagged.
- High-volume weeks (about 8+ endurance sessions or 10+ hours) should keep strength to 1–2 short sessions.

---

## Glossary

The app explains workout terms in plain words inside every plan (Whole plan → Running words). These are the terms used in this document.

**Phases and structure**

- **Base, build, peak, taper:** the four phases of a plan. Base builds volume with easy running; build adds harder workouts; peak is the most race-specific training; taper cuts volume so you start the race fresh.
- **Volume:** how much you run in a week, in miles or kilometers.
- **Starting floor:** the smallest weekly volume a plan for that distance starts from. Below it, new runners get the run-walk start.
- **Step-up:** an increase in weekly volume after holding a level for a few weeks.
- **Cutback week:** a lighter week every few weeks so your body can absorb the training.
- **Build style:** how fast volume steps up (Steady, Daniels or Aggressive).
- **Weekday run limit:** the longest a non-long run can be (70, 80 or 90 minutes).
- **Expert mode:** turns off the volume, distance and time safety caps.

**Runs and workouts**

- **Easy run:** slow enough to talk in full sentences. Most of a plan is easy running.
- **Recovery run:** shorter and slower than easy, the day after a hard session.
- **Long run:** the week's longest run, at easy pace.
- **Medium-long run:** a midweek run longer than other weekday runs but shorter than the long run, used on 5–6 day plans.
- **Dress rehearsal:** a marathon long run that practices race-day fueling, kit and goal pace.
- **Strides:** about 20 seconds quick and relaxed, with full recovery. Builds leg speed without fatigue.
- **Tempo / threshold:** comfortably hard, about the effort you could hold for an hour. You can say a few words but not hold a conversation.
- **Cruise intervals:** threshold-pace reps with short rests (Daniels).
- **Float:** a recovery at steady pace between reps, instead of stopping.
- **VO2 intervals:** hard reps of about 2–5 minutes, near 5K effort or a bit faster.
- **Fartlek:** unstructured speed play: faster for a minute or two, then easy, repeated.
- **Run-walk:** planned run and walk intervals. A way to build up, and a legitimate way to race.
- **Brick:** a bike session followed straight away by a run (multisport plans).

**Effort, pace and heart rate**

- **Effort (RPE):** rate of perceived exertion, how hard something feels from 1 to 10.
- **Benchmark:** the recent race or time trial your paces come from.
- **Riegel formula:** a standard way to predict a time at one distance from a time at another.
- **VDOT:** Jack Daniels' fitness score, which maps a race time to training paces.
- **Threshold heart rate (LTHR):** the heart rate you can hold for about an hour of hard running. Heart-rate zones are percentages of it.
- **Goal check:** compares your goal time to your projected race-day range and rates it on track, ambitious or big stretch.
- **Heat adaptation:** training in warmth so your body copes better with a hot race.

---

## References

### Plans and books we drew structure from

- Jack Daniels, *Daniels' Running Formula* — VDOT pace tables, cruise intervals, long-run limits, holding volume before increasing it.
- Luke Humphrey and Keith and Kevin Hanson, *Hansons Marathon Method* — 16-mile long-run cap, six days with three key sessions.
- Hal Higdon's training programs (5K, 10K, half and marathon; novice to advanced) — beginner structure and volumes.
- Greg McMillan, McMillan Running 5K and 10K plans — volume and long-run prerequisites by level.
- Pete Pfitzinger and Philip Latter, *Faster Road Racing* — 5K to half marathon volumes and medium-long runs.
- Brad Hudson and Matt Fitzgerald, *Run Faster from the 5K to the Marathon* — short-race training structure.
- NHS Couch to 5K and Jeff Galloway's run-walk method — run-walk progressions for new runners.

### Specific numbers

- Long-run guideline: [Canadian Running](https://runningmagazine.ca/?p=99607)
- Hansons method overview: [Marathon Handbook](https://marathonhandbook.com/hansons-marathon-method/); beginner plan volumes: [Final Surge](https://site.finalsurge.com/RPlan/CITYOFOAKS/CITYOAKS/443); long-run rationale: [Athletics Weekly](https://athleticsweekly.com/?p=45900)
- Plan volumes: [Higdon Marathon Novice 1](https://trainingpeaks.com/training-plans/running/marathon/tp-139218/hal-higdon-marathon-novice-1), [Higdon 5K Novice](https://trainingpeaks.com/training-plans/running/5km/tp-15910/hal-higdon-5k-novice), [Higdon 10K Intermediate](https://trainingpeaks.com/training-plans/running/10km/tp-15908/hal-higdon-10k-intermediate), [Higdon 10K Advanced](https://www.trainingpeaks.com/training-plans/running/10km/tp-4372/hal-higdons-10-k-advanced), [McMillan 5K plans](https://www.mcmillanrunning.com/tp_plans/5km), [Pfitzinger 8K–10K excerpt](https://canada.humankinetics.com/blogs/excerpt/training-for-an-8k-or-10k-race)
- Long-run share of weekly volume: [RunnersConnect](https://runnersconnect.net/?p=66988)
- Strength and running economy: [Heavy resistance vs plyometric training, Sports Medicine – Open (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9653533/); [Strength training methods and running economy, Sports Medicine (2024)](https://link.springer.com/article/10.1007/s40279-023-01978-y); [Strength training for distance runners, Sports Medicine (2018)](https://link.springer.com/article/10.1007/s40279-017-0835-7)
- Heat: [How much does heat slow your race pace, Outside](https://www.outsideonline.com/health/running/racing/race-strategy/how-much-does-heat-slow-your-race-pace/); [Heat and running speed, Marathon Handbook](https://marathonhandbook.com/heres-how-much-the-heat-it-affects-your-running-speed/); [Heat acclimation for endurance performance, Sports Medicine](https://pubmed.ncbi.nlm.nih.gov/25380791/)
- Single-run spikes and injury: [Frandsen et al., "How much running is too much?", British Journal of Sports Medicine (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12421110/)
- Race-time equivalents: Peter Riegel, "Athletic Records and Human Endurance," *American Scientist* (1981)
