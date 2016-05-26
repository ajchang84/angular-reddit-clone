var app = angular.module('RedditApp', ['angularMoment', 'ngAnimate']);
app.controller('MotherController', function($scope){
  window.scope = $scope;
  $scope.posts = [
    {
      'id': 0,
      'title': 'Hike Through Zion Narrows',
      'img': 'http://www.citrusmilo.com/zion2007/joebraun_narrows01.jpg',
      'author': 'Tyrion Lannister',
      'date': Date.parse('Tue May 17 2016 16:37:20 GMT-0700 (PDT)'),
      'comments': [{user:'Joe',comment:'nice one!'}],
      'votes': -2,
      'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut.'
    },
    {
      'id': 1,
      'title': 'Olympic National Park',
      'img': 'http://whc.unesco.org/uploads/thumbs/site_0151_0001-750-0-20090914164402.jpg',
      'author': 'Bear Grylis',
      'date': Date.parse('Mon May 23 2016 12:37:20 GMT-0700 (PDT)'),
      'comments': [{user:'Joe', comment:'junk content!'}, {user:'Bob', comment:'hi'}],
      'votes': 2,
      'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut.'
    },
    {
      'id': 2,
      'title': 'Cliffs of Moher',
      'img': 'http://www.cliffsofmoher.ie/wp-content/uploads/2015/01/backgroundhome.jpg',
      'author': 'Cersei Lannister',
      'date': Date.parse('Wed May 25 2016 11:37:20 GMT-0700 (PDT)'),
      'comments': [{user:'Bob', comment:'first!'}],
      'votes': 5,
      'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut.'
    },
    {
      'id': 3,
      'title': 'Outside Aspen, CO',
      'img': 'https://s-media-cache-ak0.pinimg.com/736x/ce/c9/64/cec9649bfa822b9a8aea74c184a45cea.jpg',
      'author': 'Ned Stark',
      'date': Date.parse('Tue May 24 2016 13:37:20 GMT-0700 (PDT)'),
      'comments': [{user:'Joe', comment:'hungry'}, {user:'Bob', comment:'looks nice'}],
      'votes': 10,
      'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptatibus, excepturi fugit officiis quo, sunt maxime voluptatum laboriosam ad magnam obcaecati tempore vel consequatur nihil aliquam quod, officia eaque ut.'
    }
  ]
  $scope.upvote = function(post){
    $scope.posts[post].votes++;
  }
  $scope.downvote = function(post){
    $scope.posts[post].votes--;
  }
  $scope.form = {};
  $scope.submitPost = function(){
    $scope.posts.push({
      'id': $scope.posts.length,
      'title': $scope.form.title,
      'img': $scope.form.image,
      'author': $scope.form.author,
      'date': new Date(),
      'comments': [],
      'votes': 0,
      'content': $scope.form.description,
      'openCommentForm': false,
      'openComments': false,
    })
    $scope.form = {};
    $scope.$parent.postFormOpen = false;
  }
  $scope.submitComment = function(post) {
    $scope.posts[post].comments.push({
      'user': $scope.form.user,
      'comment': $scope.form.comment
    })
    $scope.form = {};
    $scope.posts[post].openCommentForm = false;
    $scope.posts[post].openComments = true;

  }
});