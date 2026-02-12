# AI Trip Planner

A teaching project for building an AI-powered trip planning app with React, Tailwind, Firebase, and Gemini.

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS v4**
- **Firebase** (Auth, Firestore)
- **React Router**
- **Gemini API** (coming in Phase 3)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Firebase configuration

1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Authentication** → Email/Password sign-in
3. Go to Project Settings → General → Your apps → Add web app
4. Copy the config values and create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Run the app

```bash
npm run dev
```

## Project Phases

- **Phase 1** ✅ — Foundation (setup, layout, routing, landing page)
- **Phase 2** ✅ — Firebase Auth (login, signup, protected routes)
- **Phase 3** — AI Itinerary Generator (Gemini)
- **Phase 4** — Save trips to Firestore
- **Phase 5** — Polish & extras
