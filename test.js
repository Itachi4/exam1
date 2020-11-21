function createuser(){
    let db=firebase.database().ref().child("student");
    var uname=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var course=document.getElementById("course").value;
    var  id=document.getElementById("id").value;
    db.child(id).set({
        uname:uname,
        email:email,
        course:course,
        id:id
    });
    console.log("done");
}
function updateUser(){

}
function delUser(){

}
function readUser(){
    console.log("inside fun")
        firebase.database().ref('student').on('child_added', function (snapshot) {
          //console.log(snapshot.val().username);
          console.log("dgrthfyjgkuhil")
          console.log(snapshot.val().uname);
        //   var name = JSON.parse(JSON.stringify(snapshot.val()));
        //   for(var i in name){
        //   console.log(JSON.stringify(i.uname));
        //  }
          //$("#userList").addClass("table table-bordered table-hover");
          //$("#userList").append(`<tr><td>${snapshot.val().username}</td></tr>`);
       // });
      
        });
    }