const juan = {
    nombre: "Juan",
    edad: 45,
    email: "blabla@bla.com",
    esPremium:false,
};

const pedro = {
    nombre: "Pedro",
    edad: 45,
    email: undefined,
    esPremium:false,
};

const marta = {
    nombre: "marta",
    edad: 45,
    email: null,
    esPremium:false,
};

const mirta = {
    nombre: "mirta",
    edad: 45,
    esPremium:false,
};

usuarios=[juan,pedro,marta,mirta];

for (let user in usuarios) {
    console.log(user);
}



