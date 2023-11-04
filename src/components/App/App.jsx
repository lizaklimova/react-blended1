import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import data from '../../data/article.json';
import stats from '../../data/data.json';

const { poster, tag, title, description, name, avatar, postedAt } = data;

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom='50px' textAlign='center'>
          Task 1
        </Heading>
        <BlogCard
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          name={name}
          avatar={avatar}
          postedAt={postedAt}
        />
        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 2
        </Heading>
        <Statistics title='Main Statistics' stats={stats} />
        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 3
        </Heading>
        <ForbesList />
        <Heading marginTop='50px' marginBottom='50px' textAlign='center'>
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
