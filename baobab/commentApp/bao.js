//var Baobab = require('baobab');

var stateTree = new Baobab({
  admin: {
 
      users: ["Billy", "Lance", "Gavin"]
    
  },
  peeps: ["peep 1", "peep 2"],
  home: {
    news: []
  }
});

var adminCursor = stateTree.select('admin');
var userCursor = stateTree.select('users');
var peepCursor = stateTree.select('peeps');
var peep = peepCursor.get(); // = adminCursor.get();
var content = document.getElementById("content");
content.innerHTML = peep;
//console.log(peep);

peepCursor.on('update', function () {
 // console.log('I saw a change'); // I will trigger
  //console.log(peepCursor.get());
  content.innerHTML += "<br>I saw a change<br>";
  content.innerHTML += peepCursor.get();
  
});

peepCursor.push(['foo','bar', 'biff', 'baz', 'hoolow']);

$("#addButton").on("click", function(){
	peepCursor.push($("#addPeep").val());
});
