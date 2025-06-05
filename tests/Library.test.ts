import { Book, Library, Member } from "../src/Library";

describe("Library", () => {
  let book: Book;
  let library: Library;
  let member: Member;

  beforeEach(() => {
    library = new Library();
    book = new Book("1", "A Fantastic Book", "Author Magnificent");
    member = new Member("1", "Wot A. Reader", 3);
  });

  it("should be able to borrow a book", () => {
    library.registerMember(member);
    library.addBook(book);

    library.borrowBook(member.id, book.id);

    expect(book.borrowed).toBe(true);
  });

  it("should throw an error when borrowing a book if the member can't be found", () => {
    const nonExistentMemberId = "123";
    library.addBook(book);

    const nonExistentMember = () =>
      library.borrowBook(nonExistentMemberId, book.id);

    expect(nonExistentMember).toThrow("Member not found");
  });

  it("should throw an error when borrowing a book if the book can't be found", () => {
    library.registerMember(member);
    const nonExistentBookId = "123";

    const nonExistentBook = () =>
      library.borrowBook(member.id, nonExistentBookId);

    expect(nonExistentBook).toThrow("Book not found");
  });
});
