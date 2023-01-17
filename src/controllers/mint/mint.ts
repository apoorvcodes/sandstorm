import { Request, Response } from 'express';
import { Buidl } from 'src/schema/buidlSchema';
import { User } from 'src/schema/userSchema';
export async function mintNft(req: Request, res: Response) {
 const buidl = req.params.org;
 const user = req.params.user;
 const data = await Buidl.findOne({id : buidl});
 if(!data) {
    res.status(400).json({err: "There is no buidl found with this id"});
    return
 }
 data.members.forEach(async(v:any) => {
    if(v.id === user){
        const userData = await User.findOne({id: user});
        
        res.status(200).json({ data : userData})
    }
 });
}
