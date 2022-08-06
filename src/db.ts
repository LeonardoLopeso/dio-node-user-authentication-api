import { Pool } from "pg";

const connectionString = 'info_bd';

const db = new Pool({ connectionString });

export default db;