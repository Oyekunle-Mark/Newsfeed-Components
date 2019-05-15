// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    this.attachCloseButton();
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
    this.swapButtonLabel();
  }

  swapButtonLabel() {
    const label = this.expandButton.textContent;
    if (label === "Click to Expand") {
      this.expandButton.textContent = "Click to Collapse";
      return;
    }

    this.expandButton.textContent = "Click to Expand";
  }

  attachCloseButton() {
    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click", this.closeArticle.bind(this));

    this.domElement.appendChild(button);
  }

  closeArticle() {
    this.domElement.style.display = "none";
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll(".article");
articles.forEach(article => {
  new Article(article);
});

// fetch form data and populate article when form is submitted
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const title = document.querySelector("input").value;
  const body = document.querySelector("textarea").value;

  new CreateArticles({
    title,
    body
  });
});

class CreateArticles {
  constructor(newsItem) {
    this.title = newsItem.title;
    this.body = newsItem.body;
    this.date = Date().slice(0, 16);
    this.article = document.createElement("div");

    this.insertH2();
    this.insertDate();
    this.insertBody();
    this.addCloseBody();
    this.appendArticle();

    new Article(this.article);
  }

  insertH2() {
    const header = document.createElement("h2");
    header.textContent = this.title;
    this.article.appendChild(header);
  }

  insertDate() {
    const paragraph = document.createElement("p");
    paragraph.textContent = this.date;
    paragraph.setAttribute("class", "date");
    this.article.appendChild(paragraph);
  }

  insertBody() {
    const body = document.createElement("p");
    body.textContent = this.body;
    this.article.appendChild(body);
  }

  addCloseBody() {
    const closeBody = document.createElement("span");
    closeBody.setAttribute("class", "expandButton");
    this.article.appendChild(closeBody);
  }

  appendArticle() {
    this.article.setAttribute("class", "article");
    document.querySelector(".articles").prepend(this.article);
  }
}
