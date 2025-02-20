import { NextResponse } from "next/server";

export async function GET() {  // é uma função asincrona (não é sincronizado), tem que mandar esperar
    return NextResponse.json({
        mensagem: "Olá Next!!!" 
    });
}


export async function POST(){
    return NextResponse .json({
        mensagem: "Olá NEXT - POST!!!"
    })
}
