import 'dotenv/config';
import app from './app.js';
import { migrate, pool } from './db.js';

const PORT = process.env.PORT || 8080;

migrate()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Talan Academy API listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
  });

process.on('SIGTERM', async () => {
  await pool.end();
  process.exit(0);
});
