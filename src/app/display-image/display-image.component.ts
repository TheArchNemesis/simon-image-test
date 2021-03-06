import {Component, OnInit} from "@angular/core";
import {ImageService} from "../image.service";
import {Image} from "../image";

@Component({
  selector: "app-display-image",
  templateUrl: "./display-image.component.html",
  styleUrls: ["./display-image.component.css"]
})
export class DisplayImageComponent implements OnInit {
  /**
   * This Components an {Image} object and displays it's name and content
   */
  private image: Image = {content: "", name: ""};

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.image.subscribe(image => {
      this.image = image;
    });
  }

}
