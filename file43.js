//object inside array
//very usefull in real world application

const users=[
    {userId:1, firstName:'prajwal',gender:'male'},
    {userId:2, firstName:'Aniket',gender:'Female'},
    {userId:3, firstName:'malinath',gender:'male'},
           ]
        //   console.log(user);
     /*   for(let user of users){
            console.log(user.firstName,user.gender);
        }
        */
     //const [user1, user2, user3] =users;
     const[{firstName: userfirstName}, ,{gender}] =user;
    // console.log(user1);
console.log(user1firstName);
