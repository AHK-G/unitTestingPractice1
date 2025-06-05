class Library {
    private books: Book[];
    private members: Member[];

    public constructor() {
        this.books = [];
        this.members = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public registerMember(member: Member): void {
        this.members.push(member);
    }

    public borrowBook(memberId: string, bookId: string): void {
        const member = this.members.find((m) => m.id === memberId);
        if (!member) {
            throw new Error('Member not found');
        }

        const book = this.books.find((b) => b.id === bookId);
        if (!book) {
            throw new Error('Book not found');
        }

        const overdueBooks = this.checkOverdueBooks(memberId);
        if (overdueBooks.length > 0) {
            throw new Error('Cannot borrow book. Member has overdue books.');
        }

        if (member.booksBorrowed.length >= member.maxBooksAllowed) {
            throw new Error('Maximum books borrowed reached');
        }

        if (book.borrowed) {
            throw new Error('Book is already borrowed');
        }

        book.borrowed = true;
        book.dueDate = this.generateDueDate(); // Optional: due date logic
        member.booksBorrowed.push(book);
    }

    public returnBook(memberId: string, bookId: string): void {
        const member = this.members.find((m) => m.id === memberId);
        if (!member) {
            throw new Error('Member not found');
        }

        const book = member.booksBorrowed.find((b) => b.id === bookId);
        if (!book) {
            throw new Error("Book not found in member's borrowed list");
        }

        book.borrowed = false;
        book.dueDate = null;
        member.booksBorrowed = member.booksBorrowed.filter((b) => b.id !== bookId);
    }

    public checkOverdueBooks(memberId: string): Book[] {
        const member = this.members.find((m) => m.id === memberId);
        if (!member) {
            throw new Error('Member not found');
        }

        const now = new Date();
        return member.booksBorrowed.filter((book) => book.dueDate !== null && book.dueDate < now);
    }

    private generateDueDate(): Date {
        const due = new Date();
        due.setDate(due.getDate() + 14); // 2 weeks from now
        return due;
    }
}

class Book {
    public id: string;
    public title: string;
    public author: string;
    public borrowed: boolean;
    public dueDate: Date | null;

    public constructor(id: string, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.borrowed = false;
        this.dueDate = null;
    }
}

class Member {
    public id: string;
    public name: string;
    public maxBooksAllowed: number;
    public booksBorrowed: Book[];

    public constructor(id: string, name: string, maxBooksAllowed: number) {
        this.id = id;
        this.name = name;
        this.maxBooksAllowed = maxBooksAllowed;
        this.booksBorrowed = [];
    }
}

export { Library, Book, Member };
