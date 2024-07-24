import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ChartTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
`;

const ChartPlaceholder = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
`;

const LoginChart = () => (
  <ChartContainer>
    <ChartTitle>登录数</ChartTitle>
    <ChartPlaceholder>Chart Placeholder</ChartPlaceholder>
  </ChartContainer>
);

export default LoginChart;