import moment from 'moment-timezone';

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const ordersMock = [
    {
        id: 1,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 2,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 3,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 4,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 5,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 6,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
    {
        id: 7,
        name: 'Tijolos',
        constructionSite: 'Fonseca Materiais de Construção',
        store: 'Loja legal',
        value: 'R$500,00',
        date: moment.tz(timeZone).format('DD/MM/YYYY')
    },
]