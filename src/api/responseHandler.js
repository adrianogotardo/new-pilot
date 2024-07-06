export function errorHandler(status) {
    let message = 'Erro desconhecido';

    switch (status) {
        case 400:
            message = 'Requisição inválida';
            break;

        case 401:
            message = 'Não autorizado';
            break;

        case 404:
            message = 'Não encontrado';
            break;

        case 409:
            message = 'Conflito';
            break;

        case 422:
            message = 'Dados em formato incorreto';
            break;

        default:
            message = 'Erro desconhecido';
    }

    return message;
}

export function successHandler(status) {
    let message = 'OK';

    switch (status) {
        case 200:
            message = 'OK';
            break;

        case 201:
            message = 'Criado';
            break;

        default:
            message = 'OK';
    }

    return message;
}