import { Pool } from "pg";

const connectionString = 'postgres://qvyravuz:oN4EtQlWKttEiXeROpZrKiN1hzsxmeEf@dumbo.db.elephantsql.com/qvyravuz';

const db = new Pool({ connectionString });

export default db;