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
const goalChecks = document.querySelectorAll(".goal-check");
const goalProgress = document.querySelector("#goalProgress");
const badgeRow = document.querySelector("#badgeRow");
const claimReward = document.querySelector("#claimReward");
const rewardMessage = document.querySelector("#rewardMessage");
const streakCount = document.querySelector("#streakCount");
const timerDisplay = document.querySelector("#timerDisplay");
const timedOptions = document.querySelector("#timedOptions");
const timedQuestion = document.querySelector("#timedQuestion");
const timedFeedback = document.querySelector("#timedFeedback");
const startTimer = document.querySelector("#startTimer");
const matchSigns = document.querySelector("#matchSigns");
const matchWords = document.querySelector("#matchWords");
const matchFeedback = document.querySelector("#matchFeedback");
const dragItems = document.querySelector("#dragItems");
const dropZone = document.querySelector("#dropZone");
const dragFeedback = document.querySelector("#dragFeedback");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupButton = document.querySelector("#signupButton");
const signupMessage = document.querySelector("#signupMessage");
const loginEmail = document.querySelector("#loginEmail");
const loginButton = document.querySelector("#loginButton");
const loginMessage = document.querySelector("#loginMessage");
const savedSummary = document.querySelector("#savedSummary");
const adminForm = document.querySelector("#adminForm");
const signForm = document.querySelector("#signForm");
const uploadList = document.querySelector("#uploadList");
const lessonTitleInput = document.querySelector("#lessonTitleInput");
const lessonVideoInput = document.querySelector("#lessonVideoInput");
const lessonCaptionInput = document.querySelector("#lessonCaptionInput");
const signWordInput = document.querySelector("#signWordInput");
const signCategoryInput = document.querySelector("#signCategoryInput");
const signVideoInput = document.querySelector("#signVideoInput");
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
const libraryList = document.querySelector("#libraryList");
const lessonVideo = document.querySelector("#lessonVideo");
const videoCaption = document.querySelector("#videoCaption");
const signPackToggle = document.querySelector("#signPackToggle");
const signList = document.querySelector("#signList");
const signVideoPlayer = document.querySelector("#signVideoPlayer");
const signCaption = document.querySelector("#signCaption");
const progressChart = document.querySelector("#progressChart");
const signTagsInput = document.querySelector("#signTagsInput");
const signTable = document.querySelector("#signTable");
const lessonTable = document.querySelector("#lessonTable");
const builderPalette = document.querySelector("#builderPalette");
const lessonDrop = document.querySelector("#lessonDrop");
const lessonList = document.querySelector("#lessonList");
const pathGrid = document.querySelector("#pathGrid");
const alphabetStatus = document.querySelector("#alphabetStatus");
const alphabetGrid = document.querySelector("#alphabetGrid");
const sentenceInput = document.querySelector("#sentenceInput");
const playSentence = document.querySelector("#playSentence");
const sentenceStage = document.querySelector("#sentenceStage");

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
    lessonPace: "Friendly pace",
    quizCount: 3,
  },
  intermediate: {
    transition: "0.4s",
    floatSpeed: "5.6s",
    pulseSpeed: "2.8s",
    lessonPace: "Steady pace",
    quizCount: 4,
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
const makeSignAnimation = (label, accent = "#ff6fb0") => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
      <rect width="220" height="220" rx="32" fill="#f7f7ff"/>
      <circle cx="110" cy="84" r="34" fill="${accent}" opacity="0.2"/>
      <path d="M70 120 q40 30 80 0" stroke="${accent}" stroke-width="10" fill="none" stroke-linecap="round">
        <animate attributeName="d" dur="2s" repeatCount="indefinite"
          values="M70 120 q40 30 80 0; M70 120 q40 -30 80 0; M70 120 q40 30 80 0" />
      </path>
      <circle cx="88" cy="120" r="14" fill="${accent}"/>
      <circle cx="132" cy="120" r="14" fill="${accent}"/>
      <text x="50%" y="190" text-anchor="middle" font-family="Arial" font-size="18" fill="#5f5f7a">
        ${label}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const signAssets = {
  "Thank You": {
    animation: makeSignAnimation("Thank You", "#ff6fb0"),
    alt: "Sign animation for thank you",
    caption: "Move your hand from your chin outward.",
  },
  "My Name": {
    animation: makeSignAnimation("My Name", "#6dd6ff"),
    alt: "Sign animation for my name",
    caption: "Point to yourself, then sign NAME.",
  },
  "Good Morning": {
    animation: makeSignAnimation("Good Morning", "#ffd66b"),
    alt: "Sign animation for good morning",
    caption: "Sign GOOD then MORNING (sun rising).",
  },
  "Good Afternoon": {
    animation: makeSignAnimation("Good Afternoon", "#8b9bff"),
    alt: "Sign animation for good afternoon",
    caption: "Sign GOOD then AFTERNOON (sun overhead).",
  },
  Friend: {
    animation: makeSignAnimation("Friend", "#ff8dc7"),
    alt: "Sign animation for friend",
    caption: "Hook index fingers together.",
  },
  Play: {
    animation: makeSignAnimation("Play", "#6dd6ff"),
    alt: "Sign animation for play",
    caption: "Shake thumbs and pinkies.",
  },
  Happy: {
    animation: makeSignAnimation("Happy", "#ffd66b"),
    alt: "Sign animation for happy",
    caption: "Circle hands up your chest.",
  },
  Family: {
    animation: makeSignAnimation("Family", "#8b9bff"),
    alt: "Sign animation for family",
    caption: "Make F-hands in a circle.",
  },
  Sorry: {
    animation: makeSignAnimation("Sorry", "#ff8dc7"),
    alt: "Sign animation for sorry",
    caption: "Rub fist in a circle over chest.",
  },
  Love: {
    animation: makeSignAnimation("Love", "#ff6fb0"),
    alt: "Sign animation for love",
    caption: "Cross arms over chest.",
  },
  School: {
    animation: makeSignAnimation("School", "#6dd6ff"),
    alt: "Sign animation for school",
    caption: "Clap hands together.",
  },
};

const signDictionary = [
  { word: "Thank You", category: "Gratitude" },
  { word: "My Name", category: "Introductions" },
  { word: "Good Morning", category: "Greetings" },
  { word: "Good Afternoon", category: "Greetings" },
  { word: "Friend", category: "People" },
  { word: "Play", category: "Activity" },
  { word: "Happy", category: "Emotions" },
  { word: "Family", category: "People" },
  { word: "Sorry", category: "Feelings" },
  { word: "Love", category: "Feelings" },
  { word: "School", category: "Places" },
].map((item) => ({
  ...item,
  animation: signAssets[item.word]?.animation,
  alt: signAssets[item.word]?.alt || `Sign for ${item.word}`,
  caption: signAssets[item.word]?.caption || "",
  tags: [],
}));

const signPacks = {
  asl: {
    label: "ASL",
    accent: "#ff6fb0",
    signs: signDictionary,
  },
  bsl: {
    label: "BSL",
    accent: "#6dd6ff",
    signs: signDictionary.map((sign) => ({
      ...sign,
      animation: makeSignAnimation(`${sign.word} (BSL)`, "#6dd6ff"),
      caption: `${sign.caption} (BSL)`,
    })),
  },
  isl: {
    label: "ISL",
    accent: "#8b9bff",
    signs: signDictionary.map((sign) => ({
      ...sign,
      animation: makeSignAnimation(`${sign.word} (ISL)`, "#8b9bff"),
      caption: `${sign.caption} (ISL)`,
    })),
  },
};

let currentPack = "asl";

const quizBank = {
  beginner: [
    {
      question: 'Which sign means "Thank You"?',
      options: ["Thank You", "Good Morning", "Play"],
      answer: "Thank You",
    },
    {
      question: 'Pick the sign for "Happy".',
      options: ["Happy", "Sorry", "My Name"],
      answer: "Happy",
    },
    {
      question: 'Which sign stands for "Friend"?',
      options: ["Friend", "Family", "School"],
      answer: "Friend",
    },
  ],
  intermediate: [
    {
      question: 'Choose the sign for "Family".',
      options: ["Family", "Play", "Good Afternoon", "School"],
      answer: "Family",
    },
    {
      question: 'Which sign matches "Sorry"?',
      options: ["Sorry", "Love", "Happy", "Thank You"],
      answer: "Sorry",
    },
    {
      question: 'Pick the sign for "School".',
      options: ["School", "Play", "Friend", "My Name"],
      answer: "School",
    },
  ],
  advanced: [
    {
      question: 'Which sign shows "Love"?',
      options: ["Love", "Thank You", "Sorry", "Play", "Good Morning"],
      answer: "Love",
    },
    {
      question: 'Pick the sign for "Gratitude".',
      options: ["Thank You", "Friend", "School", "Family", "Good Afternoon"],
      answer: "Thank You",
    },
    {
      question: 'Which sign best matches "Play"?',
      options: ["Play", "Sorry", "Love", "School", "My Name"],
      answer: "Play",
    },
  ],
};

const lessonPlaylist = [
  { title: "Greetings with Sunny", minutes: 6 },
  { title: "Family Signs", minutes: 7 },
  { title: "Playtime Signs", minutes: 5 },
  { title: "Feelings Express", minutes: 8 },
];

const libraryLessons = [];

const timedQuiz = {
  question: 'Which sign means "Love"?',
  options: ["Love", "Thank You", "Good Morning", "Play"],
  answer: "Love",
  time: 15,
};

const matchPairs = [
  { sign: "Thank You", word: "Thank You" },
  { sign: "Good Morning", word: "Good Morning" },
  { sign: "My Name", word: "My Name" },
];

const dragTarget = {
  sign: "Happy",
  label: "Happy",
};

let currentLesson = 0;
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let selectedMatch = null;

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

  updateVideoMeta(level, motion.lessonPace);
  updateQuizLevel(level);
  updateProgress(level);
  updateStreak(level);
}

function renderDictionary(items) {
  dictionaryGrid.innerHTML = "";
  if (!items.length) {
    dictionaryEmpty.style.display = "block";
    return;
  }
  dictionaryEmpty.style.display = "none";
  items.forEach((item) => {
    const asset = signAssets[item.word] || {};
    const animation = item.animation || asset.animation || makeSignAnimation(item.word, "#6dd6ff");
    const card = document.createElement("div");
    card.className = "mini-card";
    card.innerHTML = `
      <h4>${item.word}</h4>
      <p class="chip">${item.category}</p>
      <div class="mini-loop sign-media" data-word="${item.word}">
        <img src="${animation}" alt="${item.alt}" class="sign-anim" />
        <span class="sign-video-label">Animated sign</span>
      </div>
    `;
    dictionaryGrid.appendChild(card);
  });
}

function renderSignLibrary(signs) {
  signList.innerHTML = "";
  signs.forEach((sign, index) => {
    const item = document.createElement("div");
    item.className = "sign-item";
    if (index === 0) {
      item.classList.add("active");
      updateSignPlayer(sign);
    }
    item.innerHTML = `
      <img src="${sign.animation}" alt="${sign.alt}" />
      <div>
        <strong>${sign.word}</strong>
        <div class="sign-caption">${sign.caption}</div>
      </div>
    `;
    item.addEventListener("click", () => {
      signList.querySelectorAll(".sign-item").forEach((node) => node.classList.remove("active"));
      item.classList.add("active");
      updateSignPlayer(sign);
    });
    signList.appendChild(item);
  });
}

function updateSignPlayer(sign) {
  signVideoPlayer.pause();
  signVideoPlayer.removeAttribute("src");
  signVideoPlayer.load();
  signCaption.textContent = sign.caption || "Sign video coming soon.";
}

function buildSentenceCards(words, pack) {
  sentenceStage.innerHTML = "";
  words.forEach((word) => {
    const sign = pack.signs.find((item) => item.word.toLowerCase() === word) || {
      word,
      animation: makeSignAnimation(word, "#6dd6ff"),
    };
    const card = document.createElement("div");
    card.className = "sentence-card";
    card.innerHTML = `
      <img src="${sign.animation}" alt="${sign.word}" class="sign-option-anim" />
      <div class="sentence-word">${sign.word}</div>
    `;
    sentenceStage.appendChild(card);
  });
}

function playSentenceSequence(words, pack) {
  buildSentenceCards(words, pack);
  const cards = sentenceStage.querySelectorAll(".sentence-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      cards.forEach((node) => node.classList.remove("active"));
      card.classList.add("active");
    }, index * 900);
  });
}

function renderProgressChart() {
  progressChart.innerHTML = "";
  const values = [40, 60, 55, 70, 50, 80, 65];
  values.forEach((value) => {
    const bar = document.createElement("div");
    bar.className = "progress-bar-mini";
    bar.style.height = `${value}%`;
    progressChart.appendChild(bar);
  });
}

function renderAdminTables() {
  signTable.innerHTML = signDictionary
    .map((sign) => `<div class="table-row"><span>${sign.word}</span><span>${sign.category}</span></div>`)
    .join("");
  lessonTable.innerHTML = lessonPlaylist
    .map((lesson) => `<div class="table-row"><span>${lesson.title}</span><span>${lesson.minutes} min</span></div>`)
    .join("");
}

function renderAdaptivePath(level) {
  const paths = {
    beginner: ["Greetings Pack", "Family Basics", "Daily Feelings"],
    intermediate: ["Story Builder", "Quick Conversations", "School Day"],
    advanced: ["Roleplay Missions", "Community Stories", "Express Emotions"],
  };
  const items = paths[level] || paths.beginner;
  pathGrid.innerHTML = items
    .map((item) => `<div class="path-card"><h4>${item}</h4><p>Recommended for your level.</p></div>`)
    .join("");
}

function renderAlphabetGrid(items, label = "Alphabet") {
  alphabetGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "alphabet-card";
    const animation = item.animation || makeSignAnimation(item.letter, "#6dd6ff");
    card.innerHTML = `
      <div class="alphabet-letter">${item.letter}</div>
      <img src="${animation}" alt="${item.alt || `Sign for ${item.letter}`}" class="alphabet-anim" />
      <div class="sign-caption">${item.caption || label}</div>
    `;
    alphabetGrid.appendChild(card);
  });
}

async function loadAlphabetDataset() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const fallback = letters.map((letter) => ({
    letter,
    animation: makeSignAnimation(letter, "#6dd6ff"),
    caption: "Sample animation",
  }));

  try {
    const response = await fetch("/api/alphabet");
    if (!response.ok) {
      throw new Error("Dataset not found");
    }
    const data = await response.json();
    const items = data.items.map((item) => ({
      letter: item.letter,
      animation: item.image || makeSignAnimation(item.letter, "#6dd6ff"),
      caption: item.caption || "Sign Language MNIST image",
      alt: item.alt,
    }));
    const hasImages = data.items.every((item) => item.image);
    alphabetStatus.textContent = hasImages
      ? "Loaded Sign Language MNIST alphabet dataset."
      : "Dataset found, but images are missing. Run the builder script to generate PNGs.";
    renderAlphabetGrid(items, "Sign Language MNIST");
  } catch (error) {
    alphabetStatus.textContent =
      "Sign Language MNIST dataset not found locally. Showing sample animations.";
    renderAlphabetGrid(fallback, "Sample animation");
  }
}

function handlePackToggle(event) {
  const target = event.target.closest(".toggle-btn");
  if (!target) return;
  signPackToggle.querySelectorAll(".toggle-btn").forEach((btn) => btn.classList.remove("active"));
  target.classList.add("active");
  currentPack = target.dataset.pack;
  const pack = signPacks[currentPack];
  renderDictionary(pack.signs);
  renderSignLibrary(pack.signs);
}

function handleBuilderDrop(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData("text/plain");
  if (!type) return;
  const item = document.createElement("li");
  item.textContent = `Added: ${type}`;
  lessonList.appendChild(item);
}

function filterDictionary() {
  const term = dictionarySearch.value.trim().toLowerCase();
  const filtered = signDictionary.filter((item) =>
    item.word.toLowerCase().includes(term)
  );
  renderDictionary(filtered);
}

function updateQuizLevel(level) {
  quizLevel.textContent = level.charAt(0).toUpperCase() + level.slice(1);
  currentQuestionIndex = 0;
  score = 0;
  quizScore.textContent = score;
  renderQuestion();
  renderAdaptivePath(level);
}

function renderQuestion() {
  const level = levelSelect.value;
  const questions = quizBank[level];
  const question = questions[currentQuestionIndex % questions.length];
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    const asset = signAssets[option];
    const animation = asset?.animation || makeSignAnimation(option, "#6dd6ff");
    button.dataset.value = option;
    button.innerHTML = `
      <img src="${animation}" alt="${asset?.alt || option}" class="sign-option-anim" />
      <span>${option}</span>
    `;
    button.addEventListener("click", () => handleAnswer(option, question.answer));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selected, answer) {
  const buttons = quizOptions.querySelectorAll(".quiz-option");
  buttons.forEach((button) => {
    button.disabled = true;
    const value = button.dataset.value || button.textContent;
    if (value === answer) {
      button.classList.add("correct");
    }
    if (value === selected && selected !== answer) {
      button.classList.add("wrong");
    }
  });

  if (selected === answer) {
    score += 1;
    quizScore.textContent = score;
    quizFeedback.textContent = "Great job! That is correct.";
  } else {
    quizFeedback.textContent = "Nice try! Review the sign and try again.";
  }
}

function nextQuizQuestion() {
  currentQuestionIndex += 1;
  renderQuestion();
}

function updateProgress(level) {
  const settings = levelSettings[level];
  const streak = level === "beginner" ? 4 : level === "intermediate" ? 5 : 6;
  const lessonsCompleted = level === "beginner" ? 6 : level === "intermediate" ? 8 : 10;
  const quizAccuracy = level === "beginner" ? 70 : level === "intermediate" ? 80 : 90;

  streakFill.style.width = `${(streak / 7) * 100}%`;
  lessonFill.style.width = `${(lessonsCompleted / 12) * 100}%`;
  quizFill.style.width = `${quizAccuracy}%`;

  streakText.textContent = `${streak} / 7 days`;
  lessonText.textContent = `${lessonsCompleted} / 12 lessons`;
  quizText.textContent = `${quizAccuracy}% accuracy`;
  quizFeedback.textContent = `Goal: ${settings.quizCount} quiz answers today.`;
}

function updateStreak(level) {
  const count = level === "beginner" ? 4 : level === "intermediate" ? 6 : 8;
  streakCount.textContent = `${count} days`;
}

function updateVideoMeta(level, pace) {
  const lesson = lessonPlaylist[currentLesson];
  videoTitle.textContent = lesson.title;
  videoMeta.textContent = `${level.charAt(0).toUpperCase() + level.slice(1)} · ${
    lesson.minutes
  } min · ${pace}`;

  playlistList.querySelectorAll("li").forEach((item, index) => {
    item.classList.toggle("active", index === currentLesson);
  });
}

function moveLesson(direction) {
  currentLesson = (currentLesson + direction + lessonPlaylist.length) % lessonPlaylist.length;
  applyTheme();
}

function updateGoals() {
  const completed = Array.from(goalChecks).filter((check) => check.checked).length;
  goalProgress.textContent = `${completed} / ${goalChecks.length} complete`;
  const badges = badgeRow.querySelectorAll(".badge");
  badges.forEach((badge, index) => {
    badge.classList.toggle("locked", completed <= index);
  });
  rewardMessage.textContent =
    completed === goalChecks.length
      ? "Great work! You can claim your reward."
      : "Complete goals to claim.";
}

function startTimedQuiz() {
  let timeLeft = timedQuiz.time;
  timerDisplay.textContent = `${timeLeft}s`;
  timedFeedback.textContent = "";
  timedOptions.innerHTML = "";

  timedQuiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    const asset = signAssets[option];
    const animation = asset?.animation || makeSignAnimation(option, "#6dd6ff");
    button.dataset.value = option;
    button.innerHTML = `
      <img src="${animation}" alt="${asset?.alt || option}" class="sign-option-anim" />
      <span>${option}</span>
    `;
    button.addEventListener("click", () => {
      timedFeedback.textContent =
        option === timedQuiz.answer ? "Correct! Great speed!" : "Oops, try again.";
      clearInterval(timer);
    });
    timedOptions.appendChild(button);
  });

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      timedFeedback.textContent = "Time's up! Try again.";
    }
  }, 1000);
}

function renderMatchGame() {
  matchSigns.innerHTML = "";
  matchWords.innerHTML = "";
  matchFeedback.textContent = "";

  matchPairs.forEach((pair) => {
    const signButton = document.createElement("button");
    signButton.className = "match-item";
    signButton.dataset.value = pair.sign;
    const asset = signAssets[pair.sign];
    const animation = asset?.animation || makeSignAnimation(pair.sign, "#6dd6ff");
    signButton.innerHTML = `
      <img src="${animation}" alt="${asset?.alt || pair.sign}" class="sign-option-anim" />
    `;
    signButton.addEventListener("click", () => handleMatchSelection(pair.sign, "sign"));
    matchSigns.appendChild(signButton);

    const wordButton = document.createElement("button");
    wordButton.className = "match-item";
    wordButton.textContent = pair.word;
    wordButton.addEventListener("click", () => handleMatchSelection(pair.word, "word"));
    matchWords.appendChild(wordButton);
  });
}

function handleMatchSelection(value, type) {
  if (!selectedMatch) {
    selectedMatch = { value, type };
    highlightSelection(type, value);
    return;
  }

  if (selectedMatch.type === type) {
    selectedMatch = { value, type };
    highlightSelection(type, value);
    return;
  }

  const isMatch = matchPairs.some(
    (pair) =>
      (pair.sign === selectedMatch.value && pair.word === value) ||
      (pair.word === selectedMatch.value && pair.sign === value)
  );
  matchFeedback.textContent = isMatch ? "Matched! Great job." : "Not a match yet.";
  selectedMatch = null;
  clearMatchHighlights();
}

function highlightSelection(type, value) {
  const container = type === "sign" ? matchSigns : matchWords;
  container.querySelectorAll(".match-item").forEach((item) => {
    const matchValue = item.dataset.value || item.textContent;
    item.classList.toggle("selected", matchValue === value);
  });
}

function clearMatchHighlights() {
  matchSigns.querySelectorAll(".match-item").forEach((item) => item.classList.remove("selected"));
  matchWords.querySelectorAll(".match-item").forEach((item) => item.classList.remove("selected"));
}

function renderDragDrop() {
  dragItems.innerHTML = "";
  dragFeedback.textContent = "";
  dropZone.textContent = "Drop the matching sign here";

  const dragItem = document.createElement("div");
  dragItem.className = "drag-item";
  const asset = signAssets[dragTarget.sign];
  const animation = asset?.animation || makeSignAnimation(dragTarget.sign, "#6dd6ff");
  dragItem.innerHTML = `
    <img src="${animation}" alt="${asset?.alt || dragTarget.sign}" class="sign-option-anim" />
  `;
  dragItem.draggable = true;
  dragItem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", dragTarget.sign);
  });
  dragItems.appendChild(dragItem);

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    if (data === dragTarget.sign) {
      dropZone.textContent = `${dragTarget.sign} = ${dragTarget.label}`;
      dragFeedback.textContent = "Correct! Nice matching.";
    } else {
      dragFeedback.textContent = "Try again.";
    }
  });
}

function saveProfile() {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim().toLowerCase();
  if (!name || !email) {
    signupMessage.textContent = "Please enter both name and email.";
    return;
  }
  const profile = {
    name,
    email,
    level: levelSelect.value,
    streak: streakCount.textContent,
  };
  localStorage.setItem("signsparkProfile", JSON.stringify(profile));
  signupMessage.textContent = "Profile saved!";
  renderSavedProfile(profile);
}

function loadProfile() {
  const stored = localStorage.getItem("signsparkProfile");
  if (!stored) {
    loginMessage.textContent = "No saved profile found.";
    return;
  }
  const profile = JSON.parse(stored);
  if (profile.email !== loginEmail.value.trim().toLowerCase()) {
    loginMessage.textContent = "Email not found.";
    return;
  }
  loginMessage.textContent = `Welcome back, ${profile.name}!`;
  renderSavedProfile(profile);
}

function renderSavedProfile(profile) {
  savedSummary.innerHTML = `
    <p><strong>Name:</strong> ${profile.name}</p>
    <p><strong>Email:</strong> ${profile.email}</p>
    <p><strong>Level:</strong> ${profile.level}</p>
    <p><strong>Streak:</strong> ${profile.streak}</p>
  `;
}

function handleAdminLesson(event) {
  event.preventDefault();
  const title = lessonTitleInput.value.trim();
  const video = lessonVideoInput.value.trim();
  const caption = lessonCaptionInput.value.trim();
  if (!title || !video || !caption) {
    return;
  }
  uploadList.insertAdjacentHTML("afterbegin", `<li>${title} (video)</li>`);
  libraryLessons.push({ title, src: video, caption });
  lessonTitleInput.value = "";
  lessonVideoInput.value = "";
  lessonCaptionInput.value = "";
  renderLibrary();
}

function handleAdminSign(event) {
  event.preventDefault();
  const word = signWordInput.value.trim();
  const category = signCategoryInput.value.trim();
  const animation = signVideoInput.value.trim();
  if (!word || !category || !animation) {
    return;
  }
  const entry = { word, category, animation, tags: signTagsInput.value.split(",").map((tag) => tag.trim()).filter(Boolean) };
  signDictionary.push(entry);
  signAssets[word] = {
    animation,
    alt: `Person signing ${word}`,
    caption: `Custom sign for ${word}`,
  };
  uploadList.insertAdjacentHTML("afterbegin", `<li>${word} (sign)</li>`);
  signWordInput.value = "";
  signCategoryInput.value = "";
  signTagsInput.value = "";
  signVideoInput.value = "";
  renderDictionary(signDictionary);
  renderSignLibrary(signDictionary);
  renderAdminTables();
}

function renderLibrary() {
  libraryList.innerHTML = "";
  if (!libraryLessons.length) {
    const empty = document.createElement("div");
    empty.className = "library-empty";
    empty.textContent = "No lessons yet. Upload a lesson to begin.";
    libraryList.appendChild(empty);
    return;
  }

  libraryLessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "library-item";
    button.textContent = lesson.title;
    button.dataset.index = index;
    if (!lesson.src) {
      button.classList.add("disabled");
      button.disabled = true;
    }
    if (index === 0) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => selectLibraryLesson(index));
    libraryList.appendChild(button);
  });
}

function selectLibraryLesson(index) {
  const lesson = libraryLessons[index];
  if (!lesson || !lesson.src) {
    videoCaption.textContent = "Please upload a valid video URL for this lesson.";
    return;
  }
  lessonVideo.querySelector("source").src = lesson.src;
  lessonVideo.load();
  videoCaption.textContent = `Lesson captions: ${lesson.caption}`;
  libraryList.querySelectorAll(".library-item").forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === index);
  });
}

dictionarySearch.addEventListener("input", filterDictionary);
dictionaryButton.addEventListener("click", filterDictionary);
nextQuestion.addEventListener("click", nextQuizQuestion);
skipQuestion.addEventListener("click", nextQuizQuestion);
prevLesson.addEventListener("click", () => moveLesson(-1));
nextLesson.addEventListener("click", () => moveLesson(1));
goalChecks.forEach((check) => check.addEventListener("change", updateGoals));
claimReward.addEventListener("click", () => {
  rewardMessage.textContent = "Reward claimed! 🎉";
});
startTimer.addEventListener("click", startTimedQuiz);
signupButton.addEventListener("click", saveProfile);
loginButton.addEventListener("click", loadProfile);
adminForm.addEventListener("submit", handleAdminLesson);
signForm.addEventListener("submit", handleAdminSign);

playlistList.querySelectorAll("li").forEach((item, index) => {
  item.addEventListener("click", () => {
    currentLesson = index;
    applyTheme();
  });
});

ageSelect.addEventListener("change", applyTheme);
levelSelect.addEventListener("change", applyTheme);

signPackToggle.addEventListener("click", handlePackToggle);
playSentence.addEventListener("click", () => {
  const words = sentenceInput.value
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);
  if (!words.length) {
    return;
  }
  const pack = signPacks[currentPack];
  playSentenceSequence(words, pack);
});
builderPalette.querySelectorAll(".builder-item").forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", item.dataset.type);
  });
});
lessonDrop.addEventListener("dragover", (event) => event.preventDefault());
lessonDrop.addEventListener("drop", handleBuilderDrop);

renderDictionary(signDictionary);
renderSignLibrary(signDictionary);
renderProgressChart();
renderAdminTables();
renderAdaptivePath(levelSelect.value);
loadAlphabetDataset();
renderMatchGame();
renderDragDrop();
renderLibrary();
updateGoals();
applyTheme();
