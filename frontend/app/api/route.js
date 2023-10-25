import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const result  = await dbQuery({
        sql: "SELECT * FROM docs",
        values: []
    });
    return NextResponse.json(result)

}

export async function POST(req, res) {
    if (req.method === "POST") {
        try {
    
            const body = await req.json();
  const { title, content} = body;


        
            await dbQuery({
                sql: "INSERT INTO docs (docTitle, docContent) VALUES (?, ?)",
                values: [title, content],
            });

            return NextResponse.json({ success: true, message: "Data sparad i databasen" });
        } catch (error) {
            console.error("Fel vid POST-förfrågan:", error);
            return NextResponse.json({ success: false, message: "Något gick fel" });
        }
    }

    return NextResponse.error(405, "Method Not Allowed");
}

export async function DELETE(req, res) {
    if (req.method === "DELETE") {
        try {
            // Hämta den id du vill ta bort från förfrågan (t.ex., req.query.id).
            const id = req.query.id;

            // Utför en DELETE-operation i din databas med det angivna id.
            await dbQuery({
                sql: "DELETE FROM docs WHERE id = ?",
                values: [id],
            });

            return NextResponse.json({ success: true, message: "Data raderad från databasen" });
        } catch (error) {
            console.error("Fel vid DELETE-förfrågan:", error);
            return NextResponse.json({ success: false, message: "Något gick fel" });
        }
    }

    return NextResponse.error(405, "Method Not Allowed");
}



