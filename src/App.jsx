import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

// ─── Design tokens ─────────────────────────────────────────────────────────────
// Keeping all colours in one place makes React Native migration straightforward.
const C = {
  bg:           "#0f172a",
  surface:      "#1e293b",
  surfaceHigh:  "#263548",
  primary:      "#8b5cf6",
  primaryFaint: "rgba(139,92,246,0.12)",
  primaryLight: "#a78bfa",
  text:         "#f1f5f9",
  textMuted:    "#94a3b8",
  border:       "#334155",
  success:      "#10b981",
  warning:      "#f59e0b",
};

// ─── Category config ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { name: "Legs",      icon: "🦵", gradient: "linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)" },
  { name: "Back",      icon: "🏋️", gradient: "linear-gradient(135deg, #0f766e 0%, #0284c7 100%)" },
  { name: "Arms",      icon: "💪", gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" },
  { name: "Full Body", icon: "⚡", gradient: "linear-gradient(135deg, #b45309 0%, #dc2626 100%)" },
  { name: "HIIT",      icon: "🔥", gradient: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)" },
  { name: "Glutes",    icon: "🍑", gradient: "linear-gradient(135deg, #be185d 0%, #e11d48 100%)" },
  { name: "Chest",     icon: "🤸", gradient: "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)" },
  { name: "Shoulders", icon: "🔝", gradient: "linear-gradient(135deg, #0e7490 0%, #6d28d9 100%)" },
];

const LEVELS = [
  { id: "beginner",     label: "Beginner",      icon: "🌱", desc: "Machines & fundamental movements" },
  { id: "intermediate", label: "Intermediate",   icon: "⚡", desc: "Free weights & progressive loading" },
  { id: "advanced",     label: "Advanced",       icon: "🔥", desc: "Complex patterns & heavy loads" },
];

// Reads VITE_API_URL in production (set this in Vercel).
// Falls back to localhost for local development.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// ─── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [activeTab,        setActiveTab]        = useState("workout");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel,    setSelectedLevel]    = useState(null);
  const [workoutData,      setWorkoutData]      = useState(null);
  const [logData,          setLogData]          = useState({});
  const [loading,          setLoading]          = useState(false);
  const [sessionId,        setSessionId]        = useState(null);
  const [pastWorkouts,     setPastWorkouts]     = useState([]);
  const [userId,           setUserId]           = useState(null);

  // ── Anonymous user ID (persists across page refreshes via localStorage) ──────
  useEffect(() => {
    let id = localStorage.getItem("workoutUserId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("workoutUserId", id);
    }
    setUserId(id);
  }, []);

  // ── Load past workouts whenever the Progress tab becomes active ───────────────
  useEffect(() => {
    if (activeTab === "progress" && userId && supabase) {
      loadPastWorkouts();
    }
  }, [activeTab, userId]);

  // ── Generate workout ──────────────────────────────────────────────────────────
  async function generateWorkout() {
    if (!selectedCategory || !selectedLevel) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/workout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gymId: "hour24", level: selectedLevel, goal: selectedCategory }),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      setWorkoutData(data);
      setLogData({});

      // Create a session row in Supabase (non-blocking — failures are silent)
      if (supabase && userId) {
        supabase
          .from("workout_sessions")
          .insert({ user_key: userId, gym: data.gym, goal: data.goal, level: data.level })
          .select("id")
          .single()
          .then(({ data: session }) => {
            if (session) setSessionId(session.id);
          });
      }
    } catch (err) {
      alert("Could not reach the server. Make sure the backend is running and try again.");
    } finally {
      setLoading(false);
    }
  }

  // ── Set logging ───────────────────────────────────────────────────────────────
  function addSet(name) {
    setLogData(prev => ({
      ...prev,
      [name]: [...(prev[name] || []), { weight: "", reps: "", done: false }],
    }));
  }

  function updateSet(name, i, field, value) {
    setLogData(prev => {
      const sets = [...(prev[name] || [])];
      sets[i] = { ...sets[i], [field]: value };
      return { ...prev, [name]: sets };
    });
  }

  function toggleDone(name, i) {
    setLogData(prev => {
      const sets = [...(prev[name] || [])];
      const updated = { ...sets[i], done: !sets[i].done };
      sets[i] = updated;

      // Persist to Supabase when a set is marked done/undone
      if (supabase && sessionId) {
        supabase.from("workout_logs").upsert(
          {
            session_id:    sessionId,
            exercise_name: name,
            set_number:    i + 1,
            weight:        updated.weight,
            reps:          updated.reps,
            done:          updated.done,
            updated_at:    new Date().toISOString(),
          },
          { onConflict: "session_id,exercise_name,set_number" }
        );
      }

      return { ...prev, [name]: sets };
    });
  }

  // ── Past workouts ─────────────────────────────────────────────────────────────
  async function loadPastWorkouts() {
    if (!supabase || !userId) return;
    const { data } = await supabase
      .from("workout_sessions")
      .select("*")
      .eq("user_key", userId)
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setPastWorkouts(data);
  }

  // ── Reset ─────────────────────────────────────────────────────────────────────
  function resetWorkout() {
    setWorkoutData(null);
    setLogData({});
    setSessionId(null);
    setSelectedCategory(null);
    setSelectedLevel(null);
  }

  // ─── Render ───────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── TOP NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        backgroundColor: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 20px",
        display: "flex", alignItems: "center",
        height: "58px", gap: "4px",
      }}>
        <span style={{ fontWeight: "800", fontSize: "18px", color: C.primaryLight, marginRight: "auto", letterSpacing: "-0.5px" }}>
          GymPlan
        </span>
        {["home", "workout", "progress"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "7px 15px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: activeTab === tab ? C.primaryFaint : "transparent",
            color: activeTab === tab ? C.primaryLight : C.textMuted,
            fontWeight: activeTab === tab ? "700" : "500",
            cursor: "pointer",
            fontSize: "14px",
            textTransform: "capitalize",
            transition: "all 0.15s",
          }}>
            {tab}
          </button>
        ))}
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "28px 16px 80px" }}>

        {/* ── HOME TAB ── */}
        {activeTab === "home" && (
          <div style={{ textAlign: "center", paddingTop: "48px" }}>
            <div style={{ fontSize: "72px", marginBottom: "20px" }}>💪</div>
            <h1 style={{ fontSize: "34px", fontWeight: "800", margin: "0 0 14px", letterSpacing: "-1.5px" }}>
              GymPlan
            </h1>
            <p style={{ color: C.textMuted, fontSize: "17px", lineHeight: "1.7", maxWidth: "340px", margin: "0 auto 36px" }}>
              Your personal workout generator. Pick a muscle group, your level, and get a smart program built for your gym.
            </p>
            <button onClick={() => setActiveTab("workout")} style={{
              padding: "16px 36px",
              backgroundColor: C.primary,
              color: "white", border: "none",
              borderRadius: "14px",
              fontSize: "17px", fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 8px 28px rgba(139,92,246,0.4)",
              letterSpacing: "-0.3px",
            }}>
              Start Workout →
            </button>
          </div>
        )}

        {/* ── WORKOUT BUILDER TAB (before generating) ── */}
        {activeTab === "workout" && !workoutData && (
          <div>
            <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "6px", letterSpacing: "-0.8px" }}>
              What are we training?
            </h2>
            <p style={{ color: C.textMuted, marginBottom: "24px", fontSize: "15px", margin: "0 0 24px" }}>
              Choose a muscle group to target today.
            </p>

            {/* ── CATEGORY 2-COLUMN GRID ── */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {CATEGORIES.map(cat => {
                const isSelected = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      height: "120px",
                      borderRadius: "18px",
                      border: isSelected ? `2.5px solid ${C.primaryLight}` : "2.5px solid transparent",
                      background: cat.gradient,
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      gap: "10px", cursor: "pointer",
                      boxShadow: isSelected
                        ? `0 0 0 4px rgba(167,139,250,0.25), 0 8px 24px rgba(0,0,0,0.4)`
                        : "0 4px 16px rgba(0,0,0,0.35)",
                      transform: isSelected ? "scale(1.03)" : "scale(1)",
                      transition: "all 0.18s ease",
                    }}
                  >
                    <span style={{ fontSize: "34px" }}>{cat.icon}</span>
                    <span style={{ color: "white", fontWeight: "700", fontSize: "15px", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── LEVEL PICKER (shows after category selected) ── */}
            {selectedCategory && (
              <div style={{ marginBottom: "28px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "14px", letterSpacing: "-0.3px" }}>
                  Pick your level
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {LEVELS.map(lv => {
                    const isSelected = selectedLevel === lv.id;
                    return (
                      <button key={lv.id} onClick={() => setSelectedLevel(lv.id)} style={{
                        padding: "16px 20px",
                        borderRadius: "14px",
                        border: isSelected ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
                        backgroundColor: isSelected ? C.primaryFaint : C.surface,
                        color: C.text,
                        display: "flex", alignItems: "center", gap: "14px",
                        cursor: "pointer", textAlign: "left",
                        transition: "all 0.15s",
                      }}>
                        <span style={{ fontSize: "26px" }}>{lv.icon}</span>
                        <div>
                          <div style={{ fontWeight: "700", fontSize: "15px" }}>{lv.label}</div>
                          <div style={{ color: C.textMuted, fontSize: "13px", marginTop: "2px" }}>{lv.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── GENERATE BUTTON ── */}
            {selectedCategory && selectedLevel && (
              <button onClick={generateWorkout} disabled={loading} style={{
                width: "100%", padding: "18px",
                borderRadius: "16px", border: "none",
                backgroundColor: loading ? C.border : C.primary,
                color: "white",
                fontSize: "17px", fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : "0 8px 28px rgba(139,92,246,0.4)",
                transition: "all 0.2s",
                letterSpacing: "-0.3px",
              }}>
                {loading ? "Building your workout…" : `Generate ${selectedCategory} Workout →`}
              </button>
            )}
          </div>
        )}

        {/* ── WORKOUT RESULTS ── */}
        {activeTab === "workout" && workoutData && (
          <div>
            {/* Session header */}
            <div style={{
              backgroundColor: C.surface,
              borderRadius: "20px",
              padding: "20px 22px",
              marginBottom: "20px",
              border: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                  {workoutData.goal} Day 💪
                </h2>
                <p style={{ margin: "5px 0 0", color: C.textMuted, fontSize: "13px" }}>
                  {workoutData.gym} · {workoutData.level}
                </p>
              </div>
              <button onClick={resetWorkout} style={{
                padding: "8px 14px",
                borderRadius: "10px",
                border: `1px solid ${C.border}`,
                backgroundColor: "transparent",
                color: C.textMuted,
                fontSize: "13px", fontWeight: "600",
                cursor: "pointer",
              }}>
                ↺ Reset
              </button>
            </div>

            {workoutData.workout.map((exercise, i) => (
              <ExerciseCard
                key={i}
                exercise={exercise}
                index={i}
                sets={logData[exercise.name] || []}
                onAddSet={() => addSet(exercise.name)}
                onUpdateSet={(si, field, val) => updateSet(exercise.name, si, field, val)}
                onToggleDone={(si) => toggleDone(exercise.name, si)}
              />
            ))}
          </div>
        )}

        {/* ── PROGRESS TAB ── */}
        {activeTab === "progress" && (
          <div>
            <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "6px", letterSpacing: "-0.8px" }}>
              Your Progress
            </h2>
            <p style={{ color: C.textMuted, marginBottom: "24px", fontSize: "15px", margin: "0 0 24px" }}>
              {supabase ? "Recent workout sessions" : "Set up Supabase to track your history across sessions."}
            </p>

            {!supabase && (
              <div style={{
                backgroundColor: C.surface, border: `1px solid ${C.border}`,
                borderRadius: "18px", padding: "32px", textAlign: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "14px" }}>📊</div>
                <p style={{ color: C.textMuted, fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                  Progress tracking requires Supabase. Add{" "}
                  <code style={{ color: C.primaryLight, backgroundColor: C.bg, padding: "2px 6px", borderRadius: "4px" }}>VITE_SUPABASE_URL</code>{" "}
                  and{" "}
                  <code style={{ color: C.primaryLight, backgroundColor: C.bg, padding: "2px 6px", borderRadius: "4px" }}>VITE_SUPABASE_ANON_KEY</code>{" "}
                  to your environment variables.
                </p>
              </div>
            )}

            {supabase && pastWorkouts.length === 0 && (
              <div style={{
                backgroundColor: C.surface, border: `1px solid ${C.border}`,
                borderRadius: "18px", padding: "32px", textAlign: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "14px" }}>🏃</div>
                <p style={{ color: C.textMuted, fontSize: "15px", margin: 0 }}>
                  No workouts logged yet. Generate your first workout to start tracking!
                </p>
              </div>
            )}

            {pastWorkouts.map(session => (
              <div key={session.id} style={{
                backgroundColor: C.surface, border: `1px solid ${C.border}`,
                borderRadius: "14px", padding: "16px 20px",
                marginBottom: "10px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>{session.goal} Day</div>
                  <div style={{ color: C.textMuted, fontSize: "13px", marginTop: "3px" }}>
                    {session.level} · {new Date(session.created_at).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric"
                    })}
                  </div>
                </div>
                <div style={{
                  backgroundColor: C.primaryFaint, color: C.primaryLight,
                  borderRadius: "8px", padding: "4px 12px",
                  fontSize: "13px", fontWeight: "600",
                }}>
                  {session.goal}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Exercise Card ─────────────────────────────────────────────────────────────
function ExerciseCard({ exercise, index, sets, onAddSet, onUpdateSet, onToggleDone }) {
  const [showPlanB, setShowPlanB] = useState(false);

  return (
    <div style={{
      backgroundColor: C.surface,
      borderRadius: "20px",
      padding: "20px",
      marginBottom: "14px",
      border: `1px solid ${C.border}`,
    }}>
      {/* Exercise header */}
      <div style={{ marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <span style={{
            backgroundColor: C.primaryFaint, color: C.primaryLight,
            borderRadius: "8px", padding: "3px 10px",
            fontSize: "12px", fontWeight: "700",
          }}>
            {index + 1}
          </span>
          <h3 style={{ margin: 0, fontSize: "17px", fontWeight: "700", letterSpacing: "-0.3px" }}>
            {exercise.name}
          </h3>
        </div>
        <p style={{ color: C.textMuted, fontSize: "13px", margin: 0, lineHeight: "1.55" }}>
          💡 {exercise.notes}
        </p>
      </div>

      {/* Log table */}
      {sets.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "12px" }}>
          <thead>
            <tr>
              {["Set", "kg", "Reps", "✓"].map((h, i) => (
                <th key={h} style={{
                  padding: "6px 8px",
                  textAlign: i === 3 ? "center" : "left",
                  color: C.textMuted, fontSize: "11px",
                  fontWeight: "600", letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sets.map((set, si) => (
              <tr key={si} style={{ borderTop: `1px solid ${C.border}` }}>
                <td style={{ padding: "8px", color: C.textMuted, fontSize: "14px" }}>{si + 1}</td>
                <td style={{ padding: "8px" }}>
                  <input
                    type="number"
                    value={set.weight}
                    onChange={e => onUpdateSet(si, "weight", e.target.value)}
                    placeholder="—"
                    style={{
                      width: "56px", padding: "6px 8px",
                      borderRadius: "8px",
                      border: `1px solid ${C.border}`,
                      backgroundColor: C.bg,
                      color: C.text, fontSize: "14px", fontWeight: "600",
                      outline: "none",
                    }}
                  />
                </td>
                <td style={{ padding: "8px" }}>
                  <input
                    type="number"
                    value={set.reps}
                    onChange={e => onUpdateSet(si, "reps", e.target.value)}
                    placeholder="—"
                    style={{
                      width: "56px", padding: "6px 8px",
                      borderRadius: "8px",
                      border: `1px solid ${C.border}`,
                      backgroundColor: C.bg,
                      color: C.text, fontSize: "14px", fontWeight: "600",
                      outline: "none",
                    }}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <button onClick={() => onToggleDone(si)} style={{
                    width: "30px", height: "30px",
                    borderRadius: "8px",
                    border: `2px solid ${set.done ? C.success : C.border}`,
                    backgroundColor: set.done ? C.success : "transparent",
                    color: set.done ? "white" : C.textMuted,
                    cursor: "pointer",
                    fontSize: "15px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto",
                    transition: "all 0.15s",
                  }}>
                    {set.done ? "✓" : ""}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button onClick={onAddSet} style={{
          padding: "8px 16px",
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          backgroundColor: "transparent",
          color: C.primaryLight,
          fontSize: "13px", fontWeight: "600",
          cursor: "pointer",
        }}>
          + Add Set
        </button>

        {exercise.planB && (
          <button onClick={() => setShowPlanB(v => !v)} style={{
            padding: "8px 16px",
            borderRadius: "10px",
            border: `1px solid rgba(245,158,11,0.3)`,
            backgroundColor: showPlanB ? "rgba(245,158,11,0.08)" : "transparent",
            color: C.warning,
            fontSize: "13px", fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.15s",
          }}>
            {showPlanB ? "▼ Plan B" : "⚡ Equipment busy?"}
          </button>
        )}
      </div>

      {/* Plan B section */}
      {showPlanB && exercise.planB && (
        <div style={{
          marginTop: "14px",
          padding: "14px 16px",
          borderRadius: "12px",
          backgroundColor: "rgba(245,158,11,0.06)",
          border: "1px solid rgba(245,158,11,0.2)",
        }}>
          <div style={{ fontSize: "11px", fontWeight: "700", color: C.warning, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "6px" }}>
            Plan B — Equipment Busy?
          </div>
          <div style={{ fontWeight: "700", fontSize: "15px", marginBottom: "5px" }}>
            {exercise.planB.name}
          </div>
          <div style={{ color: C.textMuted, fontSize: "13px", lineHeight: "1.5" }}>
            {exercise.planB.notes}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
