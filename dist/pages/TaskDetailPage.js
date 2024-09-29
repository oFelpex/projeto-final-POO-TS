export function taskWeekDay(thisDay) {
    let weekDay;
    switch (thisDay) {
        case 1:
            weekDay = "Segunda-feira";
            break;
        case 2:
            weekDay = "Terça-feira";
            break;
        case 3:
            weekDay = "Quarta-feira";
            break;
        case 4:
            weekDay = "Quinta-feira";
            break;
        case 5:
            weekDay = "Sexta-feira";
            break;
        case 6:
            weekDay = "Sábado";
            break;
        case 0:
            weekDay = "Domingo";
            break;
        default: weekDay = "Dia não encontrado!";
    }
    return weekDay;
}
export function taskMonth(thisMonth) {
    let month;
    switch (thisMonth) {
        case 1:
            month = "Janeiro";
            break;
        case 2:
            month = "Fevereiro";
            break;
        case 3:
            month = "Março";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Maio";
            break;
        case 6:
            month = "Junho";
            break;
        case 7:
            month = "Julho";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Setembro";
            break;
        case 10:
            month = "Outubro";
            break;
        case 11:
            month = "Novembro";
            break;
        case 12:
            month = "Dezembro";
            break;
        default: month = "Mês não encontrado!";
    }
    return month;
}
export function taksStatus(thisStatus) {
    let status;
    switch (thisStatus) {
        case true:
            status = "Concluída.";
            break;
        case false:
            status = "Não Concluída.";
            break;
        default: status = "Ops, ocorreu algum erro!";
    }
    return status;
}
