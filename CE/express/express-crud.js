import express from 'express';
const user=[{
    id:1,
    name:'Aryan',
    age:30
}]
const app=express();
const port=3000;
app.get('/', (req, res) => {
    res.send(user)
});
app.use(express.json());
app.post('/api/createUser', (req, res) => {
    const {name,age}=req.body;
    const newid=user.length>0 ? user[user.length-1].id+1 : 1;

    user.push({ id: newid, name, age });
    res.send("New user created sucessfully")
});
app.get('/api/users/:id', (req, res) => {
    const {id}=req.params;
    const users=user.find(users => users.id==id);
    res.send(users);
}
);
app.patch('/api/updateUsers/:id', (req, res) => {
    const {id}=req.params;
    const {name}=req.body;
    const index=user.findIndex(users => users.id==id);
    user.splice(index,1);
    res.send("users deleted sucessfully");
}
);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});