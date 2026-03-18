import { useState } from "react"; 

function App() {
  const [ activeTab, setActiveTab] = useState ( "workout" ); 
  const [ selectedCategory, setSelectedCategory] = useState ( null);  // null means this variable exists but holds nothing in it yet//
  const [selectedLevel, setSelectedLevel ] = useState (null); 
  const [ workoutData, setWorkoutData ] = useState ( null );
  const [ logData, setLogData ] = useState ({}); 

async function generateWorkout() {
  try {
    console.log("fetching...");
    const res = await fetch("http://localhost:3001/api/workout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gymId: "hour24",
        level: selectedLevel,
        goal: selectedCategory
      })
    });
    console.log("response received:", res.status);
    const data = await res.json();
    console.log("data:", data);
    setWorkoutData(data);
  } catch (err) {
    alert("Error: " + err.message);
  }
}

function addSet(exerciseName) {
  setLogData((prev) => ({
    ...prev, 
    [exerciseName]: [...(prev[exerciseName] || []) , { weight: "", reps: "", done:false }]
  }))
}

function updateSet(exerciseName, setIndex, field, value) {
  setLogData(prev => {
    const sets = [...(prev[exerciseName] || [])];
    sets[setIndex] = { ...sets[setIndex], [field]: value };
    return { ...prev, [exerciseName]: sets };
  });
}

function toggleDone(exerciseName, setIndex) {
  setLogData(prev => {
    const sets = [...(prev[exerciseName] || [])];
    sets[setIndex] = { ...sets[setIndex], done: !sets[setIndex].done };
    return { ...prev, [exerciseName]: sets };
  });
}

  return( 
    <div style= {{
      minHeight: "100vh", // vh is viewport height, so 100vh means 100% of the viewport height//
      backgroundColor: "rgb(227, 217, 244)", 
      fontFamily: "sans-serif"
    }} >  

    {/* TOP NAVIGATION BAR */}

    <div style= {{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "12px",
      padding: "20px" , //adds 20px(pixels) of space to all four coners//
      backgroundColor: "white", 
      boxShadow: " 0 2px 8px rgba(0,0,0,0.06)"
    }}>

     <button 
  onClick={() => setActiveTab("home")}
  style={{
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: activeTab === "home" ? "#7c5cbf" : "transparent",
    color: activeTab === "home" ? "white" : "#7c5cbf",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px"
  }}
>
  Home
</button>

      <button 
  onClick={() => setActiveTab("workout")}
  style={{
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: activeTab === "workout" ? "#7c5cbf" : "transparent",
    color: activeTab === "workout" ? "white" : "#7c5cbf",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px"
  }}
>
  Workout
</button>

      <button 
  onClick={() => setActiveTab("progress")}
  style={{
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: activeTab === "progress" ? "#7c5cbf" : "transparent",
    color: activeTab === "progress" ? "white" : "#7c5cbf",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px"
  }}
>
  Progress
</button>
      </div>

      <div style = {{
        padding: "20px", 
        maxWidth:  "700px",
        margin: "0 auto", 
      }}>
        { activeTab === "home" && <p> Home page coming soon! </p>}
        { activeTab === "workout" && (
          <div> 
            <h2 style = {{ 
              textAlign: "center",
              color: "#7c5cbf" ,
              marginBottom: "24px"
            }}>
              What are we training today? 
              </h2>

              <div style = {{ 
                display: "flex",
                flexDirection: "column", 
                gap: "16px", 
              }}> 
                 {[
                  { name: "Legs" , color: "#898AC4", icon: "🦵" },
                  { name: "Back" , color: "#A28CFF", icon: "🏋️" },
                  { name: "Arms" , color: "#C084FC", icon: "💪" },
                  { name: "Full Body" , color: "#EDE9FE", icon: "⚡" },
                  { name: "HIIT" , color: "#F5D0FE", icon: "🔥" },
                  {name: "Glutes" , color: "#D8B4FE", icon: "🍑"},
                  {name: "Chest" , color: "#E9D5FF", icon: "🤸‍♀️"},
                  {name: "Shoulders" , color:"#F3E8FF", icon: "🤼‍♂️"},
                 ].map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                      padding: "20px " ,
                      width: "100%" ,
                      borderRadius: "16px" , 
                      border: "none" , 
                      backgroundColor: selectedCategory === category.name ? "#c084fc" : "#ede9fe" , 
                      color: "#2e1065" , 
                      fontSize: "18px" , 
                      fontWeight: "bold" , 
                      cursor: "pointer" , 
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)" , 
                      textAlign: "left"
                    }}
                  >
                    {category.icon} {category.name}
                  </button>
                 ))}
                </div>

              {selectedCategory !== null && (
                <div style= {{
                  marginTop: "32px"
                }}>
                  <h3 style= {{
                    textAlign: "center" , 
                    color: "#7c5cbf" , 
                    marginBottom: "16px"
                  }}>
                    Pick your level 💪
                  </h3>

                  <div style={{
                    display: "flex" , 
                    flexDirection: "column" ,
                    gap: "12px"
                  }}>
                    {["beginner", "intermediate", "advanced"].map((level) => (
                      <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      style={{
                        padding: "16px" ,
                        width: "100%" ,
                        borderRadius: "16px" , 
                        border: "none" ,
                        backgroundColor: selectedLevel === level ? "#c084fc" : "#ede9fe" , 
                        color: "#2e1065" ,
                        fontSize: "16px" , 
                        fontWeight: "bold" ,
                        cursor: "pointer" ,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)" ,
                        textAlign: "left"
                      }}
                      >
                        {level === "beginner" && "🌱 Beginner"}
                        {level === "intermediate" && "⚡ Intermediate"}
                        {level === "advanced" && "🔥 Advanced"}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              { selectedCategory !== null && selectedLevel &&(
                <div style = {{
                  marginTop: "24px"
                }}>
                  <button
                    onClick={generateWorkout}
                    style= {{ 
                      width: "100%",
                      padding: "18px",
                      borderRadius: "16px", 
                      border: "none",
                      backgroundColor: "#7c5cbf",
                      color: "white", 
                      fontSize: "18px",
                      fontWeight: "bold", 
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(124,92,191,0.3)"
                    }}
                    > 
                    Generate My { selectedCategory} workout 
                    </button>
                    </div>
              )}
            </div>
        )}
        {workoutData && (
          <div style={{ marginTop: "32px" }}>
            <h2 style={{
              textAlign: "center",
              color: "#7c5cbf",
              marginBottom: "8px"
            }}>
              {workoutData.gym} — {workoutData.goal} Day 💪
            </h2>
            <p style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "24px"
            }}>
              Level: {workoutData.level}
            </p>

            {workoutData.workout.map((exercise, index) => (
              <div key={index} style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}>
                <h3 style={{ color: "#7c5cbf", marginBottom: "12px" }}>
                  {index + 1}. {exercise.name}
                </h3>
                <p style={{
                  color: "#6b7280",
                  marginBottom: "16px",
                  fontStyle: "italic"
                }}>
                  💡 {exercise.notes}
                </p>

                {/* LOG TABLE */}
<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "12px" }}>
  <thead>
    <tr style={{ color: "#9ca3af", fontSize: "13px", textAlign: "left" }}>
      <th style={{ padding: "6px" }}>SET</th>
      <th style={{ padding: "6px" }}>WEIGHT</th>
      <th style={{ padding: "6px" }}>REPS</th>
      <th style={{ padding: "6px" }}>✓</th>
    </tr>
  </thead>
  <tbody>
    {(logData[exercise.name] || []).map((set, setIndex) => (
      <tr key={setIndex}>
        <td style={{ padding: "6px", color: "#6b7280" }}>{setIndex + 1}</td>
        <td style={{ padding: "6px" }}>
          <input
            type="number"
            value={set.weight}
            onChange={(e) => updateSet(exercise.name, setIndex, "weight", e.target.value)}
            style={{ width: "60px", padding: "4px", borderRadius: "6px", border: "1px solid #e9d5ff" }}
          />
        </td>
        <td style={{ padding: "6px" }}>
          <input
            type="number"
            value={set.reps}
            onChange={(e) => updateSet(exercise.name, setIndex, "reps", e.target.value)}
            style={{ width: "60px", padding: "4px", borderRadius: "6px", border: "1px solid #e9d5ff" }}
          />
        </td>
        <td style={{ padding: "6px" }}>
          <input
            type="checkbox"
            checked={set.done}
            onChange={() => toggleDone(exercise.name, setIndex)}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

<button
  onClick={() => addSet(exercise.name)}
  style={{
    backgroundColor: "transparent",
    border: "1px solid #c084fc",
    color: "#7c5cbf",
    borderRadius: "8px",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "14px"
  }}
>
  + Add Set
</button>

              </div>
            ))}
          </div>
        )}
        { activeTab === "progress" && <p>Progress page coming soon!</p>}
      </div>
    </div>
  );
}

export default App;