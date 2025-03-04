import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY,
    AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT,
    AZURE_OPENAI_MODEL: process.env.AZURE_OPENAI_MODEL
  }
};

export default nextConfig;
