class VotingSystem {
    private candidates: Map<string, number>;

    public constructor() {
        this.candidates = new Map<string, number>();
    }

    // Register a candidate with initial vote count
    public registerCandidate(candidateName: string, initialVotes: number = 0): void {
        if (this.candidates.has(candidateName)) {
            throw new Error('Candidate already registered');
        }
        this.candidates.set(candidateName, initialVotes);
    }

    // Vote for a candidate
    public vote(candidateName: string): void {
        if (!this.candidates.has(candidateName)) {
            throw new Error('Candidate not found');
        }
        const currentVotes = this.candidates.get(candidateName) as number;
        this.candidates.set(candidateName, currentVotes + 1);
    }

    // Count the total number of votes
    public countTotalVotes(): number {
        let totalVotes = 0;
        for (const votes of this.candidates.values()) {
            totalVotes += votes;
        }
        return totalVotes;
    }

    // Determine the winner(s) of the election
    public determineWinner(): string[] {
        let maxVotes = 0;
        const winners: string[] = [];

        for (const [candidate, votes] of this.candidates) {
            if (votes > maxVotes) {
                maxVotes = votes;
                winners.length = 0; // Clear previous winners if a new maxVotes is found
                winners.push(candidate);
            } else if (votes === maxVotes) {
                winners.push(candidate); // Add candidate to winners if tied
            }
        }

        return winners;
    }
}

export default VotingSystem;
