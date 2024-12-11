const postsElemet = document.getElementById('posts')
const usersElement = document.getElementById("users")

function getPosts(userId) {

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId)
    request.responseType = "json"
    request.send()
    request.onload = function () {

        if (request.status >= 200 && request.status < 300) {

            let posts = request.response

            postsElemet.innerHTML = ""

            for (let post of posts) {

                let content = `

                    <div id="post">

                        <h3>${post.title}</h3>
                        <h4>${post.body}</h4>
                    </div>
                `

                postsElemet.innerHTML += content
            }

        } else {

            alert("Something Went Wrong!")
        }
    }
}

function getUsers() {

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function () {

        if (request.status >= 200 && request.status < 300) {

            let users = request.response

            usersElement.innerHTML = ""

            for (let user of users) {

                let content = `

                    <div id="user" onclick="userClicked(${user.id}, this)">

                        <h3>${user.username}</h3>
                        <h4>${user.email}</h4>
                    </div>
                `

                usersElement.innerHTML += content
            }

        } else {

            alert("Something Went Wrong!")
        }
    }
}

getUsers()

function userClicked(id, element) {

    getPosts(id)

    let selectedElement = document.getElementsByClassName("selected")

    for (let elemnt of selectedElement) {

        elemnt.classList.remove("selected")
    }

    element.classList.add("selected")
}