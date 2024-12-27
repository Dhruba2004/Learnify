import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:OhR8CEtp7Ael@ep-icy-term-a1sa7uoz.ap-southeast-1.aws.neon.tech/AI%20LMS%20PLATFORM?sslmode=require',
  },
});
