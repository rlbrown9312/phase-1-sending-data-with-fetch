
    //FETCH POST after Lecture
const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
        })
        .then(res => res.json())
        .then(data => document.body.textContent = data["id"])    
        .catch(error => document.body.textContent = error.message)
    }  
        
       



    //.catch(error => console.log("Unauthorized Access"))

    //     .then(function (response)  {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//     alert("Unauthorized Access"); 
//     console.log(error.message);
//     });

    













        //Config Object Prior to IX Lecture
    //  Configuration of Object
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(userData),
// };

    //Fetch Cascade Prior to Lecture. 
// return fetch('http://localhost:3000/users', configurationObject)
//     .then(function (response)  {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//     alert("Unauthorized Access"); 
//     console.log(error.message);
//     });


































// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });





// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);


    //CODE I TYPED BASED ON TEST EXAMPLE
// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body:JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",  
//     }),
// };


// fetch('http://localhost:3000/dogs', configurationObject);
