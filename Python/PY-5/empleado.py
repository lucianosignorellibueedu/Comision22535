class Empleado:
    empresa="Google"
    def __init__(self):
        self.nombre = input("Ingrese su nombre: ")
        self.edad = int(input("Ingrese su edad: "))
        self.sueldo = float(input("Ingrese su sueldo: "))
    
    def __str__(self) -> str:
        return f'Nombre: {self.nombre} tiene {self.edad} años, Sueldo: {self.sueldo}'
    
    def paga_impuestos(self):
        if(self.sueldo > 10000):
            return  True
        return False
    
    def __del__(self):
        print("Dado de baja")
        
#Programa Principal
emp1 = Empleado()
print("El sueldo es de: ", emp1.sueldo)
print("Paga impuestos?" , emp1.paga_impuestos())
print("Trabaja en: ", emp1.empresa)

Empleado.empresa = "Apple"
emp2 = Empleado()
print("El sueldo es de: ", emp2.sueldo)
print("Paga impuestos?" , emp2.paga_impuestos())
print("Trabaja en: ", emp2.empresa)