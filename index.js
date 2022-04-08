// declare name variable
const name = 'James';
//remove main
main.remove();
//create newHeader variable assigned to newly created h1 element

const newHeader = document.createElement('h1');
//assign ID to victory
newHeader.id= 'victory';
//get fancy with text content
newHeader.textContent = `${name} is the champion`;
//throw it on the big screen
document.body.append(newHeader);