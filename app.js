const yargs = require("yargs");
const db = require("./guestdb.js");
const {argv} = require("yargs");

/* //part 1
db.addGuest();
db.updateGuest();
db.deleteGuest();
db.readGuest();
db.listGuest(); 
//part 2
//console.log(process.argv);
//part 3
const command = process.argv;
if(command[2] === 'add'){
    db.addGuest();
}
else if(command[2] === "update"){
    db.updateGuest();
} 
//console.log(process.argv);
//console.log(yargs.argv);

 const command = yargs.argv;
if(command.name === 'Lahiru'){
    db.addGuest();
}  */
yargs.version("1.1.2");

//add
yargs.command({
    command: 'add',
    describe:'To add a guest',
    builder:{
        name:{
            demandOption:true,
            describe:"Name",
            type: "string",
        },
        address:{
            demandOption:true,
            describe:"Address",
            type: "string", 
        },
        contact_no:{
            demandOption:true,
            describe:"Contact No",
            type: "number", 
        },
       visit_date:{
            demandOption:true,
            describe:"Visit Date",
            type: "string", 
        },
    },
    handler:function(argv) {
        
        db.addGuest(argv.name,argv.address,argv.contact_no,argv.visit_date);
       
    }
});
//update
yargs.command({
    command: 'update',
    describe:'To update a guest',
    builder:{
        id:{
            demandOption:true,
            describe:"ID",
            type: "number",
        },
        name:{
            describe:"Name",
            type: "string",
        },
        address:{
            describe:"Address",
            type: "string", 
        },
        contact_no:{
            describe:"Contact No",
            type: "number", 
        },
       visit_date:{
         
            describe:"Visit Date",
            type: "string", 
        },
    },
    handler:function(argv) {
        
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});
//delete
yargs.command({
    command: 'delete',
    describe:'Delete a guest',
    builder:{
        id:{
            demandOption:true,
            describe:"ID",
            type: "number",
        }
    },
    handler:function(argv) {
        db.deleteGuest(argv.id);
    }
});
//read
yargs.command({
    command: 'read',
    describe:'Read a guest',
    builder:{
        id:{
            demandOption:true,
            describe:"ID",
            type: "number",
        }
    },
    handler:function(argv) {
        db.readGuest(argv.id);
    }
});
//list
yargs.command({
    command: 'list',
    describe:'List All guests',

    handler(){
        db.listGuest();
    }
});
yargs.parse();
