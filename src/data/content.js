// What the home page says about Lumen, kept here so llms.txt (gatsby-node.js)
// says the same. Each feature has a screenshot of its own:
// static/screens/<screen>.webp (see README).
const features = [
  {
    screen: "browse",
    eyebrow: "Browse",
    title: "Every folder, and inside every zip",
    body: "Internal storage, SD cards, and USB drives in lists or grids, with tabs. Open a zip, 7z, or RAR like any folder.",
  },
  {
    screen: "search",
    eyebrow: "Search",
    title: "Find anything in seconds",
    body: "Names, paths, and types across all your storage, with filters for size and date. The index stays on your phone.",
  },
  {
    screen: "preview",
    eyebrow: "Preview",
    title: "Open it right here",
    body: "PDFs, Word documents, spreadsheets, Markdown, code, e-books, music, and video, without another app.",
  },
  {
    screen: "analyze",
    eyebrow: "Free up space",
    title: "See what's using space",
    body: "The largest files, exact duplicates, blurry photos, and what each app keeps. Nothing goes until you review it.",
  },
  {
    screen: "photos",
    eyebrow: "Photos and videos",
    title: "A gallery that's also a file manager",
    body: "Every photo by day and month, full screen with a swipe, and the same move, share, and trash as any file.",
  },
  {
    screen: "share",
    eyebrow: "Share",
    title: "Send files across your Wi-Fi",
    body: "Between your phones with no cable and no cloud, or to any computer's browser. Off until you turn it on, and every device needs your approval.",
  },
]

const more = [
  ["Safe by default", "Copy and move with pause and cancel. Conflicts always ask, and the trash has undo."],
  ["Made for your phone", "Light and dark, wallpaper colours, tablets and foldables, and 12 languages."],
  ["Every place, one app", "Phone storage, cards, archives, folders from other apps, and the trash, side by side."],
]

const principles = [
  ["No account", "Nothing to sign up for. Lumen works the moment you open it."],
  ["No tracking", "No analytics, nothing that watches what you do."],
  ["Your files stay put", "Nothing leaves your phone unless you share it, and then only to whom you choose."],
]

// Questions people ask about Lumen, answered from what the app does (its
// manifest and the privacy policy). Shown on the home page, in its FAQ
// structured data, and in llms.txt.
const faq = [
  [
    "Does Lumen collect my data?",
    "No. Lumen has no account, no analytics, and no crash reporting. Your files and your activity stay on your phone.",
  ],
  [
    "Which phones does Lumen work on?",
    "Android 8 and up, on phones, tablets, and foldables. It's available in 12 languages.",
  ],
  [
    "Can Lumen open zip, 7z, and RAR files?",
    "Yes. Lumen opens a zip, 7z, or RAR archive like any folder, and it can compress files and extract archives.",
  ],
  [
    "Does Lumen work with SD cards and USB drives?",
    "Yes. Internal storage, SD cards, and USB drives show up side by side, in lists or grids, with tabs.",
  ],
  [
    "How do I send files from my phone to my computer without a cable?",
    "Turn on sharing in Lumen and open the address it shows in any browser on a computer on the same Wi-Fi network, or send files to another phone running Lumen. Sharing is off until you turn it on, you approve every device on your phone, and files go directly between your devices without passing through the internet.",
  ],
  [
    "How do I free up space on my phone?",
    "Lumen's analysis shows the largest files, exact duplicates, blurry photos, and what each app keeps. Nothing is deleted until you review it.",
  ],
  [
    "Can I get back a file I deleted?",
    "Yes. Deleted files go to Lumen's trash, and you can undo a delete or restore the file from the trash.",
  ],
  [
    "Why does Lumen ask for All files access?",
    "To browse and manage files across your storage. Lumen asks only when you open a part of the app that needs it, and the permission doesn't let it read other apps' private data.",
  ],
]

// Where reviews come from. Add a source here (say, reddit) and use its key in
// a review below; the home page links each review to its source.
const reviewSources = {
  play: {
    label: "Google Play",
    // Play shows reviews by the visitor's country, and only India has them
    // yet, so pin it (the web honours gl; the Play app on a phone ignores it).
    // Drop gl once other countries show reviews.
    url: "https://play.google.com/store/apps/details?id=com.liliumapps.lumenfiles&hl=en&gl=IN",
  },
}

// What people say, quoted word for word from public reviews ("…" marks a cut;
// never reword one). Authors as first name and initial. `url` is optional and
// links the review itself where the source has one (Reddit does, Play doesn't).
// Play rating as of 20 Nov 2026: 4.8 from 20 reviews.
const reviews = [
  {
    source: "play",
    author: "Moses S.",
    rating: 5,
    date: "2026-10-27",
    quote:
      "Found it very appealing and attractive from the screenshots. Installed it and loving every minute of using it. Amazing work done. Just switched from Solid Explorer, and have no intention of going back.",
  },
  {
    source: "play",
    author: "Ichotu",
    rating: 5,
    date: "2026-10-22",
    quote:
      "One of the best file managers I’ve used. The UI is intuitive, indexing is accurate, and file organization works flawlessly. You can tell a lot of thought has gone into the details.",
  },
  {
    source: "play",
    author: "Amd Ryzen",
    rating: 5,
    date: "2026-10-23",
    quote:
      "Great file Manager! Really good looking, modern and clean. … Opens files faster than MiXplorer and so on. … I'm surprised it's not paid and totally free from trackers.",
  },
  {
    source: "play",
    author: "Yo Yo",
    rating: 4,
    date: "2026-10-30",
    quote:
      "Really liking this app so far! Clean, modern, easy to use, and packed with useful features. Love that it's completely free and ad-free right now.",
  },
  {
    source: "play",
    author: "Hamza G.",
    rating: 5,
    date: "2026-10-22",
    quote:
      "I already use some good file managers, like MiXplorer and a few others. … I was planning to uninstall it after reviewing, but I'm actually keeping it for now.",
  },
  {
    source: "play",
    author: "Vijay B.",
    rating: 5,
    date: "2026-11-18",
    quote: "Best file manager... no doubt",
  },
]

// Short facts for llms.txt.
const facts = [
  "On Google Play",
  "Android 8 and up: phones, tablets, and foldables",
  "12 languages",
  "No account, no analytics, no crash reporting",
  "Made by Lilium Apps (https://liliumapps.com)",
]

module.exports = { features, more, principles, reviews, reviewSources, faq, facts }
