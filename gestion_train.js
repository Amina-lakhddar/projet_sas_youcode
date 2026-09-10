let prompt=require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

// Fonction Menu 
function Menu(){
    console.log(`
================================= 
RAILWAY MANAGER 
=================================`);
    console.log("1. Afficher les trajets ");
    console.log("2. Ajouter un ticket ");
    console.log("3. Afficher les tickets ");
    console.log("4. Annuler un ticket ");
    console.log("5. Rechercher un ticket ");
    console.log("6. Filtrer les trajets ");
    console.log("7. Trier les trajets");
    console.log("8. Nombre total de tickets vendus");
    console.log("9. Chiffre d'affaires total");
    console.log("0. Quitter ");
};

// fonction Afficher les trajets
function Afficher_trajets(){
    console.log(`=== TRAJETS DISPONIBLES === `)
    for(i=0;i<trips.length;i++){
        console.log(`
        #${trips[i].id} ${trips[i].departure} → ${trips[i].destination}
        Départ : ${trips[i].departureTime}
        Arrivée : ${trips[i].arrivalTime}
        Prix : ${trips[i].price} DH
        Places disponibles : ${trips[i].availableSeats}`)
    }
};

// Fonction Acheter un ticket
const tickets=[];
let ticketsid = 0;

function ajouter_ticket(passengerName,tripId,tickets){
    const objet = {
        id:++ticketsid,
        seatNumber:50 - trips[tripId-1].availableSeats + 1,
        passengerName:passengerName,
        tripId:trips[tripId-1].id,
        price:trips[tripId-1].price
    }
    tickets.push(objet);
    trips[tripId-1].availableSeats--;
    return tickets
}
function Acheter_ticket(){
    var passengerName=prompt("entrez votre nom : ");
    var tripId=Number(prompt("entrez l'identifiant du trajet : "));
        if(tripId>trips.length){
            console.log("Trajet introuvable. ")
        }else if(tripId==trips[tripId-1].id){
            if(trips[tripId-1].availableSeats==0){
                console.log("Train complet. ")
            }else{
                ajouter_ticket(passengerName,tripId,tickets);
                console.log("Ticket acheté avec succès.");
        }
    }
};

// Afficher les tickets 

function Afficher_tickets(){
            console.log(`
                === TICKETS === 
                `);
    if(tickets.length>0){
        for(i=0;i<tickets.length;i++){
            var index=tickets[i].tripId;
            console.log(`
                Ticket #${tickets[i].id}
                Passager : ${tickets[i].passengerName}
                Trajet : ${trips[index-1].departure} → ${trips[index-1].destination}
                Place : ${tickets[i].seatNumber}
                Prix : ${tickets[i].price}
                `)
        }
    }
    else{
        console.log("Aucun ticket enregistré. ")
    }
}

//  Annuler un ticket 
function Annuler_ticket(){
    const id_ticket=Number(prompt(" Identifiant du ticket "));
    for(let i=0 ;i<tickets.length;i++){
        if(tickets[i].id==id_ticket){
            console.log("Ticket annulé avec succès.");
            trips[(tickets[i].tripId)-1].availableSeats++;
            tickets.splice(i,1);
        }
        else{
            console.log("Ticket introuvable. ")
        }
    }
};

// fonction Rechercher un ticket
function Rechercher_ticket(){
    const nom_passager=prompt("Nom du passager :");
    const result=tickets.filter((ticket) => {
        return ticket.passengerName==nom_passager;
    });
    for(let i=0;i<result.length;i++){
        var index=result[i].tripId;
            console.log(`
                Ticket #${result[i].id}
                Passager : ${result[i].passengerName}
                Trajet : ${trips[index-1].departure} → ${trips[index-1].destination}
                Place : ${result[i].seatNumber}
                Prix : ${result[i].price}
                `)
            }
};

// Fonction Filtrer les trajets 
function Filtrer_trajets(){
    const nom_depart=prompt("Ville de départ :");
    const resultat_ville=trips.filter(
        (trip)=>{
            return trip.departure==nom_depart
        }
    );
    for(let i=0;i<resultat_ville.length;i++){
        console.log(`${resultat_ville[i].departure} → ${resultat_ville[i].destination}: ${resultat_ville[i].price}`)
    }
};

//Function Trier les trajets
const table_trajets=[];
function Trier_trajets(){
    for(let i=0;i<trips.length;i++){
        table_trajets.push(trips[i]);
    }
    let max;
    for(let j=0;j<table_trajets.length-1;j++){
        for(let i=0;i<table_trajets.length-1;i++){
            if(table_trajets[i+1].price<table_trajets[i].price){
                max=table_trajets[i];
                table_trajets[i]=table_trajets[i+1];
                table_trajets[i+1]=max;
            }
            
        }
    
    }
    for(let i=0;i<table_trajets.length;i++){
        console.log(`${table_trajets[i].departure} → ${table_trajets[i].destination} : ${table_trajets[i].price}`);
    }
};
// Nombre total de tickets vendus 
function total_tickets(){
    let total=tickets.length;
    console.log(`Nombre total de tickets : ${total}`)
};

// Fonction Chiffre d'affaires total
function chiffre_affaires(){
    let chiffre=0;
    for(let i=0;i<tickets.length;i++){
        chiffre=chiffre+tickets[i].price;
    }
    console.log(`Chiffre d'affaires total : ${chiffre} DH`)
}

do{
    Menu();
    var choix=prompt("votre choix : ");
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
            Rechercher_ticket(tickets);
            break;
        case '6':
            Filtrer_trajets();
            break;
        case '7':
            Trier_trajets();
            break;
        case '8':
            total_tickets();
            break;
        default:
            chiffre_affaires();
            break;

    }


}while(choix!='0');