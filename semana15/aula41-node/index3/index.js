const string = [
    process.argv[2],
    process.argv[3],
    process.argv[4],
    process.argv[5],
    process.argv[6]
]


const AdicionaNovaTarefa = () => {
    string.push()
    console.log("Tarefa adicionada com sucesso!")
    console.table(string)
}

AdicionaNovaTarefa(process.argv[2])

