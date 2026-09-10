import 'dotenv/config';
import app from '../src/app.js';
import { migrate } from '../src/db.js';

// Runs once per cold start; CREATE TABLE IF NOT EXISTS is cheap to repeat.
let migrated = null;

export default async function handler(req, res) {
  if (!migrated) migrated = migrate();
  try {
    await migrated;
  } catch (err) {
    migrated = null; // don't cache a failed attempt — the next request may succeed
    console.error('Startup/migration failed:', err.message);
    res.status(500).json({ error: 'Server is not ready. Check the deployment configuration.' });
    return;
  }
  return app(req, res);
}
