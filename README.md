# Webapplikasjoner Eksamen
#### Gruppe : Webapplikasjoner 14

##### Ting man trenger før installasjon :
- Yarn/Npm
- Node 

##### Installasjon :
 - Kjør yarn install i root folder 
    - Altså i \WebAppEksamen
 - Kjør yarn install i client folder
    - Altså i \WebAppEksamen\client
    
##### Kjøre applikasjonen : 
 - Kjøre applikasjon : ```$ yarn run dev```
    - Kjører både server og client
 - Kjøre bare client : ```$ yarn run client```
 - Kjøre bare server : ```$ yarn run server```

>tilfelle "yarn run dev" ikke fungerer, kan man kjøre: "yarn run server" og 
>"yarn run client" 
>for få både client og server opp

### Viktig brukere : 
 - For å lage en bruker med rolle user, så er det bare å registere seg gjennom "Hjem siden".
    - Known bug : Kan bare få opp registering modalen i hjem siden. 
 - For å teste ut admin funksjoner kan man logge in med:
 > Email : admin@admin.com
 >Passord : admin1