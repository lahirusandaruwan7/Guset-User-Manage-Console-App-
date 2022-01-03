const fs = require('fs');

const chalk = require('chalk');

const db_file = "data.json";

const addGuest = (name,address,contact_no,visit_date) => {
    let id = 1;
    const guests = loadGuest();
    const length = guests.length;
    if(length > 0 ){
        id = guests[length-1].id + 1;
    }
    guests.push({
        id,
        name:name,
        address:address,
        contact_no:contact_no,
        visit_date:visit_date
    });
    saveGeust(guests);
    console.log(chalk.green("Data Saved!"));
}
const updateGuest = (id,name,address,contact_no,visit_date) => {
  
    const guests = loadGuest();
    const guestIndex = guests.findIndex((guest)=>{
            return guest.id === id;
    });
    
    //console.log(guestIndex);
    if(guestIndex != -1){
        const guest = guests[guestIndex];
        /* if(name){
            guest.name = name;
            console.log(guests)
        }
        else{
            console.log("No Name");
        } */
        //console.log(guest.name = name ? name:"No Name");
        if(name || address || contact_no || visit_date){
            guest.name = name ? name:guest.name;
            guest.address = address ? address:guest.address;
            guest.contact_no = contact_no ? contact_no:guest.contact_no;
            guest.visit_date = visit_date ? visit_date:guest.visit_date;
            console.log(chalk.yellow("Record Update ",id));
            saveGeust(guests);
        }
        else{
            console.log(chalk.red.inverse("Invalid Input"));
        }
  
       
 
    }else{
        console.log(chalk.yellow.inverse("Can not Update"));
    }
    
  
}
const deleteGuest = (id) => {
    const guests = loadGuest();
    const guest = guests.filter((guest)=>{
            return guest.id != id;
    });
 
    if(guests.length > guest.length){
        saveGeust(guest);
        //console.log(guest);
        console.log(chalk.red("Delete",id));
    }
    else{
        console.log(chalk.red.inverse("No Record Found!"));
    }
    
}
const readGuest = (id) => {
    const guests = loadGuest();
    const guest = guests.find((guest)=>{
        return guest.id === id;
    });
    if(guest){
        console.log(guest);
        console.log(chalk.blue("Read",id));
    }
    else{
        console.log(chalk.blue.inverse("No Record Found!"));
    }
   
}
const listGuest = () => {
    const guests = loadGuest();
    if(guests.length === 0){
        console.log(chalk.magenta.inverse("Guest List is Empty"));
    }else{
        console.log(chalk.magenta("Guest List"));
        guests.forEach((guest)=>{
            console.log(guest);
        });
    }
    
}
const saveGeust = (guests) => {
    const dataJSON = JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJSON);
}
const loadGuest = () =>{
   try{
    const dataBaffer = fs.readFileSync(db_file);
    const dataJSON = dataBaffer.toString();
    const data = JSON.parse(dataJSON); 
    return data;
    
   }catch(e){
      return [];
   }

}


module.exports = {
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest,
    
}