#Declaracion de lista
numeros = [2,2,3,4,2,15,8,2,6]
palabras = ["Hola","Comision","22535"]
vacia = []

print(type(numeros))

#Iteracion
for valor in palabras:
    print(valor)

print(len(numeros))

palabras[1] = palabras[1].lower()
print(palabras[1])

# for i in range(len(numeros)):
#     numeros[i] = numeros[i]*2
# print(numeros)

#Insertar
palabras.insert(0,"Martes")
palabras.insert(3,"Bienvenido")
print(palabras)
palabras.append("Append")
print(palabras)

#Eliminar
palabras.pop() #Eliminamos el ultimo elem
print(palabras)
palabras.pop(2) #Eliminamos el item 2
print(palabras)
palabras.remove("22535")
palabras.remove("Hola")
print(palabras)

numeros.sort()
print(numeros)
numeros.sort(reverse=True)
print(numeros)

#Sumar
print(sum(numeros))

print(numeros.count(2))

matriz = [
    [1,2],
    [3,4]
]
print(matriz)
print(matriz[1])
print(matriz[1][1])


dias = ["Lunes", "Martes", "Miércoles"]
d1, d2, d3 = dias
print(d1) #dias[1]
print(d2) #dias[2]
print(d3) #dias[3]
