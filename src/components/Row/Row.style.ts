import styled, { css } from "styled-components";

type StyledRowProps = {
  isDraggingRow: boolean;
};

export const StyledRowActions = styled.div`
  position: absolute;
  display: inline-flex;
  top: -32px;
  left: calc(50% - 54px);
  height: 32px;
  background-color: ${({ theme }) => theme.color.primary400};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
`;

export const RowActionButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary500};
  }
`;

export const StyledRow = styled.div<StyledRowProps>`
  position: relative;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  min-height: 64px;

  &:hover {
    border-top: 2px solid ${({ theme }) => theme.color.primary400};
    border-bottom: 2px solid ${({ theme }) => theme.color.primary400};

    ${StyledRowActions} {
      visibility: visible;
      opacity: 1;
    }
  }

  ${({ isDraggingRow }) =>
    isDraggingRow &&
    css`
      background-color: ${({ theme }) => theme.color.primary400};
    `}
`;

export const RowSelectorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px dashed ${({ theme }) => theme.color.gray200};
  padding: 32px 0;
`;

export const RowSelectorContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  margin-top: 16px;
`;

export const StyledRowSelectorButton = styled.button`
  display: inline-flex;
  color: ${({ theme }) => theme.color.gray300};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 16.666666%;
  padding: 8px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.color.gray400};
  }

  svg {
    width: 80px;
  }
`;

export const RowButtonsActivator = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: 0;
  background-color: #4b5563;
  border-radius: 99999px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #374151;
  }
`;

export const RowSelectorClose = styled.button`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  border: 0;
  padding: 16px;
  color: ${({ theme }) => theme.color.gray300};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.gray400};
  }
`;
