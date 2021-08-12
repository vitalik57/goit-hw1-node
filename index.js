const contacts = require("./db/contacts");
const delid = 2;
const allcontact = contacts.del(delid);
allcontact.then(data => console.log(data)).then(error => console.log(error));

// const newProduct = {
//   name: "Mango ",
//   email: "mango@gmail.com",
//   phone: "322-22-22"
// };
// const addcontact = contacts.add(newProduct);
// addcontact.then(data => console.log(data)).then(error => console.log(error));
// const addcontact = contacts.update(id, { name: "Anjaly" });
// addcontact.then(data => console.log(data)).then(error => console.log(error));

// const allcontact = contacts.getbyid(id);
// allcontact.then(data => console.log(data)).then(error => console.log(error));
// allcontacts
// const contacts = require("./db/contacts");
// const allcontacts = contacts.getAll();
// allcontacts.then(data => console.log(data)).then(error => console.log(error));
// const contactsOperation = async action => {
//   try {
//     switch (action) {
//       case "getAll":
//         const allContacts = await contacts.getAlll();
//         console.log(allContacts);
//         break;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// contactsOperation("getAlll");
