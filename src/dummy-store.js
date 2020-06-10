const dummyStore = {
  categories: [
    {
      id: '1',
      name: 'Income'
    },
    {
      id: '2',
      name: 'Housing'
    },
    {
      id: '3',
      name: 'Utilities'
    },
    {
      id: '4',
      name: 'Car'
    }
  ],
  expenses: [
    {
      id: '1',
      name: 'Paycheck 1',
      category_id: '1',
      expected_amount: '1700',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '2',
      name: 'Rent',
      category_id: '2',
      expected_amount: '1200',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '3',
      name: 'Electricity',
      category_id: '3',
      expected_amount: '100',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '4',
      name: 'Gas',
      category_id: '4',
      expected_amount: '120',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '5',
      name: 'Renters Insurance',
      category_id: '2',
      expected_amount: '25',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '6',
      name: 'Water',
      category_id: '3',
      expected_amount: '150',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '7',
      name: 'Car Insurance',
      category_id: '4',
      expected_amount: '70',
      actual_amount: null,
      due_date: new Date()
    },
    {
      id: '8',
      name: 'Phone Bill',
      category_id: '3',
      expected_amount: '50',
      actual_amount: null,
      due_date: new Date()
    },
  ],
  transactions: [

  ]
}

export default dummyStore