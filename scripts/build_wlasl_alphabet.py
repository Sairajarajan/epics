import json
from pathlib import Path

import kagglehub


def main() -> None:
    # Download latest version
    dataset_path = Path(kagglehub.dataset_download("datamunge/sign-language-mnist"))
    print("Path to dataset files:", dataset_path)

    output_dir = Path("data")
    output_dir.mkdir(exist_ok=True)
    output_file = output_dir / "sign_mnist_alphabet.json"

    # The MNIST dataset is provided as CSV files. This script only creates
    # a placeholder mapping for the UI. Use a data processing pipeline to
    # convert the CSV rows into PNGs and update the JSON with their paths.
    letters = list("ABCDEFGHIKLMNOPQRSTUVWXY")
    items = [
        {
            "letter": letter,
            "image": "",
            "caption": "Add image path from Sign Language MNIST",
            "alt": f"Sign for {letter}",
        }
        for letter in letters
    ]
    output_file.write_text(json.dumps(items, indent=2), encoding="utf-8")
    print(f"Wrote placeholder alphabet mapping to {output_file}")


if __name__ == "__main__":
    main()
