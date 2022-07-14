import styled, { css } from "styled-components";

type StyledColumnProps = {
  width: number;
  isDraggingRow: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  user-select: none;
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const DropZone = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

export const StyledColumnAction = styled.button`
  display: inline-flex;
  position: absolute;
  top: -2px;
  left: -2px;
  border: 0;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.color.gray600};
  font-size: 12px;
  padding: 4px;
  color: #fff;
  visibility: hidden;
  opacity: 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray700};
  }
`;

export const StyledColumnContent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.color.gray400};
  border: 2px dashed ${({ theme }) => theme.color.gray700};
  border-radius: 2px;
  box-sizing: border-box;
`;

export const StyledColumn = styled.div<StyledColumnProps>`
  position: relative;
  display: inline-flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: ${({ width }) => `${width}%`};
  height: 64px;
  padding: 8px;
  border: 2px solid transparent;
  box-sizing: border-box;

  ${({ isDraggingRow }) =>
    isDraggingRow &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

  &:hover {
    border: 2px dashed ${({ theme }) => theme.color.primary600};

    ${StyledColumnAction} {
      visibility: visible;
      opacity: 1;
    }

    ${StyledColumnContent} {
      color: ${({ theme }) => theme.color.gray500};
    }
  }
`;
