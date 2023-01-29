import styled from 'styled-components'

interface PageButtonProps {
  variants?: true | false
}

export const PageButton = styled.button<PageButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  border: 0;
  margin-inline: 0.75rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.variants === true
      ? props.theme['gray-500']
      : props.theme['green-500']};

  &:hover {
    background-color: ${(props) =>
      props.variants === true
        ? props.theme['gray-600']
        : props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
