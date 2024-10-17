import {createPool} from 'mysql2/promise';
 // 783.8k (gzipped:344.8K)

const pool = createPool({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'prueba2'
    }
)

export default pool;