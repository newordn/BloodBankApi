const user= async (parent,args,context,info)=>{
    const image = await context.storeUpload(args.image)
    const user = await context.prisma.createUser({...args,image:image.path})
    return user
}

module.exports={
    user
}