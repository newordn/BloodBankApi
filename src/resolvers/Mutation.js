const user= async (parent,args,context,info)=>{
    let user
    if(args.image!=null)
    {
    const image = await context.storeUpload(args.image)
     user = await context.prisma.createUser({...args,image:image.path})
    }
    else
     user = await context.prisma.createUser({...args,image:""})
    return user
}

module.exports={
    user
}