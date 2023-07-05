import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'tree',
      imageUrl: 'assets/images/tree.jpeg',
      userName: 'nature',
      content: 'I saw neat tree',
    },
    {
      title: 'mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      userName: 'mountain',
      content: 'I saw neat mountain',
    },
    {
      title: 'bicycle',
      imageUrl: 'assets/images/biking.jpeg',
      userName: 'biking',
      content: 'I saw biking',
    },
  ];

  getPosts(){
    return this.posts;
  }
}
