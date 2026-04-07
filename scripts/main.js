import { aboutMeDescription } from "../data/aboutMe.js";
//<h3 id="aboutMe">Zamzameh Madjidi</h3> 

const aboutMeContainer = document.querySelector("#aboutMe");

aboutMeContainer.textContent = aboutMeDescription;


//Dynamic Cards 

let myProjects = [];

fetch("https://zamzame.github.io/third-project/data/projects.json")
.then(projects => projects.json())
.then(projects => {
    myProjects= projects;
    displayProjects(projects);
});

const prjContainer = document.querySelector(".projects");

function displayProjects(myProjects){

    prjContainer.innerHTML='';

    myProjects.forEach((project)=>{

        const card= document.createElement("article");
        card.className="card";
        card.classList.add("card");
            
        const imgSrc=document.createElement("img");
        imgSrc.src= project.imgSrc;
        imgSrc.alt= project.alt;
        card.appendChild(imgSrc);

        const badge=document.createElement("span");
        badge.textContent=project.badge;
        badge.className= "badge";
        card.appendChild(badge);

        const title=document.createElement("h3");
        title.textContent=project.title;
        title.className="title";
        card.appendChild(title);

        const desc =document.createElement("p");
        desc.textContent=project.desc;
        desc.className="desc";
        card.appendChild(desc);

        const btn=document.createElement("button");
        btn.type="submit";
        btn.textContent="View Project";
        card.appendChild(btn);

        prjContainer.appendChild(card);                    
    });

}

//Handeling Searchbar
const searchInput = document.querySelector("#inputSearch")

searchInput.addEventListener("input", ()=> {
    // let   filteredProject = myProjects.slice();
    let   searchValue = searchInput.value.trim().toLowerCase();


    if (searchValue.length != 0){ 
        //Searching through title and badge of the projects
        const filteredProject = myProjects.filter(project => 
                project.title.toLowerCase().includes(searchValue)||
                project.badge.toLowerCase().includes(searchValue)
            );
                
        displayProjects(filteredProject);
    }
    else {
                
        displayProjects(filteredProject); 
    }
});

// displayProjects(filteredProject);
