import React from 'react';
import { Formik } from 'formik';
import ContainerGrid from '../../../../components/General/Grid/ContainerGrid/ContainerGrid';
import GridItem from '../../../../components/General/Grid/GridItem/GridItem';
import { FormControlStyle, InputLabelStyle, MenuItemStyle, SelectStyle, TextFieldStyle } from '../ItemsDynamicForm/ItemsDynamicForm.style';
import { validationSchema } from '../../../../schemas/orders/ItemsSchema';

const FormikDebug = ({ values }) => <pre>{JSON.stringify(values, null, 2)}</pre>;

export default function OrdersMainForm({ initialValues, paymentMethods, stores, workingSites }) {

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
                        <ContainerGrid flexGrow={1} spacing={3} columns={12} >
                            <GridItem columns={6}>
                                <TextFieldStyle
                                    id={`name`}
                                    name={`name`}
                                    label="Identificação do pedido"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                            <GridItem columns={3}>
                                <FormControlStyle size='small'>
                                    <InputLabelStyle id='store'>Loja</InputLabelStyle>
                                    <SelectStyle
                                        labelId='store'
                                        name='store'
                                        value={values.store}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ display: "block" }}
                                    >
                                        <MenuItemStyle value={''} label="Loja">
                                            Selecione uma loja {" "}
                                        </MenuItemStyle>
                                        {
                                            stores.map((store, index) => {
                                                return (
                                                    <MenuItemStyle key={index} value={store.id} label={store.name}>
                                                        {store.name}
                                                    </MenuItemStyle>
                                                )
                                            })
                                        }
                                    </SelectStyle>
                                </FormControlStyle>
                            </GridItem>
                            <GridItem columns={3}>
                                <FormControlStyle size='small'>
                                    <InputLabelStyle id='workingSite'>Obra</InputLabelStyle>
                                    <SelectStyle
                                        labelId='workingSite'
                                        name='workingSite'
                                        value={values.workingSite}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ display: "block" }}
                                    >
                                        <MenuItemStyle value={''} label="Obra">
                                            Selecione uma obra {" "}
                                        </MenuItemStyle>
                                        {
                                            workingSites.map((site, index) => {
                                                return (
                                                    <MenuItemStyle key={index} value={site.id} label={site.name}>
                                                        {site.name}
                                                    </MenuItemStyle>
                                                )
                                            })
                                        }
                                    </SelectStyle>
                                </FormControlStyle>
                            </GridItem>
                            <GridItem columns={3}>
                                <TextFieldStyle
                                    id={`financedValue`}
                                    name={`financedValue`}
                                    label="Valor à prazo"
                                    value={values.financedValue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                            <GridItem columns={3}>
                                <TextFieldStyle
                                    id={`cashValue`}
                                    name={`cashValue`}
                                    label="Valor à vista"
                                    value={values.cashValue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                            <GridItem columns={3}>
                                <TextFieldStyle
                                    id={`negociatedValue`}
                                    name={`negociatedValue`}
                                    label="Valor negociado"
                                    value={values.negociatedValue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                            <GridItem columns={3}>
                                <FormControlStyle size='small'>
                                    <InputLabelStyle id='payment-method'>Método de pagamento</InputLabelStyle>
                                    <SelectStyle
                                        labelId='payment-method'
                                        name='payment-method'
                                        value={values.paymentMethods}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ display: "block" }}
                                    >
                                        <MenuItemStyle value={''} label="Método de pagamento">
                                            Escolha um método de pagamento {" "}
                                        </MenuItemStyle>
                                        {
                                            paymentMethods.map((method, index) => {
                                                return (
                                                    <MenuItemStyle value={method} label={method}>
                                                        {method}
                                                    </MenuItemStyle>
                                                )
                                            })
                                        }
                                    </SelectStyle>
                                </FormControlStyle>
                            </GridItem>
                            <GridItem columns={3}>
                                <TextFieldStyle
                                    id={`createdAt`}
                                    name={`createdAt`}
                                    label="Data"
                                    value={values.createdAt}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                            <GridItem columns={9}>
                                <TextFieldStyle
                                    id={`observations`}
                                    name={`observations`}
                                    label="Observações (opcional)"
                                    value={values.observations}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    width={'100%'}
                                    height={'28px'}
                                />
                            </GridItem>
                        </ContainerGrid>
                        <FormikDebug values={values} />
                    </form>
                )}
            </Formik>
        </div >
    );
}
