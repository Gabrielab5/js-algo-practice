/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, 
and returns the team name with the highest number of points. 
If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions(footballTeams) {
  if (!footballTeams || footballTeams.length === 0)  return null; 

  let maxScore = -1;
  let maxScoreTeams = [];
  for(const team of footballTeams){
    let teamScore =  team.wins*3 + team.draws;
    if (maxScore < teamScore){
      maxScore = teamScore;
      maxScoreTeams = [] ;
      maxScoreTeams.push(team);     
    }
    else if (maxScore == teamScore){
      maxScoreTeams.push(team);  
    }      
  }

  if (maxScoreTeams.length === 1)
    return maxScoreTeams[0].name;

  let highestGoalDiffTeam = maxScoreTeams[0];
  let highestGoalDiff = highestGoalDiffTeam.scored - highestGoalDiffTeam.conceded;

    for (let i = 1; i < maxScoreTeams.length; i++) {
      const currentTeam = maxScoreTeams[i];
      const goalDiff = currentTeam.scored - currentTeam.conceded; 
      if (goalDiff > highestGoalDiff){
        highestGoalDiff = goalDiff;
        highestGoalDiffTeam = currentTeam;
      }       
  }

  return highestGoalDiffTeam.name;


}

exports.solution = champions;