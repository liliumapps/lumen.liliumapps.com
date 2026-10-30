#!/bin/sh
# Stand-in clips until the real recordings exist: each screenshot in
# placeholder-sources/ becomes static/videos/<name>.mp4 (a slow 6-second
# zoom) and its poster static/videos/<name>.jpg. A real clip of the same
# name replaces both; see RECORDING.md.
set -e
cd "$(dirname "$0")/.."
for src in scripts/placeholder-sources/*; do
  name=$(basename "$src"); name=${name%.*}
  out=static/videos/$name
  # One frame in: zoompan makes the 6 seconds (180 frames) out of it.
  ffmpeg -loglevel error -y -i "$src" \
    -vf "scale=720:-2,crop=720:min(ih\,1600):0:0,pad=720:1600:0:0:color=0xF6F4EF,zoompan=z='min(zoom+0.0004,1.07)':x='iw/2-(iw/zoom/2)':y='0':d=180:s=720x1600:fps=30,format=yuv420p" \
    -c:v libx264 -preset slow -crf 28 -movflags +faststart -an "$out.mp4"
  ffmpeg -loglevel error -y -i "$out.mp4" -frames:v 1 -q:v 4 "$out.jpg"
  echo "placeholder $name"
done
