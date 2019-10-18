var employees = [
    {
        "firstName" : "Faisal",
        "lastName"  : "Ahmed",
        "age"       : "23",
        "salary"    : "25000"
    },
    {
        'firstName'  :   'Robin',
        'lastName'   :   'Khan',
        'age'        :   '33',
        'salary'     :   '50000'
    },
    {
        'firstName'  :   'Ruhul',
        'lastName'   :   'Ahammed',
        'age'        :   '26',
        'salary'     :   '70000'
    },
    {
        'firstName'  :   'Jowel',
        'lastName'   :   'Khan',
        'age'        :   '28',
        'salary'     :   '75000'
    }
];

// $.each(employees, function (i, item) {
//     alert(item.firstName);
// });

$.each(employees, function (i, item) {
   $("#tbody").append(
       "<tr>" +
            "<td>"+ item.firstName +"</td>" +
            "<td>"+ item.lastName +"</td>" +
            "<td>"+ item.age +"</td>" +
            "<td>"+ item.salary +"</td>" +
       "</tr>"
   );
});