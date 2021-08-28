const fetch = require('node-fetch');


const course_list_get = (req,res)=> {

    fetch('https://www.udemy.com/api-2.0/courses/', {
        method: 'GET',
        headers: { 'Authorization': 'Basic T0RqUk9QS2xUT3N6MzRkSkdTQ1kyenNqazlWREI0Q00zVk00V3NVSTpzZmZtcXJ2MzQ4QnpIc0Z0bFl4STdESFptekxQY0hwYmh3dkhzbVE3NnU1UEdETTluVVpKSWU3MVo0dDJCNHhaOFkyQjhZUkZrZG5zbDd5ZGtPSW5YcUsxYnJuMm5hbFhmOFZYblZnZks2dVRPeUNiaVpjSm9zNVpxTW1ETURzWA==' }
    })
    .then(res => res.json())
    .then(data => {
        data = data.results;
        res.render('index',{courses:data})
    })
    .catch(err => {
        console.log(err);
      });
}

const login_get = (req,res) => {
    res.render('login')
}
const instructors_get = (req,res) => {

    fetch('https://www.udemy.com/api-2.0/courses/', {
        method: 'GET',
        headers: { 'Authorization': 'Basic T0RqUk9QS2xUT3N6MzRkSkdTQ1kyenNqazlWREI0Q00zVk00V3NVSTpzZmZtcXJ2MzQ4QnpIc0Z0bFl4STdESFptekxQY0hwYmh3dkhzbVE3NnU1UEdETTluVVpKSWU3MVo0dDJCNHhaOFkyQjhZUkZrZG5zbDd5ZGtPSW5YcUsxYnJuMm5hbFhmOFZYblZnZks2dVRPeUNiaVpjSm9zNVpxTW1ETURzWA==' }
    })
    .then(res => res.json())
    .then(data => {
        data = data.results;
        res.render('instructors',{courses:data})
    })
    .catch(err => {
        console.log(err);
      });

}

const course_details_get = (req,res) => {
    const id = req.params.id;
    fetch('https://www.udemy.com/api-2.0/courses/' + id, {
        method: 'GET',
        headers: { 'Authorization': 'Basic T0RqUk9QS2xUT3N6MzRkSkdTQ1kyenNqazlWREI0Q00zVk00V3NVSTpzZmZtcXJ2MzQ4QnpIc0Z0bFl4STdESFptekxQY0hwYmh3dkhzbVE3NnU1UEdETTluVVpKSWU3MVo0dDJCNHhaOFkyQjhZUkZrZG5zbDd5ZGtPSW5YcUsxYnJuMm5hbFhmOFZYblZnZks2dVRPeUNiaVpjSm9zNVpxTW1ETURzWA==' }
    })
    .then(res => res.json())
    .then(data => {
        if(data._class=='course')
            res.render('details',{course:data})
        else
        res.render('404')
    })
    .catch(err => {
        console.log(err);
      });
}

module.exports = {
    course_list_get,
    course_details_get,
    login_get,
    instructors_get
}