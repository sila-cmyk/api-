export function getBook(isbn) {
  const books = {
    "123": { title: "Kürk Mantolu Madonna", pages: 160 },
    "456": { title: "Saatleri Ayarlama Enstitüsü", pages: 300 }
  };

  return books[isbn];
}
