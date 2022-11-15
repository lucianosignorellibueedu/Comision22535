# dic = {clave:valor, clave2:valor2}
dic = {} # Diccionario vacio
dic = {"Ramiro":39,"Julia":20,"Maria":21, "Luciano":32, "Pedro":18}
dic2 = {"Ramiro":"Mario Luis","Julia":20,"Maria":21, "Luciano":32, "Pedro":18}
# print(dic)
# print(dic["Ramiro"])
# print(dic["Luciano"])

# for clave in dic:
#     print(clave)
#     print(dic[clave])

# for clave in dic:
#     if dic[clave] > 21:
#         print(clave)
#         print(dic[clave])

# for valor in dic.values():
#         print(valor)

#Tupla
fecha = (10,11,2022)
print(fecha)

# Desempaquetado
dia, mes,anio = fecha
print(dia)
print(mes)
print(anio)

tupla = (10,"Noviembre", 2022, "Comision 22535")
print(tupla[1])

# for elem in tupla:
#     print(elem)

# tupla2 = ('Palotes, Juan de', (1930, 11, 13), 3000936)
# nombre, fecha, dni = tupla2
# print(nombre)
# print(type(fecha))
# print(fecha)
# print(dni)

# conjunto = {-1,-2,2,3,6,24}
# print(conjunto)


conjunto = {'Empleado', (1930, 11, 13), 36}
a = set(conjunto)
print(a)
[print (elem) for elem in a]
print(a)