window.onload = function() {

    fetch('myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let parentDiv = document.createElement('div');

            json.forEach(jsonData => {

                let postDiv = document.createElement('div');
                
                let postBubble = document.createElement('div');

                let postHeader = document.createElement('div');
                let profilePicture = document.createElement('img');
                profilePicture.src = jsonData.src;
                profilePicture.alt = jsonData.alt;
                profilePicture.width = jsonData.width;

                let date = document.createElement('a')
                date.textContent = jsonData.date;

                postHeader.appendChild(profilePicture);
                postHeader.appendChild(date);
                
                postHeader.classList.add('post-header')

                let postImage = document.createElement('img')
                postImage.src = jsonData.src;
                postImage.alt = jsonData.alt;
                postImage.classList.add(jsonData.class);

                let postContent = document.createElement('p')
                postContent.textContent = jsonData.postContent;

                let likeButton = document.createElement('img')
                likeButton.src = jsonData.src;
                likeButton.alt = jsonData.alt;
                likeButton.width = jsonData.width; 

                postBubble.appendChild(postHeader);
                postBubble.appendChild(postImage);
                postBubble.appendChild(postContent);
                postBubble.appendChild(likeButton);
                
                postDiv.appendChild(postBubble);
                postBubble.classList.add('post-bubble')

                postDiv.classList.add('post');

                parentDiv.appendChild(postDiv);
            })
            let body = document.querySelector("body");

            body.appendChild(parentDiv);
        })
}
