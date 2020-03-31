//sorting users obj
let users=[
    {
        name:"Hiro",
        age:57,
        id:2
    },
    {
        name:"Anna",
        age:7,
        id:3
    },
    {
        name:"Ben",
        age:5,
        id:8
    },
    {
        name:"Coc",
        age:12,
        id:1
    },
    {
        name:"Jim",
        age:37,
        id:12
    },
    {
        name:"Alik",
        age:27,
        id:5
    },
    {
        name:"Bob",
        age:15,
        id:9
    },
    {
        name:"Cusy",
        age:17,
        id:10
    }
];
//fill table
function displayUser(user){
    let table= "";
    for (let i=0; i <user.length;i++){
        table+="<tr>";
        table+="<td>"+user[i].id+"</td>";
        table+="<td>"+user[i].name+"</td>";
        table+="<td>"+user[i].age+"</td>";
        table+="</tr>";
    }
    document.getElementById("userlist").innerHTML = table;
}

idSort.onclick = function () {
    let sortUsers = sortUserAttr(users, "id");
    displayUser(sortUsers);
};
nameSort.onclick = function () {
    let sortUsers = sortUserAttr(users, "name");
    displayUser(sortUsers);
};
ageSort.onclick = function () {
    let sortUsers = sortUserAttr(users, "age");
    displayUser(sortUsers);
};

function sortUserAttr(users, attr){
    if (attr === "id" || attr === "age") {
        return users.sort((a, b) => b[attr] - a[attr])
    }   else {
        return Array.from(users).sort((a, b) => {
            return a[attr].localeCompare(b[attr], 'en', { sensitivity: 'base' });
        }).reverse();
    }
}
window.onload = function () {
    let sortUsers = sortUserAttr(users, "id");
    displayUser(sortUsers);
};

// another way

// function sortUserAttr(users, attr) {
//      for (let j = 0; j < users.length - 1; j++){
//         let maxusers = users[j];
//         let maxloct = j;
//         let max = getMax(users, j, attr);
//         maxusers = max.max_users;
//         maxloct = max.max_loct;
//         users[maxloct] = users[j];
//         users[j] = maxusers
//     }
//     return users
// }
//
// function getMax(user, start, attr){
//     let maxusers = user[start];
//     let maxloct = start;
//     for (let i = start; i < user.length; i++){
//         if (user[i][attr] > maxusers[attr]){
//             maxusers = user[i];
//             maxloct = i
//         }
//     }
//     return {max_users: maxusers, max_loct: maxloct}
// }