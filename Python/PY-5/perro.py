class Perro:
    #atributos
    genero= "Canino"
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad
    #Metodos de instancia
    def imprimir(self):
        print (f'{self.nombre} tiene {self.edad} años')
        # return f'{self.nombre} tiene {self.edad} años'
    def ladrar(self,sonido):
        return f'{self.nombre} dice {sonido}'
    
perro1 = Perro("Negro",2)
perro1.imprimir()
ladra = perro1.ladrar("Guuuaa")
print(ladra)



    