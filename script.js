const nfl ={
    teams: ['Arizona Cardinals','Atlanta Falcons','Baltimore Ravens','Buffalo Bills','Carolina Panthers','Chicago Bears','Cincinnati Bengals','Cleveland Browns','Dallas Cowboys','Denver Broncos','Detroit Lions','Green Bay Packers','Houston Texans','Indianapolis Colts','Jacksonville Jaguars','Kansas City Chiefs','Los Angeles Chargers','Los Angeles Rams','Miami Dolphins','Minnesota Vikings','New England Patriots','New Orleans Saints','New York Giants','New York Jets','Las Vegas Raiders','Philadelphia Eagles','Pittsburgh Steelers','San Francisco 49ers','Seattle Seahawks','Tampa Bay Buccaneers','Tennessee Titans','Washington Football Team'],
    stadiums: ['State Farm Stadium','Mercedes-Benz Stadium','M&T Bank Stadium','Bills Stadium','Bank of America Stadium','Soldier Field','Paul Brown Stadium','First Energy Stadium','AT&T Stadium','Empower Field at Mile High','Ford Field','Lambeau Field','NRG Stadium','Lucas Oil Stadium','TIAA Bank Field','Arrowhead Stadium','Allegiant Stadium','SoFi Stadium','Hard Rock Stadium','U.S. Bank Stadium','Gillette Stadium','Mercedes-Benz Superdome','MetLife Stadium','Lincoln Financial Field','Heinz Field',"Levi's Stadium",'CenturyLink Field','Raymond James Stadium','Nissan Stadium','FedExField'],
    mvp: ['QB Bart Starr','QB Bart Starr','QB Joe Namath','QB Len Dawson','LB Chuck Howley','QB Roger Staubach','S Jake Scott','RB Larry Csonka','RB Franco Harris','WR Lynn Swann','WR Fred Biletnikoff','DT Randy White and DE Harvey Martin','QB Terry Bradshaw','QB Terry Bradshaw','QB Jim Plunkett','QB Joe Montana','RB John Riggins','RB Marcus Allen','QB Joe Montana','DE Richard Dent','QB Phil Simms','QB Doug Williams','WR Jerry Rice','QB Joe Montana','RB Ottis Anderson','QB Mark Rypien','QB Troy Aikman','RB Emmitt Smith','QB Steve Young','CB Larry Brown','KR-PR Desmond Howard','RB Terrell Davis','QB John Elway','QB Kurt Warner','LB Ray Lewis','QB Tom Brady','S Dexter Jackson','QB Tom Brady','WR Deion Branch','WR Hines Ward','QB Peyton Manning','QB Eli Manning','WR Santonio Holmes','QB Drew Brees','QB Aaron Rodgers','QB Eli Manning','QB Joe Flacco','LB Malcolm Smith','QB Tom Brady','LB Von Miller','QB Tom Brady','QB Nick Foles','WR Julian Edelman','QB Patrick Mahomes','QB Tom Brady']
};

function randomTeam() {
    return nfl.teams[Math.floor(Math.random()*nfl.teams.length)]
};

function randomStadium() {
    return nfl.stadiums[Math.floor(Math.random()*nfl.stadiums.length)]
};

function randomMVP() {
    return nfl.mvp[Math.floor(Math.random()*nfl.mvp.length)]
};

function randomSBResult() {
    let homeTeam = randomTeam();
    let awayTeam = randomTeam();
    while (homeTeam === awayTeam) {
        awayTeam = randomTeam();
    };
    let stadium = randomStadium();
    let mvp = randomMVP();
    let homeScore = Math.floor(Math.random()*50);
    let awayScore = Math.floor(Math.random()*50);
    let superbowlNum = Math.floor(Math.random()*54);
    console.log(`The result of Super Bowl ${superbowlNum} was ${homeTeam} ${homeScore} - ${awayScore} ${awayTeam}, the Super Bowl MVP was ${mvp}!`);
};

randomSBResult();
