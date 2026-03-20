// server.js lives in: ~/Projects/gym-workout-planner/server/server.js
// This is the BACKEND — it runs at http://localhost:3001

import express from "express";
import cors from "cors";
import { gyms } from "./data/gyms.js";
import { exercises } from "./data/exercises.js";

const app = express();
app.use(cors());
app.use(express.json());

// --- HELPER: does this exercise match the selected category? ---
function exerciseMatchesGoal(ex, goal) {
  const goalKey = goal.toLowerCase().replace(" ", "_");
  return ex.category && ex.category.includes(goalKey);
}

// --- HELPER: does this exercise only use equipment the gym has? ---
function exerciseFitsGym(ex, gymEquipment) {
  return ex.equipment.every((item) => gymEquipment.includes(item));
}

// --- POST /api/workout ---
app.post("/api/workout", (req, res) => {
  const { gymId, level = "beginner", goal = "Back" } = req.body;
  console.log("Request received:", gymId, level, goal);

  const gym = gyms[gymId];
  if (!gym) {
    return res.status(400).json({ error: "Invalid gymId" });
  }

  // 1) Filter by category
  let pool = exercises.filter((ex) => exerciseMatchesGoal(ex, goal));

  // 2) Filter by gym equipment
  pool = pool.filter((ex) => exerciseFitsGym(ex, gym.equipment));

  // 3) Filter by level — higher levels can see easier exercises too
  const allowedLevels = {
    "beginner":     ["beginner", "all"],
    "intermediate": ["beginner", "intermediate", "all"],
    "advanced":     ["beginner", "intermediate", "advanced", "all"]
  };
  pool = pool.filter((ex) => allowedLevels[level].includes(ex.level));

  // 4) Shuffle for variety then sort so advanced exercises bubble up for advanced users
  pool = pool.sort(() => Math.random() - 0.5);
  const levelOrder = { "advanced": 0, "intermediate": 1, "beginner": 2, "all": 3 };
  pool = pool.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

  // 5) Pick one exercise per movement pattern (no repeated movements), max 5
  const workout = [];
  const usedMovements = new Set();

  for (const ex of pool) {
    if (usedMovements.has(ex.movement)) continue;
    workout.push(ex);
    usedMovements.add(ex.movement);
    if (workout.length === 5) break;
  }

  // 6) Attach a Plan B alternative for each exercise (same movement, different exercise)
  const workoutWithPlanB = workout.map((ex) => {
    const planBOptions = pool.filter(
      (p) => p.movement === ex.movement && p.name !== ex.name
    );
    // Pick a random Plan B from available options
    const planB = planBOptions.length > 0
      ? planBOptions[Math.floor(Math.random() * planBOptions.length)]
      : null;
    return { ...ex, planB };
  });

  res.json({
    gym: gym.name,
    goal,
    level,
    workout: workoutWithPlanB
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
