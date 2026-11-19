# Training Block Builder

Build a run training plan, or upload your own, and keep it on your phone. No account, no server, and it works offline.

**Open it:** https://zbtmaniac.github.io/training-block-builder/

## What it does

- **Builds a run plan for you.** Answer seven quick questions (goal race, experience, recent volume, timeline, current fitness, run days, strength) and get a week-by-week plan for a 5K, 10K, half or marathon, with real workouts and training paces or heart-rate targets.
- **Adds strength training** matched to your equipment (bodyweight, dumbbells/kettlebells, or barbell), placed around your hard runs and long run.
- **Follows your own plan.** Upload the template, any spreadsheet (.xlsx or .csv), or a plan written as a table in a document (.docx, or a Google Doc downloaded as Markdown). Run, bike, swim, brick and strength all work.
- **Helps when life happens.** Tell it you missed a few days, a week, or more and it tells you what to keep, what to skip, and can push your plan back.
- **Flags, doesn't forbid.** If a goal looks like a stretch, a timeline is short, or a week is crowded, it says so and suggests fixes. You always get the plan you choose.
- **Goes where you need it:** add sessions to your calendar, save a PDF, or download an Excel file you can edit and upload again.
- **Gets workouts onto your watch.** Download structured `.fit` workouts (Garmin, Coros, Intervals.icu) or `.zwo` files (TrainingPeaks, Zwift), or send your plan straight to your Intervals.icu calendar with your own API key, which Intervals.icu can then sync to Garmin.
- **Plans for heat.** Warm race? It adds heat-adaptation work and race-day guidance.

## Put it on your phone

**iPhone (Safari):** open the link in Safari, tap **Share**, then **Add to Home Screen** with "Open as Web App" turned on.

- Tapping the link inside another app (Messages, Slack, email) opens a mini browser that can't add it properly. Long-press the link, copy it, and paste it into Safari.
- Other iPhone browsers (Firefox, Chrome) can add it too, but some show a letter instead of the icon. Safari gives you the real icon.

**Android (Chrome):** open the link, tap the **⋮** menu, then **Add to Home screen** or **Install app**.

Once it's opened once, it works without a connection.

<details>
<summary><b>How plans are built</b> (summary)</summary>

These are the main rules. The full rules, with the plans and research they come from, are in [RULES.md](RULES.md).

- **Phases:** base → build → peak → taper. Base runs longer when your current volume is far below what the plan needs.
- **Volume:** builds in steps (hold a level for a few weeks, then step up about 10–15%), with cutback weeks. Short timelines step faster, up to about 20%, and get flagged.
- **Volume follows you, not the race.** A 5K plan for an experienced runner can have as much running as a half marathon plan. The race changes the workouts, not the mileage.
- **Long runs** are capped at about 2.5 hours, or 3 hours for a couple of marathon dress rehearsals when there's time to build to it. If a long run would be over about 40% of your week, the plan says so.
- **Single runs** are capped at about 70 minutes; extra volume goes into a midweek medium-long run on 5–6 day plans.
- **Workouts:** hard days are hard, easy days are truly easy. Tempo days use float sets by default; race-specific work comes in the peak phase.
- **Paces** come from a recent race or time trial. Goal times are checked against your projected fitness and rated on track, ambitious, or big stretch.
- **Strength:** heavy, low-rep lifting plus jumps, on hard days, never the day before your long run. Any lifting is better than none.
- **Expert mode** turns off the safety caps for people who know what they're doing.

</details>

## Getting workouts onto your watch

| You use | Do this |
| --- | --- |
| **Intervals.icu** (recommended for Garmin) | In the plan view, open **Send to Intervals.icu**, paste your API key (Intervals.icu → Settings → Developer Settings), and send. Turn on "Upload planned workouts" in Intervals.icu's Garmin settings and the next week reaches your watch at each sync. Sending again updates the same workouts; **Remove sent** deletes only what this app added. |
| **Garmin, no Intervals.icu** | Tap **Watch files (.fit)**, unzip, and copy the files to the watch's `GARMIN/NewFiles` folder over USB, or import them in Garmin Connect on the web where it offers import. |
| **TrainingPeaks** | Tap **TrainingPeaks/Zwift (.zwo)**, unzip, then in your Workout Library open a folder's menu → **Import Workout** and select the files. TrainingPeaks can sync them to Garmin. |
| **Zwift** | Copy the `.zwo` files into `Documents/Zwift/Workouts/<your Zwift ID>`. |
| **Coros, Polar, others** | Use the app's workout import with the `.fit` files. |

Watch files are made for generated run workouts, with pace or heart-rate targets for each step. Uploaded plans go to Intervals.icu and your calendar with their full text, but don't get step-by-step watch files.

## Privacy

Everything you enter, and every file you upload, stays on your device. There's no account, no tracking, and no server receiving your data. Clearing your browser data clears your plan.

If you use **Send to Intervals.icu**, your API key is saved only on your device and sent only to intervals.icu. The key gives full access to your Intervals.icu account, so don't save it on a shared device.

## Not medical advice

This tool builds plans from widely used coaching principles. It doesn't know your health history. Listen to your body, and check with a professional if something hurts or you have a medical condition.

---

<details>
<summary><b>For developers</b></summary>

It's a single-page web app with no build step and no dependencies.

| File | What it is |
| --- | --- |
| `index.html` | The whole app: markup, styles and script |
| `bb-sw.js` | Service worker that caches the app for offline use |
| `bb-manifest.json` | Name, colors and icons for "Add to Home Screen" |
| `bb-icon-*.png`, `apple-touch-icon.png`, `favicon.ico` | Icons |
| `RULES.md` | How plans are built, with references |

**Updating:** after changing `index.html`, bump `CACHE` in `bb-sw.js` (for example `block-builder-v11` → `v12`) so phones pick up the new version.

**Workflow:** changes go on a branch, get opened as a pull request, and are merged into `main`. GitHub Pages publishes `main` automatically.

**Paid plans:** the repo contains no paid plan content. Plans people upload stay on their own devices.

</details>
