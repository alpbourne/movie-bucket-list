$(function(){
  $("a.load_comments").on("click", function(e){
  //   alert("yayy!")
  //   e.preventDefault();
  // })
    $.ajax({
      method: "GET",
      url: this.href,
    }).done(function(data){
      $("div.comments").html(data)
    });
    e.preventDefault();
  });
  $("#new_comment").on("submit", function(e){
    url = this.action
    console.log(url)

    data = {
      'authenticity_token': $("input[name='authenticity_token']").val(),
      'comment': {
        'content': $("#comment_content").val()
      }
    };
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(data){
        $("div.comments").html(data)
      }
    });

    console.log(data);
    e.preventDefault();
  });
});






// function Movie(name, genre, rating) {
//   this.name = name
//   this.genre = genre
//   this.rating = rating
// }
//
// Movie.prototype.renderMovies = function(){
//   return ''
// }
