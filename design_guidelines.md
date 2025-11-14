# Music Playlist Application - Design Guidelines

## Design Approach
**Reference-Based:** Spotify-inspired modern music streaming interface
- Clean, dark-themed aesthetic with bold typography
- Card-based layouts with smooth transitions
- Focus on content hierarchy and visual feedback
- Touch-optimized controls for mobile-first experience

## Typography System
**Font Family:** Inter or similar modern sans-serif
- Song Titles: 1.2rem, font-weight 600
- Artist Names: 0.9rem, font-weight 400
- Header: 3.5rem (mobile: 2.5rem), font-weight 700
- Player Info: 1.3rem for current song, 0.9rem for metadata
- Time Stamps: 0.8-0.9rem, font-weight 400

## Layout & Spacing
**Tailwind Units:** Consistently use 4, 8, 12, 16, 24 units (p-4, gap-8, mb-12, etc.)
- Container: max-w-6xl with px-8 (mobile: px-4)
- Card Padding: p-6 (mobile: p-4)
- Section Gaps: gap-4 between song items
- Player Controls: p-8 (mobile: p-6)

## Component Library

### Header Section
- Centered layout with large heading and subtitle
- Icon integration with title
- Minimal padding: py-12 pb-8

### Song List Cards
- Grid layout (single column, full width)
- Each card displays: cover thumbnail (60x60px), song info, controls, progress bar
- Card structure: flex layout with items-center, gap-6
- Border radius: rounded-xl for cards
- Hover state: slight lift (translateY -2px) with enhanced shadow
- Active song: distinct visual treatment with border accent

### Album Cover Thumbnails
- 60x60px for list items, 80x80px for player display
- Rounded corners (rounded-lg)
- Gradient placeholders with centered music icon
- Each song can have unique gradient placeholder

### Media Player Controls (Bottom Sticky Player)
- Fixed/sticky positioning at bottom with backdrop blur
- Large play/pause button (60x60px circle) centered
- Previous/Next buttons flanking main control
- Separate progress bar with click-to-seek functionality
- Current song display with larger thumbnail (80x80px)
- Time display: current/duration on progress bar ends

### Individual Song Controls
- Small play button (40x40px circle) on each song card
- Integrated progress bar showing playback for active song
- Time stamps for duration

### Progress Bars
- Height: 4-6px with rounded ends
- Interactive cursor pointer
- Smooth transition animations
- Main player: 6px height
- Song items: 4px height

### Navigation Elements
- "Back to Home" button with icon + text
- Rounded-full button style with generous padding (px-8 py-4)
- Icon integration with gap-2

## Interaction & Animation Patterns
- Hover Effects: transform scale(1.05) on buttons, translateY(-2px) on cards
- Active States: Visual distinction through border/background treatment
- Transitions: all 0.3s ease for smooth interactions
- Progress Bar: 0.1s linear for real-time updates
- Pulse animation on playing indicator (optional subtle effect)

## Responsive Strategy
**Breakpoints:**
- Mobile (< 768px): Single column, stacked layouts
- Desktop (≥ 768px): Optimized horizontal layouts

**Mobile Adjustments:**
- Reduce font sizes by 20-30%
- Stack song card elements vertically (flex-col)
- Compress padding/spacing
- Ensure touch targets minimum 44x44px
- Maintain readable progress bars

## Images
No hero images required. Use:
- Gradient placeholder thumbnails for album covers (unique per song)
- Icon-based decoration (music notes, headphones)
- Keep focus on functional music player interface

## Layout Sections (Top to Bottom)
1. **Header** - Title, subtitle, icon decoration
2. **Song List** - 10-15 song cards in vertical grid
3. **Sticky Player** - Bottom-fixed media controls
4. **Back Button** - Below player or in header

## Accessibility & UX
- Clear visual hierarchy: title → artist → controls
- Adequate contrast for text on backgrounds
- Focus states on all interactive elements
- Touch-friendly spacing on mobile (minimum gaps of 4 units)
- Clear active/playing state indicators
- Readable time displays and progress feedback

## Key Design Principles
- **Content First:** Music information is primary, controls are secondary
- **Visual Feedback:** Every interaction provides clear response
- **Consistency:** Uniform spacing, border radius, and transition timing
- **Breathing Room:** Generous whitespace between interactive elements
- **Performance:** Smooth animations without overwhelming the interface