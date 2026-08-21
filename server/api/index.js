import 'dotenv/config';
import app from '../src/app.js';
import { migrate } from '../src/db.js';

// Runs once per cold start; CREATE TABLE IF NOT EXISTS is cheap to repeat.
let migrated = null;

export default async function handler(req, res) {
  if (!migrated) migrated = migrate();
  await migrated;
  return app(req, res);
}
