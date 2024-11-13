import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../styles/globalStyles';

export default function PostCard({ heading, summary, likes, sharing }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.summary}>{summary}</Text>

      <View style={styles.interactions}>
        <Text style={styles.text}>Curtidas: {likes}</Text>
        <Text style={styles.text}>Compartilhamentos: {sharing}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.lavenderBlush,
    justifyContent: 'center',
    gap: 10,
  },
  interactions: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 30,
    textIndent: 10,
  },
  summary: {
    textIndent: 10,
  },
  text: {
    fontSize: 14,
  },
});
