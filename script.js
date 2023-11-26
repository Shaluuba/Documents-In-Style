window.onload = function() {
    fetch('myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            let parentDiv = document.createElement('div');

            json.forEach((jsonData, index) => {
                let postDiv = document.createElement('div');
                let postBubble = document.createElement('div');
                postBubble.classList.add('post-bubble');

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

// Like Button and Like Count
                let likeContainer = document.createElement('div');
                likeContainer.classList.add('like-container');

                let likeButton = document.createElement('button');
                likeButton.innerHTML = `<img src="${jsonData.likeButton ? jsonData.likeButton.src : 'default-like-button.png'}" alt="${jsonData.likeButton ? jsonData.likeButton.alt : 'Like button'}" width="${jsonData.likeButton ? jsonData.likeButton.width : 40}">`;
                likeContainer.appendChild(likeButton);

                let likeCount = document.createElement('span');
                likeCount.id = 'likeCount-' + index; // Assign unique ID
                likeCount.textContent = jsonData.likeCount || 0;
                likeContainer.appendChild(likeCount);

                // Event listener for the like button
                likeButton.addEventListener('click', function() {
                    likeCount.textContent = parseInt(likeCount.textContent) + 1;
                });

                postBubble.appendChild(likeContainer);
                postDiv.appendChild(postBubble);
                parentDiv.appendChild(postDiv);
            });

            let body = document.querySelector("body");
            body.appendChild(parentDiv);

            // Reset Button Event Listener
            document.querySelector('.btn').addEventListener('click', function() {
                for (let i = 0; i < json.length; i++) {
                    document.getElementById('likeCount-' + i).textContent = 0;
                }
            });

        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}
