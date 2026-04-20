# Design System Document: High-Tech Editorial for AI/ML

## 1. Overview & Creative North Star

### The Creative North Star: "The Kinetic Terminal"
This design system is built to move beyond the "standard dark mode portfolio." It is a fusion of high-performance technical interfaces and luxury editorial layouts. We are moving away from the friendly, rounded "SaaS" look toward a visual language that feels like a high-end research terminal. 

The system utilizes **Organic Brutalism**: a philosophy where the layout is rigid, precise, and sharp (0px border-radius), but the content flows with the intentional asymmetry of a high-end fashion magazine. By leveraging extreme contrast—pure blacks against electric neons—we create a "glow" effect that signifies "Intelligence" and "Energy."

**Signature Approach:**
- **Intentional Asymmetry:** Break the grid. Align a small label (`label-sm`) at the far right of a section while the main headline (`display-lg`) sits tightly on the left.
- **Micro-interactions:** Elements shouldn't just "appear"; they should click into place like hardware components.

---

## 2. Colors & Surface Logic

The color palette is designed for high-contrast legibility and "neon-on-ink" vibrance.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined by:
- **Background Color Shifts:** Use `surface_container_low` against `surface` to define sections.
- **Negative Space:** Use the Spacing Scale to create "voids" that act as dividers.
- **Tonal Transitions:** A subtle gradient from `surface` to `surface_container_high` can denote a clickable area without a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical plates. 
- **The Base:** `surface` (#131313) or `surface_container_lowest` (#0e0e0e) for the deep background.
- **The Content Block:** `surface_container` (#1f1f1f) for main content cards.
- **The Interactive Element:** `surface_bright` (#393939) for hover states or active layers.

### Signature Textures & Glass
To inject "soul" into the digital interface, use **The Glass Rule**:
Floating elements (modals, navigation bars) must use semi-transparent `surface_container` colors with a `backdrop-blur` of 20px–40px. This creates a "frosted obsidian" look that feels premium and depth-rich.

---

## 3. Typography: Space Grotesk

Space Grotesk is a technical, monospaced-influenced sans-serif that embodies the "Modern AI" aesthetic.

- **Display (lg/md):** Use for hero statements and project titles. Kerning should be tightened (-2% to -4%) for a sophisticated, editorial feel. 
- **Headline (lg/md):** Use for section headers. Always pair these with a `label-sm` accent in `primary_container` (Lime Green) to provide immediate context.
- **Body (lg/md):** Keep line lengths short (60-70 characters) to maintain the editorial rhythm. 
- **Label (sm):** The "Workhorse." Use these for technical metadata (e.g., "EPOCH_01", "LOSS_0.042"). These should be set in all-caps with increased letter spacing (+10%) to look like machine-read code.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid the "flat" look by stacking tonal tiers. Place a `surface_container_highest` card on a `surface_container_low` background. This creates a soft, natural lift that mimics high-end hardware.

### Ambient Shadows
Shadows are rarely used, but when necessary for "floating" elements, they must be "Ghost Shadows":
- **Color:** A tinted version of `surface_container_lowest` (not pure black).
- **Style:** Extra-diffused (Blur: 60px+, Spread: -10px, Opacity: 40%). It shouldn't look like a shadow; it should look like the element is emitting a "dark glow."

### Ghost Borders
If an element absolutely requires a border for accessibility (e.g., a text input), use the **Ghost Border**: Use `outline_variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Background `primary_container` (#9ffb06), text `on_primary_container`. **0px corner radius.** 
- **Secondary:** Transparent background, `outline` stroke (1px), text `primary`.
- **States:** On hover, the primary button should "glow"—add a drop shadow of the same color (`primary_container`) with a high blur.

### Cards & Projects
- **Style:** No borders. Use `surface_container_low`. 
- **Interaction:** On hover, the background shifts to `surface_container_high`. 
- **Internal Spacing:** Use generous, asymmetrical padding (e.g., 40px top, 24px sides/bottom) to create an editorial layout within the card.

### Chips (Data Tags)
- Small, sharp boxes. Use `secondary_fixed` (#f3e700) for "High Priority" tags and `primary_fixed` (#9ffb06) for "AI Model" tags. Text should be `label-sm` and all-caps.

### AI Input Fields
- Underline only using `outline`. When focused, the underline transforms into a 2px stroke of `primary_container` (Lime Green) with a subtle outer glow.

### The "Status Terminal" (Custom Component)
A persistent, small widget in the corner of the screen using `label-sm` typography to display "System Status: Active" or "Current Latency: 24ms." This reinforces the AI/ML persona of the student.

---

## 6. Do's and Don'ts

### Do:
- **Do** use 0px border radius for everything. Sharpness is a sign of precision.
- **Do** use "Inky" transitions. Use `ease-in-out` curves for all color shifts.
- **Do** leverage pure white (#ffffff) sparingly for high-impact emphasis against the deep black.
- **Do** use high-resolution, abstract AI-generated imagery or data-viz as background textures.

### Don't:
- **Don't** use generic icon libraries. If you use icons, keep them ultra-thin (1px stroke) and geometric.
- **Don't** use grey. If you need a "grey" tone, use a desaturated version of the background colors (e.g., `surface_variant`).
- **Don't** center-align long blocks of text. Stick to left-aligned editorial columns to maintain the "technical document" feel.
- **Don't** use standard "Drop Shadows." Use tonal layering instead.