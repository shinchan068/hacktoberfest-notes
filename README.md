# AI & Open Source study notes

Open `index.html` directly in a browser. Keep the whole `hacktoberfest-notes` folder together when copying or sharing it. No installation, server or build is needed. All fonts, styles, scripts and logo files are local; external reading links require internet.

## Contents

- `index.html`: introduction and seven Part cards.
- `part-1.html` through `part-7.html`: 21 sections, compact revision points, 11 labelled inline SVG diagrams and expandable source explanations and examples. Self-check questions and each answer open separately.
- `glossary.html`: 77 searchable terms and further reading.
- `answers.html`: all 57 self-check questions with answers.
- `assets/`: shared CSS and JavaScript, and fonts with their Open Font License notices.

Native details panels work without JavaScript. JavaScript adds mobile contents-menu behavior, resets revealed answers when a self-check closes, and enables code copying and glossary filtering. If a browser blocks automatic copying, the code is selected so it can be copied manually. Tables and code scroll within their containers.

## Source and brand

Content source: “AI & Open Source Study Notes — Phase 1”, supplied DOCX for first-year B.Tech students at NST SMRU. The compact revision points preserve the notes’ distinctions; original explanations, tables and code remain inside “Full notes & examples”. Examples and instructions quoted from the notes are teaching content.

Brand reference: https://hacktoberfest.com/brand/ (checked 29 October 2026). The site uses the 2026 palette and Barlow Semi Condensed, Inter and Martian Mono. The interface uses a text title and no logo or footer. This is an independent educational resource, not an official page or endorsement. Brand assets remain subject to the official brand rules; no merchandise or sale rights are implied.


Fonts were downloaded through Google Fonts. Individual OFL notices are bundled in `assets/`. No license over the supplied notes or third-party trademarks is granted by this README.

## Verification

Checked on 29 October 2026 in Chromium through direct local `file://` URLs:

- All ten pages at 1440px desktop, 821px intermediate, 390px mobile and 320px narrow mobile widths.
- No document-level horizontal overflow, including with all notes and answers expanded; code and wide tables retain their own scroll containers.
- No broken local images, missing local linked files, duplicate IDs or missing in-page anchors.
- Full-page desktop/mobile screenshots reviewed for hierarchy, diagrams, page endings and readable text. Revised sidebar, toggles and previous/next navigation checked; header and footer removed.
- Local fonts loaded; code-copy feedback reported success; glossary filtering and empty results worked; previous/next navigation worked locally. Self-checks start closed; opening questions keeps all answers hidden until each answer is explicitly revealed. Closing a self-check resets its answers.
- 21 section question sets match the source answer key (57 questions); all 77 glossary terms and 11 required diagrams are present.

Other browsers and assistive technologies were not separately tested.
