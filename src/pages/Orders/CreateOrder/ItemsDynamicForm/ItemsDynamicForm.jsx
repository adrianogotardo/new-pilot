import React from 'react';
import { Formik, FieldArray, } from 'formik';
import ContainerGrid from '../../../../components/General/Grid/ContainerGrid/ContainerGrid';
import GridItem from '../../../../components/General/Grid/GridItem/GridItem';
import { DeleteRowButton, TextFieldStyle, ButtonStyle, InputLabelStyle, SelectStyle, MenuItemStyle, FormControlStyle, ButtonContainer } from './ItemsDynamicForm.style';
import { validationSchema } from '../../../../schemas/orders/ItemsSchema';
import DeleteIcon from '@mui/icons-material/Delete';

const FormikDebug = ({ values }) => <pre>{JSON.stringify(values, null, 2)}</pre>;

export default function ItemsDynamicForm({ initialValues, workingSites }) {
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
                                <ContainerGrid flexGrow={1} spacing={3} columns={24} >
                                    {values.items.map((item, index) => (
                                        <>
                                            <GridItem columns={14}>
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
                                                    height={'28px'}
                                                />
                                            </GridItem>
                                            <GridItem columns={4}>
                                                <FormControlStyle size='small'>
                                                    <InputLabelStyle id='select-service'>Serviço</InputLabelStyle>
                                                    <SelectStyle
                                                        labelId='select-service'
                                                        name={`items.${index}.service`}
                                                        value={item.service}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{ display: "block" }}
                                                    >
                                                        <MenuItemStyle value={''} label="Select a service">
                                                            Select a service{" "}
                                                        </MenuItemStyle>
                                                        {
                                                            workingSites[Number(values.workingSite)]?.services.map((service, index) => {
                                                                return (
                                                                    <MenuItemStyle value={service.name} label={service.name} key={index}>
                                                                        {service.name}
                                                                    </MenuItemStyle>
                                                                )
                                                            })
                                                        }

                                                    </SelectStyle>
                                                </FormControlStyle>
                                                {errors.color && <div className="input-feedback">{errors.color}</div>}
                                            </GridItem>
                                            <GridItem columns={4}>
                                                <TextFieldStyle
                                                    id={`items.${index}.value`}
                                                    name={`items.${index}.value`}
                                                    label="Valor negociado"
                                                    value={item.value}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                    error={touched.items && touched.items[index] && Boolean(errors.items && errors.items[index] && errors.items[index].value)}

                                                    helperText={touched.items && touched.items[index] && errors.items && errors.items[index] && errors.items[index].value}
                                                    width={'100%'}
                                                    height={'28px'}
                                                />
                                            </GridItem>
                                            <GridItem columns={1}>
                                                <DeleteRowButton

                                                    onClick={() => remove(index)}
                                                >
                                                    <DeleteIcon />
                                                </DeleteRowButton>
                                            </GridItem>
                                        </>

                                    ))}
                                    <ButtonContainer>
                                        <ButtonStyle
                                            color="secondary"
                                            variant="contained"
                                            onClick={() => push({ name: '', service: '', value: '' })}
                                        >
                                            + Adicionar item
                                        </ButtonStyle>
                                    </ButtonContainer>
                                </ContainerGrid>
                            )}
                        </FieldArray>
                        <FormikDebug values={values} />
                    </form>
                )}
            </Formik>
        </div >
    );
}