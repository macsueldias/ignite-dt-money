import { useContextSelector } from 'use-context-selector'
import { CaretLeft, CaretRight } from 'phosphor-react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { PaginationButton } from './components/PaginationButton'
import { SearchForm } from './components/SearchForm'

import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

import {
  PriceHighlight,
  TransactionContainer,
  TransactionPagination,
  TransactionTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '-'}{' '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
        <TransactionPagination>
          <span>
            <CaretLeft size={20} color="#323238" />
          </span>
          <PaginationButton paginationNumber={1} variant={true} />
          <PaginationButton paginationNumber={2} variant={false} />
          <PaginationButton paginationNumber={3} variant={false} />
          <span>
            <CaretRight size={20} color="#323238" />
          </span>
        </TransactionPagination>
      </TransactionContainer>
    </div>
  )
}
