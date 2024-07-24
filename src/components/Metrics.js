import React from 'react';
import styled from 'styled-components';

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const MetricBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
`;

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const MetricLabel = styled.div`
  font-size: 16px;
  color: #888;
`;

const metricsData = [
  { label: '今日金额', value: '€0.00' },
  { label: '今日呼叫客户数量', value: 0 },
  { label: '今日目标客户数量', value: 0 },
  { label: '今日目标达成率', value: '0.00%' },
];

const Metrics = () => (
  <MetricsContainer>
    {metricsData.map((metric, index) => (
      <MetricBox key={index}>
        <MetricValue>{metric.value}</MetricValue>
        <MetricLabel>{metric.label}</MetricLabel>
      </MetricBox>
    ))}
  </MetricsContainer>
);

export default Metrics;