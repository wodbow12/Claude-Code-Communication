# 🍵 Japanese Tea Shop Design System

A harmonious and zen-like design system for traditional Japanese tea shop websites, featuring calming colors, peaceful typography, and mindful layouts.

## 🎨 Design Philosophy

This design system embodies the principles of Japanese aesthetics:
- **Wabi-Sabi**: Beauty in imperfection and impermanence
- **Ma**: The use of negative space and breathing room
- **Kanso**: Simplicity and elimination of clutter
- **Shizen**: Naturalness without pretense

## 🎯 Color Palette

### Primary Colors (Earth Tones)
- **50**: `#f7f5f3` - Light cream
- **500**: `#9d845f` - Warm brown
- **900**: `#4a4135` - Deep earth

### Secondary Colors (Natural Green)
- **50**: `#f0f4f1` - Soft mint
- **500**: `#507a58` - Forest green
- **900**: `#263629` - Deep forest

### Accent Colors (Warm Terracotta)
- **50**: `#fdf4f0` - Light peach
- **500**: `#d35d37` - Warm terracotta
- **900**: `#6b2b23` - Deep rust

## 📝 Typography

### Font Families
- **Primary**: Noto Sans JP (Clean, modern Japanese typography)
- **Secondary**: Noto Serif JP (Traditional, elegant for headings)
- **Mono**: Fira Code (For code elements)

### Typography Classes
- `.typography-heading-1` - Main page titles
- `.typography-heading-2` - Section headings
- `.typography-body` - Regular text
- `.typography-zen` - Special meditative text styling

## 🧩 Components

### Layout Components
- **ZenContainer**: Responsive container with max-width
- **ZenSection**: Page sections with consistent spacing
- **ZenGrid**: Flexible grid system
- **ZenCard**: Elevated content cards
- **ZenDivider**: Subtle content separators
- **ZenSpacer**: Consistent vertical spacing

### Interactive Components
- **ZenButton**: Primary action buttons with hover effects
- **ZenIconButton**: Circular icon buttons
- **ZenInput**: Form inputs with zen styling
- **ZenTextarea**: Multi-line text inputs
- **ZenSelect**: Dropdown selectors

### Navigation Components
- **ZenHeader**: Sticky navigation header
- **ZenNavLink**: Navigation links with active states
- **ZenLogo**: Brand logo component
- **ZenBreadcrumb**: Page navigation breadcrumbs

### Specialized Components
- **TeaCard**: Product cards for tea items
- **InfoCard**: Information display cards

## 🚀 Usage

### Installation
```bash
npm install japanese-tea-shop-design-system
```

### Basic Usage
```jsx
import { ZenContainer, ZenButton, TeaCard } from 'japanese-tea-shop-design-system';

function App() {
  return (
    <ZenContainer>
      <TeaCard 
        name="Matcha Supreme"
        description="Premium ceremonial grade matcha from Uji, Kyoto"
        price="3200"
        origin="Kyoto, Japan"
      />
      <ZenButton variant="primary">
        Add to Cart
      </ZenButton>
    </ZenContainer>
  );
}
```

### CSS Variables
All components use CSS custom properties for easy theming:
```css
:root {
  --color-primary-500: #9d845f;
  --color-secondary-500: #507a58;
  --font-primary: "Noto Sans JP", sans-serif;
  --font-secondary: "Noto Serif JP", serif;
}
```

## 🎨 Design Tokens

All design tokens are available in `design-tokens/tokens.json`:
- Colors (Primary, Secondary, Neutral, Accent)
- Typography (Font families, sizes, weights)
- Spacing (Consistent scale)
- Border radius
- Shadows

## 📁 Project Structure

```
japanese-tea-shop/
├── design-tokens/
│   └── tokens.json
├── styles/
│   └── typography.css
├── components/
│   ├── Layout.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navigation.jsx
│   ├── Form.jsx
│   └── index.js
└── docs/
    └── README.md
```

## 🌸 Contributing

When contributing to this design system:
1. Follow the Japanese aesthetic principles
2. Maintain consistency with existing components
3. Use the established design tokens
4. Test components for accessibility
5. Document any new components

## 📜 License

MIT License - Feel free to use in your tea shop or similar projects that appreciate Japanese design aesthetics.