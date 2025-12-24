import { getBook } from "./book.js";

export function calculateReadingTime(isbn) {
  const book = getBook(isbn);
  const pagesPerHour = 50;

  return {
    book: book.title,
    estimatedTime: `${book.pages / pagesPerHour} saat`
  };
}
