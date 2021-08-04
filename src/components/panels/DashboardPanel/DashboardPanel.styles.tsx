import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const Header = styled(Typography)`
  text-align: center;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const TopInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const SingleItemContainer = styled.div`
  display: flex;
  width: 200px;
`;

export const BottomStatsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const GamesCountContainer = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  margin-left: 8px;
`;

export const ChartContainer = styled.div`
  padding: 12px;
`;
