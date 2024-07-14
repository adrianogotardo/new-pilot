import moment from 'moment-timezone';

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const ordersAPIMock = [
    {
        id: 1,
        name: 'NFe - 045897-1',
        workingSiteName: 'Fonseca Materiais de Construção',
        storeName: 'Loja legal',
        createdAt: '2024-07-01',
        value: 5000,
        negotiatedValue: 4500,
        cashValue: 4300,
        financedValue: 5300,
        observation: 'Nada',
        orderedItems: [
            {
                id: 1,
                name: 'Cimento',
                value: 800,
                serviceName: 'Fundação'
            }
        ]
    },
    {
        id: 2,
        name: 'NFe - 045897-2',
        workingSiteName: 'Construtora ABC',
        storeName: 'Materiais Gerais',
        createdAt: '2024-07-02',
        value: 3000,
        negotiatedValue: 2800,
        cashValue: 2700,
        financedValue: 3200,
        observation: 'Entrega urgente',
        orderedItems: [
            {
                id: 2,
                name: 'Tijolo',
                value: 1200,
                serviceName: 'Alvenaria'
            }
        ]
    },
    {
        id: 3,
        name: 'NFe - 045897-3',
        workingSiteName: 'Edificações LTDA',
        storeName: 'ConstruCenter',
        createdAt: '2024-07-03',
        value: 7000,
        negotiatedValue: 6500,
        cashValue: 6200,
        financedValue: 7500,
        observation: 'Aguardando aprovação',
        orderedItems: [
            {
                id: 3,
                name: 'Areia',
                value: 900,
                serviceName: 'Fundação'
            }
        ]
    },
    {
        id: 4,
        name: 'NFe - 045897-4',
        workingSiteName: 'Obras e Reformas',
        storeName: 'Materiais de Construção XYZ',
        createdAt: '2024-07-04',
        value: 2000,
        negotiatedValue: 1900,
        cashValue: 1850,
        financedValue: 2100,
        observation: 'Entregar até o fim do mês',
        orderedItems: [
            {
                id: 4,
                name: 'Cal',
                value: 600,
                serviceName: 'Reboco'
            }
        ]
    },
    {
        id: 5,
        name: 'NFe - 045897-5',
        workingSiteName: 'Construtora Beta',
        storeName: 'Central de Materiais',
        createdAt: '2024-07-05',
        value: 6000,
        negotiatedValue: 5700,
        cashValue: 5500,
        financedValue: 6300,
        observation: 'Pagamento em 30 dias',
        orderedItems: [
            {
                id: 5,
                name: 'Ferro',
                value: 1500,
                serviceName: 'Estrutura'
            }
        ]
    },
    {
        id: 6,
        name: 'NFe - 045897-6',
        workingSiteName: 'ConstruMais',
        storeName: 'SuperMateriais',
        createdAt: '2024-07-06',
        value: 4500,
        negotiatedValue: 4300,
        cashValue: 4200,
        financedValue: 4800,
        observation: 'Aguardando confirmação de estoque',
        orderedItems: [
            {
                id: 6,
                name: 'Argamassa',
                value: 700,
                serviceName: 'Acabamento'
            }
        ]
    },
    {
        id: 7,
        name: 'NFe - 045897-7',
        workingSiteName: 'Construtora Gamma',
        storeName: 'Tudo para Construção',
        createdAt: '2024-07-07',
        value: 8000,
        negotiatedValue: 7600,
        cashValue: 7400,
        financedValue: 8500,
        observation: 'Pagamento antecipado',
        orderedItems: [
            {
                id: 7,
                name: 'Tubos PVC',
                value: 1000,
                serviceName: 'Hidráulica'
            }
        ]
    },
    {
        id: 8,
        name: 'NFe - 045897-8',
        workingSiteName: 'ConstruSol',
        storeName: 'Casa da Construção',
        createdAt: '2024-07-08',
        value: 5500,
        negotiatedValue: 5200,
        cashValue: 5100,
        financedValue: 6000,
        observation: 'Inclui frete',
        orderedItems: [
            {
                id: 8,
                name: 'Telha',
                value: 800,
                serviceName: 'Cobertura'
            }
        ]
    },
    {
        id: 9,
        name: 'NFe - 045897-9',
        workingSiteName: 'Construtora Delta',
        storeName: 'Loja de Materiais',
        createdAt: '2024-07-09',
        value: 9000,
        negotiatedValue: 8600,
        cashValue: 8400,
        financedValue: 9500,
        observation: 'Entrega em duas etapas',
        orderedItems: [
            {
                id: 9,
                name: 'Brita',
                value: 1200,
                serviceName: 'Fundação'
            }
        ]
    },
    {
        id: 10,
        name: 'NFe - 045897-10',
        workingSiteName: 'ConstruTop',
        storeName: 'MegaMateriais',
        createdAt: '2024-07-10',
        value: 10000,
        negotiatedValue: 9500,
        cashValue: 9200,
        financedValue: 10500,
        observation: 'Pedido confirmado',
        orderedItems: [
            {
                id: 10,
                name: 'Gesso',
                value: 1100,
                serviceName: 'Acabamento'
            }
        ]
    }
];
