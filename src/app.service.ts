import { Injectable } from '@nestjs/common';
import {nestdb} from './db.config';
import { Employee } from './data/employee.dto';
import { Employee2} from './data/update_employee.dto'


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  


async getAllUsers(Emp_ID:any): Promise<any[]> {
  try {
    await nestdb.connect();
    const result = await nestdb.query(`SELECT * FROM Employee where Emp_ID=${Emp_ID}`);
    console.log(result);
    return result.recordset;
  } catch (err) {
    console.error(err);
  } finally {
    await nestdb.close();
  }
}

async findAllEmployee(): Promise<any[]> {
  try {
    await nestdb.connect();
    const result = await nestdb.query('SELECT * FROM Employee');
    console.log(result);
    return result.recordset;
  } catch (err) {
    console.error(err);
  } finally {
    await nestdb.close();
  }
}


async add(database2:Employee): Promise<any[]> {
  try {
    await nestdb.connect();
   // let q =`insert into student values(104,"purva","delhi")`;
    const q = `insert into Employee values(${database2.Emp_id},'${database2.Emp_Name}',${database2.Age},'${database2.Emp_dept}')`;
    console.log(q);
    const result=await nestdb.query(q);

    console.log(result);
    return result.recordset;
  } catch (err){
    console.error(err);
  } finally {
    await nestdb.close();
  }

}

async update(db2:Employee2): Promise<any[]> {
  try {
    await nestdb.connect();
   // let q =`insert into student values(104,"purva","delhi")`;
    const q = `update Employee set Emp_Name='${db2.Emp_Name}', Age=${db2.Age},Emp_dept='${db2.Emp_dept}' where Emp_ID=${db2.Emp_id}`;
    console.log(q);
    const result=await nestdb.query(q);

    console.log(result);
    return result.recordset;
  } catch (err){
    console.error(err);
  } finally {
    await nestdb.close();
  }

}



async delete(Emp_ID:any): Promise<any[]> {
  try {
    await nestdb.connect();
   // let q =`insert into student values(104,"purva","delhi")`;
    const result = await nestdb.query(`delete from Employee  where Emp_ID=${Emp_ID}`);
    console.log(result);
    return result.recordset;
  } catch (err){
    console.error(err);
  } finally {
    await nestdb.close();
  }

}
}