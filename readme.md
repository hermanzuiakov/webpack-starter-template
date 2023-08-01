# Webpack Starter Template

The Webpack Starter Template is a minimalistic and ready-to-use project template designed to streamline the setup process for modern web development projects. It leverages Webpack, a powerful and flexible module bundler, to efficiently bundle JavaScript, CSS, and other assets while providing essential development features like hot module replacement, live reloading, and optimized production builds.

- Webpack Configuration: The template comes pre-configured with Webpack and essential loaders and plugins for handling JavaScript, CSS (both regular CSS and SCSS), and image assets. This ensures a smooth development experience and optimal performance in production builds.
- Hot Module Replacement (HMR): During development, HMR is enabled, allowing for real-time updates to the application without the need to manually refresh the page. This significantly speeds up the development process.
- Live Reloading: In development mode, the project includes a live-reloading development server that automatically refreshes the page when changes are made, providing an instant preview of the modifications.
- Babel Integration: Babel is integrated to enable modern JavaScript features to be transpiled into older versions, ensuring broader browser compatibility.
- CSS Extraction: The template includes the MiniCssExtractPlugin, which extracts CSS into a separate file, reducing the load time and improving the performance of the application.
- Asset Management: With Webpack's asset management capabilities, images and other static assets can be easily imported and optimized for the production build.
- Bootstrap and Tailwind CSS Ready: The project is set up to allow easy integration of popular CSS frameworks like Bootstrap and Tailwind CSS, empowering developers to quickly prototype and build stunning user interfaces.
- Easy Installation: The template provides simple and clear installation instructions, making it accessible for developers of all skill levels to get started with their projects effortlessly.
- Whether you're a seasoned developer seeking a quick setup for your new project or a beginner looking to explore modern web development tools, the Webpack Starter Template is the perfect starting point. Enjoy a smooth development experience and unleash the full potential of Webpack to build performant, responsive, and visually appealing web applications.

## Table of Contents

- [Installation](#installation)
- [Build the Project](#build-the-project)
- [Running the Project](#running-the-project)

## Installation

1. Clone the repository:

git clone https://github.com/hermanzuiakov/webpack-starter-template.git

2. Navigate to the project folder:

cd your-repo

3. Install dependencies using Yarn or npm:

### Using Yarn

```
yarn install
```
### Using npm
```
npm install
```
## Build the Project
To build the project, run the following command:

### Using Yarn
```
yarn build
```
### Using npm
```
npm run build
```
The build output will be placed in the dist/ directory.

## Running the Project
To run the project in development mode with live reloading, use the following command:

### Using Yarn
```
yarn run dev
```
### Using npm
```
npm run dev
```

The development server will start, and you can access the project at http://localhost:3000.