import FootballScoreboard from "../src/FootballScoreboard";

let footballScoreBoard: FootballScoreboard;
beforeEach(()=>{footballScoreBoard = new FootballScoreboard()})

describe("FootballScoreBoard",()=>{

    it("should set default team names and scores correctly", () => {

        expect(footballScoreBoard.getGameSummary()).toBe('Home: 0 - Away: 0');
    });

    it("should return default value of 0 for HomeTeam Score",()=>{

        expect(footballScoreBoard.getHomeScore()).toBe(0);
    })

    it("should return default value of 0 for AwayTeam Score",()=>{

        expect(footballScoreBoard.getHomeScore()).toBe(0);
    })

    it("should return default empty array of game events",()=>{

        expect(footballScoreBoard.getGameEvents()).toEqual([]);
    })


    it("should set the name for home Team and away team", ()=>{

        footballScoreBoard.setTeamNames('a',"b");

        expect(footballScoreBoard.getGameSummary()).toBe('a: 0 - b: 0');
    })


    it("should set the name for home Team and away team to new names", ()=>{

        footballScoreBoard.setTeamNames('a',"b");
        footballScoreBoard.setTeamNames('c',"d");

        expect(footballScoreBoard.getGameSummary()).toBe('c: 0 - d: 0');
    })

    it("should set the name for home Team and away team to empty strings", ()=>{

        footballScoreBoard.setTeamNames('',"");

        expect(footballScoreBoard.getGameSummary()).toBe(': 0 - : 0');
    })


    
})