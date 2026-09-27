# 💪 FitLog — Workout Library

**FitLog** is a modern, responsive workout library and workout planning application built with **Next.js**. Users can explore workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage their daily workout routine.

## 🔗 Live Project

**GitHub Repository:**
https://github.com/Rezanur2/fit-log

## 🛠️ Technologies Used

* **Next.js** — App Router and page navigation
* **React** — Component-based UI development
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive design
* **DaisyUI** — UI components
* **React Icons** — Interface icons
* **React Toastify** — Toast notifications
* **REST API** — Workout data fetching

## ✨ Key Features

### 🏋️ Workout Library

Browse a collection of workouts with useful information including muscle groups, equipment, duration, calories, difficulty, and rating.

### 📋 Today's Plan

Add workouts to today's workout plan with a maximum limit of five exercises.

### 🔖 Save for Later

Save workouts for later and manage them separately from the Today's Plan tab.

### 📖 Workout Details

View detailed information about each workout including description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.

### 📊 Workout Metrics

Track the total number of planned exercises, workout duration in minutes, and estimated calories.

### 🔄 Sort Workouts

Sort workouts by:

* Duration
* Calories
* Rating

### ✅ Mark as Done

Mark a planned workout as completed and receive a toast notification.

### 🗑️ Remove Workouts

Remove workouts from Today's Plan or Saved workouts with confirmation notifications.

### 🔔 Toast Notifications

Users receive instant feedback when adding, saving, completing, or removing workouts.

### 📱 Fully Responsive

The application is designed to work smoothly on mobile, tablet, and desktop screen sizes.

### 🚨 Loading & 404 States

Includes loading animations while data is being fetched and a custom 404 page for invalid routes.

## 📄 Main Pages

| Page            | Route                   |
| --------------- | ----------------------- |
| Workout Library | `/`                     |
| My Plan         | `/my-plan`              |
| Workout Details | `/workouts/[workoutId]` |
| 404 Page        | Invalid routes          |

## 🔗 API

FitLog uses the following REST API to fetch workout data:

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   │
│   ├── workouts/
│   │   └── [workoutId]/
│   │       └── page.tsx
│   │
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── assets/
│
├── components/
│   ├── shared/
│   ├── workoutDetails/
│   └── workoutpage/
│
├── context/
│   ├── WorkoutContext.tsx
│   └── WorkoutContextType.tsx
│
└── types/
    └── workout.type.ts
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rezanur2/fit-log.git
```

### 2. Navigate to the project directory

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

## 📌 Project Highlights

* Next.js App Router
* Dynamic workout detail pages
* Shared state using React Context API
* Responsive workout card grid
* Today's Plan management
* Saved workout management
* Workout sorting
* Toast notifications
* Custom loading states
* Custom 404 page
* Responsive UI for all screen sizes

## 👨‍💻 Project Information

**Project Name:** FitLog
**Project Type:** Workout Library & Planning Application
**Framework:** Next.js
**Language:** TypeScript
**Styling:** Tailwind CSS + DaisyUI

---

> **Train hard. Log honest. 💪**
