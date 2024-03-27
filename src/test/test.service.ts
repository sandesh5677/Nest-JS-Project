import { Injectable } from '@nestjs/common';
import { nestdb } from 'src/db.config';


@Injectable()
export class TestService {



      addata(){
          return 'hello'
      }











  async getAlltask(Emp_id : any)
  {
   // console.log(Emp_id)
    await nestdb.connect();
    const result = await nestdb.query(
      `SELECT * FROM Employee where Emp_ID=${Emp_id}`,
    );
    await nestdb.close();
    return result.recordset;
  }
  
}
