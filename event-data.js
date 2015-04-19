var eventData = 
{
    "Troll Attack":{
        "co-op":true, 
        "type": "singleChallenge",
        "requirementKeys":["Strength of Body", "Strength in Numbers", "Quickness of Body", "Hardiness", "Selflessness"], 
        "winKeys":["Get Stronger!", "Stoic Resistances", "Leadership Training"], 
        "loseKeys":["Blow to the Head", "Pulled Something", "Never Had a Chance", "Nasty Scar"]
    },
    "Magical SportsBall":{
        "co-op":true,
        "type":"houseChallenge",
        "requirementKeys":["Quickness of Body", "Shared Suffering", "Strength of Body", "A Cold Heart", "Alumni Assistance", "Let's Put our Heads Together"],
        "winKeys":["Energized Strength", "Energized Dexterity", "Energized Constitution", "Energized Intelligence", "Energized Charisma"],
        "loseKeys":["Demoralized Strength", "Demoralized Dexterity", "Demoralized Constitution", "Demoralized Intelligence", "Demoralized Charisma"]
    }
};

var requirementData = 
{
    "Strength of Body":{"co-op":false, "stat":"strength", "amount":0.66, "success":"above"},
    "Quickness of Body":{"co-op":false, "stat":"dexterity", "amount":0.66, "success":"above"},
    "Hardiness":{"co-op":false, "stat":"constitution", "amount":0.66, "success":"above"},
    "Strength of Mind":{"co-op":false, "stat":"intelligence", "amount":0.66, "success":"above"},
    "Negotiation Skills":{"co-op":false, "stat":"charisma", "amount":0.66, "success":"above"},
    "Strength in Numbers":{"co-op":true, "stat":"strength", "amount":4.0, "success":"above"},
    "Faster Together":{"co-op":true, "stat":"dexterity", "amount":4.0, "success":"above"},
    "Shared Suffering":{"co-op":true, "stat":"constitution", "amount":4.0, "success":"above"},
    "Let's Put our Heads Together":{"co-op":true, "stat":"intelligence", "amount":4.0, "success":"above"},
    "Group Negotiations":{"co-op":true, "stat":"charisma", "amount":4.0, "success":"above"},
    "Selflessness":{"co-op":false, "stat":"narcissism", "amount":-0.2, "success":"below"},
    "Looking out for #1":{"co-op":false, "stat":"narcissism", "amount":0.2, "success":"above"}, 
    "An Earnest Nature":{"co-op":false, "stat":"machiavellianism", "amount":-0.2, "success":"below"},
    "Machiavellian Machinations":{"co-op":false, "stat":"machiavellianism", "amount":0.2, "success":"above"},
    "Empathy":{"co-op":false, "stat":"psychopathy", "amount":-0.2, "success":"below"},
    "A Cold Heart":{"co-op":false, "stat":"psychopathy", "amount":0.2, "success":"above"},
    "Magical Artifacts":{"co-op":true, "stat":"artifacts", "amount":true, "success":"match"},
    "Alumni Assistance":{"co-op":true, "stat":"alumni", "amount":true, "success":"match"},
    "A Little Help from Dead Friends":{"co-op":true, "stat":"helpfulGhosts", "amount":true, "success":"match"},
    "Cash is King":{"co-op":true, "stat":"cashResources", "amount":true, "success":"match"},
    "Secret Tomes and Special Spells":{"co-op":true, "stat":"magicResources", "amount":true, "success":"match"}   
};

var consequenceData =
{
    "Get Stronger!":{"who":"random", "stat":"strength", "amount":0.1},
    "Strength from Leadership":{"who":"leader", "stat":"strength", "amount":0.1},
    "Stronger Together":{"who":"all", "stat":"strength", "amount":0.05},
    "Flexibility Gains":{"who":"random", "stat":"dexterity", "amount":0.1},
    "Flexible Leadership":{"who":"leader", "stat":"dexterity", "amount":0.1},
    "Faster Together":{"who":"all", "stat":"dexterity", "amount":0.05},
    "Stoic Resistances":{"who":"random", "stat":"constitution", "amount":0.1},
    "Buoyed by Allies":{"who":"leader", "stat":"constitution", "amount":0.1},
    "Group Toughness":{"who":"all", "stat":"constitution", "amount":0.05},
    "Magical Breakthrough":{"who":"random", "stat":"intelligence", "amount":0.1},
    "Special Training":{"who":"leader", "stat":"intelligence", "amount":0.1},
    "Group Study":{"who":"all", "stat":"intelligence", "amount":0.05},
    "Charming!":{"who":"random", "stat":"charisma", "amount":0.1},
    "Leadership Training":{"who":"leader", "stat":"charisma", "amount":0.1},
    "Charm School":{"who":"all", "stat":"charisma", "amount":0.05},
    "A Blow to Strength":{"who":"random", "stat":"strength", "amount":-0.1},
    "Crushed Arm":{"who":"leader", "stat":"strength", "amount":-0.1},
    "Everyone's Crushed":{"who":"all", "stat":"strength", "amount":-0.05},
    "Pulled Something":{"who":"random", "stat":"dexterity", "amount":-0.1},
    "Strained Hamstring":{"who":"leader", "stat":"dexterity", "amount":-0.1},
    "Tripped Over Each Other":{"who":"all", "stat":"dexterity", "amount":-0.05},
    "Crushed Chest":{"who":"random", "stat":"constitution", "amount":-0.1},
    "A Loss of Fortitude":{"who":"leader", "stat":"constitution", "amount":-0.1},
    "Came Down with Something":{"who":"all", "stat":"constitution", "amount":-0.05},
    "Blow to the Head":{"who":"random", "stat":"intelligence", "amount":-0.1},
    "Cracked Skull":{"who":"leader", "stat":"intelligence", "amount":-0.1},
    "Mental Troubles":{"who":"all", "stat":"intelligence", "amount":-0.05},
    "Crushed Larynx":{"who":"random", "stat":"charisma", "amount":-0.1},
    "Nasty Scar":{"who":"leader", "stat":"charisma", "amount":-0.1},
    "Babbling Curse":{"who":"all", "stat":"charisma", "amount":-0.05},
    "Never Had a Chance":{"who":"random", "stat":"life", "amount":false},
    "A Heroic End":{"who":"leader", "stat":"life", "amount":false},
    "Death Curse":{"who":"all", "stat":"life", "amount":false},
    "Demoralized Strength":{"who":"house", "stat":"strength", "amount":-0.05},
    "Demoralized Dexterity":{"who":"house", "stat":"dexterity", "amount":-0.05},
    "Demoralized Constitution":{"who":"house", "stat":"constitution", "amount":-0.05},
    "Demoralized Intelligence":{"who":"house", "stat":"intelligence", "amount":-0.05},
    "Demoralized Charisma":{"who":"house", "stat":"charisma", "amount":-0.05},
    "Energized Strength":{"who":"house", "stat":"strength", "amount":0.05},
    "Energized Dexterity":{"who":"house", "stat":"dexterity", "amount":0.05},
    "Energized Constitution":{"who":"house", "stat":"constitution", "amount":0.05},
    "Energized Intelligence":{"who":"house", "stat":"intelligence", "amount":0.05},
    "Energized Charisma":{"who":"house", "stat":"charisma", "amount":0.05},
    "Magical Treasures":{"who":"house", "stat":"artifacts", "amount":true},
    "Successful Alumni":{"who":"house", "stat":"alumni", "amount":true},
    "Ghost Relationship Building":{"who":"house", "stat":"helpfulGhosts", "amount":true},
    "Cash Windfall":{"who":"house", "stat":"cashResources", "amount":true},
    "Special Secret Training":{"who":"house", "stat":"magicResources", "amount":true},
    "Artifacts Stolen":{"who":"house", "stat":"artifacts", "amount":false},
    "Abandoned by Alumni":{"who":"house", "stat":"alumni", "amount":false},
    "Pissed off Ghosts":{"who":"house", "stat":"helpfulGhosts", "amount":false},
    "Bankruptcy":{"who":"house", "stat":"cashResources", "amount":false},
    "Tomes Stolen":{"who":"house", "stat":"magicResources", "amount":false}
};