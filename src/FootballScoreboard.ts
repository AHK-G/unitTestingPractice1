class FootballScoreboard {
    private homeTeam: string;
    private awayTeam: string;
    private homeScore: number;
    private awayScore: number;
    private gameEvents: string[];

    public constructor() {
        this.homeTeam = 'Home';
        this.awayTeam = 'Away';
        this.homeScore = 0;
        this.awayScore = 0;
        this.gameEvents = [];
    }

    // Set the names of the home and away teams
    public setTeamNames(homeTeam: string, awayTeam: string): void {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }

    // Record a touchdown for the specified team
    public recordTouchdown(team: string): void {
        if (team === this.homeTeam) {
            this.homeScore += 6;
        } else if (team === this.awayTeam) {
            this.awayScore += 6;
        } else {
            throw new Error('Invalid team');
        }
        this.gameEvents.push(`${team} scored a touchdown`);
    }

    // Record a field goal for the specified team
    public recordFieldGoal(team: string): void {
        if (team === this.homeTeam) {
            this.homeScore += 3;
        } else if (team === this.awayTeam) {
            this.awayScore += 3;
        } else {
            throw new Error('Invalid team');
        }
        this.gameEvents.push(`${team} scored a field goal`);
    }

    // Record a safety for the specified team
    public recordSafety(team: string): void {
        if (team === this.homeTeam) {
            this.homeScore += 2;
        } else if (team === this.awayTeam) {
            this.awayScore += 2;
        } else {
            throw new Error('Invalid team');
        }
        this.gameEvents.push(`${team} scored a safety`);
    }

    // Get the current score of the home team
    public getHomeScore(): number {
        return this.homeScore;
    }

    // Get the current score of the away team
    public getAwayScore(): number {
        return this.awayScore;
    }

    // Get the summary of the game status
    public getGameSummary(): string {
        return `${this.homeTeam}: ${this.homeScore} - ${this.awayTeam}: ${this.awayScore}`;
    }

    // Optional: Expose the event log
    public getGameEvents(): string[] {
        return [...this.gameEvents]; // return a copy to preserve encapsulation
    }
}

export default FootballScoreboard;
