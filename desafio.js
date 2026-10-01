const usuarios = [
{ id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
{ id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
{ id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
{ id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

console.log(".map");

const nome = usuarios.map ((a) => a.cargo);

console.log(`Lista resumida: ${nome}`);

console.log("----------------------------------");

console.log(".find");

const buscausu = usuarios.find ((a) => a.id === 1);

console.log(`Usuario selecionado: ${buscausu}`);

console.log("----------------------------------");

console.log(".filter");

const ativos = usuarios.filter ((a) => a.ativo === true);

console.log(`Usuarios ativos: ${ativos}`);

console.log("----------------------------------");

console.log(".some");

const inativos = usuarios.some ((a) => a.ativo === false);

console.log(`Usuarios inativos: ${inativos}`);

console.log("----------------------------------");

console.log(".every");

const idadeusu = usuarios.every((a) => a.idade >= 18);

console.log(`Usuarios maiores de idade: ${idadeusu}`);

console.log("----------------------------------");

console.log(".reduce");

const media = usuarios.reduce ((acc, idades) => acc / idades.idade + idades.idade , 0);

console.log(`Méida de idades: ${media}`);