# React Portfolio/Landing Page

A modern, responsive React application featuring smooth animations and a clean dark theme design.

## Features

- **Modern React Architecture**: Built with functional components and hooks
- **Smooth Animations**: Integrated AOS (Animate On Scroll) library for engaging user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Elegant dark gray color scheme
- **Component-Based Structure**: Modular and maintainable code organization

## Tech Stack

- **React** - Frontend JavaScript library
- **AOS (Animate On Scroll)** - Animation library for scroll-triggered animations
- **Tailwind CSS** - Utility-first CSS framework (assumed based on class names)
- **ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js         # Navigation header component
│   └── Hero.js           # Hero section component
├── App.js                # Main application component
└── index.js              # Application entry point
```

## Components

### App Component
- Main application wrapper
- Initializes AOS animations
- Manages global layout and styling
- Implements responsive container structure

### Header Component
- Navigation header
- Responsive design for mobile and desktop

### Hero Component
- Landing page hero section
- Likely contains main call-to-action content

## Animation Configuration

The app uses AOS (Animate On Scroll) with the following settings:
- **Duration**: 1500ms animation duration
- **Once**: Animations trigger only once
- **Offset**: 100px offset before triggering animations

## Styling

The application uses a dark theme with:
- Background: `bg-gray-900` (dark gray)
- Text: `text-white` (white text)
- Responsive padding and margins
- Full viewport height layout

## Scripts

```json
{
  "start": "Start development server",
  "build": "Create production build",
  "test": "Run test suite",
  "eject": "Eject from Create React App"
}
```

## Dependencies

```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "aos": "^2.x.x"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Adding New Components

1. Create component file in `src/components/`
2. Import and use in `App.js` or other components
3. Add AOS attributes for animations:

```jsx
<div data-aos="fade-up" data-aos-delay="200">
  Your content here
</div>
```

### Available AOS Animations

- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-up`, `flip-down`, `flip-left`, `flip-right`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Customization

### Changing Theme Colors

Update Tailwind classes in `App.js`:
```jsx
// Current dark theme
<div className="min-h-screen flex flex-col bg-gray-900 text-white">

// Light theme example
<div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
```

### Modifying Animations

Update AOS configuration in `App.js`:
```jsx
AOS.init({
  duration: 1000,        // Animation duration
  once: false,           // Repeat animations
  offset: 50,            // Trigger offset
  delay: 100,            // Animation delay
});
```

## Performance Optimization

- Components use React.memo() where appropriate
- AOS cleanup in useEffect return function
- Responsive images and lazy loading recommended
- Code splitting for larger applications

## Troubleshooting

### Common Issues

1. **AOS animations not working**:
   - Ensure AOS CSS is imported
   - Check that AOS.init() is called
   - Verify data-aos attributes are correctly applied

2. **Styling issues**:
   - Confirm Tailwind CSS is properly configured
   - Check for conflicting CSS classes
   - Verify responsive breakpoints

3. **Build errors**:
   - Clear node_modules and reinstall
   - Check for missing dependencies
   - Verify React version compatibility

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/) for smooth scroll animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React](https://reactjs.org/) for the component architecture

## Contact

For questions or support, please open an issue in the GitHub repository.
