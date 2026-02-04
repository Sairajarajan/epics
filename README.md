# epics

## Sign language learning website ideas

### Interactive Sign Dictionary
- Search by word or category.
- Show short looping videos or animated GIFs for each sign.
- Include synonyms and related signs to build vocabulary.

### Lesson-Based Curriculum
- Beginner → Intermediate → Advanced tracks.
- Each lesson ends with short quizzes using signs.
- Provide review packs for daily practice.

## Demo site

Open `index.html` in a browser to view the kids-friendly sign language learning concept site,
including a lesson playlist, a video library player (upload lesson videos to play), dictionary
search, quizzes (timed, matching, drag & drop), progress tracking, daily goals, account saving,
and admin uploads.
<<<<<<< codex/develop-sign-language-learning-software-oj6bnk
=======

## WLASL alphabet dataset

To load the WLASL alphabet dataset for the Sign Language Alphabet Lab:

```bash
python scripts/build_wlasl_alphabet.py
```

This script downloads the dataset with `kagglehub` and writes `data/wlasl_alphabet.json`,
which the site will load automatically if present.
>>>>>>> main
