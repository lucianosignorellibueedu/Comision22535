class Animal:
    #atributos
    
    def __init__(self,nombre,edad,genero):
        self.nombre = nombre
        self.edad = edad
        self.genero = genero

    #Metodos de instancia
    def __str__(self):
        print (f'{self.nombre} tiene {self.edad} años')
        # return f'{self.nombre} tiene {self.edad} años'
    def hablar(self,sonido):
        return f'{self.nombre} dice {sonido}'
    
perro1 = Animal("Negro",2,"Canino")
perro1.imprimir()
ladra = perro1.hablar("Guuuaa")
print(ladra)

gato1 = Animal("Michi",1,"Felino")
maullido = gato1.hablar("miauuuuu")
gato1.imprimir()
print(maullido)



    