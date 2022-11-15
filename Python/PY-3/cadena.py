#No son mutables las cadenas
from re import X


cadena = " Hola 'Comision' 22535!"
cadena2 = 'Hola "Comision" 22535!' 
# print(type(cadena))
# print(cadena[2]) #o
# print(cadena[-2]) #5
# print(len(cadena)) #21 longitud de la cadena

# Buscar
# print(cadena.find("Hola")) #1
# print(cadena.find("comision")) #6
# print(cadena.find("22535",1)) #15

# for valor in cadena:
#     print(valor)

#Imprime solo letras y caracteres
# for valor in cadena:
#     if not valor.isnumeric():
#         print(valor)

# #Imprimi solo numeros
# for valor in cadena:
#     if not valor.isnumeric():
#         print(valor)

cadena = cadena.replace('Hola', 'Bienvenida')
print(cadena)
print(cadena2)


# print(cadena[6:11])
# print(cadena.capitalize()) #Primer letra Mayuscula
# print(cadena.lower()) #Pone en minuscula
# print(cadena.upper())
# print(cadena.strip()) #Remueve los espacios del principio y final de la cadena 

# print(cadena*5)
# """ COMENTARIO"""
# x = " abc "
# print(x) #String vacio
# print(type(x))
# x = 125
# print(type(x))
# print(x)

# cadena3 = """VARIAS 
# LINEAS
# EN 
# UNA 
# SOLA 
# CADENA """
# print(cadena3)


# # nombre= input("Ingrese su nombre: ")
# # saludo= "Hola "+ nombre
# # print(saludo)

# #parsea 3 a string
# var4 = str(3) + "5"
# print(var4)


# cadena1 = "Gonzalez"
# cadena2 = "Gonzales"
# print("cadena1 > cadena2")
# print(cadena1 < cadena2)
# print(cadena1 == cadena2)



print("-".join(cadena))

lista = cadena.split(' ')
print(lista)


legajo = 12212
nombre = "María"
nota = 10
print(f"Legajo: {legajo} Nombre: {nombre} Nota: {nota}")
# Legajo: 12212 Nombre: María Nota: 10