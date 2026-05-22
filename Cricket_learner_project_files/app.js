const foundationLessons = [
  {
    title: "Cricket Foundations",
    level: "Beginner",
    summary: "Understand the aim of cricket, the roles on the field, innings, overs, wickets, and runs.",
    notes: [
      ["The objective", "Cricket is a contest between batting and bowling sides. Batters score runs; bowlers and fielders try to stop runs and take wickets."],
      ["Core vocabulary", "An over is six legal balls. An innings is a team's turn to bat. A wicket can mean the stumps, the pitch area, or a batter getting out."],
      ["How a match moves", "The bowler delivers, the batter responds, fielders react, and the score changes after every ball."],
    ],
    skills: ["Explain runs, wickets, overs, and innings", "Read a simple scoreboard", "Identify batter, bowler, keeper, and fielders"],
    quiz: {
      question: "How many legal balls are in one over?",
      options: ["4", "6", "8", "10"],
      answer: 1,
      explain: "One over contains six legal deliveries. Wides and no-balls do not count as legal balls.",
    },
  },
  {
    title: "Rules and Scoring",
    level: "Beginner",
    summary: "Learn how runs are scored, extras are counted, and batters get out.",
    notes: [
      ["Scoring runs", "Runs come from running between wickets, boundaries, sixes, and extras such as wides, no-balls, byes, and leg byes."],
      ["Common dismissals", "Bowled, caught, run out, stumped, LBW, and hit wicket are the dismissals every learner should know first."],
      ["Fair deliveries", "A legal ball must not be a wide or no-ball. Extras can punish poor bowling even when the batter does not hit the ball."],
    ],
    skills: ["Tell the difference between four and six", "Recognize common dismissals", "Understand extras"],
    quiz: {
      question: "Which dismissal happens when the ball hits the stumps after passing the batter?",
      options: ["Caught", "Bowled", "Run out", "Stumped"],
      answer: 1,
      explain: "That is bowled. The delivery beats the batter and breaks the wicket.",
    },
  },
];

const battingLessons = [
  {
    title: "Batting Setup",
    level: "Batsman",
    summary: "Build stance, grip, balance, trigger movement, and head position before learning shots.",
    notes: [
      ["Stance and balance", "Stand side-on, keep your knees soft, and keep your head over your base so you can move forward or back quickly."],
      ["Grip and bat face", "A relaxed grip gives control. The bat face should meet the ball straight for defence and drives."],
      ["Watch the ball", "Pick the ball from the bowler's hand, judge length early, then move your feet before swinging hard."],
    ],
    skills: ["Set a balanced stance", "Hold the bat with control", "Judge line and length early"],
    quiz: {
      question: "Why should a batter keep the head still?",
      options: ["To see the ball clearly", "To make the bat heavier", "To stop the over", "To change the field"],
      answer: 0,
      explain: "A still head helps the batter judge the ball and keep balance through the shot.",
    },
  },
  {
    title: "Defence and Leaving",
    level: "Batsman",
    summary: "Learn front-foot defence, back-foot defence, soft hands, and when to leave the ball.",
    notes: [
      ["Front-foot defence", "Move forward to fuller balls, keep the bat close to the pad, and play under your eyes."],
      ["Back-foot defence", "For shorter balls, move back and across, keep your body behind the ball, and control bounce."],
      ["The leave", "A good leave is a scoring skill in long formats because it makes bowlers change their plan."],
    ],
    skills: ["Play front-foot defence", "Play back-foot defence", "Decide when to leave"],
    quiz: {
      question: "Which ball is usually best for front-foot defence?",
      options: ["A fuller ball", "A short bouncer", "A wide full toss", "A ball after the over ends"],
      answer: 0,
      explain: "Front-foot defence is usually used against fuller balls near the batter.",
    },
  },
  {
    title: "Drives",
    level: "Batsman",
    summary: "Master straight drive, cover drive, on drive, square drive, and controlled timing.",
    notes: [
      ["Straight drive", "Step toward the pitch of the ball, present a straight bat, and keep the follow-through balanced."],
      ["Cover drive", "Use it for fuller balls outside off stump. The key is reaching the ball without falling over."],
      ["On drive", "Play through mid-on when the ball is full and closer to your pads."],
    ],
    skills: ["Play a straight drive", "Know when to cover drive", "Keep drives along the ground"],
    quiz: {
      question: "Which drive is usually played through the off-side covers?",
      options: ["On drive", "Cover drive", "Pull", "Sweep"],
      answer: 1,
      explain: "The cover drive is played through the cover region on the off side.",
    },
  },
  {
    title: "Strokes Around the Ground",
    level: "Batsman",
    summary: "Learn cut, pull, hook, glance, flick, sweep, reverse sweep, and strike rotation.",
    notes: [
      ["Square shots", "The cut attacks width outside off stump. The pull and hook attack short balls, usually on the leg side."],
      ["Leg-side scoring", "Glances and flicks use the pace of the ball to score behind or in front of square."],
      ["Sweeps", "Sweeps help against spin when you want to disturb length and field placement."],
    ],
    skills: ["Use cut, pull, and hook", "Score with flicks and glances", "Choose sweep options against spin"],
    quiz: {
      question: "Which shot is commonly used against a short ball?",
      options: ["Pull", "Forward defence", "Straight leave", "Block yorker"],
      answer: 0,
      explain: "The pull shot attacks a short ball, often through square leg or midwicket.",
    },
  },
  {
    title: "Lofted Shots",
    level: "Advanced Batsman",
    summary: "Learn lofted drives, slog sweep, chip shot, inside-out shot, and safe power hitting.",
    notes: [
      ["Lofted drive", "Hit through the line only when the ball is full enough and your head stays stable."],
      ["Slog sweep", "This is a power option against spin, but it needs a clear target area and committed footwork."],
      ["Inside-out", "Move toward leg side to create room and hit over cover when the field allows it."],
    ],
    skills: ["Pick the right ball to loft", "Control power shots", "Aim at field gaps"],
    quiz: {
      question: "What makes a lofted shot safer?",
      options: ["Choosing the right ball and target area", "Closing your eyes", "Ignoring the field", "Swinging before the ball is bowled"],
      answer: 0,
      explain: "Lofted shots need the right length, stable base, and a clear field target.",
    },
  },
  {
    title: "Shot Selection",
    level: "Expert Batsman",
    summary: "Choose shots by line, length, field, match situation, risk, and your scoring zones.",
    notes: [
      ["Line and length", "The ball tells you the first option. Fuller balls invite drives; short balls invite back-foot shots."],
      ["Field reading", "A shot is only smart if the field makes it worth the risk."],
      ["Match context", "A chase, a collapse, a powerplay, and a final over all demand different risk levels."],
    ],
    skills: ["Match shots to ball length", "Read the field before attacking", "Adjust risk by situation"],
    quiz: {
      question: "What should a batter check before playing a risky attacking shot?",
      options: ["Field placement and match situation", "Shoe color", "Crowd noise only", "The umpire's hat"],
      answer: 0,
      explain: "Shot selection depends on the ball, field, and match situation.",
    },
  },
];

const bowlingLessons = [
  {
    title: "Bowling Basics",
    level: "Bowler",
    summary: "Learn run-up, action, release, line, length, rhythm, and safe bowling habits.",
    notes: [
      ["Run-up and rhythm", "A repeatable run-up gives balance at the crease and helps release the ball consistently."],
      ["Line and length", "Line is the sideways path toward the batter. Length is where the ball lands."],
      ["Control first", "Speed and spin matter, but control lets a bowler build pressure ball after ball."],
    ],
    skills: ["Repeat a run-up", "Explain line and length", "Bowl with a simple target"],
    quiz: {
      question: "What does bowling length mean?",
      options: ["Where the ball lands", "How many fielders are outside", "How old the ball is", "Which batter is next"],
      answer: 0,
      explain: "Length describes the landing area of the ball on the pitch.",
    },
  },
  {
    title: "Fast Bowling Types",
    level: "Fast Bowling",
    summary: "Study outswing, inswing, seam, bouncer, yorker, slower ball, cutters, and cross-seam.",
    notes: [
      ["Swing bowling", "Outswing moves away from a right-handed batter. Inswing moves back in. Shine, seam angle, and wrist position matter."],
      ["Seam bowling", "Seam movement happens after pitching. A strong wrist and upright seam improve the chance of deviation."],
      ["Pace variations", "Bouncers, yorkers, slower balls, cutters, and cross-seam deliveries stop batters from predicting length and pace."],
    ],
    skills: ["Compare outswing and inswing", "Use seam position", "Name fast-bowling variations"],
    quiz: {
      question: "Which fast-bowling ball aims near the batter's feet?",
      options: ["Yorker", "Bouncer", "Long hop", "Wide half-tracker"],
      answer: 0,
      explain: "A yorker is aimed very full, close to the batter's feet or popping crease.",
    },
  },
  {
    title: "Spin Bowling Types",
    level: "Spin Bowling",
    summary: "Learn off spin, leg spin, left-arm orthodox, wrist spin, googly, arm ball, doosra, and carrom ball.",
    notes: [
      ["Finger spin", "Off spin and left-arm orthodox mainly use fingers, drift, dip, and subtle pace changes."],
      ["Wrist spin", "Leg spin and left-arm wrist spin can produce sharp turn and deceptive variations like the googly."],
      ["Variation balls", "Arm balls, doosras, googlies, sliders, and carrom balls work when the stock ball is believable."],
    ],
    skills: ["Compare finger and wrist spin", "Explain googly and arm ball", "Use flight and pace change"],
    quiz: {
      question: "Which variation from a leg spinner usually turns the opposite way?",
      options: ["Googly", "Yorker", "Bouncer", "Straight drive"],
      answer: 0,
      explain: "A googly is a leg-spinner's deceptive ball that turns the other way.",
    },
  },
  {
    title: "Bowling Plans",
    level: "Advanced Bowler",
    summary: "Build six-ball plans using line, length, field, batter weakness, and pressure.",
    notes: [
      ["Plan the mistake", "Do not only bowl a ball. Decide what mistake you want the batter to make."],
      ["Field support", "Set fielders where your plan sends the ball. A short-ball plan and full-swing plan need different fields."],
      ["Pressure sequence", "Dot balls create risk. Variations work best after the batter feels stuck."],
    ],
    skills: ["Create a six-ball plan", "Set fielders for a plan", "Use dot-ball pressure"],
    quiz: {
      question: "Why should a bowler's field match the bowling plan?",
      options: ["To protect the likely scoring areas", "To make overs shorter", "To remove the wicketkeeper", "To change the toss"],
      answer: 0,
      explain: "The field should support the line, length, and mistake the bowler is trying to create.",
    },
  },
  {
    title: "Death Bowling and Pressure",
    level: "Expert Bowler",
    summary: "Learn yorkers, wide lines, slower balls, bluffing, boundary prevention, and comeback plans.",
    notes: [
      ["Death-over targets", "At the end of an innings, batters want boundaries. Bowlers need clear options and calm execution."],
      ["Variation discipline", "A slower ball is useful only if the batter expects pace. A yorker is useful only if it is accurate."],
      ["Comeback plans", "After a boundary, reset the field, breathe, and return to a ball you can execute."],
    ],
    skills: ["Use yorker and slower-ball plans", "Defend boundaries", "Recover after a bad ball"],
    quiz: {
      question: "What is a key skill in death bowling?",
      options: ["Executing plans under pressure", "Forgetting the field", "Bowling random balls", "Leaving the pitch"],
      answer: 0,
      explain: "Death bowling is about clear plans and execution under pressure.",
    },
  },
];

const sharedAdvancedLessons = [
  {
    title: "Fielding and Wicketkeeping",
    level: "Developing",
    summary: "Learn field positions, catching, ground fielding, throws, and keeper responsibilities.",
    notes: [
      ["Field positions", "Slip, gully, point, cover, mid-off, mid-on, square leg, fine leg, and third are the core landmarks."],
      ["Fielding basics", "Good fielders stay low, attack the ball safely, and throw to the correct end."],
      ["Wicketkeeping", "The keeper reads edges, bounce, spin, stumpings, run-out chances, and field rhythm."],
    ],
    skills: ["Name common positions", "Choose the right throwing end", "Explain keeper duties"],
    quiz: {
      question: "Which fielder stands directly behind the stumps to collect the ball?",
      options: ["Cover", "Wicketkeeper", "Mid-on", "Point"],
      answer: 1,
      explain: "The wicketkeeper is positioned behind the striker's stumps.",
    },
  },
  {
    title: "Formats and Match Awareness",
    level: "Intermediate",
    summary: "Understand Test, ODI, and T20 cricket, plus how tempo changes by format.",
    notes: [
      ["Test cricket", "Tests reward patience, endurance, bowling spells, pitch reading, and session control."],
      ["ODI cricket", "One-day cricket balances strike rotation, wickets in hand, and acceleration windows."],
      ["T20 cricket", "T20 compresses decision-making. Matchups, boundary options, and death-over execution matter intensely."],
    ],
    skills: ["Compare formats", "Adjust match tempo", "Read required run rate"],
    quiz: {
      question: "Which format usually has 20 overs per side?",
      options: ["Test", "ODI", "T20", "First-class"],
      answer: 2,
      explain: "T20 cricket gives each team 20 overs.",
    },
  },
  {
    title: "Expert Analysis",
    level: "Expert",
    summary: "Use data, phases, player roles, pitch conditions, and decision models like an analyst.",
    notes: [
      ["Phase analysis", "Powerplay, middle overs, and death overs each reward different skills and risks."],
      ["Player roles", "Openers, anchors, finishers, enforcers, strike bowlers, and defensive bowlers solve different match problems."],
      ["Data thinking", "Use strike rate, economy, control percentage, dot-ball pressure, boundary percentage, and matchup history carefully."],
    ],
    skills: ["Break a match into phases", "Interpret useful cricket metrics", "Create a role-based game plan"],
    quiz: {
      question: "What does economy rate measure for a bowler?",
      options: ["Runs scored per wicket", "Runs conceded per over", "Balls faced per innings", "Catches per match"],
      answer: 1,
      explain: "Economy rate is runs conceded per over.",
    },
  },
];

const roleNames = {
  allRounder: "All-rounder",
  bowler: "Bowler",
  batsman: "Batsman",
};

const videoTopics = {
  allRounder: [
    ["Complete all-rounder training", "Batting, bowling, fielding, and match awareness in one path.", "cricket all rounder training batting bowling fielding"],
    ["Batting masterclass", "Defence, drives, strokes, lofted shots, and shot selection.", "professional cricket batting coaching drives defence shots"],
    ["Bowling masterclass", "Fast bowling, swing, seam, spin bowling, and tactical plans.", "professional cricket bowling coaching fast bowling spin bowling"],
    ["Fielding standards", "Catching, ground fielding, throwing, and wicketkeeping basics.", "professional cricket fielding drills catching throwing wicketkeeping"],
  ],
  bowler: [
    ["Fast bowling technique", "Run-up, action, wrist position, seam, swing, bouncers, yorkers.", "professional cricket fast bowling coaching swing seam yorker bouncer"],
    ["Spin bowling technique", "Off spin, leg spin, googly, arm ball, flight, drift, dip.", "professional cricket spin bowling coaching off spin leg spin googly"],
    ["Bowling plans", "Six-ball plans, field settings, matchups, and pressure bowling.", "cricket bowling plans field setting professional coaching"],
    ["Death bowling", "Yorkers, slower balls, wide lines, and boundary prevention.", "cricket death bowling yorker slower ball coaching"],
  ],
  batsman: [
    ["Batting basics", "Stance, grip, balance, watching the ball, and footwork.", "professional cricket batting basics stance grip footwork"],
    ["Defence and drives", "Front-foot defence, back-foot defence, straight drive, cover drive.", "cricket batting defence straight drive cover drive coaching"],
    ["Stroke play", "Cut, pull, hook, flick, glance, sweep, and reverse sweep.", "cricket batting shots cut pull sweep flick professional coaching"],
    ["Power hitting", "Lofted shots, slog sweep, inside-out hitting, and finishing.", "cricket batting power hitting lofted shots slog sweep coaching"],
  ],
};

const battingChallenges = [
  {
    prompt: "Full ball outside off stump. The field has a gap at cover.",
    options: ["Cover drive", "Pull shot", "Yorker", "Leg spin"],
    answer: "Cover drive",
    explain: "A full ball outside off stump is ideal for a controlled cover drive when the gap is there.",
  },
  {
    prompt: "Short ball rising toward the body on leg stump.",
    options: ["Pull shot", "Forward defence", "Straight drive", "Leave"],
    answer: "Pull shot",
    explain: "A short ball at the body is usually handled with a pull if it is safe and controlled.",
  },
  {
    prompt: "Good length ball on off stump in a Test match first over.",
    options: ["Defence", "Slog sweep", "Helicopter shot", "Reverse sweep"],
    answer: "Defence",
    explain: "Early in a Test innings, a good length ball on off stump calls for a solid defence.",
  },
  {
    prompt: "Spinner tosses the ball full outside leg with fine leg inside the circle.",
    options: ["Sweep", "Bouncer", "Yorker", "Leave"],
    answer: "Sweep",
    explain: "The sweep can use the angle and field to score behind square against spin.",
  },
];

const bowlingChallenges = [
  {
    prompt: "New batter arrives. Pitch has seam movement. Slip is waiting.",
    options: ["Good length outside off", "Full toss", "Leg-side wide", "Random slower ball"],
    answer: "Good length outside off",
    explain: "A good length outside off invites an edge when there is seam movement and slip support.",
  },
  {
    prompt: "Final over. Batter is standing deep and looking for a full swing.",
    options: ["Yorker", "Half volley", "Short wide ball", "No-ball bouncer"],
    answer: "Yorker",
    explain: "A yorker attacks the base of the bat and is a key death-over option.",
  },
  {
    prompt: "Aggressive batter keeps charging at a spinner.",
    options: ["Slower flighted ball", "Fast full toss", "Same pace every ball", "Short leg-side ball"],
    answer: "Slower flighted ball",
    explain: "Flight and pace change can make the batter misjudge the pitch of the ball.",
  },
  {
    prompt: "Batter is strong through cover but weak against the body.",
    options: ["Hard length into body", "Wide half volley", "Full outside off", "Underarm ball"],
    answer: "Hard length into body",
    explain: "Bowling into the body takes away the favorite cover-drive zone.",
  },
];

const pressureChallenges = [
  {
    prompt: "Need 12 from 6. Full ball on middle stump. Long-on is back, fine leg is inside.",
    options: ["Whip into leg-side gap", "Leave the ball", "Try a late cut", "Block for safety"],
    answer: "Whip into leg-side gap",
    explain: "The field gives a scoring route on the leg side. A controlled whip can find two or a boundary without reckless shape.",
  },
  {
    prompt: "Death over. Batter is deep in the crease and waiting for pace.",
    options: ["Fast half volley", "Wide yorker", "Short leg-side ball", "Same length again"],
    answer: "Wide yorker",
    explain: "A wide yorker moves the hitting arc away from the batter and protects the straight boundary.",
  },
  {
    prompt: "Spinner has a new batter on strike. Mid-off is up and the pitch is gripping.",
    options: ["Flight outside off", "Flat full toss", "Bouncer", "Leg-side wide"],
    answer: "Flight outside off",
    explain: "Flight outside off asks the new batter to reach and risk the aerial shot while the pitch can help turn.",
  },
  {
    prompt: "Powerplay over. Ball is short and wide, point is inside the circle.",
    options: ["Controlled cut", "Forward defence", "Slog sweep", "Yorker"],
    answer: "Controlled cut",
    explain: "Short and wide with point up is a clear cut-shot scoring chance if the batter keeps control.",
  },
  {
    prompt: "Last wicket partnership. Required rate is low, but the bowler is attacking the stumps.",
    options: ["Straight-bat defence", "Blind slog", "Reverse sweep first ball", "Run without calling"],
    answer: "Straight-bat defence",
    explain: "When the required rate is low, protecting the wicket and choosing safe singles is smarter than forcing risk.",
  },
];

const roleTraitSets = {
  allRounder: [
    ["Batting range", 78],
    ["Bowling control", 78],
    ["Field impact", 88],
    ["Game reading", 82],
  ],
  bowler: [
    ["Line control", 90],
    ["Variation craft", 84],
    ["Pressure overs", 82],
    ["Field planning", 76],
  ],
  batsman: [
    ["Shot selection", 88],
    ["Balance", 84],
    ["Strike rotation", 80],
    ["Power zones", 74],
  ],
};

const roleMissions = {
  allRounder: [
    ["Two-skill switch", "Pair one batting skill with one bowling plan. Train your brain to change roles without losing focus."],
    ["Pressure pair", "Answer one batting situation and one bowling situation, then ask the coach what changed between them."],
    ["Field captain lens", "Study the current lesson, then decide where you would place two fielders for the same match moment."],
  ],
  bowler: [
    ["Six-ball trap", "Build a six-ball plan: three pressure balls, one variation, one surprise, and one wicket ball."],
    ["Length scanner", "Name the ideal length before every delivery in the pressure lab, then compare it with the answer."],
    ["Batter weakness hunt", "Find one scoring area to protect and one mistake you want from the batter."],
  ],
  batsman: [
    ["Scoring zone unlock", "Pick one safe scoring zone and connect it to the current lesson skill."],
    ["Ball-to-shot reflex", "Read line and length first, then choose the lowest-risk scoring option."],
    ["Chase composer", "Think like a finisher: choose when to defend, rotate, and attack."],
  ],
};

const recurringQuizzes = [
  {
    prompt: "Who made the helicopter shot famous?",
    options: ["MS Dhoni", "Rahul Dravid", "Shane Warne", "Brian Lara"],
    answer: "MS Dhoni",
    explain: "MS Dhoni made the helicopter shot famous, especially as a finishing option against full balls.",
  },
  {
    prompt: "What is one over in cricket?",
    options: ["Six legal balls", "Ten wickets", "One innings", "A boundary"],
    answer: "Six legal balls",
    explain: "An over has six legal deliveries.",
  },
  {
    prompt: "Which stroke was Rahul Dravid especially known for?",
    options: ["Solid defence", "Switch hit", "Ramp shot only", "Reverse scoop only"],
    answer: "Solid defence",
    explain: "Rahul Dravid was famous for his defence, balance, and classical strokes.",
  },
  {
    prompt: "Which ball is best attacked by a pull shot?",
    options: ["Short ball", "Yorker", "Full toss at the toe", "Wide leave"],
    answer: "Short ball",
    explain: "The pull shot is usually used against short balls.",
  },
  {
    prompt: "Where did cricket gradually develop?",
    options: ["England", "Mars", "Brazil", "Antarctica"],
    answer: "England",
    explain: "Cricket evolved gradually in England rather than being invented by one known person.",
  },
  {
    prompt: "What does economy rate measure?",
    options: ["Runs conceded per over", "Runs scored per wicket", "Catches per innings", "Overs per day"],
    answer: "Runs conceded per over",
    explain: "Economy rate is runs conceded per over by a bowler.",
  },
  {
    prompt: "Which delivery is aimed near the batter's feet?",
    options: ["Yorker", "Bouncer", "Long hop", "Half-tracker"],
    answer: "Yorker",
    explain: "A yorker is a very full delivery aimed near the batter's feet.",
  },
  {
    prompt: "Which format usually has 20 overs per side?",
    options: ["T20", "Test", "ODI", "First-class"],
    answer: "T20",
    explain: "T20 cricket usually gives each team 20 overs.",
  },
  {
    prompt: "What is the main job of a wicketkeeper?",
    options: ["Collect balls behind the stumps", "Bowl every over", "Choose the toss result", "Mark boundaries"],
    answer: "Collect balls behind the stumps",
    explain: "The wicketkeeper stands behind the stumps and collects deliveries, edges, and stumping chances.",
  },
  {
    prompt: "Which shot is usually played through the covers?",
    options: ["Cover drive", "Hook", "Leg glance", "Slog sweep"],
    answer: "Cover drive",
    explain: "The cover drive is played through the cover region on the off side.",
  },
  {
    prompt: "What does line mean in bowling?",
    options: ["The direction across the pitch", "The number of wickets", "The length of the bat", "The crowd size"],
    answer: "The direction across the pitch",
    explain: "Line is the sideways path or channel of the delivery toward the batter.",
  },
  {
    prompt: "Which famous innings partnership helped India in the 2001 Kolkata Test?",
    options: ["Laxman and Dravid", "Warne and McGrath", "Dhoni and Yuvraj", "Lara and Chanderpaul"],
    answer: "Laxman and Dravid",
    explain: "VVS Laxman and Rahul Dravid's partnership is one of India's most famous Test comebacks.",
  },
  {
    prompt: "What is the best first goal for a beginner batter?",
    options: ["Watch the ball clearly", "Swing at every ball", "Ignore footwork", "Only hit sixes"],
    answer: "Watch the ball clearly",
    explain: "Watching the ball and staying balanced are the foundation of batting.",
  },
  {
    prompt: "Which spinner variation turns opposite to a leg spinner's stock ball?",
    options: ["Googly", "Yorker", "Bouncer", "Straight drive"],
    answer: "Googly",
    explain: "A googly is a deceptive leg-spin variation that turns the other way.",
  },
  {
    prompt: "What is a good fielding habit?",
    options: ["Stay low and attack the ball", "Stand upright and wait", "Look away from the ball", "Throw randomly"],
    answer: "Stay low and attack the ball",
    explain: "Good fielders stay low, move early, and attack the ball safely.",
  },
  {
    prompt: "What does strike rotation mean?",
    options: ["Taking singles and changing strike", "Changing the ball color", "Changing the umpire", "Stopping the innings"],
    answer: "Taking singles and changing strike",
    explain: "Strike rotation means scoring singles or twos to keep the scoreboard moving and change the batter on strike.",
  },
  {
    prompt: "Which ball is usually best for a straight drive?",
    options: ["Full ball near the stumps", "Very short bouncer", "Wide ball behind the batter", "Dead ball"],
    answer: "Full ball near the stumps",
    explain: "A straight drive is usually played to a fuller ball near the stumps.",
  },
  {
    prompt: "Why do bowlers use slower balls?",
    options: ["To deceive timing", "To end the match instantly", "To remove fielders", "To change bat size"],
    answer: "To deceive timing",
    explain: "Slower balls make batters mistime shots by disrupting expected pace.",
  },
  {
    prompt: "What does a captain use field placements for?",
    options: ["Support the bowling plan", "Decorate the ground", "Change the ball weight", "Stop legal scoring"],
    answer: "Support the bowling plan",
    explain: "Field placements protect scoring areas and support the bowler's plan.",
  },
  {
    prompt: "What is a boundary four?",
    options: ["Ball reaches rope after touching ground", "Ball is caught", "Bowler hits pad", "Over ends"],
    answer: "Ball reaches rope after touching ground",
    explain: "A four is scored when the ball reaches the boundary after touching the ground.",
  },
  {
    prompt: "What makes Pro learning faster in this app?",
    options: ["Clear steps and focused drills", "Skipping basics forever", "No practice", "Only long theory"],
    answer: "Clear steps and focused drills",
    explain: "Pro learning uses clearer explanations, common mistakes, and short focused drills.",
  },
];

const courseBuilders = {
  allRounder: () => [
    ...foundationLessons,
    ...battingLessons,
    ...bowlingLessons,
    ...sharedAdvancedLessons,
  ],
  bowler: () => [
    ...foundationLessons,
    bowlingLessons[0],
    bowlingLessons[1],
    bowlingLessons[2],
    bowlingLessons[3],
    bowlingLessons[4],
    sharedAdvancedLessons[0],
    sharedAdvancedLessons[1],
    sharedAdvancedLessons[2],
  ],
  batsman: () => [
    ...foundationLessons,
    ...battingLessons,
    sharedAdvancedLessons[0],
    sharedAdvancedLessons[1],
    sharedAdvancedLessons[2],
  ],
};

const assistantBrains = [
  {
    keys: ["dhoni", "helicopter", "msd", "mahi"],
    title: "MS Dhoni and the helicopter shot",
    text: "MS Dhoni made the helicopter shot famous. It is a wrist-powered finishing shot, usually played to yorkers or very full balls, where the bottom hand whips through the ball and the bat finishes in a circular follow-through. The idea is not only power: it turns a difficult full delivery into a boundary option, especially in the final overs.",
  },
  {
    keys: ["rahul dravid", "dravid", "wall", "best strokes"],
    title: "Rahul Dravid's best strokes",
    text: "Rahul Dravid was called The Wall because of his defence, patience, and technique. His best strokes included the front-foot defence, straight drive, cover drive, square cut, late cut, and leg glance. What made them special was balance: his head stayed still, his bat came down straight, and he played the ball very late.",
  },
  {
    keys: ["history", "origin", "found", "invented", "who found cricket", "who invented cricket"],
    title: "History of cricket",
    text: "Cricket was not invented by one single known person. It developed gradually in England, with early forms played by children and villagers before becoming organized in the 1600s and 1700s. The Marylebone Cricket Club later became important in writing and shaping the Laws of Cricket. So the best answer is: cricket evolved in England rather than being founded by one individual.",
  },
  {
    keys: ["past match", "past matches", "famous match", "world cup", "historic match", "final"],
    title: "Famous cricket matches",
    text: "Cricket history is full of famous matches. 1983 World Cup final: India beat West Indies and changed Indian cricket forever. 2001 Kolkata Test: Laxman and Dravid showed how patience can create a comeback. 2007 T20 World Cup final: India handled pressure in a new format. 2011 World Cup final: Dhoni's finishing six became iconic. The learning point: every great match teaches pressure, planning, partnerships, and calm execution.",
  },
  {
    keys: ["1983", "kapil dev", "west indies", "lords"],
    title: "1983 World Cup Final",
    text: "India's 1983 World Cup final win over West Indies at Lord's is one of cricket's biggest turning points. India defended a modest total with disciplined bowling and sharp fielding. Lesson for learners: never judge a match only by the score. Pressure, belief, and teamwork can defend even a small target.",
  },
  {
    keys: ["2001", "kolkata", "laxman", "eden gardens"],
    title: "2001 Kolkata Test",
    text: "The 2001 Kolkata Test against Australia is famous for VVS Laxman and Rahul Dravid's partnership after India followed on. They batted with patience, technique, and mental strength. Lesson for learners: long innings are built one ball at a time. Defence, concentration, and partnerships can change a match.",
  },
  {
    keys: ["2011", "dhoni six", "sri lanka", "world cup final"],
    title: "2011 World Cup Final",
    text: "The 2011 World Cup final is remembered for India's chase against Sri Lanka and MS Dhoni's finishing six. Gambhir built the innings, Dhoni controlled the pressure, and India finished calmly. Lesson for learners: in a chase, understand the required rate, build partnerships, and choose the right moment to attack.",
  },
  {
    keys: ["2007", "t20 world cup", "misbah", "india pakistan"],
    title: "2007 T20 World Cup Final",
    text: "The 2007 T20 World Cup final between India and Pakistan was a pressure classic. India won a tight finish, and the match helped make T20 cricket huge. Lesson for learners: in short formats, every ball matters. Field placement, calm bowling, and smart shot selection decide close games.",
  },
  {
    keys: ["special", "legend", "iconic", "records", "greatest"],
    title: "Cricket's special moments",
    text: "Cricket has many special stories: Sachin Tendulkar's straight drive, Dhoni's helicopter shot, Dravid's defence, Warne's leg spin, Muralitharan's off spin, Lara's high backlift, Kohli's chase mastery, and Bumrah's yorkers. Each legend teaches a different cricket skill and mindset.",
  },
  {
    keys: ["lbw", "leg before"],
    title: "LBW",
    text: "LBW means leg before wicket. The umpire checks whether the ball was legal, where it pitched, whether it hit pad before bat, whether impact was in line, and whether it would have hit the stumps.",
  },
  {
    keys: ["drive", "straight drive", "cover drive", "on drive"],
    title: "Drives",
    text: "A drive is played to a fuller ball. Straight drive goes back past the bowler, cover drive goes through cover, and on drive goes toward mid-on. Balance matters more than force.",
  },
  {
    keys: ["defence", "defense", "leave", "block"],
    title: "Defence",
    text: "Defence protects your wicket. Move to the ball, keep your head still, play close to the body, and use soft hands so edges do not carry easily.",
  },
  {
    keys: ["loft", "lofted", "slog", "inside-out", "six"],
    title: "Lofted shots",
    text: "Lofted shots are attacking options. Use them when the ball is full enough, your base is stable, and the field gives a clear target area.",
  },
  {
    keys: ["bat", "batsman", "batting", "shot", "stroke", "pull", "cut", "sweep"],
    title: "Batting",
    text: "Batting starts with judging line and length. Fuller balls invite drives, short balls invite back-foot shots like cut and pull, and spin can be attacked with sweeps or footwork.",
  },
  {
    keys: ["fast", "pace", "swing", "seam", "bouncer", "yorker", "slower", "cutter"],
    title: "Fast bowling",
    text: "Fast bowling types include swing, seam, bouncer, yorker, slower ball, cutter, and cross-seam. A good fast bowler uses pace and variation while still controlling line and length.",
  },
  {
    keys: ["spin", "spinner", "off spin", "leg spin", "googly", "doosra", "carrom", "arm ball"],
    title: "Spin bowling",
    text: "Spin bowling includes off spin, leg spin, left-arm orthodox, wrist spin, googly, doosra, arm ball, slider, and carrom ball. The stock ball must be strong before variations become dangerous.",
  },
  {
    keys: ["bowl", "bowler", "bowling", "length", "line"],
    title: "Bowling",
    text: "Bowling is a plan. Choose a line, length, field, and mistake you want from the batter. Control builds pressure; variations punish batters who start guessing.",
  },
  {
    keys: ["field", "fielder", "catch", "wicketkeeper", "keeper"],
    title: "Fielding",
    text: "Fielding turns pressure into wickets. Stay low, move early, use two hands when possible, and know the throwing end before the ball reaches you.",
  },
  {
    keys: ["t20", "odi", "test", "format"],
    title: "Formats",
    text: "Test cricket rewards patience and long plans. ODI cricket balances accumulation and acceleration. T20 rewards matchups, boundary prevention, and fast decisions.",
  },
];

const onboarding = document.querySelector("#onboarding");
const adminPanel = document.querySelector("#adminPanel");
const adminLogin = document.querySelector("#adminLogin");
const adminDashboard = document.querySelector("#adminDashboard");
const loginStep = document.querySelector("#loginStep");
const detailsStep = document.querySelector("#detailsStep");
const profileStep = document.querySelector("#profileStep");
const roleStep = document.querySelector("#roleStep");
const introStep = document.querySelector("#introStep");
const loginForm = document.querySelector("#loginForm");
const adminForm = document.querySelector("#adminForm");
const detailsForm = document.querySelector("#detailsForm");
const profileForm = document.querySelector("#profileForm");
const roleNextBtn = document.querySelector("#roleNextBtn");
const appShell = document.querySelector(".app-shell");
const moduleNav = document.querySelector("#moduleNav");
const progressLabel = document.querySelector("#progressLabel");
const progressBar = document.querySelector("#progressBar");
const usernameLabel = document.querySelector("#usernameLabel");
const roleLabel = document.querySelector("#roleLabel");
const installAppBtn = document.querySelector("#installAppBtn");
const adminAccessBtn = document.querySelector("#adminAccessBtn");
const levelTag = document.querySelector("#levelTag");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonSummary = document.querySelector("#lessonSummary");
const coachModeLabel = document.querySelector("#coachModeLabel");
const momentumLabel = document.querySelector("#momentumLabel");
const checkpointLabel = document.querySelector("#checkpointLabel");
const lessonBody = document.querySelector("#lessonBody");
const skillLadder = document.querySelector("#skillLadder");
const videoGrid = document.querySelector("#videoGrid");
const hubFocus = document.querySelector("#hubFocus");
const hubAction = document.querySelector("#hubAction");
const hubStreak = document.querySelector("#hubStreak");
const hubQuizStatus = document.querySelector("#hubQuizStatus");
const hubNextLesson = document.querySelector("#hubNextLesson");
const hubNextSkill = document.querySelector("#hubNextSkill");
const hubPlan = document.querySelector("#hubPlan");
const hubPlanNote = document.querySelector("#hubPlanNote");
const missionIntensity = document.querySelector("#missionIntensity");
const missionTitle = document.querySelector("#missionTitle");
const missionCopy = document.querySelector("#missionCopy");
const missionMeter = document.querySelector("#missionMeter");
const dnaTitle = document.querySelector("#dnaTitle");
const roleTraits = document.querySelector("#roleTraits");
const pressureScore = document.querySelector("#pressureScore");
const pressureSituation = document.querySelector("#pressureSituation");
const pressureOptions = document.querySelector("#pressureOptions");
const pressureFeedback = document.querySelector("#pressureFeedback");
const battingPrompt = document.querySelector("#battingPrompt");
const battingOptions = document.querySelector("#battingOptions");
const battingFeedback = document.querySelector("#battingFeedback");
const battingScore = document.querySelector("#battingScore");
const bowlingPrompt = document.querySelector("#bowlingPrompt");
const bowlingOptions = document.querySelector("#bowlingOptions");
const bowlingFeedback = document.querySelector("#bowlingFeedback");
const bowlingScore = document.querySelector("#bowlingScore");
const dailyQuizPrompt = document.querySelector("#dailyQuizPrompt");
const dailyQuizOptions = document.querySelector("#dailyQuizOptions");
const dailyQuizFeedback = document.querySelector("#dailyQuizFeedback");
const dailyQuizStatus = document.querySelector("#dailyQuizStatus");
const weeklyQuizPrompt = document.querySelector("#weeklyQuizPrompt");
const weeklyQuizOptions = document.querySelector("#weeklyQuizOptions");
const weeklyQuizFeedback = document.querySelector("#weeklyQuizFeedback");
const weeklyQuizStatus = document.querySelector("#weeklyQuizStatus");
const proStatus = document.querySelector("#proStatus");
const proToggleBtn = document.querySelector("#proToggleBtn");
const proPaymentLabel = document.querySelector("#proPaymentLabel");
const proContent = document.querySelector("#proContent");
const proLockLabel = document.querySelector("#proLockLabel");
const chatLog = document.querySelector("#chatLog");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const mainChatLog = document.querySelector("#mainChatLog");
const mainChatForm = document.querySelector("#mainChatForm");
const mainChatInput = document.querySelector("#mainChatInput");
const voiceModeBtn = document.querySelector("#voiceModeBtn");
const voiceAskBtn = document.querySelector("#voiceAskBtn");
const voiceStatus = document.querySelector("#voiceStatus");
const mainVoiceModeBtn = document.querySelector("#mainVoiceModeBtn");
const mainVoiceAskBtn = document.querySelector("#mainVoiceAskBtn");
const mainVoiceStatus = document.querySelector("#mainVoiceStatus");
const quizDialog = document.querySelector("#quizDialog");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const razorpayDialog = document.querySelector("#razorpayDialog");
const razorpaySuccessBtn = document.querySelector("#razorpaySuccessBtn");
const razorpayNote = document.querySelector("#razorpayNote");
const lessonPanel = document.querySelector(".lesson-panel");
const proSection = document.querySelector(".pro-section");
const APP_CONFIG = window.CRICKET_LEARNER_CONFIG || {};
let deferredInstallPrompt = null;
const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
let voiceRecognition = null;
let voiceListening = false;
let openAdminAfterLogin = false;

function detectDistribution() {
  const params = new URLSearchParams(window.location.search);
  const distribution = params.get("distribution") || params.get("source");
  if (distribution === "play-store") {
    localStorage.setItem("appDistribution", "play-store");
    return "play-store";
  }
  return localStorage.getItem("appDistribution") || "web";
}

const APP_DISTRIBUTION = detectDistribution();

function isPlayStoreDistribution() {
  return APP_DISTRIBUTION === "play-store";
}

function configuredAdminOwnerName() {
  return String(APP_CONFIG.adminOwner?.name || "").trim();
}

function configuredAdminOwnerEmail() {
  return String(APP_CONFIG.adminOwner?.email || "").trim();
}

function configuredAdminLoginAliases() {
  const aliases = Array.isArray(APP_CONFIG.adminOwner?.loginAliases) ? APP_CONFIG.adminOwner.loginAliases : [];
  return [configuredAdminOwnerName(), configuredAdminOwnerEmail(), ...aliases]
    .map(normalizedIdentity)
    .filter(Boolean);
}

function normalizedIdentity(value) {
  return String(value || "").trim().toLowerCase();
}

function emailLocalPart(value) {
  const email = normalizedIdentity(value);
  return email.includes("@") ? email.split("@")[0] : "";
}

function isConfiguredAdminIdentity(value) {
  const identity = normalizedIdentity(value);
  if (!identity) return false;
  const aliases = configuredAdminLoginAliases();
  const localPart = emailLocalPart(identity);
  return aliases.includes(identity) || Boolean(localPart && aliases.includes(localPart));
}

function removedUserBelongsToAdmin(user) {
  return [
    user?.email,
    emailLocalPart(user?.email),
    user?.name,
    user?.username,
  ].some(isConfiguredAdminIdentity);
}

function isCurrentLearnerAdminOwner() {
  const ownerName = normalizedIdentity(configuredAdminOwnerName());
  const ownerEmail = normalizedIdentity(configuredAdminOwnerEmail());
  const ownerAliases = configuredAdminLoginAliases();
  const learnerIdentities = [
    state.login?.email,
    emailLocalPart(state.login?.email),
    state.details?.name,
    state.profile?.username,
    state.profile?.email,
  ]
    .map(normalizedIdentity)
    .filter(Boolean);

  return Boolean(
    (ownerEmail && learnerIdentities.includes(ownerEmail)) ||
    (ownerName && learnerIdentities.includes(ownerName)) ||
    ownerAliases.some((alias) => learnerIdentities.includes(alias))
  );
}

const state = {
  selected: 0,
  completed: new Set(JSON.parse(localStorage.getItem("completedLessons") || "[]")),
  chat: JSON.parse(localStorage.getItem("chatHistory") || "[]"),
  login: JSON.parse(localStorage.getItem("loginSession") || "null"),
  details: JSON.parse(localStorage.getItem("learnerDetails") || "null"),
  profile: JSON.parse(localStorage.getItem("learnerProfile") || "null"),
  pendingRole: null,
  removedUsers: JSON.parse(localStorage.getItem("removedUsers") || "[]"),
  pro: JSON.parse(localStorage.getItem("proSubscription") || "{\"active\":false}"),
  recurringQuiz: JSON.parse(localStorage.getItem("recurringQuizProgress") || "{}"),
  lastGreetingDate: localStorage.getItem("lastGreetingDate") || "",
  introSeen: localStorage.getItem("appIntroSeen") === "true",
  voiceMode: localStorage.getItem("assistantVoiceMode") === "true",
  missionShift: Number(localStorage.getItem("missionShift") || "0"),
  lessons: [],
  games: {
    batting: { correct: 0, total: 0, current: null },
    bowling: { correct: 0, total: 0, current: null },
    pressure: { correct: 0, total: 0, current: null },
  },
};

function normalizeLegacyText(value) {
  return String(value ?? "")
    .replaceAll("Razorpay prototype checkout", "Razorpay checkout")
    .replaceAll("this prototype", "this app")
    .replaceAll("in this prototype", "in this app")
    .replaceAll("prototype", "app")
    .replaceAll("Simulate Razorpay payment", "Pay with Razorpay")
    .replaceAll("Continue with Razorpay", "Pay with Razorpay");
}

function normalizeStoredState() {
  let changedChat = false;
  state.chat = state.chat.map((message) => {
    const next = {
      ...message,
      title: normalizeLegacyText(message.title),
      text: normalizeLegacyText(message.text),
    };
    changedChat = changedChat || next.title !== message.title || next.text !== message.text;
    return next;
  });
  if (changedChat) localStorage.setItem("chatHistory", JSON.stringify(state.chat.slice(-24)));

  if (state.pro?.simulated) {
    state.pro = { active: false };
    localStorage.setItem("proSubscription", JSON.stringify(state.pro));
  }

  const removedCount = state.removedUsers.length;
  state.removedUsers = state.removedUsers.filter((user) => !removedUserBelongsToAdmin(user));
  if (state.removedUsers.length !== removedCount) {
    localStorage.setItem("removedUsers", JSON.stringify(state.removedUsers));
  }

  const configuredOwner = configuredAdminOwnerName();
  const storedOwner = JSON.parse(localStorage.getItem("adminOwner") || "null");
  if (configuredOwner && storedOwner && storedOwner.name !== configuredOwner) {
    localStorage.removeItem("adminOwner");
  }
}

normalizeStoredState();

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function saveProgress() {
  localStorage.setItem("completedLessons", JSON.stringify([...state.completed]));
}

function saveChat() {
  localStorage.setItem("chatHistory", JSON.stringify(state.chat.slice(-24)));
}

function saveProfile() {
  localStorage.setItem("learnerProfile", JSON.stringify(state.profile));
}

function saveDetails() {
  localStorage.setItem("learnerDetails", JSON.stringify(state.details));
}

function savePro() {
  localStorage.setItem("proSubscription", JSON.stringify(state.pro));
}

function saveRecurringQuiz() {
  localStorage.setItem("recurringQuizProgress", JSON.stringify(state.recurringQuiz));
}

function saveGreetingDate() {
  localStorage.setItem("lastGreetingDate", state.lastGreetingDate);
}

function saveVoiceMode() {
  localStorage.setItem("assistantVoiceMode", state.voiceMode ? "true" : "false");
}

function saveRemovedUsers() {
  localStorage.setItem("removedUsers", JSON.stringify(state.removedUsers));
}

function generateRejoinToken() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `rejoin-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function ensureRemovedUserRejoinToken(user) {
  if (!user.rejoinToken) user.rejoinToken = generateRejoinToken();
  if (!user.rejoinCreatedAt) user.rejoinCreatedAt = new Date().toISOString();
  return user.rejoinToken;
}

function getAdminOwner() {
  return JSON.parse(localStorage.getItem("adminOwner") || "null");
}

function saveAdminOwner(owner) {
  localStorage.setItem("adminOwner", JSON.stringify(owner));
}

function appUrlWithParams(params) {
  const url = new URL(window.location.href);
  url.hash = "";
  url.search = "";
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildLessons() {
  const role = state.profile?.role || "allRounder";
  state.lessons = courseBuilders[role]();
  if (state.selected >= state.lessons.length) state.selected = 0;
}

function showStep(step) {
  loginStep.classList.toggle("hidden", step !== "login");
  detailsStep.classList.toggle("hidden", step !== "details");
  profileStep.classList.toggle("hidden", step !== "profile");
  roleStep.classList.toggle("hidden", step !== "role");
  introStep.classList.toggle("hidden", step !== "intro");
}

function handleAppShortcut() {
  if (window.location.hash === "#daily-quiz") {
    document.querySelector("#daily-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (window.location.hash === "#coach") {
    chatInput?.focus();
  }
}

function renderGate() {
  if (window.location.hash === "#admin") {
    if (isCurrentLearnerAdminOwner()) {
      showAdminLogin();
    } else {
      showAdminBlocked();
    }
    return;
  }

  const needsLogin = !state.login;
  const ownerSignedIn = state.login && isCurrentLearnerAdminOwner();
  const needsDetails = state.login && !state.details;
  const needsProfile = state.login && state.details && !state.profile;
  const needsRole = state.profile && !state.profile.role;
  const needsIntro = state.profile?.role && !state.introSeen;
  const ready = state.login && state.profile?.role && state.introSeen;

  onboarding.classList.toggle("hidden", Boolean(ready));
  appShell.classList.toggle("hidden", !ready);

  if (ownerSignedIn && openAdminAfterLogin && APP_CONFIG.adminOwner?.showAdminAfterOwnerLogin !== false) {
    openAdminAfterLogin = false;
    showAdminLogin();
    return;
  }

  if (needsLogin) showStep("login");
  if (needsDetails) showStep("details");
  if (needsProfile) showStep("profile");
  if (needsRole) showStep("role");
  if (needsIntro) {
    renderIntro();
    showStep("intro");
  }
  if (ready) {
    buildLessons();
    render();
    renderChat();
    window.scrollTo(0, 0);
    lessonPanel.scrollTop = 0;
    setTimeout(handleAppShortcut, 60);
  }
}

function showLearnerSurface() {
  if (window.location.hash === "#admin") {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  adminPanel.classList.add("hidden");
  renderGate();
}

function handleRejoinLink() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("rejoin");
  if (!token) return;

  if (token === "admin-owner") {
    const removedCount = state.removedUsers.length;
    state.removedUsers = state.removedUsers.filter((user) => !removedUserBelongsToAdmin(user));
    saveRemovedUsers();
    alert(removedCount === state.removedUsers.length
      ? "Admin access is already restored. Please sign in with the admin email."
      : "Admin access has been restored. Please sign in with the admin email.");
    history.replaceState(null, "", `${window.location.origin}${window.location.pathname}${window.location.hash}`);
    return;
  }

  const index = state.removedUsers.findIndex((user) => user.rejoinToken === token);
  if (index >= 0) {
    const restored = state.removedUsers.splice(index, 1)[0];
    saveRemovedUsers();
    alert(`${restored.name || "Learner"} can rejoin Cricket Learner AI now. Please sign in again.`);
  } else {
    alert("This rejoin link is invalid, expired, or already used on this device.");
  }

  const cleanUrl = `${window.location.origin}${window.location.pathname}${window.location.hash}`;
  history.replaceState(null, "", cleanUrl);
}

function showAdminLogin() {
  const owner = getAdminOwner();
  const configuredOwner = configuredAdminOwnerName();
  const ownerNameInput = document.querySelector("#adminNameInput");
  onboarding.classList.add("hidden");
  appShell.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  adminLogin.classList.remove("hidden");
  adminDashboard.classList.add("hidden");
  adminForm.classList.remove("hidden");
  document.querySelector("#adminHelpText").textContent = owner
    ? "Enter your private owner password. The admin dashboard is hidden until verification succeeds."
    : configuredOwner
      ? `Owner account: ${configuredOwner}. Create your private owner password to activate your admin dashboard.`
      : "Set your private owner name and password. The admin dashboard stays hidden until the owner password is correct.";
  document.querySelector("#adminError").textContent = "";
  ownerNameInput.value = owner?.name || configuredOwner || "";
  ownerNameInput.readOnly = Boolean(owner || configuredOwner);
}

function showAdminBlocked() {
  const configuredOwner = configuredAdminOwnerName() || "the owner";
  onboarding.classList.add("hidden");
  appShell.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  adminLogin.classList.remove("hidden");
  adminDashboard.classList.add("hidden");
  adminForm.classList.add("hidden");
  adminForm.reset();
  document.querySelector("#adminHelpText").textContent = `Admin access is locked. Sign in to the learner app as ${configuredOwner} first, then the Admin access button appears only for that owner account.`;
  document.querySelector("#adminError").textContent = "Access denied. This screen is hidden from every other learner.";
}

function showAdminDashboard() {
  if (!isCurrentLearnerAdminOwner()) {
    showAdminBlocked();
    return;
  }
  buildLessons();
  renderAdminDashboard();
  onboarding.classList.add("hidden");
  appShell.classList.add("hidden");
  adminPanel.classList.remove("hidden");
  adminLogin.classList.add("hidden");
  adminDashboard.classList.remove("hidden");
}

function renderAdminDashboard() {
  const role = roleNames[state.profile?.role] || "Not selected";
  const lessonCount = state.profile?.role ? courseBuilders[state.profile.role]().length : 0;
  const progress = lessonCount ? Math.round((state.completed.size / lessonCount) * 100) : 0;
  const videoCount = state.profile?.role ? videoTopics[state.profile.role].length : 0;

  document.querySelector("#adminLearnerName").textContent = state.details?.name || state.profile?.username || "No learner";
  document.querySelector("#adminRoleName").textContent = role;
  document.querySelector("#adminLessonCount").textContent = String(lessonCount);
  document.querySelector("#adminProgress").textContent = `${progress}%`;
  document.querySelector("#adminPlan").textContent = state.pro.active ? "Pro $50/month, Razorpay" : "Free";

  document.querySelector("#adminProfileList").innerHTML = `
    <div><span>Name</span><strong>${escapeHTML(state.details?.name || "Not added")}</strong></div>
    <div><span>Email</span><strong>${escapeHTML(state.login?.email || "Not added")}</strong></div>
    <div><span>Mobile</span><strong>${escapeHTML(state.details?.mobile || "Not added")}</strong></div>
    <div><span>Username</span><strong>${escapeHTML(state.profile?.username || "Not added")}</strong></div>
    <div><span>Subscription</span><strong>${state.pro.active ? `Pro Learning, $50/month via ${escapeHTML(state.pro.provider || "Razorpay")}` : "Free plan"}</strong></div>
    <div><span>AI intro</span><strong>${state.introSeen ? "Completed" : "Pending"}</strong></div>
    <div><span>Learner chat content</span><strong>${state.chat.length ? `${state.chat.length} saved messages, visible to admin only` : "No saved chat"}</strong></div>
    <div><span>Moderation</span><strong>${state.removedUsers.length} removed user record${state.removedUsers.length === 1 ? "" : "s"}</strong></div>
  `;

  const course = state.profile?.role ? courseBuilders[state.profile.role]() : [];
  document.querySelector("#adminCourseList").innerHTML = `
    <div><span>Player path</span><strong>${role}</strong></div>
    <div><span>Lessons completed</span><strong>${state.completed.size} of ${lessonCount}</strong></div>
    <div><span>Professional video cards</span><strong>${videoCount}</strong></div>
    <div><span>First lesson</span><strong>${course[0]?.title || "Not ready"}</strong></div>
    <div><span>Final lesson</span><strong>${course[course.length - 1]?.title || "Not ready"}</strong></div>
  `;

  const contentList = state.chat.length
    ? state.chat
        .slice(-8)
        .map((message) => `<div><span>${escapeHTML(message.role === "user" ? "Learner question" : "Assistant response")}</span><strong>${escapeHTML(message.title)}: ${escapeHTML(message.text)}</strong></div>`)
        .join("")
    : "<div><span>Saved content</span><strong>No learner chat content yet</strong></div>";
  document.querySelector("#adminContentList").innerHTML = contentList;
  renderRemovedUsers();
}

function rejoinLinkForRemovedUser(user) {
  const token = ensureRemovedUserRejoinToken(user);
  return appUrlWithParams({ rejoin: token });
}

function rejoinInviteMessage(user, link) {
  return `Hello ${user.name || "learner"},\n\nYour Cricket Learner AI access has been restored by the admin. Open this link to rejoin:\n\n${link}\n\nAfter opening it, sign in again with your email address.`;
}

function sendRejoinEndpoint() {
  const direct = String(APP_CONFIG.moderation?.sendRejoinLinkEndpoint || "").trim();
  if (direct) return direct;
  const baseUrl = String(APP_CONFIG.apiBaseUrl || "").trim().replace(/\/+$/, "");
  return baseUrl ? `${baseUrl}/admin/send-rejoin-link` : "";
}

function renderRemovedUsers() {
  const list = document.querySelector("#adminRemovedList");
  if (!list) return;
  if (!state.removedUsers.length) {
    list.innerHTML = "<div><span>Status</span><strong>No removed users right now</strong></div>";
    return;
  }

  let changed = false;
  list.innerHTML = state.removedUsers
    .map((user, index) => {
      const before = user.rejoinToken;
      const link = rejoinLinkForRemovedUser(user);
      changed = changed || before !== user.rejoinToken;
      const email = user.email || "unknown";
      const subject = encodeURIComponent("Rejoin Cricket Learner AI");
      const body = encodeURIComponent(rejoinInviteMessage(user, link));
      const mailto = email === "unknown" ? "" : `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
      return `
        <div>
          <span>${escapeHTML(user.name || "Removed learner")} • ${escapeHTML(email)}</span>
          <strong>Removed: ${escapeHTML(new Date(user.removedAt).toLocaleString())}</strong>
          <code>${escapeHTML(link)}</code>
          <div class="admin-row-actions">
            <button class="text-btn rejoin-send-btn" type="button" data-index="${index}">Send rejoin link</button>
            <button class="text-btn rejoin-copy-btn" type="button" data-index="${index}">Copy link</button>
            ${mailto ? `<a class="admin-link" href="${mailto}">Open email</a>` : ""}
          </div>
        </div>
      `;
    })
    .join("");

  if (changed) saveRemovedUsers();

  list.querySelectorAll(".rejoin-copy-btn").forEach((button) => {
    button.addEventListener("click", () => copyRejoinLink(Number(button.dataset.index)));
  });
  list.querySelectorAll(".rejoin-send-btn").forEach((button) => {
    button.addEventListener("click", () => sendRejoinLink(Number(button.dataset.index), button));
  });
}

async function copyRejoinLink(index) {
  const user = state.removedUsers[index];
  if (!user) return;
  const link = rejoinLinkForRemovedUser(user);
  saveRemovedUsers();
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(link);
    alert("Rejoin link copied.");
    return;
  }
  window.prompt("Copy this rejoin link:", link);
}

async function sendRejoinLink(index, button) {
  const user = state.removedUsers[index];
  if (!user) return;
  const link = rejoinLinkForRemovedUser(user);
  saveRemovedUsers();
  const endpoint = sendRejoinEndpoint();

  if (endpoint && APP_CONFIG.features?.liveRejoinInvites) {
    button.disabled = true;
    button.textContent = "Sending...";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name: user.name,
          mobile: user.mobile,
          rejoinLink: link,
          message: rejoinInviteMessage(user, link),
        }),
      });
      if (!response.ok) throw new Error("send failed");
      user.rejoinSentAt = new Date().toISOString();
      saveRemovedUsers();
      button.textContent = "Sent";
      alert(`Rejoin link sent to ${user.email}.`);
      renderRemovedUsers();
      return;
    } catch {
      button.disabled = false;
      button.textContent = "Send rejoin link";
      alert("Automatic sending failed. Check the rejoin invite backend endpoint.");
      return;
    }
  }

  const subject = encodeURIComponent("Rejoin Cricket Learner AI");
  const body = encodeURIComponent(rejoinInviteMessage(user, link));
  if (user.email && user.email !== "unknown") {
    window.location.href = `mailto:${encodeURIComponent(user.email)}?subject=${subject}&body=${body}`;
  } else {
    await copyRejoinLink(index);
  }
  alert("A real automatic email needs sendRejoinLinkEndpoint and liveRejoinInvites enabled. For now, the email composer or copied link is ready.");
}

function clearLearnerData() {
  localStorage.removeItem("loginSession");
  localStorage.removeItem("learnerDetails");
  localStorage.removeItem("learnerProfile");
  localStorage.removeItem("completedLessons");
  localStorage.removeItem("chatHistory");
  localStorage.removeItem("appIntroSeen");
  localStorage.removeItem("proSubscription");
  localStorage.removeItem("recurringQuizProgress");
  localStorage.removeItem("lastGreetingDate");
  state.login = null;
  state.details = null;
  state.profile = null;
  state.pendingRole = null;
  state.pro = { active: false };
  state.recurringQuiz = {};
  state.lastGreetingDate = "";
  state.introSeen = false;
  state.completed.clear();
  state.chat = [];
  state.selected = 0;
  state.lessons = [];
  loginForm.reset();
  detailsForm.reset();
  profileForm.reset();
}

function removeCurrentUserForMisuse() {
  if (!state.login && !state.details && !state.profile) return;
  if (isCurrentLearnerAdminOwner()) {
    alert("Admin owner cannot be removed. Admin access has been protected.");
    return;
  }
  const removedUser = {
    email: state.login?.email || state.profile?.email || "unknown",
    name: state.details?.name || state.profile?.name || state.profile?.username || "unknown",
    username: state.profile?.username || "",
    mobile: state.details?.mobile || state.profile?.mobile || "unknown",
    removedAt: new Date().toISOString(),
    reason: "Unwanted purpose or misuse",
  };
  ensureRemovedUserRejoinToken(removedUser);
  state.removedUsers.push(removedUser);
  saveRemovedUsers();
  clearLearnerData();
}

function resetCourseForRole(role) {
  state.profile.role = role;
  state.selected = 0;
  state.completed.clear();
  state.chat = [];
  state.introSeen = false;
  localStorage.removeItem("appIntroSeen");
  saveProfile();
  saveProgress();
  saveChat();
  buildLessons();
}

function introText() {
  const role = roleNames[state.profile?.role] || "cricket player";
  const learnerName = state.details?.name || state.profile?.username || "learner";
  const roleDetails = {
    allRounder: "You will learn both batting and bowling: defence, drives, strokes, lofted shots, fast bowling, spin bowling, fielding, and match awareness.",
    bowler: "You will focus on bowling: basics, fast bowling types, spin bowling types, bowling plans, death bowling, and field settings.",
    batsman: "You will focus on batting: setup, defence, drives, strokes around the ground, lofted shots, and shot selection.",
  };
  return `Hello ${learnerName}. I am your Cricket Learner AI coach. Your path is ${role}. ${roleDetails[state.profile?.role]} Use the lesson notes, quick quizzes, professional YouTube learning cards, and the assistant whenever you have doubts.`;
}

function renderIntro() {
  document.querySelector("#introTitle").textContent = `Welcome, ${state.details?.name || state.profile?.username || "learner"}`;
  document.querySelector("#introCopy").textContent = introText();
}

function renderNav() {
  moduleNav.innerHTML = "";
  state.lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = `module-btn${index === state.selected ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="module-index">${index + 1}</span>
      <span class="module-title">${lesson.title}<span class="module-level">${lesson.level}</span></span>
      <span class="check">${state.completed.has(index) ? "✓" : ""}</span>
    `;
    button.addEventListener("click", () => {
      state.selected = index;
      render();
      lessonPanel.scrollTop = 0;
      addMessage("ai", `Now teaching: ${lesson.title}`, coachIntro(lesson));
    });
    moduleNav.appendChild(button);
  });
}

function renderLesson() {
  const lesson = state.lessons[state.selected];
  levelTag.textContent = lesson.level;
  lessonTitle.textContent = lesson.title;
  lessonSummary.textContent = lesson.summary;

  lessonBody.innerHTML = lesson.notes
    .map(([heading, body]) => `
      <section class="note-block">
        <h3>${heading}</h3>
        <p>${body}</p>
      </section>
    `)
    .join("");

  skillLadder.innerHTML = lesson.skills
    .map((skill, index) => `
      <div class="skill-item">
        <strong>Step ${index + 1}</strong>
        <span>${skill}</span>
      </div>
    `)
    .join("");
}

function renderProgress() {
  const progress = Math.round((state.completed.size / state.lessons.length) * 100);
  progressLabel.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
}

function progressPercent() {
  return Math.round((state.completed.size / Math.max(state.lessons.length, 1)) * 100);
}

function renderProfile() {
  usernameLabel.textContent = state.details?.name || state.profile?.username || "Learner";
  roleLabel.textContent = roleNames[state.profile?.role] || "Choose role";
  adminAccessBtn.classList.toggle("hidden", !isCurrentLearnerAdminOwner());
}

function renderHeroSignal() {
  const lesson = state.lessons[state.selected];
  const progress = progressPercent();
  coachModeLabel.textContent = state.pro.active ? "Pro clarity" : lesson.level;
  momentumLabel.textContent = `${progress}%`;
  checkpointLabel.textContent = state.completed.has(state.selected) ? "Complete" : lesson.skills[0];
}

function renderVideos() {
  const role = state.profile?.role || "allRounder";
  videoGrid.innerHTML = videoTopics[role]
    .map(([title, description, query]) => {
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
      const embedUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}&rel=0`;
      return `
        <article class="video-card video-player-card">
          <div class="video-frame">
            <iframe
              title="${escapeHTML(title)}"
              src="${embedUrl}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <strong>${escapeHTML(title)}</strong>
          <span>${escapeHTML(description)}</span>
          <a class="video-link" href="${url}" target="_blank" rel="noopener">Open on YouTube</a>
        </article>
      `;
    })
    .join("");
}

function renderPro() {
  const isPro = Boolean(state.pro.active);
  proStatus.textContent = isPro ? "Pro active" : "Free plan";
  proPaymentLabel.textContent = isPlayStoreDistribution()
    ? "Use Google Play Billing in Play Store"
    : "Pay securely with Razorpay";
  proToggleBtn.textContent = isPro
    ? "Manage Pro"
    : isPlayStoreDistribution()
      ? "Play Billing required"
      : "Upgrade to Pro";
  proContent.classList.toggle("locked", !isPro);
  proLockLabel.textContent = isPro ? "Unlocked" : "Locked";
  renderRazorpayStatus();
}

function proPlanConfig() {
  return {
    planId: APP_CONFIG.payments?.proPlan?.planId || "pro-learning-monthly",
    displayPrice: APP_CONFIG.payments?.proPlan?.displayPrice || "$50/month",
    amount: Number(APP_CONFIG.payments?.proPlan?.amount || 5000),
    currency: APP_CONFIG.payments?.proPlan?.currency || "USD",
    billingCycle: APP_CONFIG.payments?.proPlan?.billingCycle || "monthly",
  };
}

function configuredPaymentEndpoint(type) {
  const direct = String(APP_CONFIG.payments?.[type] || "").trim();
  if (direct) return direct;
  const baseUrl = String(APP_CONFIG.apiBaseUrl || "").trim().replace(/\/+$/, "");
  if (!baseUrl) return "";
  return `${baseUrl}/payments/razorpay/${type === "createOrderEndpoint" ? "create-order" : "verify-payment"}`;
}

function razorpayCheckoutScriptUrl() {
  return APP_CONFIG.payments?.razorpayCheckoutScript || "https://checkout.razorpay.com/v1/checkout.js";
}

function paymentGatewayReady() {
  if (isPlayStoreDistribution()) return false;
  return Boolean(
    APP_CONFIG.features?.livePayments &&
    APP_CONFIG.razorpayKeyId &&
    configuredPaymentEndpoint("createOrderEndpoint") &&
    configuredPaymentEndpoint("verifyPaymentEndpoint")
  );
}

function renderRazorpayStatus() {
  if (!razorpayNote) return;
  if (state.pro.active) {
    razorpayNote.textContent = "Pro Learning is active on this device.";
    return;
  }
  if (isPlayStoreDistribution()) {
    razorpayNote.textContent = "Razorpay is disabled for the Play Store build. Use Google Play Billing for Pro Learning inside Google Play.";
    return;
  }
  razorpayNote.textContent = paymentGatewayReady()
    ? "Razorpay is ready. Payment opens securely and Pro unlocks only after backend verification."
    : "Razorpay is not connected yet. Add a live key, backend order endpoint, backend verification endpoint, and set livePayments to true.";
}

function nextLessonIndex() {
  const firstOpen = state.lessons.findIndex((_, index) => !state.completed.has(index));
  if (firstOpen >= 0) return firstOpen;
  return Math.max(state.lessons.length - 1, 0);
}

function dailyQuizSummary() {
  const progress = state.recurringQuiz.daily;
  if (progress?.key !== todayKey()) return "Daily quiz ready: 5 questions for 10 marks.";
  if (progress.complete) return `Daily quiz finished: ${progress.marks}/10 marks.`;
  return `Daily quiz started: ${Object.keys(progress.answers || {}).length}/5 answered.`;
}

function todayPlanMessage() {
  const lesson = state.lessons[nextLessonIndex()] || state.lessons[state.selected];
  const name = state.details?.name || state.profile?.username || "learner";
  const role = roleNames[state.profile?.role] || "cricket player";
  const clarity = state.pro.active
    ? "Use Pro mode: learn the idea, practise one drill for 10 minutes, then ask for a simpler explanation."
    : "Use free mode: read the lesson, try the quick quiz, and ask one doubt before moving on.";
  return `Today plan for ${name}: focus on ${dailyFocus()}. Continue "${lesson?.title || "Cricket Foundations"}" as a ${role}. Start with "${lesson?.skills?.[0] || "understand runs, wickets, overs, and roles"}". ${dailyQuizSummary()} ${clarity}`;
}

function renderTodayHub() {
  const lesson = state.lessons[nextLessonIndex()] || state.lessons[state.selected];
  const completedCount = state.completed.size;
  const totalLessons = state.lessons.length || 1;
  const planName = state.pro.active ? "Pro active" : "Free plan";

  hubFocus.textContent = `Focus: ${dailyFocus()}`;
  hubAction.textContent = state.pro.active
    ? "Pro clarity is on. Use one short drill, then ask the coach to simplify anything confusing."
    : "Read one lesson, answer the daily quiz, and use the AI coach for one doubt.";
  hubStreak.textContent = `${completedCount}/${totalLessons} lessons complete`;
  hubQuizStatus.textContent = dailyQuizSummary();
  hubNextLesson.textContent = lesson?.title || "Cricket Foundations";
  hubNextSkill.textContent = lesson?.skills?.[0] || "Understand runs, wickets, overs, and roles.";
  hubPlan.textContent = planName;
  hubPlanNote.textContent = state.pro.active
    ? "Fast clarity drills and shorter learning paths are unlocked."
    : "Pro adds faster explanations, focused drills, and clearer practice steps.";
}

function currentMission() {
  const role = state.profile?.role || "allRounder";
  const missions = roleMissions[role] || roleMissions.allRounder;
  const index = (new Date().getDay() + state.missionShift) % missions.length;
  const [title, text] = missions[index];
  const lesson = state.lessons[nextLessonIndex()] || state.lessons[state.selected];
  return {
    title,
    text: `${text} Today's anchor: ${lesson?.skills?.[0] || dailyFocus()}.`,
  };
}

function renderRoleTraits() {
  const role = state.profile?.role || "allRounder";
  dnaTitle.textContent = roleNames[role] || "Player";
  roleTraits.innerHTML = "";
  (roleTraitSets[role] || roleTraitSets.allRounder).forEach(([label, value]) => {
    const row = document.createElement("div");
    const name = document.createElement("span");
    const bar = document.createElement("span");
    const fill = document.createElement("i");
    name.textContent = label;
    bar.className = "trait-bar";
    fill.style.width = `${value}%`;
    bar.appendChild(fill);
    row.append(name, bar);
    roleTraits.appendChild(row);
  });
}

function renderPressureLab() {
  const game = state.games.pressure;
  if (!game.current) game.current = pickChallenge(pressureChallenges);

  pressureScore.textContent = `${game.correct} / ${game.total}`;
  pressureSituation.textContent = game.current.prompt;
  pressureFeedback.textContent = "";
  pressureOptions.innerHTML = "";

  game.current.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "pressure-option";
    button.type = "button";
    button.textContent = option;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => answerPressure(option));
    pressureOptions.appendChild(button);
  });
}

function answerPressure(choice) {
  const game = state.games.pressure;
  const correct = choice === game.current.answer;
  game.total += 1;
  if (correct) game.correct += 1;

  [...pressureOptions.children].forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-pressed", button.textContent === choice ? "true" : "false");
    if (button.textContent === game.current.answer) button.classList.add("correct");
    if (button.textContent === choice && !correct) button.classList.add("incorrect");
  });

  pressureScore.textContent = `${game.correct} / ${game.total}`;
  pressureFeedback.textContent = `${correct ? "Smart call." : "Not the best option."} ${game.current.explain}`;
}

function nextPressureSituation() {
  state.games.pressure.current = null;
  renderPressureLab();
}

function renderInnovationLab() {
  const mission = currentMission();
  const progress = progressPercent();
  const meter = Math.max(24, Math.min(100, progress + 32));
  missionTitle.textContent = mission.title;
  missionCopy.textContent = mission.text;
  missionMeter.style.width = `${meter}%`;
  missionIntensity.textContent = progress > 70 ? "Match-ready" : progress > 30 ? "Sharp" : "Building";
  renderRoleTraits();
  renderPressureLab();
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function weekKey() {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), 0, 1);
  const dayMs = 24 * 60 * 60 * 1000;
  const week = Math.ceil(((now - firstDay) / dayMs + firstDay.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function quizForKey(key, offset = 0) {
  return quizSetForKey(key, 1, offset)[0];
}

function quizSetForKey(key, count, offset = 0) {
  const seed = [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0) + offset;
  return Array.from({ length: count }, (_, index) => recurringQuizzes[(seed + index) % recurringQuizzes.length]);
}

function renderRecurringQuiz(kind) {
  const isDaily = kind === "daily";
  const key = isDaily ? todayKey() : weekKey();
  const questionCount = isDaily ? 5 : 15;
  const maxMarks = isDaily ? 10 : 30;
  const perQuestionMarks = maxMarks / questionCount;
  const quizSet = quizSetForKey(key, questionCount, isDaily ? 0 : 7);
  const progress = state.recurringQuiz[kind];
  const activeProgress = progress?.key === key ? progress : null;
  const completed = Boolean(activeProgress?.complete);
  const prompt = isDaily ? dailyQuizPrompt : weeklyQuizPrompt;
  const options = isDaily ? dailyQuizOptions : weeklyQuizOptions;
  const feedback = isDaily ? dailyQuizFeedback : weeklyQuizFeedback;
  const status = isDaily ? dailyQuizStatus : weeklyQuizStatus;

  prompt.textContent = `${questionCount} questions. ${maxMarks} total marks. ${isDaily ? "Refreshes every day." : "Changes every week."}`;
  feedback.textContent = activeProgress ? activeProgress.feedback : "Choose one answer for each question.";
  status.textContent = completed
    ? `${activeProgress.marks}/${maxMarks} marks ${isDaily ? "today" : "this week"}`
    : activeProgress
      ? `${Object.keys(activeProgress.answers || {}).length}/${questionCount} answered`
      : `Not attempted ${isDaily ? "today" : "this week"}`;
  options.classList.add("quiz-list");
  options.innerHTML = "";

  quizSet.forEach((quiz, questionIndex) => {
    const block = document.createElement("div");
    block.className = "quiz-question-block";
    const question = document.createElement("p");
    question.textContent = `${questionIndex + 1}. ${quiz.prompt}`;
    block.appendChild(question);

    const choiceGrid = document.createElement("div");
    choiceGrid.className = "game-options";
    quiz.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "game-option";
      button.type = "button";
      button.textContent = option;
      button.setAttribute("aria-pressed", activeProgress?.answers?.[questionIndex] === option ? "true" : "false");
      button.disabled = completed;
      if (activeProgress?.answers?.[questionIndex] === option) button.classList.add("selected");
      if (completed && option === quiz.answer) button.classList.add("correct");
      if (completed && option === activeProgress.answers?.[questionIndex] && option !== quiz.answer) button.classList.add("incorrect");
      button.addEventListener("click", () => answerRecurringQuiz(kind, questionIndex, option));
      choiceGrid.appendChild(button);
    });
    block.appendChild(choiceGrid);
    options.appendChild(block);
  });
}

function answerRecurringQuiz(kind, questionIndex, choice) {
  const isDaily = kind === "daily";
  const key = isDaily ? todayKey() : weekKey();
  const questionCount = isDaily ? 5 : 15;
  const maxMarks = isDaily ? 10 : 30;
  const perQuestionMarks = maxMarks / questionCount;
  const quizSet = quizSetForKey(key, questionCount, isDaily ? 0 : 7);
  const current = state.recurringQuiz[kind]?.key === key ? state.recurringQuiz[kind] : { key, answers: {} };
  current.answers = { ...(current.answers || {}), [questionIndex]: choice };
  const answeredCount = Object.keys(current.answers).length;
  const correctCount = quizSet.reduce((total, quiz, index) => total + (current.answers[index] === quiz.answer ? 1 : 0), 0);
  const marks = correctCount * perQuestionMarks;
  const complete = answeredCount === questionCount;

  state.recurringQuiz[kind] = {
    key,
    answers: current.answers,
    correctCount,
    marks,
    complete,
    feedback: complete
      ? `Completed: ${correctCount}/${questionCount} correct, ${marks}/${maxMarks} marks.`
      : `Saved answer ${answeredCount}/${questionCount}. Finish all questions for your ${maxMarks}-mark score.`,
  };
  saveRecurringQuiz();
  renderRecurringQuiz(kind);
  renderTodayHub();
}

function renderQuizCenter() {
  renderRecurringQuiz("daily");
  renderRecurringQuiz("weekly");
}

function pickChallenge(challenges) {
  return challenges[Math.floor(Math.random() * challenges.length)];
}

function renderGame(kind) {
  const config = kind === "batting"
    ? {
        challenges: battingChallenges,
        prompt: battingPrompt,
        options: battingOptions,
        feedback: battingFeedback,
        score: battingScore,
      }
    : {
        challenges: bowlingChallenges,
        prompt: bowlingPrompt,
        options: bowlingOptions,
        feedback: bowlingFeedback,
        score: bowlingScore,
      };

  const game = state.games[kind];
  if (!game.current) game.current = pickChallenge(config.challenges);
  config.prompt.textContent = game.current.prompt;
  config.feedback.textContent = "";
  config.score.textContent = `${game.correct} / ${game.total}`;
  config.options.innerHTML = "";

  game.current.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "game-option";
    button.type = "button";
    button.textContent = option;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => answerGame(kind, option));
    config.options.appendChild(button);
  });
}

function answerGame(kind, choice) {
  const game = state.games[kind];
  const correct = choice === game.current.answer;
  const optionBox = kind === "batting" ? battingOptions : bowlingOptions;
  const feedback = kind === "batting" ? battingFeedback : bowlingFeedback;
  const score = kind === "batting" ? battingScore : bowlingScore;

  game.total += 1;
  if (correct) game.correct += 1;
  [...optionBox.children].forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-pressed", button.textContent === choice ? "true" : "false");
    if (button.textContent === game.current.answer) button.classList.add("correct");
    if (button.textContent === choice && !correct) button.classList.add("incorrect");
  });
  feedback.textContent = `${correct ? "Correct." : "Not quite."} ${game.current.explain}`;
  score.textContent = `${game.correct} / ${game.total}`;
}

function nextGame(kind) {
  state.games[kind].current = null;
  renderGame(kind);
}

function renderGames() {
  renderGame("batting");
  renderGame("bowling");
}

function dailyFocus() {
  const focuses = [
    "watch the ball closely",
    "keep your head still while batting",
    "use line and length while bowling",
    "stay low while fielding",
    "rotate strike with smart singles",
    "learn one past match lesson",
    "finish your daily quiz",
  ];
  const index = new Date().getDay() % focuses.length;
  return focuses[index];
}

function ensureDailyGreeting() {
  const today = todayKey();
  if (state.lastGreetingDate === today) return;
  state.lastGreetingDate = today;
  saveGreetingDate();
  addMessage("ai", "Daily greeting", dailyGreetingMessage());
}

function renderChat() {
  chatLog.innerHTML = "";
  mainChatLog.innerHTML = "";
  if (!state.chat.length) {
    state.chat.push({ role: "ai", title: "Coach ready", text: welcomeMessage() });
    saveChat();
  }
  ensureDailyGreeting();
  chatLog.innerHTML = "";
  mainChatLog.innerHTML = "";
  state.chat.forEach((message) => appendMessage(message.role, message.title, message.text, false));
  chatLog.scrollTop = chatLog.scrollHeight;
  mainChatLog.scrollTop = mainChatLog.scrollHeight;
}

function createMessage(role, title, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  const label = document.createElement("strong");
  label.textContent = title;
  message.appendChild(label);
  message.appendChild(document.createTextNode(text));
  return message;
}

function appendMessage(role, title, text, persist = true) {
  [chatLog, mainChatLog].forEach((log) => {
    log.appendChild(createMessage(role, title, text));
    log.scrollTop = log.scrollHeight;
  });

  if (persist) {
    state.chat.push({ role, title, text });
    saveChat();
  }
}

function addMessage(role, title, text) {
  appendMessage(role, title, text);
  if (role === "ai") speakAssistantText(`${title}. ${text}`);
}

function canUseSpeechRecognition() {
  return Boolean(SpeechRecognitionClass);
}

function canUseSpeechSynthesis() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function setVoiceStatus(text) {
  voiceStatus.textContent = text;
  mainVoiceStatus.textContent = text;
}

function renderVoiceControls() {
  const listening = voiceListening;
  const label = state.voiceMode ? "Voice mode on" : "Voice mode off";
  setVoiceStatus(listening ? "Listening..." : label);
  [voiceModeBtn, mainVoiceModeBtn].forEach((button) => {
    button.classList.toggle("active", state.voiceMode);
    button.setAttribute("aria-pressed", state.voiceMode ? "true" : "false");
  });
  [voiceAskBtn, mainVoiceAskBtn].forEach((button) => {
    button.classList.toggle("active", listening);
    button.disabled = listening;
  });
}

function speakAssistantText(text) {
  if (!state.voiceMode || !canUseSpeechSynthesis()) return;
  window.speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(text);
  voice.rate = 0.95;
  voice.pitch = 1;
  window.speechSynthesis.speak(voice);
}

function toggleVoiceMode() {
  state.voiceMode = !state.voiceMode;
  saveVoiceMode();
  if (!state.voiceMode && canUseSpeechSynthesis()) window.speechSynthesis.cancel();
  renderVoiceControls();
  const supportNote = canUseSpeechRecognition()
    ? "You can speak your question, and I will answer aloud."
    : "I can read answers aloud in this browser, but speech input is not available here.";
  addMessage("ai", state.voiceMode ? "Voice mode on" : "Voice mode off", state.voiceMode ? supportNote : "Voice responses are paused.");
}

function startVoiceQuestion(targetInput = chatInput) {
  if (!canUseSpeechRecognition()) {
    addMessage("ai", "Voice input unavailable", "This browser does not support speech recognition. You can still type any question, and voice answers work in browsers with speech synthesis.");
    return;
  }

  if (voiceRecognition && voiceListening) {
    voiceRecognition.stop();
    return;
  }

  voiceRecognition = new SpeechRecognitionClass();
  voiceRecognition.lang = "en-IN";
  voiceRecognition.interimResults = false;
  voiceRecognition.maxAlternatives = 1;
  voiceListening = true;
  state.voiceMode = true;
  saveVoiceMode();
  renderVoiceControls();

  voiceRecognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript?.trim();
    if (!transcript) return;
    targetInput.value = transcript;
    askAssistant(transcript);
  };

  voiceRecognition.onerror = () => {
    addMessage("ai", "Voice input", "I could not hear that clearly. Try again, or type the question.");
  };

  voiceRecognition.onend = () => {
    voiceListening = false;
    renderVoiceControls();
  };

  voiceRecognition.start();
}

function welcomeMessage() {
  const role = roleNames[state.profile?.role] || "cricket";
  return `Welcome ${state.details?.name || state.profile.username}. Your course is set for ${role}. Ask me anything like a chat assistant. I can answer cricket questions, general learning questions, app doubts, simple maths, fitness basics, and more. Use Voice mode if you want to speak and hear replies.`;
}

function dailyGreetingMessage() {
  const name = state.details?.name || state.profile?.username || "learner";
  const role = roleNames[state.profile?.role] || "cricket player";
  const quizStatus = state.recurringQuiz.daily?.key === todayKey() ? "You have already started today's daily quiz." : "Today's daily quiz is ready: 5 questions for 10 marks.";
  return `Good day, ${name}. Your ${role} focus today is to ${dailyFocus()}. ${quizStatus} Ask me any doubt, cricket or general, and I will help you learn with cricket-style clarity.`;
}

function coachIntro(lesson) {
  if (state.pro.active) {
    return `Pro clear path: ${lesson.summary} First learn this in one sentence: ${lesson.skills[0]}. Then practise it slowly, quiz yourself, and only then move faster.`;
  }
  return `${lesson.summary} Start with: ${lesson.skills[0]}. When you are comfortable, press Quick quiz and I will test the idea.`;
}

function mathReply(input) {
  const compact = input.replace(/\s+/g, "");
  if (!/^[\d+\-*/().%]+$/.test(compact) || !/[+\-*/%]/.test(compact)) return null;
  try {
    const result = Function(`"use strict"; return (${compact})`)();
    if (!Number.isFinite(result)) return null;
    return {
      title: "Math answer",
      text: `${input} = ${result}. Cricket link: numbers matter in scoring too, especially run rate, strike rate, and economy rate.`,
    };
  } catch {
    return null;
  }
}

function generalAssistantReply(input, question, current) {
  const math = mathReply(input);
  if (math) return math;

  if (["study", "exam", "homework", "remember", "learn faster"].some((word) => question.includes(word))) {
    return {
      title: "Study help",
      text: "Use a 3-step method: understand the idea, practise one small example, then explain it in your own words. Cricket link: learn like net practice. Do one skill at a time, repeat it, then test it under pressure.",
    };
  }

  if (["fitness", "workout", "exercise", "stamina", "speed", "strength"].some((word) => question.includes(word))) {
    return {
      title: "Fitness guidance",
      text: "For general fitness, build warm-up, mobility, running, strength, and recovery. Cricket link: batters need footwork and stamina, bowlers need rhythm and core strength, and fielders need speed. If pain or medical issues are involved, ask a qualified professional.",
    };
  }

  if (["motivation", "confidence", "nervous", "fear", "pressure"].some((word) => question.includes(word))) {
    return {
      title: "Mindset coach",
      text: "Pressure becomes easier when you focus on the next small action, not the whole result. Cricket link: before each ball, reset, breathe, watch the ball, and commit to one decision.",
    };
  }

  if (["app", "login", "admin", "pro", "razorpay", "payment", "quiz"].some((word) => question.includes(word))) {
    return {
      title: "App help",
      text: "This app has learner onboarding, role-based cricket lessons, Pro Learning, daily and weekly quizzes, mini games, direct install support, and an owner-only admin route. Pro is $50/month through Razorpay once live payment services are connected.",
    };
  }

  if (["latest", "today's score", "live score", "current match", "news", "weather", "stock", "price"].some((word) => question.includes(word))) {
    return {
      title: "Live answer needed",
      text: `I can explain the idea behind "${input}", but live scores, news, prices, and current facts need the production AI endpoint connected. Once aiAssistantEndpoint is set in app-config.js, I will answer those live questions like a full AI assistant.`,
    };
  }

  if (["who", "what", "why", "how", "when", "where"].some((word) => question.startsWith(word))) {
    return {
      title: "AI answer",
      text: `Short answer for "${input}": I will explain it in simple steps, then connect it back to cricket learning. First, identify the main idea. Second, look for one example. Third, ask what action or decision it changes. Cricket link: every topic is easier when you treat it like reading the ball: observe clearly, choose one response, then improve from feedback.`,
    };
  }

  if (["write", "essay", "story", "letter", "paragraph", "speech"].some((word) => question.includes(word))) {
    return {
      title: "Writing help",
      text: `For "${input}", start with one clear point, support it with two examples, and finish with a strong ending. Cricket-style structure: opening shot, steady partnership, finishing hit. Tell me the topic and length you want, and I can shape it into a neat answer.`,
    };
  }

  return {
    title: "AI assistant",
    text: `I can answer this: "${input}". Simple way to understand it: define the topic, give one example, find the useful lesson, then decide the next action. Cricket link: like batting or bowling practice, learn the idea, try it once, check the result, and improve. For a deeper ChatGPT-style answer with current knowledge, connect the live AI assistant endpoint in app-config.js.`,
  };
}

function localAssistantReply(input) {
  const question = input.toLowerCase();
  const current = state.lessons[state.selected];
  const found = assistantBrains.find((entry) => entry.keys.some((key) => question.includes(key)));

  if (question.includes("today") && (question.includes("plan") || question.includes("focus") || question.includes("learn"))) {
    return {
      title: "Today plan",
      text: todayPlanMessage(),
    };
  }

  if (question.includes("quiz") || question.includes("test me")) {
    openQuiz();
    return {
      title: "Quiz mode",
      text: "I opened a quick quiz for the current lesson. Answer it first, then ask me why the answer is right or wrong.",
    };
  }

  if (question.includes("practice") || question.includes("drill")) {
    return {
      title: "Practice drill",
      text: practicePrompt(current),
    };
  }

  if (question.includes("role") || question.includes("all rounder") || question.includes("all-rounder")) {
    return {
      title: "Role path",
      text: "All-rounders study both batting and bowling: defence, drives, strokes, lofted shots, fast bowling, spin bowling, and tactical plans. Bowlers focus deeper on pace, spin, variations, and pressure. Batsmen focus deeper on shot-making and scoring decisions.",
    };
  }

  if (question.includes("beginner") || question.includes("start") || question.includes("basic")) {
    return {
      title: "Best starting point",
      text: "Start with the objective: batters score runs, bowlers take wickets and restrict runs, and fielders support the bowler. Learn overs, wickets, runs, and dismissals first. Then follow your selected role path.",
    };
  }

  if (found) return found;

  if (state.pro.active && ["lesson", "topic", "clarity", "clear", "explain this"].some((word) => question.includes(word))) {
    return {
      title: `Pro clarity: ${current.title}`,
      text: `Simple meaning: ${current.summary} Fast learning step: ${current.skills[0]}. Common mistake: trying to learn too many things at once. Next action: practise only this one skill for 10 minutes, then use Quick quiz to check if you really understood it.`,
    };
  }

  return generalAssistantReply(input, question, current);
}

function configuredAssistantEndpoint() {
  const endpoint = String(APP_CONFIG.aiAssistantEndpoint || "").trim();
  if (endpoint) return endpoint;
  const baseUrl = String(APP_CONFIG.apiBaseUrl || "").trim().replace(/\/+$/, "");
  return baseUrl ? `${baseUrl}/ai/cricket-assistant` : "";
}

function liveAiEnabled() {
  return Boolean(APP_CONFIG.features?.liveAiAssistant && configuredAssistantEndpoint());
}

function assistantContextPayload(input) {
  const current = state.lessons[state.selected] || {};
  return {
    message: input,
    app: "Cricket Learner AI",
    learner: {
      name: state.details?.name || state.profile?.username || "Learner",
      role: roleNames[state.profile?.role] || "Cricket learner",
      proActive: Boolean(state.pro.active),
    },
    currentLesson: {
      title: current.title,
      level: current.level,
      summary: current.summary,
      skills: current.skills,
    },
    recentChat: state.chat.slice(-8),
    instruction: "Answer every question helpfully like a general AI assistant, but keep cricket learning as the main style and give cricket examples when useful.",
  };
}

async function liveAssistantReply(input) {
  if (!liveAiEnabled()) return null;

  try {
    const response = await fetch(configuredAssistantEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assistantContextPayload(input)),
    });

    if (!response.ok) return null;
    const data = await response.json();
    const text = data.text || data.answer || data.reply || data.message;
    if (!text) return null;
    return {
      title: data.title || data.topic || "AI answer",
      text: String(text),
    };
  } catch {
    return null;
  }
}

async function assistantReply(input) {
  const liveReply = await liveAssistantReply(input);
  return liveReply || localAssistantReply(input);
}

function practicePrompt(lesson) {
  if (state.pro.active) {
    return `Pro 10-minute clarity drill for ${lesson.title}: 2 minutes understand the main idea, 4 minutes practise only "${lesson.skills[0]}", 2 minutes explain it in your own words, and 2 minutes quiz yourself. This keeps learning fast, simple, and clear.`;
  }
  if (lesson.title.includes("Fast Bowling")) {
    return "Bowl or shadow-bowl 12 balls: 4 outswing/seam targets, 4 yorker targets, and 4 slower-ball/cutter grips. Write down which release felt most controlled.";
  }
  if (lesson.title.includes("Spin")) {
    return "Practice 18 spin releases: 6 stock balls, 6 slower flighted balls, and 6 variation attempts. Notice which one keeps the best line.";
  }
  if (lesson.title.includes("Drive")) {
    return "Shadow 20 drives: 5 straight, 5 cover, 5 on drives, and 5 with soft hands. Keep your head still after contact.";
  }
  if (lesson.title.includes("Lofted")) {
    return "Pick three safe hitting zones. For each zone, name the ball length, field gap, and shot you would use.";
  }
  if (lesson.title.includes("Defence")) {
    return "Watch one over and call out: defend, leave, or score before the ball reaches the batter. Then explain your decision.";
  }
  return "Watch one over and write down: ball number, line, length, scoring option, and what the bowler or batter was trying to create.";
}

function openQuiz() {
  const quiz = state.lessons[state.selected].quiz;
  quizFeedback.textContent = "";
  quizQuestion.textContent = quiz.question;
  quizOptions.innerHTML = "";

  quiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      const correct = index === quiz.answer;
      [...quizOptions.children].forEach((child, childIndex) => {
        child.disabled = true;
        child.setAttribute("aria-pressed", childIndex === index ? "true" : "false");
        if (childIndex === quiz.answer) child.classList.add("correct");
      });
      if (!correct) button.classList.add("incorrect");
      quizFeedback.textContent = correct ? `Correct. ${quiz.explain}` : `Not quite. ${quiz.explain}`;
      if (correct) {
        state.completed.add(state.selected);
        saveProgress();
        render();
      }
    });
    quizOptions.appendChild(button);
  });

  if (typeof quizDialog.showModal === "function") {
    quizDialog.showModal();
  }
}

function openRazorpayDialog() {
  if (isPlayStoreDistribution()) {
    addMessage("ai", "Play Store payments", "This Play Store build must use Google Play Billing for the Pro Learning digital subscription. Razorpay remains available for the direct web app version.");
    return;
  }
  renderRazorpayStatus();
  if (typeof razorpayDialog.showModal === "function") {
    razorpayDialog.showModal();
  }
}

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${razorpayCheckoutScriptUrl()}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = razorpayCheckoutScriptUrl();
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function createRazorpayOrder() {
  const plan = proPlanConfig();
  const response = await fetch(configuredPaymentEndpoint("createOrderEndpoint"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      planId: plan.planId,
      amount: plan.amount,
      currency: plan.currency,
      billingCycle: plan.billingCycle,
      learner: {
        name: state.details?.name || state.profile?.username || "Learner",
        email: state.login?.email || state.profile?.email || "",
        mobile: state.details?.mobile || state.profile?.mobile || "",
        role: roleNames[state.profile?.role] || "Cricket learner",
      },
    }),
  });

  if (!response.ok) throw new Error("Could not create Razorpay order");
  const order = await response.json();
  const orderId = order.id || order.order_id || order.razorpayOrderId;
  if (!orderId) throw new Error("Razorpay order id missing");
  return { ...order, id: orderId };
}

async function verifyRazorpayPayment(paymentResponse, order) {
  const response = await fetch(configuredPaymentEndpoint("verifyPaymentEndpoint"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderId: order.id,
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_signature: paymentResponse.razorpay_signature,
      planId: proPlanConfig().planId,
      learnerEmail: state.login?.email || state.profile?.email || "",
    }),
  });

  if (!response.ok) throw new Error("Payment verification failed");
  const result = await response.json();
  return result.verified === true || result.success === true || result.status === "verified";
}

function activateProAfterPayment(paymentResponse) {
  const plan = proPlanConfig();
  state.pro = {
    active: true,
    price: plan.displayPrice,
    provider: "Razorpay",
    billingCycle: plan.billingCycle,
    planId: plan.planId,
    razorpayPaymentId: paymentResponse.razorpay_payment_id,
    razorpayOrderId: paymentResponse.razorpay_order_id,
    startedAt: new Date().toISOString(),
    verified: true,
  };
  savePro();
  renderPro();
  renderTodayHub();
  if (typeof razorpayDialog.close === "function") razorpayDialog.close();
  addMessage("ai", "Pro Learning unlocked", `Razorpay payment verification completed. Your Pro Learning plan is active at ${plan.displayPrice} with faster paths, clearer explanations, and short focused drills.`);
}

async function startRazorpayCheckout() {
  if (!paymentGatewayReady()) {
    renderRazorpayStatus();
    addMessage("ai", "Payment setup needed", "Razorpay needs a live key, backend order creation, backend signature verification, and livePayments enabled before users can pay money safely.");
    return;
  }

  const plan = proPlanConfig();
  razorpaySuccessBtn.disabled = true;
  razorpaySuccessBtn.textContent = "Opening Razorpay...";
  razorpayNote.textContent = "Creating secure Razorpay order...";

  try {
    const order = await createRazorpayOrder();
    await loadRazorpayCheckout();

    const checkout = new window.Razorpay({
      key: order.key || order.key_id || APP_CONFIG.razorpayKeyId,
      amount: order.amount || plan.amount,
      currency: order.currency || plan.currency,
      name: "Cricket Learner AI",
      description: `Pro Learning ${plan.displayPrice}`,
      order_id: order.id,
      prefill: {
        name: state.details?.name || state.profile?.username || "",
        email: state.login?.email || state.profile?.email || "",
        contact: state.details?.mobile || state.profile?.mobile || "",
      },
      notes: {
        planId: plan.planId,
        learnerRole: roleNames[state.profile?.role] || "Cricket learner",
      },
      theme: {
        color: "#18784d",
      },
      handler: async (paymentResponse) => {
        try {
          razorpayNote.textContent = "Verifying payment securely...";
          const verified = await verifyRazorpayPayment(paymentResponse, order);
          if (!verified) throw new Error("Payment signature was not verified");
          activateProAfterPayment(paymentResponse);
        } catch {
          razorpayNote.textContent = "Payment reached Razorpay, but verification failed. Pro was not unlocked. Please contact support with the payment id.";
          addMessage("ai", "Payment verification failed", "Razorpay returned a payment response, but the backend did not verify it. Pro remains locked until server verification succeeds.");
          razorpaySuccessBtn.disabled = false;
          razorpaySuccessBtn.textContent = "Pay with Razorpay";
        }
      },
      modal: {
        ondismiss: () => {
          razorpayNote.textContent = "Checkout closed. You can restart Razorpay payment whenever you are ready.";
          razorpaySuccessBtn.disabled = false;
          razorpaySuccessBtn.textContent = "Pay with Razorpay";
        },
      },
    });

    checkout.open();
  } catch (error) {
    razorpayNote.textContent = "Razorpay payment could not start. Check backend order creation, verification endpoints, key id, and domain setup.";
    addMessage("ai", "Razorpay payment issue", "Payment was not completed. Please check Razorpay setup and try again.");
    razorpaySuccessBtn.disabled = false;
    razorpaySuccessBtn.textContent = "Pay with Razorpay";
  }
}

function render() {
  renderProfile();
  renderNav();
  renderLesson();
  renderProgress();
  renderHeroSignal();
  renderTodayHub();
  renderInnovationLab();
  renderVideos();
  renderPro();
  renderQuizCenter();
  renderGames();
  renderVoiceControls();
}

function updateInstallButton() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  installAppBtn.classList.toggle("hidden", !deferredInstallPrompt || standalone);
}

function registerAppInstallSupport() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        addMessage("ai", "App install", "Offline app caching could not start in this browser. The app will still work online.");
      });
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    addMessage("ai", "App installed", "Cricket Learner AI is now installed on this device.");
  });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#emailInput").value.trim();
  let removed = state.removedUsers.find((user) => normalizedIdentity(user.email) === normalizedIdentity(email));
  if (removed && (isConfiguredAdminIdentity(email) || removedUserBelongsToAdmin(removed))) {
    state.removedUsers = state.removedUsers.filter((user) => user !== removed);
    saveRemovedUsers();
    removed = null;
  }
  if (removed) {
    alert("This user has been removed by admin for misuse and cannot continue with this learner account.");
    loginForm.reset();
    return;
  }
  state.login = { email, signedInAt: new Date().toISOString() };
  localStorage.setItem("loginSession", JSON.stringify(state.login));
  openAdminAfterLogin = isCurrentLearnerAdminOwner();
  renderGate();
});

document.querySelector("#adminBackBtn").addEventListener("click", showLearnerSurface);
document.querySelector("#adminCloseBtn").addEventListener("click", showLearnerSurface);

adminForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#adminNameInput").value.trim();
  const password = document.querySelector("#adminPasswordInput").value;
  const owner = getAdminOwner();
  const configuredOwner = configuredAdminOwnerName();
  const ownerSetupAllowed = APP_CONFIG.adminOwner?.allowFirstPasswordSetup !== false;

  if (!isCurrentLearnerAdminOwner()) {
    document.querySelector("#adminError").textContent = "Access denied. Sign in as the configured owner before using admin access.";
    document.querySelector("#adminPasswordInput").value = "";
    return;
  }

  if (!owner) {
    if (configuredOwner && !ownerSetupAllowed) {
      document.querySelector("#adminError").textContent = "Admin password setup is disabled until backend owner verification is connected.";
      document.querySelector("#adminPasswordInput").value = "";
      return;
    }

    if (configuredOwner && name !== configuredOwner) {
      document.querySelector("#adminError").textContent = `Access denied. Admin setup is reserved for ${configuredOwner}.`;
      document.querySelector("#adminPasswordInput").value = "";
      return;
    }

    saveAdminOwner({
      name: configuredOwner || name,
      password,
      configuredOwner: Boolean(configuredOwner),
      createdAt: new Date().toISOString(),
    });
    adminForm.reset();
    showAdminDashboard();
    return;
  }

  if (name === owner.name && password === owner.password) {
    adminForm.reset();
    showAdminDashboard();
    return;
  }

  document.querySelector("#adminError").textContent = "Access denied. The admin dashboard is visible only to the saved owner.";
  document.querySelector("#adminPasswordInput").value = "";
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#admin") {
    renderGate();
  } else {
    showLearnerSurface();
  }
});

detailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.details = {
    name: document.querySelector("#nameInput").value.trim(),
    mobile: document.querySelector("#mobileInput").value.trim(),
  };
  saveDetails();
  openAdminAfterLogin = isCurrentLearnerAdminOwner();
  renderGate();
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile = {
    email: state.login.email,
    name: state.details.name,
    mobile: state.details.mobile,
    username: document.querySelector("#usernameInput").value.trim(),
    trainingPasswordSet: Boolean(document.querySelector("#trainingPasswordInput").value),
    role: null,
  };
  saveProfile();
  openAdminAfterLogin = isCurrentLearnerAdminOwner();
  renderGate();
});

document.querySelectorAll(".role-option").forEach((button) => {
  button.addEventListener("click", () => {
    state.pendingRole = button.dataset.role;
    document.querySelectorAll(".role-option").forEach((option) => {
      const selected = option === button;
      option.classList.toggle("selected", selected);
      option.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    roleNextBtn.disabled = false;
  });
});

roleNextBtn.addEventListener("click", () => {
  if (!state.pendingRole) return;
  resetCourseForRole(state.pendingRole);
  state.pendingRole = null;
  roleNextBtn.disabled = true;
  document.querySelectorAll(".role-option").forEach((option) => {
    option.classList.remove("selected");
    option.setAttribute("aria-pressed", "false");
  });
  renderGate();
});

document.querySelector("#playIntroBtn").addEventListener("click", () => {
  const text = introText();
  if (!("speechSynthesis" in window)) {
    document.querySelector("#introCopy").textContent = `${text} Voice playback is not available in this browser.`;
    return;
  }
  window.speechSynthesis.cancel();
  const intro = new SpeechSynthesisUtterance(text);
  intro.rate = 0.95;
  intro.pitch = 1;
  window.speechSynthesis.speak(intro);
});

document.querySelector("#startLearningBtn").addEventListener("click", () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  state.introSeen = true;
  localStorage.setItem("appIntroSeen", "true");
  renderGate();
});

document.querySelector("#changeRoleBtn").addEventListener("click", () => {
  onboarding.classList.remove("hidden");
  appShell.classList.add("hidden");
  showStep("role");
});

document.querySelector("#signOutBtn").addEventListener("click", () => {
  clearLearnerData();
  renderGate();
});

installAppBtn.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    addMessage("ai", "Install app", "Use your browser's install option to add Cricket Learner AI to your device. No app store is required for this direct install version.");
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallButton();
});

adminAccessBtn.addEventListener("click", () => {
  if (!isCurrentLearnerAdminOwner()) {
    addMessage("ai", "Admin access locked", "Admin access is reserved for the configured owner account only.");
    return;
  }
  window.location.hash = "#admin";
});

document.querySelector("#explainBtn").addEventListener("click", () => {
  const lesson = state.lessons[state.selected];
  addMessage("ai", `Explaining ${lesson.title}`, coachIntro(lesson));
});

document.querySelector("#quizBtn").addEventListener("click", openQuiz);

document.querySelector("#practiceBtn").addEventListener("click", () => {
  const lesson = state.lessons[state.selected];
  addMessage("ai", "Practice prompt", practicePrompt(lesson));
});

document.querySelector("#newBattingBallBtn").addEventListener("click", () => {
  nextGame("batting");
});

document.querySelector("#newBowlingPlanBtn").addEventListener("click", () => {
  nextGame("bowling");
});

proToggleBtn.addEventListener("click", () => {
  if (!state.pro.active) {
    openRazorpayDialog();
    return;
  }

  addMessage("ai", "Pro Learning", "Your Pro Learning plan is active at $50/month. Pro mode teaches faster by simplifying each topic, giving one next action, and turning lessons into short drills.");
});

razorpaySuccessBtn.addEventListener("click", startRazorpayCheckout);

document.querySelector("#completeBtn").addEventListener("click", () => {
  state.completed.add(state.selected);
  saveProgress();
  render();
  addMessage("ai", "Lesson marked complete", "Nice. Move to the next module, or ask me to test your understanding before you continue.");
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  state.chat = [];
  state.completed.clear();
  saveChat();
  saveProgress();
  render();
  renderChat();
});

voiceModeBtn.addEventListener("click", toggleVoiceMode);
mainVoiceModeBtn.addEventListener("click", toggleVoiceMode);
voiceAskBtn.addEventListener("click", () => startVoiceQuestion(chatInput));
mainVoiceAskBtn.addEventListener("click", () => startVoiceQuestion(mainChatInput));

document.querySelector("#adminResetProgressBtn").addEventListener("click", () => {
  state.completed.clear();
  saveProgress();
  renderAdminDashboard();
});

document.querySelector("#adminRemoveUserBtn").addEventListener("click", () => {
  removeCurrentUserForMisuse();
  adminForm.reset();
  renderAdminDashboard();
});

document.querySelector("#adminResetAllBtn").addEventListener("click", () => {
  clearLearnerData();
  adminForm.reset();
  showAdminDashboard();
});

async function askAssistant(prompt) {
  addMessage("user", "You", prompt);
  const reply = await assistantReply(prompt);
  addMessage("ai", reply.title, reply.text);
}

document.querySelector("#askCoachPlanBtn").addEventListener("click", () => {
  askAssistant("Give me today's cricket learning plan");
});

document.querySelector("#continueLessonBtn").addEventListener("click", () => {
  state.selected = nextLessonIndex();
  render();
  lessonPanel.scrollTo({ top: 0, behavior: "smooth" });
  const lesson = state.lessons[state.selected];
  addMessage("ai", `Continue: ${lesson.title}`, coachIntro(lesson));
});

document.querySelector("#jumpProBtn").addEventListener("click", () => {
  proSection.scrollIntoView({ behavior: "smooth", block: "start" });
  const message = state.pro.active
    ? "Your Pro Learning plan is already active. Use it for shorter drills, clearer explanations, and faster lesson paths."
    : "Pro Learning is $50/month through Razorpay once live payment services are connected. It unlocks faster clarity drills and simpler step-by-step coaching.";
  addMessage("ai", "Learning plan", message);
});

document.querySelector("#refreshMissionBtn").addEventListener("click", () => {
  state.missionShift += 1;
  localStorage.setItem("missionShift", String(state.missionShift));
  renderInnovationLab();
  const mission = currentMission();
  addMessage("ai", mission.title, mission.text);
});

document.querySelector("#newPressureBtn").addEventListener("click", nextPressureSituation);

document.querySelectorAll(".quick-prompt").forEach((button) => {
  button.addEventListener("click", () => {
    askAssistant(button.dataset.prompt);
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = chatInput.value.trim();
  if (!input) return;
  askAssistant(input);
  chatInput.value = "";
});

mainChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = mainChatInput.value.trim();
  if (!input) return;
  askAssistant(input);
  mainChatInput.value = "";
});

registerAppInstallSupport();
handleRejoinLink();
renderGate();
