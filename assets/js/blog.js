document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("postsContainer");
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // Check if there are any posts to display
  if (blogPosts.length > 0) {
    blogPosts.forEach(function (post) {
      const postElement = document.createElement("div");
      postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${
                  post.username
                } <strong>on</strong> ${new Date(
        post.date
      ).toLocaleDateString()}</p>
                <p>${post.content}</p>
            `;
      postsContainer.appendChild(postElement);
    });
  } else {
    postsContainer.innerHTML = "<p>No posts to display.</p>";
  }
});
