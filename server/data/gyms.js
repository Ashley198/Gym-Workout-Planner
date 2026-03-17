// server/data/gyms.js

// For now we only model My gym: 24 Hour Fitness.
// Later I can add more gyms as new keys in this object.

export const gyms = {
  hour24: {
    id: "hour24",
    name: "24 Hour Fitness",
    equipment: [
      // BACK / UPPER MACHINES
      "lat_pulldown_cable",
      "lat_pulldown_machine",
      "seated_row_cable",
      "iso_front_lat_pulldown",
      "iso_high_row",
      "iso_row",
      "back_extension_machine",

      // CHEST / SHOULDERS / ARMS MACHINES
      "flat_bench_press",
      "seated_chest_press_machine",
      "chest_fly_machine",
      "cable_crossover",
      "chest_dip_machine",
      "iso_incline_press",
      "iso_flat_press",
      "shoulder_press_machine",
      "iso_shoulder_press",
      "lateral_raise_machine",
      "deltoid_raise_machine",
      "deltoid_fly_machine",
      "seated_dip_machine",
      "machine_tricep_dip",
      "preacher_curl",
      "dip_station",

      // LOWER BODY / RACKS
      "squat_rack",
      "trap_bar",
      "safety_squat_bar",
      "sled",
      "stepper",
      "reverse_hyperextension_machine",
      "leg_press_machine",
      "angled_leg_press_machine",
      "leg_extension_machine",
      "leg_curl_machine",
      "seated_leg_curl_machine",
      "prone_leg_curl_machine",
      "iso_kneeling_leg_curl_machine",
      "hack_squat_machine",
      "seated_calf_raise_machine",
      "inner_thigh_machine",
      "outer_thigh_machine",
      "adductor_machine",
      "abductor_machine",
      "glute_master_machine",

      // CARDIO
      "treadmill",
      "elliptical",
      "stationary_bike",
      "rower",
      "stairmaster",
      "air_bike",
      "ski_erg",
      "punching_bag",
      "rope_trainer",

      // CORE / ABDOMINAL
      "medicine_ball",
      "yoga_mat",
      "captains_chair",
      "ab_crunch_machine",
      "ab_wheel",
      "abdominal_machine",

      // FREE WEIGHTS
      "dumbbells",
      "swiss_bar",
      "kettlebell",
      "olympic_bar",
      "tire",

      // BENCHES
      "flat_bench",
      "incline_bench",
      "decline_bench",
      "flat_bench_with_storage",
      "incline_bench_with_storage",
      "adjustable_bench",

      // FUNCTIONAL / EXTRAS
      "cable_machine",
      "smith_machine",
      "resistance_band",
      "trx",
      "battle_ropes",
      "jump_rope",
      "stability_ball",
      "plyo_box"
    ]
  }
};