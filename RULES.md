# How Training Block Builder builds plans

These rules drive the generated plans and the checks on uploaded plans. They come from widely used training plans and coaching books, plus published research where we use specific numbers. References are at the end.

The guiding principle: **flag, don't forbid.** When something looks risky or ambitious, the app explains why and suggests fixes, and you always get the plan you choose. Expert mode turns the safety caps off entirely.

## Inputs

Goal distance (5K, 10K, half, marathon); experience (new, trained before, train regularly); recent weekly volume; race date or plan length; start date; a recent race or time trial (or a best guess, labeled as such); optional goal time; optional threshold heart rate (tested or watch estimate); run days per week (3–6; 3 is flagged); long run day and hard workout day; strength days and equipment; units; and race-day weather for race-date plans.

## Phases

- Base → build → peak → taper.
- Base is about a third to half of a half or full marathon plan, longer when your current volume is far below what the plan needs, shorter when you're already there.
- Taper: 5K about a week, 10K 7–10 days, half 1–2 weeks, marathon 2–3 weeks.
- Intensity by phase: base is strides and hills with at most one light session; build adds real quality work; peak is race-specific (half-marathon pace, or goal-pace miles inside marathon long runs); taper keeps short touches of race pace.

## Weekly volume

- Volume is set by the runner, not the race distance. 5K and 10K plans scale with experience; the distance changes the mix of workouts.
- Starts at your recent volume, with a small floor for new runners.
- Builds in steps: hold a level for about 3 weeks, cut back the 4th, then step up about 10–15% (after Daniels' approach of holding volume before increasing it).
- Short timelines hold for 2 weeks and step up to about 20%. If the plan's usual peak still can't be reached, the plan peaks lower and says so.
- Peak volume is time-aware: if your run days can't fit the usual peak within the long-run and single-run caps at your easy pace, the plan peaks at what fits and suggests adding a run day.

## Long runs

- Built toward a distance-specific peak, then capped: the lesser of about 25–30% of the week and 150 minutes, with a 20-mile ceiling (after Daniels).
- Slower marathoners with 16+ weeks and a starting long run of about 6 miles take two dress-rehearsal long runs to 3 hours or 16 miles; every other long run stays under about 2.5 hours (informed by the Hansons approach of capping the long run and leaning on weekly volume).
- A long run over about 40% of the week is flagged, with fixes: add a short run, add a midweek medium-long run, run-walk, or a longer plan.
- Long runs are hard because of the distance, not the pace. Dress rehearsals practice race fueling, kit and goal-pace segments.

## Other runs

- No run under about 20–30 minutes; floors are set in time, not distance.
- Single runs are capped at about 70 minutes (45 for recovery runs). On 5–6 day plans, extra volume goes into one midweek medium-long run (up to 70% of the long run or 90 minutes).
- Main sets are kept to about 60% of the day's distance so warm-up and cool-down fit.

## Day layouts (half and marathon)

| Days | Layout |
| --- | --- |
| 3 (flagged) | Quality · tempo · long run |
| 4 | Quality · easy · tempo · long run |
| 5 | Quality · easy · tempo · long run · recovery |
| 6 | Easy · quality · easy (medium-long for marathon) · tempo · long run · recovery |

New runners get easier versions of the quality days. When marathon long runs carry goal-pace work in the peak phase, one of the other hard days is dialed down.

## Workouts

- Hard days are very hard with very easy recoveries; easy days are truly easy, with strides for leg speed without fatigue.
- Tempo days default to float sets: threshold reps with a short float at steady pace instead of a full stop. Cruise intervals (Daniels) are used for 5K/10K threshold work.
- 5K: VO2 intervals and fast reps, with threshold supporting. 10K: threshold-led, with VO2 supporting.
- Race-pace work in long, continuous blocks is costly, so total race-pace volume is capped and broken into reps first.

## Paces and heart rate

- A recent race or time trial is converted to a 5K equivalent (Riegel's formula), and training paces are set from it in the style of Daniels' VDOT tables.
- Heart-rate targets are percentages of threshold heart rate. Short, fast reps use pace or effort instead, because heart rate lags on short intervals.
- Goal check:
  1. Project the benchmark to the goal distance: projected = benchmark time × (goal distance ÷ benchmark distance)^1.06 (Riegel).
  2. Expected improvement by race day: about 5–10% for new runners, 3–6% for runners who've trained before, 1–3% for runners who train regularly, for a 12-week plan. Shorter plans scale down in proportion; longer plans scale up to 1.5× at 24 weeks, flagged as less certain.
  3. Projected range: fast end = projected × (1 − high %), slow end = projected × (1 − low %).
  4. Rating: at or slower than the fast end is on track; up to 5% faster is ambitious; faster than that is a big stretch.
  The check shows live on the benchmark screen and again on the plan. Big-stretch goals use projected pace for race-pace workouts, so nobody does reps at a pace they can't hold.

## Strength

- Heavy, low-rep lifting plus jumps. Research on distance runners supports this: heavy resistance training and plyometrics improve running economy, with heavy loads and longer programs (10+ weeks) showing the larger effects.
- Templates by equipment: bodyweight, dumbbells/kettlebells, or barbell. A heavy day, a moderate day, and on 3-day plans a power day. Peak and taper drop to one maintenance session; no jumps in the last 10 days.
- Placed on hard run days, at least 48 hours apart, never the day before the long run. Strength backs off in the run plan's cutback weeks.
- Progression is by effort (RPE): when every set feels easier than its target, add load.
- Choosing no strength or bodyweight only shows a short note on why lifting matters. Any lifting is better than none.

## Missed training

- A few days: carry on. About a week: carry on, swap in the missed week's most important session (long run > quality > tempo), and don't add the missed miles. Sick, hurt or 2+ weeks: step back before stepping up.
- Push back: plan-length plans shift later; race-date plans rebuild from next week at a lower volume, keeping the full taper.

## Race-day heat

- Warm or hot races get heat-adaptation work (easy runs in the warmest part of the day, or a post-run sauna or hot bath) in the two weeks before race week, warm-race practice on the last long runs, and a race-day pace adjustment.
- Expected slowdown is estimated at roughly 4–4.5 seconds per mile for each °C above about 15°C (59°F) for mid-pack marathoners, scaled down for shorter races. Most heat adaptation happens within 7–14 days.
- Overdressing to simulate heat isn't recommended.

## Multisport and uploaded plans

- Two sessions a day at most; a brick counts as one.
- Two hard endurance sessions on one day are flagged unless it's a brick.
- Heavy legs pair with the easiest, lowest-impact session. Strength the day before a long or quality run is flagged; the day before a long ride or brick is fine.
- Weekend stacking (long ride or brick, then long run) is expected.
- A week with no rest day or easy-swim day is flagged.
- High-volume weeks (about 8+ endurance sessions or 10+ hours) should keep strength to 1–2 short sessions.

---

## References

### Plans and books we drew structure from

- Jack Daniels, *Daniels' Running Formula* — VDOT pace tables, cruise intervals, long-run limits, holding volume before increasing it.
- Luke Humphrey and Keith and Kevin Hanson, *Hansons Marathon Method* — 16-mile long-run cap, six days with three key sessions.
- Hal Higdon's training programs (5K, 10K, half and marathon; novice to advanced) — beginner structure and volumes.
- Greg McMillan, McMillan Running 5K and 10K plans — volume and long-run prerequisites by level.
- Pete Pfitzinger and Philip Latter, *Faster Road Racing* — 5K to half marathon volumes and medium-long runs.
- Brad Hudson and Matt Fitzgerald, *Run Faster from the 5K to the Marathon* — short-race training structure.

### Specific numbers

- Long-run guideline: [Canadian Running](https://runningmagazine.ca/?p=99607)
- Hansons method overview: [Marathon Handbook](https://marathonhandbook.com/hansons-marathon-method/); beginner plan volumes: [Final Surge](https://site.finalsurge.com/RPlan/CITYOFOAKS/CITYOAKS/443); long-run rationale: [Athletics Weekly](https://athleticsweekly.com/?p=45900)
- Plan volumes: [Higdon Marathon Novice 1](https://trainingpeaks.com/training-plans/running/marathon/tp-139218/hal-higdon-marathon-novice-1), [Higdon 5K Novice](https://trainingpeaks.com/training-plans/running/5km/tp-15910/hal-higdon-5k-novice), [Higdon 10K Intermediate](https://trainingpeaks.com/training-plans/running/10km/tp-15908/hal-higdon-10k-intermediate), [Higdon 10K Advanced](https://www.trainingpeaks.com/training-plans/running/10km/tp-4372/hal-higdons-10-k-advanced), [McMillan 5K plans](https://www.mcmillanrunning.com/tp_plans/5km), [Pfitzinger 8K–10K excerpt](https://canada.humankinetics.com/blogs/excerpt/training-for-an-8k-or-10k-race)
- Long-run share of weekly volume: [RunnersConnect](https://runnersconnect.net/?p=66988)
- Strength and running economy: [Heavy resistance vs plyometric training, Sports Medicine – Open (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9653533/); [Strength training methods and running economy, Sports Medicine (2024)](https://link.springer.com/article/10.1007/s40279-023-01978-y); [Strength training for distance runners, Sports Medicine (2018)](https://link.springer.com/article/10.1007/s40279-017-0835-7)
- Heat: [How much does heat slow your race pace, Outside](https://www.outsideonline.com/health/running/racing/race-strategy/how-much-does-heat-slow-your-race-pace/); [Heat and running speed, Marathon Handbook](https://marathonhandbook.com/heres-how-much-the-heat-it-affects-your-running-speed/); [Heat acclimation for endurance performance, Sports Medicine](https://pubmed.ncbi.nlm.nih.gov/25380791/)
- Race-time equivalents: Peter Riegel, "Athletic Records and Human Endurance," *American Scientist* (1981)
