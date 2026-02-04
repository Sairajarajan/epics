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
const signDictionary = [
  { word: "Thank You", category: "Gratitude", emoji: "👏" },
  { word: "Friend", category: "People", emoji: "🫶" },
  { word: "Play", category: "Activity", emoji: "🎈" },
  { word: "Happy", category: "Emotions", emoji: "😊" },
  { word: "Family", category: "People", emoji: "👨‍👩‍👧" },
  { word: "Sorry", category: "Feelings", emoji: "🙏" },
  { word: "Love", category: "Feelings", emoji: "💖" },
  { word: "School", category: "Places", emoji: "🏫" },
];

const quizBank = {
  beginner: [
    {
      question: 'Which sign means "Thank You"?',
      options: ["👏", "😊", "🎈"],
      answer: "👏",
    },
    {
      question: 'Pick the sign for "Happy".',
      options: ["😊", "🙏", "🫶"],
      answer: "😊",
    },
    {
      question: 'Which emoji stands for "Friend"?',
      options: ["🫶", "👨‍👩‍👧", "🏫"],
      answer: "🫶",
    },
  ],
  intermediate: [
    {
      question: 'Choose the sign for "Family".',
      options: ["👨‍👩‍👧", "🎈", "🙏", "🏫"],
      answer: "👨‍👩‍👧",
    },
    {
      question: 'Which sign matches "Sorry"?',
      options: ["🙏", "💖", "😊", "👏"],
      answer: "🙏",
    },
    {
      question: 'Pick the sign for "School".',
      options: ["🏫", "🎈", "🫶", "💖"],
      answer: "🏫",
    },
  ],
  advanced: [
    {
      question: 'Which sign shows "Love"?',
      options: ["💖", "👏", "🙏", "🎈", "😊"],
      answer: "💖",
    },
    {
      question: 'Pick the sign for "Gratitude".',
      options: ["👏", "🫶", "🏫", "👨‍👩‍👧", "😊"],
      answer: "👏",
    },
    {
      question: 'Which sign best matches "Play"?',
      options: ["🎈", "🙏", "💖", "🏫", "👨‍👩‍👧"],
      answer: "🎈",
    },
  ],
};

const lessonPlaylist = [
  { title: "Greetings with Sunny", minutes: 6 },
  { title: "Family Signs", minutes: 7 },
  { title: "Playtime Signs", minutes: 5 },
  { title: "Feelings Express", minutes: 8 },
];

let currentLesson = 0;
let currentQuestionIndex = 0;
let score = 0;

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
}

function renderDictionary(items) {
  dictionaryGrid.innerHTML = "";
  if (!items.length) {
    dictionaryEmpty.style.display = "block";
    return;
  }
  dictionaryEmpty.style.display = "none";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "mini-card";
    card.innerHTML = `
      <h4>${item.word}</h4>
      <p class="chip">${item.category}</p>
      <div class="mini-loop">${item.emoji}</div>
    `;
    dictionaryGrid.appendChild(card);
  });
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
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option, question.answer));
    quizOptions.appendChild(button);
  });
}

function handleAnswer(selected, answer) {
  const buttons = quizOptions.querySelectorAll(".quiz-option");
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === answer) {
      button.classList.add("correct");
    }
    if (button.textContent === selected && selected !== answer) {
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

dictionarySearch.addEventListener("input", filterDictionary);
dictionaryButton.addEventListener("click", filterDictionary);
nextQuestion.addEventListener("click", nextQuizQuestion);
skipQuestion.addEventListener("click", nextQuizQuestion);
prevLesson.addEventListener("click", () => moveLesson(-1));
nextLesson.addEventListener("click", () => moveLesson(1));

playlistList.querySelectorAll("li").forEach((item, index) => {
  item.addEventListener("click", () => {
    currentLesson = index;
    applyTheme();
  });
});

ageSelect.addEventListener("change", applyTheme);
levelSelect.addEventListener("change", applyTheme);

renderDictionary(signDictionary);
applyTheme();
