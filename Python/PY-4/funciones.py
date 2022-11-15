
# # # def nombre_funcion():
# #    #instrucciones

# # # def saludar():
# # #     print("Hola Comision 22535!")

# # # def saludar2(nombre):
# # #     saludar()
# # #     print("Hola " + nombre)

# # # def imprimir(N, msj):
# # #     for i in range(N):
# # #         print(msj)

# # # def sumar(a,b):
# # #     suma = a + b
# # #     print(suma) 


# # # def doblar_valor(numero):
# # #     numero *= 2
# # #     print("Numero")
# # #     print(numero)

# # #Programa Principal
# # # numero = 10
# # # doblar_valor(numero)
# # # print("El valor de N es: ")
# # # print(numero)

# # def doblar_valores(numeros):
# #     for i,n in enumerate(numeros):
# #         numeros[i] *= 2

# # ns = [10,50,100]
# # print(ns)
# # doblar_valores(ns)
# # print(ns)



# # #Programa Principal
# # # saludar()
# # # saludar2("Jorge")
# # # imprimir(3,"Hola a todos")
# # # resultado = sumar(10,2)
# # # producto = sumar(7,2)
# # # print(resultado)
# # # print(producto)

# def sumar(a = 0, b = 25):
#     return a + b
# # def sumar2(a,b):
# #     return a + b


# # resultado = sumar(1,3)
# # # resultado2 = sumar2(1,)
# # print(resultado)
# # # print(resultado2)

# # # La función devuelve dos valores
# # def cuadrado_y_cubo(numero):
# #     return numero ** 2, numero ** 3
# # # Programa principal
# # cuadrado, cubo = cuadrado_y_cubo(4)
# # print("Cuadrado:", cuadrado)
# # print("Cubo:", cubo)

# # def cuadrado(num):
# #     return num**2

# # def cuadrado(num): return num**2

# cuadrado = lambda num: num **2

# print(cuadrado(2))

# impar = lambda num: num%2 !=0

# print(impar(2))
# print(impar(5))


# a = [2,3,4,5]
# b = [10,20,30,40]
# c = []
# # def multiplicar(x,y,c):
# #     c = x*y
# # multiplicar(a,b,c)

# #variable =  lambda parm1, parm2,parm3 : instrucciones ,var1,var2,var3
# multiplicar = list(map(lambda x,y : x*y, a,b ))
# print(multiplicar)
# print(list(map(lambda x,y : x*y, a,b )))
# sumar = list(map(lambda x,y : x+y, a,b ))
# restar = list(map(lambda x,y : x-y, a,b ))
# print(sumar)



def modulo_vector(x, y):
    """Calcula el módulo de un vector en 2D.
    Argumentos:
    x: (float|int) coordenada de las abscisas
    y: (float|int) coordenada de las ordenadas
    Devuelve: (float) el módulo del vector
    """
    return (x ** 2 + y ** 2) ** 0.5

# def sumar(num1,num2):
#     return num1 + num2
# help(sumar)
help(modulo_vector)
modulo = modulo_vector(2,3)
print(modulo)