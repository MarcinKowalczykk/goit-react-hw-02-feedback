
import React from 'react';
import { Block } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistic-block">
    <Block className="statistic-values">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
    </Block>
  </div>
);