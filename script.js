
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var location = document.getElementById('location').value;
    var experience = document.getElementById('experience').value;
    var role = document.getElementById('role-selector').value;

    if (name == "" || email == "" || contact == "" || location == "" || experience == "" || role == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

function changeContent() {
    var selector = document.getElementById('role-selector');
    var content = document.getElementById('content-display');

    switch (selector.value) {
        case 'Frontend':
            content.innerHTML = '<p>Frontend Developer: Proficient in HTML5, CSS3, JavaScript, and frameworks like React and Angular for building responsive and interactive user interfaces.</p>';
            break;
        case 'Backend':
            content.innerHTML = '<p>Backend Developer: Experienced with Java, Spring Boot, RESTful APIs, and microservices architecture for robust server-side development.</p>';
            break;
        case 'FullStack':
            content.innerHTML = '<p>Full Stack Developer: Skilled in both frontend and backend development, including HTML, CSS, JavaScript, Java, and Spring Boot.</p>';
            break;
        case 'DevOps':
            content.innerHTML = '<p>DevOps Engineer: Skilled in CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes to streamline development and deployment processes.</p>';
            break;
        case 'CloudEngineer':
            content.innerHTML = '<p>Cloud Engineer: Experience with AWS and Azure for deploying and managing scalable and reliable cloud applications.</p>';
            break;
        case 'MobileDeveloper':
            content.innerHTML = '<p>Mobile Developer: Skilled in building apps for iOS or Android using frameworks like Flutter or React Native.</p>';
            break;
        default:
            content.innerHTML = '<p>Please select a role from the dropdown menu.</p>';
            break;
    }
}
