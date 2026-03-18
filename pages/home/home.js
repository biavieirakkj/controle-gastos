function logout()
{
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html"
    }).catch(() => {
        alert('Erro ao fazer logout')
    })
}

findTransactions();

function findTransactions()
{
    setTimeout(() => 
    {
        addTransactionToScreen(fakeTransactions)
    }, 1000)
}

function addTransactionToScreen(transactions)
{
    const orderedList = document.getElementById('transactions');

    transactions.forEach(transaction => { 
        const li = document.createElement('li');
        li.classList.add(transaction.type);

        const date = document.createElement('p');
        date.innerHTML = formatDate(transaction.date);
        li.appendChild(date);

        const money = document.createElement('p');
        money.innerHTML = formatMoney(transaction.money);
        li.appendChild(money);

        const type = document.createElement('p');
        type.innerHTML = transaction.transactionType;
        li.appendChild(type);

        if(transaction.description)
        {
            const description = document.createElement('p');
            description.innerHTML = transaction.description;
            li.appendChild(description);
        }

        orderedList.appendChild(li);


    });
}

function formatMoney(money)
{
    return `${money.currency} ${money.value.toFixed(2)}`
}

function formatDate(date)
{
    return new Date(date).toLocaleDateString('pt-br');
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