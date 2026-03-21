# [CineSearch](https://github.com/ramanak003/Moive-Hunt) &middot; [![GitHub License](https://img.shields.io/github/license/ramanak003/Moive-Hunt?label=License)](https://github.com/ramanak003/Moive-Hunt/blob/main/LICENSE) ![GitHub Repo Views](https://gitviews.com/repo/ramanak003/Moive-Hunt.svg?style=flat&label-color=%23555&color=%23f59e0b)

A modern real-time movie explorer that allows users to instantly discover movies with live data fetched from the TMDB API.

[![Project Screenshot](https://raw.githubusercontent.com/ramanak003/Moive-Hunt/main/moviehunt/public/preview.png)](https://github.com/ramanak003/Moive-Hunt)

## Overview

**Movie Hunt** provides a seamless interface for cinematic exploration. By integrating with the TMDB API, it offers up-to-the-minute movie data, allowing users to search for their favorite films, view detailed insights, and stay on top of trending titles.

### Key Features

- **🔍 Real-Time Movie Search** – Instant results as you type, powered by TMDB.
- **🎬 Movie Details** – Deep dives into ratings, release dates, and story overviews.
- **📊 Trending Movies** – Keep your finger on the pulse with the latest popular releases.
- **⚡ API Integration** – Robust real-time data fetching for a dynamic experience.
- **📱 Responsive UI** – Fluid and intuitive design optimized for mobile and desktop viewports.
- **☁️ Deployment** – Professionally hosted and deployed via Vercel.

## Tech Stack

- **Framework**: [React.js](https://react.dev/)
- **Language**: JavaScript (ES6+)
- **Styling**: HTML5 & CSS3
- **API**: [TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (>= 22.0.0)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ramanak003/Moive-Hunt.git
   cd Moive-Hunt/moviehunt
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the `moviehunt` directory and add your TMDB API key:
   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` – Starts the development server at `http://localhost:5173`.
- `npm run build` – Creates an optimized production build in the `dist` folder.
- `npm run preview` – Locally preview the production build.

## Deployment

The project is optimized for deployment on Vercel or GitHub Pages.

### Deploy to Vercel

```bash
vercel deploy
```

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy  # Uses gh-pages package
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

> [!TIP]
> Make sure to get your API key from [The Movie Database](https://www.themoviedb.org/documentation/api) to enable movie data fetching.

> [!IMPORTANT]
> This project was modernized to match the design principles of [ramana.dev](https://ramana.dev).
