const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

// Destructuring and Rest/Spread operators

const book = getBook(2);
const {title, author, genres} = book;

const [primaryGenre, secondaryGenres, ...otherGenres] = genres;

const newGenres = [...genres, "new genre"];

const updatedBook = {
    ...book,
    moviePublicationDate: "2021-01-01",
}

// Template literals

const summary = `${title} by ${author} is a ${genres.length} genres book.`;

// Ternary operator

const hasMovie = book.hasMovieAdaptation ? "has movie" : "has no movie";

// Arrow functions

const getBookSummary = (book) => `${book.title} by ${book.author}`;

// Short-circuiting

console.log(false && "hello"); // false
console.log(hasMovie && "has movie"); // has movie

console.log("Jonas" && 'hello'); // hello
console.log(0 && 'hello'); // 0
console.log('' && 'hello'); // ''
console.log(true && 'hello'); // hello

console.log(true || "hello"); // true
console.log(false || "hello"); // hello

console.log(book.translations.spanish || "No translation"); // No translation
console.log(0 || "No translation"); // No translation

console.log(0 ?? "No translation"); // 0
console.log(false ?? "No translation"); // false
console.log("" ?? "No translation"); // ""
console.log(null ?? "No translation"); // No translation
console.log(undefined ?? "No translation"); // No translation

// Optional chaining

function getTotalReviewCount (book) {
    return book.reviews?.goodreads?.ratingsCount ?? 0;
}

console.log(getTotalReviewCount(book)); // 11663
console.log(getTotalReviewCount({})); // 0

// Array Map Method

const books = getBooks();
const bookTitles = books.map((book) => book.title);
const essentialBookInfo = books.map((book) => ({
    title: book.title,
    author: book.author,
    genres: book.genres,
}));

// Array Filter Method

const longBooks = books.filter((book) => book.pages > 500);
const adventureBooks = books.filter((book) => book.genres.includes("adventure"));

// Array Reduce Method

const totalBookPages = books.reduce((total, book) => total + book.pages, 0);

// Array Sort Method

const sortedBooks = books.sort((a, b) => a.pages - b.pages); // ascending
const sortedBooks2 = books.sort((a, b) => b.pages - a.pages); // descending

//!! Sort Method Mutates the Original Array!!!!!!!!!!
//!! Use Spread Operator to Create a New Array!!!!!!!!!

const sortedBooks3 = [...books].sort((a, b) => a.pages - b.pages); // ascending
const sortedBooks4 = books.slice().sort((a, b) => a.pages - b.pages); // ascending

// Working with Immutable Arrays

// 1) Add an element to the end of an array

const newBooks = [...books, {
    id: 6,
    title: "The Hobbit",
    publicationDate: "1937-09-21",
}];

// 2) Delete an element from an array

const filteredBooks = books.filter((book) => book.id !== 2);

// 3) Update an element in an array

const updatedBooks = books.map((book) => {
    if (book.id === 2) {
        return {
            ...book,
            title: "The Cyberiad",
        };
    }
    return book;
});

// Promises

function getBookById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = getBook(id);
            if (book) {
                resolve(book);
            } else {
                reject("Book not found");
            }
        }, 2000);
    });
}

getBookById(2).
    then((book) => console.log(book)).
    catch((error) => console.log(error));

// Async/Await

async function getBookByIdAsync(id) {
    const book = await getBookById(id);
    return book;
}