import { PageButton } from './styles'

interface PaginationButtonProps {
  paginationNumber: number
  variant: boolean
}

export function PaginationButton({
  paginationNumber,
  variant = true,
}: PaginationButtonProps) {
  return <PageButton variants={variant}>{paginationNumber}</PageButton>
}
