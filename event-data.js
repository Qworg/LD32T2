//var eventList = 
//[
//    {"name":"Troll Attack", "co-op":true, "requirements":[
//
//
//
//
//








var requirementList = 
[
    {"name":"Strength of Body", "co-op":false, "stat":"strength", "amount":0.66, "success":"above"},
    {"name":"Quickness of Body", "co-op":false, "stat":"dexterity", "amount":0.66, "success":"above"},
    {"name":"Hardiness", "co-op":false, "stat":"constitution", "amount":0.66, "success":"above"},
    {"name":"Strength of Mind", "co-op":false, "stat":"intelligence", "amount":0.66, "success":"above"},
    {"name":"Negotiation Skills", "co-op":false, "stat":"charisma", "amount":0.66, "success":"above"},
    {"name":"Strength in Numbers", "co-op":true, "stat":"strength", "amount":4.0, "success":"above"},
    {"name":"Faster Together", "co-op":true, "stat":"dexterity", "amount":4.0, "success":"above"},
    {"name":"Shared Suffering", "co-op":true, "stat":"constitution", "amount":4.0, "success":"above"},
    {"name":"Let's Put our Heads Together", "co-op":true, "stat":"intelligence", "amount":4.0, "success":"above"},
    {"name":"Group Negotiations", "co-op":true, "stat":"charisma", "amount":4.0, "success":"above"},
    {"name":"Selflessness", "co-op":false, "stat":"narcissism", "amount":-0.2, "success":"below"},
    {"name":"Looking out for #1", "co-op":false, "stat":"narcissism", "amount":0.2, "success":"above"}, 
    {"name":"An Earnest Nature", "co-op":false, "stat":"machiavellianism", "amount":-0.2, "success":"below"},
    {"name":"Machiavellian Machinations", "co-op":false, "stat":"machiavellianism", "amount":0.2, "success":"above"},
    {"name":"Empathy", "co-op":false, "stat":"psychopathy", "amount":-0.2, "success":"below"},
    {"name":"A Cold Heart", "co-op":false, "stat":"psychopathy", "amount":0.2, "success":"above"},
    {"name":"Magical Artifacts", "co-op":true, "stat":"artifacts", "amount":true, "success":"match"},
    {"name":"Alumni Assistance", "co-op":true, "stat":"alumni", "amount":true, "success":"match"},
    {"name":"A Little Help from Dead Friends", "co-op":true, "stat":"helpfulGhosts", "amount":true, "success":"match"},
    {"name":"Cash is King", "co-op":true, "stat":"cashResources", "amount":true, "success":"match"},
    {"name":"Secret Tomes and Special Spells", "co-op":true, "stat":"magicResources", "amount":true, "success":"match"}   
];

var consequenceList =
[
    {"name":"Get Stronger!", "who":"random", "stat":"strength", "amount":0.1},
    {"name":"Strength from Leadership", "who":"leader", "stat":"strength", "amount":0.1},
    {"name":"Stronger Together", "who":"all", "stat":"strength", "amount":0.05},
    {"name":"Flexibility Gains", "who":"random", "stat":"dexterity", "amount":0.1},
    {"name":"Flexible Leadership", "who":"leader", "stat":"dexterity", "amount":0.1},
    {"name":"Faster Together", "who":"all", "stat":"dexterity", "amount":0.05},
    {"name":"Stoic Resistances", "who":"random", "stat":"constitution", "amount":0.1},
    {"name":"Buoyed by Allies", "who":"leader", "stat":"constitution", "amount":0.1},
    {"name":"Group Toughness", "who":"all", "stat":"constitution", "amount":0.05},
    {"name":"Magical Breakthrough", "who":"random", "stat":"intelligence", "amount":0.1},
    {"name":"Special Training", "who":"leader", "stat":"intelligence", "amount":0.1},
    {"name":"Group Study", "who":"all", "stat":"intelligence", "amount":0.05},
    {"name":"Charming!", "who":"random", "stat":"charisma", "amount":0.1},
    {"name":"Leadership Training", "who":"leader", "stat":"charisma", "amount":0.1},
    {"name":"Charm School", "who":"all", "stat":"charisma", "amount":0.05},
    {"name":"A Blow to Strength", "who":"random", "stat":"strength", "amount":-0.1},
    {"name":"Crushed Arm", "who":"leader", "stat":"strength", "amount":-0.1},
    {"name":"Everyone's Crushed", "who":"all", "stat":"strength", "amount":-0.05},
    {"name":"Pulled Something", "who":"random", "stat":"dexterity", "amount":-0.1},
    {"name":"Strained Hamstring", "who":"leader", "stat":"dexterity", "amount":-0.1},
    {"name":"Tripped Over Each Other", "who":"all", "stat":"dexterity", "amount":-0.05},
    {"name":"Crushed Chest", "who":"random", "stat":"constitution", "amount":-0.1},
    {"name":"A Loss of Fortitude", "who":"leader", "stat":"constitution", "amount":-0.1},
    {"name":"Came Down with Something", "who":"all", "stat":"constitution", "amount":-0.05},
    {"name":"Blow to the Head", "who":"random", "stat":"intelligence", "amount":-0.1},
    {"name":"Blow to the Head", "who":"leader", "stat":"intelligence", "amount":-0.1},
    {"name":"Mental Troubles", "who":"all", "stat":"intelligence", "amount":-0.05},
    {"name":"Nasty Scar", "who":"random", "stat":"charisma", "amount":-0.1},
    {"name":"Nasty Scar", "who":"leader", "stat":"charisma", "amount":-0.1},
    {"name":"Babbling Curse", "who":"all", "stat":"charisma", "amount":-0.05},
    {"name":"Never Had a Chance", "who":"random", "stat":"life", "amount":false},
    {"name":"A Heroic End", "who":"leader", "stat":"life", "amount":false},
    {"name":"Death Curse", "who":"all", "stat":"life", "amount":false},
    {"name":"Demoralized", "who":"house", "stat":"strength", "amount":-0.05},
    {"name":"Demoralized", "who":"house", "stat":"dexterity", "amount":-0.05},
    {"name":"Demoralized", "who":"house", "stat":"constitution", "amount":-0.05},
    {"name":"Demoralized", "who":"house", "stat":"intelligence", "amount":-0.05},
    {"name":"Demoralized", "who":"house", "stat":"charisma", "amount":-0.05},
    {"name":"Energized", "who":"house", "stat":"strength", "amount":0.05},
    {"name":"Energized", "who":"house", "stat":"dexterity", "amount":0.05},
    {"name":"Energized", "who":"house", "stat":"constitution", "amount":0.05},
    {"name":"Energized", "who":"house", "stat":"intelligence", "amount":0.05},
    {"name":"Energized", "who":"house", "stat":"charisma", "amount":0.05},
    {"name":"Magical Treasures", "who":"house", "stat":"artifacts", "amount":true},
    {"name":"Successful Alumni", "who":"house", "stat":"alumni", "amount":true},
    {"name":"Ghost Relationship Building", "who":"house", "stat":"helpfulGhosts", "amount":true},
    {"name":"Cash Windfall", "who":"house", "stat":"cashResources", "amount":true},
    {"name":"Special Secret Training", "who":"house", "stat":"magicResources", "amount":true},
    {"name":"Artifacts Stolen", "who":"house", "stat":"artifacts", "amount":false},
    {"name":"Abandoned by Alumni", "who":"house", "stat":"alumni", "amount":false},
    {"name":"Pissed off Ghosts", "who":"house", "stat":"helpfulGhosts", "amount":false},
    {"name":"Bankruptcy", "who":"house", "stat":"cashResources", "amount":false},
    {"name":"Tomes Stolen", "who":"house", "stat":"magicResources", "amount":false}
];