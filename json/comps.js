<html>
  <div id="main">
    <title>SCLP Official</title>
    <div id="navigation">
      <button id="seamless-button" onclick="open_page(1)"><u>Home</u></button>
      <button id="seamless-button" onclick="open_page(2)"><u>Towers</u></button>
      <button id="seamless-button" onclick="open_page(3)"><u>Leaderboard</u></button>
    </div>
    <div id="menu-page">
      <h1>
        Soul Crushing Leaderboard Project
      </h1>
      <h2>
        <a href="https://discord.gg/t9crQndHyn" target="_blank">Join the Discord Server to submit completions</a>
      </h2>
      <h3>
        <div id="owner">[Owner]</div>thej10n
        <br><br><div id="co-owner">[Co-Owner]</div>arthraix, jumper101110
        <br><br><div id="manager">[Managers]</div>XChocolateMLGX, vt_et, Z_Exzer, Spitfire_YT5, ThePhantomDevil666
        <br><br><div id="trial">[Trial Staff]</div>...
        <br><br><div id="former">[Former Staff]</div>...
      </h3>
    </div>
    <div id="tower-lookup-page">
      <div id="left">
        <div id="searchmenu">
    
        </div>
      </div>
      <div id="right">
        <div id="options">
          <h1>
            The List
          </h1>
          <input type="text" id="sclp-tower-search" placeholder="Search..."></input>
          <button id="search-button" onclick="towers=search(g('sclp-tower-search').value);list_towers();">🔎</button>
          <br><br>
          <input type="checkbox" id="diff-8" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Insane</input>
          <input type="checkbox" id="diff-9" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Extreme</input>
          <input type="checkbox" id="diff-10" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Terrifying</input>
          <input type="checkbox" id="diff-11" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Catastrophic</input>
          <input type="checkbox" id="diff-12" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Horrific</input>
          <input type="checkbox" id="diff-13" onclick="towers=search(g('sclp-tower-search').value);list_towers();" checked>Unreal</input>
          <br>
          Game: <select name="game-select" id="game-select">

          </select>
          <input type="checkbox" id="color-checklist" onclick="towers=search(g('sclp-tower-search').value);list_towers();">Color by checklist?</input>
          <input type="text" id="checklist-player" placeholder="Player..."></input>
          <input type="checkbox" id="extra-tower-info" onclick="towers=search(g('sclp-tower-search').value);list_towers();">Show extra info</input>
        </div>
        <div id="extra-data">
          Click on a tower to see extra info here
        </div>
      </div>
    </div>
    <div id="leaderboard-page">
      <div id="left">
        <p id="leaderboard">
    
        </p>
      </div>
      <div id="right">
        <div id="leaderboard-header">
          <h1>
            The Top Obbyists
          </h1>
          <input type="text" id="sclp-player-search" placeholder="Search..."></input>
          <button id="search-button" onclick="completions=psearch(g('sclp-player-search').value);list_players();">🔎</button>
          <input type="checkbox" id="extra-player-info" onclick="completions=psearch(g('sclp-player-search').value);list_players();">Show extra info</input>
        </div>
        <div id="player-data">
          Click on a player to see extra info here
        </div>
      </div>
    </div>
  </div>
</html>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat">
<link rel="stylesheet" href="style.css">

<script src="json/towers.js"></script>
<script src="json/comps.js"></script>
<script src="json/games.js"></script>

<script src="towermanager.js"></script>
