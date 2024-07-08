import { Display } from "./display.module.js";

export class Details{
    constructor(id){
        document.getElementById('btnClose').addEventListener('click',()=>{
            document.getElementById('details').classList.add('d-none');
            document.getElementById('games').classList.remove('d-none');
        });
        this.loading =document.querySelector(".loading")
     this.getDetails(id);
    };

   async getDetails(id) {
         
        this.loading.classList.remove("d-none");
  
        const options = {
           method: "GET",
           headers: {
              "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
           },
        };
  
       const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response = await api.json();
          
        this.loading.classList.add("d-none");
        console.log(response);
        new Display().displayDetails(response);
     }

}