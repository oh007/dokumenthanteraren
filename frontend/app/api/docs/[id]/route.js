import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  console.log(params, id, "HÄR!!")
  try {
    // Använd SQL-förfrågan för att ta bort posten med det angivna ID
    const sql = 'DELETE FROM docs WHERE id = ?';
    const values = [parseInt(id)];

    const result = await dbQuery({ sql, values });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Fel vid DELETE-förfrågan:', error);
    return NextResponse.json({ error: 'Något gick fel' }, { status: 500 });
  }
}

