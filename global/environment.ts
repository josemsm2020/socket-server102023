//definición de constantes y variables que van a ser globales a toda la aplicación

//Puerto distinto al de angular 4200 por eso ponemos el puerto 5000 y además se ha dejado 
//process.env.PORT por si desplegasemos la aplicación a un servidor como HEROKU, poder 
//leerlo desde allí
export const SERVER_PORT: number = Number( process.env.PORT ) || 5000; 
