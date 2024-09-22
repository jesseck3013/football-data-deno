const encoder = new TextEncoder();

export async function writeFile(name, data) {
    const dataStr = JSON.stringify(data);
    await Deno.writeFile(
        `./examples/data/${name}.json`,
        encoder.encode(dataStr),
    );
    console.log(`task finished: ${name}`);
}
