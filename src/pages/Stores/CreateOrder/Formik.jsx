import React from 'react';
import { Formik, FieldArray, } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import ContainerGrid from '../../../components/General/Grid/ContainerGrid/ContainerGrid';
import GridItem from '../../../components/General/Grid/GridItem/GridItem';
import { TextFieldStyle } from '../../../components/UI/BasicInput/BasicInput.style';

const validationSchema = yup.object({
    items: yup.array().of(
        yup.object({
            name: yup
                .string('Item')
                .required('O item precisa ter um nome'),
            service: yup
                .string('Serviço')
                .required('Selecione um serviço'),
            value: yup
                .string('Serviço')
                .required('Selecione um serviço'),
        })
    ),
});

const FormikDebug = ({ values }) => <pre>{JSON.stringify(values, null, 2)}</pre>;

export default function FormikDynamicForm() {
    const initialValues = {
        items: [
            {
                name: '',
                service: '',
                value: ''
            },
        ],
    };

    return (
        <div style={{ width: "100%" }}>
            <Formik
                fullWidth
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>

                        <FieldArray name="items" fullWidth>
                            {({ push, remove }) => (

                                <ContainerGrid flexGrow={1} spacing={3} columns={12} >
                                    {values.items.map((item, index) => (
                                        <>
                                            <GridItem columns={8}>
                                                <TextFieldStyle
                                                    id={`items.${index}.name`}
                                                    name={`items.${index}.name`}
                                                    label="Item"
                                                    value={item.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                    error={touched.items && touched.items[index] && Boolean(errors.items && errors.items[index] && errors.items[index].name)}

                                                    helperText={touched.items && touched.items[index] && errors.items && errors.items[index] && errors.items[index].name}
                                                    width={'100%'}
                                                    height={'30px'}
                                                />
                                            </GridItem>
                                            <GridItem columns={2}>
                                                <TextFieldStyle
                                                    id={`items.${index}.service`}
                                                    name={`items.${index}.service`}
                                                    label="Serviço"
                                                    value={item.service}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.items && touched.items[index] && Boolean(errors.items && errors.items[index] && errors.items[index].service)}
                                                    helperText={touched.items && touched.items[index] && errors.items && errors.items[index] && errors.items[index].service}
                                                    width={'100%'}
                                                    height={'30px'}
                                                />
                                            </GridItem>
                                            <GridItem columns={2}>
                                                <div
                                                    style={{ width: '100%', height: '30px', backgroundColor: 'red', color: 'white', fontWeight: '700', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}
                                                    onClick={() => remove(index)}
                                                >
                                                    REMOVE
                                                </div>
                                            </GridItem>
                                        </>

                                    ))}
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        fullWidth
                                        onClick={() => push({ name: '', service: '' })}
                                    >
                                        Add field
                                    </Button>
                                </ContainerGrid>
                            )}
                        </FieldArray>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                        <FormikDebug values={values} />
                    </form>
                )}
            </Formik>
        </div >
    );
}