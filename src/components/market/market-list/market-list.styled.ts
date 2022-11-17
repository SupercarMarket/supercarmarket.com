import styled from 'styled-components';

export const MarketListContainer = styled.div`
  margin-bottom: 80px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 9px;
`;

export const ViewButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: none;
  border: 1px solid ${({ theme }) => theme.color['greyScale-4']};
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.color.black};
  }
  :disabled {
    svg {
      fill: ${({ theme }) => theme.color['greyScale-4']};
    }
  }
`;

export const ListFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const MarketCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;
  margin-bottom: 80px;
`;
