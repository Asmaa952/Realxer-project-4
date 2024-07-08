import { Details } from "./details.module.js";
import { Display } from "./display.module.JS";

Display
export class Home {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.addEventListener('click',()=>{
          this.activeLink(link);
          const category = link.dataset.category;
          this.getGames(category);
          })  
        });

        this.loading = document.querySelector(".loading");
        this.details = document.getElementById('details');
        this.games = document.getElementById('games')
        this.display = new Display();
        
        this.getGames("MMORPG");
    };






    async activeLink(link){
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
       
      
    }

     
    async  getGames(category){
        this.loading.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
               Accept: "application/json",
               "Content-Type": "application/json",
            }
        }
    const  api =  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const response =await  api.json();
    this.loading.classList.add("d-none");
    console.log(response);
    this.display.displayDataGame(response);
    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click',()=>{
            this.details.classList.remove('d-none');
            this.games.classList.add('d-none');

            this.detailsSection = new Details(card.dataset.id);
        })
    })
   
    }
    
     
    
    
   


}