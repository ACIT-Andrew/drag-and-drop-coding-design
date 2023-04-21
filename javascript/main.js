let data = [
  {
    name: "Jeet Saru",
    role: "Web Developer",
    image: "cat.png",
  },
  {
    name: "Sonal Gharti",
    role: "Web Designer",
    image: "chicken.png",
  },
  {
    name: "Alson GC",
    role: "Software Engineer",
    image: "fish.png",
  },
  {
    name: "Zinzu Chan",
    role: "UI/UX Designer",
    image: "angry-dog.png",
  },
  {
    name: "Alex Gonley",
    role: "Managing Director",
    image: "bull.png",
  },
];

const ul = document.querySelector("ul");

function createListElements() {
  ul.innerHTML = "";
  data.forEach((person, i) => {
    const li = document.createElement("li");
    li.setAttribute("list-pos", i);

    li.innerHTML = `
        <div class="user">
            <img src="images/${person.image}" alt="" />
            <div class="info">
                <h2>${person.name}</h2>
                <p>${person.role}</p>
            </div>
        </div>
        <h1 class="icon">&#10978;</h1>
        `;

    ul.appendChild(li);
  });
  listenToEvents();
}

createListElements();

function listenToEvents() {
  let lists = ul.querySelectorAll("li"),
    current_pos,
    drop_pos;

  for (let li of lists) {
    li.draggable = true;
    li.ondragstart = function () {
      current_pos = this.getAttribute("list-pos");
    //   ul.style.height = ul.clientHeight + "px";
    //   setTimeout(() => {
    //     this.style.display = "none";
    //   }, 0);

    //   ul.style.height = ul.clientHeight - this.clientHeight + "px";
    };
    li.ondragenter = () => li.classList.add("active");
    li.ondragleave = () => li.classList.remove("active");
    li.ondragend = function () {
      this.style.display = "flex";
      for (let activeList of lists) {
        activeList.classList.remove("active");
      }
    };
    li.ondragover = (e) => e.preventDefault();
    li.ondrop = function (e) {
      e.preventDefault();
    //   ul.style.height = ul.clientHeight + this.clientHeight + "px";
      drop_pos = this.getAttribute("list-pos");

      data.splice(drop_pos, 0, data.splice(current_pos, 1)[0]);
      createListElements();
    };
  }
}
