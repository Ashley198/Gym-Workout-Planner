export const exercises = [
  // ===============================
  // BACK
  // ===============================
  {
    name: "Lat Pulldown (Cable)",
    muscles: ["lats", "upper_back", "biceps"],
    movement: "vertical_pull",
    category: ["back"],
    equipment: ["lat_pulldown_cable", "cable_machine"],
    level: "beginner",
    notes: "Wide, neutral, and close grip options. Use cable if machine is busy."
  },
  {
    name: "Lat Pulldown (Machine)",
    muscles: ["lats", "biceps"],
    movement: "vertical_pull",
    category: ["back"],
    equipment: ["lat_pulldown_machine"],
    level: "beginner",
    notes: "Great starting point for learning the lat pulldown pattern."
  },
  {
    name: "Seated Cable Row",
    muscles: ["mid_back", "lats", "biceps"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["seated_row_cable", "cable_machine"],
    level: "beginner",
    notes: "Use wide, neutral, or close grip. Think 'pull elbows back, not just hands'."
  },
  {
    name: "One-Arm Dumbbell Row",
    muscles: ["lats", "mid_back", "biceps"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["dumbbells", "flat_bench"],
    level: "beginner",
    notes: "Good starting row before progressing to heavy barbell rows."
  },
  {
    name: "ISO High Row",
    muscles: ["lats", "mid_back", "rear_delts"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["iso_high_row"],
    level: "beginner",
    notes: "Similar muscles as lat pulldown but pulling from a different angle."
  },
  {
    name: "ISO Lateral Front Lat Pulldown",
    muscles: ["lats", "upper_back"],
    movement: "vertical_pull",
    category: ["back"],
    equipment: ["iso_front_lat_pulldown"],
    level: "intermediate",
    notes: "Plan B if cable pulldown stations are busy."
  },
  {
    name: "ISO Lateral Row",
    muscles: ["mid_back", "lats"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["iso_row"],
    level: "intermediate",
    notes: "Start after getting comfortable with regular seated rows."
  },
  {
    name: "Bent-Over Dumbbell Row",
    muscles: ["lats", "mid_back"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Great bridge between machine rows and barbell rows."
  },
  {
    name: "Barbell Bent-Over Row",
    muscles: ["lats", "mid_back", "biceps"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["olympic_bar"],
    level: "intermediate",
    notes: "Hinge at hips, keep back flat, pull bar to lower chest."
  },
  {
    name: "Pull-Ups",
    muscles: ["lats", "upper_back", "biceps"],
    movement: "vertical_pull",
    category: ["back", "full_body"],
    equipment: ["squat_rack"],
    level: "intermediate",
    notes: "Great next step after assisted pull-up machine or banded pull-ups."
  },
  {
    name: "Single-Arm Seated Cable Row",
    muscles: ["mid_back", "lats"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["cable_machine"],
    level: "intermediate",
    notes: "Helps fix imbalances between sides. Keep torso still."
  },
  {
    name: "Gorilla Row",
    muscles: ["lats", "mid_back", "biceps"],
    movement: "horizontal_pull",
    category: ["back", "full_body"],
    equipment: ["kettlebell"],
    level: "intermediate",
    notes: "Two kettlebells on floor, hinge forward and row one at a time. Keep hips steady."
  },
  {
    name: "Kneeling Single-Arm Cable Row",
    muscles: ["mid_back", "lats", "core"],
    movement: "horizontal_pull",
    category: ["back"],
    equipment: ["cable_machine"],
    level: "advanced",
    notes: "More core stability required. Great once you are confident with regular rows."
  },
  {
    name: "Dumbbell Rear Delt Raise",
    muscles: ["rear_delts", "upper_back"],
    movement: "rear_delt_raise",
    category: ["back", "shoulders"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Hinged or chest-supported. Helps with that wing back look."
  },
  {
    name: "Back Extension (Back Focused)",
    muscles: ["lower_back", "glutes"],
    movement: "back_extension",
    category: ["back"],
    equipment: ["back_extension_machine"],
    level: "beginner",
    notes: "Straight back, feet closer together, come up to a neutral spine position."
  },

  {
  name: "Dumbbell Shrug",
  muscles: ["traps", "upper_back"],
  movement: "shrug",
  category: ["back"],
  equipment: ["dumbbells"],
  level: "beginner",
  notes: "Lift shoulders straight up toward ears. Hold at the top for a second."
},

  // ===============================
  // CHEST
  // ===============================
  {
    name: "Seated Chest Press Machine",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["seated_chest_press_machine"],
    level: "beginner",
    notes: "Machine guides the path so great for beginners. Focus on squeezing chest at the top."
  },
  {
    name: "Chest Fly Machine",
    muscles: ["chest"],
    movement: "fly",
    category: ["chest"],
    equipment: ["chest_fly_machine"],
    level: "beginner",
    notes: "Keep a slight bend in elbows. Think of hugging a big tree."
  },
  {
    name: "Dumbbell Chest Press (Flat)",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["flat_bench", "dumbbells"],
    level: "beginner",
    notes: "Great starting point before moving to barbell. Control the weight on the way down."
  },
  {
    name: "Elevated Push-Ups",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["stepper"],
    level: "beginner",
    notes: "Hands on step make push-ups easier and more beginner-friendly."
  },
  {
  name: "Push-Ups",
  muscles: ["chest", "triceps", "shoulders"],
  movement: "horizontal_push",
  category: ["full_body", "hiit"],
  equipment: ["yoga_mat"],
  level: "beginner",
  notes: "Keep body in a straight line from head to heels. Control the way down."
},
  {
    name: "Flat Bench Press (Barbell)",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["flat_bench", "olympic_bar"],
    level: "intermediate",
    notes: "Keep feet flat, arch natural, lower bar to mid chest."
  },
  {
    name: "Cable Crossover",
    muscles: ["chest"],
    movement: "fly",
    category: ["chest"],
    equipment: ["cable_crossover", "cable_machine"],
    level: "intermediate",
    notes: "Can be done high to low, low to high, or mid level. Each targets a different part of the chest."
  },
  {
    name: "ISO Lateral Incline Press",
    muscles: ["chest", "shoulders", "triceps"],
    movement: "incline_push",
    category: ["chest"],
    equipment: ["iso_incline_press"],
    level: "intermediate",
    notes: "Targets upper chest. Each arm works independently."
  },
  {
    name: "ISO Lateral Bench Press",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["iso_flat_press"],
    level: "intermediate",
    notes: "Good step between machine and free weight bench press."
  },
  {
    name: "Dumbbell Incline Press",
    muscles: ["chest", "shoulders", "triceps"],
    movement: "incline_push",
    category: ["chest"],
    equipment: ["incline_bench", "dumbbells"],
    level: "intermediate",
    notes: "Targets upper chest. Set bench to 30-45 degrees."
  },
  {
    name: "Dumbbell Fly (Flat)",
    muscles: ["chest"],
    movement: "fly",
    category: ["chest"],
    equipment: ["flat_bench", "dumbbells"],
    level: "intermediate",
    notes: "Keep a slight bend in elbows throughout. Lower slowly and feel the stretch."
  },
  {
    name: "Chest Dip",
    muscles: ["chest", "triceps", "shoulders"],
    movement: "dip",
    category: ["chest"],
    equipment: ["chest_dip_machine"],
    level: "beginner",
    notes: "Lean forward to target chest more. Stay upright to target triceps more."
  },
  {
    name: "Push-Up and KB Pass",
    muscles: ["chest", "triceps", "core"],
    movement: "horizontal_push",
    category: ["chest"],
    equipment: ["kettlebell", "yoga_mat"],
    level: "advanced",
    notes: "Do a push-up then pass the kettlebell under your body. Core stability is key."
  },
  {
  name: "Dumbbell Incline Press (Beginner)",
  muscles: ["chest", "shoulders", "triceps"],
  movement: "incline_push",
  category: ["chest"],
  equipment: ["incline_bench", "dumbbells"],
  level: "beginner",
  notes: "Set bench to 30-45 degrees. Targets upper chest. Great for beginners."
},
{
  name: "Decline Push-Up",
  muscles: ["chest", "triceps", "shoulders"],
  movement: "decline_push",
  category: ["chest"],
  equipment: ["stepper", "plyo_box"],
  level: "beginner",
  notes: "Feet elevated on step or box. Targets lower chest. Keep core tight throughout."
},

  // ===============================
  // SHOULDERS
  // ===============================
  {
    name: "Shoulder Press Machine",
    muscles: ["shoulders", "triceps"],
    movement: "vertical_push",
    category: ["shoulders"],
    equipment: ["shoulder_press_machine"],
    level: "beginner",
    notes: "Great starting point for overhead pressing. Focus on pressing tall."
  },
  {
    name: "Lateral Raise Machine",
    muscles: ["side_delts"],
    movement: "lateral_raise",
    category: ["shoulders"],
    equipment: ["lateral_raise_machine"],
    level: "beginner",
    notes: "Slow and controlled. Raise to shoulder height only, no higher."
  },
  {
    name: "Deltoid Raise Machine",
    muscles: ["front_delts", "side_delts"],
    movement: "front_raise",
    category: ["shoulders"],
    equipment: ["deltoid_raise_machine"],
    level: "beginner",
    notes: "Keep a slight bend in elbows. Avoid shrugging your traps."
  },
  {
    name: "Deltoid Fly Machine",
    muscles: ["rear_delts", "upper_back"],
    movement: "rear_delt_raise",
    category: ["shoulders"],
    equipment: ["deltoid_fly_machine"],
    level: "beginner",
    notes: "Targets rear delts which are often neglected. Great for posture."
  },
  {
    name: "Dumbbell Lateral Raise",
    muscles: ["side_delts"],
    movement: "lateral_raise",
    category: ["shoulders"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Use if the lateral raise machine is busy. Slight bend in elbows."
  },
  {
    name: "Dumbbell Front Raise",
    muscles: ["front_delts"],
    movement: "front_raise",
    category: ["shoulders"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Lift to shoulder height only. Control the lowering phase."
  },
  {
    name: "ISO Shoulder Press Machine",
    muscles: ["shoulders", "triceps"],
    movement: "vertical_push",
    category: ["shoulders"],
    equipment: ["iso_shoulder_press"],
    level: "intermediate",
    notes: "Each arm works independently. Great for fixing shoulder imbalances."
  },
  {
    name: "Dumbbell Shoulder Press",
    muscles: ["shoulders", "triceps"],
    movement: "vertical_push",
    category: ["shoulders"],
    equipment: ["dumbbells", "adjustable_bench"],
    level: "intermediate",
    notes: "Keep rib cage down and core braced."
  },
  {
    name: "Arnold Press",
    muscles: ["shoulders", "triceps"],
    movement: "vertical_push",
    category: ["shoulders"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Rotates from palms-in to palms-out. Great full-shoulder movement."
  },
  {
    name: "Dumbbell Upright Row",
    muscles: ["shoulders", "traps"],
    movement: "upright_row",
    category: ["shoulders"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Pull elbows up and slightly out, not straight up under the chin."
  },
  {
    name: "Overhead Barbell Press",
    muscles: ["shoulders", "triceps"],
    movement: "vertical_push",
    category: ["shoulders"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "intermediate",
    notes: "Can be used if shoulder press machine and smaller barbells are taken."
  },
  {
    name: "Kneeling Halo",
    muscles: ["shoulders", "core"],
    movement: "rotation",
    category: ["shoulders"],
    equipment: ["kettlebell"],
    level: "advanced",
    notes: "Circle the kettlebell around your head while kneeling. Great for shoulder mobility."
  },

  // ===============================
  // ARMS
  // ===============================

  // BICEPS
  {
    name: "Dumbbell Bicep Curl",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Keep elbows close to the body. Control the way down."
  },
  {
    name: "Hammer Curl",
    muscles: ["biceps", "forearms"],
    movement: "hammer_curl",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Neutral grip. Great for forearms and overall arm strength."
  },
  {
    name: "Preacher Curl Machine",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["preacher_curl"],
    level: "beginner",
    notes: "Arm is supported so you can really isolate the bicep. Control the way down slowly."
  },
  {
    name: "Cable Bicep Curl",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["cable_machine"],
    level: "beginner",
    notes: "Constant tension throughout the movement unlike dumbbells. Great finisher."
  },
  {
    name: "Incline Dumbbell Curl",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["incline_bench", "dumbbells"],
    level: "intermediate",
    notes: "Lying back on incline stretches the bicep for a deeper contraction. Go lighter than normal."
  },
  {
    name: "Concentration Curl",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Elbow braced on inner thigh. Great peak contraction isolation exercise."
  },
  {
    name: "Cable Rope Hammer Curl",
    muscles: ["biceps", "forearms"],
    movement: "hammer_curl",
    category: ["arms"],
    equipment: ["cable_machine"],
    level: "intermediate",
    notes: "Neutral grip on rope. Constant tension version of the hammer curl."
  },
  {
    name: "Reverse Curl",
    muscles: ["forearms", "biceps"],
    movement: "reverse_curl",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Overhand grip targets forearms and brachialis. Great for arm thickness."
  },
  {
    name: "Wrist Curl",
    muscles: ["forearms"],
    movement: "wrist_curl",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Forearms rested on bench. Slow controlled wrist flexion. Great for grip strength."
  },
  {
    name: "Barbell Curl",
    muscles: ["biceps"],
    movement: "curl",
    category: ["arms"],
    equipment: ["olympic_bar"],
    level: "advanced",
    notes: "Allows heavier loads than dumbbells. Keep elbows pinned and avoid swinging."
  },
  {
    name: "Spider Curl",
    muscles: ["biceps"],
    movement: "spider_curl",
    category: ["arms"],
    equipment: ["incline_bench", "dumbbells"],
    level: "advanced",
    notes: "Chest on incline bench facing down. Eliminates all momentum for pure bicep isolation."
  },

  // TRICEPS
  {
    name: "Cable Tricep Pushdown",
    muscles: ["triceps"],
    movement: "pushdown",
    category: ["arms"],
    equipment: ["cable_machine"],
    level: "beginner",
    notes: "Keep elbows pinned to your sides. Great isolation exercise for triceps."
  },
  {
    name: "Seated Tricep Dip Machine",
    muscles: ["triceps"],
    movement: "dip",
    category: ["arms"],
    equipment: ["seated_dip_machine"],
    level: "beginner",
    notes: "Great introduction to dips. Machine controls the range of motion."
  },
  {
    name: "Overhead Cable Tricep Extension",
    muscles: ["triceps"],
    movement: "overhead_extension",
    category: ["arms"],
    equipment: ["cable_machine"],
    level: "beginner",
    notes: "Stretches the long head of the tricep. Keep core braced and elbows pointed forward."
  },
  {
    name: "Dumbbell Overhead Tricep Extension",
    muscles: ["triceps"],
    movement: "overhead_extension",
    category: ["arms"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Hold one dumbbell with both hands overhead. Great long head stretch."
  },
  {
    name: "Skull Crushers (Dumbbell)",
    muscles: ["triceps"],
    movement: "skull_crusher",
    category: ["arms"],
    equipment: ["flat_bench", "dumbbells"],
    level: "intermediate",
    notes: "Lower dumbbells toward forehead slowly. Keep elbows pointing at the ceiling."
  },
  {
    name: "Machine Tricep Dips",
    muscles: ["triceps"],
    movement: "dip",
    category: ["arms"],
    equipment: ["machine_tricep_dip"],
    level: "intermediate",
    notes: "More range of motion than seated machine. Keep elbows close to body."
  },
  {
    name: "Dip Station",
    muscles: ["triceps"],
    movement: "dip",
    category: ["arms"],
    equipment: ["dip_station"],
    level: "intermediate",
    notes: "Bodyweight dips. Stay upright for tricep focus, lean forward for chest focus."
  },
  {
    name: "Cable Rope Pushdown",
    muscles: ["triceps"],
    movement: "pushdown",
    category: ["arms"],
    equipment: ["cable_machine"],
    level: "intermediate",
    notes: "Rope attachment flares out at the bottom for full tricep contraction."
  },
  {
    name: "Close Grip Bench Press",
    muscles: ["triceps", "chest"],
    movement: "close_grip_press",
    category: ["arms"],
    equipment: ["flat_bench", "olympic_bar"],
    level: "advanced",
    notes: "Hands shoulder width apart. Elbows stay close to body. Heavy tricep builder."
  },

  // ===============================
  // LEGS
  // ===============================
  {
    name: "Leg Press",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "press",
    category: ["legs"],
    equipment: ["leg_press_machine"],
    level: "beginner",
    notes: "Wide = inner thighs, narrow = outer thighs, high = glutes/hamstrings, low = quads."
  },
  {
    name: "Leg Extension",
    muscles: ["quads"],
    movement: "extension",
    category: ["legs"],
    equipment: ["leg_extension_machine"],
    level: "beginner",
    notes: "Control the way down. Don't slam the weight stack."
  },
  {
    name: "Seated Leg Curl",
    muscles: ["hamstrings"],
    movement: "curl",
    category: ["legs"],
    equipment: ["seated_leg_curl_machine"],
    level: "beginner",
    notes: "Keep hips glued to the seat. Think 'pull with the back of your thighs'."
  },
  {
    name: "Goblet Squat",
    muscles: ["quads", "glutes", "core"],
    movement: "squat",
    category: ["legs", "full_body"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Hug the dumbbell close to your chest. Great starting point before barbell squats."
  },
  {
    name: "Dumbbell Deadlift",
    muscles: ["hamstrings", "glutes", "lower_back"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Nice way to learn the deadlift pattern before using barbells."
  },
  {
    name: "Dumbbell Reverse Lunge",
    muscles: ["quads", "glutes"],
    movement: "lunge",
    category: ["legs", "full_body"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Easier on the knees than forward lunges. Great starting lunge variation."
  },
  {
    name: "Trap Bar Deadlift",
    muscles: ["hamstrings", "quads", "glutes"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["trap_bar"],
    level: "beginner",
    notes: "Perfect deadlift variation for beginners. More upright torso and easier to balance."
  },
  {
    name: "Trap Bar Squat",
    muscles: ["quads", "glutes"],
    movement: "squat",
    category: ["legs"],
    equipment: ["trap_bar"],
    level: "beginner",
    notes: "Feels like a mix of squat and deadlift. Great if regular squats feel unstable."
  },
  {
    name: "Seated Calf Raise",
    muscles: ["calves"],
    movement: "calf_raise",
    category: ["legs"],
    equipment: ["seated_calf_raise_machine"],
    level: "beginner",
    notes: "Slow controlled reps with a pause at the top."
  },
  {
    name: "Hack Squat",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "squat",
    category: ["legs"],
    equipment: ["hack_squat_machine"],
    level: "intermediate",
    notes: "Push through mid-foot/heels. Adjust stance like leg press for focus areas."
  },
  {
    name: "Prone (Lying) Leg Curl",
    muscles: ["hamstrings"],
    movement: "curl",
    category: ["legs"],
    equipment: ["prone_leg_curl_machine"],
    level: "intermediate",
    notes: "Great for knee flexion strength and posture. Keep hips down."
  },
  {
    name: "Angled Leg Press",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "press",
    category: ["legs"],
    equipment: ["angled_leg_press_machine"],
    level: "intermediate",
    notes: "Slightly more advanced version with more load potential."
  },
  {
    name: "Dumbbell Romanian Deadlift",
    muscles: ["hamstrings", "glutes"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "More balance and control needed compared to machines."
  },
  {
    name: "Dumbbell Walking Lunges",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "lunge",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Step long enough that the front knee stays over the ankle."
  },
  {
    name: "Bulgarian Split Squat (Dumbbells)",
    muscles: ["quads", "glutes"],
    movement: "split_squat",
    category: ["legs"],
    equipment: ["dumbbells", "stepper"],
    level: "intermediate",
    notes: "Rear foot elevated. Fantastic for leg growth and balance."
  },
  {
    name: "Barbell Back Squat",
    muscles: ["quads", "glutes", "hamstrings", "core"],
    movement: "squat",
    category: ["legs"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "intermediate",
    notes: "Start with goblet squats first. Move to barbell once form feels solid."
  },
  {
    name: "Barbell RDL",
    muscles: ["hamstrings", "glutes", "lower_back"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "intermediate",
    notes: "Push hips back and keep bar close to the legs. Slight bend in knees."
  },
  {
    name: "Dumbbell Calf Raises",
    muscles: ["calves"],
    movement: "calf_raise",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Stand on a plate or step for more range of motion."
  },
  {
    name: "Single-Leg Kickstand RDL",
    muscles: ["hamstrings", "glutes"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Back leg lightly supported. Easier than full single-leg RDL."
  },
  {
    name: "Barbell Front Squat",
    muscles: ["quads", "glutes", "core"],
    movement: "squat",
    category: ["legs"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "advanced",
    notes: "Bar rests on front of shoulders. Requires good wrist and thoracic mobility."
  },
  {
    name: "Single-Leg RDL",
    muscles: ["hamstrings", "glutes", "core"],
    movement: "hinge",
    category: ["legs"],
    equipment: ["dumbbells"],
    level: "advanced",
    notes: "High balance demand. Build up with kickstand RDL first."
  },
  {
    name: "Barbell Lunge",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "lunge",
    category: ["legs"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "advanced",
    notes: "Start bodyweight → dumbbells → barbell last. Balance and control are key."
  },
  {
    name: "Conventional Deadlift (Barbell)",
    muscles: ["hamstrings", "glutes", "lower_back"],
    movement: "hinge",
    category: ["legs", "full_body"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "advanced",
    notes: "Start light and think 'push the floor away' instead of yanking with your back."
  },
  {
    name: "Deficit Reverse Lunge",
    muscles: ["quads", "glutes", "hamstrings"],
    movement: "lunge",
    category: ["legs"],
    equipment: ["dumbbells", "plyo_box"],
    level: "advanced",
    notes: "Stand on a plate or low step. Greater range of motion than regular lunges."
  },

  // ===============================
  // GLUTES
  // ===============================
  {
    name: "Glute Master Kickback",
    muscles: ["glutes"],
    movement: "hip_extension",
    category: ["glutes"],
    equipment: ["glute_master_machine"],
    level: "beginner",
    notes: "Targets all glute muscles with a controlled kickback motion."
  },
  {
    name: "Abductor (Outer Thigh/Glute) Machine",
    muscles: ["outer_thighs", "glutes"],
    movement: "abduction",
    category: ["glutes"],
    equipment: ["outer_thigh_machine", "abductor_machine"],
    level: "beginner",
    notes: "Leaning slightly forward increases glute focus."
  },
  {
    name: "Adductor (Inner Thigh) Machine",
    muscles: ["inner_thighs"],
    movement: "adduction",
    category: ["glutes"],
    equipment: ["inner_thigh_machine", "adductor_machine"],
    level: "beginner",
    notes: "Improves hip stability. Keep back against the seat."
  },
  {
    name: "Dumbbell Glute Bridge",
    muscles: ["glutes", "hamstrings"],
    movement: "hip_thrust",
    category: ["glutes"],
    equipment: ["dumbbells", "yoga_mat"],
    level: "beginner",
    notes: "Place dumbbell on hips. Squeeze glutes at the top."
  },
  {
    name: "Step-Ups (Bodyweight)",
    muscles: ["glutes", "quads"],
    movement: "step",
    category: ["glutes"],
    equipment: ["stepper", "plyo_box"],
    level: "beginner",
    notes: "Drive through the heel of the working leg."
  },
  {
    name: "Back Extension (Glute Focused)",
    muscles: ["glutes", "hamstrings", "lower_back"],
    movement: "hip_extension",
    category: ["glutes"],
    equipment: ["back_extension_machine"],
    level: "intermediate",
    notes: "Rounded upper back, wider stance, don't come all the way up to keep tension on glutes."
  },
  {
    name: "Dumbbell Step-Ups",
    muscles: ["glutes", "quads"],
    movement: "step",
    category: ["glutes"],
    equipment: ["dumbbells", "stepper", "plyo_box"],
    level: "intermediate",
    notes: "Great for building single-leg strength and stability."
  },
  {
    name: "Bulgarian Split Squat (Stepper)",
    muscles: ["glutes", "quads"],
    movement: "split_squat",
    category: ["glutes"],
    equipment: ["stepper"],
    level: "intermediate",
    notes: "Rear foot elevated on step. Amazing for balance and leg strength."
  },
  {
    name: "Kettlebell Swing",
    muscles: ["glutes", "hamstrings", "core"],
    movement: "hinge",
    category: ["glutes", "hiit"],
    equipment: ["kettlebell"],
    level: "intermediate",
    notes: "Drive the movement from your hips, not your arms. Squeeze glutes hard at the top."
  },
  {
    name: "Sumo Barbell Squat",
    muscles: ["glutes", "quads", "inner_thighs"],
    movement: "squat",
    category: ["glutes"],
    equipment: ["squat_rack", "olympic_bar"],
    level: "intermediate",
    notes: "Wider stance with toes turned out. Great for inner thighs and glutes."
  },
  {
    name: "Dumbbell Sumo Squat",
    muscles: ["glutes", "quads", "inner_thighs"],
    movement: "squat",
    category: ["glutes"],
    equipment: ["dumbbells"],
    level: "intermediate",
    notes: "Wider stance with toes turned out. Hold dumbbell between legs."
  },
  {
    name: "Reverse Hack Squat",
    muscles: ["glutes", "hamstrings"],
    movement: "hinge",
    category: ["glutes"],
    equipment: ["hack_squat_machine"],
    level: "advanced",
    notes: "Face the pad and hinge at hips. Great for glutes and hamstrings."
  },
  {
    name: "Dumbbell Curtsy Lunge",
    muscles: ["glutes", "outer_thighs"],
    movement: "lunge",
    category: ["glutes"],
    equipment: ["dumbbells"],
    level: "advanced",
    notes: "Step the back leg slightly behind and across. Great for glute medius."
  },
  {
    name: "Cable Pull-Through",
    muscles: ["glutes", "hamstrings"],
    movement: "hip_extension",
    category: ["glutes"],
    equipment: ["cable_machine"],
    level: "intermediate",
    notes: "Face away from cable, hinge at hips, drive through glutes at the top."
  },
  {
    name: "Barbell Hip Thrust",
    muscles: ["glutes", "hamstrings"],
    movement: "hip_thrust",
    category: ["glutes"],
    equipment: ["flat_bench", "olympic_bar"],
    level: "intermediate",
    notes: "Upper back on bench, bar across hips. Drive through heels and squeeze at the top."
  },

  // ===============================
  // FULL BODY
  // ===============================
  {
    name: "Farmer Walk (Dumbbells)",
    muscles: ["full_body", "core", "traps"],
    movement: "carry",
    category: ["full_body"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Walk with strong posture and controlled steps."
  },
  {
    name: "Trap Bar Farmer Walk",
    muscles: ["full_body", "core", "traps"],
    movement: "carry",
    category: ["full_body"],
    equipment: ["trap_bar"],
    level: "beginner",
    notes: "Functional strength, posture, and grip. Walk with slow, controlled steps."
  },
  {
    name: "Kettlebell Farmer Walk",
    muscles: ["full_body", "core", "traps"],
    movement: "carry",
    category: ["full_body"],
    equipment: ["kettlebell"],
    level: "beginner",
    notes: "Walk with strong posture and controlled steps. Great for grip and core."
  },
  {
    name: "Dumbbell Thruster (Squat to Press)",
    muscles: ["full_body", "quads", "shoulders"],
    movement: "squat_to_press",
    category: ["full_body", "hiit"],
    equipment: ["dumbbells"],
    level: "beginner",
    notes: "Full-body power move. Keep the core tight as you press overhead."
  },
  {
    name: "Kettlebell Clean to Press",
    muscles: ["full_body", "shoulders", "glutes"],
    movement: "power",
    category: ["full_body", "hiit"],
    equipment: ["kettlebell"],
    level: "beginner",
    notes: "Explosive pull from floor to rack position, then press overhead."
  },
  {
    name: "Kettlebell Squat Thruster",
    muscles: ["full_body", "quads", "shoulders"],
    movement: "squat_to_press",
    category: ["full_body", "hiit"],
    equipment: ["kettlebell"],
    level: "intermediate",
    notes: "Squat deep then drive up and press overhead in one motion."
  },
  {
    name: "Gorilla Row (Full Body)",
    muscles: ["full_body", "lats", "core"],
    movement: "horizontal_pull",
    category: ["full_body"],
    equipment: ["kettlebell"],
    level: "intermediate",
    notes: "Two kettlebells on floor, hinge forward and row one at a time. Legs + back + core."
  },
  {
    name: "Trap Bar Jump",
    muscles: ["full_body", "glutes", "quads"],
    movement: "jump",
    category: ["full_body", "hiit"],
    equipment: ["trap_bar"],
    level: "intermediate",
    notes: "Explosive power movement. Land softly with bent knees."
  },
  {
    name: "Barbell Power Clean",
    muscles: ["full_body", "glutes", "hamstrings"],
    movement: "power",
    category: ["full_body"],
    equipment: ["olympic_bar"],
    level: "advanced",
    notes: "Explosive full body movement. Learn the technique properly before loading heavy."
  },
  {
    name: "Kettlebell Deadlift Clean Squat",
    muscles: ["full_body", "glutes", "quads"],
    movement: "power",
    category: ["full_body"],
    equipment: ["kettlebell"],
    level: "advanced",
    notes: "Three movements in one — deadlift, clean, squat. Explosive and demanding."
  },
  {
    name: "Tire Flip",
    muscles: ["full_body", "glutes", "hamstrings"],
    movement: "power",
    category: ["full_body", "hiit"],
    equipment: ["tire"],
    level: "advanced",
    notes: "Drive through legs like a deadlift then push the tire over."
  },

  // ===============================
  // HIIT
  // ===============================
  {
    name: "Jump Rope",
    muscles: ["cardio", "calves"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["jump_rope"],
    level: "beginner",
    notes: "Great warm-up or HIIT finisher. Land softly on the balls of your feet."
  },
  {
    name: "Treadmill Walk / Jog / Run",
    muscles: ["cardio", "quads", "calves"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["treadmill"],
    level: "beginner",
    notes: "Incline walks great for warm-up. Sprints for HIIT intervals."
  },
  {
    name: "Stationary Bike",
    muscles: ["cardio", "quads", "glutes"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["stationary_bike"],
    level: "beginner",
    notes: "Great for HIIT sprints or low-impact steady rides."
  },
  {
    name: "Elliptical",
    muscles: ["cardio", "quads", "glutes"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["elliptical"],
    level: "beginner",
    notes: "Low-impact full-body option. Easier on the joints than running."
  },
  {
    name: "Toe Taps",
    muscles: ["cardio", "calves", "quads"],
    movement: "conditioning",
    category: ["hiit"],
    equipment: ["stepper"],
    level: "beginner",
    notes: "Fast alternating taps. Great as a warm-up or finisher."
  },
  {
    name: "Battle Ropes",
    muscles: ["cardio", "shoulders", "core"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["battle_ropes"],
    level: "beginner",
    notes: "Alternate or simultaneous waves. Great for conditioning and shoulder endurance."
  },
  {
    name: "Rowing Machine",
    muscles: ["cardio", "lats", "quads"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["rower"],
    level: "beginner",
    notes: "Full-body cardio. Drive with the legs, then lean back and pull."
  },
  {
    name: "Stairmaster",
    muscles: ["cardio", "glutes", "quads"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["stairmaster"],
    level: "beginner",
    notes: "Great for lower body and conditioning. Short sessions can be very intense."
  },
  {
    name: "Sled Push",
    muscles: ["cardio", "quads", "glutes"],
    movement: "push",
    category: ["hiit"],
    equipment: ["sled"],
    level: "beginner",
    notes: "Adjust weight for your level. Less weight = more conditioning focus."
  },
  {
    name: "Low Sled Push",
    muscles: ["cardio", "quads", "hamstrings"],
    movement: "push",
    category: ["hiit"],
    equipment: ["sled"],
    level: "intermediate",
    notes: "Lower handle position puts more emphasis on legs and core."
  },
  {
    name: "Medicine Ball Slams",
    muscles: ["cardio", "core", "shoulders"],
    movement: "power",
    category: ["hiit"],
    equipment: ["medicine_ball"],
    level: "beginner",
    notes: "Explosive movement. Great for stress relief too."
  },
  {
    name: "Box Jumps",
    muscles: ["cardio", "glutes", "quads"],
    movement: "jump",
    category: ["hiit"],
    equipment: ["plyo_box"],
    level: "beginner",
    notes: "Explosive power. Step down instead of jumping down to protect knees."
  },
  {
    name: "Air Bike",
    muscles: ["cardio", "full_body"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["air_bike"],
    level: "beginner",
    notes: "Amazing for HIIT finishers. Arms and legs work together."
  },
  {
    name: "Ski Erg",
    muscles: ["cardio", "lats", "core"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["ski_erg"],
    level: "beginner",
    notes: "Simulates Nordic skiing. Great upper body and core conditioning."
  },
  {
    name: "Sled Drag (Backward)",
    muscles: ["cardio", "quads", "glutes"],
    movement: "pull",
    category: ["hiit"],
    equipment: ["sled"],
    level: "intermediate",
    notes: "Great for knee strength and rehab-style training."
  },
  {
    name: "Tire Hop Over",
    muscles: ["cardio", "glutes", "calves"],
    movement: "jump",
    category: ["hiit"],
    equipment: ["tire"],
    level: "intermediate",
    notes: "Hop side to side over the tire. Pattern: out, middle, out, middle."
  },
  {
    name: "Tire Double Hops",
    muscles: ["cardio", "calves", "quads"],
    movement: "jump",
    category: ["hiit"],
    equipment: ["tire"],
    level: "intermediate",
    notes: "Two-foot hops in and out of the tire. Great for footwork and conditioning."
  },
  {
    name: "Tire Step-Ups",
    muscles: ["cardio", "glutes", "quads"],
    movement: "step",
    category: ["hiit"],
    equipment: ["tire"],
    level: "beginner",
    notes: "Use the tire as a step. Drive through the heel of the working leg."
  },
  {
    name: "Rope Trainer Pulls",
    muscles: ["cardio", "lats", "core"],
    movement: "cardio",
    category: ["hiit"],
    equipment: ["rope_trainer"],
    level: "intermediate",
    notes: "Can be done standing or seated. Try squat pulls or lunge pulls for full-body work."
  },
  {
    name: "Explosive Tire Step-Ups",
    muscles: ["cardio", "glutes", "quads"],
    movement: "jump",
    category: ["hiit"],
    equipment: ["tire"],
    level: "advanced",
    notes: "Drive up explosively from each step. Great for power and conditioning."
  },
];