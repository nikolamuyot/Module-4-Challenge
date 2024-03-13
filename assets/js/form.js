// Wait for the DOM to fully load before attaching event handlers
document.addEventListener("DOMContentLoaded", function () {
  // Access the form element
  const blogForm = document.getElementById("blogForm");

  // Listen for the form submission event
  blogForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Capture the form data
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Create a blog post object
    const blogPost = {
      username: username,
      title: title,
      content: content,
      date: new Date().toISOString(), // Store the current date and time as the post's date
    };

    // Retrieve existing posts from localStorage or initialize an empty array if none exist
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add the new blog post to the array of posts
    blogPosts.push(blogPost);

    // Save the updated array of posts back to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    // Optionally, clear the form fields after submission or redirect the user to another page
    blogForm.reset();

    // If you have a separate page to display posts, you might redirect the user to that page
    // window.location.href = 'path/to/your/posts/page.html';
  });
});
