#Declarar un objeto

class Persona:
    def inicializar(self,nom,edad):
        self.nombre = nom
        self.edad = edad
    
    def imprimir(self):
        print("Nombre: " + self.nombre + " Edad: " + str(self.edad))


#Programa Principal
persona1 = Persona() #instanciando la clase
persona1.inicializar("Luciano", 25)
persona1.imprimir()

persona2 = Persona()
persona2.inicializar("Ramiro", 55)
persona2.imprimir()
print(type(persona2))

texto = "Hola Mundo"
print(type(texto))

