// Workout database
const workouts = {
    chest: {
        'full': [
            { name: "Bench Press", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Machine Press", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Decline Bench Press", sets: 3, reps: "10-12", rest: "90 sec", time: "10 min" }
        ],
        'dumbbells': [
            { name: "Dumbbell Bench Press", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Floor Press", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Push-Ups", sets: 4, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Diamond Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" },
            { name: "Wide Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" },
            { name: "Decline Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" }
        ]
    },
    back: {
        'full': [
            { name: "Barbell Rows", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "Seated Cable Rows", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Deadlifts", sets: 3, reps: "8-10", rest: "120 sec", time: "12 min" }
        ],
        'dumbbells': [
            { name: "Single Arm Rows", sets: 4, reps: "10-12", rest: "60 sec", time: "10 min" },
            { name: "Bent Over Rows", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Renegade Rows", sets: 3, reps: "10/side", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Pull-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Inverted Rows", sets: 3, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Superman Holds", sets: 3, reps: "30 sec", rest: "30 sec", time: "5 min" }
        ]
    },
    legs: {
        'full': [
            { name: "Barbell Squats", sets: 4, reps: "8-12", rest: "120 sec", time: "15 min" },
            { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec", time: "10 min" },
            { name: "Leg Press", sets: 3, reps: "12-15", rest: "90 sec", time: "10 min" },
            { name: "Leg Extensions", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Calf Raises", sets: 4, reps: "20-25", rest: "45 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "Dumbbell Squats", sets: 4, reps: "12-15", rest: "90 sec", time: "12 min" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10/leg", rest: "60 sec", time: "10 min" },
            { name: "Dumbbell RDLs", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "Goblet Squats", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" }
        ],
        'bodyweight': [
            { name: "Bodyweight Squats", sets: 4, reps: "20-25", rest: "60 sec", time: "10 min" },
            { name: "Lunges", sets: 3, reps: "15/leg", rest: "60 sec", time: "9 min" },
            { name: "Jump Squats", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Calf Raises", sets: 4, reps: "25-30", rest: "45 sec", time: "8 min" }
        ]
    },
    shoulders: {
        'full': [
            { name: "Military Press", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Reverse Pec Deck", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "Seated DB Press", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Front Raises", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Rear Delt Flyes", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Pike Push-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Wall Handstand Holds", sets: 3, reps: "30 sec", rest: "60 sec", time: "6 min" },
            { name: "Lateral Raises (Water Bottles)", sets: 3, reps: "15-20", rest: "45 sec", time: "6 min" }
        ]
    },
    arms: {
        'full': [
            { name: "Barbell Curls", sets: 4, reps: "10-12", rest: "60 sec", time: "10 min" },
            { name: "Tricep Pushdowns", sets: 4, reps: "12-15", rest: "60 sec", time: "10 min" },
            { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Bicep Curls", sets: 4, reps: "10-12", rest: "60 sec", time: "10 min" },
            { name: "DB Tricep Extensions", sets: 4, reps: "12-15", rest: "60 sec", time: "10 min" },
            { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "DB Kickbacks", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Diamond Push-Ups", sets: 4, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Chin-Ups", sets: 3, reps: "Max", rest: "90 sec", time: "8 min" },
            { name: "Dips", sets: 3, reps: "Max", rest: "60 sec", time: "8 min" }
        ]
    },
    core: {
        'full': [
            { name: "Cable Crunches", sets: 4, reps: "15-20", rest: "45 sec", time: "8 min" },
            { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Russian Twists", sets: 3, reps: "20/side", rest: "45 sec", time: "6 min" },
            { name: "Plank", sets: 3, reps: "45 sec", rest: "30 sec", time: "6 min" }
        ],
        'dumbbells': [
            { name: "DB Russian Twists", sets: 4, reps: "15/side", rest: "45 sec", time: "8 min" },
            { name: "DB Side Bends", sets: 3, reps: "15/side", rest: "45 sec", time: "6 min" },
            { name: "Weighted Crunches", sets: 3, reps: "15-20", rest: "45 sec", time: "6 min" }
        ],
        'bodyweight': [
            { name: "Crunches", sets: 4, reps: "20-25", rest: "45 sec", time: "8 min" },
            { name: "Leg Raises", sets: 3, reps: "15-20", rest: "45 sec", time: "6 min" },
            { name: "Mountain Climbers", sets: 3, reps: "30 sec", rest: "30 sec", time: "5 min" },
            { name: "Plank", sets: 3, reps: "45 sec", rest: "30 sec", time: "6 min" }
        ]
    },
    "full-body": {
        'full': [
            { name: "Barbell Squats", sets: 4, reps: "8-10", rest: "90 sec", time: "12 min" },
            { name: "Bench Press", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Bent Over Rows", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Overhead Press", sets: 3, reps: "8-12", rest: "90 sec", time: "10 min" },
            { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec", time: "10 min" },
            { name: "Pull-Ups/Lat Pulldown", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Squats", sets: 4, reps: "12-15", rest: "90 sec", time: "12 min" },
            { name: "DB Bench Press", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Single Arm Rows", sets: 3, reps: "12/side", rest: "60 sec", time: "10 min" },
            { name: "DB Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" },
            { name: "DB Romanian Deadlifts", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Push-Ups", sets: 4, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Squats", sets: 4, reps: "20-25", rest: "60 sec", time: "8 min" },
            { name: "Pull-Ups/Inverted Rows", sets: 3, reps: "Max", rest: "90 sec", time: "8 min" },
            { name: "Pike Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" },
            { name: "Lunges", sets: 3, reps: "15/leg", rest: "60 sec", time: "8 min" }
        ]
    },
    'upper-body': {
        'full': [
            { name: "Bench Press", sets: 4, reps: "8-12", rest: "90 sec", time: "12 min" },
            { name: "Barbell Rows", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Military Press", sets: 3, reps: "8-12", rest: "90 sec", time: "10 min" },
            { name: "Pull-Ups", sets: 3, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Incline DB Press", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" },
            { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Bench Press", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Single Arm Rows", sets: 4, reps: "12/side", rest: "60 sec", time: "12 min" },
            { name: "DB Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" },
            { name: "Incline DB Press", sets: 3, reps: "10-12", rest: "60 sec", time: "8 min" },
            { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "45 sec", time: "6 min" }
        ],
        'bodyweight': [
            { name: "Push-Ups", sets: 4, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Pull-Ups/Chin-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Pike Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" },
            { name: "Diamond Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" },
            { name: "Inverted Rows", sets: 3, reps: "Max", rest: "60 sec", time: "6 min" }
        ]
    },
    'lower-body': {
        'full': [
            { name: "Barbell Squats", sets: 4, reps: "8-10", rest: "120 sec", time: "15 min" },
            { name: "Romanian Deadlifts", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "Leg Press", sets: 3, reps: "12-15", rest: "90 sec", time: "10 min" },
            { name: "Walking Lunges", sets: 3, reps: "12/leg", rest: "60 sec", time: "8 min" },
            { name: "Leg Extensions", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Seated Calf Raises", sets: 4, reps: "15-20", rest: "45 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Squats", sets: 4, reps: "12-15", rest: "90 sec", time: "12 min" },
            { name: "DB Romanian Deadlifts", sets: 4, reps: "12-15", rest: "90 sec", time: "12 min" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "12/leg", rest: "60 sec", time: "10 min" },
            { name: "Walking Lunges", sets: 3, reps: "12/leg", rest: "60 sec", time: "8 min" },
            { name: "Calf Raises", sets: 4, reps: "20-25", rest: "45 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Bodyweight Squats", sets: 4, reps: "25-30", rest: "60 sec", time: "10 min" },
            { name: "Walking Lunges", sets: 4, reps: "20/leg", rest: "60 sec", time: "10 min" },
            { name: "Jump Squats", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Step-Ups", sets: 3, reps: "15/leg", rest: "60 sec", time: "8 min" },
            { name: "Calf Raises", sets: 4, reps: "30-40", rest: "45 sec", time: "8 min" }
        ]
    },
    'cardio': {
        'full': [
            { name: "Treadmill Intervals", sets: 1, reps: "20 min", rest: "N/A", time: "20 min" },
            { name: "Stair Master", sets: 1, reps: "15 min", rest: "N/A", time: "15 min" },
            { name: "Rowing Machine", sets: 1, reps: "15 min", rest: "N/A", time: "15 min" },
            { name: "Battle Ropes", sets: 3, reps: "30 sec", rest: "30 sec", time: "5 min" }
        ],
        'dumbbells': [
            { name: "DB Clean & Press", sets: 4, reps: "12", rest: "60 sec", time: "10 min" },
            { name: "DB Burpees", sets: 3, reps: "10", rest: "60 sec", time: "8 min" },
            { name: "DB Swings", sets: 3, reps: "20", rest: "45 sec", time: "8 min" },
            { name: "Farmers Walks", sets: 3, reps: "30 sec", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Burpees", sets: 4, reps: "15", rest: "45 sec", time: "10 min" },
            { name: "Mountain Climbers", sets: 3, reps: "30 sec", rest: "30 sec", time: "6 min" },
            { name: "Jump Rope", sets: 3, reps: "2 min", rest: "60 sec", time: "10 min" },
            { name: "High Knees", sets: 3, reps: "30 sec", rest: "30 sec", time: "5 min" }
        ]
    },
    'push': {
        'full': [
            { name: "Bench Press", sets: 4, reps: "8-10", rest: "90 sec", time: "12 min" },
            { name: "Overhead Press", sets: 4, reps: "8-10", rest: "90 sec", time: "12 min" },
            { name: "Incline DB Press", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Chest Flyes", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Bench Press", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "DB Shoulder Press", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "DB Incline Press", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "DB Lateral Raises", sets: 3, reps: "12-15", rest: "45 sec", time: "6 min" },
            { name: "DB Tricep Extensions", sets: 3, reps: "12-15", rest: "45 sec", time: "6 min" }
        ],
        'bodyweight': [
            { name: "Push-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Pike Push-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "10 min" },
            { name: "Diamond Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "8 min" },
            { name: "Dips", sets: 3, reps: "Max", rest: "90 sec", time: "8 min" },
            { name: "Decline Push-Ups", sets: 3, reps: "Max", rest: "60 sec", time: "8 min" }
        ]
    },
    'pull': {
        'full': [
            { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90 sec", time: "12 min" },
            { name: "Pull-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "12 min" },
            { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec", time: "9 min" },
            { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Cable Rows", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" }
        ],
        'dumbbells': [
            { name: "DB Rows", sets: 4, reps: "10-12", rest: "90 sec", time: "12 min" },
            { name: "DB Pullovers", sets: 3, reps: "12-15", rest: "60 sec", time: "9 min" },
            { name: "DB Curls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec", time: "8 min" },
            { name: "Reverse Flyes", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" }
        ],
        'bodyweight': [
            { name: "Pull-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "12 min" },
            { name: "Chin-Ups", sets: 4, reps: "Max", rest: "90 sec", time: "12 min" },
            { name: "Inverted Rows", sets: 3, reps: "Max", rest: "60 sec", time: "9 min" },
            { name: "Band Pull-Aparts", sets: 3, reps: "15-20", rest: "45 sec", time: "6 min" },
            { name: "Door Frame Rows", sets: 3, reps: "Max", rest: "60 sec", time: "8 min" }
        ]
    },
    'hiit': {
        'full': [
            { name: "Burpee to Box Jump", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Battle Ropes", sets: 4, reps: "30 sec", rest: "15 sec", time: "3 min" },
            { name: "Kettlebell Swings", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Mountain Climbers", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Rowing Sprints", sets: 4, reps: "30 sec", rest: "30 sec", time: "4 min" }
        ],
        'dumbbells': [
            { name: "DB Thrusters", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Renegade Rows", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "DB Snatch", sets: 4, reps: "30 sec/side", rest: "15 sec", time: "4 min" },
            { name: "DB Clean & Press", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" }
        ],
        'bodyweight': [
            { name: "Burpees", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Mountain Climbers", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Jump Squats", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "High Knees", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" },
            { name: "Plank to Push-Up", sets: 4, reps: "45 sec", rest: "15 sec", time: "4 min" }
        ]
    },
    'strength': {
        'full': [
            { name: "Barbell Squats", sets: 5, reps: "5", rest: "180 sec", time: "15 min" },
            { name: "Deadlifts", sets: 5, reps: "5", rest: "180 sec", time: "15 min" },
            { name: "Bench Press", sets: 5, reps: "5", rest: "180 sec", time: "15 min" },
            { name: "Overhead Press", sets: 5, reps: "5", rest: "180 sec", time: "15 min" },
            { name: "Barbell Rows", sets: 5, reps: "5", rest: "180 sec", time: "15 min" }
        ],
        'dumbbells': [
            { name: "Heavy DB Squats", sets: 5, reps: "6-8", rest: "150 sec", time: "12 min" },
            { name: "DB Romanian Deadlifts", sets: 5, reps: "6-8", rest: "150 sec", time: "12 min" },
            { name: "Heavy DB Press", sets: 5, reps: "6-8", rest: "150 sec", time: "12 min" },
            { name: "DB Row", sets: 5, reps: "6-8", rest: "150 sec", time: "12 min" }
        ],
        'bodyweight': [
            { name: "Weighted Pull-Ups", sets: 5, reps: "5-8", rest: "180 sec", time: "15 min" },
            { name: "Weighted Dips", sets: 5, reps: "5-8", rest: "180 sec", time: "15 min" },
            { name: "Pistol Squats", sets: 5, reps: "5/leg", rest: "150 sec", time: "12 min" },
            { name: "Weighted Push-Ups", sets: 5, reps: "8-10", rest: "150 sec", time: "12 min" }
        ]
    },
    'powerlifting': {
        'full': [
            { name: "Competition Squats", sets: 6, reps: "3-5", rest: "180 sec", time: "20 min" },
            { name: "Competition Bench", sets: 6, reps: "3-5", rest: "180 sec", time: "20 min" },
            { name: "Competition Deadlift", sets: 6, reps: "3-5", rest: "180 sec", time: "20 min" },
            { name: "Accessory Work", sets: 3, reps: "8-12", rest: "60 sec", time: "15 min" }
        ]
    },
    'endurance': {
        'full': [
            { name: "Circuit Training", sets: 3, reps: "15-20", rest: "30 sec", time: "30 min" },
            { name: "Supersets", sets: 4, reps: "12-15", rest: "45 sec", time: "25 min" },
            { name: "Cardio Intervals", sets: 1, reps: "30 min", rest: "N/A", time: "30 min" }
        ],
        'dumbbells': [
            { name: "DB Complex", sets: 4, reps: "12-15", rest: "60 sec", time: "20 min" },
            { name: "Endurance Circuit", sets: 3, reps: "15-20", rest: "30 sec", time: "25 min" }
        ],
        'bodyweight': [
            { name: "Tabata Intervals", sets: 8, reps: "20 sec", rest: "10 sec", time: "4 min" },
            { name: "EMOM Workout", sets: 10, reps: "varies", rest: "varies", time: "10 min" }
        ]
    },
    'calisthenics': {
        'full': [
            { name: "Muscle-Ups", sets: 4, reps: "3-5", rest: "120 sec", time: "12 min" },
            { name: "Handstand Push-Ups", sets: 4, reps: "5-8", rest: "120 sec", time: "12 min" },
            { name: "Front Lever Progressions", sets: 4, reps: "10-15 sec", rest: "90 sec", time: "10 min" },
            { name: "Planche Progressions", sets: 4, reps: "10-15 sec", rest: "90 sec", time: "10 min" },
            { name: "L-Sit Holds", sets: 4, reps: "15-20 sec", rest: "60 sec", time: "8 min" }
        ],
        'intermediate': [
            { name: "Advanced Push-Ups", sets: 4, reps: "12-15", rest: "90 sec", time: "10 min" },
            { name: "Pull-Up Variations", sets: 4, reps: "8-10", rest: "90 sec", time: "10 min" },
            { name: "Pistol Squats", sets: 3, reps: "8-10/leg", rest: "90 sec", time: "12 min" },
            { name: "Wall Handstand Hold", sets: 4, reps: "30 sec", rest: "60 sec", time: "8 min" }
        ],
        'beginner': [
            { name: "Push-Up Progressions", sets: 4, reps: "10-12", rest: "60 sec", time: "8 min" },
            { name: "Assisted Pull-Ups", sets: 4, reps: "8-10", rest: "90 sec", time: "10 min" },
            { name: "Bodyweight Squats", sets: 3, reps: "15-20", rest: "60 sec", time: "8 min" },
            { name: "Wall Plank", sets: 3, reps: "30 sec", rest: "45 sec", time: "6 min" }
        ]
    },
    'crossfit-style': {
        'full': [
            { name: "Clean & Jerk", sets: "AMRAP", reps: "12 min", rest: "N/A", time: "12 min" },
            { name: "Thrusters", sets: "For Time", reps: "21-15-9", rest: "N/A", time: "10 min" },
            { name: "Wall Balls", sets: "EMOM", reps: "15", rest: "Built-in", time: "10 min" },
            { name: "Box Jumps", sets: "Tabata", reps: "20/10", rest: "Built-in", time: "4 min" }
        ],
        'dumbbells': [
            { name: "DB Clean & Press", sets: "AMRAP", reps: "10 min", rest: "N/A", time: "10 min" },
            { name: "DB Snatch", sets: "For Time", reps: "50", rest: "N/A", time: "8 min" },
            { name: "DB Thrusters", sets: "EMOM", reps: "10", rest: "Built-in", time: "10 min" }
        ],
        'bodyweight': [
            { name: "Burpees", sets: "AMRAP", reps: "7 min", rest: "N/A", time: "7 min" },
            { name: "Air Squats", sets: "For Time", reps: "100", rest: "N/A", time: "5 min" },
            { name: "Push-Ups", sets: "EMOM", reps: "10", rest: "Built-in", time: "10 min" }
        ]
    },
    'mobility': {
        'full': [
            { name: "Dynamic Stretching", sets: 1, reps: "10 min", rest: "N/A", time: "10 min" },
            { name: "Joint Mobility", sets: 1, reps: "10 min", rest: "N/A", time: "10 min" },
            { name: "Yoga Flow", sets: 1, reps: "15 min", rest: "N/A", time: "15 min" },
            { name: "Static Stretching", sets: 1, reps: "10 min", rest: "N/A", time: "10 min" }
        ],
        'recovery': [
            { name: "Foam Rolling", sets: 1, reps: "15 min", rest: "N/A", time: "15 min" },
            { name: "Mobility Drills", sets: 3, reps: "8-10/side", rest: "30 sec", time: "12 min" },
            { name: "Stretching", sets: 1, reps: "15 min", rest: "N/A", time: "15 min" }
        ]
    },
    'sport-specific': {
        'basketball': [
            { name: "Explosive Jumps", sets: 4, reps: "8-10", rest: "60 sec", time: "8 min" },
            { name: "Agility Drills", sets: 3, reps: "30 sec", rest: "45 sec", time: "6 min" },
            { name: "Sprint Intervals", sets: 6, reps: "20 sec", rest: "40 sec", time: "6 min" }
        ],
        'soccer': [
            { name: "Footwork Drills", sets: 4, reps: "30 sec", rest: "30 sec", time: "4 min" },
            { name: "Sprint & Change Direction", sets: 6, reps: "20 sec", rest: "40 sec", time: "6 min" },
            { name: "Endurance Running", sets: 1, reps: "20 min", rest: "N/A", time: "20 min" }
        ]
    }
};

// Expanding meal plans with all diet variations and goals
const mealPlans = {
    'fat-loss': {
        'standard': {
            breakfast: [
                {
                    name: "Lean Protein Start",
                    calories: 350,
                    protein: "35g",
                    carbs: "30g",
                    fats: "12g",
                    description: "High protein, low-carb breakfast",
                    ingredients: [
                        "4 egg whites",
                        "1 whole egg",
                        "1/2 cup oatmeal",
                        "1 cup berries",
                        "1 tbsp almond butter"
                    ],
                    timing: "Within 1 hour of waking"
                },
                {
                    name: "Greek Yogurt Power Bowl",
                    calories: 320,
                    protein: "30g",
                    carbs: "35g",
                    fats: "10g",
                    description: "Protein-rich yogurt bowl",
                    ingredients: [
                        "2 cups Greek yogurt",
                        "1/4 cup granola",
                        "1 cup mixed berries",
                        "1 tbsp honey",
                        "Chia seeds"
                    ]
                },
                {
                    name: "Protein Pancakes",
                    calories: 340,
                    protein: "32g",
                    carbs: "32g",
                    fats: "11g",
                    description: "Healthy protein pancakes",
                    ingredients: [
                        "1 scoop protein powder",
                        "1/2 cup oats",
                        "2 egg whites",
                        "1/2 banana",
                        "Cinnamon"
                    ]
                },
                {
                    name: "Egg White Frittata",
                    calories: 300,
                    protein: "35g",
                    carbs: "25g",
                    fats: "10g",
                    description: "Vegetable-rich egg white dish",
                    ingredients: [
                        "6 egg whites",
                        "1 cup spinach",
                        "1/4 cup low-fat cheese",
                        "Bell peppers",
                        "Mushrooms"
                    ]
                },
                {
                    name: "Smoothie Bowl",
                    calories: 330,
                    protein: "30g",
                    carbs: "35g",
                    fats: "9g",
                    description: "Protein smoothie bowl",
                    ingredients: [
                        "1 scoop protein powder",
                        "1 cup almond milk",
                        "1/2 cup berries",
                        "1/2 banana",
                        "1 tbsp flax seeds"
                    ]
                }
            ],
            lunch: [
                {
                    name: "Lean Chicken Bowl",
                    calories: 400,
                    protein: "40g",
                    carbs: "35g",
                    fats: "12g",
                    description: "High-protein lunch bowl",
                    ingredients: [
                        "6 oz chicken breast",
                        "1 cup quinoa",
                        "2 cups mixed vegetables",
                        "1 tbsp olive oil",
                        "Lemon herb seasoning"
                    ]
                },
                {
                    name: "Tuna Salad Plate",
                    calories: 380,
                    protein: "38g",
                    carbs: "30g",
                    fats: "14g",
                    description: "Light protein-rich lunch",
                    ingredients: [
                        "5 oz tuna",
                        "Mixed greens",
                        "1/2 avocado",
                        "Cherry tomatoes",
                        "Balsamic dressing"
                    ]
                },
                {
                    name: "Turkey Wrap",
                    calories: 390,
                    protein: "35g",
                    carbs: "38g",
                    fats: "12g",
                    description: "Lean protein wrap",
                    ingredients: [
                        "5 oz turkey breast",
                        "Whole wheat wrap",
                        "Lettuce and tomato",
                        "1 oz low-fat cheese",
                        "Mustard"
                    ]
                },
                {
                    name: "Shrimp Stir-Fry",
                    calories: 370,
                    protein: "35g",
                    carbs: "35g",
                    fats: "10g",
                    description: "Low-fat seafood lunch",
                    ingredients: [
                        "6 oz shrimp",
                        "1 cup brown rice",
                        "Mixed vegetables",
                        "1 tsp sesame oil",
                        "Ginger sauce"
                    ]
                },
                {
                    name: "Quinoa Power Bowl",
                    calories: 385,
                    protein: "32g",
                    carbs: "40g",
                    fats: "13g",
                    description: "Complete protein bowl",
                    ingredients: [
                        "4 oz grilled chicken",
                        "1 cup quinoa",
                        "Roasted vegetables",
                        "1/4 avocado",
                        "Lime dressing"
                    ]
                }
            ],
            dinner: [
                {
                    name: "Lean Steak Plate",
                    calories: 420,
                    protein: "45g",
                    carbs: "30g",
                    fats: "15g",
                    description: "High-protein dinner",
                    ingredients: [
                        "6 oz lean beef",
                        "Sweet potato",
                        "Asparagus",
                        "1 tbsp olive oil",
                        "Herbs and spices"
                    ]
                },
                {
                    name: "Baked Salmon",
                    calories: 400,
                    protein: "38g",
                    carbs: "25g",
                    fats: "18g",
                    description: "Omega-rich fish dinner",
                    ingredients: [
                        "6 oz salmon",
                        "Cauliflower rice",
                        "Broccoli",
                        "Lemon butter sauce",
                        "Fresh dill"
                    ]
                },
                {
                    name: "Turkey Meatballs",
                    calories: 380,
                    protein: "42g",
                    carbs: "28g",
                    fats: "12g",
                    description: "Lean protein dinner",
                    ingredients: [
                        "6 oz turkey meatballs",
                        "Zucchini noodles",
                        "Marinara sauce",
                        "1 oz parmesan",
                        "Fresh basil"
                    ]
                },
                {
                    name: "Chicken Stir-Fry",
                    calories: 390,
                    protein: "40g",
                    carbs: "32g",
                    fats: "13g",
                    description: "Low-calorie Asian style",
                    ingredients: [
                        "6 oz chicken breast",
                        "Cauliflower rice",
                        "Stir-fry vegetables",
                        "1 tsp sesame oil",
                        "Soy sauce"
                    ]
                },
                {
                    name: "White Fish Plate",
                    calories: 350,
                    protein: "40g",
                    carbs: "25g",
                    fats: "12g",
                    description: "Light fish dinner",
                    ingredients: [
                        "6 oz cod",
                        "Roasted vegetables",
                        "Quinoa",
                        "Lemon herb sauce",
                        "Capers"
                    ]
                }
            ],
            snacks: [
                {
                    name: "Protein Power Snack",
                    calories: 150,
                    protein: "20g",
                    carbs: "12g",
                    fats: "5g",
                    description: "Quick protein boost",
                    ingredients: [
                        "1 scoop whey protein",
                        "1 small apple",
                        "10 almonds",
                        "Cinnamon",
                        "Water"
                    ],
                    timing: "Between meals"
                },
                {
                    name: "Greek Yogurt Parfait",
                    calories: 180,
                    protein: "15g",
                    carbs: "15g",
                    fats: "8g",
                    description: "Balanced mini-meal",
                    ingredients: [
                        "1 cup Greek yogurt",
                        "1/4 cup berries",
                        "1 tbsp honey",
                        "2 tbsp granola",
                        "Chia seeds"
                    ]
                },
                {
                    name: "Veggie Protein Pack",
                    calories: 160,
                    protein: "18g",
                    carbs: "10g",
                    fats: "7g",
                    description: "Low-carb snack",
                    ingredients: [
                        "2 hard-boiled eggs",
                        "Baby carrots",
                        "Cucumber slices",
                        "Cherry tomatoes",
                        "Hummus"
                    ]
                },
                {
                    name: "Energy Bites",
                    calories: 170,
                    protein: "12g",
                    carbs: "18g",
                    fats: "8g",
                    description: "Natural energy boost",
                    ingredients: [
                        "Dates",
                        "Protein powder",
                        "Oats",
                        "Almond butter",
                        "Dark chocolate chips"
                    ]
                },
                {
                    name: "Protein Shake Plus",
                    calories: 165,
                    protein: "22g",
                    carbs: "14g",
                    fats: "4g",
                    description: "Post-workout recovery",
                    ingredients: [
                        "1 scoop protein powder",
                        "1 cup almond milk",
                        "1/2 banana",
                        "Ice",
                        "Cinnamon"
                    ]
                }
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Workout Form Handler
    const workoutForm = document.getElementById('workout-form');
    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const muscleGroup = document.getElementById('muscle-group').value;
        const equipment = document.getElementById('equipment').value;
        const experience = document.getElementById('experience').value;
        generateWorkout(muscleGroup, equipment, experience);
    });

    function generateWorkout(muscleGroup, equipment, experience) {
        const workoutPlan = workouts[muscleGroup]?.[equipment] || workouts[muscleGroup]?.['full'];
        if (!workoutPlan) {
            document.getElementById('workout-container').innerHTML = '<p>Workout plan not available for this combination.</p>';
            return;
        }

        const workoutHTML = `
            <h2>${muscleGroup.toUpperCase()} WORKOUT - ${equipment.toUpperCase()}</h2>
            <div class="workout-plan">
                ${workoutPlan.map(exercise => `
                    <div class="exercise">
                        <h3>${exercise.name}</h3>
                        <p>Sets: ${exercise.sets} | Reps: ${exercise.reps} | Rest: ${exercise.rest}</p>
                    </div>
                `).join('')}
            </div>
            <div class="total-time">
                <p>Estimated workout time: ${calculateTotalTime(workoutPlan)} minutes</p>
            </div>
        `;

        document.getElementById('workout-container').innerHTML = workoutHTML;
    }

    // Meal Plan Form Handler
    const mealForm = document.getElementById('meal-form');
    mealForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const dietType = document.getElementById('diet-type').value;
        generateMealPlan(goal, dietType);
    });

    function generateMealPlan(goal, dietType) {
        const mealPlan = mealPlans[goal]?.[dietType];
        if (!mealPlan) {
            document.getElementById('meal-container').innerHTML = '<p>Meal plan not available for this combination.</p>';
            return;
        }

        const mealHTML = `
            <h2>${goal.toUpperCase()} MEAL PLAN - ${dietType.toUpperCase()}</h2>
            
            <div class="meal-section">
                <h3>Breakfast Options</h3>
                <div class="meal-options">
                    ${mealPlan.breakfast.map(meal => `
                        <div class="meal-card">
                            <h4>${meal.name}</h4>
                            <p class="meal-description">${meal.description}</p>
                            <div class="nutrition-info">
                                <span>Calories: ${meal.calories}</span>
                                <span>Protein: ${meal.protein}</span>
                                <span>Carbs: ${meal.carbs}</span>
                                <span>Fats: ${meal.fats}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="meal-section">
                <h3>Lunch Options</h3>
                <div class="meal-options">
                    ${mealPlan.lunch.map(meal => `
                        <div class="meal-card">
                            <h4>${meal.name}</h4>
                            <p class="meal-description">${meal.description}</p>
                            <div class="nutrition-info">
                                <span>Calories: ${meal.calories}</span>
                                <span>Protein: ${meal.protein}</span>
                                <span>Carbs: ${meal.carbs}</span>
                                <span>Fats: ${meal.fats}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="meal-section">
                <h3>Dinner Options</h3>
                <div class="meal-options">
                    ${mealPlan.dinner.map(meal => `
                        <div class="meal-card">
                            <h4>${meal.name}</h4>
                            <p class="meal-description">${meal.description}</p>
                            <div class="nutrition-info">
                                <span>Calories: ${meal.calories}</span>
                                <span>Protein: ${meal.protein}</span>
                                <span>Carbs: ${meal.carbs}</span>
                                <span>Fats: ${meal.fats}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="meal-section">
                <h3>Snack Options</h3>
                <div class="meal-options">
                    ${mealPlan.snacks.map(meal => `
                        <div class="meal-card">
                            <h4>${meal.name}</h4>
                            <p class="meal-description">${meal.description}</p>
                            <div class="nutrition-info">
                                <span>Calories: ${meal.calories}</span>
                                <span>Protein: ${meal.protein}</span>
                                <span>Carbs: ${meal.carbs}</span>
                                <span>Fats: ${meal.fats}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.getElementById('meal-container').innerHTML = mealHTML;
    }

    function calculateTotalTime(workoutPlan) {
        return workoutPlan.reduce((total, exercise) => {
            return total + parseInt(exercise.time);
        }, 0);
    }
}); 