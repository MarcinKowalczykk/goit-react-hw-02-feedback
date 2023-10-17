import React, { Component } from 'react';

import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  calculateTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  calculatePositivePercentage = () => {
    const total = this.calculateTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calculateTotalFeedback();

    const positivePercentage = this.calculatePositivePercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            'There is no feedback'
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}