## 2024-04-25 - Adding ARIA labels to dynamically created buttons
**Learning:** When dynamically creating icon-only buttons via JavaScript (like a "Scroll to Top" button with just an arrow symbol `↑`), they often lack an accessible name, making them unintelligible to screen reader users. It's crucial to apply an `aria-label` attribute directly via `setAttribute` on the created element before adding it to the DOM.
**Action:** Always verify that newly created DOM elements, especially icon-only buttons, have an explicit accessible name defined.
