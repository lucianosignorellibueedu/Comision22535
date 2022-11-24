class Cliente:
    banco = "Nacion"  #Atributo de Clase


    def __init__(self,nom,codigo):
        self.codigo = codigo
        self.nombre = nom 
        self.saldo = 0
    
    def depositar(self,importe):
        self.saldo += importe
        print("Deposito: " + str(importe))
        print("Tiene de saldo: " + str(self.obtener_saldo()))
        #To-Do Verificar que el saldo a depositar sea > 0
        pass  #TO-DO

    def __str__(self):
        cadena = "Nombre: " + self.nombre + " Saldo: " + str(self.saldo)
        return cadena

    def extraer(self,importe):
        self.saldo -= importe
        print("Importe a retirar: " + str(importe))
        print("Tiene de saldo: " + str(self.obtener_saldo()))
        #To-Do, verificar que se puede extraer saldo
    
    #getter
    def obtener_saldo(self):
        return self.saldo

class Banco:
    
    suspendidos=[] 

    def __init__(self):
        self.cli1 = Cliente("Ana",1)
        self.cli2 = Cliente("Juan",2)
        self.cli3 = Cliente("Maria",3)
        # clientes = [] #TO-DO
    
    def depositar(self):
        self.cli1.depositar(1000)
        self.cli2.depositar(500)
        self.cli3.depositar(2500)
    
    def extraccion(self):
        self.cli3.extraer(500)
        self.cli2.extraer(500)
        self.cli1.extraer(500)

    def saldo(self):
        return self.cli3.obtener_saldo()
    
    def supender(self):
        codigo = int(input("Ingrese el codigo del cliente"))
        if codigo == 1:
            Banco.suspendidos.append({"nombre": self.cli1.nombre,"codigo": self.cli1.codigo})
        else: 
            if codigo == 2:
                Banco.suspendidos.append({"nombre": self.cli2.nombre,"codigo": self.cli2.codigo})   
            else:
                Banco.suspendidos.append({"CUENTA SUSPENDIDA",self.cli3.codigo,self.cli3.nombre})   
        
    def imprimirCliente1(self):
        return self.cli1

    def __str__(self):
        cadena = str(self.cli1) + "\n" + str(self.cli2) + "\n" + str(self.cli3)
        return cadena

    def depositos_totales(self):
        total = self.cli1.obtener_saldo() + self.cli2.obtener_saldo() + self.cli3.obtener_saldo()
        print("Saldo total: " + str(total))

#Bloque Principal
if __name__ == '__main__':
    banco1 = Banco()
    # banco1.imprimirCliente1()
    # print(banco1.imprimirCliente1())
    banco1.supender()
    # print(Banco.suspendidos)
    banco1.supender()
    print(type(Banco.suspendidos))
    print(Banco.suspendidos)
    # banco1.depositar()
    # banco1.extraccion()
    # banco1.saldo()
    # banco1.depositos_totales()
    # print(banco1)
