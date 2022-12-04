import "./main.scss";  // Styling
import baseLayout from './baseLayout';
import home from './home';

// Create the base layout on page first load
baseLayout.create();
home.generate();
