class Course {
    public name: string;
    public credits: number;

    constructor(name: string, credits: number) {
        this.name = name;
        this.credits = credits;
    }
}

type EnrollmentStatus = 'pending' | 'enrolled' | 'withdrawn' | 'completed';

class Enrollment {
    private readonly course: Course;
    private status: EnrollmentStatus;
    private creditsEarned: number;
    private prerequisitesCompleted: boolean;

    constructor(course: Course) {
        this.course = course;
        this.status = 'pending';
        this.creditsEarned = 0;
        this.prerequisitesCompleted = false;
    }

    // Enroll in the course
    public enroll(): void {
        if (this.status === 'pending' || this.status === 'withdrawn') {
            if (this.prerequisitesCompleted) {
                this.status = 'enrolled';
            } else {
                throw new Error('Cannot enroll. Prerequisites not completed.');
            }
        } else {
            throw new Error('Cannot enroll. Already enrolled or completed.');
        }
    }

    // Withdraw from the course
    public withdraw(): void {
        if (this.status === 'enrolled') {
            this.status = 'withdrawn';
        } else {
            throw new Error('Cannot withdraw. Not currently enrolled.');
        }
    }

    // Complete the course
    public complete(): void {
        if (this.status === 'enrolled') {
            this.status = 'completed';
            this.creditsEarned = this.course.credits;
        } else {
            throw new Error('Cannot complete. Not currently enrolled.');
        }
    }

    // Set prerequisites as completed
    public setPrerequisitesCompleted(): void {
        this.prerequisitesCompleted = true;
    }

    // Optional: Expose read-only data
    public getStatus(): EnrollmentStatus {
        return this.status;
    }

    public getCreditsEarned(): number {
        return this.creditsEarned;
    }

    public getCourse(): Course {
        return this.course;
    }
}

export {Enrollment, Course};
