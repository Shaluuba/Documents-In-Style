window.onload = function() {
    fetch('myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let parentDiv = document.createElement('div');

            json.forEach(jsonData => {
                let postDiv = document.createElement('div');
                let postBubble = document.createElement('div');
                postBubble.classList.add('post-bubble');
                postBubble.classList.add('center');

                let postHeader = document.createElement('div');
                postHeader.classList.add('post-header');

                // Profile Picture
                let profilePicture = document.createElement('img');
                profilePicture.src = jsonData.postHeader.profilePicture.src;
                profilePicture.alt = jsonData.postHeader.profilePicture.alt;
                profilePicture.width = jsonData.postHeader.profilePicture.width;
                postHeader.appendChild(profilePicture);

                // Date
                let date = document.createElement('a');
                date.textContent = jsonData.postHeader.date;
                postHeader.appendChild(date);

                postBubble.appendChild(postHeader);

                // Post Image
                if (jsonData.postImage) {
                    let postImage = document.createElement('img');
                    postImage.src = jsonData.postImage.src;
                    postImage.alt = jsonData.postImage.alt;
                    postImage.classList.add(jsonData.postImage.class);
                    postBubble.appendChild(postImage);
                }

                // Post Content
                let postContent = document.createElement('p');
                postContent.textContent = jsonData.postContent;
                postBubble.appendChild(postContent);

                // Like Button
                let likeButton = document.createElement('img');
                likeButton.src = jsonData.likeButton.src;
                likeButton.alt = jsonData.likeButton.alt;
                likeButton.width = jsonData.likeButton.width;
                postBubble.appendChild(likeButton);

                postDiv.appendChild(postBubble);
                parentDiv.appendChild(postDiv);
            });

            let body = document.querySelector("body");
            body.appendChild(parentDiv);
        });
}
