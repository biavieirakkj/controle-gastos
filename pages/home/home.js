function logout()
{
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html"
    }).catch(() => {
        alert('Erro ao fazer logout')
    })
}

const fakeTransactions = [{
    type: 'expense',
    date: '2026-01-05',
    money: {
        currency: 'R$',
        value: 20
    },
    transactionType: 'Alimentação',
    description: 'Atacadão'
}, {
    type: 'income',
    date: '2026-01-04',
    money: {
        currency: 'R$',
        value: 1612
    },
    transactionType: 'Bolsa estudo'
}, {
    type: 'expense',
    date: '2026-01-01',
    money: {
        currency: 'EUR',
        value: 100
    },
    transactionType: 'Lazer',
    description: 'Maquiagem marca tal'
}, {
    type: 'expense',
    date: '2026-01-01',
    money: {
        currency: 'USD',
        value: 37
    },
    transactionType: 'Trabalho',
    description: 'Melhoria homeoffice'
}]