const items = [
    {
        id: "1",
        name: "The Sad Onion",
        desc: "↑ +0.7 Tears up",
    },
    {
        id: "2",
        name: "The Inner Eye",
        desc: "Triple shot#↓ -49% Fire Rate down",
    },
    {
        id: "3",
        name: "Spoon Bender",
        desc: "Homing tears",
    },
    {
        id: "4",
        name: "Cricket's Head",
        desc: "↑ +0.5 Damage up#↑ +50% Damage Multiplier",
    },
    {
        id: "5",
        name: "My Reflection",
        desc: "Gives tears a boomerang effect#↑ +1.5 Range up#↑ +60% additional Range up#↑ +0.6 Shot Speed up#",
    },
    {
        id: "6",
        name: "Number One",
        desc: "↑ +1.5 Tears up#↓ -1.5 Range down#↓ -20% additional Range down",
    },
    {
        id: "7",
        name: "Blood of the Martyr",
        desc: "↑ +1 Damage up#↑ +50% if you have Book of Belial or Devil Card effect active",
    },
    {
        id: "8",
        name: "Brother Bobby",
        desc: "Normal tear familiar#Deals 3.5 damage per tear",
    },
    {
        id: "9",
        name: "Skatole",
        desc: "All fly enemies are friendly",
    },
    {
        id: "10",
        name: "Halo of Flies",
        desc: "+2 fly orbitals#Blocks enemy projectiles",
    },
    {
        id: "11",
        name: "1up!",
        desc: "↑ +1 life#Respawn with full health",
    },
    {
        id: "12",
        name: "Magic Mushroom",
        desc: "↑ +1 Health up#Full health#↑ +0.3 Damage up#↑ +50% Damage Multiplier#↑ +1.5 Range up#↑ +0.3 Speed up#Size up",
    },
    {
        id: "13",
        name: "The Virus",
        desc: "Poison touch#↑ +0.2 Speed up",
    },
    {
        id: "14",
        name: "Roid Rage",
        desc: "↑ +0.3 Speed up#↑ +1.5 Range up",
    },
    {
        id: "15",
        name: "<3",
        desc: "↑ +1 Health up#Full health",
    },
    {
        id: "16",
        name: "Raw Liver",
        desc: "↑ +2 Health up#Full health",
    },
    {
        id: "17",
        name: "Skeleton Key",
        desc: "+99 Keys",
    },
    {
        id: "18",
        name: "A Dollar",
        desc: "+100 coins",
    },
    {
        id: "19",
        name: "Boom!",
        desc: "+10 Bombs",
    },
    {
        id: "20",
        name: "Transcendence",
        desc: "Flight!",
    },
    {
        id: "21",
        name: "The Compass",
        desc: "Reveals icons on the map#Does not show the layout of the map",
    },
    {
        id: "22",
        name: "Lunch",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "23",
        name: "Dinner",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "24",
        name: "Dessert",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "25",
        name: "Breakfast",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "26",
        name: "Rotten Meat",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "27",
        name: "Wooden Spoon",
        desc: "↑ +0.3 Speed up",
    },
    {
        id: "28",
        name: "The Belt",
        desc: "↑ +0.3 Speed up",
    },
    {
        id: "29",
        name: "Mom's Underwear",
        desc: "↑ +1.5 Range up#Spawns 3-6 Blue Flies",
    },
    {
        id: "30",
        name: "Mom's Heels",
        desc: "↑ +1.5 Range up#Touched enemies take 12 damage",
    },
    {
        id: "31",
        name: "Mom's Lipstick",
        desc: "↑ +2.25 Range up#Spawns 1 random heart",
    },
    {
        id: "32",
        name: "Wire Coat Hanger",
        desc: "↑ +0.7 Tears up",
    },
    {
        id: "33",
        name: "The Bible",
        desc: "Flight for current room#Kills Mom's Foot and Mom's Heart instantly#!!! Kills YOU when used on Satan",
    },
    {
        id: "34",
        name: "The Book of Belial",
        desc: "↑ +2 Damage up#↑ +12.5% Devil/Angel Room chance#↑ +50% Damage Multiplier if you have Blood of the Martyr",
    },
    {
        id: "35",
        name: "The Necronomicon",
        desc: "Deal 40 damage to all enemies in the room",
    },
    {
        id: "36",
        name: "The Poop",
        desc: "Spawns one poop and knocks back enemies#Can be placed next to a pit and destroyed with a bomb to make a bridge",
    },
    {
        id: "37",
        name: "Mr. Boom",
        desc: "Drops a large bomb below the player which deals 185 damage",
    },
    {
        id: "38",
        name: "Tammy's Head",
        desc: "Fires 10 tears in a circle around Isaac",
    },
    {
        id: "39",
        name: "Mom's Bra",
        desc: "Freeze all enemies in the current room for 4 secs",
    },
    {
        id: "40",
        name: "Kamikaze!",
        desc: "Causes a big explosion at the player's location#Deals 185 damage",
    },
    {
        id: "41",
        name: "Mom's Pad",
        desc: "Fears all enemies in the current room for 5 secs",
    },
    {
        id: "42",
        name: "Bob's Rotten Head",
        desc: "Throwable poison bomb#Deals 185 + your damage#Creates poison cloud",
    },
    {
        id: "43",
        name: "",
        desc: "<item does not exist>",
    },
    {
        id: "44",
        name: "Teleport",
        desc: "Teleports Isaac into a random room except I AM ERROR rooms#Influence direction a bit by moving in desired direction",
    },
    {
        id: "45",
        name: "Yum Heart",
        desc: "Heal 1 Red Heart#Also heals other players for half a heart",
    },
    {
        id: "46",
        name: "Lucky Foot",
        desc: "↑ +1 Luck up#Better chance to win while gambling#Increases room clearing drop chance#Turns some bad pills into good ones",
    },
    {
        id: "47",
        name: "Doctor's Remote",
        desc: "Epic Fetus on demand!#Controllable Airstrikes",
    },
    {
        id: "48",
        name: "Cupid's Arrow",
        desc: "Piercing tears",
    },
    {
        id: "49",
        name: "Shoop da Whoop!",
        desc: "High damage brimstone laser",
    },
    {
        id: "50",
        name: "Steven",
        desc: "↑ +1 Damage up",
    },
    {
        id: "51",
        name: "Pentagram",
        desc: "↑ +1 Damage up#↑ +10% Devil/Angel Room chance",
    },
    {
        id: "52",
        name: "Dr. Fetus",
        desc: "Bomb tears#Each bomb deals 10x your damage#If that results in over 60 damage, it instead deals 5x your damage + 30#↓ -60% Tears down",
    },
    {
        id: "53",
        name: "Magneto",
        desc: "Magnetic attraction for pickups#Opens chests remotely, ignoring damage of spike chests",
    },
    {
        id: "54",
        name: "Treasure Map",
        desc: "Reveals the floor layout#Does not show room icons",
    },
    {
        id: "55",
        name: "Mom's Eye",
        desc: "50% chance to shoot a tear backwards#100% chance at 5 Luck",
    },
    {
        id: "56",
        name: "Lemon Mishap",
        desc: "Drop a pool of lemonade#Deals 66 contact damage per second",
    },
    {
        id: "57",
        name: "Distant Admiration",
        desc: "Mid-range fly orbital#Deals 75 contact damage per second",
    },
    {
        id: "58",
        name: "Book of Shadows",
        desc: "Invincibility for 10 secs",
    },
    {
        id: "59",
        name: "The Book of Belial",
        desc: "<Item not obtainable>",
    },
    {
        id: "60",
        name: "The Ladder",
        desc: "Walk over small gaps",
    },
    {
        id: "61",
        name: "",
        desc: "<item does not exist>",
    },
    {
        id: "62",
        name: "Charm of the Vampire",
        desc: "↑ +0.3 Damage up#Heals half a heart for every 13 enemies killed",
    },
    {
        id: "63",
        name: "The Battery",
        desc: "Active items can now be charged up twice",
    },
    {
        id: "64",
        name: "Steam Sale",
        desc: "-50% on shop items#Getting this item multiple times reduces the price further",
    },
    {
        id: "65",
        name: "Anarchist Cookbook",
        desc: "Spawn 6 troll bombs near the center of the room",
    },
    {
        id: "66",
        name: "The Hourglass",
        desc: "Slow down enemies for 8 secs",
    },
    {
        id: "67",
        name: "Sister Maggy",
        desc: "Normal tear familiar#Deals 6 damage per tear",
    },
    {
        id: "68",
        name: "Technology",
        desc: "Tears are now lasers",
    },
    {
        id: "69",
        name: "Chocolate Milk",
        desc: "Chargeable tears#↑ Up to 400% Damage#↓ Tears down",
    },
    {
        id: "70",
        name: "Growth Hormones",
        desc: "↑ +1 Damage up#↑ +0.2 Speed up",
    },
    {
        id: "71",
        name: "Mini Mush",
        desc: "↑ +0.3 Speed up#↑ +1.5 Range up#↑ Size down",
    },
    {
        id: "72",
        name: "Rosary",
        desc: "+3 Soul Hearts#↑ +0.5 Tears up#{{Collectible33}}The Bible is added to all item pools",
    },
    {
        id: "73",
        name: "Cube of Meat",
        desc: "LVL1: Orbital#LVL2: Shooting orbital#LVL3: Meat Boy LVL1#LVL4: Meat Boy LVL2",
    },
    {
        id: "74",
        name: "A Quarter",
        desc: "+25 coins",
    },
    {
        id: "75",
        name: "PHD",
        desc: "Better pills#Spawns 1 pill on pickup#Heals 2 Red Hearts#More money from Blood Donation Machines and {{Collectible135}}IV Bag",
    },
    {
        id: "76",
        name: "X-Ray Vision",
        desc: "Reveals secret rooms entrances",
    },
    {
        id: "77",
        name: "My Little Unicorn",
        desc: "Invincibility#20 contact damage",
    },
    {
        id: "78",
        name: "Book of Revelations",
        desc: "+1 Soul Heart#A Horseman replaces the current floor's boss if used#↑ +17.5% {{DevilRoom}}Devil or {{AngelRoom}}Angel Room chance",
    },
    {
        id: "79",
        name: "The Mark",
        desc: "↑ +1 Damage up#↑ +0.2 Speed up#+1 Black Heart",
    },
    {
        id: "80",
        name: "The Pact",
        desc: "↑ +0.5 Damage up#↑ +0.7 Tears up#+2 Black Hearts",
    },
    {
        id: "81",
        name: "Dead Cat",
        desc: "↑ +9 lives#Respawn with 1 HP#↓ Sets your Red Heart containers to 1#Characters that can't have Red Hearts get set to 1 Soul/Black Heart",
    },
    {
        id: "82",
        name: "Lord of the Pit",
        desc: "Flight#↑ +0.3 Speed up",
    },
    {
        id: "83",
        name: "The Nail",
        desc: "+ Half Black Heart#↑ +2 Damage up#↓ -0.18 Speed down#Deal contact damage#Destroy rocks when walking over them",
    },
    {
        id: "84",
        name: "We Need To Go Deeper!",
        desc: "Spawns a trapdoor to skip the floor#10% chance for crawlspace trapdoor",
    },
    {
        id: "85",
        name: "Deck of Cards",
        desc: "Spawns 1 Card",
    },
    {
        id: "86",
        name: "Monstro's Tooth",
        desc: "Summon Monstro for one stomp",
    },
    {
        id: "87",
        name: "Loki's Horns",
        desc: "25% chance to shoot in 4 directions#100% chance at 15 Luck",
    },
    {
        id: "88",
        name: "Little Chubby",
        desc: "Familiar that charges forward#Deals 52.5 contact damage per second",
    },
    {
        id: "89",
        name: "Spider Bite",
        desc: "25% chance to shoot slowing tears#100% chance at 15 Luck",
    },
    {
        id: "90",
        name: "The Small Rock",
        desc: "↑ +1 Damage up#↑ +0.2 Tears up#↓ -0.2 Speed down",
    },
    {
        id: "91",
        name: "Spelunker Hat",
        desc: "Reveals the room type of up to 2 adjacent rooms#Can also reveal Secret Rooms, Super Secret Rooms and Mini-Boss Rooms#Blocks projectiles falling from above",
    },
    {
        id: "92",
        name: "Super Bandage",
        desc: "↑ +1 Health up#+2 Soul Hearts#Heals 1 Red Heart",
    },
    {
        id: "93",
        name: "The Gamekid",
        desc: "Short invincibility#Fears all enemies#Deal 40 contact damage#Two eaten enemies replenish half a heart",
    },
    {
        id: "94",
        name: "Sack of Pennies",
        desc: "Drops a random coin every 2 rooms",
    },
    {
        id: "95",
        name: "Robo-Baby",
        desc: "Laser tears#Deals 3.5 damage per shot",
    },
    {
        id: "96",
        name: "Little C.H.A.D.",
        desc: "Drops half a heart every 3 rooms",
    },
    {
        id: "97",
        name: "The Book of Sin",
        desc: "Spawns a random pickup",
    },
    {
        id: "98",
        name: "The Relic",
        desc: "Spawns 1 Soul Heart every 7-8 rooms",
    },
    {
        id: "99",
        name: "Little Gish",
        desc: "Slowing tears#Deals 3.5 damage per shot",
    },
    {
        id: "100",
        name: "Little Steven",
        desc: "Homing tears#Deals 3.5 damage per shot",
    },
    {
        id: "101",
        name: "The Halo",
        desc: "↑ +1 Health up#↑ +0.3 Damage up#↑ +0.2 Tears up#↑ +0.38 Range up#↑ +0.3 Speed up#Heals 1 Red Heart",
    },
    {
        id: "102",
        name: "Mom's Bottle of Pills",
        desc: "Spawns 1 Pill",
    },
    {
        id: "103",
        name: "The Common Cold",
        desc: "25% chance to shoot Poison tears#100% chance at 12 Luck",
    },
    {
        id: "104",
        name: "The Parasite",
        desc: "Tears split in two on contact#Splitted tears deal half damage",
    },
    {
        id: "105",
        name: "The D6",
        desc: "Rerolls pedestals in current room",
    },
    {
        id: "106",
        name: "Mr. Mega",
        desc: "↑ Bomb damage x1.85#+5 Bombs",
    },
    {
        id: "107",
        name: "The Pinking Shears",
        desc: "Flight#Your body attacks enemies with 82.5 contact damage per second",
    },
    {
        id: "108",
        name: "The Wafer",
        desc: "All damage taken is reduced to half a heart",
    },
    {
        id: "109",
        name: "Money = Power",
        desc: "↑ +0.04 Damage up for every coin you have",
    },
    {
        id: "110",
        name: "Mom's Contacts",
        desc: "20% chance to shoot Freezing Tears#↑ +0.38 Range up",
    },
    {
        id: "111",
        name: "The Bean",
        desc: "Poison fart",
    },
    {
        id: "112",
        name: "Guardian Angel",
        desc: "Orbital#Speeds up all orbitals#Blocks projectiles#Deals 105 contact damage per second",
    },
    {
        id: "113",
        name: "Demon Baby",
        desc: "Auto-firing turret#Deals 3 damage per shot",
    },
    {
        id: "114",
        name: "Mom's Knife",
        desc: "Controllable knife attack#The knife deals 2x Isaac's damage while held and 6x damage at the furthest possible distance",
    },
    {
        id: "115",
        name: "Ouija Board",
        desc: "Spectral tears",
    },
    {
        id: "116",
        name: "9 Volt",
        desc: "-1 charge needed for active items#Fully recharges your active item",
    },
    {
        id: "117",
        name: "Dead Bird",
        desc: "Spawns a bird when you get hit#Bird deals 4 contact damage per second",
    },
    {
        id: "118",
        name: "Brimstone",
        desc: "Charge a blood laser that deals constant damage#↓ -67% Fire Rate down",
    },
    {
        id: "119",
        name: "Blood Bag",
        desc: "↑ +1 Health up#↑ +0.3 Speed up#Heals 4 Hearts",
    },
    {
        id: "120",
        name: "Odd Mushroom",
        desc: "↑ +1.7 Tears up#↑ +0.3 Speed up#↓ -10% Damage down#↓ -0.4 additional Damage down",
    },
    {
        id: "121",
        name: "Odd Mushroom (Large)",
        desc: "↑ +1 Health up#↑ +1 Damage up#↑ +0.38 Range up#↓ -0.2 Speed down",
    },
    {
        id: "122",
        name: "Whore of Babylon",
        desc: "!!! When on half a Red Heart or less:#↑ +1.5 Damage up#↑ +0.3 Speed up",
    },
    {
        id: "123",
        name: "Monster Manual",
        desc: "Spawns a random familiar#Lasts for current floor",
    },
    {
        id: "124",
        name: "Dead Sea Scrolls",
        desc: "Random active item effect",
    },
    {
        id: "125",
        name: "Bobby-Bomb",
        desc: "Homing bombs#+5 Bombs",
    },
    {
        id: "126",
        name: "Razor Blade",
        desc: "↑ +1.2 Damage up for current Room#↓ Deals 1 heart of damage to you#Prioritizes Red Hearts",
    },
    {
        id: "127",
        name: "Forget Me Now",
        desc: "{{Warning}} SINGLE USE {{Warning}}#Reroll entire floor",
    },
    {
        id: "128",
        name: "Forever Alone",
        desc: "Fly orbital#Far away#Deals 30 contact damage per second",
    },
    {
        id: "129",
        name: "Bucket of Lard",
        desc: "↑ +2 Health up#↓ -0.2 Speed down",
    },
    {
        id: "130",
        name: "A Pony",
        desc: "Grants flight while held#Sets your speed to 1.5 if you have less than 1.5#Dash in a direction on use",
    },
    {
        id: "131",
        name: "Bomb Bag",
        desc: "Drops 1 Bomb pickup every 2-3 rooms",
    },
    {
        id: "132",
        name: "A Lump of Coal",
        desc: "More Damage based on traveled distance of the tear",
    },
    {
        id: "133",
        name: "Guppy's Paw",
        desc: "!!! Convert:#1 heart container to 3 Soul Hearts",
    },
    {
        id: "134",
        name: "Guppy's Tail",
        desc: "33% chance for room clear reward to be a chest#33% chance for no room clear reward",
    },
    {
        id: "135",
        name: "IV Bag",
        desc: "Portable blood bank#Half a heart = 1-2 coins#1 coin on Hard Mode#0-1 coin as Keeper",
    },
    {
        id: "136",
        name: "Best Friend",
        desc: "Exploding Decoy#Attracts enemies",
    },
    {
        id: "137",
        name: "Remote Detonator",
        desc: "Detonate bombs on demand#+5 bombs",
    },
    {
        id: "138",
        name: "Stigmata",
        desc: "↑ +1 Health up#↑ +0.3 Damage up#Heals 1 Red Heart",
    },
    {
        id: "139",
        name: "Mom's Purse",
        desc: "You can now hold 2 trinkets#Spawns 1 random trinket",
    },
    {
        id: "140",
        name: "Bob's Curse",
        desc: "Poison bombs#+5 bombs#Bombs leave a poison cloud#Makes you immune to poison damage",
    },
    {
        id: "141",
        name: "Pageant Boy",
        desc: "Spawns 7 random coins",
    },
    {
        id: "142",
        name: "Scapular",
        desc: "When damaged down to half a heart, you gain 1 Soul Heart#(Once per room)",
    },
    {
        id: "143",
        name: "Speed Ball",
        desc: "↑ +0.3 Speed up#↑ +0.2 Shot Speed up",
    },
    {
        id: "144",
        name: "Bum Friend",
        desc: "Converts coins into pickups",
    },
    {
        id: "145",
        name: "Guppy's Head",
        desc: "Spawns 2-4 blue flies",
    },
    {
        id: "146",
        name: "Prayer Card",
        desc: "+1 Eternal Heart",
    },
    {
        id: "147",
        name: "Notched Axe",
        desc: "Break rocks and damage enemies on swing#Hitting with the axe reduces its charge#Charge refills on stage transition",
    },
    {
        id: "148",
        name: "Infestation",
        desc: "Spawn 2-6 flies when you get hit",
    },
    {
        id: "149",
        name: "Ipecac",
        desc: "Explosive poison tears#↑ +40 Damage up#↓ -0.2 Shot Speed down#↓ -67% Fire Rate down#↓ Minor Range down",
    },
    {
        id: "150",
        name: "Tough Love",
        desc: "10% chance to shoot teeth#Teeth deal 3.2x your damage#100% chance at 9 Luck",
    },
    {
        id: "151",
        name: "The Mulligan",
        desc: "1/6 chance to spawn a fly when tears hit an enemy",
    },
    {
        id: "152",
        name: "Technology 2",
        desc: "Replaces the right eye tears with an unlimited range piercing laser which fires continuously#Laser deals 13% of your damage#↓ -33% Fire Rate down",
    },
    {
        id: "153",
        name: "Mutant Spider",
        desc: "Quad shot!#↓ -58% Fire Rate down",
    },
    {
        id: "154",
        name: "Chemical Peel",
        desc: "↑ +2 Damage up for left eye",
    },
    {
        id: "155",
        name: "The Peeper",
        desc: "Floats around the room#Deals 17.1 contact damage per second#↑ Tears shot from Isaac's left eye deal 34% more damage",
    },
    {
        id: "156",
        name: "Habit",
        desc: "+1 charge when you get hit",
    },
    {
        id: "157",
        name: "Bloody Lust",
        desc: "↑ Damage up every time you get hit#Applies up to 6 times per floor#Lasts for whole floor",
    },
    {
        id: "158",
        name: "Crystal Ball",
        desc: "Reveals the full map#Drops a Soul Heart or a random card or rune#While held:#↑ +15% {{Planetarium}}Planetarium chance#100% if a Treasure Room was skipped",
    },
    {
        id: "159",
        name: "Spirit of the Night",
        desc: "Flight#Spectral tears",
    },
    {
        id: "160",
        name: "Crack the Sky",
        desc: "Spawns 5 beams of light near enemies#Deals your damage+20",
    },
    {
        id: "161",
        name: "Ankh",
        desc: "Respawn as ??? (Blue Baby) on death",
    },
    {
        id: "162",
        name: "Celtic Cross",
        desc: "Chance for invincibility when Isaac gets hit",
    },
    {
        id: "163",
        name: "Ghost Baby",
        desc: "Spectral tears familiar#Deals 3.5 damage per shot",
    },
    {
        id: "164",
        name: "The Candle",
        desc: "Throw a blue flame#Deals contact damage#Blocks enemy tears#Despawns after 2 seconds",
    },
    {
        id: "165",
        name: "Cat-o-nine-tails",
        desc: "↑ +1 Damage up#↑ +0.23 Shot speed up",
    },
    {
        id: "166",
        name: "D20",
        desc: "Reroll pickups",
    },
    {
        id: "167",
        name: "Harlequin Baby",
        desc: "Shoots two tears in a V-shaped pattern#Deals 4 damage per shot",
    },
    {
        id: "168",
        name: "Epic Fetus",
        desc: "Controllable airstrike instead of tears#Deals 20 times your damage",
    },
    {
        id: "169",
        name: "Polyphemus",
        desc: "↑ +100% Damage up#↑ +4 additional Damage up#↓ -58% Fire Rate down#Tears keep going after killing an enemy",
    },
    {
        id: "170",
        name: "Daddy Longlegs",
        desc: "Stomps on enemies#Deals 40 damage per second",
    },
    {
        id: "171",
        name: "Spider Butt",
        desc: "Slows down enemies for 4 seconds#10 damage to all enemies#Enemies killed with it spawn blue spiders",
    },
    {
        id: "172",
        name: "Sacrificial Dagger",
        desc: "Orbital knife#Blocks enemy shots#Deals 112.5 damage per second",
    },
    {
        id: "173",
        name: "Mitre",
        desc: "Higher chance to find Soul Hearts",
    },
    {
        id: "174",
        name: "Rainbow Baby",
        desc: "Shoots random tears#Deals 3-5 damage per shot",
    },
    {
        id: "175",
        name: "Dad's Key",
        desc: "Opens all doors in the room, including {{SecretRoom}}{{SuperSecretRoom}}Secret Rooms, {{ChallengeRoom}}{{BossRushRoom}}Challenge Rooms, and the Mega Satan door",
    },
    {
        id: "176",
        name: "Stem Cells",
        desc: "↑ +1 Health up#↑ +0.16 Shot Speed up#Heals 1 Red Heart",
    },
    {
        id: "177",
        name: "Portable Slot",
        desc: "Portable slot machine",
    },
    {
        id: "178",
        name: "Holy Water",
        desc: "{{Throwable}} {{ColorOrange}}Throwable{{CR}}#Launches itself in the direction Isaac shoots#Breaks and deals 7 damage when touching an enemy#Leaves a pool of damaging creep that petrifies enemies",
    },
    {
        id: "179",
        name: "Fate",
        desc: "Flight#+1 Eternal Heart",
    },
    {
        id: "180",
        name: "The Black Bean",
        desc: "Fart when touched",
    },
    {
        id: "181",
        name: "White Pony",
        desc: "Grants flight while held#Sets your speed to 1.5 if you have less than 1.5#Holy Dash on use",
    },
    {
        id: "182",
        name: "Sacred Heart",
        desc: "↑ +1 Health up#Full health#↑ 230% + 1 Damage up#↓ -0.4 Tears down#↓ -0.25 Shot Speed down#Homing tears",
    },
    {
        id: "183",
        name: "Tooth Picks",
        desc: "↑ +0.7 Tears up#↑ +0.16 Shot Speed up",
    },
    {
        id: "184",
        name: "Holy Grail",
        desc: "Grants flight#↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "185",
        name: "Dead Dove",
        desc: "Flight#Spectral tears",
    },
    {
        id: "186",
        name: "Blood Rights",
        desc: "↑ Deal 40 damage to every enemy#↓ Deals 1 heart of damage to you#Prioritizes Red Hearts",
    },
    {
        id: "187",
        name: "Guppy's Hairball",
        desc: "Growing hairball#Swings around you#Grows when it kills an enemy#Bigger ball deals more damage",
    },
    {
        id: "188",
        name: "Abel",
        desc: "Mirrors your movement#Shoots towards the player#Deals 3.5 damage per shot#Deals 7.5 damage as Cain",
    },
    {
        id: "189",
        name: "SMB Super Fan",
        desc: "↑ +1 Health up#Full health#↑ +0.3 Damage up#↑ +0.2 Tears up#↑ +1.5 Range up#↑ +0.2 Speed up",
    },
    {
        id: "190",
        name: "Pyro",
        desc: "+99 Bombs",
    },
    {
        id: "191",
        name: "3 Dollar Bill",
        desc: "Random tear effect every 2-3 seconds",
    },
    {
        id: "192",
        name: "Telepathy for Dummies",
        desc: "Homing tears and +3 Range for current room",
    },
    {
        id: "193",
        name: "MEAT!",
        desc: "↑ +1 Health up#↑ +0.3 Damage up#Heals 1 Red Heart",
    },
    {
        id: "194",
        name: "Magic 8 Ball",
        desc: "↑ +0.16 Shot Speed up#+1 card#+15% {{Planetarium}}Planetarium chance",
    },
    {
        id: "195",
        name: "Mom's Coin Purse",
        desc: "Drops 4 Pills",
    },
    {
        id: "196",
        name: "Squeezy",
        desc: "Spawns 2 Soul Hearts#↑ +0.4 Tears up",
    },
    {
        id: "197",
        name: "Jesus Juice",
        desc: "↑ +0.5 Damage up#↑ +0.38 Range up",
    },
    {
        id: "198",
        name: "Box",
        desc: "Spawns 1 pickup of each kind",
    },
    {
        id: "199",
        name: "Mom's Key",
        desc: "+2 Keys#More drops from chests",
    },
    {
        id: "200",
        name: "Mom's Eyeshadow",
        desc: "10% chance to shoot charming tears",
    },
    {
        id: "201",
        name: "Iron Bar",
        desc: "↑ +0.3 Damage up#10% chance to shoot concussive tears",
    },
    {
        id: "202",
        name: "Midas' Touch",
        desc: "Turn enemies into gold on touch#Deals contact damage based on your coin count#Golden enemies drop coins",
    },
    {
        id: "203",
        name: "Humbling Bundle",
        desc: "Chance to spawn the double version of pickups",
    },
    {
        id: "204",
        name: "Fanny Pack",
        desc: "50% chance to drop a random pickup when you get hit",
    },
    {
        id: "205",
        name: "Sharp Plug",
        desc: "On use, fully recharges your active item at the cost of half a heart per charge#Prioritizes Red Hearts",
    },
    {
        id: "206",
        name: "Guillotine",
        desc: "↑ +1 Damage up#↑ +0.5 Fire Rate up#Your head is now an orbital which doesn't take damage and deals 105 contact damage#You will still shoot from the head",
    },
    {
        id: "207",
        name: "Ball of Bandages",
        desc: "LVL1: Orbital#LVL2: Shooting orbital#LVL3: Bandage Girl LVL1#LVL4: Bandage Girl LVL2",
    },
    {
        id: "208",
        name: "Champion Belt",
        desc: "↑ +1 Damage up#!!! +15% chance for champion enemies",
    },
    {
        id: "209",
        name: "Butt Bombs",
        desc: "↑ +5 Bombs#Explosions concuss and damage every enemy in the room",
    },
    {
        id: "210",
        name: "Gnawed Leaf",
        desc: "Invincible when standing still for 1 second",
    },
    {
        id: "211",
        name: "Spiderbaby",
        desc: "Spawn 3-5 Blue Spiders upon taking damage",
    },
    {
        id: "212",
        name: "Guppy's Collar",
        desc: "↑ 50% reviving chance",
    },
    {
        id: "213",
        name: "Lost Contact",
        desc: "Shielded tears#Tears block enemy shots#↓ -0.16 Shot Speed down",
    },
    {
        id: "214",
        name: "Anemic",
        desc: "↑ +1.5 Range up#Leave a trail of damaging creep upon taking damage",
    },
    {
        id: "215",
        name: "Goat Head",
        desc: "↑ 100% chance for {{DevilRoom}}Devil/{{AngelRoom}}Angel Rooms",
    },
    {
        id: "216",
        name: "Ceremonial Robes",
        desc: "↑ +1 Damage up#+3 Black Hearts",
    },
    {
        id: "217",
        name: "Mom's Wig",
        desc: "Random chance to spawn blue spider when shooting tears#Heals 1 Red Heart",
    },
    {
        id: "218",
        name: "Placenta",
        desc: "↑ +1 Health up#Heals 1 Red Heart#Chance to heal half a heart every minute",
    },
    {
        id: "219",
        name: "Old Bandage",
        desc: "↑ +1 Empty heart container#Random chance to drop Red Hearts when getting hit",
    },
    {
        id: "220",
        name: "Sad Bombs",
        desc: "Tear explosion!#+5 Bombs",
    },
    {
        id: "221",
        name: "Rubber Cement",
        desc: "Bouncing tears",
    },
    {
        id: "222",
        name: "Anti-Gravity",
        desc: "Holding the fire buttons causes tears to hover in midair#When released, they will all shoot in the direction they were fired#↑ +1 Fire Rate up",
    },
    {
        id: "223",
        name: "Pyromaniac",
        desc: "Explosions heal you#+5 Bombs",
    },
    {
        id: "224",
        name: "Cricket's Body",
        desc: "Tears split in 4 on hit#Split tears deal half your damage#↑ +0.5 Fire Rate up#↓ -20% Range down",
    },
    {
        id: "225",
        name: "Gimpy",
        desc: "Chance to spawn a Soul Heart when taking damage#Monsters have a chance to drop a Half Red Heart on death",
    },
    {
        id: "226",
        name: "Black Lotus",
        desc: "↑ +1 Health up#+1 Soul Heart#+1 Black Heart",
    },
    {
        id: "227",
        name: "Piggy Bank",
        desc: "+3 coins#Spawns 1-2 coins when getting hit#0-1 coin as Keeper",
    },
    {
        id: "228",
        name: "Mom's Perfume",
        desc: "15% chance to shoot Fear tears#↑ +0.5 Fire Rate up",
    },
    {
        id: "229",
        name: "Monstro's Lung",
        desc: "Tears can now be charged and released in a shotgun style attack#↓ 4.3x Tear Delay up",
    },
    {
        id: "230",
        name: "Abaddon",
        desc: "↑ +1.5 Damage up#↑ +0.2 Speed up#Fear tears#Converts all Red Heart Containers into Black Hearts#+2 Black Hearts",
    },
    {
        id: "231",
        name: "Ball of Tar",
        desc: "10% chance to shoot slowing tears#100% chance at 18 Luck#Leave trail of slowing creep",
    },
    {
        id: "232",
        name: "Stop Watch",
        desc: "Permanent slow effect for enemies#↑ +0.3 Speed up",
    },
    {
        id: "233",
        name: "Tiny Planet",
        desc: "Tears orbit around you#↑ +6.5 Range up#Spectral tears",
    },
    {
        id: "234",
        name: "Infestation 2",
        desc: "Spawn spiders when you kill an enemy",
    },
    {
        id: "235",
        name: "",
        desc: "<item does not exist>",
    },
    {
        id: "236",
        name: "E. Coli",
        desc: "On touch, turn enemies into poop",
    },
    {
        id: "237",
        name: "Death's Touch",
        desc: "Scythe tears!#↑ +1.5 Damage up#↓ -0.3 Tears down#Piercing tears",
    },
    {
        id: "238",
        name: "Key Piece 1",
        desc: "!!! Key piece for Mega Satan door!#More {{AngelRoom}}Angel Rooms appear",
    },
    {
        id: "239",
        name: "Key Piece 2",
        desc: "!!! Key piece for Mega Satan door!#More {{AngelRoom}}Angel Rooms appear",
    },
    {
        id: "240",
        name: "Experimental Treatment",
        desc: "↑ Randomly increases 4 stats#↓ Randomly decreases 2 stats",
    },
    {
        id: "241",
        name: "Contract from Below",
        desc: "Doubles all room clear rewards#33% chance for no room clear reward#Doesn't affect Greed Mode",
    },
    {
        id: "242",
        name: "Infamy",
        desc: "50% chance to block tears",
    },
    {
        id: "243",
        name: "Trinity Shield",
        desc: "Tear blocking shield",
    },
    {
        id: "244",
        name: "Tech.5",
        desc: "Fire random laser shots",
    },
    {
        id: "245",
        name: "20/20",
        desc: "Doubles all your shots#↓ -25% Damage",
    },
    {
        id: "246",
        name: "Blue Map",
        desc: "Reveals secret rooms",
    },
    {
        id: "247",
        name: "BFFS!",
        desc: "Your familiars deal double damage",
    },
    {
        id: "248",
        name: "Hive Mind",
        desc: "Blue Spiders/flies deal double damage#Spider/fly based familiars become stronger",
    },
    {
        id: "249",
        name: "There's Options",
        desc: "2 Boss items spawn instead of 1#!!! Only one can be taken",
    },
    {
        id: "250",
        name: "Bogo Bombs",
        desc: "All bomb drops become double bombs",
    },
    {
        id: "251",
        name: "Starter Deck",
        desc: "You can carry 2 Cards#Turns all Pills into Cards#Spawns 1 card on pickup",
    },
    {
        id: "252",
        name: "Little Baggy",
        desc: "You can carry 2 Pills#Turns all Cards into Pills#Spawns 1 pill on pickup",
    },
    {
        id: "253",
        name: "Magic Scab",
        desc: "↑ +1 Health up#↑ +1 Luck up#Heals 1 Red Heart",
    },
    {
        id: "254",
        name: "Blood Clot",
        desc: "!!! Applies only for the left eye#↑ +1 Damage up#↑ +1.5 Range up",
    },
    {
        id: "255",
        name: "Screw",
        desc: "↑ +0.5 Tears up#↑ +0.2 Shot Speed up",
    },
    {
        id: "256",
        name: "Hot Bombs",
        desc: "Burning bombs#+5 Bombs#You can no longer take fire damage#Bombs deal contact damage",
    },
    {
        id: "257",
        name: "Fire Mind",
        desc: "Tears light enemies on fire#Chance for tears to explode on enemy impact#100% chance to explode at 13 Luck#!!! The explosion can hurt you!",
    },
    {
        id: "258",
        name: "Missing No.",
        desc: "Rerolls all your items and stats on pickup and every time you change the floor",
    },
    {
        id: "259",
        name: "Dark Matter",
        desc: "↑ +1 Damage up#33% chance to shoot Fear tears",
    },
    {
        id: "260",
        name: "Black Candle",
        desc: "Immunity to Curses#+1 Black Heart#+15% Devil/Angel Room chance",
    },
    {
        id: "261",
        name: "Proptosis",
        desc: "↑ +0.5 Damage up#↓ Dealt damage decreases the longer the tear stays airborne#300% Damage at point blank range",
    },
    {
        id: "262",
        name: "Missing Page 2",
        desc: "+1 Black Heart#When down to 1 Heart, damages all enemies in the room#Black Hearts and Necronomicon effects deal double damage",
    },
    {
        id: "263",
        name: "Clear Rune",
        desc: "Copies the effects of held rune or soul stone#Drops 1 random rune on pickup",
    },
    {
        id: "264",
        name: "Smart Fly",
        desc: "Orbital#When you get hit it attacks enemies#Deals 22.5 damage per second",
    },
    {
        id: "265",
        name: "Dry Baby",
        desc: "When its hit by enemy tears, it has a 10% chance to damage all enemies in the room",
    },
    {
        id: "266",
        name: "Juicy Sack",
        desc: "Leaves slowing creep#Spawns 1-2 friendly spiders after clearing a room",
    },
    {
        id: "267",
        name: "Robo-Baby 2.0",
        desc: "Shoots lasers#Deals 3.5 damage per shot#Moves in the direction you shoot",
    },
    {
        id: "268",
        name: "Rotten Baby",
        desc: "Spawns blue flies when the player is shooting",
    },
    {
        id: "269",
        name: "Headless Baby",
        desc: "Leaves creep which deals 6 damage per second",
    },
    {
        id: "270",
        name: "Leech",
        desc: "Heals half a heart when it kills an enemy#3.2 damage per second",
    },
    {
        id: "271",
        name: "Mystery Sack",
        desc: "Drops random pickups every few rooms",
    },
    {
        id: "272",
        name: "BBF",
        desc: "Friendly exploding fly#The explosion deals 60 damage",
    },
    {
        id: "273",
        name: "Bob's Brain",
        desc: "{{Throwable}} {{ColorOrange}}Throwable{{CR}} bomb#The explosion deals 100 damage#The damage ignores armor",
    },
    {
        id: "274",
        name: "Best Bud",
        desc: "When getting hit, gain one midrange orbital#Orbital deals 150 damage per second",
    },
    {
        id: "275",
        name: "Lil Brimstone",
        desc: "Shoots a brimstone laser#Shot deals 2 damage per tick, for a total of 20 damage",
    },
    {
        id: "276",
        name: "Isaac's Heart",
        desc: "Gain an invulnerable body#!!! When the heart familiar gets hit you take damage#Familiar charges up when firing, releasing a burst of tears when releasing",
    },
    {
        id: "277",
        name: "Lil Haunt",
        desc: "Friendly ghost familiar#Deals 4 damage per second",
    },
    {
        id: "278",
        name: "Dark Bum",
        desc: "Converts 1.5 Red Hearts into a Soul/Black Heart, spider, pill, card, or rune",
    },
    {
        id: "279",
        name: "Big Fan",
        desc: "Big fat orbital#Deals 30 damage per second",
    },
    {
        id: "280",
        name: "Sissy Longlegs",
        desc: "Randomly spawns blue spiders when in a hostile room#Charms enemies it comes in contact with",
    },
    {
        id: "281",
        name: "Punching Bag",
        desc: "Decoy familiar#Enemies will target him instead",
    },
    {
        id: "282",
        name: "How to Jump",
        desc: "Allows you to jump",
    },
    {
        id: "283",
        name: "D100",
        desc: "Reroll all pedestals, stats, pickups and all your held passive items#Duplicates 1 random pickup in room#Restarts current room and respawns and rerolls its enemies#Rerolls rocks in room",
    },
    {
        id: "284",
        name: "D4",
        desc: "Reroll all your held passive items",
    },
    {
        id: "285",
        name: "D10",
        desc: "Reroll all enemies in the room#Tries to reroll them into enemies with similar max HP",
    },
    {
        id: "286",
        name: "Blank Card",
        desc: "Mimic effects of your held card",
    },
    {
        id: "287",
        name: "Book of Secrets",
        desc: "Grants {{Collectible54}}Treasure Map, {{Collectible21}}Compass or {{Collectible246}}Blue Map for the current floor when used#Only grants mapping effects you don't have already#If all effects are active, grants {{Collectible76}}X-Ray Vision",
    },
    {
        id: "288",
        name: "Box of Spiders",
        desc: "Spawn 4-8 blue spiders",
    },
    {
        id: "289",
        name: "Red Candle",
        desc: "Throw a red flame#The flame stays until it has dealt damage or blocked shots 5 times or after 10 seconds",
    },
    {
        id: "290",
        name: "The Jar",
        desc: "Stores up to 4 Red Heart pickups for later usage",
    },
    {
        id: "291",
        name: "Flush!",
        desc: "Turns all non-boss enemies into poop#Instantly kills poop enemies and bosses#Extinguishes fire places and fills the room with water#Turns lava-filled pits into walkable ground",
    },
    {
        id: "292",
        name: "Satanic Bible",
        desc: "+1 Black Heart#When used before a boss fight, the Boss Room item will be a Devil deal#!!! Taking that item locks you into Devil deals for the rest of the run",
    },
    {
        id: "293",
        name: "Head of Krampus",
        desc: "Shoot brimstone lasers in all 4 directions",
    },
    {
        id: "294",
        name: "Butter Bean",
        desc: "Knocks back nearby enemies and projectiles#Enemies pushed into obstacles take 10 damage",
    },
    {
        id: "295",
        name: "Magic Fingers",
        desc: "Damages the whole room with 2x the player damage + 10 #Price: 1 coin",
    },
    {
        id: "296",
        name: "Converter",
        desc: "Converts 1 Soul or Black Heart into 1 Red Heart Container",
    },
    {
        id: "297",
        name: "Pandora's Box",
        desc: "{{Warning}} SINGLE USE, spawns items based on floor:#B1: 2 Soul Hearts#B2: 2 bombs and 2 keys#C1: 1 Boss item#C2: B1+C1#D1: 4 Soul Hearts#D2: 20 coins#W1: 2 Boss items#W2: {{Collectible33}}The Bible#???/Void: Nothing#Sheol: 1 Devil item + 1 Black Heart#Dark Room: Unlocks {{Collectible523}}Moving Box#Cat: 1 Angel item + 1 Eternal Heart#Chest: 1 coin#Home: {{Collectible580}}Red Key",
    },
    {
        id: "298",
        name: "Unicorn Stump",
        desc: "Invincibility and +0.28 speed up for 6 seconds",
    },
    {
        id: "299",
        name: "Taurus",
        desc: "Get faster in hostile rooms!#Invincibility when fast enough#↓ -0.3 Speed down",
    },
    {
        id: "300",
        name: "Aries",
        desc: "↑ +0.25 Speed up#Touching enemies hurts them#Running fast enough will prevent contact damage",
    },
    {
        id: "301",
        name: "Cancer",
        desc: "+3 Soul Hearts#Halves taken damage in room when you already got hit",
    },
    {
        id: "302",
        name: "Leo",
        desc: "Destroy rocks when walking over them#Size up",
    },
    {
        id: "303",
        name: "Virgo",
        desc: "Chance to get invincibility when hit#Converts negative pills into positive ones",
    },
    {
        id: "304",
        name: "Libra",
        desc: "+6 Coins / Keys / Bombs#Balances your stats!#!!! Every stats up afterwards will affect other stats too",
    },
    {
        id: "305",
        name: "Scorpio",
        desc: "Poison tears",
    },
    {
        id: "306",
        name: "Sagittarius",
        desc: "↑ +0.2 Speed up#Piercing tears",
    },
    {
        id: "307",
        name: "Capricorn",
        desc: "↑ +1 Health up#↑ +0.5 Damage up#↑ +0.1 Speed up#↑ +0.75 Range up#↑ +0.5 Fire Rate up#Gives one bomb, coin and key",
    },
    {
        id: "308",
        name: "Aquarius",
        desc: "Leave a trail of creep#Creep deals 66% your damage per second#Creep synergizes with tear effects",
    },
    {
        id: "309",
        name: "Pisces",
        desc: "↑ +0.5 Fire Rate up#Increases tear knockback",
    },
    {
        id: "310",
        name: "Eve's Mascara",
        desc: "↑ +100% Damage up#↓ -33% Tears down#↓ -0.5 Shot Speed down",
    },
    {
        id: "311",
        name: "Judas' Shadow",
        desc: "When dead, respawn as Black Judas#↑ (Damage x 2)",
    },
    {
        id: "312",
        name: "Maggy's Bow",
        desc: "↑ +1 Health up#Heals 1 Red Heart#All Red Hearts now heal double their value",
    },
    {
        id: "313",
        name: "Holy Mantle",
        desc: "Ignore the first hit in every room",
    },
    {
        id: "314",
        name: "Thunder Thighs",
        desc: "↑ +1 Health up#↓ -0.4 Speed down#Heals 1 Red Heart#Destroy rocks when walking over them",
    },
    {
        id: "315",
        name: "Strange Attractor",
        desc: "Magnetic tears#Affects enemies, pickups and trinkets#Items will be attracted to where the tear lands",
    },
    {
        id: "316",
        name: "Cursed Eye",
        desc: "Charged wave of tears#!!! When hit while partially charged, teleports you to a random room#Does not teleport if you have {{Collectible260}}Black Candle",
    },
    {
        id: "317",
        name: "Mysterious Liquid",
        desc: "Tears leave creep#Creep deals 30 damage per second",
    },
    {
        id: "318",
        name: "Gemini",
        desc: "Close combat familiar#Deals 6 contact damage per second",
    },
    {
        id: "319",
        name: "Cain's Other Eye",
        desc: "Bounces around the room#Shoots towards Isaac#His damage equals your damage",
    },
    {
        id: "320",
        name: "???'s Only Friend",
        desc: "Controllable Fly#Deals 3.5 contact damage per tick",
    },
    {
        id: "321",
        name: "Samson's Chains",
        desc: "Draggable ball that can destroy rocks#Deals 10.7 contact damage per second",
    },
    {
        id: "322",
        name: "Mongo Baby",
        desc: "Copies the effect of one of your familiars#Deals double its damage",
    },
    {
        id: "323",
        name: "Isaac's Tears",
        desc: "Shoot 8 tears in all directions when used#Charges when shooting",
    },
    {
        id: "324",
        name: "Undefined",
        desc: "Teleports you to the {{TreasureRoom}}Treasure, {{SecretRoom}}Secret, {{SuperSecretRoom}}Super Secret or I AM ERROR Room",
    },
    {
        id: "325",
        name: "Scissors",
        desc: "Cut off your head#Head turns into stationary familiar#Control your body separately",
    },
    {
        id: "326",
        name: "Breath of Life",
        desc: "Hold down space until chargebar is empty for invincibility#Beams of light will strike enemies that touch you when invincible#!!! Don't hold it for too long!",
    },
    {
        id: "327",
        name: "The Polaroid",
        desc: "Invincibility when getting hit and at half a Red Heart or none",
    },
    {
        id: "328",
        name: "The Negative",
        desc: "↑ +1 Damage up#Damages all enemies in the room when getting hit and at half a Red Heart or none",
    },
    {
        id: "329",
        name: "The Ludovico Technique",
        desc: "Controllable Tear",
    },
    {
        id: "330",
        name: "Soy Milk",
        desc: "↑ 5.5x Fire Rate up#↓ -80% Damage down#Drastically reduces knockback",
    },
    {
        id: "331",
        name: "Godhead",
        desc: "↑ +0.5 Damage up#↓ -0.3 Tears down#↓ -0.3 Shot Speed down#Tears gain a damaging aura which deals 2 damage per tick#Homing tears",
    },
    {
        id: "332",
        name: "Lazarus' Rags",
        desc: "When dead, revive as Lazarus (Risen)",
    },
    {
        id: "333",
        name: "The Mind",
        desc: "Full mapping effect",
    },
    {
        id: "334",
        name: "The Body",
        desc: "↑ +3 Health up",
    },
    {
        id: "335",
        name: "The Soul",
        desc: "+2 Soul Hearts#Grants an aura that repels enemies and projectiles",
    },
    {
        id: "336",
        name: "Dead Onion",
        desc: "Piercing and spectral tears#↓ -1.5 Range down#↓ -0.4 Shot Speed down#↑ +50% Tear size",
    },
    {
        id: "337",
        name: "Broken Watch",
        desc: "Slows down or speeds up every 4th room",
    },
    {
        id: "338",
        name: "The Boomerang",
        desc: "Throwable boomerang#Stuns enemies and deals 2x your damage on hit#Can grab items",
    },
    {
        id: "339",
        name: "Safety Pin",
        desc: "↑ +1.5 Range up#↑ +0.16 Shot Speed up#+1 Black Heart",
    },
    {
        id: "340",
        name: "Caffeine Pill",
        desc: "↑ +0.3 Speed up#↑ Size down#Spawns a random pill when picked up",
    },
    {
        id: "341",
        name: "Torn Photo",
        desc: "↑ +0.7 Tears up#↑ +0.16 Shot Speed up",
    },
    {
        id: "342",
        name: "Blue Cap",
        desc: "↑ +1 Health up#↑ +0.7 Tears up#↓ -16% Shot Speed down#Heals 1 Red Heart",
    },
    {
        id: "343",
        name: "Latch Key",
        desc: "↑ +1 Luck up#+1 Soul Heart#Spawns 2 keys",
    },
    {
        id: "344",
        name: "Match Book",
        desc: "+1 Black Heart#Spawns 2-3 Bombs and {{Trinket41}}Match Stick",
    },
    {
        id: "345",
        name: "Synthoil",
        desc: "↑ +1 Damage up#↑ +1.5 Range up",
    },
    {
        id: "346",
        name: "A Snack",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "347",
        name: "Diplopia",
        desc: "!!! SINGLE USE !!!#Duplicates any pedestals/ consumables in the current room",
    },
    {
        id: "348",
        name: "Placebo",
        desc: "Copies the effect of the pill you are currently holding",
    },
    {
        id: "349",
        name: "Wooden Nickel",
        desc: "50% chance to spawn a random coin",
    },
    {
        id: "350",
        name: "Toxic Shock",
        desc: "At the start of every room every enemy gets a poison effect#Killed enemies leave puddle of creep#Grants immunity for toxic clouds",
    },
    {
        id: "351",
        name: "Mega Bean",
        desc: "Freeze all enemies in the current room#Deals 5 damage and poison any enemies nearby#Sends wave of spikes across the room#!!! Can be used to open secret rooms",
    },
    {
        id: "352",
        name: "Glass Cannon",
        desc: "Fires one large piercing spectral tear ((DMG x 10) + 10)#!!! When you take damage:#↓ You will lose an extra 2 hearts of health#↑ +1.5 Range up and leave blood creep for the room#The extra damage can't kill you#Self-damage does not count",
    },
    {
        id: "353",
        name: "Bomber Boy",
        desc: "+5 bombs#Bombs will now explode in a cross-shaped pattern",
    },
    {
        id: "354",
        name: "Crack Jacks",
        desc: "↑ +1 Health up#Spawns random trinket on the floor#Heals 1 Red Heart",
    },
    {
        id: "355",
        name: "Mom's Pearls",
        desc: "↑ +0.38 Range up#↑ +1 Luck up#+1 Soul Heart",
    },
    {
        id: "356",
        name: "Car Battery",
        desc: "Causes your active item to activate twice when used",
    },
    {
        id: "357",
        name: "Box of Friends",
        desc: "Duplicate your familiars for the current room#If you have no familiars, {{Collectible113}}Demon Baby will spawn for the current room",
    },
    {
        id: "358",
        name: "The Wiz",
        desc: "Fire 2 tears at once diagonally, similar to R U A WIZARD#Spectral tears",
    },
    {
        id: "359",
        name: "8 Inch Nails",
        desc: "↑ +1.5 Damage up#Increases knockback",
    },
    {
        id: "360",
        name: "Incubus",
        desc: "Gain a demonic familiar that shoots the same tears as Isaac#Deals 75% of your damage unless playing as Lilith",
    },
    {
        id: "361",
        name: "Fate's Reward",
        desc: "Fires tears and copies your tear damage",
    },
    {
        id: "362",
        name: "Lil Chest",
        desc: "Spawns a random pickup every few rooms",
    },
    {
        id: "363",
        name: "Sworn Protector",
        desc: "Orbital familiar#Deals 105 contact damage per second#Blocks and attracts bullets#Blocking 10 tear in one room drops an Eternal Heart",
    },
    {
        id: "364",
        name: "Friend Zone",
        desc: "Orbital familiar#Deals 45 contact damage per second",
    },
    {
        id: "365",
        name: "Lost Fly",
        desc: "Moves along walls/obstacles in the room#Deals 105 contact damage per second",
    },
    {
        id: "366",
        name: "Scatter Bombs",
        desc: "+5 bombs#Causes your bombs to explode into 4-5 tiny bombs",
    },
    {
        id: "367",
        name: "Sticky Bombs",
        desc: "+5 bombs#When a bomb kills an enemy, it spawns blue spiders#Causes your bombs to stick to enemies",
    },
    {
        id: "368",
        name: "Epiphora",
        desc: "Shooting in one direction gradually increases your fire rate by up to 200%",
    },
    {
        id: "369",
        name: "Continuum",
        desc: "↑ +3 Range up#Spectral tears#Tears travel through walls and appear out of the opposite wall",
    },
    {
        id: "370",
        name: "Mr. Dolly",
        desc: "↑ +0.7 Tears up#↑ +1.5 Range up#Spawns 3 random hearts when picked up",
    },
    {
        id: "371",
        name: "Curse of the Tower",
        desc: "Spawn 6 troll bombs every time you get hit#These are affected by bomb items",
    },
    {
        id: "372",
        name: "Charged Baby",
        desc: "Random chance to drop a battery or freeze all enemies in the room#Chance to add one charge to your active item",
    },
    {
        id: "373",
        name: "Dead Eye",
        desc: "↑ +25% Damage up for every tear that successfully hits an enemy (max +100%)#Chance to lose the multiplier when you miss",
    },
    {
        id: "374",
        name: "Holy Light",
        desc: "10% chance to shoot Holy tears, which will spawn a beam of light on hit#The beam deals 3x your damage#50% chance at 9 Luck",
    },
    {
        id: "375",
        name: "Host Hat",
        desc: "Grants explosion immunity#20% chance to block tears#Blocks projectiles falling from above",
    },
    {
        id: "376",
        name: "Restock",
        desc: "Shops instantly restock their items when you buy them#Restocked items slowly increase in price again",
    },
    {
        id: "377",
        name: "Bursting Sack",
        desc: "Spider enemies no longer target or deal contact damage to Isaac",
    },
    {
        id: "378",
        name: "No. 2",
        desc: "Firing tears for 3 seconds drops a Butt Bomb",
    },
    {
        id: "379",
        name: "Pupula Duplex",
        desc: "Tears get a much larger hitbox#Spectral tears",
    },
    {
        id: "380",
        name: "Pay To Play",
        desc: "+5 coins#You can open doors with coins instead of keys",
    },
    {
        id: "381",
        name: "Eden's Blessing",
        desc: "↑ +0.7 Tears up#Gives you a random item at the start of your next run",
    },
    {
        id: "382",
        name: "Friendly Ball",
        desc: "Can be thrown at enemies to capture them#Next usage will respawn the same enemy as a friendly companion#Walking over the ball after capture will instantly recharge the item",
    },
    {
        id: "383",
        name: "Tear Detonator",
        desc: "Detonate any tears currently on the screen, causing each one to split into 6 more tears which will spread in a circle",
    },
    {
        id: "384",
        name: "Lil Gurdy",
        desc: "Will launch and slide around the room#Deals 5-20 contact damage per hit depending on charge duration",
    },
    {
        id: "385",
        name: "Bumbo",
        desc: "Picks up nearby coins#Levels up after getting 6, 12, and 24 coins#LVL2: Chance to spawn item after room clears#LVL3: Fires tears that can drop coins on hit#LVL4: Chases enemies, occasionally dropping bombs, and can spawn item on coin pickup",
    },
    {
        id: "386",
        name: "D12",
        desc: "Rerolls any grid object into another random type of object (e.g. poop, pots, TNT, red poop, stone blocks etc.)",
    },
    {
        id: "387",
        name: "Censer",
        desc: "Creates a huge aura of light that slows down enemies and projectiles inside of it",
    },
    {
        id: "388",
        name: "Key Bum",
        desc: "Converts Keys into random chests",
    },
    {
        id: "389",
        name: "Rune Bag",
        desc: "Drops a random rune every 7-8 rooms#Can also drop Soul Stones",
    },
    {
        id: "390",
        name: "Seraphim",
        desc: "Fires Sacred Heart tears#Deals 10 damage per shot",
    },
    {
        id: "391",
        name: "Betrayal",
        desc: "Every time Isaac takes damage, every enemy in the room gets charmed",
    },
    {
        id: "392",
        name: "Zodiac",
        desc: "Gives you a random zodiac item effect every floor",
    },
    {
        id: "393",
        name: "Serpent's Kiss",
        desc: "15% chance to shoot poison tears#Poison enemies on contact#Enemies killed with contact poison have a 20% chance to drop a Black Heart",
    },
    {
        id: "394",
        name: "Marked",
        desc: "Fire tears automatically directed at a red target on the ground which is controlled by the player#↑ +0.7 Tears up#↑ +3 Range up#Familiars shoot towards the target",
    },
    {
        id: "395",
        name: "Tech X",
        desc: "Charge and fire a laser ring that travels across the room#Higher damage with longer charge#100% damage on full charge",
    },
    {
        id: "396",
        name: "Ventricle Razor",
        desc: "Creates up to two portals to travel between them#Can be placed in different rooms",
    },
    {
        id: "397",
        name: "Tractor Beam",
        desc: "Isaac's tears now travel directly forward following a beam of light, but will also move sideways based on your player movement#↑ +1 Fire Rate up#↑ +1.5 Range up#↑ +0.16 Shot Speed up",
    },
    {
        id: "398",
        name: "God's Flesh",
        desc: "Tears can shrink enemies#Shrunk enemies can be crushed and killed by walking over them",
    },
    {
        id: "399",
        name: "Maw of the Void",
        desc: "After firing tears for 3 seconds, a red cross appears on Isaac's head. Upon releasing the fire button, creates a black brimstone ring",
    },
    {
        id: "400",
        name: "Spear of Destiny",
        desc: "Spawns a spear in front of you#Deals 2 times your damage#Chance to fear enemies on contact",
    },
    {
        id: "401",
        name: "Explosivo",
        desc: "25% chance to fire sticky bomb tears#They explode after a few seconds and deal your damage + 60",
    },
    {
        id: "402",
        name: "Chaos",
        desc: "Pedestals will now be chosen from random item pools#Spawns 1-6 random pickups",
    },
    {
        id: "403",
        name: "Spider Mod",
        desc: "Allows you to see your tear damage and the health bars of all enemies#Inflicts a random status effect on contact#Will randomly drop batteries",
    },
    {
        id: "404",
        name: "Farting Baby",
        desc: "Blocks projectiles#If hit, it will fart, which will charms, poison or knockback enemies#The farts deal 5-6 damage",
    },
    {
        id: "405",
        name: "GB Bug",
        desc: "{{Throwable}} {{ColorOrange}}Throwable{{CR}} (double-tap shoot)#Rerolls enemies and pickups it comes in contact with",
    },
    {
        id: "406",
        name: "D8",
        desc: "Reroll your stats#Will only affect damage, tears, range and speed",
    },
    {
        id: "407",
        name: "Purity",
        desc: "↑ Boosts one of your stats depending on the color of the aura around you#When you take damage and after you enter a new room, you will get a new aura:#{{ColorRed}}Red{{CR}} = +4 Damage up#{{ColorBlue}}Blue{{CR}} = +2 Fire Rate up#{{ColorYellow}}Yellow{{CR}} = +0.5 Speed up#{{ColorOrange}}Orange{{CR}} = +3 Range up",
    },
    {
        id: "408",
        name: "Athame",
        desc: "When you take damage, a black brimstone ring will appear around Isaac",
    },
    {
        id: "409",
        name: "Empty Vessel",
        desc: "+2 Black Hearts#When Isaac has no Red Hearts, gain flight and chance to trigger a shield",
    },
    {
        id: "410",
        name: "Evil Eye",
        desc: "3.33% chance to shoot an eye across the screen which fires tears in the same direction as Isaac",
    },
    {
        id: "411",
        name: "Lusty Blood",
        desc: "↑ +0.5 Damage up for each enemy killed in current room#Maximum of +5 Damage up after 10 kills",
    },
    {
        id: "412",
        name: "Cambion Conception",
        desc: "After taking damage 15 times, Isaac gains a permanent demon familiar#Up to 4 familiars possible",
    },
    {
        id: "413",
        name: "Immaculate Conception",
        desc: "After picking up 15 hearts, Isaac gains a permanent angelic familiar#Up to 5 familiars possible",
    },
    {
        id: "414",
        name: "More Options",
        desc: "Two items now spawn in all {{TreasureRoom}}Treasure Rooms#You can only choose one",
    },
    {
        id: "415",
        name: "Crown Of Light",
        desc: "+2 Soul Hearts#If you don't have any damaged Red Heart containers:#↑ +100% Damage up#↑ +1.5 Range up#↓ -0.3 Shot Speed down#Deactivates for the current room when damaged at all",
    },
    {
        id: "416",
        name: "Deep Pockets",
        desc: "Spawns 1-3 coins if a room didn't yield a reward#Increases coin cap to 999",
    },
    {
        id: "417",
        name: "Succubus",
        desc: "Bounces around the room with a damaging aura, dealing 7.5-10 damage every second#↑ +50% damage while standing in the aura",
    },
    {
        id: "418",
        name: "Fruit Cake",
        desc: "Gives you a different tear effect with every tear that you fire",
    },
    {
        id: "419",
        name: "Teleport 2.0",
        desc: "Teleports you to another random room that has not been explored yet#Hierarchy: {{Room}}>{{BossRoom}}>{{SuperSecretRoom}}>{{Shop}}>{{TreasureRoom}}>{{SacrificeRoom}}> {{DiceRoom}}>{{Library}}>{{CursedRoom}}>{{MiniBoss}}>{{ChallengeRoom}}>{{IsaacsRoom}}> {{ArcadeRoom}}>{{ChestRoom}}>{{Planetarium}}>{{SecretRoom}}>{{DevilRoom}}{{AngelRoom}}> Error-Room",
    },
    {
        id: "420",
        name: "Black Powder",
        desc: "Walking in a circle will spawn a pentagram symbol on the floor, which deals 10 damage per tick",
    },
    {
        id: "421",
        name: "Kidney Bean",
        desc: "Applies charm effect to any enemies in close range",
    },
    {
        id: "422",
        name: "Glowing Hour Glass",
        desc: "Rewind time and put you back in the previous room, in the same state you were in at that moment",
    },
    {
        id: "423",
        name: "Circle of Protection",
        desc: "Large halo around you, dealing your damage on contact every second#Chance to reflect enemy projectiles",
    },
    {
        id: "424",
        name: "Sack Head",
        desc: "Pickups have a 33% chance to be replaced with a sack#Spawns a sack",
    },
    {
        id: "425",
        name: "Night Light",
        desc: "Spawns a cone of light in front of you that slows enemies and projectiles inside of it",
    },
    {
        id: "426",
        name: "Obsessed Fan",
        desc: "Follows your exact movement on a 0.66 second delay#Deals 30 contact damage per second",
    },
    {
        id: "427",
        name: "Mine Crafter",
        desc: "Spawns a pushable TNT barrel#If used a second time in the same room while the last TNT barrel is still there, it will remotely explode",
    },
    {
        id: "428",
        name: "PJs",
        desc: "+4 Soul Hearts#Fully restores your red health",
    },
    {
        id: "429",
        name: "Head of the Keeper",
        desc: "Enemies have a 5% chance to drop a Penny when hit with your tears",
    },
    {
        id: "430",
        name: "Papa Fly",
        desc: "Follows your movement pattern on a 0.66 second delay#Fires tears at nearby enemies that deal damage equal to your damage",
    },
    {
        id: "431",
        name: "Multidimensional Baby",
        desc: "Follows your movement pattern on a 0.66 second delay#Tears that pass through it will split up and gain a speed boost",
    },
    {
        id: "432",
        name: "Glitter Bombs",
        desc: "+5 bombs#Bombs have a chance to drop random pickups or charm enemies when they explode#",
    },
    {
        id: "433",
        name: "My Shadow",
        desc: "Each time you take damage, it will apply a fear effect to all enemies and spawn a friendly black charger#The charger deals 5 damage per second",
    },
    {
        id: "434",
        name: "Jar of Flies",
        desc: "Every time you kill an enemy a blue fly will be added to the Jar#Up to 20 flies#Using the item will release all the flies",
    },
    {
        id: "435",
        name: "Lil Loki",
        desc: "Shoots 4 tears in a cross pattern#Deals 3.5 damage per shot",
    },
    {
        id: "436",
        name: "Milk!",
        desc: "After taking damage, you gain a Tears up for the rest of the room",
    },
    {
        id: "437",
        name: "D7",
        desc: "Respawn all enemies of the room#Allows you to farm room clear rewards",
    },
    {
        id: "438",
        name: "Binky",
        desc: "+1 Soul Heart#↑ +0.75 Tears up#↑ Makes Isaac very small, reducing his hitbox size",
    },
    {
        id: "439",
        name: "Mom's Box",
        desc: "Spawns a random trinket#↑ +1 Luck while held#While held, doubles the effect of trinkets",
    },
    {
        id: "440",
        name: "Kidney Stone",
        desc: "Chance to charge up an attack while firing#Release the fire button to fire a kidney stone followed by a rapid spray of tears",
    },
    {
        id: "441",
        name: "Mega Blast",
        desc: "Fires a huge Mega Satan laser for 15 seconds#The laser persists between rooms and floors",
    },
    {
        id: "442",
        name: "Dark Prince's Crown",
        desc: "!!! While at 1 full Red Heart:#↑ +2 Fire Rate up#↑ +1.5 Range up#↑ +0.2 Shot Speed up#Doesn't work with characters without Red Hearts",
    },
    {
        id: "443",
        name: "Apple!",
        desc: "Randomly fire razor blades which deal 400% damage#↑ +0.3 Tears up",
    },
    {
        id: "444",
        name: "Lead Pencil",
        desc: "Every 15 tears fired, you fire a cluster of tears",
    },
    {
        id: "445",
        name: "Dog Tooth",
        desc: "↑ +0.3 Damage up#↑ +0.1 Speed up#A wolf howls if you enter a room next to a {{SecretRoom}}{{SuperSecretRoom}}Secret Room#A barking sound will play when entering a room with a crawlspace under a rock",
    },
    {
        id: "446",
        name: "Dead Tooth",
        desc: "While firing, you get a green aura that poisons any enemies in it#The poison deals your damage",
    },
    {
        id: "447",
        name: "Linger Bean",
        desc: "While firing without pause, spawns a poop cloud every 7.5 seconds#The cloud deals 3.5 damage 5 times a second#Cloud lasts 15 seconds#Can be moved by shooting it",
    },
    {
        id: "448",
        name: "Shard of Glass",
        desc: "Upon taking Red Heart damage, spew tears around you#Control direction with shooting buttons#Deals half a heart of damage every 20 seconds#Stop bleeding by healing Red Hearts#Chance to drop a Red Heart upon taking damage",
    },
    {
        id: "449",
        name: "Metal Plate",
        desc: "+1 Soul Heart#Enemy bullets have a 25% chance to be reflected as concussive tears",
    },
    {
        id: "450",
        name: "Eye of Greed",
        desc: "Every 20 tears, shoot a coin tear that turns enemies into gold#This costs 1 coin#Hit enemies drop a coin",
    },
    {
        id: "451",
        name: "Tarot Cloth",
        desc: "Drops a random card or rune on pickup#Some cards gain an extra or doubled effect",
    },
    {
        id: "452",
        name: "Varicose Veins",
        desc: "When taking damage, fire 10 tears in a circle around you#The tears deal 125% your damage",
    },
    {
        id: "453",
        name: "Compound Fracture",
        desc: "↑ +0.38 Range up#Bone tears#Tears shatter into 1-3 smaller bone shards upon hitting anything",
    },
    {
        id: "454",
        name: "Polydactyly",
        desc: "You can carry two cards, runes or pills#Spawns a card, pill or rune on pickup",
    },
    {
        id: "455",
        name: "Dad's Lost Coin",
        desc: "↑ +0.38 Range up#Spawns a lucky penny",
    },
    {
        id: "456",
        name: "Midnight Snack",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "457",
        name: "Cone Head",
        desc: "+1 Soul Heart#20% chance to ignore damage",
    },
    {
        id: "458",
        name: "Belly Button",
        desc: "Spawns a random trinket on pickup#Grants 1 extra trinket slot",
    },
    {
        id: "459",
        name: "Sinus Infection",
        desc: "20% chance to shoot sticky poison tears#Deals your damage each second#Sticks for 10 seconds",
    },
    {
        id: "460",
        name: "Glaucoma",
        desc: "5% chance to shoot concussive tears#Makes the screen slightly darker",
    },
    {
        id: "461",
        name: "Parasitoid",
        desc: "15% chance to shoot egg sacks#Spawns slowing creep on hit#Spawns a blue spider or fly on hit",
    },
    {
        id: "462",
        name: "Eye of Belial",
        desc: "↑ +1.5 Range up#Grants piercing tears#After hitting the first enemy, the tear deals double damage and gains a homing effect",
    },
    {
        id: "463",
        name: "Sulfuric Acid",
        desc: "↑ +0.3 Damage up#Chance to destroy rocks and open doors with your tears",
    },
    {
        id: "464",
        name: "Glyph of Balance",
        desc: "+2 Soul Hearts#Champion enemies and room drops appear more frequently#Priority of spawned pickups depends on what the player is missing most of",
    },
    {
        id: "465",
        name: "Analog Stick",
        desc: "↑ +0.3 Tears up#Allows you to fire tears diagonally by firing in two directions",
    },
    {
        id: "466",
        name: "Contagion",
        desc: "First killed enemy in the room will explode and poison all nearby enemies",
    },
    {
        id: "467",
        name: "Finger!",
        desc: "Deals constant 10% of your damage to enemies in the direction the finger points at",
    },
    {
        id: "468",
        name: "Shade",
        desc: "Follows your movement delayed by 1 seconds#Deals 30 contact damage per second",
    },
    {
        id: "469",
        name: "Depression",
        desc: "Leaves trail of creep#Creep deals 6 damage per second#Enemies touching the cloud can spawn a holy light beam",
    },
    {
        id: "470",
        name: "Hushy",
        desc: "Bounces around the room#Deals contact damage#Will stop moving when you are shooting#When stopped, it can block projectiles",
    },
    {
        id: "471",
        name: "Lil Monstro",
        desc: "Chargable shotgun attack similar to {{Collectible229}}Monstro's Lung#Each tear deals 3.5 damage",
    },
    {
        id: "472",
        name: "King Baby",
        desc: "Other familiars follow it and shoot automatically at enemies#Stops moving when you are shooting#Will teleport back to you when you stop shooting",
    },
    {
        id: "473",
        name: "Big Chubby",
        desc: "Charges forwards very slow#Deals 40.5 contact damage per second",
    },
    {
        id: "474",
        name: "Broken Glass Cannon",
        desc: "Turns into Glass Cannon when used",
    },
    {
        id: "475",
        name: "Plan C",
        desc: "!!! SINGLE USE !!!#Deals 9,999,999 damage to all enemies and kills you 3 seconds later",
    },
    {
        id: "476",
        name: "D1",
        desc: "Duplicates 1 random pickup in the current room#Duplicated pickups may not be identical to the original",
    },
    {
        id: "477",
        name: "Void",
        desc: "!!! When used, consumes all pedestal items in the room#Active item: Its effect will activate every future use of Void#↑ Passive item: Small stat upgrade to two random stats",
    },
    {
        id: "478",
        name: "Pause",
        desc: "Freezes all enemies in the room until you start shooting again#Touching a frozen enemy will hurt you#Enemies unfreeze after 30 seconds",
    },
    {
        id: "479",
        name: "Smelter",
        desc: "Consumes your trinket and gives you the effect permanently#More trinkets appear",
    },
    {
        id: "480",
        name: "Compost",
        desc: "Converts pickups into blue flies or spiders#Doubles your current blue flies/spiders#Spawns 1 blue fly or spider when you don't have any",
    },
    {
        id: "481",
        name: "Dataminer",
        desc: "When used, ↑/↓ small amount on random stat#Random tear effect for current room#Corrupts all sprites and music for current room",
    },
    {
        id: "482",
        name: "Clicker",
        desc: "Transforms you into a different character#Removes the last item you collected",
    },
    {
        id: "483",
        name: "Mama Mega!",
        desc: "!!! SINGLE USE !!!#Affects whole floor#Explodes all objects#Deals 200 damage to all enemies#Opens the door to Boss Rush, Hush and all secret rooms#!!! If you have a Golden Bomb, consumes it on use instead of Mama Mega",
    },
    {
        id: "484",
        name: "Wait What?",
        desc: "Upon use, pushes enemies away and spawn a wave of rocks#Can open rooms and break rocks",
    },
    {
        id: "485",
        name: "Crooked Penny",
        desc: "50% chance to double all items, consumables and chests in room#50% chance to remove items / pickups in room and spawn 1 coin",
    },
    {
        id: "486",
        name: "Dull Razor",
        desc: "Hurts you without damaging you#Can trigger item effects",
    },
    {
        id: "487",
        name: "Potato Peeler",
        desc: "Removes one Red Heart Container and gives you ↑ +0.2 Damage up and a {{Collectible73}}Cube of Meat",
    },
    {
        id: "488",
        name: "Metronome",
        desc: "Grants a random item's effect for the current room",
    },
    {
        id: "489",
        name: "D Infinity",
        desc: "Acts as any die item except for {{Collectible723}}Spindown Dice#Change the current die with the drop key#Charge time varies based on the current die and updates when used",
    },
    {
        id: "490",
        name: "Eden's Soul",
        desc: "!!! SINGLE USE !!!#Spawns 2 random items depending on the current rooms item pool",
    },
    {
        id: "491",
        name: "Acid Baby",
        desc: "Drops a random pill every 7 rooms#Using a pill poisons all enemies in the room",
    },
    {
        id: "492",
        name: "YO LISTEN!",
        desc: "↑ +1 Luck up#Highlights the location of secret rooms, tinted rocks and crawlspaces",
    },
    {
        id: "493",
        name: "Adrenaline",
        desc: "↑ Damage up for every empty Red Heart container#Follows a formula, some examples are:#+0.3 at 1#+0.92 at 2#+1.76 at 3#+2.79 at 4#+3.98 at 5",
    },
    {
        id: "494",
        name: "Jacob's Ladder",
        desc: "Tears spawn a spark of electricity on impact#Sparks deal half your damage#Sparks can jump between enemies",
    },
    {
        id: "495",
        name: "Ghost Pepper",
        desc: "8% chance to shoot a blue fire that blocks enemy shots and deals contact damage#50% chance at 10 Luck#The flame disappears after 2 seconds",
    },
    {
        id: "496",
        name: "Euthanasia",
        desc: "3.33% chance to shoot needles#50% chance at 15 Luck#Needles kill normal enemies instantly, bursting them into 10 tears#Needles deal 3x damage against bosses",
    },
    {
        id: "497",
        name: "Camo Undies",
        desc: "Confuse all enemies and camouflage yourself when entering a room until you start shooting",
    },
    {
        id: "498",
        name: "Duality",
        desc: "Spawns {{DevilRoom}}Devil AND {{AngelRoom}}Angel Room doors#When entering one, the other disappears",
    },
    {
        id: "499",
        name: "Eucharist",
        desc: "100% chance to find an {{AngelRoom}}Angel Room",
    },
    {
        id: "500",
        name: "Sack of Sacks",
        desc: "Spawns a sack every 5-6 rooms",
    },
    {
        id: "501",
        name: "Greed's Gullet",
        desc: "Gain 1 Heart Container for every 25 coins you have#{{Player14}}/{{Player33}}Keeper can gain additional Coin Hearts#{{Collectible416}} Gain 1 Heart Container for every 100 coins you have past 99",
    },
    {
        id: "502",
        name: "Large Zit",
        desc: "While firing, occasionally shoot a white creep tear that deals double damage#Shoot a white creep tear when damaged",
    },
    {
        id: "503",
        name: "Little Horn",
        desc: "5% chance to shoot tears that summon a Big Horn hand#The hand kills enemies instantly and deals damage to bosses#Running into enemies deals 3.5 damage to them",
    },
    {
        id: "504",
        name: "Brown Nugget",
        desc: "Spawns a fly turret that shoots at enemies#Each shot deals 3.5 damage",
    },
    {
        id: "505",
        name: "Poke Go",
        desc: "Chance to spawn a charmed enemy when entering a hostile room",
    },
    {
        id: "506",
        name: "Backstabber",
        desc: "If tears hit an enemy in the back, they do double damage and cause bleeding, which deals 10% damage of the enemy's max health every 5 seconds",
    },
    {
        id: "507",
        name: "Sharp Straw",
        desc: "Deals your damage + 10% of the enemy's max health#Affects all enemies in the room#Chance to drop half hearts when it deals damage",
    },
    {
        id: "508",
        name: "Mom's Razor",
        desc: "Orbital that causes bleeding, which deals 10% damage of the enemy's max health every 5 seconds#Deals 300% your damage on contact per second#Does not block shots",
    },
    {
        id: "509",
        name: "Bloodshot Eye",
        desc: "Orbital that shoots a tear every 1/3rd second when enemy is nearby#Deals 3.5 damage per tear#Deals 30 contact damage per second",
    },
    {
        id: "510",
        name: "Delirious",
        desc: "Spawns a friendly white delirium version of a boss for the current room",
    },
    {
        id: "511",
        name: "Angry Fly",
        desc: "Orbits around a random enemy until that enemy dies#Deals 30 contact damage per second to other enemies",
    },
    {
        id: "512",
        name: "Black Hole",
        desc: "Throwable black hole, which sucks in everything#Deals 0.4 damage every tick#Destroys nearby rocks#Lasts 6 seconds",
    },
    {
        id: "513",
        name: "Bozo",
        desc: "↑ +0.1 Damage up#+1 Soul Heart#Random chance to charm/fear an enemy#Random chance to spawn a rainbow poop upon taking damage",
    },
    {
        id: "514",
        name: "Broken Modem",
        desc: "Causes random enemies to 'lag' at random intervals, causing them to shortly freeze#Chance to freeze and remove enemy bullets#25% chance to double room clear drops",
    },
    {
        id: "515",
        name: "Mystery Gift",
        desc: "!!! SINGLE USE !!!#Spawns a random item from the current room's item pool#Chance to spawn Lump of Coal or The Poop instead",
    },
    {
        id: "516",
        name: "Sprinkler",
        desc: "Spawns a Sprinkler that rotates in a circle, spraying your tears in all directions",
    },
    {
        id: "517",
        name: "Fast Bombs",
        desc: "+7 Bombs#Allows you to rapidly place bombs on the ground#Bombs don't knockback each other",
    },
    {
        id: "518",
        name: "Buddy in a Box",
        desc: "Familiar which looks like a random coop Baby#Has a random tear effect#Will be randomized every floor",
    },
    {
        id: "519",
        name: "Lil Delirium",
        desc: "A familiar that transforms into other random familiars every 10 seconds",
    },
    {
        id: "520",
        name: "Jumper Cables",
        desc: "+1 charge for your active item for every 15 enemies killed",
    },
    {
        id: "521",
        name: "Coupon",
        desc: "When used, causes one random item in the {{Shop}}Shop or {{DevilRoom}}Devil Room to become free#While held, guarantees one Shop item will be on sale",
    },
    {
        id: "522",
        name: "Telekinesis",
        desc: "Enemy projectiles close to you are held in place for 3 seconds#They get thrown away from you afterwards#Recharges after 3 seconds",
    },
    {
        id: "523",
        name: "Moving Box",
        desc: "When used, stores up to 10 pickups from the current room#Using it again will put them back on the floor again#This allows you to move things between rooms",
    },
    {
        id: "524",
        name: "Technology Zero",
        desc: "Tears will be connected with beams of electricity#Electricity deals 33% of your damage",
    },
    {
        id: "525",
        name: "Leprosy",
        desc: "Taking damage will spawn a projectile blocking orbital#Max 3 orbitals at the same time#Orbitals are destroyed if they take too much damage",
    },
    {
        id: "526",
        name: "7 Seals",
        desc: "Spawns small horsemen familiars that spawn their respective locusts#Horsemen changes every 10 seconds",
    },
    {
        id: "527",
        name: "Mr. ME!",
        desc: "!!! Familiar that can do tasks for you:#Opening doors & chests, Bring items, Steal from the shop / Devil, fight enemies, explode, and activate pressure plates",
    },
    {
        id: "528",
        name: "Angelic Prism",
        desc: "Orbital prism#Tears hitting it will split into 4",
    },
    {
        id: "529",
        name: "Pop!",
        desc: "Tears will behave like billiard balls",
    },
    {
        id: "530",
        name: "Death's List",
        desc: "Grants a reward if you kill enemies in the order they are marked in",
    },
    {
        id: "531",
        name: "Haemolacria",
        desc: "Tears fly in an arc and burst into smaller tears on impact#↑ +1 Damage up#↑ +50% Damage Multiplier#↓ Tears down#↓ -20% Range down",
    },
    {
        id: "532",
        name: "Lachryphagy",
        desc: "Tears slow down while traveling#Upon stopping, they explode in 8 smaller tears#Tears can be fired in other tears, making them bigger",
    },
    {
        id: "533",
        name: "Trisagion",
        desc: "Fire piercing blasts of light#They deal 33% damage but can hit enemies multiple times",
    },
    {
        id: "534",
        name: "Schoolbag",
        desc: 'Allows holding 2 active items#Switch between them by pressing the Drop button (hold button as "The Forgotten")',
    },
    {
        id: "535",
        name: "Blanket",
        desc: "+1 Soul Heart#Heals 1 Red Heart#Grants a shield when entering a boss room",
    },
    {
        id: "536",
        name: "Sacrificial Altar",
        desc: "!!! SINGLE USE !!!#Sacrifice 1-2 familiars to spawn a Devil item#Turns your blue spiders/flies into coins",
    },
    {
        id: "537",
        name: "Lil Spewer",
        desc: "Spawns a random pill#Familiar that fires a line of creep#Creep type changes everytime the player uses a pill",
    },
    {
        id: "538",
        name: "Marbles",
        desc: "Spawns 3 random trinkets#Taking damage can add the effect of your trinket permanently",
    },
    {
        id: "539",
        name: "Mystery Egg",
        desc: "Spawn a charmed enemy when you get hit#Spawns stronger friends the more rooms are cleared without taking damage",
    },
    {
        id: "540",
        name: "Flat Stone",
        desc: "Tears bounce off the floor#Tears cause splash damage on every bounce",
    },
    {
        id: "541",
        name: "Marrow",
        desc: "+1 Bone Heart#Spawns 3 Red Hearts",
    },
    {
        id: "542",
        name: "Slipped Rib",
        desc: "Orbital#Reflects projectiles",
    },
    {
        id: "543",
        name: "Hallowed Ground",
        desc: "Spawn white poop when you get hit#While inside the poop's aura:#↑ +25% Damage up#↑ +250% Fire Rate up#Homing tears#Chance to block damage",
    },
    {
        id: "544",
        name: "Pointy Rib",
        desc: "Nail that levitates in front of Isaac#Deals your damage 6 times per second",
    },
    {
        id: "545",
        name: "Book of the Dead",
        desc: "Spawns a bone orbital or charmed bony per enemy killed in the current room",
    },
    {
        id: "546",
        name: "Dad's Ring",
        desc: "Grants an aura that freezes enemies in place",
    },
    {
        id: "547",
        name: "Divorce Papers",
        desc: "+1 Bone Heart#↑ +0.7 Tears up#Spawns a Mysterious Paper trinket",
    },
    {
        id: "548",
        name: "Jaw Bone",
        desc: "Boomerang-like familiar#Deals 7 contact damage#Can retrieve pickups",
    },
    {
        id: "549",
        name: "Brittle Bones",
        desc: "Replaces all your Red Heart containers with 6 Bone Hearts#When a Bone Heart is lost:#Fires 8 bone tears in all directions#↑ +0.4 Fire Rate up permanently",
    },
    {
        id: "550",
        name: "Broken Shovel",
        desc: "Mom's Foot will constantly attack you#Using it stops Mom's Foot for current room#!!! (Try to beat Boss Rush with it!)",
    },
    {
        id: "551",
        name: "Broken Shovel",
        desc: 'Second part of a broken shovel#!!! Use the shovel on the hill of dirt in the "Dark Room"',
    },
    {
        id: "552",
        name: "Mom's Shovel",
        desc: 'Spawns trapdoor to next floor#!!! Use the shovel on the hill of dirt in the "Dark Room"#!!! Unlocks something cool',
    },
    {
        id: "553",
        name: "Mucormycosis",
        desc: "25% chance to shoot sticky spore tears#Spores blow up after 2.5 seconds, dealing damage, poisoning nearby enemies and releasing more spores",
    },
    {
        id: "554",
        name: "2Spooky",
        desc: "Fears enemies in a small radius around you",
    },
    {
        id: "555",
        name: "Golden Razor",
        desc: "Converts 5 coins into +1.2 Damage up for the current room#Gain 5 coins on pickup",
    },
    {
        id: "556",
        name: "Sulfur",
        desc: "Grants {{Collectible118}}Brimstone for the current room",
    },
    {
        id: "557",
        name: "Fortune Cookie",
        desc: "Gives Isaac a fortune, Soul Heart, tarot card, or trinket",
    },
    {
        id: "558",
        name: "Eye Sore",
        desc: "Chance to shoot 1-3 extra tears in random directions",
    },
    {
        id: "559",
        name: "120 Volt",
        desc: "Repeatedly zaps close enemies#Electricity deals 75% of your damage",
    },
    {
        id: "560",
        name: "It Hurts",
        desc: "Release a ring of 10 tears which deal 10 damage and get tears up for the room when hit#↑ +1.2 Fire Rate up for first hit#↑ +0.4 for each additional hit",
    },
    {
        id: "561",
        name: "Almond Milk",
        desc: "↑ 4x Fire Rate up#↓ -70% Damage down#Tears gain random worm trinket effects and some item effects",
    },
    {
        id: "562",
        name: "Rock Bottom",
        desc: "Prevents stats from being lowered for the rest of the run",
    },
    {
        id: "563",
        name: "Nancy Bombs",
        desc: "+5 bombs#Bombs explode with a random bomb effect",
    },
    {
        id: "564",
        name: "A Bar of Soap",
        desc: "↑ +0.5 Tears up#↑ +0.2 Shot Speed up",
    },
    {
        id: "565",
        name: "Blood Puppy",
        desc: "Familiar that chases enemies#After killing 15 enemies, it deals more damage, drops half a heart every 10 kills, but will also try to hurt you#After killing 40 enemies, it deals even more damage, drops full hearts, and can destroy rocks#Attacking it returns it to normal",
    },
    {
        id: "566",
        name: "Dream Catcher",
        desc: "+1 half Soul Heart when entering a new floor#Displays upcoming Treasure Room item and boss in the stage transition nightmare",
    },
    {
        id: "567",
        name: "Paschal Candle",
        desc: "↑ +0.4 Fire Rate up for every room cleared without taking damage#Up to +2 Fire Rate possible",
    },
    {
        id: "568",
        name: "Divine Intervention",
        desc: "Double tapping a fire key creates a shield#Shield lasts 1 second, pushes enemies away and reflects enemy projectiles and lasers",
    },
    {
        id: "569",
        name: "Blood Oath",
        desc: "Stabs you at the beginning of each floor, draining all but half a Red Heart#Increases stats for the floor:#↑ Damage + 0.15 * HeartsLost^2#↑ Speed + 0.05*HeartsLost",
    },
    {
        id: "570",
        name: "Playdough Cookie",
        desc: "Grants multicolored tears with different status effects",
    },
    {
        id: "571",
        name: "Orphan Socks",
        desc: "Prevents damage from creep and floor spikes#↑ +0.3 Speed up#↑ +2 Soul Hearts",
    },
    {
        id: "572",
        name: "Eye of the Occult",
        desc: "Controllable tears#↑ +1 Damage up#↑ +2 Range up#↓ -0.16 Shot Speed down",
    },
    {
        id: "573",
        name: "Immaculate Heart",
        desc: "↑ +1 Health up#Full health#↑ +20% Damage up#20% chance to shoot additional orbiting spectral tears",
    },
    {
        id: "574",
        name: "Monstrance",
        desc: "Gain two circular auras that damage enemies#The inner aura deals more damage",
    },
    {
        id: "575",
        name: "The Intruder",
        desc: "A familiar buried inside your head, firing 4 slowing tears#Upon taking damage, can exit the head",
    },
    {
        id: "576",
        name: "Dirty Mind",
        desc: "All Dip (small poop) enemies are friendly#Destroying poop spawns 1-4 Dips#Dip type depends on the poop type#Rocks may be replaced with poops",
    },
    {
        id: "577",
        name: "Damocles",
        desc: "{{Warning}} SINGLE USE {{Warning}}#Spawns a sword above your head, which doubles all item pedestals#Does not double Shop, Chest, or Devil deal items#!!! Kills you at a random time after taking damage from an enemy",
    },
    {
        id: "578",
        name: "Free Lemonade",
        desc: "Creates a large pool of yellow creep",
    },
    {
        id: "579",
        name: "Spirit Sword",
        desc: "Instead of tears, Isaac swings a sword#Deals 3x your damage#Does a spin attack + projectile shot on charge up#Fire projectiles with normal swings on full health",
    },
    {
        id: "580",
        name: "Red Key",
        desc: "Creates a new room adjacent to a viable wall, indicated by an outline of a door#Rooms can be special rooms#A room outside the 13x13 floor map will teleport you to the I AM ERROR room",
    },
    {
        id: "581",
        name: "Psy Fly",
        desc: "Fly orbital familiar#Chases and deflects projectiles#Deals contact damage",
    },
    {
        id: "582",
        name: "Wavy Cap",
        desc: "↑ +0.75 Fire Rate up#↓ -0.03 Speed down#Distorts the screen#Effect can be stacked",
    },
    {
        id: "583",
        name: "Rocket in a Jar",
        desc: "+5 bombs#If shooting, placed bombs turn into rockets that fire in the shooting direction",
    },
    {
        id: "584",
        name: "Book of Virtues",
        desc: "Spawns an orbital wisp familiar that fires spectral tears but can be destroyed#Can be combined with a second active item to create themed wisps#Turns the first {{DevilRoom}}Devil Room into an {{AngelRoom}}Angel Room and increases the {{AngelRoom}}Angel Room chance#Allows both Devil and Angel deals to be taken",
    },
    {
        id: "585",
        name: "Alabaster Box",
        desc: "Spawns three Soul Hearts and two Angel Room items#Must be charged by picking up Soul Hearts#Only spawns 2 Soul Hearts and 1 Angel item if a Devil deal was taken previously",
    },
    {
        id: "586",
        name: "The Stairway",
        desc: "Spawns a ladder at the start of every floor, leading to a unique Angel Room item shop",
    },
    {
        id: "587",
        name: "Menorah (Unused but scripted)",
        desc: "<Item does not exist>",
    },
    {
        id: "588",
        name: "Sol",
        desc: "Reveals the location of the {{BossRoom}}Boss Room#Upon defeating a boss:#Activates {{Card20}}The Sun#Fully recharges your active item#Removes any Curses#↑ +3 Damage and +1 Luck for the rest of the floor",
    },
    {
        id: "589",
        name: "Luna",
        desc: "Adds an extra {{SecretRoom}}Secret Room and {{SuperSecretRoom}}Super Secret Room to each floor#Secret Rooms contain a beam of light that give tears up for the current floor and give half a Soul Heart#Reveals one {{SecretRoom}}Secret Room each floor",
    },
    {
        id: "590",
        name: "Mercurius",
        desc: "↑ +0.4 Speed up#Doors stay open after entering a room",
    },
    {
        id: "591",
        name: "Venus",
        desc: "↑ +1 Health up#Heals 1 Red Heart#Close enemies become charmed",
    },
    {
        id: "592",
        name: "Terra",
        desc: "↑ +1 Damage up#Replaces tears with rocks#They deal variable damage#Can destroy obstacles#Increased knockback",
    },
    {
        id: "593",
        name: "Mars",
        desc: "Dash by double-tapping a movement key, becoming invincible and dealing 4x your damage#3 seconds cooldown",
    },
    {
        id: "594",
        name: "Jupiter",
        desc: "↑ +2 Health up#Heals half a Red Heart#↓ -0.3 Speed down#Makes you immune to poison damage#Build up to +0.5 Speed while standing still#Moving releases poison fart clouds behind you",
    },
    {
        id: "595",
        name: "Saturnus",
        desc: "A circle surrounds you#Upon entering a room, 7 tears will orbit in it#Chance to catch enemy projectiles in orbit",
    },
    {
        id: "596",
        name: "Uranus",
        desc: "Shoot ice tears, which slow enemies and freeze monsters they kill#Touching frozen enemies slide away and explode into 6 ice shards",
    },
    {
        id: "597",
        name: "Neptunus",
        desc: "Builds a massive tears bonus over 3 seconds while not firing#Shooting again will release stored tears#The tear bonus falls off as you fire",
    },
    {
        id: "598",
        name: "Pluto",
        desc: "↑ +0.7 Tears up#Significantly shrinks Isaac, allowing him to squeeze between objects#Projectiles can pass over him",
    },
    {
        id: "599",
        name: "Voodoo Head",
        desc: "Spawns an additional {{CursedRoom}}Curse Room each floor",
    },
    {
        id: "600",
        name: "Eye Drops",
        desc: "↑ +30% Fire Rate up for the left eye only#First shot in a while is always a double shot#+20% Fire Rate up for non-tear attacks",
    },
    {
        id: "601",
        name: "Act of Contrition",
        desc: "↑ +0.7 Tears up#+1 Eternal Heart#Allows both Devil and Angel deals to be taken#Taking Red Heart damage doesn't reduce Devil/Angel Room chance as much",
    },
    {
        id: "602",
        name: "Member Card",
        desc: "Adds a trapdoor to every shop that leads to a second shop with a unique stock",
    },
    {
        id: "603",
        name: "Battery Pack",
        desc: "Spawns 2-4 batteries#Fully recharges your active item",
    },
    {
        id: "604",
        name: "Mom's Bracelet",
        desc: "Allows picking up and throwing rocks, TNT, poops, friendly Dips, Hosts and other obstacles#Allows carrying them between rooms",
    },
    {
        id: "605",
        name: "The Scooper",
        desc: "Summons a Peeper familiar for the current room, which leaves a trail of red creep#↑ Tears shot from the right eye will deal 34% more damage",
    },
    {
        id: "606",
        name: "Ocular Rift",
        desc: "5% chance to shoot tears that create rifts where they land#Rifts pull in nearby enemies, pickups, and projectiles",
    },
    {
        id: "607",
        name: "Boiled Baby",
        desc: "Familiar that fires chaotic bursts of tears in all directions#Deals 3.5 or 5.3 damage per tear",
    },
    {
        id: "608",
        name: "Freezer Baby",
        desc: "Familiar that shoots petrifying tears#Freezes monsters upon killing them",
    },
    {
        id: "609",
        name: "Eternal D6",
        desc: "Rerolls pedestals in current room#Items have a 30% chance to disappear",
    },
    {
        id: "610",
        name: "Bird Cage",
        desc: "Familiar that leaps on an enemy on the first hit in the room#Deals 45 damage and releasing a rock wave#Chases enemies afterwards",
    },
    {
        id: "611",
        name: "Larynx",
        desc: "Makes you shout, damaging and pushing nearby enemies#Shout gets stronger the more charges the item has",
    },
    {
        id: "612",
        name: "Lost Soul",
        desc: "Soul familiar that dies in one hit, respawning at the start of the next floor#If it survives an entire floor, it spawns 3 Soul Hearts, 2 Eternal Hearts, or an item",
    },
    {
        id: "613",
        name: "",
        desc: "<Item does not exist>",
    },
    {
        id: "614",
        name: "Blood Bombs",
        desc: "↑ +1 Health up#Heals 5 hearts#Bombs leave red creep#If the player has no bombs, one can be placed at the cost of half a heart",
    },
    {
        id: "615",
        name: "Lil Dumpy",
        desc: "Dumpy familiar#When it takes damage, pushes, stuns or poisons nearby enemies",
    },
    {
        id: "616",
        name: "Bird's Eye",
        desc: "8% chance to shoot red fires that block enemy shots and deal contact damage#50% chance at 10 Luck#Fires can block up to 4 shots and/or deal damage 4 times before being destroyed, and last up to 10 seconds",
    },
    {
        id: "617",
        name: "Lodestone",
        desc: "17% chance to shoot tears that magnetize enemies#100% chance at 5 Luck#Magnetized enemies attract nearby pickups, projectiles and enemies",
    },
    {
        id: "618",
        name: "Rotten Tomato",
        desc: "17% chance to shoot tears that mark enemies#100% chance at 5 Luck#Marked enemies are attacked by other enemies",
    },
    {
        id: "619",
        name: "Birthright",
        desc: "Has a different effect for each character",
    },
    {
        id: "620",
        name: "",
        desc: "<Item does not exist>",
    },
    {
        id: "621",
        name: "Red Stew",
        desc: "↑ +21.6 Damage up#Damage up wears off over the next 3 minutes#Killing enemies while effect is active extends the time#Full health",
    },
    {
        id: "622",
        name: "Genesis",
        desc: "{{Warning}} SINGLE USE {{Warning}}#Removes all of Isaac's items and pickups#Teleports you to a unique bedroom with pickups, chests and a trapdoor#For every item lost, it shows a set of 3 items to choose from",
    },
    {
        id: "623",
        name: "Sharp Key",
        desc: "+5 keys#Throw your key to deal damage, destroy obstacles, or open doors#Enemies killed with it have a chance to spawn the content of a chest, including items",
    },
    {
        id: "624",
        name: "Booster Pack",
        desc: "Spawns 5 random cards",
    },
    {
        id: "625",
        name: "Mega Mush",
        desc: "Gigantifies you for 30 seconds#Increases damage and range#Grants invincibility and ability to crush enemies and obstacles#Effect persists between rooms",
    },
    {
        id: "626",
        name: "Knife Piece 1",
        desc: "First part of the knife familiar",
    },
    {
        id: "627",
        name: "Knife Piece 2",
        desc: "Makes a knife familiar with {{Collectible626}}Knife Piece 1#Damages enemies#Can open a certain flesh door",
    },
    {
        id: "628",
        name: "Death Certificate",
        desc: "{{Warning}} SINGLE USE {{Warning}}#Takes you to a floor containing every item in the game#After taking an item, return to the room you came from",
    },
    {
        id: "629",
        name: "Bot Fly",
        desc: "Orbital that fires shielded tears",
    },
    {
        id: "630",
        name: "",
        desc: "<Item does not exist>",
    },
    {
        id: "631",
        name: "Meat Cleaver",
        desc: "Splits enemies in the room into 2 smaller versions of themselves with much less health",
    },
    {
        id: "632",
        name: "Evil Charm",
        desc: "↑ +2 Luck up#Makes you immune to burn, confusion, fear, poison, and toxic gas",
    },
    {
        id: "633",
        name: "Dogma",
        desc: "Grants flight and one-time {{Collectible313}}Holy Mantle effect#↑ +2 Damage up#↑ +0.1 Speed up#If player has fewer than 6 hearts, heals him with combination of Red and Soul Hearts",
    },
    {
        id: "634",
        name: "Purgatory",
        desc: "While in a room with enemies, spawns cracks on the ground#Walking over these cracks summons exploding ghosts",
    },
    {
        id: "635",
        name: "Stitches",
        desc: "Passively spawns a familiar that moves in the direction Isaac shoots#On use, Isaac swaps places with the familiar and gains short invincibility#Teleporting onto things can damage or destroy them",
    },
    {
        id: "636",
        name: "R Key",
        desc: "{{Warning}} SINGLE USE {{Warning}}#Brings you back to the first floor of a new run#Items, stat boosts and pickups stay intact",
    },
    {
        id: "637",
        name: "Knockout Drops",
        desc: "10% chance to shoot a fist with extreme knockback and confusion effect#100% chance at 9 Luck",
    },
    {
        id: "638",
        name: "Eraser",
        desc: "Throws an eraser that instantly kills an enemy#Prevents the enemy from spawning for the rest of the run#Deals 15 damage to bosses#Can only be used once per floor",
    },
    {
        id: "639",
        name: "Yuck Heart",
        desc: "Grants a Rotten Heart upon use",
    },
    {
        id: "640",
        name: "Urn of Souls",
        desc: "Spews a stream of flames#Gains charges each time an enemy dies",
    },
    {
        id: "641",
        name: "Akeldama",
        desc: "Creates a chain of tears behind you while in combat#The tears deal 3.5 damage",
    },
    {
        id: "642",
        name: "Magic Skin",
        desc: "Turns 1 Heart Container or 2 Soul Hearts into a Broken Heart#Spawns an item from the current room's item pool#The more times it's used, the higher the chance it replaces future items if Isaac isn't holding it#33% after 1 use, 50% after 2, 100% after 3#Lower chance if Magic Skin is on a pedestal on the current floor#{{Warning}} Single use item for The Lost",
    },
    {
        id: "643",
        name: "Revelation",
        desc: "Grants flight and 2 Soul Hearts#Shooting for 2.5 seconds will fire a holy laser when fire button is released",
    },
    {
        id: "644",
        name: "Consolation Prize",
        desc: "Increases your lowest stat#Drops either 3 coins, 1 bomb or 1 key depending on what you have the least of",
    },
    {
        id: "645",
        name: "Tinytoma",
        desc: "Teratoma orbital#Blocks shots#Deals contact damage#Splits into smaller versions of itself upon taking 3 hits#The smaller versions break into blue spiders#Respawns 5 seconds after it's fully gone",
    },
    {
        id: "646",
        name: "Brimstone Bombs",
        desc: "+5 bombs#Bombs release 4 Brimstone lasers in the cardinal directions",
    },
    {
        id: "647",
        name: "4.5 Volt",
        desc: "Active items don't charge when clearing rooms#They charge by dealing damage to enemies#Formula: 40 + 20 * stage",
    },
    {
        id: "648",
        name: "",
        desc: "<Item does not exist>",
    },
    {
        id: "649",
        name: "Fruity Plum",
        desc: "Mini Baby Plum familiar#Propels itself diagonally around the room, firing tears behind itself",
    },
    {
        id: "650",
        name: "Plum Flute",
        desc: "Summons friendly Baby Plum in the current room for 10 seconds",
    },
    {
        id: "651",
        name: "Star of Bethlehem",
        desc: "Familiar that slowly travels towards the Boss Room#Emits aura that grants +20% + 1 damage up, tears up and homing",
    },
    {
        id: "652",
        name: "Cube Baby",
        desc: "Familiar that slides around when walked into#It slows and deals contact damage, freezing monsters it kills",
    },
    {
        id: "653",
        name: "Vade Retro",
        desc: "While held, non-ghost enemies spawn small red ghosts on death#On use, causes the ghosts to explode",
    },
    {
        id: "654",
        name: "False PHD",
        desc: "Identifies all pills#+1 Black Heart#Converts good pills into bad pills#↑ Stat down pills also grant damage up#Other pills drop Black Hearts on use",
    },
    {
        id: "655",
        name: "Spin to Win",
        desc: "Adds spinning top orbital that blocks enemy shots#Deals 10.5 contact damage per second#When used,↑ +0.5 speed and greatly increases the rotation speed of orbitals",
    },
    {
        id: "656",
        name: "Damocles",
        desc: "<Item not obtainable>",
    },
    {
        id: "657",
        name: "Vasculitis",
        desc: "Enemies explode into tears upon death, which inherit the effects of Isaac's tears",
    },
    {
        id: "658",
        name: "Giant Cell",
        desc: "Spawn micro-Isaacs when taking damage#They chase and shoot at nearby enemies",
    },
    {
        id: "659",
        name: "Tropicamide",
        desc: "↑ +1.5 Range up#Increases tear size",
    },
    {
        id: "660",
        name: "Card Reading",
        desc: "Spawns two portals at the start of each floor#Portals disappear when leaving the room#{{ColorRed}}Red: {{CR}}{{BossRoom}}Boss Room#{{ColorYellow}}Yellow: {{CR}}{{TreasureRoom}}Item Room#{{ColorBlue}}Blue: {{CR}}{{SecretRoom}}Secret Room",
    },
    {
        id: "661",
        name: "Quints",
        desc: "Spawns a stationary shooting familiar at the location where an enemy died#Up to 5 familiars",
    },
    {
        id: "662",
        name: "Pacifist (Cut item)",
        desc: "<Item does not exist>",
    },
    {
        id: "663",
        name: "Tooth and Nail",
        desc: "Turn invincible every 6 seconds for 1 second#Flashes right before transition",
    },
    {
        id: "664",
        name: "Binge Eater",
        desc: "↑ +1 Health up#Full health#Item pedestals periodically switch between food items and the item they would hold otherwise#Picking up a food item grants temporary +3.6 damage boost, 2 small permanent stat ups and a permanent -0.03 speed down#Food items heal 3 Red Hearts",
    },
    {
        id: "665",
        name: "Guppy's Eye",
        desc: "Shows the contents of Chests, Sacks, Shopkeepers, and Fire Places before they're opened",
    },
    {
        id: "666",
        name: "",
        desc: "<Item does not exist>",
    },
    {
        id: "667",
        name: "Strawman",
        desc: "+1 Bomb#Spawns Keeper as a second character#If he dies, he spawns blue spiders#Item gets removed afterwards#Devil deals cost coins while he's alive#!!! He can pick up items, including Story items, removing them permanently on death",
    },
    {
        id: "668",
        name: "Dad's Note",
        desc: "Begins the sequence to access the Home floor#Trinkets left in previous {{TreasureRoom}}Treasure or {{BossRoom}}Boss Rooms turn into {{Card78}}Cracked Key",
    },
    {
        id: "669",
        name: "Sausage",
        desc: "↑ +1 Health up#Full health#↑ +0.5 Damage up#↑ +0.2 Speed up#↑ +1.2 Shot Speed up#↑ +0.16 Range up#↑ +1 Luck up#↑ +6.9% {{DevilRoom}}Devil or {{AngelRoom}}Angel Room chance#↑ +6.9% {{Planetarium}}Planetarium chance",
    },
    {
        id: "670",
        name: "Options?",
        desc: "If a room grants a clear reward, there will be two different rewards to choose from#Taking one causes the other to disappear",
    },
    {
        id: "671",
        name: "Candy Heart",
        desc: "Gives random permanent stat boost when healing with Red Heart pickups",
    },
    {
        id: "672",
        name: "A Pound of Flesh",
        desc: "Devil deals now cost coins#Shop items now cost health#Consumables in shops are free but surrounded by spikes",
    },
    {
        id: "673",
        name: "Redemption",
        desc: "Grants 1 Soul Heart and +1 Damage when entering a {{DevilRoom}}Devil Room and not taking any item/pickup",
    },
    {
        id: "674",
        name: "Spirit Shackles",
        desc: "On death, Isaac's ghost is chained to his dead body and he can continue to fight with half a heart#Return to life after 10 seconds#Must be recharged by picking up a Soul Heart",
    },
    {
        id: "675",
        name: "Cracked Orb",
        desc: "When you take damage:#Unlocks locked doors in the current room#Reveals a random room#Destroys all tinted and crawlspace rocks#Can open story doors#Can reveal the {{UltraSecretRoom}}Ultra Secret Room",
    },
    {
        id: "676",
        name: "Empty Heart",
        desc: "When down to 1 Red Heart or less at the start of a new floor, grants an empty Heart Container#No effect for characters that can't have Red Hearts",
    },
    {
        id: "677",
        name: "Astral Projection",
        desc: "When getting hit, stops time for 3 seconds#Isaac becomes a ghost and leaves his body#In ghost form gain flight, spectral tears and also negate next hit taken",
    },
    {
        id: "678",
        name: "C Section",
        desc: "Gain a short delay charge attack that fires homing, spectral fetus tears",
    },
    {
        id: "679",
        name: "Lil Abaddon",
        desc: "Familiar which shoots a mini {{Collectible399}}Maw of the Void attack",
    },
    {
        id: "680",
        name: "Montezuma's Revenge",
        desc: "While firing, charge up a short-ranged Brimstone#Shoots behind you",
    },
    {
        id: "681",
        name: "Lil Portal",
        desc: "Deals contact damage and flies forward#Consumes pickups in its path#Each one will increase its size, damage, and spawn a Blue Fly#Every four pickups, it spawns a portal to an unexplored room",
    },
    {
        id: "682",
        name: "Worm Friend",
        desc: "Causes a tentacle to burst out of the ground and grab an enemy#Grabbed enemies take damage, are slowed and cannot move",
    },
    {
        id: "683",
        name: "Bone Spurs",
        desc: "Enemies spawn floating bones on death#Bones block projectiles and deal contact damage",
    },
    {
        id: "684",
        name: "Hungry Soul",
        desc: "Chance to spawn ghosts when killing an enemy#Ghosts chase enemies and deal contact damage#After 5 seconds, the ghost explodes, dealing 7 damage to nearby enemies#You don't take damage from the explosion",
    },
    {
        id: "685",
        name: "Jar of Wisps",
        desc: "Spawns random wisps that shoot various tears, block shots, and deal contact damage#Number of wisps spawned increases the more it's used",
    },
    {
        id: "686",
        name: "Soul Locket",
        desc: "Grants a permanent stat boost whenever you pick up a Soul Heart#Spawns a Soul Heart on pickup",
    },
    {
        id: "687",
        name: "Friend Finder",
        desc: "Spawns a random friendly monster that mimics Isaac's movements and attacks",
    },
    {
        id: "688",
        name: "Inner Child",
        desc: "+1 extra life#Respawn in current room with half a heart, massive size down, and +0.2 speed",
    },
    {
        id: "689",
        name: "Glitched Crown",
        desc: "Item pedestals quickly cycle between 5 random items",
    },
    {
        id: "690",
        name: "Belly Jelly",
        desc: "Causes enemies to bounce off of Isaac#Bouncing them against obstacles deals damage#50% chance that Isaac ignores contact damage#50% chance to deflect enemy projectiles",
    },
    {
        id: "691",
        name: "Sacred Orb",
        desc: "Prevents Quality {{Quality0}}/{{Quality1}} items from spawning#33% chance to reroll items with Quality {{Quality2}}",
    },
    {
        id: "692",
        name: "Sanguine Bond",
        desc: "Spawns a set of spikes in the {{DevilRoom}}Devil Room#Taking damage from the spikes can grant a reward:#35%: Nothing#33%: +0.5 Damage up#15%: 6 pennies#10%: 2 Black Hearts#5%: Random Devil item#2%: Leviathan transformation",
    },
    {
        id: "693",
        name: "The Swarm",
        desc: "Grants 9 orbital flies which turn into Blue Flies after they block a shot#Spawns a new fly every room cleared",
    },
    {
        id: "694",
        name: "Heartbreak",
        desc: "Grants 3 broken hearts#↑ +0.25 Damage for every broken heart#Every fatal hit will add 2 more broken hearts#You die at 12 broken hearts",
    },
    {
        id: "695",
        name: "Bloody Gust",
        desc: "When taking damage, gain speed and tears up for the current floor#Up to +1.02 Speed and +3 Fire Rate possible",
    },
    {
        id: "696",
        name: "Salvation",
        desc: "Grants halo that spawns beams of light on enemies inside it#The halo grows larger the more damage you've taken this floor",
    },
    {
        id: "697",
        name: "Vanishing Twin",
        desc: "Familiar that becomes a clone of the boss when entering the boss room#Defeating it drops an extra item#Clone is slower and has 75% of the original boss health",
    },
    {
        id: "698",
        name: "Twisted Pair",
        desc: "Two familiars that stand by your side#Fire tears equal to yours, but with only 37.5% of your damage",
    },
    {
        id: "699",
        name: "Azazel's Rage",
        desc: "Build rage every time a room is cleared#After 4 rooms, fires a large Brimstone laser when entering the next room",
    },
    {
        id: "700",
        name: "Echo Chamber",
        desc: "When Isaac uses a Card, Pill, or Rune, he also uses a copy of the last 3 Cards/Pills/Runes he used after picking up Echo Chamber",
    },
    {
        id: "701",
        name: "Isaac's Tomb",
        desc: "Spawns an Old Chest at the start of every floor which requires a key to unlock#Can contain Soul Hearts, trinkets or items#Items are from the {{AngelRoom}}Angel Room pool and Mom and Dad themed",
    },
    {
        id: "702",
        name: "Vengeful Spirit",
        desc: "After taking damage, spawns an orbital wisp that lasts for the entire floor#Maximum of 6#They fire tears but do not block shots",
    },
    {
        id: "703",
        name: "Esau Jr.",
        desc: "Swaps between the current character and Esau Jr., who has 3 Black Hearts, +2 Damage and flight#Characters have independent items and health#On first use, he gains random passive items equal to how many you have#{{Warning}} Dying as either character ends the run",
    },
    {
        id: "704",
        name: "Berserk!",
        desc: "Berserk mode for 5 seconds:#↑ +0.4 Speed up#↑ Tears up#↑ +3 Damage up#Restricts attacks to a melee weapon",
    },
    {
        id: "705",
        name: "Dark Arts",
        desc: "Gain +1 Speed and walk through enemies and bullets for 1 second#On touch, deal 2x your damage + 3.5 damage per touched enemy#Explosion on effect end that deals damage equal to how much you dealt",
    },
    {
        id: "706",
        name: "Abyss",
        desc: "Destroys all items in the room and spawns an attack fly familiar for each#Effects of fly depends on the items",
    },
    {
        id: "707",
        name: "Supper",
        desc: "↑ +1 Health up#Heals 1 Red Heart",
    },
    {
        id: "708",
        name: "Stapler",
        desc: "↑ +1 Damage up#Prevents Isaac from firing tears from one eye",
    },
    {
        id: "709",
        name: "Suplex!",
        desc: "Allows you to dash into and pick up enemies or bosses, then slam them into the ground#Slam location can be controlled#Slam deals 50 damage and spawns rock waves#Scales in damage and area of effect with the player's size",
    },
    {
        id: "710",
        name: "Bag of Crafting",
        desc: "Collects and holds up to 8 pickups which cannot be dropped#Once 8 pickups are in the bag, using it will craft an item#Quality of the item is dependent on the quality of the pickups",
    },
    {
        id: "711",
        name: "Flip",
        desc: "When entering a room with an item pedestal, a second ghostly item will be shown#Upon use, flips the real and ghostly item#Both can be taken if Flip is used after taking the first item#!!! The ghostly item disappears if you take the first item and leave the room",
    },
    {
        id: "712",
        name: "Lemegeton",
        desc: "Spawns an orbital wisp familiar that grants an item's effect but can be destroyed#The items have a 25% chance to be from the current room's item pool, or from the Treasure/Boss/Shop pools otherwise",
    },
    {
        id: "713",
        name: "Sumptorium",
        desc: "Removes half a heart and creates a Clot familiar#Each type of heart generates a Clot with different HP, damage and tear effect",
    },
    {
        id: "714",
        name: "Recall",
        desc: "Retrieves the Forgotten's body from any distance",
    },
    {
        id: "715",
        name: "Hold",
        desc: "Preserves one poop bomb inside that can be used later",
    },
    {
        id: "716",
        name: "Keeper's Sack",
        desc: "Gives range, speed, or damage up when buying things from shops#Spawns 3 coins and 1 key on pickup",
    },
    {
        id: "717",
        name: "Keeper's Kin",
        desc: "Rocks and props spawn 2 blue spiders when destroyed#Rocks can occasionally spawn blue spiders when in a hostile room",
    },
    {
        id: "718",
        name: "Keeper's Robe (Cut item)",
        desc: "<Item does not exist>",
    },
    {
        id: "719",
        name: "Keeper's Box",
        desc: "Spawns a random shop item/pickup for purchase",
    },
    {
        id: "720",
        name: "Everything Jar",
        desc: "Spawns certain pickups based on how many charges it has#If fully charged, it has a strong random effect#Charge Rewards:#{{Blank}} 1:{{PoopPickup}} 2:{{Coin}} 3:{{Bomb}} 4:{{Key}}#{{Blank}} 5:{{Heart}} 6:{{Pill}} 7:{{Card}} 8:{{SoulHeart}}#{{Blank}} 9:{{GoldenHeart}} 10:{{GoldenKey}} 11:{{GoldenBomb}}",
    },
    {
        id: "721",
        name: "TMTRAINER",
        desc: "Causes all future items to be 'glitched'#Grants them completely random effects",
    },
    {
        id: "722",
        name: "Anima Sola",
        desc: "Chains down the nearest enemy for 5 seconds, preventing them from acting",
    },
    {
        id: "723",
        name: "Spindown Dice",
        desc: "Transforms all items in the room by decreasing their internal ID number by one",
    },
    {
        id: "724",
        name: "Hypercoagulation",
        desc: "Upon taking enemy damage, drop a half or full Red Heart#Spawned hearts launch out and despawn after 1.5 seconds",
    },
    {
        id: "725",
        name: "IBS",
        desc: "After dealing enough damage, stop attacking to trigger a random {{Player25}}Tainted ??? effect:#Throw a random poop#Create buffing creep#Poison fart cloud#Drop 5 live bombs",
    },
    {
        id: "726",
        name: "Hemoptysis",
        desc: "Double-tap a fire button to sneeze blood#Deals 150% your damage to enemies in front of you#1 second cooldown#{{BrimstoneCurse}} Affected enemies take extra damage from Brimstone beams",
    },
    {
        id: "727",
        name: "Ghost Bombs",
        desc: "+5 bombs#Bombs spawn ghosts that deal contact damage and explode after 10 seconds",
    },
    {
        id: "728",
        name: "Gello",
        desc: "Spawns a demon familiar that's attached to Isaac#Mimics Isaac's tears, stats and effects",
    },
    {
        id: "729",
        name: "Decap Attack",
        desc: "Throws Isaac's head, dealing contact damage and shooting tears from where it lands#Reactivating the item or stepping on the head reattaches it",
    },
    {
        id: "730",
        name: "Glass Eye",
        desc: "↑ +0.75 Damage up#↑ +1 Luck up",
    },
    {
        id: "731",
        name: "Stye",
        desc: "!!! Applies only for the right eye#↑ +28% Damage up#↑ +7 Range up#↓ -0.3 Shot Speed down",
    },
    {
        id: "732",
        name: "Mom's Ring",
        desc: "↑ +1 Damage up#Spawns a random rune or soul stone on pickup",
    },
];
