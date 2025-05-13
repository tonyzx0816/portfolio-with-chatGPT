 # Tony Li's Portfolio Website

This is a personal portfolio website built using [Next.js](https://nextjs.org), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com). The website showcases Tony Li's skills, projects, and achievements, and includes an interactive chatbot powered by Azure OpenAI.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Interactive Chatbot**: A chatbot powered by Azure OpenAI to answer questions about Tony's resume and skills.
- **Project Showcase**: Highlights completed projects with links to GitHub repositories.
- **Downloadable Resume**: Visitors can download Tony's resume directly from the website.
- **Modern Tech Stack**: Built with Next.js, React, and Tailwind CSS for fast performance and scalability.

## Live Demo

The website is live at: [https://portfolio-tony0816.vercel.app](https://portfolio-tony0816.vercel.app)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun (any package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tonyzx0816/tony-portfolio.git
   cd tony-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```env
   AZURE_OPENAI_API_KEY=your-azure-openai-api-key
   AZURE_OPENAI_ENDPOINT=your-azure-openai-endpoint
   AZURE_OPENAI_MODEL=your-azure-openai-model
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Project Structure

```
.
├── app/                # Next.js app directory
│   ├── api/            # API routes (includes chatbot logic)
│   ├── globals.css     # Global CSS styles
│   ├── layout.js       # Root layout for the app
│   └── page.js         # Main page of the portfolio
├── public/             # Static assets (images, resume, etc.)
├── .env.local          # Environment variables (not included in the repo)
├── .gitignore          # Git ignore rules
├── jsconfig.json       # JavaScript configuration
├── next.config.mjs     # Next.js configuration
├── package.json        # Project metadata and dependencies
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Project documentation
└── tailwind.config.js  # Tailwind CSS configuration
```

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Azure OpenAI, Express.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Key Features

### Chatbot

The chatbot is powered by Azure OpenAI and can answer questions about Tony's resume, skills, and projects. It uses the following technologies:

- **Azure OpenAI**: For generating responses.
- **Next.js API Routes**: To handle chatbot requests.

### Projects

The portfolio showcases the following projects:

1. **Snake Game**: [GitHub Repository](https://github.com/tonyzx0816/greedy_snake_game)
2. **Turtle Crossing Game**: [GitHub Repository](https://github.com/tonyzx0816/turtle_crossing_game)
3. **Turtle Racing Game**: [GitHub Repository](https://github.com/tonyzx0816/Turtle_Racing_Game)
4. **Pong Game**: [GitHub Repository](https://github.com/tonyzx0816/pong_game)

## Deployment

The website is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Set the environment variables in the Vercel dashboard.
4. Deploy the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to reach out:

- **Email**: [lizhongxian23@gmail.com](mailto:lizhongxian23@gmail.com)
- **LinkedIn**: [Tony Li](https://www.linkedin.com/in/tony-li-17b169305/)
- **GitHub**: [tonyzx0816](https://github.com/tonyzx0816)
