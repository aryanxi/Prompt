
 import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Discover and share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered Prompts</span>
      </h1>
      <p className="desc text-center">
        {" "}
        A prompt generation website is a platform that helps users spark
        creativity by providing them with random or tailored writing prompts,
        ideas, or scenarios. It's ideal for writers, students, and content
        creators looking to overcome writer's block, brainstorm new concepts, or
        practice their skills. The website often features various categories,
        allowing users to choose prompts based on genre, topic, or difficulty
        level.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
