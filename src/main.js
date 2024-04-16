//DECLARACIÒN DE STRINGS

let comillaSimple = 'hola mundo'
let comillasDobles = "hola mundo"

const mensaje1 = "soy un"
// const mensaje2 = string("hola")
const fullName = "Simòn Arias Saldarriaga"
const cantidaDeCaracteres = fullName.length

// console.info(comillaSimple)
// console.info(comillasDobles)
// console.info("la cantidad de caracteres del userNamee es", cantidaDeCaracteres)

// Extracciòn de caracteres

// let extraccionDeLetraA = fullName[6]
// let extraccionDeLetraA = fullName.charAt(6)

// console.info(extraccionDeLetraA)

// console.info(fullName[0])
// console.info(fullName[1])
// console.info(fullName[2])
// console.info(fullName[3])

// let userName = prompt("ingrese su nombre")
// let lastName = "Arias"
// const age = "31 años"
// const email = "sariass077@gmail.com"
// let adress = "calle 53B ·78-128"
// let phone = "3116112981"

// console.info("hola mundo, mi nombre es " + userName +  " " + lastName + " y mi direcciòn es " + adress)
// console.info("hola mundo, mi nombre es", userName, lastName, "y mi direcciòn es", adress)
// console.info(`hola mundo, mi nombre es ${userName} ${lastName} y mi direcciòn es ${adress}`)

// const header = `
// <header>
//         <h1>hola</h1>
//         <p>hola mundo, mi nombre es ${userName} ${lastName} y mi correo es ${email}</p>
      
//     </header>`

 // TRANSFORMACIONES

// const mensaje = "HOLA MUNDO"
// const mensaje2 = "hoy es un nuevo dìa"

// document.write(mensaje)
// document.write(mensaje2)

// //mayùsculas y minùsculas
// console.info(mensaje.toLowerCase())
// console.info(mensaje2.toUpperCase())

// console.info(mensaje.concat(mensaje2))

//MINÙSCULAS
// console.info(mensaje.toLocaleLowerCase())
// document.write(mensaje.toLocaleLowerCase())


// const mensaje = "hola mundo"

// console.log(mensaje.startsWith("familia"))//false
// console.log(mensaje.startsWith("hola"))//true
// console.log(mensaje.includes("mundo"))//true
// console.log(mensaje.includes("soy"))//false
// console.log(mensaje.endsWith("lo que sea"))//false
// console.log(mensaje.endsWith("mundo"))//true


// //CHEQUEO DE INFORMACIÒN
// const mensaje = "Simòn Arias Saldarriaga"
// document.write(mensaje)


// // console.log(mensaje.startsWith("L"))//FALSE
// // console.log(mensaje.includes("as"))//TRUE
// // console.log(mensaje.endsWith("aga"))//TRUE

//LIMPIEZA DE STRINGS

// const mensaje = "     hola mundo    "
// console.info(mensaje)
// console.info(mensaje.trim())
// console.info(mensaje.trimStart())
// console.info(mensaje.trimEnd())


//REEMPLAZO DE CARACTERES

// const mensaje = "soy un coder de riwi, y en riwi soy feliz"
// document.write(mensaje)
// console.info(mensaje.replace("coder","programador"))
// console.info(mensaje.replaceAll("riwi","centro de entrenamiento"))
// console.info(mensaje.replace(/[aeiou]/g, "i"))
// console.info(mensaje.repeat(50))

//RELLENO DE STRINGS

// const mensaje = "3000"
// document.write(mensaje)
// console.info(mensaje.padStart(20,"*"))
// console.info(mensaje.padEnd(20,"*"))

//FRAGMENTAR UN STRING

// const mensaje = "ser un coder de  riwi cambia tu mundo"
// document.write(mensaje)
// console.info(mensaje.substring(0,12))
// console.info(mensaje.substring(12))//empieza a fragmentar desde la posiciòn 12
// console.info(mensaje.slice(12))
// console.table(mensaje.substring(""))

