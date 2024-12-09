import {config} from 'dotenv'

config()

export const PORT =process.env.PORT || 8080
export const DB_HOST =process.env.DB_HOST || 'localhost'
export const DB_USER =process.env.DB_USER || 'root'
export const DB_PASSWORD =process.env.DB_PASSWORD || ''
export const DB_PORT =process.env.DB_PORT || '3306'
export const DB_DATABASES =process.env.DB_DATABASES || 'companydb'


// console.log(process.env.PORT)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_PORT)
// console.log(process.env.DB_DATABASES)