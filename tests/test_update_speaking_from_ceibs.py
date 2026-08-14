import unittest
from datetime import date

from scripts.update_speaking_from_ceibs import (
    BEGIN_MARKER,
    END_MARKER,
    RenderedEntry,
    extract_detail_title,
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


class ExtractDetailTitleTest(unittest.TestCase):
    def test_prefers_article_title_over_generic_section_heading(self):
        detail_html = """
        <html>
          <head><title>投资A股时，怎么看硬科技公司？ | CEIBS</title></head>
          <body>
            <h1 class="item-title">教授/研究</h1>
            <h2 class="title font-bold">投资A股时，怎么看硬科技公司？</h2>
          </body>
        </html>
        """

        title = extract_detail_title(detail_html, "fallback")

        self.assertEqual(title, "投资A股时，怎么看硬科技公司？")

    def test_uses_fallback_when_only_heading_is_generic(self):
        detail_html = '<h1 class="item-title">教授/研究</h1>'

        title = extract_detail_title(detail_html, "真实文章标题")

        self.assertEqual(title, "真实文章标题")

    def test_skips_generic_heading_before_specific_heading(self):
        detail_html = """
        <title>教授/研究 | CEIBS</title>
        <h1 class="item-title">教授/研究</h1>
        <h2 class="title font-bold">真实文章标题</h2>
        """

        title = extract_detail_title(detail_html, "fallback")

        self.assertEqual(title, "真实文章标题")


if __name__ == "__main__":
    unittest.main()
