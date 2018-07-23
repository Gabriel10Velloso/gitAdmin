import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { toast } from 'angular2-materialize';

// import * as $ from 'jquery';
declare let $: any;
@Component({
  selector: 'app-git-dashboard',
  templateUrl: './git-dashboard.component.html',
  styleUrls: ['./git-dashboard.component.scss'],
})
export class GitDashboardComponent implements OnInit {

  user: any;
  repos: any;
  username: string;
  followings: any;
  stars: any;




  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getUser();
    this.getRepo();
    this.getFollowings();
    this.getStars();
  }

  search() {
    this.githubService.updateUsername(this.username);

    this.getUser();

    this.getRepo();

    this.githubService.getFollowings().subscribe(followings => {
      this.followings = followings;
      $(document).ready(function() {
        $('.carousel').removeClass('initialized');
        $('.carousel').carousel();
      });
      // console.log(followings);
    });

    this.getStars();
}

  getUser() {
    this.githubService.getUsers().subscribe(user => {
      this.user = user;
      // console.log(user);
    }, err => {
      toast('User not found. 😞', 5000, 'red');
    });
  }

  getRepo() {
    this.githubService.getRepose().subscribe(repos => {
      this.repos = repos;
      // console.log(repos);
    });
  }

  getStars() {
    this.githubService.getStars().subscribe(stars => {
    this.stars = stars;
    // console.log(stars);
    });
  }

  getFollowings() {
    this.githubService.getFollowings().subscribe(followings => {
    this.followings = followings;
    // console.log(followings);
    });
  }


}


