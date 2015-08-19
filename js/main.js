//
// $(document).on('ready', function() {

  $('#add-game').on('click', function(){
    library.createGame();
    library.render();
  })

  function Game(title, genre){
    this.title = title;
    this.genre = genre;
  }

  function GameLibrary(title){
    this.title = title;
    this.games =[];
  }

  GameLibrary.prototype.createGame = function () {
    var title = $('#title').val();
    var genre = $('#genre').val();
    var game = new Game (title, genre)
    this.games.push(game)
  };

  GameLibrary.prototype.render = function () {
    $('#title-display').children().remove();
    $('#genre-display').children().remove();
    for (var i = 0; i < this.games.length; i++) {
      $('#title-display').append('<div>'+this.games[i].title+'</div>');
      $('#genre-display').append('<div>'+this.games[i].genre+'</div>');
    }
  };

  var library = new GameLibrary('favorites');
//
// });
