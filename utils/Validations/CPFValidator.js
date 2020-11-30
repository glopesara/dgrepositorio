function identifyDigit(cpfTWhithoutDigit){
    let = digit = Number();
    const length = cpfTWhithoutDigit.length + 1;
    
    const cpfNumber = cpfTWhithoutDigit.map(number => Number(number));

    const cpfNumberMultiplicated = cpfNumber.map((number, index) => {
        return number * (length - index);
    });

    const sum = cpfNumberMultiplicated.reduce((acum, number) => 
        acum += number
    );
    
    const restDivision = sum % 11;

    if( restDivision < 2) {
        digit = 0;
    } else if ( restDivision >= 2){
        digit = 11 - restDivision;
    };

    return digit.toString();
}

function cpfValidator(e) {
    e.placeholder = 'Ex: 00000000000 (só números)';
    const cpf = e.value;

    if(cpf.length !== 11) {
        e.placeholder = 'Cpf inválido';
        e.value = ''
        return;
    }

    let cpfTWhithoutDigits = cpf.substr(0, 9).split('');

    const firstDigit = identifyDigit(cpfTWhithoutDigits, cpf);

    if(cpf.substr(9, 1) !== firstDigit){
        e.focus();
    }
    
    cpfTWhithoutDigits.push(firstDigit);
    
    const secondDigit = identifyDigit(cpfTWhithoutDigits, cpf);

    if(cpf.substr(10, 1) !== secondDigit){
        e.placeholder = 'Cpf inválido';
        e.value = '';
        return;
    }
    
    cpfTWhithoutDigits.push(secondDigit);

    const cpfVerified = cpfTWhithoutDigits.join('');

    if (cpf === cpfVerified){
       
    } else {
        e.placeholder = 'CPF inválido';
        e.value = ''
        e.focus();
    }
}

// false cpf to test 11144477705