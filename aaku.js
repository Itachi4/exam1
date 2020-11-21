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
function readUser(){
   // console.log("inside fun")
       let db= firebase.database().ref('student');
       db.on('child_added', (snap)=> {
        var uname=document.getElementById("name").value;
        var email=document.getElementById("email").value;
        var course=document.getElementById("course").value;
        var  id=document.getElementById("id").value;
        $('#userList').append(`
        <tr><td>${snap.val().id}</td>
            <td>${snap.val().uname}</td>
            <td>${snap.val().email}</td>
            <td>${snap.val().course}</td>
        </tr>
        `);
    });
}


    function deleteuser() {
        let id = window.prompt("Enter the id of the user for deleting");
        let dbRef = firebase.database().ref("student/" + id);
    dbRef.remove();
    console.log("Done deleting");
}

function updateuser() {
    console.log("Update User");
    let id = window.prompt("Enter the id for updating");
   // alert(userName);
   var uname=window.prompt("Enter the name ");;
    var email=window.prompt("Enter the email ");;
    var course=window.prompt("Enter the course");;
    let dbRef = firebase.database().ref("student/" + id);
    dbRef.update({ id:id ,uname: uname, email: email, course:course });
    //readUser();
    console.log("details updated successfully");
}