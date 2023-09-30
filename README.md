# Sunlit Stories: Your Personal Journal Analyzer

Sunlit Stories is a unique project bootstrapped with `create-next-app` that provides a platform for users to analyze their journal entries. By leveraging technologies like Next.js, Langchain, Clerk Auth, Prisma, PlanetScale, and deploying on Vercel, this application not only offers a secure and robust environment for journaling but also enhances self-awareness through its analysis features.

## Features

- **Sentiment Analysis**: Understand the sentiment of your entries to better gauge your mood.
- **Mood Tracking**: Visualize your mood over time with intuitive graphs.
- **Title Suggestion**: Receive title suggestions based on the content of your entry.
- **Negativity Alert**: Get alerted if an entry appears particularly negative.
- **Mood Querying**: Engage with the mood querying feature powered by Vector database.

## Demo


## Technologies

- **Next.js** for the frontend.
- **Langchain** for text analysis.
- **Clerk Auth** for user authentication.
- **Prisma** with **PlanetScale** for database management.
- **Vercel** for deployment.
- **Vector Database** for mood querying.

## Getting Started

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/your-username/sunlit-stories.git
cd sunlit-stories

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production
The app is deployed on Vercel and accessible at sunlitstories.xyz. Currently, there's a known issue in the production environment where the question and answering feature is not functioning as expected. This bug is actively being worked on.

Contribution
Feel free to create issues or submit pull requests. Any contribution is welcomed!

License
MIT
