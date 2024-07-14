
import * as yup from 'yup';

export const validationSchema = yup.object({
    items: yup.array().of(
        yup.object({
            name: yup
                .string('Item')
                .required('O item precisa ter um nome'),
            service: yup
                .string('Serviço')
                .min(1, 'Serviço inválido')
                .required('Selecione um serviço'),
            value: yup
                .number().typeError("Deve ser um número")
                .required('Insira um valor'),
        })
    ),
});