
function timeConversion(s) {
    let stringAM = s.search("AM")
    if (stringAM !== -1){
        const HorarioCompleto = s.replace("AM","")
        var [Horas, minutos, segundos] = HorarioCompleto.split(":")
        if (Horas === "12"){
            Horas = "00"
        }
    }else{
        const HorarioCompleto = s.replace("PM","")
        var [Horas, minutos, segundos] = HorarioCompleto.split(":")
        if (Horas !== "12"){
            Horas = String(Number(Horas) + 12)
        }
    }
    return `${Horas}:${minutos}:${segundos}`
}
console.log(timeConversion("10:02:00AM"))
//separar a hora do AM/PM
//separar todas os horarios individualmente
//converter caso necessario