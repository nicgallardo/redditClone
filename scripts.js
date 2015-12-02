var app = angular.module("redditApp", ['angularMoment'])
app.controller("redditCtrl", function($scope){

  $scope.time = new Date();

  $scope.form = false;
  $scope.commentForm = false;
  $scope.posts = [];
  $scope.comments = [];
  $scope.votes = 0;
  $scope.post = {};
  $scope.createComment = {};

  $scope.sorting = '-version';

  $scope.formShow = function(){
    $scope.form = true;
  }

  $scope.submit = function(comments){
    $scope.form = false;
    $scope.post = {
      commentsShow: false,
      commentForm: false,
      postDate: Date(),
      title: $scope.post.title,
      author: $scope.post.author,
      imageURL: $scope.post.imageURL,
      description: $scope.post.description,
      comments: []
    }
    $scope.posts.push($scope.post);
    console.log($scope.posts);
    $scope.post = {};
  }
  $scope.countUp = function(){
    $scope.votes + 1
  }

  $scope.countDown = function(){
    $scope.votes - 1
  }
  $scope.commentFormShow = function(){
    this.post.commentForm = true;
  }

  $scope.submitComment = function(){
    this.post.commentForm = false;
    console.log("createComment", $scope.createComment);
    this.post.comments.push($scope.createComment);
    $scope.createComment = {};
  }

  $scope.commentsShow = function(){
    this.post.commentsShow = true;
  }
  $scope.commentsClose = function(){
    this.post.commentsShow = false;
  }
})
