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
                   
        const cardImage=document.createElement("figure");
        cardImage.className="cardImg";
        cardImage.classList.add("cardImage");
        card.appendChild(cardImage);
            
        const imgSrc=document.createElement("img");
        imgSrc.src= project.imgSrc;
        imgSrc.alt= project.alt;
        imgSrc.loading= "lazy";
        cardImage.appendChild(imgSrc);

        const title=document.createElement("h3");
        title.textContent=project.title;
        title.className="title";
        card.appendChild(title);

        const desc =document.createElement("p");
        desc.textContent=project.desc;
        desc.className="desc";
        card.appendChild(desc);

        const badge=document.createElement("span");
        badge.textContent=project.badge;
        badge.className= "badge";
        card.appendChild(badge);

        const btn=document.createElement("button");
        btn.type="submit";
        btn.className="cardBtn";
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
                
            const notFoundMsg= document.querySelector("h4");
                     
            if (filteredProject.length===0){
                notFoundMsg.textContent="No projects has been found!";
            } else
            {
                notFoundMsg.textContent = '';
            }

            displayProjects(filteredProject); 
    }
    else {
                
        displayProjects(filteredProject); 
    }
});


