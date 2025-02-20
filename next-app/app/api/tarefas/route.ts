import { NextResponse } from "next/server";

let tasks = [
    {id: 1, title: 'Aprender NextJS'},
    {id: 2, title: 'Criar API REST'},
];

export async function GET() {  // é uma função asincrona (não é sincronizado), tem que mandar esperar
    return NextResponse.json(tasks);
}


export async function POST(request: Request){
    const data = await request.json()
    tasks.push(data)
    return NextResponse .json(tasks);
}
