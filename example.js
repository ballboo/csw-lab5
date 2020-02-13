let customer = [
    {name : 'John', salary: 190 },
    {name : 'Jack', salary: 90 },
    {name : 'Jim', salary: 690 },
]

customer = [...customer, {name : 'Jom', salary: 690 }]
//customer.push()
customer.sort((a))
customer.map( (item) => {
    console.log(item.name + '-' + item.salary )
})
console.log(customer)