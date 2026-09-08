let prompt=require('prompt-sync')();
function Menu(){
    console.log(`
================================= 
       RAILWAY MANAGER 
================================= `);
    console.log("1. Afficher les trajets ");
    console.log("2. Ajouter un ticket ");
    console.log("3. Afficher les tickets ");
    console.log("4. Annuler un ticket ");
    console.log("5. Rechercher un ticket ");
    console.log("6. Filtrer les trajets ");
    console.log("7. Trier les trajets");
    console.log("0. Quitter ");
};
do{
    Menu();
    let choix=prompt("votre choix : ");
    switch(choix){
        case '1':
            Afficher_trajets();
            break;
        case '2':
            Acheter_ticket();
            break;
        case '3':
            Afficher_tickets();
            break;
        case '4':
            Annuler_ticket();
            break;
        case '5':
            Rechercher_ticket();
            break;
        case '6':
            Filtrer_trajets();
            break;
        default:
            Trier_trajets();
            break;

    }


}while(choix!='0')