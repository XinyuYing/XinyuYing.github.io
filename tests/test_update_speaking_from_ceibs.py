import unittest
from datetime import date

from scripts.update_speaking_from_ceibs import (
    BEGIN_MARKER,
    END_MARKER,
    RenderedEntry,
    insert_entries,
)


def sample_entry(title: str = "New insight") -> RenderedEntry:
    return RenderedEntry(
        date=date(2026, 7, 2),
        url="https://cn.ceibs.edu/example",
        title=title,
        source="中欧国际工商学院",
        authors="谭寅亮",
        summary=title,
    )


class InsertEntriesTest(unittest.TestCase):
    def test_inserts_between_adjacent_markers(self):
        markdown = f"Before\n{BEGIN_MARKER}\n{END_MARKER}\nAfter"

        updated = insert_entries(markdown, [sample_entry()])

        self.assertIn(f'{BEGIN_MARKER}\n<div class="speech-list">', updated)
        self.assertIn(f"</div>\n{END_MARKER}", updated)
        self.assertTrue(updated.endswith("After"))

    def test_prepends_without_removing_existing_entries(self):
        existing = '<div class="speech-list">Existing insight</div>'
        markdown = f"{BEGIN_MARKER}\n{existing}\n{END_MARKER}"

        updated = insert_entries(markdown, [sample_entry("Latest insight")])

        self.assertLess(updated.index("Latest insight"), updated.index("Existing insight"))
        self.assertEqual(updated.count(BEGIN_MARKER), 1)
        self.assertEqual(updated.count(END_MARKER), 1)


if __name__ == "__main__":
    unittest.main()
