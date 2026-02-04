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
const signEmojiInput = document.querySelector("#signEmojiInput");
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

const libraryLessons = [];

const timedQuiz = {
  question: 'Which sign means "Love"?',
  options: ["💖", "👏", "🙏", "🎈"],
  answer: "💖",
  time: 15,
};

const matchPairs = [
  { sign: "👏", word: "Thank You" },
  { sign: "🫶", word: "Friend" },
  { sign: "🎈", word: "Play" },
];

const dragTarget = {
  sign: "😊",
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
    button.textContent = option;
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
    signButton.textContent = pair.sign;
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
    item.classList.toggle("selected", item.textContent === value);
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
  dragItem.textContent = dragTarget.sign;
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
  const emoji = signEmojiInput.value.trim();
  if (!word || !category || !emoji) {
    return;
  }
  signDictionary.push({ word, category, emoji });
  uploadList.insertAdjacentHTML("afterbegin", `<li>${word} (sign)</li>`);
  signWordInput.value = "";
  signCategoryInput.value = "";
  signEmojiInput.value = "";
  renderDictionary(signDictionary);
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

renderDictionary(signDictionary);
renderMatchGame();
renderDragDrop();
renderLibrary();
updateGoals();
applyTheme();
