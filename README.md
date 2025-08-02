# MyClasses React Native App 📚

A modern React Native educational app built with Expo, featuring a clean architecture, optimized performance, and beautiful UI design for online education.

[![React Native](https://img.shields.io/badge/React%20Native-0.71.14-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~48.0.18-black.svg)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📱 Features

### ✨ Core Features
- **Course Management**: Browse and view detailed course information
- **User Profile**: Manage user information and preferences
- **Contact Form**: Get in touch with support using a modern contact form
- **About Section**: Learn about the developer with a professional profile
- **Responsive Design**: Optimized for all screen sizes and orientations

### 🎨 Design Features
- **Modern UI**: Clean, professional design with shadows and gradients
- **Stock Images**: High-quality images from reliable CDNs
- **Consistent Styling**: Unified color system and typography
- **Smooth Animations**: 60fps animations and transitions
- **Accessibility**: Proper contrast ratios and touch targets

## 📁 Project Structure

```
MyClasses-React-Native/
├── 📱 App.js                    # Main app component with navigation
├── 📦 package.json              # Dependencies and scripts
├── 📖 README.md                 # Project documentation
└── src/
    ├── 🧩 components/           # Reusable UI components
    │   └── Menu.js             # Navigation menu component
    ├── ⚙️ config/              # Configuration files
    │   ├── constants.js        # App constants and URLs
    │   ├── fonts.js           # Font configuration
    │   └── styles.js          # Centralized styles and colors
    ├── 📱 screens/             # Screen components
    │   ├── About.js           # About page
    │   ├── Contact.js         # Contact form
    │   ├── Course.js          # Course listing
    │   ├── CourseDetails.js   # Course details view
    │   └── UserData.js        # User profile management
    ├── 🔌 api/                # API and data files
    │   └── Courseapi.js       # Course data and API calls
    └── 🏠 Home.js             # Home screen
```

## 🛠️ Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Native** | 0.71.14 | Mobile app framework |
| **Expo** | ~48.0.18 | Development platform |
| **React Navigation** | ^6.1.9 | Navigation system |
| **Google Fonts** | Latest | Typography (Josefin Sans, Nunito, Work Sans) |
| **Expo Checkbox** | ~2.3.0 | Form components |

## 📱 Screens Overview

| Screen | Description | Key Features |
|--------|-------------|--------------|
| **🏠 Home** | Welcome screen | Feature highlights, navigation menu |
| **📚 Courses** | Course listing | Card layout, pricing, subject badges |
| **🔍 Course Details** | Individual course view | Detailed info, enrollment options |
| **📞 Contact** | Contact form | Validation, modern design |
| **👤 About** | Developer profile | Skills, social links, bio |
| **👨‍💼 Profile** | User management | Settings, preferences |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS) or Android Studio (for Android)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tuhin-SnapD/MyClasses-React-Native.git
   cd MyClasses-React-Native
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on Device/Simulator**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Web
   npm run web
   ```

## 🎨 Design System

### 🎨 Colors
```javascript
Primary: #4c5dab      // Professional blue
Secondary: #809fff    // Light blue accent
Text Primary: #2c3e50 // Dark text
Text Secondary: #7f8c8d // Medium text
Text Light: #95a5a6   // Light text
White: #ffffff        // Pure white
Light Gray: #f8f9fa   // Background
Success: #27ae60      // Green
Warning: #f39c12      // Orange
Error: #e74c3c        // Red
```

### 📝 Typography
- **Josefin Sans**: Regular, Medium (Body text)
- **Nunito**: SemiBold, Bold (Headers and emphasis)
- **Work Sans**: Alternative font option

## 🔧 Configuration

All app configuration is centralized in `src/config/`:

- `constants.js`: App constants, URLs, and social links
- `fonts.js`: Font loading and font family constants
- `styles.js`: Modern colors, common styles, and component configurations

## 🎯 Key Optimizations

### 1. **Centralized Configuration** ⚙️
- Single font loading hook (`useAppFonts`)
- Centralized color and style system
- All app constants in one place
- Consistent navigation headers

### 2. **Code Organization** 📁
- Clean component structure in `src/components/`
- Configuration files in `src/config/`
- Centralized constants and data
- Better separation of concerns

### 3. **Performance Improvements** ⚡
- Single font loading instead of multiple
- CDN-based images for faster loading
- Optimized component rendering
- Memory-efficient data structures

### 4. **Modern UI/UX Design** ✨
- Card-based layouts with shadows
- Professional color palette
- Consistent spacing and typography
- Smooth animations and transitions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Submit a pull request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on both iOS and Android
- Update documentation as needed

## 🐛 Known Issues

- None currently reported
- Please report issues in the GitHub repository

## 📄 License

This project is developed by **Tuhin Chakrabarty** as a React Native learning application.

---

**Framework**: React Native with Expo  
**Version**: 1.0.0  
**Last Updated**: January 2025

---

<div align="center">

⭐ **Star this repository if you found it helpful!** ⭐

</div> 
