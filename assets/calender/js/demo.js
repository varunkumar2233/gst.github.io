var events = [
  {
    Date: new Date(2020, 6, 7),
    Title: "Doctor appointment at 3:25pm.",
    Link: "https://garfield.com"
  },

  {
    Date: new Date(2020, 6, 18),
    Title: "New Garfield movie comes out!",
    Link: "https://garfield.com"
  },
  {
    Date: new Date(2019, 6, 27),
    Title: "25 year anniversary",
    Link: "https://www.google.com.au/#q=anniversary+gifts"
  }
];
var settings = {};
var element = document.getElementById("caleandar");
caleandar(element, events, settings);
