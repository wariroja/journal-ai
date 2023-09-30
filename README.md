# Sunlit Stories: Your Personal Journal Analyzer

Sunlit Stories is a unique project bootstrapped with `create-next-app` that provides a platform for users to analyze their journal entries. By leveraging technologies like Next.js, Langchain, Clerk Auth, Prisma, PlanetScale, and deploying on Vercel, this application not only offers a secure and robust environment for journaling but also enhances self-awareness through its analysis features.

## Features

- **Sentiment Analysis**: Understand the sentiment of your entries to better gauge your mood.
- **Mood Tracking**: Visualize your mood over time with intuitive graphs.
- **Title Suggestion**: Receive title suggestions based on the content of your entry.
- **Negativity Alert**: Get alerted if an entry appears particularly negative.
- **Mood Querying**: Engage with the mood querying feature powered by Vector database.

## Demo


https://github.com/wariroja/journal-ai/assets/40623643/7846a47d-98bf-4bb4-a738-b3e7facd58a5



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

# Future Improvements

We have envisioned a set of enhancements that would significantly augment the user experience and functionality of our project. Below are some of the key improvements we aim to implement in the near future:

## 1. Cryptic Data Storage:
   - Implement encryption techniques to ensure that user data is stored cryptically, thereby enhancing the security and privacy of the information.
   
## 2. Performance Optimization:
   - Identify and eliminate bottlenecks to improve the loading speed and overall responsiveness of the application.
   - Optimize server-side operations and database queries to ensure swift data retrieval and manipulation.
   
## 3. CSS and Styling Overhaul:
   - Revamp the current CSS and styling to provide a more intuitive, sleek, and user-friendly interface.
   - Explore the integration of themes and allow users to customize the appearance based on their preferences.
   
## 4. Social Sharing Feature:
   - Develop a feature that allows users to share their entries with a network of friends, promoting a supportive community where individuals can share and reflect on their experiences.
   - Implement privacy controls to allow users to manage who can view their shared entries and to withdraw sharing permissions as needed.
   
## 5. Cross-network Accessibility:
   - Enable users to access and share their entries across different devices and platforms, ensuring seamless interaction within their network of friends, regardless of the device or network they are on.

We are open to contributions and suggestions from the community to help realize these improvements. If you have ideas or would like to contribute, feel free to open an issue or submit a pull request.

---

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository, create a new branch for your work, and submit a pull request once your changes are ready for review.

---

## Contact

For any inquiries or further discussions regarding these future improvements, feel free to open an issue on this repository.

