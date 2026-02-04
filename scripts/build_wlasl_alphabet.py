import csv
import json
from pathlib import Path

import kagglehub
from PIL import Image

LETTERS = list("ABCDEFGHIKLMNOPQRSTUVWXY")


def find_csv(dataset_path: Path) -> Path:
    for name in ("sign_mnist_train.csv", "sign_mnist_test.csv"):
        candidate = dataset_path / name
        if candidate.exists():
            return candidate
    raise FileNotFoundError("Could not locate sign_mnist_train.csv in dataset path.")


def save_letter_image(letter: str, pixels: list[int], output_dir: Path) -> str:
    image = Image.new("L", (28, 28))
    image.putdata(pixels)
    output_dir.mkdir(parents=True, exist_ok=True)
    path = output_dir / f"{letter}.png"
    image.save(path)
    return str(path.as_posix())


def main() -> None:
    dataset_path = Path(kagglehub.dataset_download("datamunge/sign-language-mnist"))
    print("Path to dataset files:", dataset_path)

    csv_path = find_csv(dataset_path)
    output_dir = Path("data")
    output_dir.mkdir(exist_ok=True)
    images_dir = output_dir / "sign_mnist_images"
    output_file = output_dir / "sign_mnist_alphabet.json"

    found: dict[int, list[int]] = {}
    with csv_path.open(newline="", encoding="utf-8") as handle:
        reader = csv.reader(handle)
        headers = next(reader, None)
        if headers is None or headers[0] != "label":
            raise ValueError("Unexpected CSV format for Sign Language MNIST.")
        for row in reader:
            label = int(row[0])
            if label in found:
                continue
            pixels = [int(value) for value in row[1:]]
            found[label] = pixels
            if len(found) >= len(LETTERS):
                break

    items = []
    for label, letter in enumerate(LETTERS):
        pixels = found.get(label)
        if pixels is None:
            continue
        image_path = save_letter_image(letter, pixels, images_dir)
        items.append(
            {
                "letter": letter,
                "image": image_path,
                "caption": f"Sign for {letter}",
                "alt": f"Sign for {letter}",
            }
        )

    output_file.write_text(json.dumps(items, indent=2), encoding="utf-8")
    print(f"Wrote alphabet mapping to {output_file}")


if __name__ == "__main__":
    main()
