//
const mainEl = document.querySelector("main");
//Apply background color
mainEl.style.backgroundColor = "var(--main-bg)";
//Add h1
mainEl.innerHTML = "<h1>Yummy Receipes</h1>";
//Adding an image
// mainEl.style.backgroundImage = "url()";
//Add flex class list
mainEl.setAttribute("class", "flex-ctr");

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
  { text: "Home", href: "/Home" },
  {
    text: "Receipes",
    href: "#",
    subLinks: [
      { text: "Vegetarain", href: "/Receipes/Vegetarain" },
      { text: "Non-Vegetarain", href: "/Receipes/Non-Vegetarain" },
      { text: "Keto", href: "/Receipes/Keto" },
    ],
  },
  {
    text: "About",
    href: "#",
    subLinks: [
      { text: "Contact Us", href: "/About/Contact Us" },
      { text: "Email", href: "/About/Email" },
      { text: "FAQ's", href: "/About/FAQ's" },
    ],
  },
  {
    text: "Account",
    href: "#",
    subLinks: [
      { text: "Login", href: "/Account/Profile" },
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
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
//Part 3 - Adding interactivity
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
  //Part 5 - Adding Submenu Interaction
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

// // Attach a delegated 'click' event listener to subMenuEl.
// subMenuEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!e.target.matches("a")) {
//     return;
//   }
//   console.log(e.target.textContent);

//   // Next, the event listener should set the CSS top property of subMenuEl to 0.
//   subMenuEl.style.top = "0";
//   // Remove the active class from each <a> element in topMenuLinks.
//   topMenuLinks.forEach((link) => {
//     link.classList.remove("active");
//   });
//   // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
//   // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
//   console.log(mainEl);
//   if (mainEl.innerHTML == "about") {
//     mainEl.innerHTML = `<h1>About</h1>`;
//   } else {
//     mainEl.innerHTML = `<h1>${e.target.textcontent}</h1>`;
//   }
// });
