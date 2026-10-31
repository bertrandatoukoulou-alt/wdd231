// Footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastmodified").textContent =
    `Last Modified: ${document.lastModified}`;

// Navigation
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        hamButton.textContent = "✖";
    } else {
        hamButton.textContent = "☰";
    }
});

// Course Data
const courses = [
    {
        subject: "CSE",
        number: 110,
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        credits: 2,
        completed: false
    }
];

// Display Courses
const container = document.querySelector("#course-container");

function displayCourses(courseList) {
    container.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");

        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);
    });

    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    document.querySelector("#credits").textContent =
        `The total credits for the courses listed above is ${credits}`;
}

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const filtered = courses.filter(
        course => course.subject === "WDD"
    );

    displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {
    const filtered = courses.filter(
        course => course.subject === "CSE"
    );

    displayCourses(filtered);
});

// Initial Display
displayCourses(courses);