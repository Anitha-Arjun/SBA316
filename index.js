const mainEl = window.document.querySelector("main");
//Apply background color
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.setAttribute("class", "flex-ctr");

landingPage();

//Name and assign a top menu var
const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";
//Set the background color of topMenuEl
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//set flex to topMenu
topMenuEl.setAttribute("class", "flex-around");

//MenuLinks structure
var menuLinks = [
  { text: "Home", href: "javascript:landingPage();" },
  {
    text: "Recipes",
    href: "#",
    subLinks: [
      { text: "Vegetarain", href: "javascript:createContent(receipes, 1);" },
      {
        text: "Non-Vegetarain",
        href: "javascript:createContent(receipes, 2);",
      },
      { text: "Keto", href: "javascript:createContent(receipes, 3);" },
    ],
  },
  {
    text: "About",
    href: "#",
    subLinks: [
      { text: "Contact Us", href: "javascript:contactUsPage();" },
      // { text: "Email", href: "/About/Email" },
      // { text: "FAQ's", href: "/About/FAQ's" },
    ],
  },
  {
    text: "Account",
    href: "#",
    subLinks: [
      { text: "Login", href: "javascript:loginPage();" },
      // { text: "profile", href: "/account/profile" },
      // { text: "sign out", href: "/account/signout" },
    ],
  },
];
//adding the menuLink to the navBar
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

function landingPage() {
  mainEl.innerHTML = "";
  let container = document.createElement("div");
  container.className = "container";

  mainEl.appendChild(container);
  let rootDiv = document.createElement("div");
  rootDiv.className = "content";

  //Creating an h1 element
  let heading = document.createElement("h1");
  heading.textContent = "3 Lazy Summer Dinners You'll Never Get Tired Of";
  let buttonTag = document.createElement("button");
  buttonTag.id = "changeImage";
  buttonTag.textContent = ">>";

  //Creating an image element
  let imgTag = document.createElement("img");
  imgTag.id = "homeImage";
  imgTag.src = "food.jpg";
  imgTag.className = "homeimg";

  let paragraph = document.createElement("p");
  paragraph.textContent =
    "From Mediterranean to Keto, these meals are great options for when you want a delicious dinner but don't have the energy to match your appetite.";
  rootDiv.appendChild(heading);
  rootDiv.appendChild(imgTag);
  rootDiv.appendChild(buttonTag);
  rootDiv.appendChild(paragraph);
  container.appendChild(rootDiv);
}

function changeImageSource() {
  const imageSource = [
    "mediterranean-stuffed-zucchini.jpg",
    "food.jpg",
    "quick-keto-chocolate.jpg",
    "baked-sweet-sour-chicken.jpg",
  ];
  const imgElement = document.getElementById("homeImage");
  let currentIndex = imageSource.indexOf(imgElement.src.split("/").pop());
  currentIndex = (currentIndex + 1) % imageSource.length;

  // Set the new image source
  imgElement.src = imageSource[currentIndex];
}
document
  .getElementById("changeImage")
  .addEventListener("click", changeImageSource);

function contactSubmission() {
  let fName = document.getElementById("fname").value;
  alert("Feedback Submitted " + fName);
  landingPage();
}

function contactUsPage() {
  mainEl.innerHTML = "";
  let container = document.createElement("div");
  container.className = "container";
  // Create the form element
  const form = document.createElement("form");
  form.action = "javascript:contactSubmission();";

  // First Name Label and Input
  const fnameLabel = document.createElement("label");
  fnameLabel.setAttribute("for", "fname");
  fnameLabel.textContent = "First Name";
  form.appendChild(fnameLabel);

  const fnameInput = document.createElement("input");
  fnameInput.type = "text";
  fnameInput.id = "fname";
  fnameInput.name = "firstname";
  fnameInput.placeholder = "Your name..";
  fnameInput.required = true;
  form.appendChild(fnameInput);

  // Last Name Label and Input
  const lnameLabel = document.createElement("label");
  lnameLabel.setAttribute("for", "lname");
  lnameLabel.textContent = "Last Name";
  form.appendChild(lnameLabel);

  const lnameInput = document.createElement("input");
  lnameInput.type = "text";
  lnameInput.id = "lname";
  lnameInput.name = "lastname";
  lnameInput.placeholder = "Your last name..";
  form.appendChild(lnameInput);

  // Country Label and Select
  const countryLabel = document.createElement("label");
  countryLabel.setAttribute("for", "country");
  countryLabel.textContent = "Country";
  form.appendChild(countryLabel);

  const countrySelect = document.createElement("select");
  countrySelect.id = "country";
  countrySelect.name = "country";
  ["USA", "Canada", "India"].forEach((country) => {
    const option = document.createElement("option");
    option.value = country.toLowerCase();
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  form.appendChild(countrySelect);

  // Subject Label and Textarea
  const subjectLabel = document.createElement("label");
  subjectLabel.setAttribute("for", "subject");
  subjectLabel.textContent = "Subject";
  form.appendChild(subjectLabel);

  const subjectTextarea = document.createElement("textarea");
  subjectTextarea.id = "subject";
  subjectTextarea.name = "subject";
  subjectTextarea.placeholder = "Write something..";
  subjectTextarea.style.height = "200px";
  form.appendChild(subjectTextarea);

  // Submit Button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  submitButton.id = "contactBtn";
  form.appendChild(submitButton);

  // Append form to container
  container.appendChild(form);
  mainEl.appendChild(container);
}

function loginPage() {
  mainEl.innerHTML = "";
  let container = document.createElement("div");
  container.className = "container";
  // Create the form element
  const form = document.createElement("form");
  form.action = "#";

  // User Name Label and Input
  const unameLabel = document.createElement("label");
  unameLabel.setAttribute("for", "uname");
  unameLabel.textContent = "User Name";
  form.appendChild(unameLabel);

  const unameInput = document.createElement("input");
  unameInput.type = "text";
  unameInput.id = "uname";
  unameInput.name = "username";
  unameInput.placeholder = "Username";
  form.appendChild(unameInput);

  // Password Label and Input
  const passLabel = document.createElement("label");
  passLabel.setAttribute("for", "password");
  passLabel.textContent = "Password";
  form.appendChild(passLabel);

  const passInput = document.createElement("input");
  passInput.type = "password";
  passInput.id = "password";
  passInput.name = "password";
  passInput.placeholder = "Password";
  form.appendChild(passInput);

  // Submit Button
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Login";
  form.appendChild(submitButton);

  // Append form to container
  container.appendChild(form);
  mainEl.appendChild(container);
}

function createContent(receipes, id) {
  let receipe = receipes.find((o) => o.id === id);
  // Clear the existing content
  mainEl.innerHTML = "";

  // Get the template and clone it
  const template = document.getElementById("receipe-template").content;
  const clone = document.importNode(template, true);

  // Populate the cloned template with data
  clone.querySelector(".content h1").textContent = receipe.title;
  clone.querySelector(".content img").src = receipe.imageUrl;

  const ingUl = clone.querySelector("#ingId");
  receipe.ingredients.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    ingUl.appendChild(li);
  });

  const stepsUl = clone.querySelector(".content2 ul");
  receipe.steps.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    stepsUl.appendChild(li);
  });

  // Append the populated clone to the main element
  mainEl.appendChild(clone);

  // Log class names of the elements
  const parentElement = mainEl.getElementsByClassName("container");

  const firstChild = parentElement[0].firstElementChild;
  console.log("First Child className :", firstChild.className);

  const lastChild = parentElement[0].lastElementChild;
  console.log("Last Child className : ", lastChild.className);

  const sibling = firstChild.nextElementSibling;
  console.log("Sibling className : ", sibling.className);
}

//Adding interactivity
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;
// Grabbing all topMenuEl <a> elements
const topMenuLinks = document.querySelectorAll("a");
//Add EventListener
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!e.target.matches("a")) {
    return;
  }
  console.log(e.target.textContent);
  //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  e.target.classList.toggle("active");
  //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
  });
  //Adding Submenu Interaction
  //Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  //Otherwise, set the CSS top property of subMenuEl to 0.
  //Hint: Caching the "link" object will come in handy for passing its subLinks array later.
  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  if (e.target.classList.contains("active") && clickedLink.subLinks) {
    subMenuEl.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
  } else {
    if (!clickedLink.subLinks) {
      subMenuEl.style.top = 0;
      landingPage();
    }
  }
  function buildSubMenu(subLinks) {
    //Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = "";
    //Iterate over the subLinks array, passed as an argument, and for each "link" object:
    subLinks.forEach((link) => {
      //Create an <a> element.
      const a = document.createElement("a");
      //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      a.setAttribute("href", link.href);
      //Set the element's content to the value of the text property of the "link" object.
      a.textContent = link.text;
      //Append the new element to the subMenuEl.
      subMenuEl.appendChild(a);
    });
  }
});

const receipes = [
  {
    id: 1,
    title: "Mediterranean Stuffed Zucchini",
    type: "Veg",
    ingredients: [
      "1 extra large zucchini, halved lengthwise",
      "1 tablespoon olive oil",
      "1 sweet onion, chopped",
      "1 tablespoon chopped garlic",
      "1 pound ground lamb",
      "coarse salt to taste",
      "ground black pepper to taste",
      "1 (16 ounce) can tomato sauce",
      "2 tomatoes, chopped",
      "¾ cup crumbled feta cheese",
      "½ cup pine nuts",
      "¼ cup mint leaves",
      "¼ cup water",
      "¾ cup seasoned bread crumbs",
      "¾ cup shredded mozzarella cheese",
    ],
    steps: [
      "Preheat oven to 450 degrees F (230 degrees C).",
      "Use a melon baller to separate and remove seeds and pulp separately from the zucchini, carving out each half and leaving about a half-inch shell. Chop zucchini pulp into pieces about 1/4 inch in diameter. Discard seeds.",
      "Heat olive oil in a large skillet over medium heat. Cook and stir onion and garlic in hot oil until tender, about 5 minutes. Add ground lamb; continue to cook and stir until lamb is lightly browned, 5 to 7 minutes. Stir chopped zucchini into the lamb mixture. Reduce heat to medium-low. Simmer mixture until the zucchini is hot, about 3 minutes. Drain excess grease. Season lamb mixture with coarse salt and black pepper",
      "Remove skillet from heat. Stir tomato sauce, tomatoes, feta cheese, pine nuts, and 1/4 cup mint leaves through the lamb mixture; spoon into the zucchini halves. Put stuffed zucchini halves into a large baking dish. Pour water into the baking dish.",
      "Bake in preheated oven for 30 minutes. Mix bread crumbs and mozzarella cheese in a bowl. Sprinkle 1/4 cup mint leaves over the zucchini and top with the bread crumb mixture. Continue baking until the top is crusty and browned, about 10 minutes more",
    ],
    imageUrl: "mediterranean-stuffed-zucchini.jpg",
  },
  {
    id: 2,
    title: "Baked Sweet And Sour Chicken",
    type: "Non-Veg",
    ingredients: [
      "1/4 cup olive oil, divided",
      "4 (6-ounce) boneless skinless chicken thighs, cut into 1 inch cubes",
      "1/4 teaspoon freshly ground black pepper",
      "1 3/4 teaspoons kosher salt",
      "2 large eggs",
      "1 cup all purpose flour",
      "2 large multicolored bell peppers, sliced",
      "1/2 cup ketchup",
      "1/4 cup pineapple juice",
      "1/4 cup honey",
      "3 tablespoons soy sauce",
      "1 tablespoon rice vinegar",
      "3 cups cooked white rice",
    ],
    steps: [
      "Gather all ingredients. Preheat oven to 475 degrees F (245 degrees C) with racks in upper and lower third positions. Grease each of 2 baking sheets with 1 tablespoon of the oil along 1 of the short sides; set aside.",
      "Sprinkle chicken evenly with pepper and 1 1/2 teaspoons of the salt, and place in a bowl. Add eggs, and stir to coat. Place flour in a shallow bowl or baking dish. Working in batches, dredge chicken in flour, and shake off excess. Divide chicken between the prepared baking sheets, spreading in an even layer along short edges. ",
      "Divide bell peppers among baking sheets, spreading evenly along other short edges. Drizzle bell peppers evenly with remaining 2 tablespoons oil, and toss gently to coat.",
      "Bake in the preheated oven, rotating baking sheets halfway through, until chicken is browned in spots, about 15 minutes. Remove chicken and bell peppers from the oven; use a spatula to carefully flip chicken only . Return to the oven, and continue baking at 475 degrees F (245 degrees C) until chicken is crispy and a thermometer inserted into thickest portion of chicken registers 165 degrees F (73 degrees C), about 5 minutes.",
      "While chicken is baking, whisk together ketchup, pineapple juice, honey, soy sauce, rice vinegar, and remaining 1/4 teaspoon salt in a small saucepan. Bring to a boil over medium, whisking occasionally. Reduce to a simmer over medium-low, and cook, stirring often, until mixture is reduced to 3/4 cup and coats back of spoon, about 5 minutes. Remove from heat.",
      "Pour 1/4 cup of the prepared sauce over chicken on the baking sheets; toss to coat evenly. Divide rice, chicken, and bell peppers evenly among bowls. Drizzle evenly with remaining 1/2 cup sauce. Serve immediately",
    ],
    imageUrl: "baked-sweet-sour-chicken.jpg",
  },
  {
    id: 3,
    title: "Quick Keto Chocolate Mousse",
    type: "Keto",
    ingredients: [
      "3 ounces cream cheese, softened",
      "½ cup heavy cream",
      "1 teaspoon vanilla extract",
      "¼ cup powdered zero-calorie sweetener (such as Swerve)",
      "2 tablespoons cocoa powder",
      "1 pinch salt",
    ],
    steps: [
      "Beat cream cheese in a large bowl with an electric mixer until light and fluffy.",
      "Turn mixer to low speed and slowly mix in heavy cream and vanilla. Mix in sweetener, cocoa powder and salt until well incorporated. Turn mixer to high and mix until light and fluffy, 1 to 2 minutes more",
      "Serve immediately, or refrigerate for later",
    ],
    imageUrl: "quick-keto-chocolate.jpg",
  },
];
