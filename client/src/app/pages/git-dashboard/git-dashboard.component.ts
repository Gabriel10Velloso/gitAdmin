/**
 * @author Gabriel Velloso
 * @version 1.0 23/07/2018
 * @desc e gets all Users,  logged in owns or participates, gets search (users, repos and starreds)
 * and store them inside the respective cards
 */

import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

// Materialize
import { toast } from 'angular2-materialize';

// MODELS
import { User } from './../../model/user.model';
import { Repo } from '../../model/repo.model';
import { Following } from '../../model/following.model';
import { Star } from '../../model/star.model';

// import * as $ from 'jquery';
declare let $: any;
@Component({
  selector: 'app-git-dashboard',
  templateUrl: './git-dashboard.component.html',
  styleUrls: ['./git-dashboard.component.scss'],
})
export class GitDashboardComponent implements OnInit {

  // username: string;        OBS>>>>  DESSA FORMA O TSLINT ESTAVA DANDO MUITO ERRO NO HTML
  // user: User;              OBS>>>>  Decidi deixar da forma abaixo mas a comentada também funcina.
  // repos: Repo[];
  // followings: Following[];
  // stars: Star[];

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


