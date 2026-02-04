import json
from pathlib import Path

import kagglehub


def main() -> None:
    # Download latest version
    dataset_path = Path(kagglehub.dataset_download("risangbaskoro/wlasl-processed"))
    print("Path to dataset files:", dataset_path)

    output_dir = Path("data")
    output_dir.mkdir(exist_ok=True)
    output_file = output_dir / "wlasl_alphabet.json"

    # TODO: Replace this mock mapping once dataset parsing is confirmed.
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    items = [
        {
            "letter": letter,
            "animation": "",
            "caption": "Add animation URL from WLASL dataset",
            "alt": f"Sign for {letter}",
        }
        for letter in letters
    ]
    output_file.write_text(json.dumps(items, indent=2), encoding="utf-8")
    print(f"Wrote placeholder alphabet mapping to {output_file}")


if __name__ == "__main__":
    main()
