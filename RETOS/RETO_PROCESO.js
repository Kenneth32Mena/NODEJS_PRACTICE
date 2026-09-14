process.stdout.write(`Hola ${process.argv[2]},¿Cuantos años tienes? `)
process.stdin.on('data', data => {
    process.stdout.write(`Hola ${process.argv[2]}, tienes ${String(data).trim()} años!\n`)
    process.exit();
});
process.on('exit', () => {
    process.stdout.write(`\nFin del programa.....\n`)
});