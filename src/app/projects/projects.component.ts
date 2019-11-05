import { Component } from "@angular/core";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class projectsComponent {
  constructor() {}

  // project -> title, image, description, tech used, link if have any,
  projects: Array<Object> = [
    {
      title: "Slide Puzzle Game",
      image: "../../assets/images/slide-puzzle.JPG",
      description:
        "A sliding puzzle game which challenges user to arrange the pieces in order.User can click a box to shift a single box or multiple boxes at a time. When user solves it, winner message gets displayed.",
      techUsed: "HTML, CSS, JavaScript, TweenMax.js"
    },
    {
      title: "Scrabble Game",
      image: "../../assets/images/scrabble.JPG",
      description:
        "GUI app which allows user to type a word satisfying certainconditions and calculates the points according to the Scrabblepoints system.",
      techUsed: "Java, JavaFX"
    },
    {
      title: "Post It",
      image: "../../assets/images/project1.jpg",
      description:
        "Web app where user can login and create their own posts about their daily life and see other’s posts",
      techUsed: "C#, ASP.NET Framework, MS SQL, AJAX"
    },
    {
      title: "Book Library",
      image: "../../assets/images/project1.jpg",
      description:
        "A web app which requires login to store and edit book’s information",
      techUsed: "PHP, HTML5/CSS, MySQL"
    },
    {
      title: "See-n-say Storymaker",
      image: "../../assets/images/see-n-say-storymaker.JPG",
      description:
        "A classic toy app based on the real toy which used speech API to speak the value chosen by the user",
      techUsed: " ​HTML5/CSS/JS"
    }
  ];
}
