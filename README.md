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

## FastAPI backend

Serve the site and API together (required for media and dataset loading):

```bash
pip install -r requirements.txt
uvicorn backend.app:app --reload
```

Then open http://127.0.0.1:8000 in your browser.

## Sign Language MNIST alphabet dataset

To load the Sign Language MNIST alphabet dataset for the Sign Language Alphabet Lab:

```bash
python scripts/build_wlasl_alphabet.py
```

This script downloads the dataset with `kagglehub` and writes
`data/sign_mnist_alphabet.json`, which the FastAPI backend will serve automatically.
