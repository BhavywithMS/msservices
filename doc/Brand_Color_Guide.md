# MS SERVICES - BRAND COLOR & STYLE GUIDE

---

## 🎨 COLOR PALETTE

### PRIMARY COLORS

#### 1. MS Black (Primary)
- **Hex**: `#1a1a1a`
- **RGB**: `26, 26, 26`
- **HSL**: `0°, 0%, 10%`
- **Usage**: Logo, headings, dark elements, primary text on light backgrounds
- **Description**: Deep, sophisticated black used in the MS Services logo and brand identity

```
████████ #1a1a1a
```

---

#### 2. MS Gray (Secondary)
- **Hex**: `#4a4a4a`
- **RGB**: `74, 74, 74`
- **HSL**: `0°, 0%, 29%`
- **Usage**: Secondary text, borders, dividers, alternative headings
- **Description**: Medium gray for hierarchy and depth

```
████████ #4a4a4a
```

---

#### 3. Light Gray (Background)
- **Hex**: `#f5f5f5`
- **RGB**: `245, 245, 245`
- **HSL**: `0°, 0%, 96%`
- **Usage**: Section backgrounds, alternate backgrounds, subtle element backgrounds
- **Description**: Soft light gray for section separation and visual rhythm

```
████████ #f5f5f5
```

---

#### 4. White (Pure)
- **Hex**: `#ffffff`
- **RGB**: `255, 255, 255`
- **HSL**: `0°, 0%, 100%`
- **Usage**: Primary background, text on dark backgrounds, card backgrounds
- **Description**: Clean white for primary content areas

```
████████ #ffffff
```

---

#### 5. Accent Blue (Call-to-Action)
- **Hex**: `#0066cc`
- **RGB**: `0, 102, 204`
- **HSL**: `210°, 100%, 40%`
- **Usage**: CTA buttons, primary links, highlights, emphasis
- **Description**: Vibrant blue for action-oriented elements and engagement

```
████████ #0066cc
```

---

### EXTENDED COLOR PALETTE (For Interactive States)

#### Accent Blue Variants
- **Darker (Hover)**: `#0052a3` (RGB: 0, 82, 163)
- **Light (Background)**: `#e6f0ff` (RGB: 230, 240, 255)
- **Transparent (Overlay)**: `rgba(0, 102, 204, 0.1)`

#### Success Color (for confirmations)
- **Green**: `#22c55e` (RGB: 34, 197, 94)
- **Usage**: Form success, positive feedback

#### Warning Color (for errors)
- **Red**: `#ef4444` (RGB: 239, 68, 68)
- **Usage**: Form errors, warnings, alerts

#### Info Color
- **Light Blue**: `#3b82f6` (RGB: 59, 130, 246)
- **Usage**: Information alerts, tooltips

---

## 📐 COLOR USAGE GUIDE

### Backgrounds
| Element | Color | Hex |
|---------|-------|-----|
| Main/Primary | White | #ffffff |
| Alternate Section | Light Gray | #f5f5f5 |
| Dark Section | MS Black | #1a1a1a |
| Card Hover | Light Gray | #f5f5f5 |

### Text
| Element | Color | Hex |
|---------|-------|-----|
| Headings (H1, H2) | MS Black | #1a1a1a |
| Body Text | MS Gray | #4a4a4a |
| Light Text (on dark) | White | #ffffff |
| Links | Accent Blue | #0066cc |
| Link Hover | Darker Blue | #0052a3 |

### Buttons & CTAs
| Button Type | Background | Text | Hover |
|------------|-----------|------|-------|
| Primary | Accent Blue (#0066cc) | White (#ffffff) | Darker Blue (#0052a3) |
| Secondary | White (#ffffff) | MS Black (#1a1a1a) | Light Gray (#f5f5f5) |
| Ghost | Transparent | MS Black (#1a1a1a) | Light Gray (#f5f5f5) |

### Borders & Dividers
- **Color**: MS Gray | `#4a4a4a`
- **Opacity**: 0.2 to 0.3
- **Width**: 1px to 2px
- **Usage**: Card borders, input fields, dividers

---

## 🔤 TYPOGRAPHY

### Font Families

#### Headings (H1, H2, H3, H4)
**Primary Font: Poppins or Montserrat**
- Characteristics: Bold, geometric, modern, clean
- Weight: 600 (Semi-bold) to 700 (Bold)
- Style: Regular (upright)

*Fallback*: Roboto, Inter, sans-serif

#### Body Text
**Primary Font: Open Sans or Roboto**
- Characteristics: Highly readable, neutral, professional
- Weight: 400 (Regular) to 500 (Medium)
- Style: Regular (upright)

*Fallback*: -apple-system, BlinkMacSystemFont, sans-serif

---

### Font Sizes

#### Desktop Sizing
| Element | Size | Weight | Line Height |
|---------|------|--------|------------|
| H1 (Main Heading) | 48px | 700 | 1.2 |
| H2 (Section Heading) | 36px | 700 | 1.3 |
| H3 (Subheading) | 24px | 600 | 1.4 |
| H4 (Card Title) | 20px | 600 | 1.4 |
| Body Text | 16px | 400 | 1.6 |
| Small Text | 14px | 400 | 1.5 |
| Tiny Text | 12px | 400 | 1.4 |

#### Mobile Sizing (Scale Down)
| Element | Size |
|---------|------|
| H1 | 32px |
| H2 | 24px |
| H3 | 18px |
| Body Text | 14px |

---

### Letter Spacing
- Headings: `0.5px` to `1px`
- Body: `0.3px`
- Small text: `0.2px`

---

## 🎯 COLOR CONTRAST COMPLIANCE

All color combinations meet WCAG AA accessibility standards:

| Text Color | Background Color | Contrast Ratio | Compliance |
|-----------|-----------------|-----------------|------------|
| #1a1a1a | #ffffff | 18.5:1 | AAA ✓ |
| #ffffff | #1a1a1a | 18.5:1 | AAA ✓ |
| #4a4a4a | #ffffff | 8.2:1 | AAA ✓ |
| #ffffff | #0066cc | 5.8:1 | AA ✓ |
| #0066cc | #ffffff | 5.8:1 | AA ✓ |

---

## 🎨 COLOR COMBINATIONS (Recommended Pairings)

### For Sections
**Light Section**
- Background: #ffffff
- Text: #1a1a1a
- Accent: #0066cc

**Gray Alternate**
- Background: #f5f5f5
- Text: #1a1a1a
- Accent: #0066cc

**Dark Section**
- Background: #1a1a1a
- Text: #ffffff
- Accent: #0066cc

---

## 🔘 BUTTON STYLES

### Primary Button (Main CTA)
```css
Background: #0066cc
Text Color: #ffffff
Border: none
Padding: 12px 32px
Border Radius: 6px
Font Weight: 600
Transition: 0.3s ease
Hover State: Background #0052a3
```

### Secondary Button (Alternative CTA)
```css
Background: transparent
Border: 2px solid #1a1a1a
Text Color: #1a1a1a
Padding: 12px 32px
Border Radius: 6px
Font Weight: 600
Transition: 0.3s ease
Hover State: Background #f5f5f5
```

### Ghost Button
```css
Background: transparent
Text Color: #0066cc
Border: 1px solid #0066cc
Padding: 12px 32px
Border Radius: 6px
Font Weight: 600
Transition: 0.3s ease
Hover State: Background #e6f0ff
```

---

## 📝 TEXT STYLING GUIDE

### Headings
- Color: `#1a1a1a`
- Font: Poppins/Montserrat
- Font Weight: 700
- Letter Spacing: 0.5px
- Text Transform: Sentence case (not all caps)

### Subheadings
- Color: `#4a4a4a`
- Font: Open Sans/Roboto
- Font Weight: 500
- Letter Spacing: 0px
- Text Transform: Sentence case

### Body Text
- Color: `#4a4a4a`
- Font: Open Sans/Roboto
- Font Weight: 400
- Line Height: 1.6
- Letter Spacing: 0px

### Links
- Color: `#0066cc`
- Text Decoration: none (or underline on hover)
- Hover State: Color `#0052a3`, underline added

---

## 🌈 SHADOW & DEPTH

### Card Shadows
- **Light Shadow**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Medium Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Large Shadow**: `0 10px 15px rgba(0, 0, 0, 0.1)`

### Shadow on Hover
- **Elevated**: `0 20px 25px rgba(0, 0, 0, 0.15)`

### Interactive Elements
- Use `box-shadow` instead of `border` for modern look
- Subtle shadows for depth without distraction

---

## ✨ VISUAL EFFECTS

### Borders
- **Color**: `rgba(74, 74, 74, 0.2)` (MS Gray with opacity)
- **Width**: 1px
- **Radius**: 6px to 8px

### Gradients (Optional)
- **Hero Section**: `linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)`
- **Dark Section**: `linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)`
- **Accent Gradient**: `linear-gradient(90deg, #0066cc 0%, #0052a3 100%)`

### Transparency
- **Hover States**: `rgba(0, 102, 204, 0.1)` (10% opacity)
- **Overlays**: `rgba(0, 0, 0, 0.5)` (50% opacity)
- **Faded Text**: `rgba(74, 74, 74, 0.7)` (70% opacity)

---

## 🎬 ANIMATION & TRANSITION TIMING

### Durations
- **Quick**: 0.15s (micro interactions)
- **Standard**: 0.3s (button clicks, hover effects)
- **Slow**: 0.5s (scroll animations, transitions)
- **Slower**: 0.8s (carousel transitions)

### Easing Functions
- **Ease-in-out**: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth, professional)
- **Ease-out**: `cubic-bezier(0, 0, 0.2, 1)` (responsive feel)
- **Linear**: `linear` (continuous animations like carousels)

### Example
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🖼️ ICON STYLE GUIDE

### Icon Specifications
- **Color**: MS Black `#1a1a1a` or Accent Blue `#0066cc`
- **Stroke Width**: 2px
- **Size**: 24px (standard), 32px (large), 16px (small)
- **Style**: Line-based, geometric, modern

### Icon Usage
- Service section: Blue `#0066cc`
- Navigation: Black `#1a1a1a`
- Hover state: Slightly darker or lighter depending on background

---

## 📊 COLOR PALETTE SUMMARY

### Quick Reference Table
```
┌──────────────────────────────────────────────────────┐
│ Color Name    │ Hex Code │ RGB         │ Usage        │
├──────────────────────────────────────────────────────┤
│ MS Black      │ #1a1a1a  │ 26,26,26    │ Text, Logo   │
│ MS Gray       │ #4a4a4a  │ 74,74,74    │ Secondary    │
│ Light Gray    │ #f5f5f5  │ 245,245,245 │ Background   │
│ White         │ #ffffff  │ 255,255,255 │ Primary      │
│ Accent Blue   │ #0066cc  │ 0,102,204   │ CTA/Action   │
│ Success Green │ #22c55e  │ 34,197,94   │ Confirmations│
│ Error Red     │ #ef4444  │ 239,68,68   │ Errors       │
└──────────────────────────────────────────────────────┘
```

---

## 🔗 CSS VARIABLES (For Easy Implementation)

```css
:root {
  /* Primary Colors */
  --color-primary: #1a1a1a;
  --color-secondary: #4a4a4a;
  --color-light-gray: #f5f5f5;
  --color-white: #ffffff;
  --color-accent: #0066cc;
  
  /* Interactive States */
  --color-accent-dark: #0052a3;
  --color-accent-light: #e6f0ff;
  
  /* Semantic Colors */
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Typography */
  --font-heading: 'Poppins', 'Montserrat', sans-serif;
  --font-body: 'Open Sans', 'Roboto', sans-serif;
  
  /* Font Sizes */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 24px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-quick: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-standard: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

**This guide ensures consistent branding across your MS Services website. Use these colors, fonts, and styles throughout your design for a cohesive, professional appearance.**
