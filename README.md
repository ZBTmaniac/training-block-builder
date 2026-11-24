# Training Block Builder

**Open it:** https://zbtmaniac.github.io/training-block-builder/

## Why this exists

Starting to train shouldn't take a coach, a subscription, or a weekend of research. Training Block Builder turns a few answers into a running plan you can start today, explains the reasons behind it in plain words, and gets out of your way. The goal is simple: help people get moving, with less decision fatigue and more enjoyment of getting fitter.

It's built on a few principles:

- **Free.** No subscription and no paywall.
- **Private.** No account. Your answers and plans stay on your device.
- **Your plan, your call.** It flags common training mistakes and suggests fixes, but it never refuses to build the plan you ask for.
- **Fewer decisions.** Sensible defaults, and a short "why" wherever you have to choose.
- **Open about how it works.** Plans come from published coaching methods, and every rule is written down in [RULES.md](RULES.md).

## Put it on your phone

**iPhone (Safari):** open the link in Safari, tap **Share**, then **Add to Home Screen** with "Open as Web App" turned on.

- Tapping the link inside another app (Messages, Slack, email) opens a mini browser that can't add it properly. Long-press the link, copy it, and paste it into Safari.
- Other iPhone browsers (Firefox, Chrome) can add it too, but some show a letter instead of the icon. Safari gives you the real icon.

**Android (Chrome):** open the link, tap the **⋮** menu, then **Add to Home screen** or **Install app**.

Once it's opened once, it works without a connection.

## What it does

**Builds your plan**

- Answer seven quick questions and get a week-by-week plan for a 5K, 10K, half, or marathon, with real workouts and training paces or heart-rate targets.
- New to running? If you can't run 30 minutes yet, it starts with a run-walk phase and explains running terms in plain words.
- Adds strength training matched to your equipment (bodyweight, dumbbells/kettlebells, or barbell), placed around your hard runs and long run.
- Plans for heat: a warm race gets heat-adaptation work and race-day guidance.
- Race week gets a guide: carb loading done right, fueling you've practiced, target pace and splits, what to wear, and a send-off.

**Fits your life**

- Move a session to another day in the week, or swap a hard workout for an easy run when the day goes sideways.
- Missed a few days, a week, or more? It tells you what to keep, what to skip, and can push your plan back.
- After the race, enter your time: it becomes your new benchmark, and the app suggests recovery and a different next challenge.
- Follow your own plan instead: upload the template, any spreadsheet (.xlsx or .csv), or a plan written as a table in a document (.docx, or a Google Doc downloaded as Markdown). Run, bike, swim, brick, and strength all work. Add a Workout steps column in Intervals.icu workout text and those sessions arrive in Intervals.icu (and on your watch) as structured workouts.

**Goes where you train**

- Add sessions to your calendar, save a PDF, or download an Excel file you can edit and upload again.
- Save a backup file to move your plan to a new phone, or share your plan setup with a friend.
- Download structured workouts for your watch (`.fit` for Garmin, Coros, and Intervals.icu; `.zwo` for TrainingPeaks and Zwift), or send your plan straight to your Intervals.icu calendar.

## How plans are built

The short version, in the order a plan comes together. The full rules, a glossary, and the plans and research they come from are in [RULES.md](RULES.md).

1. **What does it ask you?** Goal race, experience, recent weekly volume, timeline, current fitness, run days, and strength.
2. **Where are you starting?** Experience sets the starting point and the options. New runners who can't run 30 minutes yet start with run-walk (Couch to 5K style), get plain-language workouts, and ease into strength. Runners who have trained before can lengthen weekday runs; runners who train regularly can also pick a build style.
3. **What are you training for?** Paces come from a recent race or time trial, and your goal time is rated on track, ambitious, or big stretch. Plans of 10+ weeks include check-in time trials that update your paces, heart-rate zones, and goal check as your fitness changes. The race distance changes the workouts, not the mileage: volume follows you.
4. **How much time do you have?** Plans run base → build → peak → taper. Volume holds for a few weeks, then steps up (usually 10–20%), with cutback weeks. Short timelines step faster and say so. If the usual peak won't fit your days and pace, the plan peaks at what fits and tells you why.
5. **What fills each week?** Hard days are hard and easy days are truly easy. Long runs top out around 2.5 hours (3 hours for a couple of marathon dress rehearsals). At every level, no long run jumps more than about 10% past your longest of the past month, and no weekday run is as long as the long run. Strength goes on hard days, never the day before the long run.
6. **What happens when life gets in the way?** Moves, easier days, and missed training are handled without making up lost work.

Expert mode turns off the safety caps for people who know what they're doing.

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

Everything you enter, and every file you upload, stays on your device. There's no account, no tracking, and no server receiving your data. Clearing your browser data clears your plan, so save a backup now and then (Export & sync → Keep your plan safe). Adding the app to your Home Screen also helps, since browsers can clear saved data for websites you haven't visited in a while.

Backup files never include your Intervals.icu API key. A shared plan link carries only your plan setup (race, dates, run days, and strength choices), not your fitness, goal time, heart rate, or check-ins.

When a new version is published, the app shows a banner. Updating keeps your plan, and the app saves a copy on your device first in case anything goes wrong.

If you use **Send to Intervals.icu**, your API key is saved only on your device and sent only to intervals.icu. The key gives full access to your Intervals.icu account, so don't save it on a shared device.

## Feedback

Found something confusing, broken, or missing? [Send feedback](https://github.com/ZBTmaniac/training-block-builder/issues/new?template=feedback.yml) (needs a free GitHub account). Feedback posts are public, so leave out personal details.

## Accessibility

The app works with screen readers and a keyboard, and has a color-blind friendly palette (Whole plan → Display). Every color also has a text label, and the PDF is text only.

## Not medical advice

This tool builds plans from widely used coaching principles. It doesn't know your health history. Listen to your body, and check with a professional if something hurts or you have a medical condition.

---

<details>
<summary><b>For developers</b></summary>

It's a single-page web app with no build step and no dependencies.

| File | What it is |
| --- | --- |
| `index.html` | The whole app: markup, styles, and script |
| `bb-sw.js` | Service worker that caches the app for offline use |
| `bb-manifest.json` | Name, colors, and icons for "Add to Home Screen" |
| `bb-icon-*.png`, `apple-touch-icon.png`, `favicon.ico` | Icons |
| `RULES.md` | How plans are built, with references |

**Updating:** the app loads fresh from the network when online, so a merged change shows on the next open. Still bump `CACHE` in `bb-sw.js` (for example `block-builder-v15` → `v16`) and `APP_VERSION` in `index.html` so the offline copy and the version shown in the app stay in step.

**Workflow:** changes go on a branch, get opened as a pull request, and are merged into `main`. GitHub Pages publishes `main` automatically.

**Paid plans:** the repo contains no paid plan content. Plans people upload stay on their own devices.

</details>
