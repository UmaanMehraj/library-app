# Library App

A simple and elegant web application for managing your personal book library. Add, view, and organize your books with an intuitive card-based interface.

## Features

- **Add Books**: Easily add new books to your library with book details (name, author, page count, and read status)
- **View Library**: Browse all your books displayed as organized cards
- **Remove Books**: Delete books from your library with the remove button
- **Persistent Display**: Pre-loaded with sample books for demonstration
- **Responsive Design**: Clean, modern UI with a card-based layout powered by CSS Grid
- **Dialog Form**: User-friendly modal dialog for adding new books

## Known Issues

⚠️ **The "Change Status" button is not yet functional.** This feature is planned for future development. Currently, you can view the read status of books, but updating it is not supported.

## Project Structure

```
library-app/
├── index.html      # Main HTML structure with form dialog
├── script.js       # JavaScript logic for book management
├── styles.css      # Styling and layout
├── README.md       # This file
└── public/
    └── assets/
        ├── icons/  # Favicon and manifest files
        └── images/ # Image assets
```

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **View Books**: The library displays pre-loaded sample books on load
3. **Add a Book**: Click the "Add Book" button to open the form
4. **Fill in Details**:
   - **Name**: The title of the book
   - **Author**: The author's name
   - **Pages**: The number of pages
   - **Read Status**: Enter "Read" or "Not read"
5. **Confirm**: Click "Confirm" to add the book to your library
6. **Remove a Book**: Click the "Remove" button on any book card to delete it

## Sample Books

The app comes pre-loaded with three sample books:

- The Hobbit by J.R.R Tolkien (1020 pages, Read)
- Harry Potter and the Philosophers Stone by J.K Rowling (450 pages, Not read)
- The Hobbit by J.R.R Tolkien (1020 pages, Read)

## Technology Stack

- **HTML5**: Semantic markup with native dialog element
- **CSS3**: Grid-based layout for responsive card design
- **Vanilla JavaScript**: Pure JS for DOM manipulation and event handling
- **Font**: Montserrat from Google Fonts

## Browser Compatibility

Works on all modern browsers that support:

- HTML5 Dialog element
- CSS Grid
- Crypto API (for UUID generation)

## Future Enhancements

- [ ] Implement "Change Status" button functionality
- [ ] Local storage persistence
- [ ] Rating system for books
- [ ] Reading progress tracking
