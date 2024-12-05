import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ProgressBar, Question } from '../../components';
import { colors } from '../../../../styles/globalStyles';
import { QUESTIONS } from '../../../../constants';

export default function QuizScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const totalQuestions = QUESTIONS.length;

  const handleNextQuestion = (selectedOption) => {
    const isCorrect = selectedOption === QUESTIONS[currentIndex].answer;

    if (currentIndex < totalQuestions - 1) {
      if (isCorrect) setScore(score + 1);

      setCurrentIndex(currentIndex + 1);
    } else {
      const finalScore = isCorrect ? score + 1 : score;

      navigation.navigate('Result', {
        score: finalScore,
        total: totalQuestions,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Questão {currentIndex + 1} de {totalQuestions}
      </Text>
      <ProgressBar progress={currentIndex + 1} total={totalQuestions} />
      <Question
        question={QUESTIONS[currentIndex].question}
        options={QUESTIONS[currentIndex].options}
        onAnswer={handleNextQuestion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.ebony,
    color: colors.white,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.white,
  },
});
