import { Injectable } from "@angular/core";
import { interval, map, Observable, of, take, tap } from "rxjs";
import { CageotPomme } from "../model/cageot-pomme.model";

@Injectable({
    providedIn: 'root'
})

export class ApplePieService {
  // fluxCageots$!: Observable<CageotPomme>;

  public cageotPommes: CageotPomme[] =  [
            {
              "id": 1,    
              "pommes": [
                  {"id": 1, "taille": 1, "color": "red"},
                  {"id": 2, "taille": 2, "color": "red"},
                  {"id": 3, "taille": 1, "color": "red"}
              ]
            },
            {
              "id": 2,    
              "pommes": [
                  {"id": 10, "taille": 1, "color": "red"},
                  {"id": 20, "taille": 2, "color": "red"},
                  {"id": 30, "taille": 1, "color": "red"}
              ]
            },  
            {
              "id": 3,    
              "pommes": [
                  {"id": 100, "taille": 1, "color": "green"},
                  {"id": 200, "taille": 2, "color": "green"},
                  {"id": 300, "taille": 1, "color": "green"}
              ]
            },
            {
              "id": 4,    
              "pommes": [
                  {"id": 1000, "taille": 1, "color": "red"},
                  {"id": 2000, "taille": 2, "color": "red"},
                  {"id": 3000, "taille": 1, "color": "red"}
              ]
            },
            {
              "id": 5,    
              "pommes": [
                  {"id": 10000, "taille": 1, "color": "green"},
                  {"id": 20000, "taille": 2, "color": "green"},
                  {"id": 30000, "taille": 1, "color": "green"}
              ]
            }
          ] ;

// get() : Observable<CageotPomme[]> {
//     return of (
//       [
//         {
//           "id": 1,    
//           "pommes": [
//               {"id": 1, "taille": 1, "color": "red"},
//               {"id": 2, "taille": 2, "color": "red"},
//               {"id": 3, "taille": 1, "color": "red"}
//           ]
//         },
//         {
//           "id": 2,    
//           "pommes": [
//               {"id": 10, "taille": 1, "color": "red"},
//               {"id": 20, "taille": 2, "color": "red"},
//               {"id": 30, "taille": 1, "color": "red"}
//           ]
//         },  
//         {
//           "id": 3,    
//           "pommes": [
//               {"id": 100, "taille": 1, "color": "green"},
//               {"id": 200, "taille": 2, "color": "green"},
//               {"id": 300, "taille": 1, "color": "green"}
//           ]
//         },
//         {
//           "id": 4,    
//           "pommes": [
//               {"id": 1000, "taille": 1, "color": "red"},
//               {"id": 2000, "taille": 2, "color": "red"},
//               {"id": 3000, "taille": 1, "color": "red"}
//           ]
//         },
//         {
//           "id": 5,    
//           "pommes": [
//               {"id": 10000, "taille": 1, "color": "green"},
//               {"id": 20000, "taille": 2, "color": "green"},
//               {"id": 30000, "taille": 1, "color": "green"}
//           ]
//         }
//       ] 
//     )
//  };  

      
      // getCageotPommeInterval(): Observable<number> {

      //   return this.get().pipe(
      //     tap(console.log)
      //   )
      // }


      getCageotPomme(): Observable<CageotPomme> {
       let index: number = 0;

        const fluxCageot$: Observable<CageotPomme> = interval(3000).pipe(  
          take(this.cageotPommes.length),  
          map((val) => this.cageotPommes[index++])  
        );
        return fluxCageot$;
      }


    }