//next.js supports the following methods:

//http://localhost:3000/api/users
export async function GET(request) {
    return new Response("Hello, Next.js API Route!");
}

export async function POST(request) {
    const data = await request.json();
    return new Response(`Received data: ${JSON.stringify(data)}`);
}

export async function PUT(request) {
    const data = await request.json();
    return new Response(`Updated data: ${JSON.stringify(data)}`);
}

export async function DELETE(request) {
    return new Response("Deleted resource");
}

export async function PATCH(request) {
    const data = await request.json();
    return new Response(`Patched data: ${JSON.stringify(data)}`);
}

export async function OPTIONS(request) {
    return new Response("Allowed methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
}   

export async function HEAD(request) {
    return new Response(null, { status: 200 });
}
