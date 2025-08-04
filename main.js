const express= require("express");
const app=express();
const port=3000;
app.use(express.json());

// GET all users
// عشان نجيب كل البيانات ولما المستخدم يطلب بيانات
app.get("/",(req,res)=>{
    res.send("Hello, This Is A GET Reqesr!");
});

// POST a new user
// عشان نضيف حاجه جديده زي(مستخدم,منتج)وهكذا 
app.post("/message",(req,res)=>{
    const {name,message}=req.body;
    res.send(`Received Message From ${name}: ${message}`);
});

// PUT update by id
//id عشان نعدل بيانات موجوده عن طريق ال 
app.put("/update-user/:id",(req,res)=>{
    const user=req.params.id;
    const UpdatedData=req.body;
    res.send(`User ${user} Updated With ${JSON.stringify(UpdatedData)}`);
});

// DELETE user by id
// id عشان نحذف عنصر معين ب 
app.delete("/delete-user/:id",(req,res)=>{
    const userId=req.params.id;
    res.send(`User${userId} Deleted`)
});

app.listen(3000);