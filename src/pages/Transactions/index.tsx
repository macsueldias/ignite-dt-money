import { CaretLeft, CaretRight } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { PaginationButton } from './components/PaginationButton'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionPagination,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
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
