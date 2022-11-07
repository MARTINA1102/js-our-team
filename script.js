/*Utilizzando i dati forniti, 
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede


Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
let eleContainer=document.querySelector('.container');



const arrStudents = [
	{
		nome: 'Wayne Barnett',
		ruolo: 'Founder & CEO',
		foto:  'img/wayne-barnett-founder-ceo.jpg',
	},
	{
		nome: 'Angela Caroll',
		ruolo: 'Chief Editor',
		foto: 'img/angela-caroll-chief-editor.jpg',
	},
	{
		nome: 'Walter Gordon',
		ruolo: 'Office Manager',
		foto: 'img/walter-gordon-office-manager.jpg',
	},
    {
		nome: 'Angela Lopez',
		ruolo: 'Social Media Manager',
		foto: 'img/angela-lopez-social-media-manager.jpg',
	},
	{
		nome: 'Scott Estrada',
		ruolo: 'Developer',
		foto: 'img/scott-estrada-developer.jpg',
	},
	{
		nome: 'Barbara Ramos',
		ruolo: 'Graphic Designer',
		foto: 'img/barbara-ramos-graphic-designer.jpg',
	},

];
console.table(arrStudents);
for (let i = 0; i < arrStudents.length; i++) {
	console.log(`Studente numero ${i}: ${arrStudents[i].nome} ${arrStudents[i].ruolo} ${arrStudents[i].foto}`);
    eleContainer.innerHTML+=(`<div class=card> <img class=imgn src=${arrStudents[i].foto}><h2 class=nome>${arrStudents[i].nome}</h2> <div class=ruolo> ${arrStudents[i].ruolo}</div></div>`);
	
}