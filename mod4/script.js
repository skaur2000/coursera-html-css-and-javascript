(function () {

    var names = ["sandeep", "kamal", "prem", "njali", "neha", "shivani", "mona", "rakhi", "naina", "rahul"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'n') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
