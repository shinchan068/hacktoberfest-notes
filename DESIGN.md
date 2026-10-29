---
name: Hacktoberfest study reference
description: Independent NST SMRU student notes using the Hacktoberfest 2026 brand.
colors:
  forest: "#3d5f58"
  deep: "#2e4742"
  ink: "#231f20"
  paper: "#f2f2eb"
  sky: "#8bb2de"
  ochre: "#f5b726"
  pink: "#e97b77"
  orange: "#e53927"
  maroon: "#671912"
  line: "#b9c3b8"
  recap: "#e0e7df"
  check: "#e6e9df"
  diagram: "#e9ece4"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(42px, 5.3vw, 72px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  code:
    fontFamily: "Martian Mono, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  square: "0px"
spacing:
  compact: "8px"
  normal: "16px"
  reading: "24px"
  section: "60px"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ochre}"
  recap:
    backgroundColor: "{colors.recap}"
    textColor: "{colors.ink}"
    padding: "20px 24px"
  search:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 16px"
---

# Design System

## Overview

This is an independent reading resource for first-year NST SMRU B.Tech students. The pinned visual authority is the [official Hacktoberfest 2026 brand kit](https://hacktoberfest.com/brand/). The implemented system uses its forest ground, warm paper, condensed display lettering, small accent fields and crisp rectangular geometry.

The source of implementation truth is `assets/style.css`; local font declarations are in `assets/fonts.css`. This document describes the standalone folder only and does not replace the parent project's design conventions.

## Colors

Forest defines active navigation, the next-page action, display headings and principal boundaries. Deep forest supports links and code surfaces. Ink is body text; paper is the reading background. Sky emphasizes the opening Part card and diagram nodes. Ochre and pink distinguish diagram stages; pink also fills the primary action. Orange is a small decorative accent, never body text. Maroon supplies focus outlines and the action's offset shadow. Pale forest surfaces distinguish recaps, checks and diagrams without competing with the text.

## Typography

Use the three locally bundled brand families: Barlow Semi Condensed for large headings, Inter for prose and interface text, Martian Mono for code and sequential labels. Display text uses bold or extra-bold weights and tight spacing. Body text is 16px, increasing to 17px in the main column at desktop widths of 1200px and above. Subsection titles use Inter at 19px. Mobile page headings are 43px at widths up to 520px; section headings are 28px there. Keep code locally scrollable rather than shrinking it to fit.

## Layout

The desktop shell is at most 1360px wide with a 250px sticky navigation column, a 58px gap and a reading column capped at 900px. A compact text title, the seven named Parts, reference links and on-page sections share the sidebar. There is no header banner or footer. At widths up to 820px, a sticky text title and Contents control replace the desktop sidebar; the menu opens all navigation in a scrollable panel. At widths up to 520px, page padding is 18px, cards and diagrams use one column, and previous/next links stack as large panels. The index uses two card columns on larger screens, with its final Part card spanning the row.

## Elevation & Depth

The site is flat, using borders and solid brand-color surfaces. The primary action carries the brand's hard maroon shadow (`4px 4px 0`), while the overview introduction uses one larger ochre offset (`8px 8px 0`) to read as the entry panel. No ambient shadows or decorative blur are used. Background changes on links and buttons transition for 130ms with ease-out only when reduced motion is not requested.

## Shapes

Use square corners and crisp rules. Main section separation uses a thin line; the page-heading divider and pager use a stronger forest line. Diagram nodes are rectangular SVG geometry with dark outlines and explicit connecting paths only where a relationship or flow is intended.

## Components

- **Navigation:** a text site title and seven fully named Parts, with the current Part highlighted in forest. Reference links and on-page sections remain visible on desktop. Narrow screens use a native Contents disclosure with an authored square plus/minus marker. A skip link appears on focus.
- **Previous and next:** bordered, generously padded panels; next uses forest with paper text. Include the Part number, full title and drawn directional arrow. The index has no circular previous link.
- **Overview introduction:** a forest entry panel with paper text, an orange corner tab, the pink primary action and a short four-color brand strip.
- **Part cards:** whole-card links with forest borders, thick color-coded top rules, generous internal space and compact sequence labels. Sky, ochre, pink, forest and pale surfaces use only the Hacktoberfest palette. Hover unifies the surface and border.
- **Recap:** a pale forest box with a strong forest left rule, an uppercase “In one line” label and the section summary.
- **Disclosures:** native `details` and `summary` elements with authored square plus/minus markers. Opening a self-check reveals only questions. Each answer has its own Reveal answer disclosure and remains closed until explicitly opened. Closing the question group resets its answers.
- **Code:** a deep forest surface, paper-colored monospace text, horizontal overflow and a visible Copy button. Keep copy feedback available to assistive technology.
- **Tables:** forest headers with paper text, thin boundaries and alternating pale rows. Overflow stays inside a focusable wrapper.
- **Search:** a full-width square field with a forest outline, visible label and result count. Preserve the empty-results message.
- **Diagrams:** inline SVG with title and description, plus a visible caption. Keep labels dark and the same reading order as the explained relationship.
- **Focus:** a 3px maroon outline offset by 4px. Header links and code copy controls use ochre outlines against their dark backgrounds.

## Do's and Don'ts

- Do use “Hacktoberfest study reference” as a text title. Keep the logo footer and sidebar filler removed; reserve the strong forest panel for the overview introduction only.
- Do bundle font files so the study pages remain usable offline.
- Do preserve native disclosure semantics, keyboard focus and local overflow for tables and code.
- Don't use the logo to imply official endorsement or recolor it outside the supplied colorways.
- Don't use orange for body text, add decorative gradients, or replace labelled diagrams with decorative illustrations.
