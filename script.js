const ageSelect = document.querySelector("#age");
const levelSelect = document.querySelector("#level");
const dictionaryGrid = document.querySelector("#dictionaryGrid");
const dictionaryEmpty = document.querySelector("#dictionaryEmpty");
const dictionarySearch = document.querySelector("#dictionarySearch");
const dictionaryButton = document.querySelector("#dictionaryButton");
const quizOptions = document.querySelector("#quizOptions");
const quizQuestion = document.querySelector("#quizQuestion");
const quizScore = document.querySelector("#quizScore");
const quizFeedback = document.querySelector("#quizFeedback");
const quizLevel = document.querySelector("#quizLevel");
const nextQuestion = document.querySelector("#nextQuestion");
const skipQuestion = document.querySelector("#skipQuestion");
const streakFill = document.querySelector("#streakFill");
const lessonFill = document.querySelector("#lessonFill");
const quizFill = document.querySelector("#quizFill");
const streakText = document.querySelector("#streakText");
const lessonText = document.querySelector("#lessonText");
const quizText = document.querySelector("#quizText");
const playlistList = document.querySelector("#playlistList");
const videoTitle = document.querySelector("#videoTitle");
const videoMeta = document.querySelector("#videoMeta");
const prevLesson = document.querySelector("#prevLesson");
const nextLesson = document.querySelector("#nextLesson");

const ageThemes = {
  little: {
    bg: "#fff1e6",
    bgAlt: "#e8f7ff",
    accent: "#ffb866",
    accentStrong: "#ff8f3f",
    accent2: "#8fe1ff",
    accent3: "#ffd66b",
    pill: "#fff4dd",
    floatSpeed: "7s",
    pulseSpeed: "3.6s",
  },
  kids: {
    bg: "#fff4fb",
    bgAlt: "#f2fbff",
    accent: "#ff8dc7",
    accentStrong: "#ff6fb0",
    accent2: "#6dd6ff",
    accent3: "#ffd66b",
    pill: "#fff0f8",
    floatSpeed: "6s",
    pulseSpeed: "3s",
  },
  teens: {
    bg: "#f4f6ff",
    bgAlt: "#f0fbf7",
    accent: "#8b9bff",
    accentStrong: "#6a7bff",
    accent2: "#66e3c4",
    accent3: "#ffd66b",
    pill: "#eef0ff",
    floatSpeed: "5.2s",
    pulseSpeed: "2.6s",
  },
};

const levelSettings = {
  beginner: {
    transition: "0.5s",
    floatSpeed: "6.5s",
    pulseSpeed: "3.4s",
  },
  intermediate: {
    transition: "0.4s",
    floatSpeed: "5.6s",
    pulseSpeed: "2.8s",
  },
  advanced: {
    transition: "0.3s",
    floatSpeed: "4.8s",
    pulseSpeed: "2.2s",
    lessonPace: "Fast pace",
    quizCount: 5,
  },
};

const root = document.documentElement;

function applyTheme() {
  const age = ageSelect.value;
  const level = levelSelect.value;
  const theme = ageThemes[age];
  const motion = levelSettings[level];

  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--bg-alt", theme.bgAlt);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-strong", theme.accentStrong);
  root.style.setProperty("--accent-2", theme.accent2);
  root.style.setProperty("--accent-3", theme.accent3);
  root.style.setProperty("--pill", theme.pill);
  root.style.setProperty("--float-speed", motion.floatSpeed || theme.floatSpeed);
  root.style.setProperty("--pulse-speed", motion.pulseSpeed || theme.pulseSpeed);
  root.style.setProperty("--transition-speed", motion.transition);
}

ageSelect.addEventListener("change", applyTheme);
levelSelect.addEventListener("change", applyTheme);

applyTheme();
