import { Router } from "express";
import { createEmployees, deletesEmployees, getEmployee, getEmployees, updateEmployees } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employee', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees )

router.patch('/employees/:id', updateEmployees )

router.delete('/employees/:id', deletesEmployees )


export default router 