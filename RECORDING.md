# Recording the site's clips

The landing page shows seven short clips of the app, each in a phone frame:
`static/videos/<name>.mp4`, with `<name>.jpg` as its poster (the first frame,
shown while the clip loads and to people who ask for less motion). Until a
clip is recorded, `scripts/placeholder-videos.sh` makes a stand-in from a
screenshot in `scripts/placeholder-sources/`; a real clip of the same name
replaces it.

| Clip | Where on the page | What it shows |
| --- | --- | --- |
| `hero` | Top of the page | Home, then Images, a photo opened full screen, a swipe to the next |
| `browse` | Browse | Internal storage, into Download, a zip opened like a folder |
| `search` | Search | Typing a few letters ("lisb"), the trip plan found and opened |
| `preview` | Preview | A spreadsheet, then a PDF map, read in the app |
| `analyze` | Free up space | Analyze's overview, then the largest files or duplicates |
| `photos` | Photos and videos | The gallery by day and month, a video playing |
| `share` | Share | Turning on sharing, a computer's browser asking, approved |

## How to record

1. Use the production build (`./gradlew :app:installRelease`) on a phone or
   emulator holding the demo files (`../demo`: `build.py`, then `push.sh`),
   never your own photos.
2. Turn on Android's demo status bar so every clip shows 9:41 and a full
   battery: `adb shell settings put global sysui_demo_allowed 1`, then
   `adb shell am broadcast -a com.android.systemui.demo -e command enter`
   (`../demo/record.py` sets the rest: clock, battery, Wi-Fi, no
   notifications).
3. Record each clip on its own, 6–10 seconds, one idea, taps slow enough to
   follow: `scrcpy --no-audio --record=browse.mp4`, or the phone's own screen
   recorder.

## Making a clip for the site

Portrait, 720 px wide, 9:20 like the frame, H.264, no sound, about 1 MB:

```bash
ffmpeg -ss 0.5 -t 8 -i browse.mp4 -an \
  -vf "scale=720:-2,crop=720:1600:0:0,fps=30" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart \
  static/videos/browse.mp4
ffmpeg -y -i static/videos/browse.mp4 -frames:v 1 -q:v 4 static/videos/browse.jpg
```

The clip loops, so end where it began (back on the first screen) for a
seamless loop.
