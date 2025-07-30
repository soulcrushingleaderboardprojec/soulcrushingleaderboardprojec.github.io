all_towers.sort((a, b) => a["diff"] - b["diff"]);
for (t = 0; t < all_towers.length; t++) {
  all_towers[t]["rank"] = all_towers.length - t;
  all_towers[t]["exp"] = Math.floor((3 ** ((all_towers[t]["diff"] - 800) / 100)) * 100);
}
var towers = all_towers;
var all_completions = [
  {"name": "thej10n", "completions": [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 45, 56, 57, 59, 60, 65, 66, 67, 68, 70, 72, 74, 76, 77, 78, 80, 82, 83, 84, 86, 87, 105, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 124, 125, 127, 128, 129, 137, 138, 143, 148, 150, 151, 155, 158, 167, 168, 170, 172, 187, 189, 191, 196, 197, 199, 200, 203, 206, 210, 214, 220, 221, 222, 223, 224, 226, 229, 236, 246, 254, 256, 257, 310, 311, 312, 314, 316, 317, 320, 342, 343, 344, 348, 349, 351, 356, 364, 365, 366, 368, 371, 372, 387, 388, 409, 445, 448, 458, 459, 489, 503, 504, 507, 520, 524, 525, 530, 532, 533, 544, 546, 548, 560, 563, 565, 566, 575, 593, 595, 612, 613, 627, 628, 629, 630, 647, 652, 656, 660, 661, 662, 668, 669, 670]},
  {"name": "robloxfan5964", "completions": [9]},
  {"name": "TheHaloDeveloper", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 16, 18, 20, 24, 28]},
  {"name": "LoveliestJacob", "completions": [1, 2, 3, 8]},
  {"name": "Mlg_MemeGod", "completions": [1, 2, 3, 7, 8, 10, 15, 22, 63, 158]},
  {"name": "smashultimate68", "completions": [1, 13]},
  {"name": "FelinesGoneFaster", "completions": [1, 6, 9, 10, 17, 18, 25, 28, 32, 57, 65, 70, 114]},
  {"name": "markoj_v", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 45, 47, 49, 50, 51, 56, 57, 82, 138, 141]},
  {"name": "wk65_mobile", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 18, 20, 23, 26, 28, 30, 33, 58, 59, 65, 66, 67, 68, 70, 74, 77, 111, 112, 113, 114, 117, 118, 120, 127, 143, 191]},
  {"name": "1X1x1sx1x", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 61, 65, 81, 83, 104, 107, 111, 112, 114, 115, 119, 124, 127, 134, 156, 158, 160]},
  {"name": "PlinTret", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 33, 35, 37, 38, 42, 45, 65, 68, 108, 111, 163]},
  {"name": "VepicxVT", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 56, 57, 58, 60, 61]},
  {"name": "MQLSuper", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 16, 17, 18, 23, 26, 27, 29, 30, 32, 39, 56, 65, 70, 112, 138, 156, 158, 161, 163]},
  {"name": "simonixen", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 22, 23, 26, 27, 28, 29, 30, 31, 33, 36, 38, 39, 42, 59, 65, 83, 113, 115, 119, 120, 205, 214, 220, 226, 233]},
  {"name": "i_tkk", "completions": [1, 2, 3, 4, 6, 8, 9, 10, 13, 20, 23, 28, 29, 32, 33, 35, 36, 39, 214]},
  {"name": "Zvxiffy", "completions": [1, 2, 8, 16, 20, 23]},
  {"name": "ZeKilla440", "completions": [1, 2, 8, 20]},
  {"name": "Jdbowles08", "completions": [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 20, 23, 24, 25, 26, 33, 38, 82, 114]},
  {"name": "dumbpersonalt1919", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 20, 23, 25, 26, 28, 30, 33, 65, 112, 113, 114, 115, 116, 122]},
  {"name": "CoasterBoy2021", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 27, 28, 29, 30, 65, 67, 70, 112, 115, 120, 123, 125]},
  {"name": "Cyulura", "completions": [1, 2, 4, 6, 8, 9, 10, 13, 14, 16, 17, 18, 19, 23, 24, 25, 28, 29, 30, 33, 42]},
  {"name": "x0Maxi", "completions": [1, 2, 3, 11, 13, 18, 29]},
  {"name": "ThePhantomDevil666", "completions": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 23, 28, 156]},
  {"name": "XChocolateMLGX", "completions": [6]},
  {"name": "metalfuzeon", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 29, 31, 32, 33, 35, 36, 39]},
  {"name": "1Hyuns", "completions": [1, 2, 3, 20, 23, 28]},
  {"name": "Maxis_s", "completions": [1, 2, 3, 8, 9, 10, 20, 23, 26, 28, 30, 31, 39, 234]},
  {"name": "Lesycling", "completions": [1, 3, 6, 8, 9, 10, 11, 14, 23, 26, 27, 33, 65, 112, 113, 114, 118]},
  {"name": "ddoodle7", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 26, 27, 29, 30, 31, 33, 34, 42, 172]},
  {"name": "4_qu", "completions": [1, 2, 3, 5, 8, 10, 16, 20, 23, 26, 30, 31, 37, 92]},
  {"name": "beast1132s", "completions": [6, 9, 114]},
  {"name": "vt_et", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 57, 58, 59, 65, 66, 67, 68, 69, 70, 72, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 104, 105, 106, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 125, 126, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138, 140, 142, 143, 144, 145, 146, 147, 148, 151, 156, 161, 162, 163, 164, 167, 168, 169, 170, 186, 187, 188, 189, 191, 192, 193, 194, 195, 199, 203, 204, 205, 206, 207, 208, 214, 215, 218, 219, 220, 221, 226]},
  {"name": "alihamzaeid1", "completions": [2, 7, 9, 13, 33, 118, 125]},
  {"name": "j1any1", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 16, 18, 23, 31, 60]},
  {"name": "enaerios", "completions": [1, 3, 9, 10, 18, 27, 33]},
  {"name": "Z_Exzer", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 47, 49, 65, 67, 68, 76, 77, 82, 91, 111, 112, 113, 114, 116, 125, 138, 178, 181, 184, 214, 236, 240]},
  {"name": "UnfunnyGaming99", "completions": [65, 124]},
  {"name": "Face_Palm22", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 38, 45, 47]},
  {"name": "Spitfire_YT5", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 18, 20, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 56, 59, 60, 62, 65, 68, 70, 77, 112, 114, 118, 120, 127, 138, 151, 218]},
  {"name": "jarofjam_14", "completions": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 45, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 72, 74, 75, 77, 82, 83, 175, 218, 219, 220, 226]}
];
for (player = 0; player < all_completions.length; player++) {
  all_completions[player]["exp"] = get_total_exp(all_completions[player]["name"]);
}
all_completions.sort((a, b) => b["exp"] - a["exp"]);
for (player = 0; player < all_completions.length; player++) {
  all_completions[player]["rank"] = player + 1;
}
var completions = all_completions;
function g(element_id) {
  return document.getElementById(element_id);
}
function difficulty_to_name(d) {
  if (d < 900) {return "Insane";}
  if (d < 1000) {return "Extreme";}
  if (d < 1100) {return "Terrifying";}
  if (d < 1200) {return "Catastrophic";}
  if (d < 1300) {return "Horrific";}
  if (d < 1400) {return "Unreal";}
  return "Nil";
}
function difficulty_to_range(d) {
  d %= 100;
  if (d < 11) {return "Bottom";}
  if (d < 22) {return "Bottom-Low";}
  if (d < 33) {return "Low";}
  if (d < 45) {return "Low-Mid";}
  if (d < 56) {return "Mid";}
  if (d < 67) {return "Mid-High";}
  if (d < 78) {return "High";}
  if (d < 89) {return "High-Peak";}
  return "Peak";
}
function format_difficulty(d) {
  s = d.toString();
  return s.slice(0, s.length - 2) + "," + s.slice(s.length - 2, s.length + 1);
}
function format_location(a) {
  s = "";
  for (j = 0; j < a.length; j++) {
    l = a[j];
    s += l[0];
    if (l[1] != "") {
      s += ", " + l[1];
    }
    if (j != a.length - 1) {
      s += " / ";
    }
  }
  return s;
}
function search(s) {
  new_towers = [];
  for (tower_search = 0; tower_search < all_towers.length; tower_search++) {
    tower = all_towers[tower_search];
    if (tower["abbr"].toLowerCase().includes(s.toLowerCase()) || tower["name"].toLowerCase().includes(s.toLowerCase())) {
      new_towers.push(tower)
    }
  }
  return new_towers;
}
function tower_from_id(id) {
  for (i = 0; i < all_towers.length; i++) {
    if (all_towers[i]["id"] == id) {
      return all_towers[i];
    }
  }
}
function get_victors(id) {
  victors = 0;
  for (p = 0; p < all_completions.length; p++) {
    if (all_completions[p]["completions"].includes(id) ){
      victors += 1;
    }
  }
  return victors;
}
function open_extra(id) {
  var tower = tower_from_id(id);
  var extra = "";
  extra += "<p id='big'><b>(" + tower["abbr"] + ")</b> " + tower["name"] + "</p>";
  extra += "<b id=\"" + difficulty_to_name(tower["diff"]) + "\">[*] </b> Difficulty: " + difficulty_to_range(tower["diff"]) + " " + difficulty_to_name(tower["diff"]) + " (" + format_difficulty(tower["diff"]) + ")";
  extra += "<br>Location: " + format_location(tower["places"]);
  extra += "<br>Rank: #" + tower["rank"];
  extra += "<br>EXP for completion: " + tower["exp"];
  extra += "<br>Victors: " + get_victors(id);
  extra += "<br><i id='small'>Tower ID: " + id + "</i>";
  g("extra-data").innerHTML = extra;
}
function list_towers() {
  var t = "";
  for (i = 0; i < towers.length; i++) {
    t_id = towers[i]["id"];
    t_abbr = towers[i]["abbr"];
    t_name = towers[i]["name"];
    t_diff = towers[i]["diff"];
    t_area = towers[i]["places"];
    t_rank = towers[i]["rank"];

    t += "<p id='item'>";
    t += "<b id=\"" + difficulty_to_name(t_diff) + "\">[*] </b>"
    t += "<b>(" + t_abbr + ") </b>" + t_name;
    t += " <button id='info-button' onclick='open_extra(" + t_id + ")'>+</button>"
    t += "<br><i id='small'>";
    t += format_difficulty(t_diff) + " - " + format_location(t_area) + " - #" + t_rank;
    t += "</i></p>";
  }
  g("searchmenu").innerHTML = t;
}
list_towers();





// player leaderboard
function player_from_name(name) {
  for (i = 0; i < all_completions.length; i++) {
    if (all_completions[i]["name"] == name) {
      return all_completions[i];
    }
  }
}
function format_level(exp) {
  current_level = 0;
  last_exp = 150;
  total = 0;
  if (exp < 175) {
    return "0 (" + exp + "/175)";
  }
  while (total <= exp) {
    current_level += 1;
    last_exp = 150 + (25 * (current_level ** 2));
    total += last_exp;
  }
  return (current_level - 1) + " (" + (exp - (total - last_exp)) + "/" + (150 + (25 * (current_level ** 2))) + ")";
}
function get_total_exp(player) {
  c = player_from_name(player)["completions"];
  total_exp = 0;
  for (comp_index = 0; comp_index < c.length; comp_index++) {
    total_exp += tower_from_id(c[comp_index])["exp"]
  }
  return total_exp;
}
function psearch(s) {
  new_players = [];
  for (player_search = 0; player_search < all_completions.length; player_search++) {
    player = all_completions[player_search];
    if (player["name"].toLowerCase().includes(s.toLowerCase())) {
      new_players.push(player)
    }
  }
  return new_players;
}
function format_comps(c) {
  f = "";
  for (t = all_towers.length - 1; t >= 0; t--) {
    if (c.includes(all_towers[t]["id"])) {
      tower = all_towers[t];
      f += "<b id=\"" + difficulty_to_name(tower["diff"]) + "\">[*] </b>"
      f += "<b>(" + tower["abbr"] + ") </b>" + tower["name"];
      f += " <i id='small'>";
      f += format_difficulty(tower["diff"]) + " - #" + tower["rank"];
      f += "</i><br>";
    }
  }
  return f;
}
function open_player(name) {
  var player = player_from_name(name);
  var extra = "";
  extra += "<p id='big'><b>" + name + "</b></p>";
  extra += "<br>Total EXP: " + player["exp"];
  extra += "<br>Level: " + format_level(player["exp"]);
  extra += "<br>Rank: #" + player["rank"];
  extra += "<br><br><b>Completions:</b><br>";
  extra += format_comps(player["completions"]);
  g("player-data").innerHTML = extra;
}
function list_players() {
  var p = "";
  for (i = 0; i < completions.length; i++) {
    p_name = completions[i]["name"];
    p_comps = completions[i]["completions"];
    p_exp = completions[i]["exp"];
    p_rank = completions[i]["rank"];

    p += "<p id='item'>";
    p += "<b>[" + (i + 1) + "] </b>"
    p += p_name;
    p += " <button id='info-button' onclick='open_player(\"" + p_name + "\")'>+</button>"
    p += "<br><i id='small'>";
    p += p_comps.length + " Completions - " + p_exp + " EXP - Level " + format_level(p_exp) + " - #" + p_rank;
    p += "</i></p>";
  }
  g("leaderboard").innerHTML = p;
}
list_players();
