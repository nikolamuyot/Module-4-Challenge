document.addEventListener("DOMContentLoaded", function () {
  // Access the form element by its ID
  const blogForm = document.getElementById("blogForm");

  // Add an event listener for the 'submit' event on the form
  blogForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Capture the form data
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (username && title && content) {
      // Create an object to represent the blog post
      const blogPost = {
        username: username, // Author of the post
        title: title, // Title of the post
        content: content, // Content of the post
        date: new Date().toISOString(), // The current date and time of the post submission
      };

      // Retrieve existing blog posts from localStorage, or initialize an empty array if none exist
      const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

      // Add the new blog post to the array of posts
      blogPosts.push(blogPost);

      // Save the updated array of posts back to localStorage
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

      // Redirect the user to the posts page (blog.html) after submission
      window.location.href = "blog.html";
    } else {
      alert("provide information");
    }

    // // Create an object to represent the blog post
    // const blogPost = {
    //   username: username, // Author of the post
    //   title: title, // Title of the post
    //   content: content, // Content of the post
    //   date: new Date().toISOString(), // The current date and time of the post submission
    // };

    // // Retrieve existing blog posts from localStorage, or initialize an empty array if none exist
    // const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // // Add the new blog post to the array of posts
    // blogPosts.push(blogPost);

    // // Save the updated array of posts back to localStorage
    // localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    // // Redirect the user to the posts page (blog.html) after submission
    // window.location.href = "blog.html";
  });
});
