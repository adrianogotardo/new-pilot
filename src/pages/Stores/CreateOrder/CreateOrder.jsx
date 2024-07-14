import React from 'react';
import { Formik, FieldArray } from 'formik';
import ContainerGrid from '../../../components/General/Grid/ContainerGrid/ContainerGrid';
import GridItem from '../../../components/General/Grid/GridItem/GridItem';
import { FormControlStyle, InputLabelStyle, MenuItemStyle, SelectStyle, TextFieldStyle, DeleteRowButton, ButtonStyle, ButtonContainer } from './ItemsDynamicForm/ItemsDynamicForm.style';
import { validationSchema } from '../../../schemas/orders/ItemsSchema';
import { ButtonsContainer, InfoContainer } from "./CreateOrder.style";
import DeleteIcon from '@mui/icons-material/Delete';
import BasicButton from '../../../components/UI/BasicButton/BasicButton';

export default function CreateOrder({ setIsInCreateOrderPage }) {

    const paymentMethods = [{ id: 1, name: 'Valor à prazo' }, { id: 2, name: 'Valor à vista' }, { id: 3, name: 'Valor negociado' }];

    const FormikDebug = ({ values }) => <pre>{JSON.stringify(values, null, 2)}</pre>;

    const initialValues = {
        name: '',
        store: '',
        workingSite: '',
        financedValue: '',
        cashValue: '',
        negociatedValue: '',
        paymentMethod: '',
        createdAt: '',
        observations: '',
        items: [
            {
                name: '',
                service: '',
                value: ''
            },
        ],
    };

    const stores = [
        {
            id: 0,
            name: 'Loja 1'
        }
    ]

    const workingSites = [
        {
            id: 0,
            name: 'Obra 1',
            services: [
                {
                    name: 'Fundação',
                    percentage: '70'
                },
                {
                    name: 'Cobertura',
                    percentage: '60'
                },
                {
                    name: 'Pintura',
                    percentage: '30'
                },

            ]
        },
        {
            id: 1,
            name: 'Obra 2',
            services: [
                {
                    name: 'Vidros',
                    percentage: '70'
                },
                {
                    name: 'Piso',
                    percentage: '60'
                },
                {
                    name: 'Forro',
                    percentage: '30'
                },

            ]
        }
    ]

    return (
        <>
            <h1>Criar pedido</h1>
            <div style={{ width: "100%" }}>
                <Formik
                    fullWidth
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('ON SUBMIT')
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <InfoContainer>
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
                                                labelId='paymentMethod'
                                                name='paymentMethod'
                                                value={values.paymentMethod}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ display: "block" }}
                                            >
                                                <MenuItemStyle value={''} label="Método de pagamento">
                                                    Selecione um método de pagamento {" "}
                                                </MenuItemStyle>
                                                {
                                                    paymentMethods.map((method, index) => {
                                                        return (
                                                            <MenuItemStyle key={index} value={method.id} label={method.name}>
                                                                {method.name}
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
                            </InfoContainer>
                            <InfoContainer>
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
                            </InfoContainer>
                            <ButtonsContainer>
                                <BasicButton danger action={() => setIsInCreateOrderPage(false)}>
                                    Cancelar
                                </BasicButton>
                                <BasicButton type='submit'>
                                    Salvar
                                </BasicButton>
                            </ButtonsContainer>
                        </form>
                    )}
                </Formik>
            </div >
        </>
    );
}