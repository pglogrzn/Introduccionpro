 #SISTEMA DE CONTROL DE EL MATRIMONIO DE EL TIGRE Y OVIEDO

personas = []
limite = 20

while True:

    print("\n====== MATRIMONIO ABELARDO Y OVIEDO <3 ======")
    print("1. Ingresar invitado")
    print("2. Mostrar invitados")
    print("3. Editar nombre")
    print("4. Eliminar persona")
    print("5. Estadisticas")
    print("6. Salir")

    opcion = int(input("Digite una opcion: "))

    # ingresar invitado
    if opcion == 1:

        if len(personas) == limite:
            print("Yuca, el evento ya esta lleno")

        else:
            nombre = input("Digite el nombre de la persona: ")

            if nombre in personas:
                print("La persona ya esta registrada")

            else:
                personas.append(nombre)
                print("La persona ha sido agregada")

    # mostrar invitados
    elif opcion == 2:

        if len(personas) == 0:
            print("No hay nadie registrado")

        else:
            print("\n===== INVITADOS REGISTRADOS =====")

            numero = 1

            for persona in personas:
                print(numero, "-", persona)
                numero = numero + 1

    # cambiar nombre
    elif opcion == 3:

        if len(personas) == 0:
            print("No hay nadie registrado")

        else:
            nombre_antiguo = input("Escriba el nombre a corregir: ")

            if nombre_antiguo in personas:

                nombre_nuevo = input("Escriba el nuevo nombre: ")

                if nombre_nuevo in personas:
                    print("Ese nombre ya esta registrado")

                else:
                    posicion = personas.index(nombre_antiguo)
                    personas[posicion] = nombre_nuevo

                    print("Nombre corregido correctamente")

            else:
                print("La persona no existe")

    # borrar persona
    elif opcion == 4:

        if len(personas) == 0:
            print("No hay nadie registrado")

        else:
            nombre = input("Escriba el nombre a eliminar: ")

            if nombre in personas:

                personas.remove(nombre)
                print("Se borro correctamente")

            else:
                print("La persona no esta registrada")

    # stats
    elif opcion == 5:

        ocupados = len(personas)
        libres = limite - ocupados

        print("\n===== ESTADISTICAS =====")
        print("Invitados registrados:", ocupados)
        print("Cupos disponibles:", libres)

    # salida
    elif opcion == 6:

        print("Gracias por usar el sistema de control de el matrimonio de Abelardo y Oviedo <3")
        break

    # opcion invalida
    else:
        print("Opcion invalida")