
# # Estructura secuencial
# nro1 = int(input("Ingrese el primer numero a sumar "))
# nro2 = int(input("Ingrese el segundo numero a sumar "))


# # Estructuras condicionales

# if nro1 > 10:
#     print("Es mayor que 10")
# else:
#     print("No es mayor que 10")
#     if nro2 > 30:
#         print("Es mayor que 30")
#     else:
#         print("No es mayor que 30")

# suma = nro1 + nro2
    
# if suma < 40:
#     print("Resultado es menor que 40")
# print("suma es:" , suma)


# if-else-elif
# '''
# Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el
# promedio e imprima alguno de estos mensajes:
#     Si el promedio es >=7 mostrar "Promocionado".
#     Si el promedio es >=4 y <7 mostrar "Regular".
#     Si el promedio es <4 mostrar "Reprobado".
#     Agrego a la consigna: Si el promedio es entre 3 y 4 -> Recupera
# '''

# nota1 = int(input("Ingrese nota 1: "))
# nota2 = int(input("Ingrese nota 2: "))
# nota3 = int(input("Ingrese nota 3: "))

# promedio = (nota1+nota2+nota3)/3
# print("El promedio es: ", promedio)

# if promedio >= 7:
#     print("Promocionado")
# elif promedio > 4 and promedio < 7:
#     print("Regular")
# elif promedio == 4:
#     print("Recupera")
# else:
#     print("Desaprobado")

# Estructuras Iterativas/Repetitivas
# Ciclo Exactos: yo se la cantidad exacta de repeticiones (while/for).
# Ciclo Condicionales: no se la cantidad de repeticiones (while).

# Ciclo Exactos: yo se la cantidad exacta de repeticiones (while).

'''
Realizar un programa que imprima en pantalla los números del 1 al 100.
'''
# i = 1
# while i < 100:
#     print(i)
#     i += 1

for j in range(1,101):
    print(j)