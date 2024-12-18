import { pool } from "../db.js"

export const getEmployees = async(req, res) => {
    try {
        // throw new Error("experimental error");
        
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        console.log(console.error);
        return res.status(500).json({
            message:'Sometimes goes wrong'
        })
    }
   
}

export const getEmployee = async(req, res) => {

    const [rows] = await pool.query('SELECT * FROM employee WHERE ID = ?', [req.params.id] )
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'Employee not found'
    }) 
        
    

    res.json(rows)
}

export const createEmployees = async(req, res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}
export const deletesEmployees = async(req, res) => {

const [result] = await pool.query('DELETE FROM employee where id = ?', [req.params.id])
console.log(result)


if (result.affectedRows <= 0) return res.status(404).json({
    message: 'Employee not found'
}) 
res.sendStatus(204);
}


export const updateEmployees = async(req, res) => {
    const {id} = req.params
    const {name, salary} = req.body

    const result = await pool.query('UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ? ', [name, salary, id] )
    
    if (result.affectedRows === 0 ) return res.status(404).json({
        message:'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM employee where ID = ?', [id])

    res.json(rows)

}

