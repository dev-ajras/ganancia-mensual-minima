  const porcentual = (prestamoBruto, interes, meses, retornoDeseado) => {
    let balance = -1
    let gananciaRequerida =1.1
    if(interes <=0){
        return 'si no hay interes no hay necesidad de calcular las ganancias'
    }
    const cuotaMensual = (prestamoBruto + (prestamoBruto/100)*interes)/meses
    let retornoFinal = (prestamoBruto * retornoDeseado)/100
    while (balance < retornoFinal) {
    gananciaRequerida += .1
    let totalActual = prestamoBruto
    for(let i = 0; i < meses; i++){
         totalActual = totalActual - cuotaMensual
        let sumaIntereses = totalActual + (totalActual/100)*gananciaRequerida
        totalActual = sumaIntereses
        balance = sumaIntereses
    }
    }
    return gananciaRequerida.toFixed(2)
  }
      //ejemplo de como ejecutar el script
      console.log(porcentual(100000, 30, 12, 0))