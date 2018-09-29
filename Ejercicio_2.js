var converter = {
    convert(num, from, to, type)
    {   
        if(typeof num == 'number')
        {
            if(type == 'L' || 'l') //No esta realizando la verificacion del type
            {
                if((from == 'm') && (to == 'cm')) 
                {
                    num = num * 100;
                    return `${num}cm`;
                }
                else if((from == 'cm') && (to == 'm'))
                {
                    num = num / 100;
                    return `${num}m`;
                }
                else if((from == 'km') && (to == 'm'))
                {
                    num = num * 1000;
                    return `${num}m`;
                }
                else if((from == 'm') && (to == 'km'))
                {
                    num = num / 1000;
                    return `${num}km`;
                }
                else if((from == 'ft') && (to == 'm'))
                {
                    num = num * 0.3048;
                    return `${num}m`;
                }
                else if((from == 'm') && (to == 'ft'))
                {
                    num = num * 3.2808399;
                    return `${num}ft`;
                }
            }

            else if(type == 'T' || 't')// No esta realizando la verificacion del type
            {
                if((from == 'C' || 'c') && (to == 'F' || 'f')) 
                {
                    num = (num * 1.8) + 32;
                    return `${num}F`;
                }
                else if((from == 'F' || 'f') && (to == 'C' || 'c'))
                {
                    num = (num - 32) * (5/9)
                    return `${num}C`;
                }
                else if((from == 'K' || 'k') && (to == 'F' || 'f'))
                {
                    num = (num * 1.8) - 459.67;
                    return `${num}F`;
                }
                else if((from == 'F' || 'f') && (to == 'K' || 'k'))
                {
                    num = (num + 459.67) * (5/9)
                    return `${num}K`;
                }
                else if((from == 'C' || 'c') && (to == 'K' || 'k'))
                {
                    num = num + 273.15;
                    return`${num}K`;
                }
                else if((from == 'K' || 'k') && (to == 'C' || 'c'))
                {
                    num = num - 273.15;
                    return `${num}C`;
                }
                else{console.log("Unidad no valida")}
            }
            else{console.log("Tipo de medida no valido")}
        }
        else{console.log("Ingrese un numero")}
    }
}

/*function convert(num, from, to, type)
{   
    if(typeof num == 'number')
    {
        if(type == 'L' || 'l')
        {
            if((from == 'm') && (to == 'cm')) 
            {
                num = num * 100;
                return num;
            }
            else if((from == 'cm') && (to == 'm'))
            {
                num = num / 100;
                return num;
            }
            else if((from == 'km') && (to == 'm'))
            {
                num = num * 1000;
                return num;
            }
            else if((from == 'm') && (to == 'km'))
            {
                num = num / 1000;
                return num;
            }
            else if((from == 'ft') && (to == 'm'))
            {
                num = num * 0.3048;
                return num;
            }
            else if((from == 'm') && (to == 'ft'))
            {
                num = num * 3.2808399;
                return num;
            }
        }

        else if(type == 'T' || 't')
        {
            if((from == 'C' || 'c') && (to == 'F' || 'f')) 
            {
                num = (num * 1.8) + 32;
                return num;
            }
            else if((from == 'F' || 'f') && (to == 'C' || 'c'))
            {
                num = (num - 32) * (5/9)
                return num;
            }
            else if((from == 'K' || 'k') && (to == 'F' || 'f'))
            {
                num = (num * 1.8) - 459.67;
                return num;
            }
            else if((from == 'F' || 'f') && (to == 'K' || 'k'))
            {
                num = (num + 459.67) * (5/9)
                return num;
            }
            else if((from == 'C' || 'c') && (to == 'K' || 'k'))
            {
                num = num + 273.15;
                return num;
            }
            else if((from == 'K' || 'k') && (to == 'C' || 'c'))
            {
                num = num - 273.15;
                return num;
            }
            else{console.log("Unidad no valida")}
        }
        else{console.log("Tipo de medida no valido")}
    }
    else{console.log("Ingrese un numero")}
}*/
